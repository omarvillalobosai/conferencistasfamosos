
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import QuoteWizard from './QuoteWizard';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

const RequestQuoteSection: React.FC = () => {
  const [wizardOpen, setWizardOpen] = useState(false);

  const handleOpenWizard = () => {
    setWizardOpen(true);
  };

  return (
    <>
      <section id="contacto" className="section-padding bg-gradient-to-b from-gray-100 to-white py-24">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Solicita una Cotización</h2>
            <p className="text-lg text-gray-700 mb-10">
              Completa nuestro cuestionario y déjanos ayudarte a encontrar al conferencista perfecto para tu evento.
              Nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                onClick={handleOpenWizard} 
                className="text-lg py-6 px-8 bg-orange-500 hover:bg-orange-600 h-auto"
                size="lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Solicitar información
              </Button>
              
              <WhatsAppButton
                variant="outline"
                size="lg"
                className="text-lg py-6 px-8 border-2 border-gray-300 h-auto"
                source="request_quote_section"
              >
                Contáctanos por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <QuoteWizard open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </>
  );
};

export default RequestQuoteSection;
