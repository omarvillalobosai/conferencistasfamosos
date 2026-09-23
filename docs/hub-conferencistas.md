# Hub de conferencistas · instalación y revisión

Implementación local desde `origin/main` (423a97f), rama `mejora/hub-conferencistas`.
No se aplicó SQL, no se subieron archivos reales a Cloudinary, no se hizo push ni PR.

## Instalar (Omar)

1. En Supabase `ythqjhiyavgpghmoreiz`, abrir SQL Editor como administrador y pegar **solo** `supabase/hub-conferencistas-instalar.sql`. Es el mismo contenido que `supabase/migrations/20260924090000_cf_speakers.sql`; no hace falta ejecutar ambos. Requiere la migración previa del hub, ya instalada según las notas de Omar.
2. El SQL crea `cf_speakers`, `cf_speaker_files`, `cf_speaker_notes` y `cf_contacts.speaker_id`, sus índices, RLS por `cf_is_app_user()`, REVOKE de acceso anónimo, timestamp de actualización y semilla idempotente. Authenticated puede leer, insertar y actualizar; no borrar. Las referencias a usuarios usan `auth.uid()` por defecto, igual que la bitácora existente.
3. **Hay 14 nombres en `speakersData.ts` en esta base, no 15.** La semilla se generó usando `getSpeakerSlug`. Honorarios, condiciones y datos de managers están vacíos. No sobrescribe datos al volver a ejecutar.
4. Añadir las variables de `.env.hub.example` a `.env.local` (local) y al entorno de build de Lovable:
   ```env
   VITE_CLOUDINARY_CLOUD=dwtgiupye
   VITE_CLOUDINARY_PRESET=cf_hub
   ```
   Reiniciar Vite/reconstruir al cambiar variables. Sin cualquiera de ellas no aparece el botón Subir archivo y se muestra el aviso.
5. El preset **cf_hub ya fue creado** por Omar (2026-09-22). Mantener Unsigned e identificadores impredecibles. Revisar `asset_folder`: si el preset fija `conferencistas-famosos`, su valor tiene prioridad sobre el enviado por el formulario. Para organizar físicamente por conferencista, dejar ese campo sin valor fijo en el preset; el hub envía `conferencistas-famosos/<slug>`. No se manda `folder`, ni `public_id`, ni claves.
   Fuente: [precedencia de parámetros unsigned de Cloudinary](https://cloudinary.com/documentation/image_upload_api_reference#unsigned_upload_parameters).
6. Activar en Cloudinary **Settings → Security → PDF and ZIP files delivery**. Abrir un PDF de prueba después de subirlo. La entrega puede fallar aunque la subida haya funcionado.
7. Publicar en Lovable cuando Omar autorice integrar la rama. Verificar `/app` con los accesos existentes.

## Cómo se usa

- Conferencistas: búsqueda por nombre o manager, ficha con honorarios, moneda, detalle, condiciones, manager y notas internas.
- Pegar de WhatsApp: detecta `$`, MXN, USD, pesos, dólares, cantidades con «mil» y teléfonos mexicanos; ofrece copiar a la ficha. **Guardar cambios** confirma los datos. **Guardar en bitácora** conserva el mensaje original y su fecha, con cliente opcional. También admite notas manuales.
- Archivos: tipo, subida directa desde Fotos/Archivos, imágenes con miniatura, enlace original para PDF y otros archivos. Ocultar solo marca `hidden=true`; el enlace público sigue funcionando. Si falla Supabase después de subir, Reintentar guardado reutiliza el resultado y el id, sin duplicar la subida.
- Cliente y solicitud: Conferencista de interés guarda `cf_contacts.speaker_id`. Solicitudes anteriores del mismo correo encuentran al mismo cliente. La ficha del conferencista lista sus clientes.
- Enviar: lee conferencistas de Supabase, añade honorarios y condiciones existentes. Permite enviar solo esos datos o un archivo del conferencista, y opcionalmente un documento general. Elegir un archivo propio desmarca el documento general para no depender de los PDF pendientes de `/docs`. El mensaje no incluye notas internas ni datos del manager.
- Inicio enlaza a `/app/instalar` con instrucciones para iPhone. Las rutas viven en `HubApp.tsx`; `src/routes.tsx` ya delega `/app/*`, por lo que no necesita cambios.

Los enlaces de Cloudinary son públicos para quien los tenga. No subir contratos firmados con datos personales: esta versión no implementa entrega firmada. «Ocultar» no revoca un enlace enviado.

## Archivos

- Base y servicios: `src/app/data.ts`, `speakers.ts`, `cloudinary.ts`, `whatsapp.ts`, `mensajes.ts`.
- Componentes: `Shell.tsx`, `SpeakerSelect.tsx`, `SpeakerFiles.tsx`, `SpeakerNotes.tsx`.
- Páginas: `Conferencistas.tsx`, `ConferencistaFicha.tsx`, `Instalar.tsx`, `ClienteFicha.tsx`, `SolicitudDetalle.tsx`, `Enviar.tsx`, `Inicio.tsx`.
- Rutas y estilo: `src/app/HubApp.tsx`, `src/app/app.css`.
- Instalación: ambos SQL, `.env.hub.example`, este documento.
- Pruebas: `scripts/test-hub-conferencistas.mjs`.

## Validación

Ejecutar:
```sh
node --test scripts/test-hub-conferencistas.mjs
npx tsc --noEmit -p tsconfig.app.json
npm run build
```

Las pruebas locales cubren montos/teléfonos, mensajes sin datos inventados o internos, multipart con `asset_folder` y preservación de respuesta, configuración ausente, error de subida y miniaturas/PDF. No conectan a servicios ni aplican migraciones.

Comprobación pendiente en un entorno con servidor y SQL instalado: entrar a `/app` en iPhone, editar/recargar honorarios, pegar un chat, guardar nota, subir imagen/PDF, ocultar archivo, relacionar cliente y solicitud, y abrir Enviar; comprobar consola, que solo aparecen archivos del conferencista elegido y que PDF abre en otra pestaña. No enviar mensajes a clientes reales durante la prueba.

Limitación de esta sesión: el sandbox bloquea `npm run dev` al abrir un puerto (`listen EPERM`). El servidor previo en localhost:8080 abrió en blanco, por lo que no se certifica el recorrido visual ni la consola de la aplicación. No se aplicó la migración para probar RLS contra el proyecto real.
