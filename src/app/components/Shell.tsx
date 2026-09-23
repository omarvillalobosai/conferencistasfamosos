import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Inbox, Users, Send, Home, LogOut, ChevronLeft } from 'lucide-react';
import { logout } from '../auth';

interface ShellProps {
  title?: string;
  back?: string | true;
  children: React.ReactNode;
}

const Shell = ({ title, back, children }: ShellProps) => {
  const navigate = useNavigate();
  const goBack = () => {
    if (back === true) {
      if (window.history.length > 1) navigate(-1);
      else navigate('/app');
    } else if (typeof back === 'string') navigate(back);
  };

  return (
    <div className="cf-app">
      <header className="cf-top">
        {back ? (
          <button type="button" className="cf-back" onClick={goBack}>
            <ChevronLeft size={18} /> Volver
          </button>
        ) : (
          <NavLink to="/app" className="cf-brand" style={{ textDecoration: 'none' }}>
            Conferencistas<span>Famosos</span> · App
          </NavLink>
        )}
        {title && <span className="cf-note" style={{ fontWeight: 700 }}>{title}</span>}
        <button
          type="button"
          className="cf-back"
          onClick={() => logout()}
          aria-label="Cerrar sesión"
          title="Cerrar sesión"
        >
          <LogOut size={18} />
        </button>
      </header>

      <main className="cf-wrap cf-enter">{children}</main>

      <nav className="cf-nav" aria-label="Secciones del hub">
        <NavLink to="/app" end>
          <Home size={20} />
          Inicio
        </NavLink>
        <NavLink to="/app/solicitudes">
          <Inbox size={20} />
          Solicitudes
        </NavLink>
        <NavLink to="/app/clientes">
          <Users size={20} />
          Clientes
        </NavLink>
        <NavLink to="/app/enviar">
          <Send size={20} />
          Enviar
        </NavLink>
      </nav>
    </div>
  );
};

export default Shell;
