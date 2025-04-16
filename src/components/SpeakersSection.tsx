import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StarIcon, ThumbsUp, Award, TrendingUp, LightbulbIcon, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const speakers = [
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

const SpeakersSection = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                ${speakers.map((speaker, index) => `
                {
                  "@type": "ListItem",
                  "position": ${index + 1},
                  "item": {
                    "@type": "Person",
                    "name": "${speaker.name}",
                    "description": "${speaker.shortBio}",
                    "image": "${speaker.image}",
                    "jobTitle": "Conferencista",
                    "specialty": "${speaker.specialty}"
                  }
                }`).join(',')}
              ]
            }
          `}
        </script>
      </Helmet>
      <section id="conferencistas" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Nuestros Conferencistas</h2>
            <p className="text-lg text-gray-700">
              Representamos a los mejores talentos de habla hispana en diversas especialidades para cualquier tipo de evento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker) => (
              <Card key={speaker.id} className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${
                speaker.featured ? 'border-2 border-orange-500 ring-2 ring-orange-300' : 'border border-gray-200'
              }`}>
                <div className="relative h-64 w-full">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  {speaker.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 flex items-center">
                        <StarIcon className="mr-1 h-4 w-4" /> Destacado
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">{speaker.name}</CardTitle>
                  <p className="text-orange-500 font-medium">{speaker.specialty}</p>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <p className="text-gray-700 mb-3">{speaker.shortBio}</p>
                  <div className="flex flex-wrap gap-2">
                    {speaker.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Link to={speaker.featured ? '/#destacado' : '/#contacto'} className="w-full">
                    <Button 
                      className={
                        speaker.featured 
                          ? "w-full bg-orange-500 hover:bg-orange-600"
                          : "w-full bg-gray-800 hover:bg-gray-900"
                      }
                    >
                      Solicitar información
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg shadow-md border border-orange-100">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <ThumbsUp className="text-orange-500 h-16 w-16 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">¿No sabes a quién elegir?</h3>
                <p className="text-gray-700 mb-4">
                  Si estás buscando transformar tu evento pero no estás seguro de qué conferencista se adaptaría mejor a tus necesidades, Omar Villalobos puede ayudarte a encontrar la solución perfecta o ser él mismo quien lleve tu evento al siguiente nivel.
                </p>
                <Link to="/#destacado">
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Hablar con Omar Villalobos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpeakersSection;
