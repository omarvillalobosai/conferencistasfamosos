import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MessageCircle, Mail, Copy, Share2, FileText } from 'lucide-react';
import Shell from '../components/Shell';
import { fetchContacts, fetchContact, addEvent, waLink, mailLink, type Contact } from '../data';
import { documents, type DocKind, type HubDocument } from '../documentos';
import { sendDocument, subjectFor } from '../mensajes';
import { speakers } from '@/data/speakersData';

const kinds: { id: DocKind; label: string; hint: string }[] = [
  { id: 'rider', label: 'Rider', hint: 'Honorarios y condiciones' },
  { id: 'info', label: 'Información', hint: 'Presentación y dossier' },
  { id: 'contrato', label: 'Contrato', hint: 'Para firmar' },
];

const Enviar = () => {
  const [params] = useSearchParams();
  const preselected = params.get('contacto');

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [contact, setContact] = useState<Contact | null>(null);
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState<DocKind>('rider');
  const [docId, setDocId] = useState<string>(documents.find((d) => d.kind === 'rider')!.id);
  const [speaker, setSpeaker] = useState<string>('');
  const [msg, setMsg] = useState<string | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetchContacts().then(setContacts).catch(() => setContacts([]));
    if (preselected) fetchContact(preselected).then((c) => c && setContact(c)).catch(() => undefined);
  }, [preselected]);

  // Comprueba qué documentos existen de verdad (los PDF pendientes no se mandan).
  useEffect(() => {
    documents.forEach((d) => {
      if (!d.url.endsWith('.pdf')) {
        setChecked((c) => ({ ...c, [d.id]: true }));
        return;
      }
      // Se comprueba en el mismo origen (evita CORS en local); el enlace del mensaje sigue siendo absoluto.
      const sameOrigin = (() => {
        try {
          const u = new URL(d.url);
          return u.hostname.endsWith('conferencistasfamosos.com') ? u.pathname : d.url;
        } catch {
          return d.url;
        }
      })();
      fetch(sameOrigin, { method: 'HEAD' })
        .then((r) => setChecked((c) => ({ ...c, [d.id]: r.ok })))
        .catch(() => setChecked((c) => ({ ...c, [d.id]: false })));
    });
  }, []);

  useEffect(() => {
    const first = documents.find((d) => d.kind === kind);
    if (first) setDocId(first.id);
  }, [kind]);

  const doc: HubDocument = documents.find((d) => d.id === docId) ?? documents[0];
  const ready = checked[doc.id] === true;
  const text = sendDocument(doc, contact?.name ?? null, speaker || undefined);
  const subject = subjectFor(doc, speaker || undefined);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('es-MX');
    if (!q) return contacts.slice(0, 8);
    return contacts.filter((c) => `${c.name} ${c.company ?? ''}`.toLocaleLowerCase('es-MX').includes(q)).slice(0, 8);
  }, [contacts, query]);

  const log = async (via: string) => {
    if (!contact) return;
    try {
      await addEvent(contact.id, doc.kind, `${doc.label}${speaker ? ` · ${speaker}` : ''} por ${via}`);
      setMsg(`Registrado en la ficha de ${contact.name}.`);
    } catch {
      setMsg('Se abrió el envío, pero no se pudo anotar en la ficha.');
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setMsg('Mensaje copiado.');
      await log('copia');
    } catch {
      setMsg('No se pudo copiar.');
    }
  };

  const share = async () => {
    const nav = navigator as Navigator & { share?: (d: ShareData) => Promise<void> };
    if (!nav.share) return;
    try {
      await nav.share({ title: subject, text });
      await log('compartir');
    } catch {
      /* cancelado */
    }
  };

  return (
    <Shell back="/app">
      <p className="cf-kicker">Mandar</p>
      <h1 className="cf-h1">¿Qué mandas y a quién?</h1>

      <section style={{ marginTop: 16 }}>
        <p className="cf-kicker" style={{ color: 'var(--cf-muted)' }}>1 · Para quién</p>
        {contact ? (
          <div className="cf-row" style={{ cursor: 'default', marginTop: 8 }}>
            <div>
              <strong>{contact.name}</strong>
              <small>{contact.company || 'Sin empresa'} · {contact.phone || 'sin teléfono'}</small>
            </div>
            <button type="button" className="cf-chip" onClick={() => setContact(null)}>Cambiar</button>
          </div>
        ) : (
          <>
            <label className="cf-search">
              <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Busca un contacto…" aria-label="Buscar contacto" style={{ paddingLeft: 14 }} />
            </label>
            <div className="cf-list">
              {filtered.map((c) => (
                <button key={c.id} type="button" className="cf-row" onClick={() => setContact(c)}>
                  <div>
                    <strong>{c.name}</strong>
                    <small>{c.company || 'Sin empresa'}</small>
                  </div>
                  <span className="cf-arrow">→</span>
                </button>
              ))}
              {contacts.length === 0 && (
                <p className="cf-note">Aún no hay contactos. <Link to="/app/clientes/nuevo" style={{ color: 'var(--cf-orange)' }}>Añade uno</Link> o manda sin registrar.</p>
              )}
            </div>
          </>
        )}
      </section>

      <section style={{ marginTop: 22 }}>
        <p className="cf-kicker" style={{ color: 'var(--cf-muted)' }}>2 · Qué</p>
        <div className="cf-chips" style={{ marginTop: 8 }}>
          {kinds.map((k) => (
            <button key={k.id} type="button" className="cf-chip" aria-pressed={kind === k.id} onClick={() => setKind(k.id)}>
              {k.label}
            </button>
          ))}
        </div>
        <div className="cf-list">
          {documents.filter((d) => d.kind === kind).map((d) => {
            const ok = checked[d.id];
            return (
              <button key={d.id} type="button" className="cf-row" aria-pressed={docId === d.id} style={docId === d.id ? { borderColor: 'var(--cf-orange)' } : undefined} onClick={() => setDocId(d.id)}>
                <div>
                  <strong><FileText size={16} style={{ verticalAlign: '-3px', marginRight: 6 }} />{d.label}</strong>
                  <small>{d.description}</small>
                  {ok === false && <small style={{ color: '#ff8592' }}>Pendiente: falta subir este PDF a /docs</small>}
                </div>
                <span className="cf-arrow">{docId === d.id ? '✓' : ''}</span>
              </button>
            );
          })}
        </div>
        <label className="cf-form" style={{ marginTop: 12 }}>
          <span style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cf-muted)', fontWeight: 700 }}>Conferencista (opcional)</span>
          <select value={speaker} onChange={(e) => setSpeaker(e.target.value)}>
            <option value="">Sin especificar</option>
            {speakers.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
          </select>
        </label>
      </section>

      <section style={{ marginTop: 22 }}>
        <p className="cf-kicker" style={{ color: 'var(--cf-muted)' }}>3 · Mensaje</p>
        <pre className="cf-card" style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: 14, margin: '8px 0 12px', lineHeight: 1.5 }}>{text}</pre>
        {!ready && <p className="cf-msg cf-msg--error">Este documento aún no está en el sitio. Sube el PDF a <code>public/docs/</code> con ese nombre y aparecerá listo.</p>}
        <div style={{ display: 'grid', gap: 10 }}>
          <a className="cf-btn cf-btn--whatsapp" href={contact?.phone ? waLink(contact.phone, text) : `https://wa.me/?text=${encodeURIComponent(text)}`} target="_blank" rel="noreferrer" onClick={() => log('WhatsApp')} aria-disabled={!ready} style={!ready ? { pointerEvents: 'none', opacity: 0.45 } : undefined}>
            <MessageCircle size={20} /> Enviar por WhatsApp
          </a>
          <a className="cf-btn" href={mailLink(contact?.email, subject, text)} onClick={() => log('correo')} aria-disabled={!ready} style={!ready ? { pointerEvents: 'none', opacity: 0.45 } : undefined}>
            <Mail size={20} /> Enviar por correo
          </a>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <button type="button" className="cf-btn cf-btn--ghost" onClick={copy} disabled={!ready}><Copy size={18} /> Copiar</button>
            <button type="button" className="cf-btn cf-btn--ghost" onClick={share} disabled={!ready || !('share' in navigator)}><Share2 size={18} /> Compartir</button>
          </div>
        </div>
        <p className="cf-msg cf-msg--ok" aria-live="polite" style={{ marginTop: 10 }}>{msg ?? ''}</p>
      </section>
    </Shell>
  );
};

export default Enviar;
