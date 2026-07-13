import React from 'react';
import { Button } from '@/components/ui/button';
import heroImg from '@/assets/agency-hero-cinematic.jpg';

const AgencyHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Escenario cinematográfico con conferencista frente a una audiencia masiva"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      {/* Cinematic vignette + orange spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18)_0%,transparent_70%)]" />

      {/* Cinematic top/bottom bars */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-black z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-black z-10" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto animate-fade-in">
        <span className="block text-orange-500 uppercase tracking-[0.5em] text-xs md:text-sm font-bold mb-6">
          Agencia · Latinoamérica
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9]">
          Impacto
          <br />
          <span
            className="text-transparent border-b-4 border-orange-500 pb-2"
            style={{ WebkitTextStroke: '1px white' }}
          >
            que impone
          </span>
        </h1>
        <p className="mt-10 text-gray-300 max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed">
          Representamos a los conferencistas más influyentes de habla hispana y garantizamos que cada evento se convierta en un momento inolvidable.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contacto">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest px-10 py-6 transition-all duration-500 shadow-[0_0_30px_rgba(249,115,22,0.35)]"
            >
              Solicitar cotización
            </Button>
          </a>
          <a href="#agencia-esencia">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 bg-transparent text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest px-10 py-6"
            >
              Conocer la agencia
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent" />
      </div>
    </section>
  );
};

export default AgencyHero;
