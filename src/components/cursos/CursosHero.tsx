import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/cursos-hero-cinematic.jpg';

const CursosHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-end bg-[#0a0a0a] overflow-hidden">
      <img
        src={heroImage}
        alt="Masterclass cinematográfica para conferencistas"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-4 pb-20 md:pb-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-orange-500" />
            <span className="text-orange-500 uppercase tracking-[0.3em] text-xs font-medium">
              Masterclass · Formación
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8 tracking-tight">
            Aprende antes<br />
            <span className="italic font-light text-white/80">de subir</span><br />
            al escenario.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
            Cursos diseñados por expertos en eventos, branding y neuropsicología para elevar la calidad de tu decisión — o de tu carrera como speaker.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-base rounded-none"
              asChild
            >
              <a href="#cursos">Explorar cursos →</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white hover:text-black font-semibold px-8 py-6 text-base rounded-none"
              asChild
            >
              <a href="#quiero-ser-conferencista">Quiero ser conferencista</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CursosHero;
