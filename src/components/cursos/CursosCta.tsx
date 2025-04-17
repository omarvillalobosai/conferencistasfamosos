
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const CursosCta: React.FC = () => {
  const whatsappNumber = '523324166849';
  const prefilledMessage = encodeURIComponent('Me interesa más información sobre los cursos de ConferencistasFamosos.');
  
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Listo para aprender y tomar decisiones de alto nivel?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Ya sea que contrates o quieras ser el próximo gran speaker, tenemos el curso para ti.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            variant="default" 
            className="bg-white text-orange-500 hover:bg-gray-100 font-semibold text-lg px-8"
            asChild
          >
            <a href="#cursos">Accede ahora</a>
          </Button>
          
          <Button 
            size="lg" 
            variant="default" 
            className="bg-green-500 text-white hover:bg-green-600 font-semibold text-lg px-8"
            asChild
          >
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${prefilledMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="mr-1" size={20} />
              Consultar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CursosCta;
