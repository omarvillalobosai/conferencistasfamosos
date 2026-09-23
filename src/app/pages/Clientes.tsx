import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus } from 'lucide-react';
import Shell from '../components/Shell';
import { fetchContacts, CONTACT_STATUSES, contactStatusLabel, fmtDay, type Contact, type ContactStatus } from '../data';

type Filter = 'todos' | ContactStatus;

const norm = (s: string) => s.toLocaleLowerCase('es-MX').normalize('NFD').replace(/[̀-ͯ]/g, '');

const Clientes = () => {
  const [rows, setRows] = useState<Contact[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>(() => (sessionStorage.getItem('cf_c_filter') as Filter) || 'todos');
  const [query, setQuery] = useState(() => sessionStorage.getItem('cf_c_query') ?? '');

  useEffect(() => {
    fetchContacts().then(setRows).catch((e) => setError(e.message ?? String(e)));
  }, []);
  useEffect(() => {
    sessionStorage.setItem('cf_c_filter', filter);
    sessionStorage.setItem('cf_c_query', query);
  }, [filter, query]);

  const list = useMemo(() => {
    if (!rows) return [];
    const q = norm(query.trim());
    return rows.filter((c) => {
      if (filter !== 'todos' && c.status !== filter) return false;
      if (!q) return true;
      return norm(`${c.name} ${c.company ?? ''} ${c.city ?? ''} ${c.email ?? ''} ${c.phone ?? ''}`).includes(q);
    });
  }, [rows, filter, query]);

  const count = (f: Filter) => (!rows ? 0 : f === 'todos' ? rows.length : rows.filter((c) => c.status === f).length);

  return (
    <Shell back="/app">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12 }}>
        <div>
          <p className="cf-kicker">Base de clientes</p>
          <h1 className="cf-h1">Todos los contactos, en un sitio.</h1>
        </div>
        <Link to="/app/clientes/nuevo" className="cf-btn cf-btn--primary cf-btn--sm" aria-label="Nuevo contacto">
          <Plus size={18} /> Nuevo
        </Link>
      </header>

      <label className="cf-search">
        <Search size={18} aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nombre, empresa, ciudad, correo…"
          aria-label="Buscar contactos"
        />
      </label>

      <div className="cf-chips">
        {(['todos', ...CONTACT_STATUSES] as Filter[]).map((f) => (
          <button key={f} type="button" className="cf-chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f === 'todos' ? 'Todos' : contactStatusLabel[f]}
            <span>{count(f)}</span>
          </button>
        ))}
      </div>

      {error && <p className="cf-msg cf-msg--error">No pudimos abrir la lista: {error}</p>}
      {!rows && !error && <div className="cf-spinner" aria-label="Cargando" />}

      {rows && (
        <section className="cf-list" aria-label="Clientes">
          {list.length === 0 && (
            <p className="cf-empty">
              {rows.length === 0 ? 'Todavía no hay contactos. Añade el primero.' : 'Nadie coincide con esa búsqueda.'}
            </p>
          )}
          {list.map((c) => (
            <Link key={c.id} to={`/app/clientes/${c.id}`} className="cf-row">
              <div>
                <strong>{c.name}</strong>
                <small>
                  {c.company || 'Sin empresa'}
                  {c.city ? ` · ${c.city}` : ''}
                </small>
                <small>
                  {c.last_contact_at ? `Último contacto: ${fmtDay(c.last_contact_at)}` : `Alta: ${fmtDay(c.created_at)}`}
                </small>
              </div>
              <span className={`cf-status cf-status--${c.status}`}>{contactStatusLabel[c.status]}</span>
            </Link>
          ))}
        </section>
      )}
    </Shell>
  );
};

export default Clientes;
