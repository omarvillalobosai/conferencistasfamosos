CREATE FUNCTION public.confamosos_observer_authorized(p_key text) RETURNS boolean LANGUAGE sql SECURITY DEFINER SET search_path='' AS $$
 SELECT EXISTS(SELECT 1 FROM vault.decrypted_secrets WHERE name='omvhub_observer_confamosos' AND decrypted_secret=p_key AND length(p_key)>=32);
$$;
REVOKE ALL ON FUNCTION public.confamosos_observer_authorized(text) FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.confamosos_observer_authorized(text) TO service_role;
CREATE FUNCTION public.confamosos_supervision_snapshot() RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE total bigint; active bigint; due bigint; overdue bigint; failed bigint; notices bigint; running boolean;
BEGIN
 SELECT count(*),count(*) FILTER(WHERE status='active'),count(*) FILTER(WHERE status='active' AND (last_sent_at IS NULL OR last_sent_at<now()-interval '3 days')),
 count(*) FILTER(WHERE status='active' AND ((last_sent_at IS NULL AND created_at<now()-interval '25 hours') OR last_sent_at<now()-interval '4 days'))
 INTO total,active,due,overdue FROM public.cf_newsletter_subscribers;
 SELECT count(*) INTO failed FROM public.cf_newsletter_send_log f WHERE status='failed' AND sent_at>now()-interval '24 hours'
 AND NOT EXISTS(SELECT 1 FROM public.cf_newsletter_send_log s WHERE s.subscriber_id=f.subscriber_id AND s.status='sent' AND s.sent_at>f.sent_at);
 SELECT count(*) INTO notices FROM public.cf_quote_requests WHERE notified_at IS NULL AND created_at<now()-interval '1 hour';
 SELECT EXISTS(SELECT 1 FROM cron.job j WHERE j.jobname='cf-newsletter-daily' AND j.active) INTO running;
 RETURN jsonb_build_object('processes',jsonb_build_array(jsonb_build_object('id','cf-newsletter','name','Newsletter de conferencistas','optin','Newsletter del sitio',
 'metrics',jsonb_build_array(jsonb_build_object('label','Suscripciones','value',total),jsonb_build_object('label','Activas','value',active),jsonb_build_object('label','Pendientes del próximo ciclo','value',due)),
 'note','Cadencia de tres días; programación diaria. No se ha verificado atribución a cada formulario. Control remoto todavía no habilitado.')),
 'checks',jsonb_build_array(
 jsonb_build_object('id','newsletter-overdue','title','Newsletter fuera de su ventana de envío','health',CASE WHEN overdue>0 THEN 'degraded' ELSE 'ok' END,'summary',overdue||' suscripciones activas atrasadas, con margen para la ejecución diaria.'),
 jsonb_build_object('id','newsletter-errors','title','Fallos recientes sin éxito posterior','health',CASE WHEN failed>0 THEN 'degraded' ELSE 'ok' END,'summary',failed||' registros fallidos en las últimas 24 horas.'),
 jsonb_build_object('id','request-notices','title','Solicitudes sin notificación confirmada','health',CASE WHEN notices>0 THEN 'degraded' ELSE 'ok' END,'summary',notices||' solicitudes de más de una hora sin notified_at. Solo se observa el aviso del sitio; no se generan cotizaciones.'),
 jsonb_build_object('id','newsletter-schedule','title','Programación de newsletter','health',CASE WHEN running THEN 'ok' ELSE 'degraded' END,'summary',CASE WHEN running THEN 'Programación diaria activa; no acredita entrega efectiva.' ELSE 'Programación diaria no activa.' END),
 jsonb_build_object('id','provider-delivery','title','Entrega efectiva del proveedor','health','unknown','summary','El registro de envío no prueba recepción. Conciliación con el proveedor pendiente.')
 ));
END $$;
REVOKE ALL ON FUNCTION public.confamosos_supervision_snapshot() FROM PUBLIC,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.confamosos_supervision_snapshot() TO service_role;
