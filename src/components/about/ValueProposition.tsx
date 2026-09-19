
import React from 'react';
import { Globe, Sparkles, Users } from 'lucide-react';
import { speakers } from '@/data/speakersData';
import { useCountUp } from '@/hooks/useCountUp';

const ValueProposition = () => {
  const countries = useCountUp(20);
  const lives = useCountUp(1);
  const representedSpeakers = useCountUp(speakers.length);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Globe className="text-orange-500 mb-4 h-10 w-10" />
        <p className="text-4xl font-bold text-gray-900 mb-2">
          +<span ref={countries.ref}>{countries.value}</span>
        </p>
        <h4 className="font-bold text-lg mb-2">Alcance</h4>
        <p className="text-gray-600 text-sm">Presencia en más de 20 países de Latinoamérica, EE.UU. y España.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Users className="text-orange-500 mb-4 h-10 w-10" />
        <p className="text-4xl font-bold text-gray-900 mb-2">
          +<span ref={lives.ref}>{lives.value}</span> millón
        </p>
        <h4 className="font-bold text-lg mb-2">Impacto</h4>
        <p className="text-gray-600 text-sm">Más de 1 millon de vidas transformadas en eventos.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <Sparkles className="text-orange-500 mb-4 h-10 w-10" />
        <p className="text-4xl font-bold text-gray-900 mb-2">
          <span ref={representedSpeakers.ref}>{representedSpeakers.value}</span>
        </p>
        <h4 className="font-bold text-lg mb-2">Conferencistas de élite</h4>
        <p className="text-gray-600 text-sm">Representamos solo a los mejores oradores del mundo hispano.</p>
      </div>
    </div>
  );
};

export default ValueProposition;
