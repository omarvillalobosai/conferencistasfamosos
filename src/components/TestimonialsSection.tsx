
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const clients = [
  "Google", "Microsoft", "Santander", "Bimbo", "Telefónica", 
  "BBVA", "Coca-Cola", "Pemex", "Banamex", "Walmart", 
  "Ford", "Universidad Nacional", "Liverpool", "AT&T", "Sony"
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Clientes Satisfechos</h2>
          <p className="text-lg text-gray-700">
            Las empresas e instituciones más importantes de Latinoamérica han confiado en nuestros conferencistas.
          </p>
        </div>
        
        <div className="mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <Quote className="text-orange-500 mb-4 h-8 w-8" />
                      <blockquote className="text-gray-700 mb-6">
                        "La participación de Omar Villalobos en nuestra convención anual fue un éxito rotundo. Su capacidad para conectar con nuestra audiencia y transmitir un mensaje poderoso superó todas nuestras expectativas."
                      </blockquote>
                      <footer className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                        <div>
                          <cite className="font-medium not-italic">Roberto Hernández</cite>
                          <p className="text-sm text-gray-500">Director de Eventos, Grupo Financiero</p>
                        </div>
                      </footer>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static" />
              <CarouselNext className="static ml-2" />
            </div>
          </Carousel>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Empresas que confían en nosotros</h3>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center h-16 bg-white rounded-md shadow-sm border border-gray-100"
              >
                <span className="text-gray-400 font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
