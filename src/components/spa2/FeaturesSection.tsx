
import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: "🚀",
    title: "Diseña tu logotipo con IA",
    features: [
      "No necesitas ser diseñador. Con nuestra guía, crearás un logo chingón que represente tu esencia.",
      "Paso a paso, clase a clase, acompañado por las herramientas más perras del mercado."
    ]
  },
  {
    icon: "📱",
    title: "Construye tu página web móvil, como un pro",
    features: [
      "Tu CV, tu historia, tu imagen… en una web app diseñada para celulares.",
      "No es Wix, no es Wordpress… es tu escenario digital 24/7."
    ]
  },
  {
    icon: "🧠",
    title: "365 días de contenido en tu blog, en una sola clase",
    features: [
      "Aprende a generar un año de contenido con IA.",
      "Publica con intención, estrategia y autoridad. Tu blog será una fábrica de posicionamiento."
    ]
  },
  {
    icon: "📈",
    title: "Estrategias de marketing con IA y flow de speaker",
    features: [
      "Aprende a usar bots y ChatGPT para crear tus propias campañas.",
      "Desde tu primer lead hasta tu primera venta de $10,000 USD."
    ]
  },
  {
    icon: "🎯",
    title: "Segmentación de audiencias y creación de temas",
    features: [
      "Usa la IA como si fuera tu audiencia ideal para entrenar tus mensajes.",
      "Cada clase te lleva al punto exacto donde lo que dices, le pega directo al corazón (y al bolsillo) de quien te escucha."
    ]
  },
  {
    icon: "🖥️",
    title: "Presentaciones espectaculares creadas con IA",
    features: [
      "Aprende a crear Keynotes, PowerPoints o videos para tu conferencia sin contratar a nadie.",
      "Visuales de impacto, estructura lógica y estética brutal."
    ]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">¿Qué incluye esta experiencia?</h2>
        <div className="space-y-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
