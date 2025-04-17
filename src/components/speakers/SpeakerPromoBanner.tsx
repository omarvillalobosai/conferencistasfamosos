
import React from 'react';
import { ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SpeakerPromoBanner: React.FC = () => {
  return (
    <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg shadow-md border border-orange-100">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <ThumbsUp className="text-orange-500 h-16 w-16 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-bold mb-2">¿No sabes a quién elegir?</h3>
          <p className="text-gray-700 mb-4">
            Si estás buscando al conferencista perfecto pero no sabes por dónde empezar, tenemos cursos especializados que te ayudarán a tomar la mejor decisión.
          </p>
          <Link to="/cursos">
            <Button className="bg-gradient-primary hover:opacity-90">
              Explorar Cursos de Selección
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpeakerPromoBanner;
