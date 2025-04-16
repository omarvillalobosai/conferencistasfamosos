
import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface EventIntentionsQuestionProps {
  eventIntentions: string[];
  handleCheckboxChange: (value: string, field: 'specificObjectives' | 'eventIntentions') => void;
}

const EventIntentionsQuestion = ({ 
  eventIntentions, 
  handleCheckboxChange 
}: EventIntentionsQuestionProps) => {
  return (
    <div className="space-y-4 mb-8">
      <h3 className="text-xl font-semibold">Intención del evento:</h3>
      <div className="space-y-3">
        {['Impactar emocionalmente', 'Posicionar marca', 'Motivar equipos', 'Crear un antes y un después', 'Aún lo estoy definiendo'].map((intention) => (
          <div key={intention} className="flex items-center space-x-2">
            <Checkbox 
              id={`intention-${intention}`} 
              checked={eventIntentions.includes(intention)}
              onCheckedChange={(checked) => {
                if (checked !== 'indeterminate') {
                  handleCheckboxChange(intention, 'eventIntentions');
                }
              }}
            />
            <Label htmlFor={`intention-${intention}`} className="cursor-pointer">{intention}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventIntentionsQuestion;
