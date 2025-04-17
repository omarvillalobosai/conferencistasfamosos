
import React, { useState } from 'react';
import QuoteWizard from '@/components/QuoteWizard';
import { MessageCircle } from 'lucide-react';

interface ContactCTAProps {
  speakerName: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ speakerName }) => {
  const [wizardOpen, setWizardOpen] = useState(false);
  const whatsappNumber = '523324166849';
  const prefilledMessage = encodeURIComponent(`Me interesa contratar a ${speakerName} para mi evento.`);

  const handleQuoteClick = () => {
    setWizardOpen(true);
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Interesado en contratar a {speakerName}?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para verificar disponibilidad y recibir una propuesta 
            personalizada para tu evento o empresa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
              onClick={handleQuoteClick}
            >
              Solicitar cotización
            </button>
            
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${prefilledMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={20} />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <QuoteWizard open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </>
  );
};

export default ContactCTA;
