
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface SpeakerFocusQuestionProps {
  speakerFocus: string;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const SpeakerFocusQuestion = ({ speakerFocus, setFormData }: SpeakerFocusQuestionProps) => {
  return (
    <div className="space-y-4 mb-8">
      <h3 className="text-xl font-semibold">Enfoque del conferencista:</h3>
      <RadioGroup 
        value={speakerFocus}
        onValueChange={(value) => {
          setFormData(prev => ({ ...prev, speakerFocus: value }));
        }}
        className="space-y-3"
      >
        {[
          'Es prioridad absoluta: queremos un antes y un después.',
          'Me interesa, si es real y medible.',
          'Solo quiero entretenimiento con energía.',
          'Busco un conferencista alineado a los objetivos de mi evento',
          'No lo había pensado, pero me interesa generar impacto.'
        ].map((focus) => (
          <div key={focus} className={`flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:border-orange-500 ${speakerFocus === focus ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}>
            <RadioGroupItem value={focus} id={`focus-${focus}`} />
            <Label htmlFor={`focus-${focus}`} className="cursor-pointer w-full">{focus}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default SpeakerFocusQuestion;
