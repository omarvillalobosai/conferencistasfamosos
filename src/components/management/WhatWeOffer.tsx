import React from 'react';
import { Briefcase, Target, Upload, Megaphone, Handshake, GraduationCap } from 'lucide-react';

const items = [
  { icon: Briefcase, title: 'Representación', desc: 'Gestión de bookings ante clientes corporativos en toda Latinoamérica.' },
  { icon: Target, title: 'Estrategia de carrera', desc: 'Plan de posicionamiento, tarifas, temas y expansión de mercados.' },
  { icon: Upload, title: 'Contenido en la plataforma', desc: 'Publicamos tu perfil, videos y materiales en conferencistasfamosos.com.' },
  { icon: Megaphone, title: 'Difusión', desc: 'Distribución de tu contenido en blog, redes y newsletter de la agencia.' },
  { icon: Handshake, title: 'Alianzas y colaboraciones', desc: 'Marcas, medios y proyectos conjuntos con otros speakers.' },
  { icon: GraduationCap, title: 'Mentoría y formación', desc: 'Programa dedicado para speakers nuevos: oratoria, marca y ventas.' },
];

const WhatWeOffer: React.FC = () => {
  return (
    <section id="que-ofrecemos" className="py-32 px-6 bg-black text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-orange-500 uppercase tracking-[0.4em] text-xs font-bold">Producción</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 tracking-tighter">
            ¿Qué incluye el <span className="text-orange-500">management</span>?
          </h2>
          <p className="text-gray-400 mt-6 font-light">
            Un servicio integral pensado para que tú te enfoques en dar conferencias de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="bg-[#0a0a0a] p-10 hover:bg-neutral-900 transition-colors duration-500 group"
            >
              <div className="flex items-center justify-between mb-8">
                <Icon className="text-orange-500 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1.5} />
                <span className="text-neutral-700 font-black text-xs tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-black uppercase tracking-wide mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
