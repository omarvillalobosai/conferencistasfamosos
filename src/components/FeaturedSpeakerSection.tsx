
import React from 'react';
import { Check, Award, Users, Globe, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const achievements = [
  "Record Guinness por la conferencia de superación personal más grande del mundo",
  "Más de 1 millón de asistentes en eventos presenciales",
  "Presencia en 25 países de América Latina, Estados Unidos y España",
  "Autor de 5 bestsellers internacionales",
  "Más de 500 empresas Fortune 500 transformadas",
  "15+ años de experiencia en escenarios internacionales"
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
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Omar Villalobos en conferencia" 
              className="rounded-lg shadow-2xl object-cover w-full h-[500px]"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Biografía</h3>
              <p className="text-gray-300 mb-4">
                Omar Villalobos es considerado el conferencista de alto impacto más importante de habla hispana. Con una trayectoria de más de 15 años transformando la vida de personas y organizaciones en todo el mundo, Omar ha llevado su mensaje de superación, liderazgo y excelencia a más de 25 países.
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-black/30 border border-gray-800">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Award className="text-gold-500 h-12 w-12 mb-4" />
              <h4 className="text-xl font-bold mb-2">Récord Guinness</h4>
              <p className="text-gray-400">Por la conferencia de superación personal más grande del mundo</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/30 border border-gray-800">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Users className="text-gold-500 h-12 w-12 mb-4" />
              <h4 className="text-xl font-bold mb-2">+1,000,000</h4>
              <p className="text-gray-400">Personas impactadas en eventos presenciales</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/30 border border-gray-800">
            <CardContent className="flex flex-col items-center text-center p-6">
              <Globe className="text-gold-500 h-12 w-12 mb-4" />
              <h4 className="text-xl font-bold mb-2">25 países</h4>
              <p className="text-gray-400">Con presencia internacional en eventos corporativos y masivos</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="videos" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="videos" className="text-lg">Videos</TabsTrigger>
            <TabsTrigger value="testimonios" className="text-lg">Testimonios</TabsTrigger>
          </TabsList>
          
          <TabsContent value="videos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center relative overflow-hidden">
                <PlayCircle className="h-16 w-16 text-orange-500 absolute z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1236&q=80"
                  alt="Conferencia Omar Villalobos"
                  className="absolute inset-0 h-full w-full object-cover opacity-60"
                />
                <p className="absolute bottom-4 left-4 right-4 text-white font-medium">Las 3 claves del éxito duradero</p>
              </div>
              
              <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center relative overflow-hidden">
                <PlayCircle className="h-16 w-16 text-orange-500 absolute z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Conferencia Omar Villalobos"
                  className="absolute inset-0 h-full w-full object-cover opacity-60"
                />
                <p className="absolute bottom-4 left-4 right-4 text-white font-medium">Cómo transformar desafíos en oportunidades</p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 font-medium transition-colors"
              >
                Ver todos los videos en YouTube →
              </a>
            </div>
          </TabsContent>
          
          <TabsContent value="testimonios" className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black/30 border border-gray-800">
                <CardContent className="p-6">
                  <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-orange-500 mr-3"></div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturedSpeakerSection;
