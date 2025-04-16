
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
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos/omar%20villalobos%20photo%20conferencistas%20famosos.svg',
    specialty: 'Alto Impacto y Transformación Personal',
    shortBio: 'Reconocido como el conferencista #1 de habla hispana con Récord Guinness',
    tags: ['Motivación', 'Liderazgo', 'Éxito'],
    featured: true
  },
  {
    id: 2,
    name: 'Yordi Rosado',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//yordi-rosado-conferencista-famoso.png',
    specialty: 'Comunicación y Desarrollo Personal',
    shortBio: 'Reconocido conductor, escritor y conferencista especializado en relaciones personales',
    tags: ['Comunicación', 'Juventud', 'Relaciones'],
    featured: false
  },
  {
    id: 3,
    name: 'Daniel Habif',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//daniel%20habif%20conferencista%20famosos.png',
    specialty: 'Mentalidad y Superación',
    shortBio: 'Escritor, conferencista y creador de contenido motivacional con millones de seguidores',
    tags: ['Inspiración', 'Mentalidad', 'Superación'],
    featured: false
  },
  {
    id: 4,
    name: 'Odin Dupeyron',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//odin%20dupeyron%20conferencistas%20famosos.svg',
    specialty: 'Creatividad y Desarrollo Humano',
    shortBio: 'Actor, director y conferencista especializado en creatividad y crecimiento personal',
    tags: ['Creatividad', 'Teatro', 'Desarrollo'],
    featured: false
  },
  {
    id: 5,
    name: 'César Lozano',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//cesar%20lozano%20conferencista.png',
    specialty: 'Actitud y Calidad de Vida',
    shortBio: 'Médico, conductor y conferencista experto en bienestar emocional y calidad de vida',
    tags: ['Actitud', 'Bienestar', 'Felicidad'],
    featured: false
  },
  {
    id: 6,
    name: 'Ismael Cala',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//ismael-cala-conferencistas%20famosos.png',
    specialty: 'Liderazgo y Mindfulness',
    shortBio: 'Periodista, autor y conferencista especializado en mindfulness y liderazgo consciente',
    tags: ['Mindfulness', 'Liderazgo', 'Bienestar'],
    featured: false
  },
  {
    id: 7,
    name: 'Carlos Páez',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//carlos-paez-conferencista-famosos.png',
    specialty: 'Resiliencia y Supervivencia',
    shortBio: 'Sobreviviente de la Tragedia de los Andes y conferencista sobre resiliencia extrema',
    tags: ['Resiliencia', 'Supervivencia', 'Trabajo en equipo'],
    featured: false
  },
  {
    id: 8,
    name: 'Victor Kuppers',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//Victor-Kuppers-conferencistas-famosos.png',
    specialty: 'Entusiasmo y Actitud Positiva',
    shortBio: 'Docente, conferenciante y formador especializado en valores, actitud y entusiasmo',
    tags: ['Entusiasmo', 'Valores', 'Actitud'],
    featured: false
  },
  {
    id: 9,
    name: 'Adriana Macías',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//adriana-macias-conferenicstas-famosos.png',
    specialty: 'Superación y Motivación',
    shortBio: 'Abogada, escritora y conferencista, experta en superación personal y resiliencia',
    tags: ['Superación', 'Resiliencia', 'Inclusión'],
    featured: false
  },
  {
    id: 10,
    name: 'Gaby Vargas',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//gaby-varfas-conferencista-famosa.png',
    specialty: 'Imagen y Desarrollo Personal',
    shortBio: 'Escritora, consultora de imagen y conferencista especializada en comportamiento humano',
    tags: ['Imagen', 'Comunicación', 'Autoestima'],
    featured: false
  },
  {
    id: 11,
    name: 'Elsa Punset',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//ElsaPunset_conferencista.png',
    specialty: 'Inteligencia Emocional',
    shortBio: 'Escritora y divulgadora especializada en inteligencia emocional y educación positiva',
    tags: ['Emociones', 'Educación', 'Bienestar'],
    featured: false
  },
  {
    id: 12,
    name: 'Marisa Lazo',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//marisa-lazo-conferencistas-famosos.png',
    specialty: 'Emprendimiento y Liderazgo',
    shortBio: 'Empresaria, fundadora de Pastelerías Marisa y conferencista sobre emprendimiento femenino',
    tags: ['Emprendimiento', 'Negocios', 'Liderazgo'],
    featured: false
  },
  {
    id: 13,
    name: 'Vilma Núñez',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//vilma-nunez-conferencista-famosos.png',
    specialty: 'Marketing Digital',
    shortBio: 'Consultora, conferencista y experta en marketing digital y estrategias de contenidos',
    tags: ['Marketing', 'Digital', 'Redes Sociales'],
    featured: false
  },
  {
    id: 14,
    name: 'Claudia Lizaldi',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//claudia-lizaldi-conferencistas-famosos.png',
    specialty: 'Bienestar Integral y Mindfulness',
    shortBio: 'Conductora, escritora y conferencista enfocada en bienestar, meditación y vida consciente',
    tags: ['Bienestar', 'Mindfulness', 'Desarrollo Personal'],
    featured: false
  }
];
