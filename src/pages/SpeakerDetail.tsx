import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { speakers } from '@/data/speakersData';
import { Avatar } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube, BookOpen, Award, MessageCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from '@/components/ui/pagination';

const SpeakerDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the speaker by converting the slug to a name format and matching
  const speakerIndex = useMemo(() => {
    return speakers.findIndex(s => {
      const speakerSlug = s.name.toLowerCase().replace(/\s+/g, '-');
      return speakerSlug === slug;
    });
  }, [slug]);
  
  const speaker = speakerIndex !== -1 ? speakers[speakerIndex] : null;
  
  // Calculate previous and next speaker indices
  const prevSpeakerIndex = speakerIndex > 0 ? speakerIndex - 1 : speakers.length - 1;
  const nextSpeakerIndex = speakerIndex < speakers.length - 1 ? speakerIndex + 1 : 0;
  
  // Get previous and next speaker slugs
  const prevSpeakerSlug = speakers[prevSpeakerIndex].name.toLowerCase().replace(/\s+/g, '-');
  const nextSpeakerSlug = speakers[nextSpeakerIndex].name.toLowerCase().replace(/\s+/g, '-');
  
  // If speaker not found, redirect to 404
  if (!speaker) {
    return <Navigate to="/not-found" />;
  }

  // Example topics/conferences for each speaker (this would ideally come from a database)
  const topics = [
    "Liderazgo transformacional",
    "Comunicación efectiva",
    "Inteligencia emocional",
    "Desarrollo de equipos de alto rendimiento",
    "Motivación y superación personal"
  ];
  
  // Example video ID - in a real app, this would come from a database
  const featuredVideoId = speaker.name === "Yordi Rosado" 
    ? "vjh1KQyPwI8" 
    : "V34T8UhaI9A";

  return (
    <>
      <Helmet>
        <title>{speaker.name} | Conferencista Famoso | ConferencistasFamosos.com</title>
        <meta 
          name="description" 
          content={`${speaker.name} es un conferencista especializado en ${speaker.specialty}. Contrata a ${speaker.name} para tu próximo evento corporativo o conferencia.`} 
        />
        <meta property="og:title" content={`${speaker.name} | Conferencista Famoso`} />
        <meta property="og:description" content={`${speaker.shortBio}`} />
        <meta property="og:image" content={speaker.image} />
        <meta name="keywords" content={`${speaker.name}, conferencista, ${speaker.tags.join(', ')}, conferencias, eventos, charlas`} />
      </Helmet>
      <Navbar />
      <main>
        {/* Speaker Navigation */}
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href={`/speaker/${prevSpeakerSlug}`} 
                    aria-label={`Ver ${speakers[prevSpeakerIndex].name}`}
                  />
                </PaginationItem>
                <PaginationItem className="hidden md:inline-flex">
                  <span className="flex h-9 items-center justify-center px-4 font-medium">
                    {speakerIndex + 1} de {speakers.length}
                  </span>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext 
                    href={`/speaker/${nextSpeakerSlug}`} 
                    aria-label={`Ver ${speakers[nextSpeakerIndex].name}`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="md:w-1/3">
                <Avatar className="w-64 h-64 md:w-80 md:h-80 rounded-xl border-4 border-orange-500 shadow-xl mx-auto">
                  <img src={speaker.image} alt={speaker.name} className="object-cover" />
                </Avatar>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{speaker.name}</h1>
                <p className="text-xl md:text-2xl text-orange-500 mb-6">{speaker.specialty}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
                  {speaker.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-800 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-lg md:text-xl text-gray-300">{speaker.shortBio}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Video Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
              <Youtube className="text-red-600 mr-3" size={32} />
              Conferencia Destacada
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${featuredVideoId}`}
                  title={`${speaker.name} - Conferencia Destacada`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold">{speaker.name} en acción</h3>
                <p className="text-gray-600 mt-2">
                  Mira a {speaker.name} en una de sus conferencias más impactantes
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Biography Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
              <BookOpen className="text-blue-600 mr-3" size={32} />
              Biografía
            </h2>
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p>
                {speaker.name} es reconocido como uno de los conferencistas más destacados en el ámbito de {speaker.specialty}.
                Con una trayectoria profesional que abarca más de 15 años, ha impactado positivamente a miles de personas y cientos
                de organizaciones a través de sus conferencias, talleres y programas de formación.
              </p>
              <p>
                Su enfoque único combina conocimientos teóricos sólidos con experiencias prácticas y anécdotas personales,
                lo que hace que sus presentaciones sean no solo informativas sino también inspiradoras y memorables.
              </p>
              <p>
                Ha colaborado con empresas líderes en diversos sectores, ayudándoles a potenciar el talento de sus equipos
                y a desarrollar culturas organizacionales basadas en valores como la excelencia, la innovación y el trabajo en equipo.
              </p>
              <p>
                Su pasión por compartir conocimientos le ha llevado a escribir varios libros de gran éxito y a desarrollar
                metodologías propias que facilitan la aplicación práctica de conceptos complejos en el día a día personal y profesional.
              </p>
            </div>
          </div>
        </section>
        
        {/* Conference Topics Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
              <Award className="text-orange-600 mr-3" size={32} />
              Temas de Conferencias
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {topics.map((topic, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2 flex items-center">
                      <Star className="text-yellow-500 mr-2" size={18} />
                      {topic}
                    </h3>
                    <p className="text-gray-600">
                      Conferencia diseñada para inspirar y desarrollar habilidades en {topic.toLowerCase()}.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
                Cada conferencia puede ser adaptada a las necesidades específicas de su organización,
                con duración y enfoque personalizados.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Interesado en contratar a {speaker.name}?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo para verificar disponibilidad y recibir una propuesta 
              personalizada para tu evento o empresa.
            </p>
            <div className="flex justify-center">
              <button 
                className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => document.querySelector('a[href="#contacto"]')?.dispatchEvent(new MouseEvent('click'))}
              >
                Solicitar cotización
              </button>
            </div>
          </div>
        </section>
        
        {/* WhatsApp Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
              <MessageCircle className="text-green-500 mr-3" size={32} />
              Contáctanos por WhatsApp
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-green-50 rounded-xl p-8 shadow-md border border-green-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white mb-6">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Estamos a un mensaje de distancia</h3>
                <p className="text-lg text-gray-700 mb-8">
                  En conferencistasfamosos.com, creemos en ti y en tu evento!
                </p>
                <a 
                  href="https://wa.me/5215555555555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                  <MessageCircle size={20} />
                  Enviar mensaje
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bottom Navigation */}
        <div className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => navigate(`/speaker/${prevSpeakerSlug}`)}
              >
                <ChevronLeft size={16} />
                <span className="hidden md:inline">{speakers[prevSpeakerIndex].name}</span>
                <span className="md:hidden">Anterior</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => navigate(`/speaker/${nextSpeakerSlug}`)}
              >
                <span className="hidden md:inline">{speakers[nextSpeakerIndex].name}</span>
                <span className="md:hidden">Siguiente</span>
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SpeakerDetail;
