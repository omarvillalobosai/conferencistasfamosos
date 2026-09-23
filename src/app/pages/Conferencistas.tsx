import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Shell from '../components/Shell';
import { fetchSpeakers, fetchAllRequests, feeLabel, speakerLoadError, stageLabel, type FullSpeaker, type SpeakerRequest } from '../speakers';
const searchable = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es-MX');
export default function Conferencistas() {
  const [speakers, setSpeakers] = useState<FullSpeaker[]>([]);
  const [requests, setRequests] = useState<SpeakerRequest[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const load = () => {
    setLoading(true); setError('');
    Promise.all([fetchSpeakers(), fetchAllRequests().catch(() => [] as SpeakerRequest[])]).then(([s, r]) => { setSpeakers(s as FullSpeaker[]); setRequests(r); }).catch(() => setError(speakerLoadError)).finally(() => setLoading(false));
  };
  useEffect(load, []);
  const q = searchable(query.trim());
  const matches = (s: FullSpeaker) => searchable(`${s.name} ${s.manager_name ?? ''}`).includes(q);
  const filtered = speakers.filter(s => (s.stage ?? 'publicado') === 'publicado' && s.active && matches(s));
  const candidates = speakers.filter(s => (s.stage ?? 'publicado') !== 'publicado' && matches(s));
  const askedBy = (id: string) => requests.filter(r => r.speaker_id === id).length;
  return <Shell>
    <p className="cf-kicker">Todo en su ficha</p><h1 className="cf-h1">Conferencistas</h1>
    <p className="cf-note">Honorarios, archivos y mensajes del manager.</p>
    <div className="cf-form cf-section"><label>Buscar<input type="search" placeholder="Nombre del conferencista…" value={query} onChange={e => setQuery(e.target.value)} /></label></div>
    {loading ? <div className="cf-spinner" aria-label="Cargando" /> : error ? <div role="alert"><p className="cf-msg cf-msg--error">{error}</p><button className="cf-btn" onClick={load}>Reintentar</button></div> : <>
    {candidates.length > 0 && <section className="cf-section"><h2 className="cf-h2">Candidatos</h2><div className="cf-list">
      {candidates.map(s => <Link className="cf-row" key={s.id} to={`/app/conferencistas/${s.id}`}><div><strong>{s.name}</strong><small>{stageLabel[s.stage]}{askedBy(s.id) ? ` · lo pidieron ${askedBy(s.id)} ${askedBy(s.id) === 1 ? 'cliente' : 'clientes'}` : ''}</small></div><span className="cf-arrow">→</span></Link>)}
    </div></section>}
    <div className="cf-list cf-section">
      {candidates.length > 0 && <h2 className="cf-h2">Publicados</h2>}
      {filtered.map(s => <Link className="cf-row" key={s.id} to={`/app/conferencistas/${s.id}`}><div><strong>{s.name}</strong><small>{feeLabel(s) || 'Honorarios por completar'}</small></div><span className="cf-arrow">→</span></Link>)}
      {!filtered.length && !candidates.length && <p className="cf-empty">{query ? 'No encontramos ese nombre.' : 'Todavía no hay conferencistas. Pídele a Omar que instale el catálogo.'}</p>}
    </div>
    <p className="cf-note cf-section">¿Un cliente pidió a alguien que no está aquí? Créalo desde la ficha de ese cliente.</p></>}
  </Shell>;
}
