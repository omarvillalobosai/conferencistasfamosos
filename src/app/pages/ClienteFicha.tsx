import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MessageCircle, Mail, Phone, Trash2 } from 'lucide-react';
import Shell from '../components/Shell';
import StatusPicker from '../components/StatusPicker';
import {
  fetchContact,
  saveContact,
  updateContactStatus,
  fetchEvents,
  addEvent,
  deleteEvent,
  CONTACT_STATUSES,
  contactStatusLabel,
  eventKindLabel,
  fmtDate,
  waLink,
  mailLink,
  type Contact,
  type ContactEvent,
  type ContactInput,
  type ContactStatus,
} from '../data';
import { followUp } from '../mensajes';

const empty: ContactInput = { name: '', company: '', phone: '', email: '', city: '', notes: '' };

const ClienteFicha = () => {
  const { id } = useParams();
  const isNew = !id || id === 'nuevo';
  const navigate = useNavigate();

  const [contact, setContact] = useState<Contact | null | undefined>(isNew ? null : undefined);
  const [form, setForm] = useState<ContactInput>(empty);
  const [events, setEvents] = useState<ContactEvent[]>([]);
  const [note, setNote] = useState('');
  const [editing, setEditing] = useState(isNew);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);
  const [dirty, setDirty] = useState(false);

  const load = async (cid: string) => {
    const c = await fetchContact(cid);
    setContact(c);
    if (c) {
      setForm({ name: c.name, company: c.company ?? '', phone: c.phone ?? '', email: c.email ?? '', city: c.city ?? '', notes: c.notes ?? '' });
      setEvents(await fetchEvents(cid));
    }
  };

  useEffect(() => {
    if (!isNew && id) load(id).catch(() => setContact(null));
  }, [id, isNew]);

  useEffect(() => {
    if (!dirty) return;
    const h = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener('beforeunload', h);
    return () => window.removeEventListener('beforeunload', h);
  }, [dirty]);

  const field = (k: keyof ContactInput) => ({
    name: k,
    value: form[k] ?? '',
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      setDirty(true);
    },
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setMsg({ text: 'El nombre es obligatorio.', ok: false });
      return;
    }
    setSaving(true);
    setMsg(null);
    try {
      const saved = await saveContact(form, contact?.id);
      setDirty(false);
      if (isNew) {
        await addEvent(saved.id, 'nota', 'Contacto añadido a mano');
        navigate(`/app/clientes/${saved.id}`, { replace: true });
        return;
      }
      setContact(saved);
      setEditing(false);
      setMsg({ text: 'Guardado.', ok: true });
    } catch (err) {
      setMsg({ text: (err as Error).message || 'No se guardó. Revisa los datos e intenta otra vez.', ok: false });
    } finally {
      setSaving(false);
    }
  };

  const changeStatus = async (s: ContactStatus) => {
    if (!contact) return;
    setSaving(true);
    try {
      await updateContactStatus(contact.id, s);
      await load(contact.id);
      setMsg({ text: 'Estado guardado.', ok: true });
    } catch {
      setMsg({ text: 'No se guardó el estado.', ok: false });
    } finally {
      setSaving(false);
    }
  };

  const addNote = async () => {
    if (!contact || !note.trim()) return;
    setSaving(true);
    try {
      await addEvent(contact.id, 'nota', note.trim());
      setNote('');
      setEvents(await fetchEvents(contact.id));
    } finally {
      setSaving(false);
    }
  };

  const logSend = async (kind: 'whatsapp' | 'correo') => {
    if (!contact) return;
    try {
      await addEvent(contact.id, kind, kind === 'whatsapp' ? 'Mensaje de seguimiento por WhatsApp' : 'Correo de seguimiento');
      await load(contact.id);
    } catch {
      /* best-effort */
    }
  };

  const removeEvent = async (ev: ContactEvent) => {
    if (!contact || !window.confirm('¿Borrar esta entrada de la bitácora?')) return;
    await deleteEvent(ev.id);
    setEvents(await fetchEvents(contact.id));
  };

  if (contact === undefined) {
    return (
      <Shell back="/app/clientes">
        <div className="cf-spinner" aria-label="Cargando" />
      </Shell>
    );
  }
  if (!isNew && !contact) {
    return (
      <Shell back="/app/clientes">
        <p className="cf-empty">No encontramos este contacto.</p>
      </Shell>
    );
  }

  return (
    <Shell back="/app/clientes">
      <header>
        <p className="cf-kicker">{isNew ? 'Nuevo contacto' : contact?.source === 'web' ? 'Cliente · llegó por la web' : 'Cliente'}</p>
        <h1 className="cf-h1">{isNew ? 'Añadir un contacto.' : contact?.name}</h1>
        {contact && (
          <span className={`cf-status cf-status--${contact.status}`} style={{ marginTop: 8 }}>
            {contactStatusLabel[contact.status]}
          </span>
        )}
      </header>

      {contact && !editing && (
        <>
          <section className="cf-card" style={{ marginTop: 16, display: 'grid', gap: 10 }}>
            {contact.phone && (
              <a className="cf-btn cf-btn--whatsapp" href={waLink(contact.phone, followUp(contact.name))} target="_blank" rel="noreferrer" onClick={() => logSend('whatsapp')}>
                <MessageCircle size={20} /> Escribir por WhatsApp
              </a>
            )}
            {contact.email && (
              <a className="cf-btn" href={mailLink(contact.email, 'Seguimiento · Conferencistas Famosos', followUp(contact.name))} onClick={() => logSend('correo')}>
                <Mail size={20} /> Escribir por correo
              </a>
            )}
            {contact.phone && (
              <a className="cf-btn cf-btn--ghost" href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}>
                <Phone size={20} /> Llamar
              </a>
            )}
            <Link className="cf-btn cf-btn--primary" to={`/app/enviar?contacto=${contact.id}`}>
              Mandar rider, información o contrato
            </Link>
          </section>

          <section style={{ marginTop: 22 }}>
            <p className="cf-kicker">Situación del cliente</p>
            <StatusPicker value={contact.status} options={CONTACT_STATUSES} labels={contactStatusLabel} disabled={saving} onChange={changeStatus} />
            <small className="cf-note">Último cambio: {fmtDate(contact.status_updated_at)}</small>
          </section>

          <section className="cf-card" style={{ marginTop: 16 }}>
            <dl className="cf-dl">
              <div><dt>Empresa</dt><dd>{contact.company || '—'}</dd></div>
              <div><dt>Teléfono</dt><dd>{contact.phone || '—'}</dd></div>
              <div><dt>Correo</dt><dd>{contact.email || '—'}</dd></div>
              <div><dt>Ciudad</dt><dd>{contact.city || '—'}</dd></div>
              {contact.notes && <div><dt>Notas</dt><dd style={{ whiteSpace: 'pre-wrap' }}>{contact.notes}</dd></div>}
              {contact.quote_request_id && (
                <div>
                  <dt>Solicitud web</dt>
                  <dd><Link to={`/app/solicitudes/${contact.quote_request_id}`} style={{ color: 'var(--cf-orange)' }}>Ver solicitud →</Link></dd>
                </div>
              )}
            </dl>
            <button type="button" className="cf-btn cf-btn--ghost cf-btn--sm" style={{ marginTop: 14 }} onClick={() => setEditing(true)}>
              Editar datos
            </button>
          </section>
        </>
      )}

      {(editing || isNew) && (
        <form className="cf-form cf-card" style={{ marginTop: 16 }} onSubmit={submit}>
          <label>Nombre<input {...field('name')} required autoComplete="off" maxLength={150} /></label>
          <label>Empresa<input {...field('company')} maxLength={200} /></label>
          <label>Teléfono / WhatsApp<input {...field('phone')} inputMode="tel" maxLength={50} placeholder="52 33 1234 5678" /></label>
          <label>Correo<input {...field('email')} inputMode="email" type="email" maxLength={254} /></label>
          <label>Ciudad<input {...field('city')} maxLength={100} /></label>
          <label>Notas<textarea {...field('notes')} rows={3} maxLength={2000} /></label>
          <p className={`cf-msg ${msg ? (msg.ok ? 'cf-msg--ok' : 'cf-msg--error') : ''}`} aria-live="polite">{msg?.text ?? ''}</p>
          <div style={{ display: 'grid', gap: 10, gridTemplateColumns: isNew ? '1fr' : '1fr 1fr' }}>
            <button type="submit" className="cf-btn cf-btn--primary" disabled={saving}>
              {saving ? 'Guardando…' : isNew ? 'Guardar contacto' : 'Guardar cambios'}
            </button>
            {!isNew && (
              <button type="button" className="cf-btn cf-btn--ghost" onClick={() => { setEditing(false); setDirty(false); }}>
                Cancelar
              </button>
            )}
          </div>
        </form>
      )}

      {contact && !editing && (
        <section style={{ marginTop: 24 }}>
          <p className="cf-kicker">Seguimiento</p>
          <p className={`cf-msg ${msg ? (msg.ok ? 'cf-msg--ok' : 'cf-msg--error') : ''}`} aria-live="polite">{msg?.text ?? ''}</p>
          <div className="cf-form" style={{ marginBottom: 14 }}>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={2} placeholder="Anota lo que pasó: llamada, acuerdo, fecha tentativa…" aria-label="Nueva nota" />
            <button type="button" className="cf-btn cf-btn--sm" onClick={addNote} disabled={saving || !note.trim()}>
              Guardar nota
            </button>
          </div>
          <div className="cf-list">
            {events.length === 0 && <p className="cf-empty">Sin movimientos todavía.</p>}
            {events.map((ev) => (
              <article key={ev.id} className="cf-card" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 8 }}>
                <div>
                  <span className="cf-status" style={{ marginBottom: 6 }}>{eventKindLabel[ev.kind] ?? ev.kind}</span>
                  <p style={{ margin: '6px 0 2px', fontSize: 14, whiteSpace: 'pre-wrap' }}>{ev.detail}</p>
                  <small className="cf-note">{fmtDate(ev.created_at)}</small>
                </div>
                <button type="button" className="cf-back" aria-label="Borrar entrada" onClick={() => removeEvent(ev)}>
                  <Trash2 size={16} />
                </button>
              </article>
            ))}
          </div>
        </section>
      )}
    </Shell>
  );
};

export default ClienteFicha;
