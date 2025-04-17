
import React from 'react';

const CallToActionSection: React.FC = () => {
  const whatsappNumber = '523324166849';
  const prefilledMessage = encodeURIComponent('Me interesa más información sobre ConferencistasFamosos.');
  
  return (
    <section className="py-16 bg-orange-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Listo para elevar tu próximo evento?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contacta con nosotros hoy mismo y déjanos ayudarte a encontrar al conferencista perfecto
          que garantice el éxito de tu evento con resultados medibles.
        </p>
        <a 
          className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          href={`https://wa.me/${whatsappNumber}?text=${prefilledMessage}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contáctanos por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CallToActionSection;
