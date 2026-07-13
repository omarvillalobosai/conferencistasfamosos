import React from 'react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

const ManagementHero: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById('aplicar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-5 rounded-full bg-orange-500/10 text-orange-600 text-sm font-semibold tracking-wide">
            MANAGEMENT DE CARRERA
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Management para <span className="text-orange-500">conferencistas</span> de habla hispana
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Impulsamos tu carrera como speaker — ya sea que estés empezando o que quieras llegar al siguiente nivel.
            Representación, contenido, alianzas y estrategia con la agencia líder de Latam.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8"
            >
              Postúlate ahora
            </Button>
            <WhatsAppButton
              message="Hola, me interesa el servicio de management para conferencistas."
              className="bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold text-lg px-8"
              size="lg"
            >
              Hablar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl" />
    </section>
  );
};

export default ManagementHero;
