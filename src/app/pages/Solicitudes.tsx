import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Shell from '../components/Shell';
import {
  fetchQuotes,
  QUOTE_STATUSES,
  quoteStatusLabel,
  normalizeQuoteStatus,
  budgetLabel,
  isHighBudget,
  fmtDate,
  type QuoteRequest,
  type QuoteStatus,
} from '../data';

type Filter = 'todas' | QuoteStatus;

const Solicitudes = () => {
  const [rows, setRows] = useState<QuoteRequest[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>(() => (typeof window === 'undefined' ? 'todas' : (sessionStorage.getItem('cf_q_filter') as Filter) || 'todas'));

  useEffect(() => {
    fetchQuotes().then(setRows).catch((e) => setError(e.message ?? String(e)));
  }, []);

  useEffect(() => {
    sessionStorage.setItem('cf_q_filter', filter);
  }, [filter]);

  const list = useMemo(() => {
    if (!rows) return [];
    return filter === 'todas' ? rows : rows.filter((r) => normalizeQuoteStatus(r.status) === filter);
  }, [rows, filter]);

  const count = (f: Filter) =>
    !rows ? 0 : f === 'todas' ? rows.length : rows.filter((r) => normalizeQuoteStatus(r.status) === f).length;

  const contratadas = rows ? rows.filter((r) => normalizeQuoteStatus(r.status) === 'contratada').length : 0;
  const ratio = rows && rows.length ? Math.round((contratadas / rows.length) * 10) : 0;

  return (
    <Shell back="/app">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12 }}>
        <div>
          <p className="cf-kicker">Solicitudes</p>
          <h1 className="cf-h1">¿A quién hay que contestar?</h1>
        </div>
        {rows && rows.length > 0 && (
          <div style={{ textAlign: 'right', lineHeight: 1.1 }}>
            <strong style={{ fontSize: 28, fontWeight: 800 }}>{ratio}</strong>
            <span className="cf-note" style={{ display: 'block', fontSize: 11 }}>
              de cada 10
              <br />
              han contratado
            </span>
          </div>
        )}
      </header>

      <div className="cf-chips" style={{ marginTop: 14 }}>
        {(['todas', ...QUOTE_STATUSES] as Filter[]).map((f) => (
          <button key={f} type="button" className="cf-chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f === 'todas' ? 'Todas' : quoteStatusLabel[f]}
            <span>{count(f)}</span>
          </button>
        ))}
      </div>

      {error && <p className="cf-msg cf-msg--error">No pudimos abrir la lista: {error}</p>}
      {!rows && !error && <div className="cf-spinner" aria-label="Cargando" />}

      {rows && (
        <section className="cf-list" aria-label="Lista de solicitudes">
          {list.length === 0 && (
            <p className="cf-empty">
              {filter === 'new' ? 'Todo contestado. Nada pendiente.' : 'No hay solicitudes en este estado.'}
            </p>
          )}
          {list.map((q) => {
            const st = normalizeQuoteStatus(q.status);
            return (
              <Link key={q.id} to={`/app/solicitudes/${q.id}`} className="cf-row">
                <div>
                  <strong>
                    {q.name}
                    {isHighBudget(q.budget) && (
                      <span title="Presupuesto alto" style={{ marginLeft: 6 }}>
                        🔥
                      </span>
                    )}
                  </strong>
                  <small>
                    {q.company || 'Sin empresa'} · {q.event_type || 'Evento'} · {budgetLabel(q.budget)}
                  </small>
                  <small>{fmtDate(q.created_at)}</small>
                </div>
                <span className={`cf-status cf-status--${st}`}>{quoteStatusLabel[st]}</span>
              </Link>
            );
          })}
        </section>
      )}
    </Shell>
  );
};

export default Solicitudes;
