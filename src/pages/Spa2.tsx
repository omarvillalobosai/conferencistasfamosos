
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Spa2 = () => {
  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>SpeakerPro.AI | Omar Villalobos</title>
        <meta 
          name="description" 
          content="La primera academia donde tu marca personal no la diseñas tú… la construyes con inteligencia (artificial + emocional)" 
        />
      </Helmet>

      <Navbar />

      <main className="bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              🎤 BIENVENIDO A SPEAKERPRO.AI
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-700 mb-8">
              La primera academia donde tu marca personal no la diseñas tú… la construyes con inteligencia (artificial + emocional)
            </p>
          </div>
        </section>

        {/* Omar's Intro */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Hola, soy Omar Villalobos.</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Después de 30 años en escenarios de todo el mundo, descubrí una verdad brutal:
              </p>
              <p className="text-2xl font-semibold mt-6 text-orange-400">
                No basta con tener talento. Necesitas tener presencia.<br/>
                Y en este siglo, la presencia se programa.
              </p>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Por eso nace SpeakerPro.ai —una academia radical, diferente, sin excusas ni fórmulas mágicas— donde te entreno personalmente para construir tu marca como conferencista, speaker, líder de opinión o simplemente… alguien que tiene algo que decir y quiere decirlo bien (y ganar bien mientras lo hace).
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">¿Qué incluye esta experiencia?</h2>
            
            <div className="space-y-12">
              {[
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
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Banner */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">🧠 TODO ESTO, BASADO EN 30 AÑOS DE ESCENARIO</h2>
            <p className="text-xl mb-8">
              Con mi experiencia, evitarás años de errores, frustraciones y caminos equivocados.
            </p>
            <p className="text-2xl font-bold">
              Aquí no te voy a decir "tú puedes", te voy a entrenar para que cuando hables…<br/>
              el mundo calle y te escuche.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">🛎️ ¿Quieres ser parte de los nuevos SpeakerPro?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Premium Package */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-500">
                <h3 className="text-2xl font-bold mb-4">Paquete Premium</h3>
                <div className="text-4xl font-bold text-orange-500 mb-6">$597 USD</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span> Aprende a hacer tu logo
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span> Crea tu webapp
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span> Desarrolla tu academia digital
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span> Sistema de venta de boletos/productos digitales
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span> Mejora tu discurso
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span> Optimiza tus conferencias
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span> Practica con IA
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Aplicar Ahora
                </Button>
              </div>

              {/* X10 Package */}
              <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Paquete X10</h3>
                <div className="text-4xl font-bold text-orange-400 mb-6">$5,997 USD</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span> Nuestro equipo se encarga de todo
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span> Creamos tu marca personal
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span> Posicionamiento en el mercado
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span> 365 días de contenido en tu blog personal
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span> Soporte personalizado
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span> Acceso VIP a todas las herramientas
                  </li>
                </ul>
                <Button className="w-full bg-orange-400 hover:bg-orange-500 text-black font-bold">
                  Aplicar al Programa X10
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Spa2;
