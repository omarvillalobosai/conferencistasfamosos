
import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import type { Speaker } from '@/data/speakersData';

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <Card 
      key={speaker.id} 
      className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${
        speaker.featured ? 'border-2 border-orange-500 ring-2 ring-orange-300' : 'border border-gray-200'
      }`}
    >
      <div className="relative h-64 w-full">
        <img 
          src={speaker.image} 
          alt={speaker.name} 
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        {speaker.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 flex items-center">
              <StarIcon className="mr-1 h-4 w-4" /> Destacado
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{speaker.name}</CardTitle>
        <p className="text-orange-500 font-medium">{speaker.specialty}</p>
      </CardHeader>
      
      <CardContent className="pb-4">
        <p className="text-gray-700 mb-3">{speaker.shortBio}</p>
        <div className="flex flex-wrap gap-2">
          {speaker.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter>
        <Link to={speaker.featured ? '/#destacado' : '/#contacto'} className="w-full">
          <Button 
            className={
              speaker.featured 
                ? "w-full bg-orange-500 hover:bg-orange-600"
                : "w-full bg-gray-800 hover:bg-gray-900"
            }
          >
            Solicitar información
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SpeakerCard;
