
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import EventTypeQuestion from './questionnaire/EventTypeQuestion';
import SpeakerFocusQuestion from './questionnaire/SpeakerFocusQuestion';
import SpecificObjectivesQuestion from './questionnaire/SpecificObjectivesQuestion';
import EventIntentionsQuestion from './questionnaire/EventIntentionsQuestion';
import BudgetQuestion from './questionnaire/BudgetQuestion';
import PitchQuestion from './questionnaire/PitchQuestion';

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

      <EventTypeQuestion 
        eventType={formData.eventType}
        eventTypeOther={formData.eventTypeOther}
        onInputChange={onInputChange}
        setFormData={setFormData}
      />

      <SpeakerFocusQuestion
        speakerFocus={formData.speakerFocus}
        setFormData={setFormData}
      />

      {formData.speakerFocus === 'Busco un conferencista alineado a los objetivos de mi evento' && (
        <SpecificObjectivesQuestion
          specificObjectives={formData.specificObjectives}
          specificObjectivesOther={formData.specificObjectivesOther}
          onInputChange={onInputChange}
          handleCheckboxChange={handleCheckboxChange}
        />
      )}

      <EventIntentionsQuestion
        eventIntentions={formData.eventIntentions}
        handleCheckboxChange={handleCheckboxChange}
      />

      <BudgetQuestion
        budget={formData.budget}
        setFormData={setFormData}
      />

      <PitchQuestion
        pitch={formData.pitch}
        onInputChange={onInputChange}
      />

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
