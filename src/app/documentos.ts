// Documentos que el equipo manda desde el hub (rider, información, contrato).
// Los archivos viven en public/docs/. Si la URL está vacía, el hub marca el documento como pendiente
// y no deja mandarlo: PENDIENTE: material real (Omar sube los PDF definitivos).

export type DocKind = 'rider' | 'info' | 'contrato';

export interface HubDocument {
  id: string;
  kind: DocKind;
  label: string;
  description: string;
  url: string; // ruta absoluta dentro del sitio o URL externa
  lang: 'es' | 'en';
}

const SITE = 'https://conferencistasfamosos.com';

export const documents: HubDocument[] = [
  {
    id: 'rider-mx',
    kind: 'rider',
    label: 'Rider México',
    description: 'Honorarios en pesos · viajes dentro de México',
    url: `${SITE}/docs/rider-mexico.pdf`,
    lang: 'es',
  },
  {
    id: 'rider-int-es',
    kind: 'rider',
    label: 'Rider internacional',
    description: 'Honorarios en dólares · viajes fuera de México',
    url: `${SITE}/docs/rider-internacional-es.pdf`,
    lang: 'es',
  },
  {
    id: 'rider-int-en',
    kind: 'rider',
    label: 'International rider',
    description: 'Fees in USD · travel outside Mexico',
    url: `${SITE}/docs/rider-international-en.pdf`,
    lang: 'en',
  },
  {
    id: 'info-agencia',
    kind: 'info',
    label: 'Información de la agencia',
    description: 'Presentación de Conferencistas Famosos y catálogo de speakers',
    url: `${SITE}/docs/presentacion-conferencistas-famosos.pdf`,
    lang: 'es',
  },
  {
    id: 'info-omar',
    kind: 'info',
    label: 'Dossier de Omar Villalobos',
    description: 'Biografía, temas y videos de Omar',
    url: `${SITE}/speaker/omar-villalobos`,
    lang: 'es',
  },
  {
    id: 'contrato-modelo',
    kind: 'contrato',
    label: 'Contrato de conferencia',
    description: 'Contrato modelo para firmar (PDF)',
    url: `${SITE}/docs/contrato-conferencia.pdf`,
    lang: 'es',
  },
];

export const docsByKind = (kind: DocKind) => documents.filter((d) => d.kind === kind);
