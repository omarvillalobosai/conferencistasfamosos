
import React from 'react';
import { speakers } from '@/data/speakersData';
import SpeakersGrid from './speakers/SpeakersGrid';
import SpeakerPromoBanner from './speakers/SpeakerPromoBanner';
import SpeakersSchema from './speakers/SpeakersSchema';

const SpeakersSection: React.FC = () => {
  return (
    <>
      <SpeakersSchema speakers={speakers} />
      <section id="conferencistas" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Nuestros Conferencistas</h2>
            <p className="text-lg text-gray-700">
              Representamos a los mejores talentos de habla hispana en diversas especialidades para cualquier tipo de evento.
            </p>
          </div>
          
          <SpeakersGrid speakers={speakers} />
          <SpeakerPromoBanner />
        </div>
      </section>
    </>
  );
};

export default SpeakersSection;
