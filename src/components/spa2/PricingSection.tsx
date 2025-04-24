
import React from 'react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  return (
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
  );
};

export default PricingSection;
