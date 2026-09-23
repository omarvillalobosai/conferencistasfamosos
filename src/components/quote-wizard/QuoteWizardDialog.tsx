import React from 'react';
import ReactConfetti from 'react-confetti';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import StepIndicator from './StepIndicator';
import IntroStep from './IntroStep';
import ContactInfoStep from './ContactInfoStep';
import EventQuestionnaireStep from './EventQuestionnaireStep';
import ThankYouStep from './ThankYouStep';
import useQuoteForm from './useQuoteForm';

interface QuoteWizardDialogProps {
  open: boolean;
  onClose: () => void;
}

const QuoteWizardDialog = ({ open, onClose }: QuoteWizardDialogProps) => {
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

export default QuoteWizardDialog;
