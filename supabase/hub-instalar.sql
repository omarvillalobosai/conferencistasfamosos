-- Hub interno conferencistasfamosos.com/app
-- Solicitudes (cf_quote_requests) + base de contactos (cf_contacts) + bitácora de seguimiento (cf_contact_events).
-- Acceso: usuarios de Supabase Auth dados de alta en cf_app_users (allowlist). Nada es público.

-- 1. Allowlist de personas que pueden entrar al hub -------------------------------------------
CREATE TABLE IF NOT EXISTS public.cf_app_users (
  user_id uuid PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
  name text NOT NULL,
  role text NOT NULL DEFAULT 'equipo', -- 'dueno' | 'equipo'
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.cf_app_users ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.cf_app_users TO authenticated;
GRANT ALL ON public.cf_app_users TO service_role;

CREATE OR REPLACE FUNCTION public.cf_is_app_user()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.cf_app_users WHERE user_id = auth.uid());
$$;

DROP POLICY IF EXISTS "app users read own row" ON public.cf_app_users;
CREATE POLICY "app users read own row"
  ON public.cf_app_users FOR SELECT TO authenticated
  USING (user_id = auth.uid());

-- 2. Contactos --------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.cf_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  phone text,
  email text,
  city text,
  status text NOT NULL DEFAULT 'nuevo', -- nuevo | en_conversacion | propuesta | cliente | inactivo
  notes text,
  source text NOT NULL DEFAULT 'manual', -- manual | web
  quote_request_id uuid REFERENCES public.cf_quote_requests (id) ON DELETE SET NULL,
  last_contact_at timestamptz,
  status_updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS cf_contacts_email_unique
  ON public.cf_contacts (lower(email)) WHERE email IS NOT NULL AND email <> '';
CREATE INDEX IF NOT EXISTS cf_contacts_status_idx ON public.cf_contacts (status, updated_at DESC);

ALTER TABLE public.cf_contacts ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.cf_contacts TO authenticated;
GRANT ALL ON public.cf_contacts TO service_role;

DROP POLICY IF EXISTS "app users manage contacts" ON public.cf_contacts;
CREATE POLICY "app users manage contacts"
  ON public.cf_contacts FOR ALL TO authenticated
  USING (public.cf_is_app_user())
  WITH CHECK (public.cf_is_app_user());

CREATE OR REPLACE FUNCTION public.cf_contacts_touch()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at := now();
  IF NEW.status IS DISTINCT FROM OLD.status THEN
    NEW.status_updated_at := now();
  END IF;
  RETURN NEW;
END;
$$;
DROP TRIGGER IF EXISTS cf_contacts_touch ON public.cf_contacts;
CREATE TRIGGER cf_contacts_touch
  BEFORE UPDATE ON public.cf_contacts
  FOR EACH ROW EXECUTE FUNCTION public.cf_contacts_touch();

-- 3. Bitácora de seguimiento (notas, WhatsApp, correo, rider, info, contrato, cambios de estado) -
CREATE TABLE IF NOT EXISTS public.cf_contact_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id uuid NOT NULL REFERENCES public.cf_contacts (id) ON DELETE CASCADE,
  kind text NOT NULL, -- nota | whatsapp | correo | rider | info | contrato | estado | solicitud
  detail text,
  created_by uuid DEFAULT auth.uid(),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS cf_contact_events_contact_idx
  ON public.cf_contact_events (contact_id, created_at DESC);

ALTER TABLE public.cf_contact_events ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, DELETE ON public.cf_contact_events TO authenticated;
GRANT ALL ON public.cf_contact_events TO service_role;

DROP POLICY IF EXISTS "app users manage events" ON public.cf_contact_events;
CREATE POLICY "app users manage events"
  ON public.cf_contact_events FOR ALL TO authenticated
  USING (public.cf_is_app_user())
  WITH CHECK (public.cf_is_app_user());

-- Registrar la última vez que se contactó a alguien cuando se anota un envío.
CREATE OR REPLACE FUNCTION public.cf_contact_events_after_insert()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.kind IN ('whatsapp', 'correo', 'rider', 'info', 'contrato') THEN
    UPDATE public.cf_contacts SET last_contact_at = NEW.created_at WHERE id = NEW.contact_id;
  END IF;
  RETURN NEW;
END;
$$;
DROP TRIGGER IF EXISTS cf_contact_events_after_insert ON public.cf_contact_events;
CREATE TRIGGER cf_contact_events_after_insert
  AFTER INSERT ON public.cf_contact_events
  FOR EACH ROW EXECUTE FUNCTION public.cf_contact_events_after_insert();

-- 4. Solicitudes: el equipo del hub puede leerlas y cambiar su estado ---------------------------
ALTER TABLE public.cf_quote_requests ADD COLUMN IF NOT EXISTS source text;
ALTER TABLE public.cf_quote_requests ADD COLUMN IF NOT EXISTS lead_stage text;

GRANT SELECT ON public.cf_quote_requests TO authenticated;
GRANT UPDATE (status, lead_stage, updated_at) ON public.cf_quote_requests TO authenticated;

DROP POLICY IF EXISTS "app users read quote requests" ON public.cf_quote_requests;
CREATE POLICY "app users read quote requests"
  ON public.cf_quote_requests FOR SELECT TO authenticated
  USING (public.cf_is_app_user());

DROP POLICY IF EXISTS "app users update quote requests" ON public.cf_quote_requests;
CREATE POLICY "app users update quote requests"
  ON public.cf_quote_requests FOR UPDATE TO authenticated
  USING (public.cf_is_app_user())
  WITH CHECK (public.cf_is_app_user());

-- 5. Cada solicitud nueva crea o actualiza su contacto (y deja rastro en la bitácora) -----------
CREATE OR REPLACE FUNCTION public.cf_sync_contact_from_quote()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  cid uuid;
BEGIN
  SELECT id INTO cid FROM public.cf_contacts
   WHERE email IS NOT NULL AND lower(email) = lower(NEW.email)
   LIMIT 1;

  IF cid IS NULL THEN
    INSERT INTO public.cf_contacts (name, company, phone, email, source, quote_request_id, status)
    VALUES (NEW.name, NEW.company, NEW.phone, NEW.email, 'web', NEW.id, 'nuevo')
    RETURNING id INTO cid;
  ELSE
    UPDATE public.cf_contacts
       SET quote_request_id = NEW.id,
           phone = COALESCE(NULLIF(phone, ''), NEW.phone),
           company = COALESCE(NULLIF(company, ''), NEW.company)
     WHERE id = cid;
  END IF;

  INSERT INTO public.cf_contact_events (contact_id, kind, detail, created_by)
  VALUES (cid, 'solicitud',
          'Solicitud de cotización desde la web · ' || COALESCE(NEW.event_type, 'evento')
          || ' · presupuesto: ' || COALESCE(NEW.budget, 'sin definir'),
          NULL);
  RETURN NEW;
END;
$$;
DROP TRIGGER IF EXISTS cf_quote_requests_sync_contact ON public.cf_quote_requests;
CREATE TRIGGER cf_quote_requests_sync_contact
  AFTER INSERT ON public.cf_quote_requests
  FOR EACH ROW EXECUTE FUNCTION public.cf_sync_contact_from_quote();

-- 6. Traer al hub las solicitudes que ya existían -----------------------------------------------
INSERT INTO public.cf_contacts (name, company, phone, email, source, quote_request_id, status, created_at)
SELECT q.name, q.company, q.phone, q.email, 'web', q.id, 'nuevo', q.created_at
  FROM public.cf_quote_requests q
 WHERE NOT EXISTS (SELECT 1 FROM public.cf_contacts c WHERE lower(c.email) = lower(q.email))
 ORDER BY q.created_at;

-- 8. Alta de la cuenta admin del ecosistema en el hub ------------------------------------------
INSERT INTO public.cf_app_users (user_id, name, role)
SELECT id, 'Omar', 'dueno' FROM auth.users WHERE email = 'omv@mac.com'
ON CONFLICT (user_id) DO NOTHING;
-- (aplicado en vivo el 2026-09-22 vía MCP, incluida la alta de omv@mac.com)
