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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Qué incluye el management?</h2>
          <p className="text-lg text-gray-600">
            Un servicio integral pensado para que tú te enfoques en dar conferencias de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all"
            >
              <div className="p-3 bg-orange-100 text-orange-600 rounded-xl w-fit mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
