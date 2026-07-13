
import React from 'react';
import { Award, Globe, Users } from 'lucide-react';

const ValueProposition = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Award className="text-orange-500 mb-4 h-10 w-10" />
        <h4 className="font-bold text-lg mb-2">Excelencia</h4>
        <p className="text-gray-600 text-sm">Representamos solo a los mejores oradores del mundo hispano.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Globe className="text-orange-500 mb-4 h-10 w-10" />
        <h4 className="font-bold text-lg mb-2">Alcance</h4>
        <p className="text-gray-600 text-sm">Presencia en más de 20 países de Latinoamérica, EE.UU. y España.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Users className="text-orange-500 mb-4 h-10 w-10" />
        <h4 className="font-bold text-lg mb-2">Impacto</h4>
        <p className="text-gray-600 text-sm">Más de 1 millon de vidas transformadas en eventos.</p>
      </div>
    </div>
  );
};

export default ValueProposition;
