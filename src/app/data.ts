import type { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

// Las tablas del hub no están en los tipos generados por Lovable; se usa el mismo cliente
// (misma sesión) sin el genérico Database.
export const db = supabase as unknown as SupabaseClient;

export type QuoteStatus = 'new' | 'contestada' | 'propuesta' | 'contratada' | 'perdida';
export const QUOTE_STATUSES: QuoteStatus[] = ['new', 'contestada', 'propuesta', 'contratada', 'perdida'];
export const quoteStatusLabel: Record<QuoteStatus, string> = {
  new: 'Nueva',
  contestada: 'Contestada',
  propuesta: 'Propuesta enviada',
  contratada: 'Contratada',
  perdida: 'Perdida',
};

export type ContactStatus = 'nuevo' | 'en_conversacion' | 'propuesta' | 'cliente' | 'inactivo';
export const CONTACT_STATUSES: ContactStatus[] = ['nuevo', 'en_conversacion', 'propuesta', 'cliente', 'inactivo'];
export const contactStatusLabel: Record<ContactStatus, string> = {
  nuevo: 'Nuevo',
  en_conversacion: 'En conversación',
  propuesta: 'Propuesta',
  cliente: 'Cliente',
  inactivo: 'Inactivo',
};

export type EventKind = 'nota' | 'whatsapp' | 'correo' | 'rider' | 'info' | 'contrato' | 'estado' | 'solicitud';
export const eventKindLabel: Record<EventKind, string> = {
  nota: 'Nota',
  whatsapp: 'WhatsApp',
  correo: 'Correo',
  rider: 'Rider enviado',
  info: 'Información enviada',
  contrato: 'Contrato enviado',
  estado: 'Cambio de estado',
  solicitud: 'Solicitud web',
};

export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  social_media: string | null;
  event_type: string | null;
  speaker_focus: string | null;
  specific_objectives: string | null;
  event_intentions: string | null;
  budget: string | null;
  pitch: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  name: string;
  company: string | null;
  phone: string | null;
  email: string | null;
  city: string | null;
  status: ContactStatus;
  notes: string | null;
  source: string;
  quote_request_id: string | null;
  last_contact_at: string | null;
  status_updated_at: string;
  created_at: string;
  updated_at: string;
}

export interface ContactEvent {
  id: string;
  contact_id: string;
  kind: EventKind;
  detail: string | null;
  created_at: string;
}

export const budgetLabel = (value: string | null) => {
  const map: Record<string, string> = {
    'less-than-3000': 'Menos de $3,000 USD',
    '3000-8000': '$3,000 – $8,000 USD',
    '8000-15000': '$8,000 – $15,000 USD',
    '15000-30000': '$15,000 – $30,000 USD',
    'more-than-30000': 'Más de $30,000 USD',
    'quality-investment': 'Listo para invertir en calidad',
  };
  if (!value) return 'Sin definir';
  return map[value] ?? value;
};

export const isHighBudget = (value: string | null) =>
  !!value && ['8000-15000', '15000-30000', 'more-than-30000', 'quality-investment'].includes(value);

export const normalizeQuoteStatus = (s: string): QuoteStatus =>
  (QUOTE_STATUSES as string[]).includes(s) ? (s as QuoteStatus) : 'new';

export const fmtDate = (iso: string | null | undefined) => {
  if (!iso) return '—';
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(iso));
};

export const fmtDay = (iso: string | null | undefined) => {
  if (!iso) return '—';
  return new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'long' }).format(new Date(iso));
};

export const onlyDigits = (phone: string | null | undefined) => (phone ?? '').replace(/[^0-9]/g, '');

export const waLink = (phone: string | null | undefined, text: string) =>
  `https://wa.me/${onlyDigits(phone)}?text=${encodeURIComponent(text)}`;

export const mailLink = (email: string | null | undefined, subject: string, body: string) =>
  `mailto:${email ?? ''}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// ---- consultas ---------------------------------------------------------------------------
export async function fetchQuotes(): Promise<QuoteRequest[]> {
  const { data, error } = await db
    .from('cf_quote_requests')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(300);
  if (error) throw error;
  return (data ?? []) as QuoteRequest[];
}

export async function updateQuoteStatus(id: string, status: QuoteStatus) {
  const { error } = await db.from('cf_quote_requests').update({ status }).eq('id', id);
  if (error) throw error;
}

export async function fetchContacts(): Promise<Contact[]> {
  const { data, error } = await db
    .from('cf_contacts')
    .select('*')
    .order('updated_at', { ascending: false })
    .limit(1000);
  if (error) throw error;
  return (data ?? []) as Contact[];
}

export async function fetchContact(id: string): Promise<Contact | null> {
  const { data, error } = await db.from('cf_contacts').select('*').eq('id', id).maybeSingle();
  if (error) throw error;
  return (data as Contact) ?? null;
}

export async function findContactByQuote(quoteId: string): Promise<Contact | null> {
  const { data, error } = await db
    .from('cf_contacts')
    .select('*')
    .eq('quote_request_id', quoteId)
    .maybeSingle();
  if (error) throw error;
  return (data as Contact) ?? null;
}

export type ContactInput = Pick<Contact, 'name' | 'company' | 'phone' | 'email' | 'city' | 'notes'>;

export async function saveContact(input: ContactInput, id?: string): Promise<Contact> {
  const payload = {
    name: input.name.trim(),
    company: input.company?.trim() || null,
    phone: input.phone?.trim() || null,
    email: input.email?.trim().toLowerCase() || null,
    city: input.city?.trim() || null,
    notes: input.notes?.trim() || null,
  };
  const query = id
    ? db.from('cf_contacts').update(payload).eq('id', id)
    : db.from('cf_contacts').insert({ ...payload, source: 'manual' });
  const { data, error } = await query.select('*').single();
  if (error) {
    if ((error as { code?: string }).code === '23505') {
      throw new Error('Ya existe un contacto con ese correo. Búscalo en la lista para editarlo.');
    }
    throw error;
  }
  return data as Contact;
}

export async function updateContactStatus(id: string, status: ContactStatus) {
  const { error } = await db.from('cf_contacts').update({ status }).eq('id', id);
  if (error) throw error;
  await addEvent(id, 'estado', `Estado: ${contactStatusLabel[status]}`);
}

export async function fetchEvents(contactId: string): Promise<ContactEvent[]> {
  const { data, error } = await db
    .from('cf_contact_events')
    .select('*')
    .eq('contact_id', contactId)
    .order('created_at', { ascending: false })
    .limit(100);
  if (error) throw error;
  return (data ?? []) as ContactEvent[];
}

export async function addEvent(contactId: string, kind: EventKind, detail: string) {
  const { error } = await db.from('cf_contact_events').insert({ contact_id: contactId, kind, detail });
  if (error) throw error;
}

export async function deleteEvent(id: string) {
  const { error } = await db.from('cf_contact_events').delete().eq('id', id);
  if (error) throw error;
}
