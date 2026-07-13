import React from 'react';
import { Star } from 'lucide-react';

const tracks = [
  {
    tag: 'Integral',
    title: 'Management integral',
    desc: 'Gestión completa y exclusiva de tu carrera: bookings, contenido, alianzas y estrategia.',
    features: ['Representación exclusiva', 'Plan de carrera a 12 meses', 'Contenido y difusión', 'Mesa de negociación'],
    featured: true,
  },
  {
    tag: 'Por proyecto',
    title: 'Management por proyecto',
    desc: 'Colaboración caso por caso: representación para eventos o campañas puntuales.',
    features: ['Booking por evento', 'Negociación de contrato', 'Coordinación logística', 'Sin exclusividad'],
  },
  {
    tag: 'Nuevo talento',
    title: 'Programa Speaker Nuevo',
    desc: 'Onboarding + mentoría + primeros bookings para speakers emergentes.',
    features: ['Mentoría 1 a 1', 'Marca personal y demo reel', 'Estructura de conferencia', 'Primeras oportunidades'],
  },
];

const ManagementTracks: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-orange-500 uppercase tracking-[0.4em] text-xs font-bold">Modalidades</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 tracking-tighter">
            Elige tu <span className="text-orange-500">rol</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((t) => (
            <div
              key={t.title}
              className={`relative flex flex-col p-10 border transition-all duration-500 ${
                t.featured
                  ? 'border-orange-500 bg-gradient-to-b from-orange-500/10 to-transparent shadow-[0_0_40px_rgba(249,115,22,0.15)]'
                  : 'border-neutral-800 hover:border-orange-500/50'
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-10 bg-orange-500 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3" fill="currentColor" /> Más elegido
                </div>
              )}
              <span className="text-xs font-black text-orange-500 uppercase tracking-[0.3em] mb-4">{t.tag}</span>
              <h3 className="text-2xl font-black uppercase mb-4 leading-tight">{t.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{t.desc}</p>
              <ul className="space-y-3 mt-auto pt-6 border-t border-neutral-800">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-orange-500 mt-0.5">✓</span>
                    <span>{f}</span>
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

export default ManagementTracks;
