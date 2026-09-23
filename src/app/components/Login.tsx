import React, { useCallback, useEffect, useState } from 'react';
import PinPad from './PinPad';
import { loginWithPin, loginWithEmail, lockRemaining, PIN_PROFILES, savedPinProfile, rememberPinProfile } from '../auth';

const Login = () => {
  const [profile, setProfile] = useState(savedPinProfile);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState(false);
  const [locked, setLocked] = useState(lockRemaining());
  const [mode, setMode] = useState<'pin' | 'email'>('pin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);

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
    try { result = await loginWithPin(pin, profile.email); }
    catch { result = { ok: false, message: 'No se pudo conectar. Intenta de nuevo.', reason: 'error' as const }; }
    finally { setBusy(false); }
    if (!result.ok) {
      setIsError(true);
      setMessage(result.message ?? 'No se pudo entrar.');
      if (result.reason === 'locked') setLocked(lockRemaining());
      return false;
    }
    setMessage('');
    return true;
  }, [profile.email]);

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
  };

  return (
    <div className="cf-app cf-login">
      <div className="cf-login__box cf-enter">
        <p className="cf-kicker">Conferencistas Famosos</p>
        <h1 className="cf-welcome">{mode === 'pin' ? `Hola, ${profile.name}` : 'Te damos la bienvenida'}</h1>
        {mode === 'pin' ? (
          <>
            <p className="cf-note" style={{ marginTop: 8 }}>
              Escribe tu PIN para entrar.
            </p>
            <div className="cf-profile-picker" role="group" aria-label="¿Quién entra?">
              {PIN_PROFILES.map((person) => (
                <button type="button" key={person.id} aria-pressed={person.id === profile.id}
                  disabled={busy} onClick={() => {
                    setProfile(person); rememberPinProfile(person.id); setMessage(''); setIsError(false);
                  }}>{person.name}</button>
              ))}
            </div>
            <PinPad key={profile.id} onComplete={handlePin} disabled={locked > 0 || busy} />
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
          {locked > 0 ? `Espera ${locked} segundos para volver a intentar.` : message}
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
  );
};

export default Login;
