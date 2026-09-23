-- Hub: candidatos a conferencista pedidos por clientes. Aplicar DESPUÉS de cf_speakers.
-- Añade etapa y perfil a cf_speakers y la tabla cf_speaker_requests (qué cliente pidió a quién).
-- Aditiva: no cambia filas existentes (quedan en etapa 'publicado'). Se puede volver a ejecutar.
BEGIN;
ALTER TABLE public.cf_speakers
  ADD COLUMN IF NOT EXISTS stage text NOT NULL DEFAULT 'publicado',
  ADD COLUMN IF NOT EXISTS youtube_channel text,
  ADD COLUMN IF NOT EXISTS website text,
  ADD COLUMN IF NOT EXISTS instagram text,
  ADD COLUMN IF NOT EXISTS specialty text,
  ADD COLUMN IF NOT EXISTS short_bio text,
  ADD COLUMN IF NOT EXISTS bio text,
  ADD COLUMN IF NOT EXISTS topics text[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS photo_url text,
  ADD COLUMN IF NOT EXISTS created_by uuid DEFAULT auth.uid();
ALTER TABLE public.cf_speakers DROP CONSTRAINT IF EXISTS cf_speakers_stage_check;
ALTER TABLE public.cf_speakers ADD CONSTRAINT cf_speakers_stage_check
  CHECK (stage IN ('candidato', 'evaluacion', 'listo', 'publicado'));
CREATE INDEX IF NOT EXISTS cf_speakers_stage_idx ON public.cf_speakers(stage);

CREATE TABLE IF NOT EXISTS public.cf_speaker_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  speaker_id uuid NOT NULL REFERENCES public.cf_speakers(id) ON DELETE CASCADE,
  contact_id uuid NOT NULL REFERENCES public.cf_contacts(id) ON DELETE CASCADE,
  note text,
  created_by uuid DEFAULT auth.uid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (speaker_id, contact_id)
);
CREATE INDEX IF NOT EXISTS cf_speaker_requests_contact_idx ON public.cf_speaker_requests(contact_id);
ALTER TABLE public.cf_speaker_requests ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.cf_speaker_requests FROM PUBLIC, anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.cf_speaker_requests TO authenticated;
GRANT ALL ON public.cf_speaker_requests TO service_role;
DROP POLICY IF EXISTS "app users manage speaker requests" ON public.cf_speaker_requests;
CREATE POLICY "app users manage speaker requests" ON public.cf_speaker_requests FOR ALL TO authenticated
  USING (public.cf_is_app_user()) WITH CHECK (public.cf_is_app_user());
COMMIT;
