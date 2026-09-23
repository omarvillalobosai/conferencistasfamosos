import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Shell from '../components/Shell';
import { fetchSpeakers, feeLabel, speakerLoadError, type Speaker } from '../speakers';
const searchable = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es-MX');
export default function Conferencistas() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const load = () => {
    setLoading(true); setError('');
    fetchSpeakers().then(setSpeakers).catch(() => setError(speakerLoadError)).finally(() => setLoading(false));
  };
  useEffect(load, []);
  const filtered = speakers.filter(s => s.active && searchable(`${s.name} ${s.manager_name ?? ''}`).includes(searchable(query.trim())));
  return <Shell>
    <p className="cf-kicker">Todo en su ficha</p><h1 className="cf-h1">Conferencistas</h1>
    <p className="cf-note">Honorarios, archivos y mensajes del manager.</p>
    <div className="cf-form cf-section"><label>Buscar<input type="search" placeholder="Nombre del conferencista…" value={query} onChange={e => setQuery(e.target.value)} /></label></div>
    {loading ? <div className="cf-spinner" aria-label="Cargando" /> : error ? <div role="alert"><p className="cf-msg cf-msg--error">{error}</p><button className="cf-btn" onClick={load}>Reintentar</button></div> : <div className="cf-list cf-section">
      {filtered.map(s => <Link className="cf-row" key={s.id} to={`/app/conferencistas/${s.id}`}><div><strong>{s.name}</strong><small>{feeLabel(s) || 'Honorarios por completar'}</small></div><span className="cf-arrow">→</span></Link>)}
      {!filtered.length && <p className="cf-empty">{query ? 'No encontramos ese nombre.' : 'Todavía no hay conferencistas. Pídele a Omar que instale el catálogo.'}</p>}
    </div>}
  </Shell>;
}
