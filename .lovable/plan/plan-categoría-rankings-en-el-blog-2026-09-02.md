# Plan: Categoría "Rankings" en el blog

## Objetivo
Crear una categoría exclusiva para los posts tipo ranking y los que se publiquen después, con su propia página de categoría optimizada para SEO y navegación clara dentro del blog.

## Cambios propuestos

1. **Nueva categoría en los posts**
   - Agregar la categoría `"Rankings"` en `src/data/blogPosts.ts`.
   - Reasignar los 4 posts existentes de tipo `ranking` a la categoría `"Rankings"`.
   - Dejar preparado el campo `category: "Rankings"` para futuros posts de este tipo.

2. **Página de categoría dedicada**
   - Crear `src/pages/BlogCategory.tsx` que muestre solo los posts filtrados por categoría.
   - Ruta: `/blog/categoria/rankings`.
   - Incluir metadatos SEO: `<title>`, `meta description`, `canonical`, `og:*` y JSON-LD `CollectionPage`.
   - H1 orientado a posicionamiento: "Rankings de conferencistas más influyentes de Latinoamérica".
   - Reutilizar el diseño de tarjetas del blog actual.

3. **Navegación y filtros en `/blog`**
   - Agregar una segunda fila de filtros por categoría en `src/pages/Blog.tsx`.
   - Incluir el botón "Rankings" que enlace a `/blog/categoria/rankings`.
   - Mantener el filtro actual por speaker.

4. **Enlaces internos**
   - Convertir el badge de categoría en `src/pages/BlogPost.tsx` en un link a `/blog/categoria/rankings` cuando la categoría sea "Rankings".
   - Agregar la URL de la categoría a `public/sitemap.xml`.

5. **Soporte para futuros posts**
   - Cualquier nuevo post de tipo `ranking` deberá usar:
     - `type: 'ranking'`
     - `category: 'Rankings'`
   - Aparecerá automáticamente en `/blog/categoria/rankings` y en el filtro del blog.

## Diagrama de rutas

```text
/blog                         → listado general con filtros por speaker y categoría
/blog/categoria/rankings      → landing SEO solo de rankings
/blog/:slug                   → post individual (badge de categoría linkeable)
```

## Archivos a modificar

- `src/data/blogPosts.ts`
- `src/App.tsx`
- `src/pages/Blog.tsx`
- `src/pages/BlogPost.tsx`
- `src/pages/BlogCategory.tsx` (nuevo)
- `public/sitemap.xml`

## Nota sobre nombre y URL

Se propone:
- Nombre visible de la categoría: **Rankings**
- URL: `/blog/categoria/rankings`

Si prefieres otro nombre (por ejemplo "Top Conferencistas" o "Rankings Latinoamérica") o una URL diferente, se ajusta antes de construir.
