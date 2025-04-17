
import React from 'react';
import { ClientsSlider } from '@/components/ClientsSlider';

const ClientsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Empresas que confían en nosotros</h2>
          <p className="text-lg text-gray-700">
            Las empresas e instituciones más importantes de Latinoamérica han confiado en nuestros conferencistas
          </p>
        </div>
        <ClientsSlider />
      </div>
    </section>
  );
};

export default ClientsSection;
