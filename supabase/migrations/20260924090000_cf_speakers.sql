-- Hub: conferencistas, archivos y bitácora. Aplicar DESPUÉS de cf_app_hub.
-- Proyecto: ythqjhiyavgpghmoreiz. Ejecutar completo en SQL Editor como postgres.
-- No modifica honorarios existentes. Se puede volver a ejecutar.
BEGIN;
CREATE TABLE IF NOT EXISTS public.cf_speakers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  name text NOT NULL CHECK (length(trim(name)) > 0),
  fee_amount numeric CHECK (fee_amount >= 0),
  fee_currency text NOT NULL DEFAULT 'MXN',
  fee_note text,
  conditions text,
  manager_name text,
  manager_phone text,
  manager_email text,
  notes text,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS public.cf_speaker_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  speaker_id uuid NOT NULL REFERENCES public.cf_speakers(id) ON DELETE RESTRICT,
  kind text NOT NULL CHECK (kind IN ('rider', 'propuesta', 'contrato', 'foto', 'otro')),
  name text NOT NULL,
  url text NOT NULL CHECK (url LIKE 'https://%'),
  public_id text NOT NULL,
  resource_type text NOT NULL,
  bytes bigint NOT NULL CHECK (bytes >= 0),
  uploaded_by uuid DEFAULT auth.uid(),
  hidden boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (speaker_id, public_id, resource_type)
);
CREATE TABLE IF NOT EXISTS public.cf_speaker_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  speaker_id uuid NOT NULL REFERENCES public.cf_speakers(id) ON DELETE RESTRICT,
  contact_id uuid REFERENCES public.cf_contacts(id) ON DELETE SET NULL,
  body text NOT NULL CHECK (length(trim(body)) > 0),
  source text NOT NULL CHECK (source IN ('whatsapp', 'manual')),
  created_by uuid DEFAULT auth.uid(),
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.cf_contacts ADD COLUMN IF NOT EXISTS speaker_id uuid REFERENCES public.cf_speakers(id) ON DELETE SET NULL;
CREATE INDEX IF NOT EXISTS cf_contacts_speaker_idx ON public.cf_contacts(speaker_id);
CREATE INDEX IF NOT EXISTS cf_speaker_files_visible_idx ON public.cf_speaker_files(speaker_id, created_at DESC) WHERE NOT hidden;
CREATE INDEX IF NOT EXISTS cf_speaker_notes_speaker_idx ON public.cf_speaker_notes(speaker_id, created_at DESC);

ALTER TABLE public.cf_speakers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cf_speaker_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cf_speaker_notes ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.cf_speakers, public.cf_speaker_files, public.cf_speaker_notes FROM PUBLIC, anon, authenticated;
GRANT SELECT, INSERT, UPDATE ON public.cf_speakers, public.cf_speaker_files, public.cf_speaker_notes TO authenticated;
GRANT ALL ON public.cf_speakers, public.cf_speaker_files, public.cf_speaker_notes TO service_role;
-- La FK no cambia el acceso del hub a contactos. Ninguna lectura anónima.
REVOKE ALL ON public.cf_contacts FROM anon;
DROP POLICY IF EXISTS "app users manage speakers" ON public.cf_speakers;
CREATE POLICY "app users manage speakers" ON public.cf_speakers FOR ALL TO authenticated
  USING (public.cf_is_app_user()) WITH CHECK (public.cf_is_app_user());
DROP POLICY IF EXISTS "app users manage speaker files" ON public.cf_speaker_files;
CREATE POLICY "app users manage speaker files" ON public.cf_speaker_files FOR ALL TO authenticated
  USING (public.cf_is_app_user()) WITH CHECK (public.cf_is_app_user());
DROP POLICY IF EXISTS "app users manage speaker notes" ON public.cf_speaker_notes;
CREATE POLICY "app users manage speaker notes" ON public.cf_speaker_notes FOR ALL TO authenticated
  USING (public.cf_is_app_user()) WITH CHECK (public.cf_is_app_user());

CREATE OR REPLACE FUNCTION public.cf_speakers_touch()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;
REVOKE EXECUTE ON FUNCTION public.cf_speakers_touch() FROM PUBLIC, anon, authenticated;
DROP TRIGGER IF EXISTS cf_speakers_touch ON public.cf_speakers;
CREATE TRIGGER cf_speakers_touch BEFORE UPDATE ON public.cf_speakers
  FOR EACH ROW EXECUTE FUNCTION public.cf_speakers_touch();

-- Semilla generada desde speakersData.ts usando getSpeakerSlug (14 registros en esta base).
INSERT INTO public.cf_speakers (slug, name) VALUES
  ('omar-villalobos', 'Omar Villalobos'),
  ('yordi-rosado', 'Yordi Rosado'),
  ('daniel-habif', 'Daniel Habif'),
  ('odin-dupeyron', 'Odin Dupeyron'),
  ('cesar-lozano', 'César Lozano'),
  ('ismael-cala', 'Ismael Cala'),
  ('carlos-paez', 'Carlos Páez'),
  ('victor-kuppers', 'Victor Kuppers'),
  ('adriana-macias', 'Adriana Macías'),
  ('gaby-vargas', 'Gaby Vargas'),
  ('elsa-punset', 'Elsa Punset'),
  ('marisa-lazo', 'Marisa Lazo'),
  ('vilma-nunez', 'Vilma Núñez'),
  ('claudia-lizaldi', 'Claudia Lizaldi')
ON CONFLICT (slug) DO NOTHING;
COMMIT;
