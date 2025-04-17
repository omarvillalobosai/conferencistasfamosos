
import React from 'react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

const CursosCta: React.FC = () => {
  const prefilledMessage = 'Me interesa más información sobre los cursos de ConferencistasFamosos.';
  
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
          
          <WhatsAppButton
            message={prefilledMessage}
            className="font-semibold text-lg px-8"
            size="lg"
          >
            Consultar por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default CursosCta;
