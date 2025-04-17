
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';
import type { Speaker } from '@/data/speakersData';

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  // Create a URL-friendly slug from the speaker's name
  const speakerSlug = speaker.name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link to={`/speaker/${speakerSlug}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow bg-white">
        <div className="relative pb-[75%] overflow-hidden">
          <img 
            src={speaker.image}
            alt={speaker.name}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 hover:scale-105"
          />
          {speaker.featured && (
            <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
              <StarIcon size={14} className="mr-1" />
              Destacado
            </div>
          )}
        </div>
        <CardContent className="p-5">
          <h3 className="font-bold text-xl mb-1">{speaker.name}</h3>
          <p className="text-orange-600 font-medium mb-3">{speaker.specialty}</p>
          <p className="text-gray-600 text-sm">{speaker.shortBio}</p>
          
          <div className="flex flex-wrap gap-1 mt-4">
            {speaker.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SpeakerCard;
