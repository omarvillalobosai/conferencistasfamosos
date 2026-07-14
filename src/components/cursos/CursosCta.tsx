import React from 'react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

const CursosCta: React.FC = () => {
  const prefilledMessage = 'Me interesa más información sobre los cursos de ConferencistasFamosos.';

  return (
    <section className="relative py-32 md:py-48 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
      {/* Orange radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] rounded-full bg-orange-500/20 blur-[180px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-orange-500" />
          <span className="text-orange-500 uppercase tracking-[0.3em] text-xs font-medium">
            Créditos finales
          </span>
          <div className="h-px w-12 bg-orange-500" />
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.05]">
          Toma decisiones<br />
          <span className="italic font-light text-white/70">de alto nivel.</span>
        </h2>
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ya sea que contrates o quieras ser el próximo gran speaker, tenemos el curso para ti.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base px-10 py-6 rounded-none"
            asChild
          >
            <a href="#cursos">Accede ahora →</a>
          </Button>
          <WhatsAppButton
            message={prefilledMessage}
            className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-black font-semibold text-base px-10 py-6 rounded-none"
            size="lg"
          >
            Consultar por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default CursosCta;
