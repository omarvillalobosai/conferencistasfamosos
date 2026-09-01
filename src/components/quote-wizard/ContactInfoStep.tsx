
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

interface ContactInfoStepProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    socialMedia: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onNext: () => void;
  subscribeNewsletter: boolean;
  onToggleNewsletter: (checked: boolean) => void;
}

const ContactInfoStep = ({ formData, onInputChange, onNext, subscribeNewsletter, onToggleNewsletter }: ContactInfoStepProps) => {
  const prefilledMessage = 'Me interesa solicitar una cotización para un conferencista.';
  
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
            onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
            placeholder="52 3324166849"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Nombre de tu empresa o institución *</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={onInputChange}
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
            onChange={onInputChange}
            placeholder="www.tueventoempresarial.com"
          />
        </div>
      </div>
      <label className="flex items-start gap-3 cursor-pointer bg-orange-50 border border-orange-100 rounded-lg p-4">
        <Checkbox
          checked={subscribeNewsletter}
          onCheckedChange={(checked) => onToggleNewsletter(checked === true)}
        />
        <span className="text-sm text-gray-700">
          Quiero recibir frases inspiradoras de conferencistas cada 3 días por correo (opcional)
        </span>
      </label>
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          onClick={onNext}
          className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-2"
        >
          👉 Siguiente <ArrowRight className="ml-2" />
        </Button>
        
        <WhatsAppButton 
          message={prefilledMessage}
          className="font-bold py-2 px-6 rounded-md"
          variant="default"
        >
          Prefiero contactar por WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
};

export default ContactInfoStep;
