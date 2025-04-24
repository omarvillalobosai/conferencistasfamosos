
import React from 'react';

const IntroSection = () => {
  return (
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
  );
};

export default IntroSection;
