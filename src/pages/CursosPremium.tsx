
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Video, Play, ArrowLeft } from 'lucide-react';

const CursosPremium: React.FC = () => {
  // Scroll to top on page load
  useScrollToTop();
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  // Check if user is registered
  useEffect(() => {
    const registered = localStorage.getItem('cursosPremiumRegistered');
    if (!registered) {
      // Redirect to courses page if not registered
      navigate('/cursos');
    } else {
      setIsAuthorized(true);
    }
  }, [navigate]);

  const categories = [
    {
      id: 'soy-cliente',
      title: 'Cursos para Clientes',
      playlistId: 'PL_KW_uw2ITSuvKbQg1_J_QmcYXFw4dybJ',
      courses: [
        {
          title: 'Cómo elegir al conferencista ideal',
          description: 'Aprende a seleccionar el conferencista perfecto para tu evento según tus objetivos y audiencia.',
          videoId: 'e-kHJ3J2ZTQ'
        },
        {
          title: 'Tips para organizar un evento de alto impacto',
          description: 'Estrategias probadas para crear eventos que dejen huella en tu audiencia.',
          videoId: 'Rkzv8fJTA4k'
        },
        {
          title: 'Tipos de conferencistas',
          description: 'Conoce los diferentes perfiles de conferencistas y cuándo contratar cada uno.',
          videoId: 'WHPLOFiSHJ0'
        }
      ]
    },
    {
      id: 'soy-conferencista',
      title: 'Cursos para Conferencistas',
      playlistId: 'PL_KW_uw2ITStJ7NfAr3ypfAuGYEzxi_TH',
      courses: [
        {
          title: 'Cómo construir tu marca personal como speaker',
          description: 'Estrategias avanzadas para posicionarte como referente en tu especialidad.',
          videoId: 'xKpLOtvV-G4'
        },
        {
          title: 'El arte de hablar y vender sin parecer vendedor',
          description: 'Técnicas de comunicación persuasiva para conferencistas profesionales.',
          videoId: 'K0pxo-dS9Hc'
        },
        {
          title: 'Masterclass: Storytelling avanzado',
          description: 'Domina el arte de contar historias memorables que transformen a tu audiencia.',
          videoId: 'JGLfyYUKevQ'
        }
      ]
    },
    {
      id: 'quiero-ser-conferencista',
      title: 'Quiero ser Conferencista',
      playlistId: 'PL_KW_uw2ITSsNpz2vbcEXYV16TrwiKGZE',
      courses: [
        {
          title: 'Primeros pasos como conferencista',
          description: 'Guía para iniciarte en el mundo de las conferencias y charlas profesionales.',
          videoId: 'up9InGrSS9o'
        },
        {
          title: 'Cómo superar el miedo escénico',
          description: 'Técnicas prácticas para dominar los nervios y brillar en el escenario.',
          videoId: 'M8Hs_EsGZtE'
        },
        {
          title: 'Estructura básica de una conferencia efectiva',
          description: 'Aprende a organizar tus ideas para crear conferencias de alto impacto.',
          videoId: 'a9YctEARYQs'
        }
      ]
    }
  ];

  if (!isAuthorized) {
    return null; // Don't render anything until authorization check completes
  }

  return (
    <>
      <Helmet>
        <title>Cursos Premium | Conferencistas Famosos</title>
        <meta 
          name="description" 
          content="Accede a nuestro contenido exclusivo para desarrollar habilidades específicas según tu rol o aspiración" 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              className="mb-8 text-gray-300 hover:text-white flex items-center gap-2"
              onClick={() => navigate('/cursos')}
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Cursos
            </Button>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
              <div className="md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Cursos Premium
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  Bienvenido a nuestra biblioteca de cursos premium especializados para cada perfil. 
                  Selecciona la categoría que mejor se adapte a tus necesidades.
                </p>
                <div className="flex items-center gap-2 bg-green-900/30 border border-green-500/30 p-3 rounded-lg">
                  <BookOpen className="h-5 w-5 text-green-400" />
                  <p className="text-green-300">
                    Acceso desbloqueado. ¡Disfruta de todo el contenido premium!
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-1 rounded-full">
                  <div className="bg-slate-900 p-6 rounded-full">
                    <Video className="h-16 w-16 text-orange-500" />
                  </div>
                </div>
              </div>
            </div>

            <Tabs defaultValue={categories[0].id} className="w-full">
              <TabsList className="w-full flex space-x-4 bg-transparent mb-8">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white py-3"
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {categories.map(category => (
                <TabsContent key={category.id} value={category.id} className="animate-fade-in">
                  <div className="bg-slate-800/50 p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                    <p className="text-gray-300 mb-4">Playlist completa con todo nuestro contenido premium para esta categoría.</p>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/videoseries?list=${category.playlistId}`}
                        title={category.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Play className="h-5 w-5 text-orange-500" />
                    Cursos Destacados
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.courses.map((course, idx) => (
                      <div key={idx} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700">
                        <div className="aspect-video">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${course.videoId}`}
                            title={course.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="p-4">
                          <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
                          <p className="text-gray-300 text-sm">{course.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CursosPremium;
