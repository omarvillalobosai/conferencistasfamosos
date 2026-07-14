
-- Subscribers
CREATE TABLE public.cf_newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  status text NOT NULL DEFAULT 'active',
  last_sent_at timestamptz,
  last_speaker_slug text,
  send_count integer NOT NULL DEFAULT 0,
  unsubscribe_token uuid NOT NULL DEFAULT gen_random_uuid() UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.cf_newsletter_subscribers TO service_role;

ALTER TABLE public.cf_newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service role manages subscribers"
  ON public.cf_newsletter_subscribers
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE TRIGGER cf_newsletter_subscribers_updated_at
  BEFORE UPDATE ON public.cf_newsletter_subscribers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX cf_newsletter_subscribers_status_last_sent_idx
  ON public.cf_newsletter_subscribers (status, last_sent_at);

-- Send log
CREATE TABLE public.cf_newsletter_send_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subscriber_id uuid REFERENCES public.cf_newsletter_subscribers(id) ON DELETE CASCADE,
  post_slug text,
  speaker_slug text,
  status text NOT NULL DEFAULT 'sent',
  error text,
  sent_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.cf_newsletter_send_log TO service_role;

ALTER TABLE public.cf_newsletter_send_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service role manages send log"
  ON public.cf_newsletter_send_log
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE INDEX cf_newsletter_send_log_subscriber_idx
  ON public.cf_newsletter_send_log (subscriber_id, sent_at DESC);
