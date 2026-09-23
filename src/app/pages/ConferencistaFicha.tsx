import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Shell from '../components/Shell';
import SpeakerFiles from '../components/SpeakerFiles';
import SpeakerNotes from '../components/SpeakerNotes';
import CandidateProfile from '../components/CandidateProfile';
import type { Contact } from '../data';
import { fetchSpeaker, fetchSpeakerFiles, fetchSpeakerNotes, fetchSpeakerContacts, fetchSpeakerRequests, saveSpeaker, speakerLoadError, stageLabel, type FullSpeaker, type SpeakerFile, type SpeakerNote, type SpeakerRequest } from '../speakers';
interface Form { fee_amount: string; fee_currency: string; fee_note: string; conditions: string; manager_name: string; manager_phone: string; manager_email: string; notes: string }
const toForm = (s: FullSpeaker): Form => ({ fee_amount: s.fee_amount == null ? '' : String(s.fee_amount), fee_currency: s.fee_currency, fee_note: s.fee_note || '', conditions: s.conditions || '', manager_name: s.manager_name || '', manager_phone: s.manager_phone || '', manager_email: s.manager_email || '', notes: s.notes || '' });
export default function ConferencistaFicha() {
  const { id } = useParams();
  const formRef = useRef<HTMLFormElement>(null);
  const [speaker, setSpeaker] = useState<FullSpeaker | null>(null);
  const [requests, setRequests] = useState<SpeakerRequest[]>([]);
  const [form, setForm] = useState<Form | null>(null);
  const [files, setFiles] = useState<SpeakerFile[]>([]);
  const [notes, setNotes] = useState<SpeakerNote[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => {
    let alive = true;
    setLoading(true); setError(''); setDirty(false); setMessage('');
    Promise.all([fetchSpeaker(id!), fetchSpeakerFiles(id!), fetchSpeakerNotes(id!), fetchSpeakerContacts(id!), fetchSpeakerRequests(id!).catch(() => [] as SpeakerRequest[])]).then(([s, f, n, c, r]) => {
      if (!alive) return;
      setSpeaker(s as FullSpeaker); setForm(toForm(s as FullSpeaker)); setFiles(f); setNotes(n); setContacts(c); setRequests(r);
    }).catch(() => { if (alive) setError(speakerLoadError); }).finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  }, [id]);
  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => { e.preventDefault(); e.returnValue = ''; };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);
  const field = (key: keyof Form) => ({ value: form?.[key] ?? '', onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { setForm(f => ({ ...f!, [key]: e.target.value })); setDirty(true); } });
  const save = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!speaker || !form || saving) return;
    const amount = form.fee_amount.trim() === '' ? null : Number(form.fee_amount);
    if (amount != null && (!Number.isFinite(amount) || amount < 0)) { setMessage('Revisa el monto de honorarios.'); return; }
    setSaving(true); setMessage('');
    try {
      const saved = await saveSpeaker(speaker.id, { ...form, fee_amount: amount, fee_currency: form.fee_currency.trim().toUpperCase() || 'MXN' }) as FullSpeaker;
      setSpeaker(saved); setForm(toForm(saved)); setDirty(false); setMessage('Cambios guardados.');
    } catch { setMessage('No se guardó. Revisa tu conexión e intenta otra vez.'); } finally { setSaving(false); }
  };
  const suggest = (changes: Partial<Form>) => {
    setForm(f => ({ ...f!, ...changes })); setDirty(true); setMessage('Dato copiado. Revisa y guarda los cambios.');
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return <Shell back="/app/conferencistas">
    {loading ? <div className="cf-spinner" aria-label="Cargando" /> : error ? <p className="cf-msg cf-msg--error" role="alert">{error}</p> : speaker && form && <>
      <p className="cf-kicker">{speaker.stage === 'publicado' ? 'Ficha del conferencista' : `Candidato · ${stageLabel[speaker.stage]}`}</p><h1 className="cf-h1">{speaker.name}</h1>
      {speaker.stage !== 'publicado' && <CandidateProfile key={`cand-${speaker.id}-${speaker.stage}`} speaker={speaker} requests={requests} hasPhoto={files.some(f => f.kind === 'foto')} onChange={s => setSpeaker(s)} />}
      {speaker.stage === 'publicado' && <Link className="cf-btn cf-section" to={`/app/enviar?conferencista=${speaker.id}`}>Enviar información o archivo</Link>}
      <form ref={formRef} className="cf-form cf-card cf-section" onSubmit={save}>
        <h2 className="cf-h2">Honorarios y contacto</h2>
        <fieldset disabled={saving} className="cf-form cf-fieldset">
          <label>Honorarios<input {...field('fee_amount')} type="number" inputMode="decimal" min="0" step="0.01" placeholder="Sin definir" /></label>
          <label>Moneda<select {...field('fee_currency')}><option>MXN</option><option>USD</option>{!['MXN', 'USD'].includes(form.fee_currency) && <option>{form.fee_currency}</option>}</select></label>
          <label>Detalle de honorarios<textarea {...field('fee_note')} rows={2} placeholder="Rango, impuestos o vigencia…" /></label>
          <label>Qué incluye y qué pide<textarea {...field('conditions')} rows={4} placeholder="Viajes, hospedaje, equipo, duración…" /></label>
          <label>Nombre del manager<input {...field('manager_name')} autoComplete="name" /></label>
          <label>Teléfono del manager<input {...field('manager_phone')} type="tel" autoComplete="tel" /></label>
          <label>Correo del manager<input {...field('manager_email')} type="email" autoComplete="email" /></label>
          <label>Notas internas<textarea {...field('notes')} rows={3} /></label>
        </fieldset>
        {dirty && <p className="cf-note">Tienes cambios sin guardar.</p>}
        <button className="cf-btn cf-btn--primary" disabled={saving || !dirty}>{saving ? 'Guardando…' : 'Guardar cambios'}</button>
        <p className="cf-msg" role="status">{message}</p>
      </form>
      <SpeakerFiles key={`files-${speaker.id}`} speaker={speaker} files={files} onChange={setFiles} />
      <SpeakerNotes key={`notes-${speaker.id}`} speakerId={speaker.id} notes={notes} contacts={contacts} onChange={setNotes} onUseFee={(amount, currency) => suggest({ fee_amount: String(amount), fee_currency: currency })} onUsePhone={phone => suggest({ manager_phone: phone })} />
      <section className="cf-section"><h2 className="cf-h2">Clientes interesados</h2><div className="cf-list">
        {contacts.map(c => <Link className="cf-row" key={c.id} to={`/app/clientes/${c.id}`}><div><strong>{c.name}</strong><small>{c.company || 'Sin empresa'}</small></div><span className="cf-arrow">→</span></Link>)}
        {!contacts.length && <p className="cf-note">Aún no hay clientes relacionados.</p>}
      </div></section>
    </>}
  </Shell>;
}
