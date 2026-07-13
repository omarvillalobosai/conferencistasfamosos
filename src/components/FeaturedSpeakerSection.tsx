import React from 'react';
import { Check, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts } from '@/data/blogPosts';

const achievements = [
  "Record Guinness por el abrazo más grande del mundo",
  "Creador del movimiento de Abrazoterapia.tv",
  "Creador del movimiento Es posible lo imposible en TEDx",
  "Autor latino con más participaciones en el movimiento TED",
  "Autor de dos bestsellers internacionales",
  "Más de 900 empresas han contratado sus servicios",
  "Más de 10 empresas de Fortune 500",
  "Más de 30 años de experiencia en escenarios internacionales",
  "Más de 2 millones de personas han asistido a eventos en vivo"
];

const testimonials = [
  {
    name: "María González",
    position: "Directora de RH, Grupo Bimbo",
    text: "Omar transformó por completo la mentalidad de nuestro equipo directivo. Su conferencia generó un impacto medible en nuestros resultados trimestrales."
  },
  {
    name: "Carlos Fuentes",
    position: "CEO, Banco Azteca",
    text: "Nunca había visto a mi equipo tan motivado como después de la intervención de Omar. Su energía es contagiosa y su mensaje, transformador."
  },
  {
    name: "Ana Patricia Botín",
    position: "Presidenta, Grupo Santander",
    text: "Omar tiene la capacidad única de conectar con audiencias diversas y entregar mensajes profundos que impulsan al cambio real y sostenible."
  }
];

const FeaturedSpeakerSection = () => {
  return (
    <section id="destacado" className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 lg:mb-10">
            Omar Villalobos <span className="text-gradient">Speaker Destacado</span>
          </h2>
          <p className="text-lg text-gray-300">
            El conferencista más solicitado de Latinoamérica para eventos corporativos y masivos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//omarvillalobos%20conferencista%20famosos%201.png" 
              alt="Omar Villalobos en conferencia" 
              className="rounded-lg shadow-2xl object-cover w-full h-[500px]"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Biografía</h3>
              <p className="text-gray-300 mb-4">
                Omar Villalobos es considerado el conferencista de alto impacto más importante de habla hispana. Con una trayectoria de más de 30 años transformando la vida de personas y organizaciones en todo el mundo, Omar ha llevado su mensaje de superación, liderazgo y excelencia a más de 25 países.
              </p>
              <p className="text-gray-300">
                Su experiencia trabajando con empresas Fortune 500, gobiernos y eventos masivos le ha permitido desarrollar una metodología única que combina la psicología del éxito, estrategias de alto rendimiento y técnicas de transformación personal que generan resultados inmediatos y medibles.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Logros destacados</h3>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-orange-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Link to="/#contacto">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Cotiza una conferencia con Omar
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Contenido de Omar Villalobos</h3>
              <p className="text-gray-400 mt-2">Últimos videos y reflexiones publicados en el blog.</p>
            </div>
            <Link
              to="/blog"
              className="text-orange-500 hover:text-orange-400 font-medium transition-colors"
            >
              Ver todo el blog →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.speakerId === 'omar-villalobos')
              .slice(0, 3)
              .map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                  <Card className="bg-black/30 border border-gray-800 overflow-hidden h-full hover:border-orange-500/60 transition-colors">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${post.youtubeId}/hqdefault.jpg`}
                        alt={post.title}
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <PlayCircle className="h-12 w-12 text-orange-500 absolute inset-0 m-auto" />
                    </div>
                    <CardContent className="p-5">
                      <span className="text-xs uppercase tracking-wide text-orange-500 font-semibold">
                        {post.category}
                      </span>
                      <h4 className="font-bold mt-2 mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-400 line-clamp-2">{post.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakerSection;
