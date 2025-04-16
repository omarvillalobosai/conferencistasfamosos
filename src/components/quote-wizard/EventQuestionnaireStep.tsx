
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { DollarSign, ArrowRight } from 'lucide-react';

interface EventQuestionnaireStepProps {
  formData: {
    eventType: string;
    eventTypeOther: string;
    speakerFocus: string;
    specificObjectives: string[];
    specificObjectivesOther: string;
    eventIntentions: string[];
    budget: string;
    pitch: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleCheckboxChange: (value: string, field: 'specificObjectives' | 'eventIntentions') => void;
  onNext: () => void;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const EventQuestionnaireStep = ({ 
  formData, 
  onInputChange, 
  handleCheckboxChange, 
  onNext,
  setFormData 
}: EventQuestionnaireStepProps) => {
  return (
    <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Queremos saber si eres el tipo de cliente que hace historia
      </h2>

      {/* Pregunta 1 - Tipo de evento */}
      <div className="space-y-4 mb-8">
        <h3 className="text-xl font-semibold">Tipo de evento:</h3>
        <RadioGroup 
          value={formData.eventType}
          onValueChange={(value) => {
            setFormData(prev => ({ ...prev, eventType: value }));
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {['Congreso empresarial', 'Convención de liderazgo', 'Evento académico', 'Transformación cultural', 'Otro'].map((type) => (
            <div key={type} className={`flex items-center space-x-2 border p-4 rounded-md cursor-pointer hover:border-orange-500 ${formData.eventType === type ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}>
              <RadioGroupItem value={type} id={`event-type-${type}`} />
              <Label htmlFor={`event-type-${type}`} className="cursor-pointer w-full">{type}</Label>
            </div>
          ))}
        </RadioGroup>
        {formData.eventType === 'Otro' && (
          <div className="mt-3">
            <Input
              name="eventTypeOther"
              value={formData.eventTypeOther}
              onChange={onInputChange}
              placeholder="Especifica el tipo de evento"
            />
          </div>
        )}
      </div>

      {/* Pregunta 2 - Enfoque del conferencista */}
      <div className="space-y-4 mb-8">
        <h3 className="text-xl font-semibold">Enfoque del conferencista:</h3>
        <RadioGroup 
          value={formData.speakerFocus}
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
            <div key={focus} className={`flex items-center space-x-2 border p-3 rounded-md cursor-pointer hover:border-orange-500 ${formData.speakerFocus === focus ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}>
              <RadioGroupItem value={focus} id={`focus-${focus}`} />
              <Label htmlFor={`focus-${focus}`} className="cursor-pointer w-full">{focus}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Subpregunta - Objetivos específicos (condicional) */}
      {formData.speakerFocus === 'Busco un conferencista alineado a los objetivos de mi evento' && (
        <div className="space-y-3 ml-6 mb-8 p-4 bg-gray-50 border border-gray-200 rounded-md">
          <h4 className="text-lg font-medium">¿Qué objetivo específico te interesa?</h4>
          {['Aumentar ventas', 'Elevar liderazgo', 'Fortalecer cultura organizacional', 'Inspirar con storytelling de vida', 'Salud emocional y bienestar', 'Otro'].map((objective) => (
            <div key={objective} className="flex items-center space-x-2">
              <Checkbox 
                id={`objective-${objective}`} 
                checked={formData.specificObjectives.includes(objective)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    handleCheckboxChange(objective, 'specificObjectives');
                  } else {
                    handleCheckboxChange(objective, 'specificObjectives');
                  }
                }}
              />
              <Label htmlFor={`objective-${objective}`} className="cursor-pointer">{objective}</Label>
            </div>
          ))}
          {formData.specificObjectives.includes('Otro') && (
            <div className="mt-2">
              <Input
                name="specificObjectivesOther"
                value={formData.specificObjectivesOther}
                onChange={onInputChange}
                placeholder="Especifica tu objetivo"
              />
            </div>
          )}
        </div>
      )}

      {/* Pregunta 3 - Intención del evento */}
      <div className="space-y-4 mb-8">
        <h3 className="text-xl font-semibold">Intención del evento:</h3>
        <div className="space-y-3">
          {['Impactar emocionalmente', 'Posicionar marca', 'Motivar equipos', 'Crear un antes y un después', 'Aún lo estoy definiendo'].map((intention) => (
            <div key={intention} className="flex items-center space-x-2">
              <Checkbox 
                id={`intention-${intention}`} 
                checked={formData.eventIntentions.includes(intention)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    handleCheckboxChange(intention, 'eventIntentions');
                  } else {
                    handleCheckboxChange(intention, 'eventIntentions');
                  }
                }}
              />
              <Label htmlFor={`intention-${intention}`} className="cursor-pointer">{intention}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Pregunta 4 - Presupuesto */}
      <div className="space-y-4 mb-8">
        <h3 className="text-xl font-semibold">Presupuesto:</h3>
        <RadioGroup 
          value={formData.budget}
          onValueChange={(value) => {
            setFormData(prev => ({ ...prev, budget: value }));
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {[
            { label: 'Menos de $3,000 USD', value: 'less-than-3000' },
            { label: 'Entre $3,000 y $8,000 USD', value: '3000-8000' },
            { label: 'Más de $8,000 USD', value: 'more-than-8000' },
            { label: 'Estoy listo para invertir en calidad', value: 'quality-investment' }
          ].map((option) => (
            <div key={option.value} className={`flex items-center space-x-2 border p-4 rounded-md cursor-pointer hover:border-orange-500 ${formData.budget === option.value ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}>
              <DollarSign className={formData.budget === option.value ? 'text-orange-500' : 'text-gray-400'} />
              <RadioGroupItem value={option.value} id={`budget-${option.value}`} className="sr-only" />
              <Label htmlFor={`budget-${option.value}`} className="cursor-pointer w-full">{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Pregunta 5 - Tu pitch */}
      <div className="space-y-4 mb-8">
        <h3 className="text-xl font-semibold">Tu pitch:</h3>
        <p className="text-gray-600">¿Por qué tu evento merece un conferencista de nuestra red?</p>
        <Textarea
          name="pitch"
          value={formData.pitch}
          onChange={onInputChange}
          placeholder="Cuéntanos por qué tu evento es especial..."
          className="min-h-[120px]"
        />
      </div>

      <div className="pt-6 text-center">
        <Button
          onClick={onNext}
          className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-2"
        >
          👉 Continuar <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default EventQuestionnaireStep;
