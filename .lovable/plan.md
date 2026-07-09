## Blog de videos por speaker (fase 1: Omar Villalobos)

Convertir el blog actual en un sistema de posts de video, cada uno con página propia, empezando con 10 videos de Omar Villalobos desde su playlist de YouTube.

### Estructura de datos

Crear `src/data/blogPosts.ts` con la interfaz:

```ts
interface BlogPost {
  id: string;              // slug único, ej: "omar-villalobos-como-vender-mas"
  speakerId: string;       // "omar-villalobos" (matches speakersData)
  speakerName: string;     // "Omar Villalobos"
  title: string;           // título del video
  description: string;     // 1-2 frases
  youtubeId: string;       // ID del video de YouTube
  publishedAt: string;     // fecha ISO
  category: string;        // ej: "Ventas", "Liderazgo", "Motivación"
}
```

10 posts iniciales de Omar Villalobos, obteniendo títulos y IDs desde la playlist `PLaM11WLrfXP1r_ylcd6hEVt8qLwORQh1T` vía scraping público (sin API key).

### Cambios de rutas

- `/blog` → grid de tarjetas de video (thumbnail de YouTube + título + speaker + categoría). Mantener el buscador existente y agregar filtro por speaker.
- `/blog/:slug` → **nueva página** con:
  - Video de YouTube embebido (responsive 16:9)
  - Título, fecha, categoría, badge del speaker
  - Descripción
  - Link al perfil del speaker (`/speaker/omar-villalobos`)
  - Botón "Contratar a este speaker" que abre `QuoteWizard`
  - Sección "Más videos de [Speaker]" con 3 posts relacionados
  - Helmet con title/description/canonical/OG únicos

### Archivos a tocar

- **Nuevo:** `src/data/blogPosts.ts` — datos de los 10 posts
- **Nuevo:** `src/pages/BlogPost.tsx` — página de detalle
- **Modificar:** `src/pages/Blog.tsx` — reemplazar contenido actual por grid de videos con filtro por speaker
- **Modificar:** `src/App.tsx` — agregar ruta `/blog/:slug`
- **Modificar:** `public/sitemap.xml` — agregar las 10 URLs de blog posts

### SEO

- Cada post: title `<60 chars`, description `<160 chars`, canonical, OG tags, JSON-LD `VideoObject` con thumbnail, embedUrl y uploadDate.

### Fase 2 (después de aprobar)

Cuando envíes los canales de los otros speakers, agrego más posts a `blogPosts.ts` reutilizando el mismo sistema — sin cambios de código.

### Nota

Voy a extraer los títulos reales de la playlist de YouTube al implementar. Si algún video no tiene descripción clara, escribo una breve basada en el título.
