import React from 'react';
import { ClientsSlider } from '@/components/ClientsSlider';

const ClientsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#070707] border-y border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-[0.4em] text-xs font-bold mb-4">
            En cartelera
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tighter">
            Marcas que confían en <span className="text-orange-500">nuestra visión</span>
          </h2>
        </div>
        <div className="grayscale invert opacity-70 hover:opacity-100 transition-opacity duration-500">
          <ClientsSlider />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
