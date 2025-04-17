
import React from 'react';
import { User } from 'lucide-react';

const CeoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <User className="text-orange-500 mr-3" size={32} />
              <h2 className="text-3xl font-bold">Nuestro CEO y Fundador</h2>
            </div>
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Omar Villalobos</h3>
            <p className="text-lg text-gray-700 mb-6">
              Como fundador y CEO de Conferencistas Famosos, Omar Villalobos ha dedicado su carrera a elevar 
              el estándar de las conferencias y eventos en Latinoamérica y el mundo.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Con más de 30 años de experiencia como conferencista internacional y habiendo trabajado con más de 900 clientes satisfechos, 
              Omar comprende perfectamente las necesidades tanto de los oradores como de las organizaciones que los contratan. 
            </p>
            <p className="text-lg text-gray-700">
              Bajo su liderazgo, nuestro equipo se compromete personalmente en velar y garantizar que se cumpla 
              el objetivo del cliente, cumpliendo con nuestra promesa de valor y nuestra garantía de satisfacción.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//omar%20villalobos%20photo%20conferencistas%20famosos.svg" 
              alt="Omar Villalobos - CEO de Conferencistas Famosos" 
              className="rounded-lg shadow-xl w-full object-cover h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;
