
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { DollarSign } from 'lucide-react';

interface BudgetQuestionProps {
  budget: string;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const BudgetQuestion = ({ budget, setFormData }: BudgetQuestionProps) => {
  return (
    <div className="space-y-4 mb-8">
      <h3 className="text-xl font-semibold">Presupuesto:</h3>
      <RadioGroup 
        value={budget}
        onValueChange={(value) => {
          setFormData(prev => ({ ...prev, budget: value }));
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {[
          { label: 'Menos de $3,000 USD', value: 'less-than-3000' },
          { label: 'Entre $3,000 y $8,000 USD', value: '3000-8000' },
          { label: 'Entre $8,000 y $15,000 USD', value: '8000-15000' },
          { label: 'Entre $15,000 y $30,000 USD', value: '15000-30000' },
          { label: 'Más de $30,000 USD', value: 'more-than-30000' },
          { label: 'Estoy listo para invertir en calidad', value: 'quality-investment' }
        ].map((option) => (
          <div key={option.value} className={`flex items-center space-x-2 border p-4 rounded-md cursor-pointer hover:border-orange-500 ${budget === option.value ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}>
            <DollarSign className={budget === option.value ? 'text-orange-500' : 'text-gray-600'} />
            <RadioGroupItem value={option.value} id={`budget-${option.value}`} className="sr-only" />
            <Label htmlFor={`budget-${option.value}`} className="cursor-pointer w-full">{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default BudgetQuestion;
