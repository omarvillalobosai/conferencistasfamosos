import type { HubDocument } from './documentos';

// Plantillas de mensaje. Voz: español mexicano, directo, sin rodeos.
// {nombre} se sustituye por el primer nombre del contacto.

const firstName = (name: string | null | undefined) => (name ?? '').trim().split(/\s+/)[0] || '';
const greet = (name: string | null | undefined, lang: 'es' | 'en' = 'es') => {
  const n = firstName(name);
  if (lang === 'en') return n ? `Hi ${n},` : 'Hi,';
  return n ? `Hola ${n},` : 'Hola,';
};

export const replyToQuote = (name: string | null, eventType: string | null) =>
  `${greet(name)} te escribo de Conferencistas Famosos por tu solicitud${
    eventType ? ` para ${eventType.toLowerCase()}` : ''
  }. Ya la revisamos. ¿Tienes 5 minutos hoy para platicar y afinar lo que necesita tu evento?`;

export const followUp = (name: string | null) =>
  `${greet(name)} ¿cómo vas con la decisión del evento? Si quieres, te ayudo a cerrar fechas y disponibilidad del conferencista esta semana.`;

export const sendDocument = (doc: HubDocument, name: string | null, speaker?: string) => {
  const who = speaker ? speaker : 'nuestros conferencistas';
  if (doc.lang === 'en') {
    return `${greet(name, 'en')} here is the ${doc.label.toLowerCase()} for ${speaker ?? 'our speakers'}: ${doc.url}\nLet me know if you have any questions.`;
  }
  switch (doc.kind) {
    case 'rider':
      return `${greet(name)} te comparto el ${doc.label.toLowerCase()} de ${who}: ${doc.url}\nAhí vienen honorarios, logística y condiciones. Cualquier duda, me dices.`;
    case 'contrato':
      return `${greet(name)} te envío el contrato de la conferencia: ${doc.url}\nRevísalo con calma y me confirmas para agendar la firma.`;
    default:
      return `${greet(name)} aquí va la información de ${who}: ${doc.url}\nSi quieres, te propongo dos o tres opciones según el objetivo de tu evento.`;
  }
};

export const subjectFor = (doc: HubDocument, speaker?: string) => {
  const s = speaker ? ` · ${speaker}` : '';
  switch (doc.kind) {
    case 'rider':
      return `${doc.label}${s} · Conferencistas Famosos`;
    case 'contrato':
      return `Contrato de conferencia${s} · Conferencistas Famosos`;
    default:
      return `Información${s} · Conferencistas Famosos`;
  }
};

// No incluye notas internas ni datos del manager.
export const sendSpeakerMessage = (
  name: string | null,
  speaker?: import('./speakers').Speaker,
  doc?: HubDocument,
  file?: import('./speakers').SpeakerFile,
) => {
  const parts = [doc ? sendDocument(doc, name, speaker?.name) : `${greet(name)} te comparto la información${speaker ? ` de ${speaker.name}` : ''}.`];
  if (speaker?.fee_amount != null) parts.push(`Honorarios: $${Number(speaker.fee_amount).toLocaleString('es-MX', { maximumFractionDigits: 2 })} ${speaker.fee_currency}.`);
  if (speaker?.fee_note?.trim()) parts.push(`Detalle de honorarios: ${speaker.fee_note.trim()}`);
  if (speaker?.conditions?.trim()) parts.push(`Incluye y requiere: ${speaker.conditions.trim()}`);
  if (file) parts.push(`${file.name}: ${file.url}`);
  return parts.join('\n\n');
};
