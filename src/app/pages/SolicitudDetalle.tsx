import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import Shell from '../components/Shell';
import StatusPicker from '../components/StatusPicker';
import {
  db,
  QUOTE_STATUSES,
  quoteStatusLabel,
  normalizeQuoteStatus,
  updateQuoteStatus,
  findContactByQuote,
  addEvent,
  budgetLabel,
  isHighBudget,
  fmtDate,
  waLink,
  mailLink,
  type QuoteRequest,
  type QuoteStatus,
  type Contact,
} from '../data';
import { replyToQuote } from '../mensajes';

const SolicitudDetalle = () => {
  const { id } = useParams();
  const [q, setQ] = useState<QuoteRequest | null | undefined>(undefined);
  const [contact, setContact] = useState<Contact | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);

  useEffect(() => {
    if (!id) return;
    db.from('cf_quote_requests')
      .select('*')
      .eq('id', id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) {
          setQ(null);
          return;
        }
        setQ((data as QuoteRequest) ?? null);
      });
    findContactByQuote(id).then(setContact).catch(() => setContact(null));
  }, [id]);

  const changeStatus = async (s: QuoteStatus) => {
    if (!q) return;
    setSaving(true);
    setMsg(null);
    try {
      await updateQuoteStatus(q.id, s);
      setQ({ ...q, status: s });
      if (contact) await addEvent(contact.id, 'estado', `Solicitud: ${quoteStatusLabel[s]}`);
      setMsg({ text: 'Estado guardado.', ok: true });
    } catch (e) {
      setMsg({ text: 'No se guardó. Intenta otra vez.', ok: false });
    } finally {
      setSaving(false);
    }
  };

  const logSend = async (kind: 'whatsapp' | 'correo') => {
    if (!contact) return;
    try {
      await addEvent(contact.id, kind, kind === 'whatsapp' ? 'Contestó la solicitud por WhatsApp' : 'Contestó la solicitud por correo');
      if (normalizeQuoteStatus(q!.status) === 'new') await changeStatus('contestada');
    } catch {
      /* la bitácora es best-effort */
    }
  };

  if (q === undefined) {
    return (
      <Shell back="/app/solicitudes">
        <div className="cf-spinner" aria-label="Cargando" />
      </Shell>
    );
  }
  if (!q) {
    return (
      <Shell back="/app/solicitudes">
        <p className="cf-empty">No encontramos esta solicitud.</p>
      </Shell>
    );
  }

  const st = normalizeQuoteStatus(q.status);
  const message = replyToQuote(q.name, q.event_type);

  return (
    <Shell back="/app/solicitudes">
      <header>
        <p className="cf-kicker">Solicitud · {fmtDate(q.created_at)}</p>
        <h1 className="cf-h1">
          {q.name} {isHighBudget(q.budget) && '🔥'}
        </h1>
        <span className={`cf-status cf-status--${st}`} style={{ marginTop: 8 }}>
          {quoteStatusLabel[st]}
        </span>
      </header>

      <section className="cf-card" style={{ marginTop: 16, display: 'grid', gap: 10 }}>
        <a
          className="cf-btn cf-btn--whatsapp"
          href={waLink(q.phone, message)}
          target="_blank"
          rel="noreferrer"
          onClick={() => logSend('whatsapp')}
        >
          <MessageCircle size={20} /> Contestar por WhatsApp
        </a>
        <a
          className="cf-btn"
          href={mailLink(q.email, 'Tu solicitud en Conferencistas Famosos', message)}
          onClick={() => logSend('correo')}
        >
          <Mail size={20} /> Contestar por correo
        </a>
        {q.phone && (
          <a className="cf-btn cf-btn--ghost" href={`tel:${q.phone.replace(/[^0-9+]/g, '')}`}>
            <Phone size={20} /> Llamar
          </a>
        )}
      </section>

      <section style={{ marginTop: 22 }}>
        <p className="cf-kicker">¿En qué va?</p>
        <StatusPicker value={st} options={QUOTE_STATUSES} labels={quoteStatusLabel} disabled={saving} onChange={changeStatus} />
        <p className={`cf-msg ${msg ? (msg.ok ? 'cf-msg--ok' : 'cf-msg--error') : ''}`} aria-live="polite">
          {msg?.text ?? ''}
        </p>
      </section>

      <section className="cf-card" style={{ marginTop: 12 }}>
        <dl className="cf-dl">
          <div><dt>Empresa</dt><dd>{q.company || '—'}</dd></div>
          <div><dt>WhatsApp</dt><dd>{q.phone || '—'}</dd></div>
          <div><dt>Correo</dt><dd>{q.email}</dd></div>
          {q.social_media && <div><dt>Redes / sitio del evento</dt><dd>{q.social_media}</dd></div>}
          <div><dt>Tipo de evento</dt><dd>{q.event_type || '—'}</dd></div>
          <div><dt>Presupuesto</dt><dd>{budgetLabel(q.budget)}</dd></div>
          {q.speaker_focus && <div><dt>Qué busca</dt><dd>{q.speaker_focus}</dd></div>}
          {q.specific_objectives && <div><dt>Objetivos</dt><dd>{q.specific_objectives}</dd></div>}
          {q.event_intentions && <div><dt>Intención del evento</dt><dd>{q.event_intentions}</dd></div>}
          <div><dt>Mensaje</dt><dd style={{ whiteSpace: 'pre-wrap' }}>{q.pitch || 'No dejó mensaje.'}</dd></div>
        </dl>
      </section>

      <section style={{ marginTop: 16, display: 'grid', gap: 10 }}>
        {contact ? (
          <Link className="cf-btn" to={`/app/clientes/${contact.id}`}>
            Abrir ficha del cliente →
          </Link>
        ) : (
          <p className="cf-note">Esta solicitud aún no tiene ficha de cliente (se crea sola con las nuevas).</p>
        )}
        <Link className="cf-btn cf-btn--ghost" to={`/app/enviar?contacto=${contact?.id ?? ''}`}>
          Mandar rider, información o contrato
        </Link>
      </section>
    </Shell>
  );
};

export default SolicitudDetalle;
