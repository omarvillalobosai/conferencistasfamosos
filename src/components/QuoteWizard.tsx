
import React from 'react';
import ReactConfetti from 'react-confetti';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import StepIndicator from './quote-wizard/StepIndicator';
import IntroStep from './quote-wizard/IntroStep';
import ContactInfoStep from './quote-wizard/ContactInfoStep';
import EventQuestionnaireStep from './quote-wizard/EventQuestionnaireStep';
import ThankYouStep from './quote-wizard/ThankYouStep';
import useQuoteForm from './quote-wizard/useQuoteForm';

interface QuoteWizardProps {
  open: boolean;
  onClose: () => void;
}

const QuoteWizard = ({ open, onClose }: QuoteWizardProps) => {
  const {
    step,
    formData,
    isSubmitting,
    showConfetti,
    windowDimensions,
    handleInputChange,
    handleCheckboxChange,
    nextStep,
    setNewsletterSubscribe,
    setFormData
  } = useQuoteForm({ onClose });

  const renderStep = () => {
    switch (step) {
      case 1:
        return <IntroStep onNext={nextStep} />;
      case 2:
        return (
          <ContactInfoStep 
            formData={formData} 
            onInputChange={handleInputChange} 
            onNext={nextStep} 
            subscribeNewsletter={formData.subscribeNewsletter}
            onToggleNewsletter={setNewsletterSubscribe}
          />
        );
      case 3:
        return (
          <EventQuestionnaireStep 
            formData={formData}
            onInputChange={handleInputChange}
            handleCheckboxChange={handleCheckboxChange}
            onNext={nextStep}
            setFormData={setFormData}
          />
        );
      case 4:
        return <ThankYouStep onSubmit={nextStep} isSubmitting={isSubmitting} />;
      default:
        return null;
    }
  };

  return (
    <>
      {showConfetti && (
        <ReactConfetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={500}
          tweenDuration={5000}
        />
      )}
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="sr-only">Formulario de cotización</DialogTitle>
          </DialogHeader>
          <StepIndicator currentStep={step} totalSteps={4} />
          {renderStep()}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuoteWizard;
