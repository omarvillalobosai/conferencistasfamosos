
import React from 'react';
import { Building, CheckCircle } from 'lucide-react';

const AboutAgencySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <Building className="text-orange-500 mr-3" size={32} />
              <h2 className="text-3xl font-bold">Nuestra Agencia</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              En Conferencistas Famosos, somos una agencia especializada en conectar a los mejores oradores y expertos 
              con eventos que buscan generar un verdadero impacto en su audiencia.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Nuestra principal misión es garantizar el resultado efectivo del evento y la calidad del conferencista. 
              Nos preocupamos porque la inversión realizada sea rentable para nuestros clientes, 
              agregándole verdadero valor con resultados medibles.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p>Seleccionamos cuidadosamente a cada conferencista según las necesidades específicas de tu evento</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p>Garantizamos la calidad y profesionalismo de nuestros oradores</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p>Ofrecemos seguimiento post-evento para medir resultados y asegurar la satisfacción del cliente</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
              alt="Equipo de Conferencistas Famosos" 
              className="rounded-lg shadow-xl w-full object-cover h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgencySection;
