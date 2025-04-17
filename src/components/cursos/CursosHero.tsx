
import React from 'react';
import { Button } from '@/components/ui/button';

const CursosHero: React.FC = () => {
  return (
    <section 
      className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?q=80&w=1920&auto=format&fit=crop")',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          🎓 Aprende antes de contratar o de convertirte en un conferencista famoso
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-gray-100">
          Cursos diseñados por expertos en eventos, branding y neuropsicología para elevar la calidad de tu decisión o tu carrera
        </p>
        <Button 
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg text-lg"
          asChild
        >
          <a href="#cursos">Explorar Cursos</a>
        </Button>
      </div>
    </section>
  );
};

export default CursosHero;
