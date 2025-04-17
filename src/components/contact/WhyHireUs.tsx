
import React from 'react';
import { Check } from 'lucide-react';

const WhyHireUs: React.FC = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-bold mb-3">¿Por qué contratar a través de nosotros?</h3>
      <ul className="space-y-2 text-sm">
        <li className="flex items-start">
          <Check className="text-orange-500 mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>Representación oficial y exclusiva</span>
        </li>
        <li className="flex items-start">
          <Check className="text-orange-500 mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>Garantía de satisfacción</span>
        </li>
        <li className="flex items-start">
          <Check className="text-orange-500 mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>Asesoría personalizada para tu evento</span>
        </li>
        <li className="flex items-start">
          <Check className="text-orange-500 mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>Proceso simple y transparente</span>
        </li>
        <li className="flex items-start">
          <Check className="text-orange-500 mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>Atención 24/7 antes, durante y después</span>
        </li>
      </ul>
    </div>
  );
};

export default WhyHireUs;
