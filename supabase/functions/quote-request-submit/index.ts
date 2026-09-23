import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3.23.8';
import { renderQuoteRequestEmail, sendBrevoEmail } from '../_shared/newsletter-email.ts';

// Presupuestos que consideramos "alto ticket" para destacar la notificación.
const HIGH_BUDGET_VALUES = new Set([
  '8000-15000',
  '15000-30000',
  'more-than-30000',
  'quality-investment',
]);

const SUPPORT_EMAIL = 'soporte@omv.mx';

const BodySchema = z.object({
  name: z.string().trim().min(1).max(150),
  email: z.string().trim().toLowerCase().email().max(254),
  phone: z.string().trim().max(50).optional().default(''),
  company: z.string().trim().max(200).optional().default(''),
  socialMedia: z.string().trim().max(300).optional().default(''),
  eventType: z.string().trim().max(200).optional().default(''),
  speakerFocus: z.string().trim().max(300).optional().default(''),
  specificObjectives: z.string().trim().max(500).optional().default(''),
  eventIntentions: z.string().trim().max(500).optional().default(''),
  budget: z.string().trim().max(100).optional().default(''),
  pitch: z.string().trim().max(3000).optional().default(''),
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

    const data = parsed.data;
    const isHighBudget = HIGH_BUDGET_VALUES.has(data.budget);

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data: row, error: insertErr } = await supabase
      .from('cf_quote_requests')
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        social_media: data.socialMedia || null,
        event_type: data.eventType || null,
        speaker_focus: data.speakerFocus || null,
        specific_objectives: data.specificObjectives || null,
        event_intentions: data.eventIntentions || null,
        budget: data.budget || null,
        pitch: data.pitch || null,
      })
      .select('id')
      .single();

    if (insertErr || !row) {
      console.error('insert failed', insertErr);
      return new Response(
        JSON.stringify({ error: 'No se pudo guardar tu solicitud' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    // La notificación por email es best-effort: si falla, el lead ya quedó
    // guardado en cf_quote_requests y no se pierde.
    try {
      const html = renderQuoteRequestEmail({ ...data, isHighBudget });
      await sendBrevoEmail({
        to: SUPPORT_EMAIL,
        toName: 'Soporte OMV',
        subject: isHighBudget
          ? `🔥 Lead de alto presupuesto — ${data.name}${data.company ? ' (' + data.company + ')' : ''}`
          : `Nueva solicitud de cotización — ${data.name}`,
        html,
      });
      await supabase
        .from('cf_quote_requests')
        .update({ notified_at: new Date().toISOString() })
        .eq('id', row.id);
    } catch (emailErr: any) {
      console.error('notification email failed', emailErr);
      await supabase
        .from('cf_quote_requests')
        .update({ notify_error: String(emailErr?.message ?? emailErr).slice(0, 500) })
        .eq('id', row.id);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('quote-request-submit error', err);
    return new Response(
      JSON.stringify({ error: 'Error interno', details: String(err?.message ?? err) }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
