
import React from 'react';
import { Textarea } from '@/components/ui/textarea';

interface PitchQuestionProps {
  pitch: string;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const PitchQuestion = ({ pitch, onInputChange }: PitchQuestionProps) => {
  return (
    <div className="space-y-4 mb-8">
      <h3 className="text-xl font-semibold">Tu pitch:</h3>
      <p className="text-gray-600">¿Por qué tu evento merece un conferencista de nuestra red?</p>
      <Textarea
        name="pitch"
        value={pitch}
        onChange={onInputChange}
        placeholder="Cuéntanos por qué tu evento es especial..."
        className="min-h-[120px]"
      />
    </div>
  );
};

export default PitchQuestion;
