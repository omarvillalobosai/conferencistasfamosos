import { db, type Contact } from './data';

export interface Speaker {
  id: string; slug: string; name: string; fee_amount: number | null; fee_currency: string;
  fee_note: string | null; conditions: string | null; manager_name: string | null;
  manager_phone: string | null; manager_email: string | null; notes: string | null;
  active: boolean; created_at: string; updated_at: string;
}
export type FileKind = 'rider' | 'propuesta' | 'contrato' | 'foto' | 'otro';
export const fileKinds: FileKind[] = ['rider', 'propuesta', 'contrato', 'foto', 'otro'];
export interface SpeakerFile {
  id: string; speaker_id: string; kind: FileKind; name: string; url: string; public_id: string;
  resource_type: string; bytes: number; uploaded_by: string | null; hidden: boolean; created_at: string;
}
export interface SpeakerNote {
  id: string; speaker_id: string; contact_id: string | null; body: string;
  source: 'whatsapp' | 'manual'; created_by: string | null; created_at: string;
}
export type SpeakerInput = Pick<Speaker, 'fee_amount' | 'fee_currency' | 'fee_note' | 'conditions' | 'manager_name' | 'manager_phone' | 'manager_email' | 'notes'>;
export const speakerLoadError = 'No se pudieron cargar los conferencistas. Revisa tu conexión; si es la primera vez, Omar debe instalar la actualización del hub.';
export async function fetchSpeakers(): Promise<Speaker[]> {
  const { data, error } = await db.from('cf_speakers').select('*').order('name');
  if (error) throw error;
  return data ?? [];
}
export async function fetchSpeaker(id: string): Promise<Speaker> {
  const { data, error } = await db.from('cf_speakers').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
}
export async function saveSpeaker(id: string, input: SpeakerInput): Promise<Speaker> {
  const { data, error } = await db.from('cf_speakers').update(input).eq('id', id).select('*').single();
  if (error) throw error;
  return data;
}
export async function fetchSpeakerFiles(id: string): Promise<SpeakerFile[]> {
  const { data, error } = await db.from('cf_speaker_files').select('*').eq('speaker_id', id).eq('hidden', false).order('created_at', { ascending: false });
  if (error) throw error;
  return data ?? [];
}
export async function fetchSpeakerNotes(id: string): Promise<SpeakerNote[]> {
  const { data, error } = await db.from('cf_speaker_notes').select('*').eq('speaker_id', id).order('created_at', { ascending: false });
  if (error) throw error;
  return data ?? [];
}
export async function fetchSpeakerContacts(id: string): Promise<Contact[]> {
  const { data, error } = await db.from('cf_contacts').select('*').eq('speaker_id', id).order('updated_at', { ascending: false });
  if (error) throw error;
  return data ?? [];
}
export async function setContactSpeaker(contactId: string, speakerId: string | null): Promise<Contact> {
  const { data, error } = await db.from('cf_contacts').update({ speaker_id: speakerId }).eq('id', contactId).select('*').single();
  if (error) throw error;
  return data;
}
export function feeLabel(speaker: Pick<Speaker, 'fee_amount' | 'fee_currency'>) {
  return speaker.fee_amount == null ? '' : `$${Number(speaker.fee_amount).toLocaleString('es-MX', { maximumFractionDigits: 2 })} ${speaker.fee_currency}`;
}
