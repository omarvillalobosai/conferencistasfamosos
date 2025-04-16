
import { StarIcon, ThumbsUp, Award, TrendingUp, LightbulbIcon, BrainCircuit } from 'lucide-react';

export interface Speaker {
  id: number;
  name: string;
  image: string;
  specialty: string;
  shortBio: string;
  tags: string[];
  featured: boolean;
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Omar Villalobos',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//omar%20villalobos%20photo%20conferencistas%20famosos.svg',
    specialty: 'Alto Impacto y Transformación Personal',
    shortBio: 'Reconocido como el conferencista #1 de habla hispana con Récord Guinness',
    tags: ['Motivación', 'Liderazgo', 'Éxito'],
    featured: true
  },
  {
    id: 2,
    name: 'Yordi Rosado',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    specialty: 'Comunicación y Desarrollo Personal',
    shortBio: 'Reconocido conductor, escritor y conferencista especializado en relaciones personales',
    tags: ['Comunicación', 'Juventud', 'Relaciones'],
    featured: false
  },
  {
    id: 3,
    name: 'Daniel Habif',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    specialty: 'Mentalidad y Superación',
    shortBio: 'Escritor, conferencista y creador de contenido motivacional con millones de seguidores',
    tags: ['Inspiración', 'Mentalidad', 'Superación'],
    featured: false
  },
  {
    id: 4,
    name: 'Odin Dupeyron',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80',
    specialty: 'Creatividad y Desarrollo Humano',
    shortBio: 'Actor, director y conferencista especializado en creatividad y crecimiento personal',
    tags: ['Creatividad', 'Teatro', 'Desarrollo'],
    featured: false
  },
  {
    id: 5,
    name: 'César Lozano',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    specialty: 'Actitud y Calidad de Vida',
    shortBio: 'Médico, conductor y conferencista experto en bienestar emocional y calidad de vida',
    tags: ['Actitud', 'Bienestar', 'Felicidad'],
    featured: false
  },
  {
    id: 6,
    name: 'Ismael Cala',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    specialty: 'Liderazgo y Mindfulness',
    shortBio: 'Periodista, autor y conferencista especializado en mindfulness y liderazgo consciente',
    tags: ['Mindfulness', 'Liderazgo', 'Bienestar'],
    featured: false
  },
  {
    id: 7,
    name: 'Carlos Páez',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    specialty: 'Resiliencia y Supervivencia',
    shortBio: 'Sobreviviente de la Tragedia de los Andes y conferencista sobre resiliencia extrema',
    tags: ['Resiliencia', 'Supervivencia', 'Trabajo en equipo'],
    featured: false
  },
  {
    id: 8,
    name: 'Victor Kuppers',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    specialty: 'Entusiasmo y Actitud Positiva',
    shortBio: 'Docente, conferenciante y formador especializado en valores, actitud y entusiasmo',
    tags: ['Entusiasmo', 'Valores', 'Actitud'],
    featured: false
  },
  {
    id: 9,
    name: 'Adriana Macías',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    specialty: 'Superación y Motivación',
    shortBio: 'Abogada, escritora y conferencista, experta en superación personal y resiliencia',
    tags: ['Superación', 'Resiliencia', 'Inclusión'],
    featured: false
  },
  {
    id: 10,
    name: 'Gaby Vargas',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1687&q=80',
    specialty: 'Imagen y Desarrollo Personal',
    shortBio: 'Escritora, consultora de imagen y conferencista especializada en comportamiento humano',
    tags: ['Imagen', 'Comunicación', 'Autoestima'],
    featured: false
  },
  {
    id: 11,
    name: 'Elsa Punset',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    specialty: 'Inteligencia Emocional',
    shortBio: 'Escritora y divulgadora especializada en inteligencia emocional y educación positiva',
    tags: ['Emociones', 'Educación', 'Bienestar'],
    featured: false
  },
  {
    id: 12,
    name: 'Marisa Lazo',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    specialty: 'Emprendimiento y Liderazgo',
    shortBio: 'Empresaria, fundadora de Pastelerías Marisa y conferencista sobre emprendimiento femenino',
    tags: ['Emprendimiento', 'Negocios', 'Liderazgo'],
    featured: false
  },
  {
    id: 13,
    name: 'Vilma Núñez',
    image: 'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    specialty: 'Marketing Digital',
    shortBio: 'Consultora, conferencista y experta en marketing digital y estrategias de contenidos',
    tags: ['Marketing', 'Digital', 'Redes Sociales'],
    featured: false
  },
  {
    id: 14,
    name: 'Claudia Lizaldi',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1727&q=80',
    specialty: 'Bienestar Integral y Mindfulness',
    shortBio: 'Conductora, escritora y conferencista enfocada en bienestar, meditación y vida consciente',
    tags: ['Bienestar', 'Mindfulness', 'Desarrollo Personal'],
    featured: false
  }
];
