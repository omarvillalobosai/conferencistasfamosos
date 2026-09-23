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

// ── Candidatos: conferencistas que pidió un cliente y todavía no están en el sitio ──
export type Stage = 'candidato' | 'evaluacion' | 'listo' | 'publicado';
export const stageLabel: Record<Stage, string> = { candidato: 'Candidato', evaluacion: 'En evaluación', listo: 'Listo para publicar', publicado: 'Publicado' };
export interface SpeakerProfile {
  stage: Stage; youtube_channel: string | null; website: string | null; specialty: string | null;
  short_bio: string | null; bio: string | null; topics: string[]; photo_url: string | null;
}
export type FullSpeaker = Speaker & SpeakerProfile;
export type ProfileInput = Omit<SpeakerProfile, 'stage'>;
export interface SpeakerRequest { id: string; speaker_id: string; contact_id: string; note: string | null; created_at: string; contact?: Pick<Contact, 'id' | 'name' | 'company'> | null; speaker?: Pick<FullSpeaker, 'id' | 'name' | 'stage'> | null }

const slugify = (name: string) => name.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Crea el candidato (inactivo, etapa candidato) y lo liga al cliente que lo pidió. */
export async function createCandidate(input: { name: string; youtube_channel?: string; contactId: string }): Promise<FullSpeaker> {
  const name = input.name.trim();
  const base = slugify(name) || 'candidato';
  const { data: taken } = await db.from('cf_speakers').select('slug').like('slug', `${base}%`);
  const slugs = new Set((taken ?? []).map((r: { slug: string }) => r.slug));
  let slug = base; let n = 2;
  while (slugs.has(slug)) slug = `${base}-${n++}`;
  const { data, error } = await db.from('cf_speakers').insert({ name, slug, active: false, stage: 'candidato', youtube_channel: input.youtube_channel?.trim() || null }).select('*').single();
  if (error) throw error;
  const { error: reqError } = await db.from('cf_speaker_requests').insert({ speaker_id: data.id, contact_id: input.contactId });
  if (reqError) throw reqError;
  return data;
}
export async function addSpeakerRequest(speakerId: string, contactId: string): Promise<void> {
  const { error } = await db.from('cf_speaker_requests').upsert({ speaker_id: speakerId, contact_id: contactId }, { onConflict: 'speaker_id,contact_id' });
  if (error) throw error;
}
export async function fetchSpeakerRequests(speakerId: string): Promise<SpeakerRequest[]> {
  const { data, error } = await db.from('cf_speaker_requests').select('*, contact:cf_contacts(id, name, company)').eq('speaker_id', speakerId).order('created_at');
  if (error) throw error;
  return data ?? [];
}
export async function fetchContactRequests(contactId: string): Promise<SpeakerRequest[]> {
  const { data, error } = await db.from('cf_speaker_requests').select('*, speaker:cf_speakers(id, name, stage)').eq('contact_id', contactId).order('created_at');
  if (error) throw error;
  return data ?? [];
}
export async function fetchAllRequests(): Promise<SpeakerRequest[]> {
  const { data, error } = await db.from('cf_speaker_requests').select('id, speaker_id, contact_id, note, created_at');
  if (error) throw error;
  return data ?? [];
}
export async function saveProfile(id: string, input: ProfileInput): Promise<FullSpeaker> {
  const { data, error } = await db.from('cf_speakers').update(input).eq('id', id).select('*').single();
  if (error) throw error;
  return data;
}
export async function setStage(id: string, stage: Stage): Promise<FullSpeaker> {
  const { data, error } = await db.from('cf_speakers').update({ stage, active: stage === 'publicado' }).eq('id', id).select('*').single();
  if (error) throw error;
  return data;
}
/** Qué falta para que el perfil esté completo. Devuelve etiquetas de lo pendiente. */
export function missingFields(s: FullSpeaker, hasPhoto: boolean): string[] {
  const missing: string[] = [];
  if (!s.specialty?.trim()) missing.push('Especialidad');
  if (!s.short_bio?.trim()) missing.push('Bio corta');
  if (!s.bio?.trim()) missing.push('Bio completa');
  if ((s.topics ?? []).filter(t => t.trim()).length < 3) missing.push('Tres temas');
  if (!hasPhoto && !s.photo_url) missing.push('Foto');
  if (!s.youtube_channel?.trim() && !s.website?.trim()) missing.push('Canal o sitio web');
  if (s.fee_amount == null) missing.push('Honorarios');
  if (!s.conditions?.trim()) missing.push('Condiciones');
  if (!s.manager_phone?.trim() && !s.manager_email?.trim()) missing.push('Contacto del manager');
  return missing;
}
export const PROFILE_FIELDS = 9;
