
import React, { useState } from 'react';
import QuoteWizard from '@/components/QuoteWizard';

interface ContactCTAProps {
  speakerName: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ speakerName }) => {
  const [wizardOpen, setWizardOpen] = useState(false);

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
          <div className="flex justify-center">
            <button 
              className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
              onClick={handleQuoteClick}
            >
              Solicitar cotización
            </button>
          </div>
        </div>
      </section>

      <QuoteWizard open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </>
  );
};

export default ContactCTA;
