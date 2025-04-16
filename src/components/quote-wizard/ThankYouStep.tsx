
import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

interface ThankYouStepProps {
  onSubmit: () => void;
  isSubmitting: boolean;
}

const ThankYouStep = ({ onSubmit, isSubmitting }: ThankYouStepProps) => {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        Tu solicitud está en buenas manos
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Gracias por responder con sinceridad.
        <br /><br />
        Tu información será revisada personalmente. Si tu visión está alineada con la de ConferencistasFamosos.com, recibirás una propuesta que transformará tu evento.
        <br /><br />
        📍 Esto no es un servicio más. Es una experiencia con sello de impacto.
      </p>
      <Button 
        onClick={onSubmit} 
        disabled={isSubmitting}
        className="mt-8 bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6 h-auto"
      >
        {isSubmitting ? 'Enviando...' : (
          <>
            🚀 Enviar mi solicitud exclusiva <Rocket className="ml-2" />
          </>
        )}
      </Button>
    </div>
  );
};

export default ThankYouStep;
