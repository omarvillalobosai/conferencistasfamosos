import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { missingFields, PROFILE_FIELDS, saveProfile, setStage, stageLabel, type FullSpeaker, type ProfileInput, type SpeakerRequest, type Stage } from '../speakers';

interface Props { speaker: FullSpeaker; requests: SpeakerRequest[]; hasPhoto: boolean; onChange: (s: FullSpeaker) => void }
interface Form { specialty: string; short_bio: string; bio: string; topics: string; youtube_channel: string; website: string; photo_url: string }
const toForm = (s: FullSpeaker): Form => ({ specialty: s.specialty || '', short_bio: s.short_bio || '', bio: s.bio || '', topics: (s.topics ?? []).join('\n'), youtube_channel: s.youtube_channel || '', website: s.website || '', photo_url: s.photo_url || '' });

/** Perfil del candidato: avance, quién lo pidió, datos públicos y el paso a publicación. */
export default function CandidateProfile({ speaker, requests, hasPhoto, onChange }: Props) {
  const [form, setForm] = useState<Form>(() => toForm(speaker));
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const missing = missingFields(speaker, hasPhoto);
  const done = PROFILE_FIELDS - missing.length;
  const pct = Math.round((done / PROFILE_FIELDS) * 100);
  const field = (key: keyof Form) => ({ value: form[key], onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { setForm(f => ({ ...f, [key]: e.target.value })); setDirty(true); } });
  const save = async (e: React.FormEvent) => {
    e.preventDefault(); if (saving) return;
    setSaving(true); setMessage('');
    const input: ProfileInput = {
      specialty: form.specialty.trim() || null, short_bio: form.short_bio.trim() || null, bio: form.bio.trim() || null,
      topics: form.topics.split('\n').map(t => t.trim()).filter(Boolean), youtube_channel: form.youtube_channel.trim() || null,
      website: form.website.trim() || null, photo_url: form.photo_url.trim() || null,
    };
    try { const saved = await saveProfile(speaker.id, input); onChange(saved); setForm(toForm(saved)); setDirty(false); setMessage('Perfil guardado.'); }
    catch { setMessage('No se guardó. Revisa tu conexión e intenta otra vez.'); } finally { setSaving(false); }
  };
  const move = async (stage: Stage) => {
    if (saving) return;
    if (stage === 'publicado' && !window.confirm('¿Aprobar y marcar como publicado? Omar añade después la ficha al sitio.')) return;
    setSaving(true); setMessage('');
    try { onChange(await setStage(speaker.id, stage)); setMessage(stage === 'listo' ? 'Propuesto. Omar lo verá en Inicio.' : `Etapa: ${stageLabel[stage]}.`); }
    catch { setMessage('No se pudo cambiar la etapa.'); } finally { setSaving(false); }
  };
  return <>
    <section className="cf-card cf-section">
      <div className="cf-progress" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Avance del perfil"><i style={{ width: `${pct}%` }} /></div>
      <p className="cf-note" style={{ marginTop: 8 }}>{pct === 100 ? 'Perfil completo.' : `Perfil al ${pct} %. Falta: ${missing.join(', ')}.`}</p>
      <div className="cf-chips" style={{ marginTop: 10 }}>{requests.map(r => r.contact && <Link key={r.id} className="cf-chip" to={`/app/clientes/${r.contact.id}`}>{r.contact.name}<span>{r.contact.company || 'lo pidió'}</span></Link>)}</div>
      {!requests.length && <p className="cf-note">Nadie lo ha pedido todavía.</p>}
      <div className="cf-file-actions">
        {speaker.stage !== 'listo' && speaker.stage !== 'publicado' && <button type="button" className="cf-btn cf-btn--primary" disabled={saving} onClick={() => move('listo')}>Proponer para publicar</button>}
        {speaker.stage === 'listo' && <button type="button" className="cf-btn cf-btn--primary" disabled={saving} onClick={() => move('publicado')}>Aprobar y publicar</button>}
        {speaker.stage === 'listo' && <button type="button" className="cf-btn cf-btn--ghost" disabled={saving} onClick={() => move('evaluacion')}>Devolver a evaluación</button>}
        {speaker.stage === 'candidato' && <button type="button" className="cf-btn cf-btn--ghost" disabled={saving} onClick={() => move('evaluacion')}>Empezar evaluación</button>}
      </div>
    </section>
    <form className="cf-form cf-card cf-section" onSubmit={save}>
      <h2 className="cf-h2">Perfil público</h2>
      <fieldset disabled={saving} className="cf-form cf-fieldset">
        <label>Especialidad<input {...field('specialty')} placeholder="Liderazgo y ventas" maxLength={120} /></label>
        <label>Bio corta<textarea {...field('short_bio')} rows={2} placeholder="Una línea para la tarjeta del sitio" maxLength={220} /></label>
        <label>Bio completa<textarea {...field('bio')} rows={6} placeholder="Trayectoria, libros, reconocimientos. Solo datos comprobables." /></label>
        <label>Temas (uno por línea)<textarea {...field('topics')} rows={4} placeholder={'Liderazgo consciente\nVentas con propósito\nResiliencia'} /></label>
        <label>Canal de YouTube<input {...field('youtube_channel')} inputMode="url" placeholder="https://youtube.com/@canal" /></label>
        <label>Sitio web<input {...field('website')} inputMode="url" placeholder="https://" /></label>
        <label>Foto (enlace)<input {...field('photo_url')} inputMode="url" placeholder="O súbela abajo como archivo tipo foto" /></label>
      </fieldset>
      {dirty && <p className="cf-note">Tienes cambios sin guardar.</p>}
      <button className="cf-btn cf-btn--primary" disabled={saving || !dirty}>{saving ? 'Guardando…' : 'Guardar perfil'}</button>
      <p className="cf-msg" role="status">{message}</p>
    </form>
  </>;
}
