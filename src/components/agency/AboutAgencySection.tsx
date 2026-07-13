import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutAgencySection: React.FC = () => {
  return (
    <section id="agencia-esencia" className="py-32 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          {/* Image / editorial block */}
          <div className="md:col-span-7 order-2 md:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Auditorio en evento representado por Conferencistas Famosos"
                loading="lazy"
                className="w-full aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-neutral-800"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-500 -z-10 opacity-30" />
              <div className="absolute top-6 left-6 text-orange-500 font-black text-sm tracking-widest uppercase">
                Cap. 01 — La agencia
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-5 order-1 md:order-2">
            <span className="text-orange-500 uppercase tracking-widest text-xs font-bold">
              Nuestra esencia
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 mb-8 leading-tight">
              No somos una agencia <span className="text-orange-500">más</span>.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              Somos un colectivo enfocado en resultados. Conectamos a los oradores más influyentes de Latinoamérica con eventos que buscan romper el ruido y generar impacto medible.
            </p>
            <p className="text-gray-500 mb-10">
              Cada conferencista se elige con precisión quirúrgica según los objetivos del cliente. Nuestra promesa: la inversión en tu evento se convierte en un antes y un después.
            </p>

            <div className="border-l-2 border-orange-500 pl-6 mb-10">
              <p className="italic text-xl md:text-2xl text-white font-light leading-snug">
                "La mediocridad es el enemigo invisible de un gran evento."
              </p>
            </div>

            <ul className="space-y-4">
              {[
                'Seleccionamos al conferencista ideal para tu audiencia',
                'Garantizamos la calidad y profesionalismo del orador',
                'Damos seguimiento post-evento para medir el impacto real',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgencySection;
