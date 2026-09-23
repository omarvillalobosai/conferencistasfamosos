import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { db } from './data';

// Los perfiles solo eligen el correo; Supabase verifica el PIN y la allowlist autoriza el acceso.
export const LOGIN_EMAIL: string =
  (import.meta.env.VITE_CF_APP_EMAIL as string | undefined) ?? 'eventos@conferencistasfamosos.com';

// Cuentas que entran con PIN. Cualquier agente teclea su PIN sin elegir nombre: se prueba
// primero la cuenta recordada en este dispositivo y luego las demás.
export const PIN_ACCOUNTS = [
  { id: 'eventos', email: LOGIN_EMAIL },
  { id: 'agencia', email: 'agencia@conferencistasfamosos.com' },
] as const;
const ACCOUNT_KEY = 'cf_app_pin_profile';
const NAME_KEY = 'cf_app_last_name';
const savedAccountId = () => { try { return localStorage.getItem(ACCOUNT_KEY); } catch { return null; } };
const rememberAccount = (id: string) => { try { localStorage.setItem(ACCOUNT_KEY, id); } catch { /* opcional */ } };
/** Nombre de la última persona que entró desde este dispositivo (para el saludo). */
export const rememberedName = (): string | null => { try { return localStorage.getItem(NAME_KEY); } catch { return null; } };
const rememberName = (name: string) => { try { localStorage.setItem(NAME_KEY, name); } catch { /* opcional */ } };

export async function currentProfileName(): Promise<string | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data, error } = await db.from('cf_app_users').select('name').eq('user_id', user.id).maybeSingle();
  if (error || !data?.name) return null;
  return data.name.trim().split(/\s+/)[0];
}

const LOCK_KEY = 'cf_app_lock';
export const MAX_ATTEMPTS = 5;
export const LOCK_SECONDS = 60;

interface LockState {
  fails: number;
  lockedUntil: number;
}

const readLock = (): LockState => {
  try {
    const raw = localStorage.getItem(LOCK_KEY);
    if (!raw) return { fails: 0, lockedUntil: 0 };
    const parsed = JSON.parse(raw) as LockState;
    return { fails: parsed.fails ?? 0, lockedUntil: parsed.lockedUntil ?? 0 };
  } catch {
    return { fails: 0, lockedUntil: 0 };
  }
};

const writeLock = (state: LockState) => {
  try {
    localStorage.setItem(LOCK_KEY, JSON.stringify(state));
  } catch {
    /* sin almacenamiento: se sigue sin bloqueo local */
  }
};

export const lockRemaining = () => Math.max(0, Math.ceil((readLock().lockedUntil - Date.now()) / 1000));
export const attemptsLeft = () => Math.max(0, MAX_ATTEMPTS - readLock().fails);

export interface LoginResult {
  ok: boolean;
  reason?: 'locked' | 'wrong' | 'not-allowed' | 'offline' | 'error';
  message?: string;
}

// La política de contraseñas de Supabase exige mayúsculas, minúsculas y números, así que la
// contraseña real de la cuenta de PIN es `Cf<PIN>Pin` (p. ej. PIN 123456 → Cf123456Pin).
// La persona solo teclea los 6 dígitos.
export const pinToPassword = (pin: string) => `Cf${pin}Pin`;

export async function loginWithPin(pin: string): Promise<LoginResult> {
  const remaining = lockRemaining();
  if (remaining > 0) {
    return { ok: false, reason: 'locked', message: `Espera ${remaining} segundos para volver a intentar.` };
  }
  if (!navigator.onLine) {
    return { ok: false, reason: 'offline', message: 'Sin conexión. Revisa tu internet e intenta de nuevo.' };
  }

  const saved = savedAccountId();
  const order = [...PIN_ACCOUNTS].sort((a, b) => (a.id === saved ? -1 : b.id === saved ? 1 : 0));
  let error: { status?: number } | null = null;
  let matched: (typeof PIN_ACCOUNTS)[number] | null = null;
  for (const account of order) {
    const r = await supabase.auth.signInWithPassword({ email: account.email, password: pinToPassword(pin) });
    error = r.error as { status?: number } | null;
    if (!error) { matched = account; break; }
    if (error.status === 429) break;
  }
  if (error || !matched) {
    const status = error?.status;
    if (status === 429) {
      writeLock({ fails: MAX_ATTEMPTS, lockedUntil: Date.now() + LOCK_SECONDS * 1000 });
      return { ok: false, reason: 'locked', message: 'Demasiados intentos. Espera un minuto.' };
    }
    const lock = readLock();
    const fails = lock.fails + 1;
    if (fails >= MAX_ATTEMPTS) {
      writeLock({ fails: 0, lockedUntil: Date.now() + LOCK_SECONDS * 1000 });
      return {
        ok: false,
        reason: 'locked',
        message: `Cinco intentos fallaron. La entrada queda bloqueada ${LOCK_SECONDS} segundos.`,
      };
    }
    writeLock({ fails, lockedUntil: 0 });
    const left = MAX_ATTEMPTS - fails;
    return {
      ok: false,
      reason: 'wrong',
      message: `El PIN no coincide. ${left === 1 ? 'Queda 1 intento.' : `Quedan ${left} intentos.`}`,
    };
  }

  const allowed = await isAllowed();
  if (!allowed) {
    await supabase.auth.signOut();
    return {
      ok: false,
      reason: 'not-allowed',
      message: 'Esta cuenta todavía no tiene acceso al hub. Pide a Omar que la dé de alta.',
    };
  }

  writeLock({ fails: 0, lockedUntil: 0 });
  rememberAccount(matched.id);
  const name = await currentProfileName();
  if (name) rememberName(name);
  return { ok: true };
}

export async function loginWithEmail(email: string, password: string): Promise<LoginResult> {
  if (!navigator.onLine) {
    return { ok: false, reason: 'offline', message: 'Sin conexión. Revisa tu internet e intenta de nuevo.' };
  }
  const { error } = await supabase.auth.signInWithPassword({ email: email.trim().toLowerCase(), password });
  if (error) {
    return { ok: false, reason: 'wrong', message: 'Correo o contraseña incorrectos.' };
  }
  const allowed = await isAllowed();
  if (!allowed) {
    await supabase.auth.signOut();
    return { ok: false, reason: 'not-allowed', message: 'Esta cuenta todavía no tiene acceso al hub. Pide a Omar que la dé de alta.' };
  }
  const name = await currentProfileName();
  if (name) rememberName(name);
  return { ok: true };
}

export async function isAllowed(): Promise<boolean> {
  const { data, error } = await db.from('cf_app_users').select('user_id').limit(1);
  if (error) return false;
  return (data ?? []).length > 0;
}

export async function logout() {
  await supabase.auth.signOut();
}

export function useSession() {
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  useEffect(() => {
    let alive = true;
    supabase.auth.getSession().then(({ data }) => {
      if (alive) setSession(data.session);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      if (alive) setSession(s);
    });
    return () => {
      alive = false;
      sub.subscription.unsubscribe();
    };
  }, []);
  return session; // undefined = cargando
}
