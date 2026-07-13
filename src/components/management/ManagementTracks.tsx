import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Modalidades de management</h2>
          <p className="text-lg text-gray-600">Elige el modelo que mejor se adapta a tu momento.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tracks.map((t) => (
            <Card
              key={t.title}
              className={`relative flex flex-col ${t.featured ? 'border-2 border-orange-500 shadow-xl' : 'border border-gray-200'}`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3" /> Más elegido
                </div>
              )}
              <CardContent className="p-8 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2">{t.tag}</span>
                <h3 className="text-xl font-bold mb-3">{t.title}</h3>
                <p className="text-gray-600 mb-5">{t.desc}</p>
                <ul className="space-y-2 text-sm text-gray-700 mt-auto">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTracks;
