
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PlayCircle, Video } from 'lucide-react';

const featuredVideos = [
  {
    id: 1,
    title: "La educación en Latinoamérica: ¿Nos enseñaron a obedecer o a pensar?",
    youtubeId: "0GqmrL-aBf8",
    speaker: "Omar Villalobos",
    category: "Educación en Latinoamérica",
    description: "Omar desenmascara un sistema que premia la memorización y castiga la creatividad. Una reflexión incómoda, necesaria y urgente. Porque no basta con ir a la escuela… hay que despertar dentro de ella."
  },
  {
    id: 2,
    title: "Autoestima sin filtros: lo que nadie te dijo y todos sentimos",
    youtubeId: "vjh1KQyPwI8",
    speaker: "Yordi Rosado",
    category: "Autoestima",
    description: "Yordi desnuda las inseguridades con la empatía de un amigo y la verdad de un espejo."
  },
  {
    id: 3,
    title: "Ir más allá: el arte de reinventarte cuando ya lo diste todo",
    youtubeId: "4lG-bneYEtg",
    speaker: "Gaby Vargas",
    category: "Ir más allá",
    description: "Gaby te lleva a cruzar esa frontera invisible entre lo que eres… y lo que puedes llegar a ser."
  },
  {
    id: 4,
    title: "El tiempo es ahora: deja de sobrevivir y empieza a incendiar tu propósito",
    youtubeId: "u_lj7Ux1eKE",
    speaker: "Daniel Habif",
    category: "El tiempo es ahora",
    description: "Daniel no da discursos, da sacudidas. Esto no es motivación barata, es una llamada de emergencia al alma."
  },
  {
    id: 5,
    title: "Indeleble: las huellas que deja una mujer que no pidió permiso para brillar",
    youtubeId: "iJkkjNubmsE",
    speaker: "Vilma Núñez",
    category: "Indeleble",
    description: "No es solo un documental, es un manifiesto de poder, cicatrices y victoria."
  },
  {
    id: 6,
    title: "Te educaron para ser chingón: ahora aprende a ser libre",
    youtubeId: "K0VIqh0DpoI",
    speaker: "Omar Villalobos",
    category: "Te educaron para ser chingón",
    description: "Omar no viene a darte consejos, viene a hackearte el alma. Si no estás listo para cambiar, mejor no le des play."
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
        <p className="mt-2 text-sm text-gray-300">{video.description}</p>
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
                  src="https://www.youtube.com/embed/https://youtu.be/0GqmrL-aBf8"
                  title="La educación en Latinoamérica: ¿Nos enseñaron a obedecer o a pensar?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 max-w-4xl mx-auto">
                <h3 className="text-xl font-bold">{featuredVideos[0].title}</h3>
                <p className="text-orange-500">{featuredVideos[0].speaker}</p>
                <p className="mt-2">{featuredVideos[0].description}</p>
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
