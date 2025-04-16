
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

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
      
      // Prepare the data for the webhook
      const webhookData = {
        nombre: formData.name,
        email: formData.email,
        whatsapp: formData.phone,
        empresa: formData.company,
        "redes o web": formData.socialMedia,
        "TIPO DE EVENTO": formData.eventType === 'Otro' ? formData.eventTypeOther : formData.eventType,
        enfoque: formData.speakerFocus,
        intencion: formData.eventIntentions.join(', '),
        "objetivo especifico": formData.specificObjectives.includes('Otro') 
          ? [...formData.specificObjectives.filter(obj => obj !== 'Otro'), formData.specificObjectivesOther].join(', ')
          : formData.specificObjectives.join(', '),
        presupuesto: formData.budget,
        "sobre tu evento": formData.pitch
      };
      
      console.log('Submitting data to webhook:', webhookData);
      
      // Send data to webhook
      const response = await fetch('https://hook.us2.make.com/zp37js1lpc28c5id5ne8d0kaw8b6a6z6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });
      
      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }
      
      console.log('Form submitted successfully');
      setShowConfetti(true);
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
    setFormData
  };
};

export default useQuoteForm;
