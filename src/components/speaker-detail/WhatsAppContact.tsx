
import React from 'react';
import { MessageCircle } from 'lucide-react';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

const WhatsAppContact: React.FC = () => {
  const prefilledMessage = 'Me interesa contratar los servicios de un Conferencista.';

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
          <MessageCircle className="text-green-500 mr-3" size={32} />
          Contáctanos por WhatsApp
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-green-50 rounded-xl p-8 shadow-md border border-green-200">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white mb-6">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Estamos a un mensaje de distancia</h3>
            <p className="text-lg text-gray-700 mb-8">
              En conferencistasfamosos.com, creemos en ti y en tu evento!
            </p>
            <WhatsAppButton 
              message={prefilledMessage} 
              className="font-bold py-3 px-8 rounded-full" 
              size="lg"
            >
              Enviar mensaje
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppContact;
