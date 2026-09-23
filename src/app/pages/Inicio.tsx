import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Shell from '../components/Shell';
import { db } from '../data';

const Inicio = () => {
  const [counts, setCounts] = useState<{ nuevas: number; enConversacion: number } | null>(null);
  const [installHint, setInstallHint] = useState(false);

  useEffect(() => {
    Promise.all([
      db.from('cf_quote_requests').select('id', { count: 'exact', head: true }).eq('status', 'new'),
      db.from('cf_contacts').select('id', { count: 'exact', head: true }).in('status', ['nuevo', 'en_conversacion']),
    ])
      .then(([q, c]) => setCounts({ nuevas: q.count ?? 0, enConversacion: c.count ?? 0 }))
      .catch(() => setCounts({ nuevas: 0, enConversacion: 0 }));

    const standalone =
      (navigator as Navigator & { standalone?: boolean }).standalone === true ||
      window.matchMedia('(display-mode: standalone)').matches;
    setInstallHint(!standalone && /iPhone|iPad|Android/i.test(navigator.userAgent));
  }, []);

  const badge = (n: number | undefined) => (
    <span className={`cf-count ${!n ? 'cf-count--zero' : ''}`}>{counts ? n : '·'}</span>
  );

  return (
    <Shell>
      <p className="cf-kicker">La app de la agencia</p>
      <h1 className="cf-h1">¿Qué necesitas hacer?</h1>

      <div className="cf-tiles">
        <Link to="/app/solicitudes" className="cf-tile">
          <div>
            <b>01</b>
            <strong>Solicitudes</strong>
            <small>Quién pidió cotización y a quién falta contestar</small>
          </div>
          {badge(counts?.nuevas)}
        </Link>
        <Link to="/app/clientes" className="cf-tile">
          <div>
            <b>02</b>
            <strong>Clientes</strong>
            <small>Todos los contactos, en un sitio, con su seguimiento</small>
          </div>
          {badge(counts?.enConversacion)}
        </Link>
        <Link to="/app/enviar" className="cf-tile">
          <div>
            <b>03</b>
            <strong>Enviar</strong>
            <small>Rider, información o contrato por WhatsApp o correo</small>
          </div>
          <span className="cf-count cf-count--zero">→</span>
        </Link>
        <Link to="/app/clientes/nuevo" className="cf-tile">
          <div>
            <b>04</b>
            <strong>Nuevo contacto</strong>
            <small>Alta a mano de alguien que llegó por teléfono o en un evento</small>
          </div>
          <span className="cf-count cf-count--zero">+</span>
        </Link>
      </div>

      {installHint && (
        <p className="cf-note" style={{ marginTop: 22 }}>
          Para tenerla como app: en Safari toca «Compartir» y luego «Añadir a pantalla de inicio». En
          Android, el menú del navegador y «Instalar app».
        </p>
      )}
    </Shell>
  );
};

export default Inicio;
