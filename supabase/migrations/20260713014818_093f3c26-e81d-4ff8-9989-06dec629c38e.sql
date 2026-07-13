CREATE TABLE public.speaker_management_applications (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name text NOT NULL,
  email text NOT NULL,
  whatsapp text,
  country text,
  experience_level text,
  experience_years text,
  website text,
  topics text,
  video_url text,
  management_types text[] DEFAULT '{}'::text[],
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.speaker_management_applications TO anon;
GRANT INSERT, SELECT, UPDATE, DELETE ON public.speaker_management_applications TO authenticated;
GRANT ALL ON public.speaker_management_applications TO service_role;

ALTER TABLE public.speaker_management_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an application"
ON public.speaker_management_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(full_name) BETWEEN 1 AND 150
  AND char_length(email) BETWEEN 3 AND 254
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND (whatsapp IS NULL OR char_length(whatsapp) <= 50)
  AND (country IS NULL OR char_length(country) <= 100)
  AND (website IS NULL OR char_length(website) <= 500)
  AND (topics IS NULL OR char_length(topics) <= 500)
  AND (video_url IS NULL OR char_length(video_url) <= 500)
  AND (message IS NULL OR char_length(message) <= 2000)
);

CREATE POLICY "Admins can view applications"
ON public.speaker_management_applications
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update applications"
ON public.speaker_management_applications
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete applications"
ON public.speaker_management_applications
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_speaker_management_applications_updated_at
BEFORE UPDATE ON public.speaker_management_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();