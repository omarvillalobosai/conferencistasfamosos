
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface EventTypeQuestionProps {
  eventType: string;
  eventTypeOther: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const EventTypeQuestion = ({ 
  eventType, 
  eventTypeOther, 
  onInputChange, 
  setFormData 
}: EventTypeQuestionProps) => {
  return (
    <div className="space-y-4 mb-8">
      <h3 className="text-xl font-semibold">Tipo de evento:</h3>
      <RadioGroup 
        value={eventType}
        onValueChange={(value) => {
          setFormData(prev => ({ ...prev, eventType: value }));
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {['Congreso empresarial', 'Convención de liderazgo', 'Evento académico', 'Transformación cultural', 'Otro'].map((type) => (
          <div key={type} className={`flex items-center space-x-2 border p-4 rounded-md cursor-pointer hover:border-orange-500 ${eventType === type ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}>
            <RadioGroupItem value={type} id={`event-type-${type}`} />
            <Label htmlFor={`event-type-${type}`} className="cursor-pointer w-full">{type}</Label>
          </div>
        ))}
      </RadioGroup>
      {eventType === 'Otro' && (
        <div className="mt-3">
          <Input
            name="eventTypeOther"
            value={eventTypeOther}
            onChange={onInputChange}
            placeholder="Especifica el tipo de evento"
          />
        </div>
      )}
    </div>
  );
};

export default EventTypeQuestion;
