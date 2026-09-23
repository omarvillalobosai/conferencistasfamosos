import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './app.css';
import { useSession, isAllowed, logout } from './auth';
import Login from './components/Login';
import Inicio from './pages/Inicio';
import Solicitudes from './pages/Solicitudes';
import SolicitudDetalle from './pages/SolicitudDetalle';
import Clientes from './pages/Clientes';
import ClienteFicha from './pages/ClienteFicha';
import Enviar from './pages/Enviar';
import Conferencistas from './pages/Conferencistas';
import ConferencistaFicha from './pages/ConferencistaFicha';
import Instalar from './pages/Instalar';

// Punto de entrada de conferencistasfamosos.com/app (se carga aparte del sitio público).
const HubApp = () => {
  const session = useSession();
  const [allowed, setAllowed] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (!session) {
      setAllowed(undefined);
      return;
    }
    let alive = true;
    isAllowed().then((ok) => {
      if (!alive) return;
      setAllowed(ok);
      if (!ok) logout();
    });
    return () => {
      alive = false;
    };
  }, [session]);

  const head = (
    <Helmet>
      <title>App · Conferencistas Famosos</title>
      <meta name="description" content="Hub interno de la agencia: solicitudes, clientes y envíos." />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="theme-color" content="#0a0a0a" />
      <link rel="manifest" href="/app.webmanifest" />
      <link rel="apple-touch-icon" href="/img/app/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="CF App" />
    </Helmet>
  );

  if (session === undefined || (session && allowed === undefined)) {
    return (
      <div className="cf-app">
        {head}
        <div className="cf-spinner" aria-label="Abriendo la app" />
      </div>
    );
  }

  if (!session || allowed === false) {
    return (
      <>
        {head}
        <Login />
      </>
    );
  }

  return (
    <>
      {head}
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="solicitudes" element={<Solicitudes />} />
        <Route path="solicitudes/:id" element={<SolicitudDetalle />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="clientes/nuevo" element={<ClienteFicha />} />
        <Route path="clientes/:id" element={<ClienteFicha />} />
        <Route path="conferencistas" element={<Conferencistas />} />
        <Route path="conferencistas/:id" element={<ConferencistaFicha />} />
        <Route path="instalar" element={<Instalar />} />
        <Route path="enviar" element={<Enviar />} />
        <Route path="*" element={<Navigate to="/app" replace />} />
      </Routes>
    </>
  );
};

export default HubApp;
