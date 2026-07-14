
# Newsletter "Frases que Inspiran"

Sistema de suscripción con captura de nombre + email y envío automático cada 3 días de una frase de un conferencista del blog, alternando entre Omar Villalobos y el resto de speakers. Todas las tablas nuevas usan el prefijo `cf_` para quedar agrupadas en el dashboard Supabase.

## 1. UI de suscripción (llamativa)

Nuevo componente `src/components/NewsletterSection.tsx` con estética cinematográfica alineada al sitio:
- Fondo oscuro con glow naranja radial (mismo lenguaje visual que `CursosCta`)
- Headline editorial: *"Una frase. Cada 3 días. De los mejores del escenario."*
- Sub: beneficio breve
- Form horizontal: input **Nombre** + input **Email** + botón "Suscribirme"
- Validación con Zod (nombre min 2, email válido)
- Estados: loading, éxito (mensaje + confetti sutil), error (toast)
- Nota: "Puedes darte de baja cuando quieras"

Se inserta en:
- `src/pages/Index.tsx` antes de `RequestQuoteSection`
- `src/pages/Blog.tsx` al final del grid

## 2. Base de datos (prefijo `cf_`)

Migración con dos tablas nuevas:

**`cf_newsletter_subscribers`**
- `id` uuid pk
- `name` text
- `email` text unique
- `status` text default `'active'` (active/unsubscribed)
- `last_sent_at` timestamptz
- `last_speaker_slug` text
- `send_count` int default 0
- `unsubscribe_token` uuid default `gen_random_uuid()`
- `created_at`, `updated_at`

**`cf_newsletter_send_log`** (auditoría)
- `id`, `subscriber_id`, `post_slug`, `speaker_slug`, `sent_at`, `status`, `error`

RLS + GRANTs:
- Escritura pública **solo** vía edge function (service_role). El INSERT desde el navegador pasa por la edge function, no por PostgREST directo.
- Grants: `service_role` full; `anon` sin acceso.

## 3. Edge functions

**`newsletter-subscribe`** (`supabase/functions/newsletter-subscribe/index.ts`)
- CORS + validación Zod (name, email)
- Upsert por email (reactiva si estaba unsubscribed)
- Envía email de bienvenida vía Brevo con la primera frase (Omar Villalobos)
- Usa `BREVO_API_KEY` (ya configurada) desde `agencia@conferencistasfamosos.com`

**`newsletter-send-scheduled`** (`supabase/functions/newsletter-send-scheduled/index.ts`)
- Selecciona `cf_newsletter_subscribers` con `status='active'` y (`last_sent_at IS NULL` OR `last_sent_at < now() - interval '3 days'`)
- Para cada suscriptor:
  - Alternancia: si `last_speaker_slug = 'omar-villalobos'` → elige un post aleatorio de otro speaker; si no → un post de Omar Villalobos
  - Envía email HTML brandeado (naranja/negro) con: frase destacada, nombre del conferencista, botón "Ver el video completo" → `https://conferencistasfamosos.com/blog/{slug}`, link de baja
  - Update `last_sent_at`, `last_speaker_slug`, `send_count`; insert en `cf_newsletter_send_log`

**`newsletter-unsubscribe`** (`supabase/functions/newsletter-unsubscribe/index.ts`)
- Recibe `token`, marca `status='unsubscribed'`

**Fuente de frases**: nuevo `supabase/functions/_shared/quotes.ts` con array `{ slug, speaker, speakerSlug, quote }` derivado de `blogPostsEnrichment.ts` (uso `keyPoints[0]` o el título del post como frase).

## 4. Cron

Vía `supabase--insert` (SQL con URL específica del proyecto, no migración) usando `pg_cron` + `pg_net`:
- Habilitar extensiones si no están activas
- Job diario a las 14:00 UTC que invoca `newsletter-send-scheduled`
- La función respeta internamente el intervalo de 3 días por suscriptor

## 5. Página de baja

`src/pages/NewsletterUnsubscribe.tsx` en ruta `/newsletter/unsubscribe?token=...`:
- Llama a `newsletter-unsubscribe`
- Muestra confirmación con estética del sitio
- Ruta agregada en `App.tsx` y `sitemap.xml`

## Notas técnicas

- Emails con HTML inline-styled (compatibilidad Gmail/Outlook)
- `from: ConferencistasFamosos <agencia@conferencistasfamosos.com>` vía Brevo
- Todas las llamadas del frontend van a edge functions (nunca escribe directo a la tabla), así RLS queda cerrada al público y no expongo datos
- La tabla existente `newsletter_subscribers` (compartida con otros proyectos) no se toca
