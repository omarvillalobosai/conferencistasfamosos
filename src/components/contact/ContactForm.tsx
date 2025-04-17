
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const ContactForm = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    eventType: '',
    speakerType: 'omar',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.company || !formData.phone) {
      toast({
        title: "Error en el formulario",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would normally send the data to your backend or email service
    console.log('Form submitted:', { ...formData, date });
    
    // Show success message
    toast({
      title: "¡Solicitud recibida!",
      description: "Nos pondremos en contacto contigo a la brevedad.",
    });
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      eventType: '',
      speakerType: 'omar',
      message: ''
    });
    setDate(undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre completo *</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="Tu nombre" 
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="company">Empresa / Organización *</Label>
          <Input 
            id="company" 
            name="company" 
            placeholder="Nombre de tu empresa" 
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="tu@email.com" 
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono *</Label>
          <Input 
            id="phone" 
            name="phone" 
            placeholder="+52 55 1234 5678" 
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Fecha tentativa del evento</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="eventType">Tipo de evento</Label>
          <Select onValueChange={(value) => handleSelectChange("eventType", value)}>
            <SelectTrigger id="eventType">
              <SelectValue placeholder="Selecciona el tipo de evento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="corporate">Corporativo</SelectItem>
              <SelectItem value="conference">Conferencia / Convención</SelectItem>
              <SelectItem value="school">Institución Educativa</SelectItem>
              <SelectItem value="government">Gobierno</SelectItem>
              <SelectItem value="other">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="speakerType">Conferencista de interés</Label>
        <Select 
          defaultValue="omar" 
          onValueChange={(value) => handleSelectChange("speakerType", value)}
        >
          <SelectTrigger id="speakerType">
            <SelectValue placeholder="Selecciona un conferencista" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="omar" className="font-medium">Omar Villalobos</SelectItem>
            <SelectItem value="carolina">Carolina Mendoza</SelectItem>
            <SelectItem value="ricardo">Ricardo Velázquez</SelectItem>
            <SelectItem value="ana">Ana María Torres</SelectItem>
            <SelectItem value="javier">Javier Montero</SelectItem>
            <SelectItem value="gabriela">Gabriela Reyes</SelectItem>
            <SelectItem value="unsure">No estoy seguro</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Mensaje (opcional)</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="Cuéntanos más sobre tu evento..." 
          className="min-h-[120px]"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      
      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-lg">
        Enviar solicitud
      </Button>
    </form>
  );
};

export default ContactForm;
