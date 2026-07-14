import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const adminToken = Deno.env.get('NEWSLETTER_ADMIN_TOKEN');
  const provided = req.headers.get('x-admin-token');
  if (!adminToken || provided !== adminToken) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  const url = new URL(req.url);
  const action = url.searchParams.get('action') ?? 'overview';

  try {
    if (action === 'overview') {
      const [subs, log, failed] = await Promise.all([
        supabase
          .from('cf_newsletter_subscribers')
          .select('id, name, email, status, last_sent_at, last_speaker_slug, send_count, created_at')
          .order('created_at', { ascending: false })
          .limit(500),
        supabase
          .from('cf_newsletter_send_log')
          .select('id, subscriber_id, post_slug, speaker_slug, status, error, created_at')
          .order('created_at', { ascending: false })
          .limit(200),
        supabase
          .from('cf_newsletter_send_log')
          .select('id, subscriber_id, post_slug, speaker_slug, error, created_at')
          .eq('status', 'failed')
          .order('created_at', { ascending: false })
          .limit(100),
      ]);

      const errAny = subs.error || log.error || failed.error;
      if (errAny) throw errAny;

      const active = (subs.data ?? []).filter((s: any) => s.status === 'active').length;
      const unsub = (subs.data ?? []).filter((s: any) => s.status !== 'active').length;

      return new Response(
        JSON.stringify({
          stats: {
            total: subs.data?.length ?? 0,
            active,
            unsubscribed: unsub,
            recentSends: log.data?.length ?? 0,
            failedSends: failed.data?.length ?? 0,
          },
          subscribers: subs.data ?? [],
          recentLog: log.data ?? [],
          failedLog: failed.data ?? [],
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    if (action === 'subscriber-log') {
      const id = url.searchParams.get('id');
      if (!id) {
        return new Response(JSON.stringify({ error: 'id required' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const { data, error } = await supabase
        .from('cf_newsletter_send_log')
        .select('*')
        .eq('subscriber_id', id)
        .order('created_at', { ascending: false })
        .limit(200);
      if (error) throw error;
      return new Response(JSON.stringify({ log: data ?? [] }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Unknown action' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('newsletter-admin error', err);
    return new Response(
      JSON.stringify({ error: 'Internal error', details: String(err?.message ?? err) }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
