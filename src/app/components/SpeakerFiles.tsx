import React, { useRef, useState } from 'react';
import { db } from '../data';
import { fileKinds, type FileKind, type Speaker, type SpeakerFile } from '../speakers';
import { cloudinaryReady, fileThumbnail, uploadSpeakerFile, type UploadedAsset } from '../cloudinary';
interface Pending extends UploadedAsset { id: string; speaker_id: string; kind: FileKind; name: string }
export default function SpeakerFiles({ speaker, files, onChange }: { speaker: Speaker; files: SpeakerFile[]; onChange: (files: SpeakerFile[]) => void }) {
  const input = useRef<HTMLInputElement>(null);
  const [kind, setKind] = useState<FileKind>('rider');
  const [busy, setBusy] = useState(false);
  const [pending, setPending] = useState<Pending | null>(null);
  const [message, setMessage] = useState('');
  const save = async (asset: Pending) => {
    const { data, error } = await db.from('cf_speaker_files').upsert(asset, { onConflict: 'id' }).select('*').single();
    if (error) throw error;
    onChange([data as SpeakerFile, ...files.filter(f => f.id !== data.id)]);
    setPending(null); setMessage('Archivo guardado.');
  };
  const upload = async (file?: File) => {
    if (!file || busy) return;
    setBusy(true); setMessage('Subiendo archivo… Mantén esta pantalla abierta.');
    let uploaded = false;
    try {
      const result = await uploadSpeakerFile(file, speaker.slug);
      uploaded = true;
      const asset = { ...result, id: crypto.randomUUID(), speaker_id: speaker.id, kind, name: file.name };
      setPending(asset);
      await save(asset);
    } catch (error) {
      setMessage(uploaded ? 'El archivo subió, pero falta guardarlo en la ficha. Toca Reintentar guardado antes de salir.' : ((error as Error).name === 'AbortError' ? 'La subida tardó demasiado. Revisa tu conexión e intenta otra vez.' : (error as Error).message || 'No se pudo subir. Intenta otra vez.'));
    } finally { setBusy(false); if (input.current) input.current.value = ''; }
  };
  const retry = async () => {
    if (!pending || busy) return;
    setBusy(true);
    try { await save(pending); } catch { setMessage('Aún no se pudo guardar. Revisa tu conexión e intenta otra vez.'); } finally { setBusy(false); }
  };
  const hide = async (file: SpeakerFile) => {
    if (!window.confirm(`¿Ocultar «${file.name}» de esta ficha? El enlace seguirá funcionando.`)) return;
    setBusy(true);
    try {
      const { error } = await db.from('cf_speaker_files').update({ hidden: true }).eq('id', file.id).select('id').single();
      if (error) throw error;
      onChange(files.filter(f => f.id !== file.id)); setMessage('Archivo oculto.');
    } catch { setMessage('No se pudo ocultar. Intenta otra vez.'); } finally { setBusy(false); }
  };
  return <section className="cf-section">
    <h2 className="cf-h2">Archivos</h2>
    {cloudinaryReady ? <div className="cf-form cf-card">
      <label>Tipo de archivo<select value={kind} onChange={e => setKind(e.target.value as FileKind)} disabled={busy || !!pending}>{fileKinds.map(k => <option key={k} value={k}>{k[0].toUpperCase() + k.slice(1)}</option>)}</select></label>
      <p className="cf-note">Quien tenga el enlace puede abrirlo. No subas contratos firmados con datos personales.</p>
      <input ref={input} type="file" hidden aria-label="Elegir archivo" onChange={e => upload(e.target.files?.[0])} />
      {pending ? <button className="cf-btn cf-btn--primary" disabled={busy} onClick={retry}>Reintentar guardado</button> : <button className="cf-btn cf-btn--primary" disabled={busy} onClick={() => input.current?.click()}>{busy ? 'Subiendo…' : 'Subir archivo'}</button>}
    </div> : <p className="cf-note">La subida de archivos aún no está activada. Pídele a Omar que configure Cloudinary.</p>}
    <p className="cf-msg" role="status">{message}</p>
    <div className="cf-list">{files.map(file => {
      const thumbnail = fileThumbnail(file);
      return <article className="cf-card" key={file.id}>
        <a className="cf-file-link" href={file.url} target="_blank" rel="noreferrer">
          {thumbnail && <img src={thumbnail} alt="" width={100} height={100} loading="lazy" />}
          <span><strong>{file.name}</strong><small className="cf-note">{file.kind} · {(file.bytes / 1024 / 1024).toLocaleString('es-MX', { maximumFractionDigits: 1 })} MB</small></span>
        </a>
        <div className="cf-file-actions"><a className="cf-btn" href={file.url} target="_blank" rel="noreferrer">Abrir archivo ↗</a><button className="cf-btn cf-btn--ghost" disabled={busy} onClick={() => hide(file)}>Ocultar</button></div>
      </article>;
    })}{!files.length && <p className="cf-note">Aún no hay archivos.</p>}</div>
  </section>;
}
