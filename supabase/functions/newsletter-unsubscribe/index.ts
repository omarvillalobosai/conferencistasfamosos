import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3.23.8';

const TokenSchema = z.string().uuid();

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    let token = url.searchParams.get('token') ?? '';
    if (!token && (req.method === 'POST' || req.method === 'PUT')) {
      const body = await req.json().catch(() => ({}));
      token = body?.token ?? '';
    }

    const parsed = TokenSchema.safeParse(token);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: 'Token inválido' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    const { data, error } = await supabase
      .from('cf_newsletter_subscribers')
      .update({ status: 'unsubscribed' })
      .eq('unsubscribe_token', parsed.data)
      .select('email')
      .maybeSingle();

    if (error) {
      console.error('unsubscribe update failed', error);
      return new Response(
        JSON.stringify({ error: 'Error al procesar la baja' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    if (!data) {
      return new Response(
        JSON.stringify({ error: 'Token no encontrado' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    return new Response(JSON.stringify({ ok: true, email: data.email }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('newsletter-unsubscribe error', err);
    return new Response(
      JSON.stringify({ error: 'Error interno' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
