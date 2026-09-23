import React, { useCallback, useEffect, useState } from 'react';
import PinPad from './PinPad';
import StageLogo from './StageLogo';
import { loginWithPin, loginWithEmail, lockRemaining, rememberedName } from '../auth';
import { fraseDelDia, type Frase } from '../frases';

const greetingFor = (d: Date) => {
  const h = d.getHours();
  if (h >= 5 && h < 12) return 'Buenos días';
  if (h >= 12 && h < 19) return 'Buenas tardes';
  return 'Buenas noches';
};

// Fondo de escenario: la foto siempre; el video solo si hay red y no se pidió menos movimiento.
const useStageVideo = () => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || conn?.saveData) return;
    const start = () => setOn(true);
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => window.removeEventListener('load', start);
  }, []);
  return on;
};

const Login = () => {
  const [name, setName] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState(false);
  const [locked, setLocked] = useState(lockRemaining());
  const [mode, setMode] = useState<'pin' | 'email'>('pin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [opened, setOpened] = useState(false);
  const [greeting, setGreeting] = useState('Hola');
  const [frase, setFrase] = useState<Frase | null>(null);
  const videoOn = useStageVideo();

  useEffect(() => {
    // Todo en el cliente: el nombre viene del último acceso en este dispositivo.
    setGreeting(greetingFor(new Date()));
    setName(rememberedName());
    setFrase(fraseDelDia());
  }, []);

  useEffect(() => {
    if (locked <= 0) return;
    const t = window.setInterval(() => {
      const r = lockRemaining();
      setLocked(r);
      if (r <= 0) {
        setMessage('');
        window.clearInterval(t);
      }
    }, 1000);
    return () => window.clearInterval(t);
  }, [locked]);

  const handlePin = useCallback(async (pin: string) => {
    setMessage('Comprobando…');
    setIsError(false);
    setBusy(true);
    let result;
    try { result = await loginWithPin(pin); }
    catch { result = { ok: false, message: 'No se pudo conectar. Intenta de nuevo.', reason: 'error' as const }; }
    finally { setBusy(false); }
    if (!result.ok) {
      setIsError(true);
      setMessage(result.message ?? 'No se pudo entrar.');
      if (result.reason === 'locked') setLocked(lockRemaining());
      return false;
    }
    setMessage('');
    setOpened(true); // la luz sube a tope mientras llega la sesión
    return true;
  }, []);

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setIsError(false);
    setMessage('Comprobando…');
    const result = await loginWithEmail(email, password);
    setBusy(false);
    if (!result.ok) {
      setIsError(true);
      setMessage(result.message ?? 'No se pudo entrar.');
      return;
    }
    setMessage('');
    setOpened(true);
  };

  return (
    <div className={`cf-app cf-login cf-stage ${opened ? 'is-open' : ''}`}>
      <div className="cf-stage__bg" aria-hidden="true">
        <img src="/img/hero/hero-escenario-800.webp" srcSet="/img/hero/hero-escenario-800.webp 800w, /img/hero/hero-escenario-1600.webp 1600w" sizes="100vw" alt="" decoding="async" />
        {videoOn && (
          <video autoPlay muted loop playsInline preload="auto" poster="/img/hero/hero-escenario-800.webp" tabIndex={-1}>
            <source src="/img/hero/hero-escenario.webm" type="video/webm" />
            <source src="/img/hero/hero-escenario.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div className="cf-stage__beam" aria-hidden="true" />
      <div className="cf-login__box cf-stage__box">
        <StageLogo />
        <h1 className="cf-welcome cf-stage__in" style={{ animationDelay: '1.25s' }}>
          {mode === 'pin' ? (name ? `${greeting}, ${name}.` : `${greeting}.`) : 'Te damos la bienvenida.'}
        </h1>
        {frase && (
          <figure className="cf-spark cf-stage__in" style={{ animationDelay: '1.45s' }}>
            <blockquote>“{frase.texto}”</blockquote>
            <figcaption>{frase.autor}</figcaption>
          </figure>
        )}
        <div className="cf-stage__in" style={{ animationDelay: '1.65s' }}>
          {mode === 'pin' ? (
            <>
              <p className="cf-note" style={{ marginTop: 6 }}>Escribe tu PIN para entrar.</p>
              <PinPad onComplete={handlePin} disabled={locked > 0 || busy || opened} />
            </>
          ) : (
            <form className="cf-form" style={{ marginTop: 22, textAlign: 'left' }} onSubmit={submitEmail}>
              <label>
                Correo
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" required />
              </label>
              <label>
                Contraseña
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
              </label>
              <button type="submit" className="cf-btn cf-btn--primary" disabled={busy}>
                {busy ? 'Entrando…' : 'Entrar'}
              </button>
            </form>
          )}
          <p
            className={`cf-msg ${isError ? 'cf-msg--error' : ''}`}
            style={{ marginTop: 16 }}
            aria-live="polite"
          >
            {opened ? '¡Adelante!' : locked > 0 ? `Espera ${locked} segundos para volver a intentar.` : message}
          </p>
          <button
            type="button"
            className="cf-back"
            disabled={busy}
            style={{ margin: '18px auto 0' }}
            onClick={() => {
              setMode(mode === 'pin' ? 'email' : 'pin');
              setMessage('');
              setIsError(false);
            }}
          >
            {mode === 'pin' ? 'Entrar con correo y contraseña' : 'Volver al PIN'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
