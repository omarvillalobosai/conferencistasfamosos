import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3.23.8';
import { renderQuoteEmail, sendBrevoEmail } from '../_shared/newsletter-email.ts';
import { pickQuote } from '../_shared/newsletter-quotes-loader.ts';

const BodySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().toLowerCase().email().max(254),
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: 'Datos inválidos', details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const { name, email } = parsed.data;

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    // Upsert subscriber (reactivate if previously unsubscribed)
    const { data: subscriber, error: upsertErr } = await supabase
      .from('cf_newsletter_subscribers')
      .upsert(
        { name, email, status: 'active' },
        { onConflict: 'email' },
      )
      .select('id, unsubscribe_token, last_speaker_slug')
      .single();

    if (upsertErr || !subscriber) {
      console.error('upsert failed', upsertErr);
      return new Response(
        JSON.stringify({ error: 'No se pudo guardar la suscripción' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    // Send welcome email with first quote (always Omar Villalobos)
    const quote = pickQuote(true);
    const html = renderQuoteEmail({
      name,
      quote: quote.quote,
      speakerName: quote.speakerName,
      postSlug: quote.postSlug,
      postTitle: quote.postTitle,
      unsubscribeToken: subscriber.unsubscribe_token,
      preheader: 'Bienvenido a Frases que Inspiran',
    });

    try {
      await sendBrevoEmail({
        to: email,
        toName: name,
        subject: `¡Bienvenido! Tu primera frase de ${quote.speakerName}`,
        html,
      });

      await supabase
        .from('cf_newsletter_subscribers')
        .update({
          last_sent_at: new Date().toISOString(),
          last_speaker_slug: quote.speakerSlug,
          send_count: 1,
        })
        .eq('id', subscriber.id);

      await supabase.from('cf_newsletter_send_log').insert({
        subscriber_id: subscriber.id,
        post_slug: quote.postSlug,
        speaker_slug: quote.speakerSlug,
        status: 'sent',
      });
    } catch (emailErr: any) {
      console.error('welcome email failed', emailErr);
      await supabase.from('cf_newsletter_send_log').insert({
        subscriber_id: subscriber.id,
        post_slug: quote.postSlug,
        speaker_slug: quote.speakerSlug,
        status: 'failed',
        error: String(emailErr?.message ?? emailErr).slice(0, 500),
      });
      // Subscription still succeeded; return success anyway
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('newsletter-subscribe error', err);
    return new Response(
      JSON.stringify({ error: 'Error interno', details: String(err?.message ?? err) }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
