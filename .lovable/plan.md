## Objetivo

Enriquecer los posts del blog (`src/data/blogPosts.ts`) con contenido generado por IA a partir de la transcripción real de cada video de YouTube: resumen ejecutivo, puntos clave, frases memorables y ejercicios prácticos. Todo se genera una sola vez con un script y queda guardado como datos estáticos.

## Cómo funcionará

1. **Ampliar el tipo `BlogPost`** con campos opcionales:
   - `summary: string` (2-3 párrafos)
   - `keyPoints: string[]` (5-7 bullets)
   - `quotes: string[]` (3-5 frases)
   - `exercises: { title: string; description: string }[]` (3-5)
   - `aiGeneratedAt: string` para saber qué posts ya fueron procesados

2. **Script `scripts/enrich-blog-posts.ts`** (se corre localmente con `bun`, no en runtime):
   - Recorre `blogPosts`.
   - Para cada `youtubeId`, intenta descargar la transcripción automática con `youtube-transcript` (npm). Si no hay transcripción, marca el post como `skipped` y sigue.
   - Envía la transcripción + título + speaker a Lovable AI Gateway (`google/gemini-3-flash-preview`) usando `generateText` con `Output.object` (schema sin bounds; límites en el prompt).
   - Guarda el resultado directamente en `src/data/blogPosts.ts` regenerando el archivo con el nuevo contenido, respetando los posts que ya tienen `aiGeneratedAt` (idempotente, no regenera lo ya hecho salvo con flag `--force`).
   - Delay entre requests para evitar rate limits (429) y manejo explícito de 402 (créditos).

3. **Renderizar en `src/pages/BlogPost.tsx`**:
   - Debajo del video y la descripción, si el post tiene `summary`, agregar secciones:
     - "Resumen" (párrafos)
     - "Puntos clave" (lista con checks)
     - "Frases memorables" (blockquotes con estilo naranja)
     - "Ejercicios para aplicar" (cards numeradas)
   - Extender el JSON-LD `VideoObject` con `description` enriquecida para SEO.
   - Los posts sin contenido IA siguen mostrándose igual que ahora (sin romper nada).

4. **Documentación breve en `README.md`** con cómo correr el script:
   ```
   LOVABLE_API_KEY=... bun run scripts/enrich-blog-posts.ts
   bun run scripts/enrich-blog-posts.ts --only=daniel-habif-on-the-road-exma
   bun run scripts/enrich-blog-posts.ts --force
   ```

## Detalles técnicos

- **Fuente de transcripción**: `youtube-transcript` (npm). Solo depende del ID público; si YouTube no expone subtítulos para ese video, se salta.
- **Modelo**: `google/gemini-3-flash-preview` vía Lovable AI Gateway (default, económico y con contexto grande para transcripciones largas).
- **Schema `Output.object`**: plano, todos los campos requeridos y `nullable()` cuando aplique; los límites de cantidad ("5-7 puntos") van en el prompt y se recortan en código.
- **Dónde vive `LOVABLE_API_KEY`**: el script se corre en el sandbox de desarrollo donde ya está disponible; no se expone al cliente.
- **Idempotencia**: el script sólo escribe posts nuevos o con `--force`; el resto se preserva byte a byte.

## Alcance de esta iteración

- Se ejecuta el script sobre los posts existentes (Omar, Yordi, Daniel, Gaby, Vilma, Elsa, César, Marisa).
- No se agrega panel admin, ni tabla en Supabase, ni generación bajo demanda (queda para una fase futura si lo pides).
- Los cursos (`coursePosts.ts`) quedan fuera de esta iteración; se puede replicar el mismo patrón después si te sirve.
