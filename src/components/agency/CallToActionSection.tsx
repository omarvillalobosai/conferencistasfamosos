import React from 'react';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

const CallToActionSection: React.FC = () => {
  return (
    <section id="contacto" className="relative py-40 px-6 bg-black text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12)_0%,transparent_60%)]" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-orange-500 uppercase tracking-[0.5em] text-xs font-bold mb-6 block">
          Toma el escenario
        </span>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase mb-12 tracking-tighter leading-[0.95]">
          ¿Listo para dar el
          <br />
          <span className="text-orange-500">salto</span>?
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-14 font-light">
          Cuéntanos sobre tu evento y te conectaremos con el conferencista perfecto en menos de 24 horas.
        </p>
        <WhatsAppButton
          className="inline-block bg-orange-500 hover:bg-white text-white hover:text-black font-black uppercase tracking-widest px-12 py-6 text-base md:text-lg transition-all duration-500 shadow-[0_0_40px_rgba(249,115,22,0.4)] transform hover:-translate-y-1"
          variant="outline"
        >
          Iniciar conversación
        </WhatsAppButton>
      </div>
    </section>
  );
};

export default CallToActionSection;
