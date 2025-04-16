
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PlayCircle, Video } from 'lucide-react';

const featuredVideos = [
  {
    id: 1,
    title: "Omar Villalobos - Activa Tu Mente y Alcanza el Éxito",
    youtubeId: "V34T8UhaI9A",
    speaker: "Omar Villalobos",
    category: "Motivación"
  },
  {
    id: 2,
    title: "Cómo transformar desafíos en oportunidades",
    youtubeId: "uLOB6hj3M_Q",
    speaker: "Omar Villalobos",
    category: "Superación Personal"
  },
  {
    id: 3,
    title: "Las 3 claves del éxito duradero",
    youtubeId: "WKfcS4IHhUY", 
    speaker: "Omar Villalobos",
    category: "Liderazgo"
  },
  {
    id: 4,
    title: "Comunicación efectiva en las relaciones",
    youtubeId: "0GqmrL-aBf8",
    speaker: "Yordi Rosado",
    category: "Comunicación"
  },
  {
    id: 5,
    title: "Impulsa tu Crecimiento Profesional",
    youtubeId: "vjh1KQyPwI8",
    speaker: "Carlos Páez",
    category: "Desarrollo Profesional"
  },
  {
    id: 6,
    title: "Estrategias para Enfrentar la Adversidad",
    youtubeId: "4lG-bneYEtg",
    speaker: "Omar Villalobos",
    category: "Resiliencia"
  },
  {
    id: 7,
    title: "Cómo Desarrollar una Mentalidad de Éxito",
    youtubeId: "u_lj7Ux1eKE",
    speaker: "Ricardo Velázquez",
    category: "Motivación"
  },
  {
    id: 8,
    title: "Construyendo Equipos de Alto Rendimiento",
    youtubeId: "iJkkjNubmsE",
    speaker: "Ana María Torres",
    category: "Liderazgo"
  },
  {
    id: 9,
    title: "La Fórmula del Emprendimiento Exitoso",
    youtubeId: "K0VIqh0DpoI",
    speaker: "Gabriela Reyes",
    category: "Emprendimiento"
  }
];

const VideoCard: React.FC<{video: typeof featuredVideos[0]}> = ({ video }) => {
  return (
    <div className="bg-black/30 rounded-lg overflow-hidden">
      <div className="relative aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0"
        ></iframe>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{video.title}</h3>
        <p className="text-orange-500">{video.speaker}</p>
        <span className="inline-block mt-2 bg-gray-800 text-xs px-2 py-1 rounded-full">
          {video.category}
        </span>
      </div>
    </div>
  );
};

const Videos = () => {
  return (
    <>
      <Helmet>
        <title>Videos de Conferencias | ConferencistasFamosos.com</title>
        <meta 
          name="description" 
          content="Videos de los mejores conferencistas de habla hispana. Conferencias motivacionales, de liderazgo y desarrollo personal." 
        />
      </Helmet>
      <Navbar />
      <main>
        <section className="section-padding bg-gray-900 text-white">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Videos de <span className="text-gradient">Conferencias</span>
              </h1>
              <p className="text-lg text-gray-300">
                Inspírate con los mejores momentos de nuestros conferencistas en eventos pasados.
              </p>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Video className="mr-2 text-orange-500" /> Video Destacado
              </h2>
              <div className="aspect-video w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/V34T8UhaI9A"
                  title="Omar Villalobos - Activa Tu Mente y Alcanza el Éxito"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Más Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredVideos.slice(1).map(video => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Videos;
