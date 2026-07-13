## Objetivo

Rediseñar la sección `/cursos` para que funcione como un sistema de **video-posts** basado en playlists de YouTube (mismo patrón que ya usa el blog), respetando los dos conceptos existentes:

- **Soy cliente** → videos para quienes van a contratar conferencistas.
- **Quiero ser conferencista** → videos para quienes quieren desarrollarse como speaker.

## Alcance de este paso

Arrancamos con la pestaña **"Quiero ser conferencista"** usando la playlist de Omar Villalobos que compartiste (15 videos). La pestaña **"Soy cliente"** queda lista estructuralmente pero vacía hasta que envíes su playlist. Después iremos agregando más playlists conforme las mandes.

## Qué se construye

1. **Nueva data source** `src/data/coursePosts.ts`
   - Interfaz `CoursePost { slug, category: 'cliente' | 'conferencista', speakerId, youtubeId, title, description, publishedAt }`.
   - Sembrado con los 15 videos de Omar Villalobos en categoría `conferencista`.

2. **Nueva ruta dinámica** `/cursos/:slug` → `src/pages/CoursePost.tsx`
   - Reproductor embebido de YouTube, título, descripción, CTA de cotización (`QuoteWizard`), videos relacionados de la misma categoría, y SEO con `VideoObject` JSON-LD.
   - Registrada en `src/App.tsx` antes del catch-all.

3. **Refactor de `/cursos`** (`src/pages/Cursos.tsx` + `src/components/cursos/CoursesTabs.tsx`)
   - Reemplazar el contenido actual estático de cursos por un grid de tarjetas de video (thumbnail de YouTube + título + speaker) filtradas por la pestaña activa (`cliente` / `conferencista`).
   - Buscador simple por título (como en el Blog).
   - Cada tarjeta linkea a `/cursos/:slug`.
   - Se conservan `CursosHero`, `SoyConferencistaSection` y `CursosCta`.
   - Se elimina el flujo de registro/gate premium (`CourseRegistrationDialog`, `useCourseRegistration`, confetti) de esta sección para que la experiencia sea la misma del blog: acceso directo al video. `/cursos-premium` no se toca.

4. **SEO**
   - Agregar las 15 URLs `/cursos/omar-villalobos-...` a `public/sitemap.xml`.
   - `<Helmet>` por post con canonical y OG únicos.

## Detalles técnicos

- Slug: `omar-villalobos-<slug-del-titulo>` (kebab-case, sin acentos, truncado ~60 chars) — mismo esquema del blog.
- Los componentes actuales de "cursos premium" (`CursosPremium.tsx`, `premium/*`, `courseCategories.ts`) **no** se modifican.
- Descripciones: para arrancar uso los títulos como descripción corta; podemos enriquecerlas después si quieres.

## Diagrama

```text
/cursos
 ├── Hero
 ├── Tabs [Soy cliente | Quiero ser conferencista]
 │     └── Grid de VideoPostCard (filtrado por categoría)
 │           └── click → /cursos/:slug
 ├── SoyConferencistaSection
 └── CursosCta
```

## Pregunta abierta (no bloqueante)

La pestaña "Soy cliente" quedará vacía hasta que me pases su playlist. ¿La dejo con un placeholder ("Próximamente") o la oculto por ahora?
