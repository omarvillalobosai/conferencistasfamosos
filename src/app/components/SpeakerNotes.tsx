import React, { useState } from 'react';
import { db, fmtDate, type Contact } from '../data';
import { detectWhatsApp } from '../whatsapp';
import { feeLabel, type SpeakerNote } from '../speakers';
export default function SpeakerNotes({ speakerId, notes, contacts, onChange, onUseFee, onUsePhone }: {
  speakerId: string; notes: SpeakerNote[]; contacts: Contact[]; onChange: (notes: SpeakerNote[]) => void;
  onUseFee: (amount: number, currency: string) => void; onUsePhone: (phone: string) => void;
}) {
  const [body, setBody] = useState('');
  const [source, setSource] = useState<'whatsapp' | 'manual'>('whatsapp');
  const [contactId, setContactId] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  // Las sugerencias se calculan del texto escrito y, tras guardar, se conservan las de la última nota
  // para que Sandra pueda guardar primero y copiar los datos después.
  const [saved, setSaved] = useState<ReturnType<typeof detectWhatsApp>>({ fees: [], phones: [] });
  const typed = source === 'whatsapp' ? detectWhatsApp(body) : { fees: [], phones: [] };
  const found = body.trim() ? typed : saved;
  const save = async () => {
    if (!body.trim() || busy) return;
    setBusy(true); setMessage('');
    try {
      const { data, error } = await db.from('cf_speaker_notes').insert({ speaker_id: speakerId, body: body.trim(), source, contact_id: contactId || null }).select('*').single();
      if (error) throw error;
      onChange([data as SpeakerNote, ...notes]); setSaved(typed); setBody(''); setMessage('Nota guardada.');
    } catch { setMessage('No se guardó. Tu texto sigue aquí; intenta otra vez.'); } finally { setBusy(false); }
  };
  return <section className="cf-section"><h2 className="cf-h2">Pegar de WhatsApp</h2>
    <div className="cf-form cf-card">
      <p className="cf-note">En WhatsApp, mantén presionado el mensaje y toca Copiar. Pégalo aquí.</p>
      <label>Tipo de nota<select value={source} disabled={busy} onChange={e => setSource(e.target.value as 'whatsapp' | 'manual')}><option value="whatsapp">WhatsApp</option><option value="manual">Nota manual</option></select></label>
      <label>Mensaje<textarea rows={7} value={body} disabled={busy} onChange={e => setBody(e.target.value)} placeholder="Pega el mensaje completo…" /></label>
      {contacts.length > 0 && <label>Cliente relacionado (opcional)<select value={contactId} disabled={busy} onChange={e => setContactId(e.target.value)}><option value="">Sin cliente</option>{contacts.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</select></label>}
      {(found.fees.length > 0 || found.phones.length > 0) && <p className="cf-note">{body.trim() ? 'Encontré estos datos. Elige uno y luego guarda la ficha.' : 'Datos de la última nota. Elige uno y luego guarda la ficha.'}</p>}
      {found.fees.map(f => <button className="cf-btn" key={`${f.amount}-${f.currency}`} onClick={() => { onUseFee(f.amount, f.currency); setMessage('Honorarios copiados a la ficha. Falta guardar los cambios.'); }}>Usar como honorarios: {feeLabel({ fee_amount: f.amount, fee_currency: f.currency })}</button>)}
      {found.phones.map(phone => <button className="cf-btn" key={phone} onClick={() => { onUsePhone(phone); setMessage('Teléfono copiado a la ficha. Falta guardar los cambios.'); }}>Usar como teléfono del manager: {phone}</button>)}
      <button className="cf-btn cf-btn--primary" onClick={save} disabled={busy || !body.trim()}>{busy ? 'Guardando…' : 'Guardar en bitácora'}</button>
      <p className="cf-msg" role="status">{message}</p>
    </div>
    <h2 className="cf-h2 cf-section">Bitácora</h2><div className="cf-list">
      {notes.map(note => <article className="cf-card" key={note.id}><small className="cf-note">{fmtDate(note.created_at)} · {note.source === 'whatsapp' ? 'WhatsApp' : 'Nota'}{note.contact_id && ` · ${contacts.find(c => c.id === note.contact_id)?.name || 'Cliente relacionado'}`}</small><p className="cf-prewrap">{note.body}</p></article>)}
      {!notes.length && <p className="cf-note">Aún no hay notas.</p>}
    </div>
  </section>;
}
