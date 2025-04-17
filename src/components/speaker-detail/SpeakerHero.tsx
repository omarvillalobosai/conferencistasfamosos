
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Speaker } from '@/data/speakersData';

interface SpeakerHeroProps {
  speaker: Speaker;
}

const SpeakerHero: React.FC<SpeakerHeroProps> = ({ speaker }) => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="md:w-1/3">
            <Avatar className="w-64 h-64 md:w-80 md:h-80 rounded-xl border-4 border-orange-500 shadow-xl mx-auto">
              <img src={speaker.image} alt={speaker.name} className="object-cover" />
            </Avatar>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{speaker.name}</h1>
            <p className="text-xl md:text-2xl text-orange-500 mb-6">{speaker.specialty}</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
              {speaker.tags.map((tag, index) => (
                <span key={index} className="bg-gray-800 text-sm px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-lg md:text-xl text-gray-300">{speaker.shortBio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerHero;
