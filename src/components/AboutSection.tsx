import React from 'react';
import { ArrowRight, Award, Globe, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getSpeakerSlug } from '@/utils/speakerUtils';

const AboutSection = () => {
  const navigate = useNavigate();

  const handleOmarClick = () => {
    navigate(`/speaker/${getSpeakerSlug('Omar Villalobos')}`);
  };

  return (
    <section id="quienes-somos" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Quiénes somos</h2>
          <p className="text-lg text-gray-700">
            Somos la agencia líder en Latinoamérica conectando a los mejores conferencistas con las empresas y eventos más importantes de la región.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
              alt="Omar Villalobos - Director" 
              className="rounded-lg shadow-xl object-cover h-[500px] w-full"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nuestra misión</h3>
              <p className="text-gray-700">
                En ConferencistasFamosos.com nos dedicamos a transformar eventos ordinarios en experiencias extraordinarias, conectando a las organizaciones con los conferencistas más impactantes de habla hispana.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="text-orange-500 mb-4 h-10 w-10" />
                <h4 className="font-bold text-lg mb-2">Excelencia</h4>
                <p className="text-gray-600 text-sm">Representamos solo a los mejores oradores del mundo hispano.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Globe className="text-orange-500 mb-4 h-10 w-10" />
                <h4 className="font-bold text-lg mb-2">Alcance</h4>
                <p className="text-gray-600 text-sm">Presencia en más de 20 países de Latinoamérica, EE.UU. y España.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="text-orange-500 mb-4 h-10 w-10" />
                <h4 className="font-bold text-lg mb-2">Impacto</h4>
                <p className="text-gray-600 text-sm">Más de 10 millones de vidas transformadas en eventos.</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Fundador y Director</h3>
              <p className="text-gray-700 mb-4">
                <strong>Omar Villalobos</strong>, reconocido internacionalmente como uno de los conferencistas más influyentes del mundo hispano, fundó esta agencia con la visión de elevar el nivel de los eventos corporativos y masivos en Latinoamérica.
              </p>
              <button 
                onClick={handleOmarClick} 
                className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
              >
                Conoce más sobre Omar <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
