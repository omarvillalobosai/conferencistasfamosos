
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getSpeakerSlug } from '@/utils/speakerUtils';

const FounderInfo = () => {
  const navigate = useNavigate();

  const handleOmarClick = () => {
    navigate(`/speaker/${getSpeakerSlug('Omar Villalobos')}`);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Fundador y Director</h3>
      <p className="text-gray-700 mb-4">
        <strong>Omar Villalobos</strong>, reconocido internacionalmente como uno de los conferencistas más influyentes del mundo hispano, fundó esta agencia con la visión de elevar el nivel de los eventos corporativos y masivos en Latinoamérica.
      </p>
      <button 
        onClick={handleOmarClick} 
        className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
      >
        Conoce más sobre Omar <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
};

export default FounderInfo;
