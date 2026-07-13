## Objetivo

Crear una nueva página dedicada — `/management` — enfocada a conferencistas que buscan **management de carrera**: manejo profesional, difusión de contenido, alianzas y colaboraciones. Va dirigida tanto a **speakers establecidos** que quieren un partner que potencie su carrera, como a **speakers nuevos** que necesitan apoyo integral para arrancar y crecer.

Además, se enlaza desde la sección "Soy conferencista" en `/cursos` y desde el Navbar.

## Propuesta de contenido de la página

Landing profesional orientada a captar aplicaciones de speakers:

1. **Hero**
   - Título: *"Management para conferencistas de habla hispana"*
   - Subtítulo: *"Impulsamos tu carrera como speaker — ya sea que estés empezando o que quieras llegar al siguiente nivel."*
   - CTA principal: "Postúlate ahora" → scroll al formulario.
   - CTA secundario: WhatsApp.

2. **Para quién es** (2 columnas destacadas)
   - **Speakers establecidos** → escalar bookings, expandir a nuevos mercados, contenido y alianzas estratégicas.
   - **Speakers emergentes / nuevos** → construcción de carrera desde cero: posicionamiento, marca personal, primeras conferencias, mentoría.

3. **¿Qué incluye el management?** (grid de 6 tarjetas con iconos)
   - Representación ante clientes corporativos.
   - Estrategia de carrera y posicionamiento.
   - Publicación de tu perfil y contenido en la plataforma.
   - Difusión en blog, redes y newsletter.
   - Alianzas con marcas y colaboraciones con otros speakers.
   - Mentoría y formación (para speakers nuevos).

4. **Cómo trabajamos** (proceso en 4 pasos)
   Aplicas → Evaluamos perfil → Diseñamos plan de management → Activamos tu carrera y contenido.

5. **Modalidades de management** (3 tracks, sin precios)
   - **Management integral** — gestión completa, exclusiva.
   - **Management por proyecto** — colaboración caso por caso / por evento.
   - **Programa Speaker Nuevo** — onboarding + mentoría + primeros bookings para speakers emergentes.

6. **Beneficios concretos** (bullets, con números placeholder que confirmarás luego).

7. **Testimonios cortos** (placeholder — se llenan después).

8. **Formulario de aplicación** — corazón de la página. Campos:
   - Nombre completo
   - Email
   - WhatsApp
   - País / ciudad
   - Nivel de experiencia: *Emergente / En crecimiento / Establecido* (select)
   - Años de experiencia
   - Sitio web / redes principales (URL)
   - Temas / especialidad
   - Link a video de conferencia (YouTube)
   - Modalidad de management de interés (checkboxes: integral / por proyecto / programa speaker nuevo / alianza de contenido)
   - Mensaje libre (textarea)
   - Envío → guarda en Supabase (`speaker_management_applications`) + toast de éxito.

9. **FAQ corto** (4–6 preguntas: ¿tiene costo?, ¿tiempo de respuesta?, ¿acepto speakers sin experiencia?, ¿puedo mantener otros representantes?, etc.).

10. **CTA final** con WhatsApp.

## Backend (Supabase)

Nueva tabla `public.speaker_management_applications`:

- `id uuid pk`, `created_at timestamptz default now()`
- `full_name text not null`, `email text not null`, `whatsapp text`, `country text`
- `experience_level text` (`emergente` | `crecimiento` | `establecido`)
- `experience_years text`
- `website text`, `topics text`
- `video_url text`
- `management_types text[]`
- `message text`
- `status text default 'new'`

Políticas RLS:
- INSERT abierto a `anon` (formulario público).
- SELECT solo con rol admin (reutiliza `has_role` + `user_roles`).
- GRANTs: `INSERT` a `anon` y `authenticated`, `ALL` a `service_role`.

## Cambios en código

1. Crear `src/pages/SpeakerManagement.tsx`.
2. Componentes bajo `src/components/management/`:
   - `ManagementHero.tsx`
   - `WhoIsItFor.tsx` (speakers establecidos vs emergentes)
   - `WhatWeOffer.tsx`
   - `HowWeWork.tsx`
   - `ManagementTracks.tsx`
   - `ManagementFAQ.tsx`
   - `ManagementApplicationForm.tsx` (react-hook-form + zod, insert a Supabase).
3. Ruta `/management` en `src/App.tsx` antes del catch-all.
4. Enlaces:
   - Botón "Ver todos los cursos" en `SoyConferencistaSection.tsx` → cambia a "Aplicar a Management" (a `/management`).
   - Nuevo item **"Management"** en `mainNavItems` (`src/config/navigation.ts`).
5. Agregar `/management` a `public/sitemap.xml` y a `public/llms.txt`.
6. `<Helmet>` con título, meta description, canonical y OG únicos.

## Diseño

- Paleta actual: naranja / blanco / gris, tipografía Montserrat.
- Hero con imagen o gradiente sutil naranja. Sin morados.
- Cards con la misma estética del resto del sitio (bordes suaves, hover elevado).

## Preguntas abiertas

1. ¿Las aplicaciones deben notificarse también por correo/WhatsApp automáticamente (edge function), o basta con revisarlas desde Supabase?
2. ¿Agrego "Management" al menú principal (Navbar) o solo desde la sección de conferencistas?
3. Testimonios y beneficios numéricos: ¿placeholder o me pasas los reales antes?
