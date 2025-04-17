
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppContact: React.FC = () => {
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
            <a 
              href="https://wa.me/5215555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              <MessageCircle size={20} />
              Enviar mensaje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppContact;
