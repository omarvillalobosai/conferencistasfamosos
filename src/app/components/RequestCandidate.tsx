import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCandidate } from '../speakers';
import { addEvent } from '../data';

/** "Pidió un conferencista que no tenemos": dos campos y ya existe el candidato ligado al cliente. */
export default function RequestCandidate({ contactId, onDone }: { contactId: string; onDone?: () => void }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [channel, setChannel] = useState('');
  const [instagram, setInstagram] = useState('');
  const [website, setWebsite] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !channel.trim() || saving) return;
    setSaving(true); setError('');
    try {
      const speaker = await createCandidate({ name, youtube_channel: channel, instagram, website, contactId });
      await addEvent(contactId, 'nota', `Pidió al conferencista ${speaker.name} (candidato nuevo).`).catch(() => {});
      onDone?.();
      navigate(`/app/conferencistas/${speaker.id}`);
    } catch { setError('No se pudo crear el candidato. Intenta otra vez.'); setSaving(false); }
  };
  if (!open) return <button type="button" className="cf-btn cf-btn--ghost cf-btn--sm" onClick={() => setOpen(true)}>Pidió un conferencista que no tenemos</button>;
  return <form className="cf-form cf-card" style={{ marginTop: 12 }} onSubmit={submit}>
    <label>Nombre o marca personal<input value={name} onChange={e => setName(e.target.value)} required autoFocus maxLength={150} placeholder="Como lo conoce el cliente" /></label>
    <label>Canal de YouTube<input value={channel} onChange={e => setChannel(e.target.value)} required inputMode="url" placeholder="https://youtube.com/@canal" /></label>
    <label>Instagram (opcional)<input value={instagram} onChange={e => setInstagram(e.target.value)} inputMode="url" placeholder="@usuario o enlace" /></label>
    <label>Sitio web (opcional)<input value={website} onChange={e => setWebsite(e.target.value)} inputMode="url" placeholder="https://" /></label>
    <p className="cf-note">Con el canal, y si hay Instagram y web, después se investiga solo: foto, bio, contacto y temas.</p>
    {error && <p className="cf-msg cf-msg--error" role="alert">{error}</p>}
    <div style={{ display: 'grid', gap: 10, gridTemplateColumns: '1fr 1fr' }}>
      <button type="submit" className="cf-btn cf-btn--primary" disabled={saving || !name.trim() || !channel.trim()}>{saving ? 'Creando…' : 'Crear candidato'}</button>
      <button type="button" className="cf-btn cf-btn--ghost" onClick={() => setOpen(false)} disabled={saving}>Cancelar</button>
    </div>
  </form>;
}
