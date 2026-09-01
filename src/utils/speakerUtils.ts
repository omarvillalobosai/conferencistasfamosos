
import { speakers } from '@/data/speakersData';

const stripAccents = (value: string) => value.normalize('NFD').replace(/[̀-ͯ]/g, '');

export const getSpeakerSlug = (speakerName: string) => {
  return stripAccents(speakerName.toLowerCase()).replace(/\s+/g, '-');
};

export const findSpeakerBySlug = (slug?: string) => {
  if (!slug) return { speakerIndex: -1, speaker: null };

  const normalizedSlug = stripAccents(slug.toLowerCase());

  const speakerIndex = speakers.findIndex(s => getSpeakerSlug(s.name) === normalizedSlug);

  const speaker = speakerIndex !== -1 ? speakers[speakerIndex] : null;

  return {
    speakerIndex,
    speaker,
    prevSpeakerIndex: speakerIndex > 0 ? speakerIndex - 1 : speakers.length - 1,
    nextSpeakerIndex: speakerIndex < speakers.length - 1 ? speakerIndex + 1 : 0,
  };
};

export const getVideoIdForSpeaker = (speakerName: string) => {
  const videoMap: {[key: string]: string} = {
    "Omar Villalobos": "V34T8UhaI9A",
    "Yordi Rosado": "vjh1KQyPwI8",
    "Daniel Habif": "8P1z2K3Zv6g",
    "Odin Dupeyron": "IvTio0FJf6Y",
    "César Lozano": "pI3EgEamWWA",
    "Ismael Cala": "yjIAshJsVBc",
    "Carlos Páez": "hVAkxJqQdHE",
    "Victor Kuppers": "nWecIwtN2ho",
    "Adriana Macías": "i5X0HF6W_6Y",
    "Gaby Vargas": "gUTQMINYcGg",
    "Elsa Punset": "VNWFw8eojv8",
    "Marisa Lazo": "kuC1HC3HFZA",
    "Vilma Núñez": "NrySFQYz1-k",
    "Claudia Lizaldi": "Ex4zG2bF5ks"
  };
  
  return videoMap[speakerName] || "V34T8UhaI9A"; // Default if not found
};
