import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { renderQuoteEmail, sendBrevoEmail } from '../_shared/newsletter-email.ts';
import { pickQuote } from '../_shared/newsletter-quotes-loader.ts';

// Runs on a cron every day; sends only to subscribers whose last_sent_at is
// null or older than 3 days. Alternates between Omar Villalobos and others.
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString();

  const { data: subscribers, error } = await supabase
    .from('cf_newsletter_subscribers')
    .select('id, name, email, unsubscribe_token, last_sent_at, last_speaker_slug, send_count')
    .eq('status', 'active')
    .or(`last_sent_at.is.null,last_sent_at.lt.${threeDaysAgo}`)
    .limit(500);

  if (error) {
    console.error('fetch subscribers failed', error);
    return new Response(
      JSON.stringify({ error: 'fetch failed', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }

  let sent = 0;
  let failed = 0;

  for (const sub of subscribers ?? []) {
    // Alternate: if last was Omar, send another speaker; otherwise send Omar
    const preferOmar = sub.last_speaker_slug !== 'omar-villalobos';
    const quote = pickQuote(preferOmar);

    const html = renderQuoteEmail({
      name: sub.name,
      quote: quote.quote,
      speakerName: quote.speakerName,
      postSlug: quote.postSlug,
      postTitle: quote.postTitle,
      unsubscribeToken: sub.unsubscribe_token,
    });

    try {
      await sendBrevoEmail({
        to: sub.email,
        toName: sub.name,
        subject: `${quote.speakerName}: "${quote.quote.slice(0, 60)}${quote.quote.length > 60 ? '…' : ''}"`,
        html,
      });

      await supabase
        .from('cf_newsletter_subscribers')
        .update({
          last_sent_at: new Date().toISOString(),
          last_speaker_slug: quote.speakerSlug,
          send_count: (sub.send_count ?? 0) + 1,
        })
        .eq('id', sub.id);

      await supabase.from('cf_newsletter_send_log').insert({
        subscriber_id: sub.id,
        post_slug: quote.postSlug,
        speaker_slug: quote.speakerSlug,
        status: 'sent',
      });

      sent++;
    } catch (err: any) {
      console.error(`send failed for ${sub.email}`, err);
      failed++;
      await supabase.from('cf_newsletter_send_log').insert({
        subscriber_id: sub.id,
        post_slug: quote.postSlug,
        speaker_slug: quote.speakerSlug,
        status: 'failed',
        error: String(err?.message ?? err).slice(0, 500),
      });
    }
  }

  return new Response(
    JSON.stringify({ ok: true, considered: subscribers?.length ?? 0, sent, failed }),
    { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
  );
});
