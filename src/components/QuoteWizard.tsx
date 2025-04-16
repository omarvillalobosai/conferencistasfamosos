
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { DollarSign, ArrowRight, Rocket } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface QuoteWizardProps {
  open: boolean;
  onClose: () => void;
}

const QuoteWizard = ({ open, onClose }: QuoteWizardProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    socialMedia: '',
    eventType: '',
    eventTypeOther: '',
    speakerFocus: '',
    specificObjectives: [] as string[],
    specificObjectivesOther: '',
    eventIntentions: [] as string[],
    budget: '',
    pitch: '',
  });
  const { toast } = useToast();

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

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    toast({
      title: "Solicitud enviada",
      description: "Tu información ha sido recibida. Nos pondremos en contacto contigo pronto.",
    });
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
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-center mb-6">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`w-3 h-3 rounded-full mx-1 ${
              s === step ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              🎤 Estás a punto de cotizar algo fuera de serie
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Gracias por tu interés en los conferencistas de alto impacto avalados por ConferencistasFamosos.com.
              <br /><br />
              Antes de enviarte una propuesta, necesitamos conocerte.
              <br /><br />
              Este formulario no es para todos. Es para quienes buscan resultados reales.
            </p>
            <Button 
              onClick={nextStep} 
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6 h-auto"
            >
              👉 Continuar <ArrowRight className="ml-2" />
            </Button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Tus datos para contactarte
            </h2>
            <div className="grid grid-cols-1 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@correo.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp con lada *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+52 1 55 1234 5678"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Nombre de tu empresa o institución *</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Nombre de tu empresa"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="socialMedia">Redes sociales o sitio del evento (opcional)</Label>
                <Input
                  id="socialMedia"
                  name="socialMedia"
                  value={formData.socialMedia}
                  onChange={handleInputChange}
                  placeholder="www.tueventoempresarial.com"
                />
              </div>
            </div>
            <div className="pt-6 text-center">
              <Button
                onClick={nextStep}
                className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-2"
              >
                👉 Siguiente <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        );

      case 3:
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
                    onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                onChange={handleInputChange}
                placeholder="Cuéntanos por qué tu evento es especial..."
                className="min-h-[120px]"
              />
            </div>

            <div className="pt-6 text-center">
              <Button
                onClick={nextStep}
                className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-2"
              >
                👉 Continuar <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Tu solicitud está en buenas manos
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Gracias por responder con sinceridad.
              <br /><br />
              Tu información será revisada personalmente. Si tu visión está alineada con la de ConferencistasFamosos.com, recibirás una propuesta que transformará tu evento.
              <br /><br />
              📍 Esto no es un servicio más. Es una experiencia con sello de impacto.
            </p>
            <Button 
              onClick={handleSubmit} 
              className="mt-8 bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6 h-auto"
            >
              🚀 Enviar mi solicitud exclusiva <Rocket className="ml-2" />
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="sr-only">Formulario de cotización</DialogTitle>
        </DialogHeader>
        {renderStepIndicator()}
        {renderStep()}
      </DialogContent>
    </Dialog>
  );
};

export default QuoteWizard;
