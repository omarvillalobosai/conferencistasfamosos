
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface IntroStepProps {
  onNext: () => void;
}

const IntroStep = ({ onNext }: IntroStepProps) => {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">
        🎤 Estás a punto de cotizar algo fuera de serie
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Gracias por tu interés en los conferencistas de alto impacto avalados por ConferencistasFamosos.com.
        <br /><br />
        Antes de enviarte una propuesta, necesitamos conocerte.
        <br /><br />
        Este formulario no es para todos. Es para quienes buscan resultados reales.
      </p>
      <Button 
        onClick={onNext} 
        className="mt-8 bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6 h-auto"
      >
        👉 Continuar <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
};

export default IntroStep;
