import React from 'react';
import { Button } from '@/components/ui/button';

const CeoSection: React.FC = () => {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center relative">
        <div className="order-2 md:order-1">
          <span className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs mb-6 block">
            El visionario
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 tracking-tighter leading-none">
            Omar
            <br />
            <span className="text-orange-500">Villalobos</span>
          </h2>
          <blockquote className="text-xl md:text-2xl italic text-gray-300 border-l-2 border-orange-500 pl-6 mb-8 font-light leading-snug">
            "El contenido tiene que emocionar antes de convertir. Un conferencista bien elegido cambia la historia de un evento."
          </blockquote>
          <p className="text-gray-400 leading-relaxed mb-10">
            Fundador y CEO de Conferencistas Famosos. Más de 30 años en escenarios de todo el mundo y +900 clientes satisfechos. Lidera personalmente la promesa de valor y la garantía de resultados de la agencia.
          </p>
          <Button
            asChild
            className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold uppercase tracking-widest px-8 py-6 transition-all"
          >
            <a href="/speaker/omar-villalobos">Conocer su trayectoria</a>
          </Button>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative group">
            <div className="absolute inset-0 border-2 border-orange-500 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            <img
              src="https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//omar%20villalobos%20photo%20conferencistas%20famosos.svg"
              alt="Omar Villalobos, CEO de Conferencistas Famosos"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover bg-neutral-900"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-orange-500 uppercase tracking-widest text-xs font-bold">CEO & Fundador</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;
