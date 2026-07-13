import React from 'react';
import { Trophy, Sparkles } from 'lucide-react';

const blocks = [
  {
    icon: Trophy,
    chapter: 'Cap. 01 — Establecidos',
    title: 'Speakers con trayectoria',
    desc: 'Tienes escenario y reputación. Buscas un partner estratégico que multiplique tarifas, mercados y presencia editorial.',
    items: [
      'Escalar bookings y tarifas',
      'Expandir a nuevos mercados en Latam',
      'Contenido y difusión constante',
      'Alianzas con marcas y otros speakers',
    ],
  },
  {
    icon: Sparkles,
    chapter: 'Cap. 02 — Emergentes',
    title: 'Speakers en construcción',
    desc: 'Estás empezando. Necesitas dirección experta para construir marca personal, oferta y primeros clientes desde bases sólidas.',
    items: [
      'Posicionamiento y marca personal',
      'Estructura de conferencia y demo reel',
      'Primeras conferencias y clientes',
      'Mentoría y acompañamiento',
    ],
  },
];

const WhoIsItFor: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <span className="text-orange-500 uppercase tracking-[0.4em] text-xs font-bold">Elenco</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 tracking-tighter leading-tight">
            ¿Para quién <span className="text-orange-500">es</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blocks.map(({ icon: Icon, chapter, title, desc, items }) => (
            <div key={title} className="relative border border-neutral-800 p-10 hover:border-orange-500 transition-colors duration-500 group">
              <div className="text-orange-500 font-black text-xs tracking-widest uppercase mb-6">
                {chapter}
              </div>
              <Icon className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-500" size={40} strokeWidth={1.5} />
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 leading-tight">{title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{desc}</p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 border-t border-neutral-900 pt-3">
                    <span className="text-orange-500 font-black">·</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
