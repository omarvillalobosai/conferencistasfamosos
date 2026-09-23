import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { db } from './data';

// Entrada con PIN: la cuenta del equipo es un usuario de Supabase Auth cuyo password es un PIN de 6 dígitos.
// El correo de esa cuenta se fija aquí (o en VITE_CF_APP_EMAIL). Quien entra además debe estar en cf_app_users.
export const LOGIN_EMAIL: string =
  (import.meta.env.VITE_CF_APP_EMAIL as string | undefined) ?? 'eventos@conferencistasfamosos.com';

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

export async function loginWithPin(pin: string, email: string = LOGIN_EMAIL): Promise<LoginResult> {
  const remaining = lockRemaining();
  if (remaining > 0) {
    return { ok: false, reason: 'locked', message: `Espera ${remaining} segundos para volver a intentar.` };
  }
  if (!navigator.onLine) {
    return { ok: false, reason: 'offline', message: 'Sin conexión. Revisa tu internet e intenta de nuevo.' };
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password: pinToPassword(pin) });
  if (error) {
    const status = (error as { status?: number }).status;
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
