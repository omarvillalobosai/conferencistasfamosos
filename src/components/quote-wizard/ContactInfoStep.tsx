
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, MessageCircle } from 'lucide-react';

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
}

const ContactInfoStep = ({ formData, onInputChange, onNext }: ContactInfoStepProps) => {
  const whatsappNumber = '523324166849';
  const prefilledMessage = encodeURIComponent('Me interesa solicitar una cotización para un conferencista.');
  
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
            placeholder="+52 332 416 6849"
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
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          onClick={onNext}
          className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-2"
        >
          👉 Siguiente <ArrowRight className="ml-2" />
        </Button>
        
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${prefilledMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 font-bold py-2 px-6 rounded-md transition-colors"
        >
          <MessageCircle size={20} />
          Prefiero contactar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactInfoStep;
