import type { SpeakerFile } from './speakers';
// Cloud name y preset sin firma son datos públicos (van en la URL de subida); Lovable construye sin variables propias,
// así que quedan como valor por defecto y se pueden cambiar con VITE_CLOUDINARY_CLOUD / VITE_CLOUDINARY_PRESET.
const cloud = (import.meta.env.VITE_CLOUDINARY_CLOUD ?? 'dwtgiupye').trim();
const preset = (import.meta.env.VITE_CLOUDINARY_PRESET ?? 'cf_hub').trim();
export const cloudinaryReady = Boolean(cloud && preset);
export interface UploadedAsset { url: string; public_id: string; resource_type: string; bytes: number }
export async function uploadSpeakerFile(file: File, slug: string): Promise<UploadedAsset> {
  if (!cloudinaryReady) throw new Error('Falta configurar la subida de archivos. Pídele a Omar que la active.');
  const body = new FormData();
  body.append('file', file);
  body.append('upload_preset', preset);
  body.append('asset_folder', `conferencistas-famosos/${slug}`);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 120000);
  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${encodeURIComponent(cloud)}/auto/upload`, { method: 'POST', body, signal: controller.signal });
    const asset = await response.json();
    if (!response.ok) throw new Error('No se pudo subir el archivo. Revisa el tamaño y vuelve a intentar.');
    if (!asset.secure_url?.startsWith('https://') || !asset.public_id || !asset.resource_type || !Number.isFinite(asset.bytes)) throw new Error('No se recibió el archivo completo. Vuelve a intentar.');
    return { url: asset.secure_url, public_id: asset.public_id, resource_type: asset.resource_type, bytes: asset.bytes };
  } finally { clearTimeout(timeout); }
}
export function fileThumbnail(file: Pick<SpeakerFile, 'url' | 'resource_type' | 'name'>) {
  if (file.resource_type !== 'image' || /\.pdf(?:$|[?#])/i.test(file.url) || /\.pdf$/i.test(file.name)) return null;
  return file.url.replace('/image/upload/', '/image/upload/c_fill,w_200/');
}
