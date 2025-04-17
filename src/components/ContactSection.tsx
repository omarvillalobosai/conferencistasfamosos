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
import { Calendar as CalendarIcon, Mail, Phone, Check } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const ContactSection = () => {
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

  const whatsappNumber = '523324166849';
  const prefilledMessage = encodeURIComponent('Me interesa más información sobre ConferencistasFamosos.');
  const emailAddress = 'agencia@conferencistasfamosos.com';

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
    <section id="contacto" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Solicita una Cotización</h2>
          <p className="text-lg text-gray-700">
            Completa el formulario y nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
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
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Información de contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-orange-500 mr-3 mt-1 h-5 w-5" />
                    <div>
                      <p className="font-medium">Correo electrónico</p>
                      <a href={`mailto:${emailAddress}`} className="text-orange-500 hover:underline">
                        {emailAddress}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-orange-500 mr-3 mt-1 h-5 w-5" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=${prefilledMessage}`}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-orange-500 hover:underline"
                      >
                        +52 332 416 6849
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold mb-3">¿Por qué contratar a través de nosotros?</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Representación oficial y exclusiva</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Garantía de satisfacción</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Asesoría personalizada para tu evento</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Proceso simple y transparente</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Atención 24/7 antes, durante y después</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
