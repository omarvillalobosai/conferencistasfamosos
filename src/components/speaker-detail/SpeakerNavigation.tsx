
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SpeakerNavigationProps {
  prevSpeakerName: string;
  nextSpeakerName: string;
  prevSpeakerSlug: string;
  nextSpeakerSlug: string;
}

const SpeakerNavigation: React.FC<SpeakerNavigationProps> = ({
  prevSpeakerName,
  nextSpeakerName,
  prevSpeakerSlug,
  nextSpeakerSlug
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => navigate(`/speaker/${prevSpeakerSlug}`)}
          >
            <ChevronLeft size={16} />
            <span className="hidden md:inline">{prevSpeakerName}</span>
            <span className="md:hidden">Anterior</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => navigate(`/speaker/${nextSpeakerSlug}`)}
          >
            <span className="hidden md:inline">{nextSpeakerName}</span>
            <span className="md:hidden">Siguiente</span>
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpeakerNavigation;
