
import React from 'react';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
