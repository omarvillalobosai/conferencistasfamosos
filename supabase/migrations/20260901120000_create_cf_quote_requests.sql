-- Solicitudes de cotización del wizard principal (reemplaza el webhook de Make, que dejó de funcionar).
-- Sigue el mismo patrón de seguridad que cf_newsletter_subscribers: sin acceso público directo,
-- toda escritura pasa por la edge function quote-request-submit (service_role), que además
-- envía la notificación por email a soporte@omv.mx.

CREATE TABLE public.cf_quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  social_media text,
  event_type text,
  speaker_focus text,
  specific_objectives text,
  event_intentions text,
  budget text,
  pitch text,
  status text NOT NULL DEFAULT 'new',
  notified_at timestamptz,
  notify_error text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.cf_quote_requests TO service_role;

ALTER TABLE public.cf_quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service role manages quote requests"
  ON public.cf_quote_requests
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE TRIGGER cf_quote_requests_updated_at
  BEFORE UPDATE ON public.cf_quote_requests
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX cf_quote_requests_created_at_idx
  ON public.cf_quote_requests (created_at DESC);

CREATE INDEX cf_quote_requests_budget_idx
  ON public.cf_quote_requests (budget);
