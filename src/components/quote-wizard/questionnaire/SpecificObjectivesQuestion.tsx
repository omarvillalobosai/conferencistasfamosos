
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface SpecificObjectivesQuestionProps {
  specificObjectives: string[];
  specificObjectivesOther: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (value: string, field: 'specificObjectives' | 'eventIntentions') => void;
}

const SpecificObjectivesQuestion = ({ 
  specificObjectives, 
  specificObjectivesOther, 
  onInputChange, 
  handleCheckboxChange 
}: SpecificObjectivesQuestionProps) => {
  return (
    <div className="space-y-3 ml-6 mb-8 p-4 bg-gray-50 border border-gray-200 rounded-md">
      <h4 className="text-lg font-medium">¿Qué objetivo específico te interesa?</h4>
      {['Aumentar ventas', 'Elevar liderazgo', 'Fortalecer cultura organizacional', 'Inspirar con storytelling de vida', 'Salud emocional y bienestar', 'Otro'].map((objective) => (
        <div key={objective} className="flex items-center space-x-2">
          <Checkbox 
            id={`objective-${objective}`} 
            checked={specificObjectives.includes(objective)}
            onCheckedChange={(checked) => {
              if (checked !== 'indeterminate') {
                handleCheckboxChange(objective, 'specificObjectives');
              }
            }}
          />
          <Label htmlFor={`objective-${objective}`} className="cursor-pointer">{objective}</Label>
        </div>
      ))}
      {specificObjectives.includes('Otro') && (
        <div className="mt-2">
          <Input
            name="specificObjectivesOther"
            value={specificObjectivesOther}
            onChange={onInputChange}
            placeholder="Especifica tu objetivo"
          />
        </div>
      )}
    </div>
  );
};

export default SpecificObjectivesQuestion;
