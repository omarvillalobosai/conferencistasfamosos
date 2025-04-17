
import React from 'react';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 bg-orange-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Listo para elevar tu próximo evento?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contacta con nosotros hoy mismo y déjanos ayudarte a encontrar al conferencista perfecto
          que garantice el éxito de tu evento con resultados medibles.
        </p>
        <WhatsAppButton
          className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          variant="outline"
        >
          Contáctanos por WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
};

export default CallToActionSection;
