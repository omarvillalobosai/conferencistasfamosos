
import React from 'react';
import SpeakerCard from './SpeakerCard';
import type { Speaker } from '@/data/speakersData';

interface SpeakersGridProps {
  speakers: Speaker[];
}

const SpeakersGrid: React.FC<SpeakersGridProps> = ({ speakers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {speakers.map((speaker) => (
        <SpeakerCard key={speaker.id} speaker={speaker} />
      ))}
    </div>
  );
};

export default SpeakersGrid;
