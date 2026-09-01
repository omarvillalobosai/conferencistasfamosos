
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';


interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  socialMedia: string;
  eventType: string;
  eventTypeOther: string;
  speakerFocus: string;
  specificObjectives: string[];
  specificObjectivesOther: string;
  eventIntentions: string[];
  budget: string;
  pitch: string;
  subscribeNewsletter: boolean;
}

interface UseQuoteFormProps {
  onClose: () => void;
}

export const useQuoteForm = ({ onClose }: UseQuoteFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    socialMedia: '',
    eventType: '',
    eventTypeOther: '',
    speakerFocus: '',
    specificObjectives: [],
    specificObjectivesOther: '',
    eventIntentions: [],
    budget: '',
    pitch: '',
    subscribeNewsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const { toast } = useToast();

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string, field: 'specificObjectives' | 'eventIntentions') => {
    setFormData((prev) => {
      if (prev[field].includes(value)) {
        return {
          ...prev,
          [field]: prev[field].filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [field]: [...prev[field], value],
        };
      }
    });
  };

  const setNewsletterSubscribe = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, subscribeNewsletter: checked }));
  };

  const nextStep = () => {
    if (step === 2 && (!formData.name || !formData.email || !formData.phone || !formData.company)) {
      toast({
        title: "Campos obligatorios",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    if (step === 4) {
      handleSubmit();
      return;
    }

    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        socialMedia: formData.socialMedia,
        eventType: formData.eventType === 'Otro' ? formData.eventTypeOther : formData.eventType,
        speakerFocus: formData.speakerFocus,
        eventIntentions: formData.eventIntentions.join(', '),
        specificObjectives: formData.specificObjectives.includes('Otro')
          ? [...formData.specificObjectives.filter(obj => obj !== 'Otro'), formData.specificObjectivesOther].join(', ')
          : formData.specificObjectives.join(', '),
        budget: formData.budget,
        pitch: formData.pitch,
      };

      const { data, error } = await supabase.functions.invoke('quote-request-submit', {
        body: payload,
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      console.log('Form submitted successfully');
      setShowConfetti(true);
      if (formData.subscribeNewsletter) {
        supabase.functions
          .invoke('newsletter-subscribe', { body: { name: formData.name, email: formData.email } })
          .catch((err) => console.error('newsletter opt-in failed', err));
      }
      toast({
        title: "Solicitud enviada",
        description: "Tu información ha sido recibida. Nos pondremos en contacto contigo pronto.",
      });

      // Reset form and close dialog after delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          socialMedia: '',
          eventType: '',
          eventTypeOther: '',
          speakerFocus: '',
          specificObjectives: [],
          specificObjectivesOther: '',
          eventIntentions: [],
          budget: '',
          pitch: '',
          subscribeNewsletter: false,
        });
        setStep(1);
        onClose();
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu solicitud. Por favor intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
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
  };
};

export default useQuoteForm;
