import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, UserCircle, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

interface CourseProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ConferencistaCourse: React.FC<CourseProps> = ({ number, title, description, icon }) => (
  <div className="group relative bg-[#0a0a0a] border border-white/10 p-8 hover:border-orange-500 transition-all duration-500 flex flex-col">
    <div className="flex items-start justify-between mb-8">
      <span className="text-6xl font-bold text-white/10 group-hover:text-orange-500/30 transition-colors leading-none">
        {number}
      </span>
      <div className="text-orange-500 opacity-70 group-hover:opacity-100 transition-opacity">
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{title}</h3>
    <p className="text-white/60 leading-relaxed flex-grow">{description}</p>
    <div className="mt-8 pt-6 border-t border-white/10 flex items-center text-orange-500 text-sm uppercase tracking-widest font-medium">
      <span>Ver detalles</span>
      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
);

const SoyConferencistaSection: React.FC = () => {
  return (
    <section id="quiero-ser-conferencista" className="py-24 md:py-32 bg-[#050505] text-white border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-orange-500" />
              <span className="text-orange-500 uppercase tracking-[0.3em] text-xs font-medium">
                Ruta profesional
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.05]">
              Soy <br />
              <span className="italic font-light text-white/60">conferencista.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-16">
            <p className="text-white/60 text-lg leading-relaxed">
              Cursos diseñados para transformar tu carrera. De la construcción de tu marca personal a dominar el escenario — el mismo camino que han recorrido los speakers más influyentes de habla hispana.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mb-16">
          <ConferencistaCourse
            number="01"
            title="Tips para crear una conferencia de motivación"
            description="Técnicas probadas para diseñar y entregar conferencias motivacionales que realmente impacten a tu audiencia."
            icon={<Mic className="h-6 w-6" strokeWidth={1.5} />}
          />
          <ConferencistaCourse
            number="02"
            title="Explota tu marca personal"
            description="Estrategias de posicionamiento y visibilidad para destacar como conferencista y atraer más oportunidades."
            icon={<UserCircle className="h-6 w-6" strokeWidth={1.5} />}
          />
          <ConferencistaCourse
            number="03"
            title="Speaker Pro Academy by OMV"
            description="Programa completo y avanzado para dominar todos los aspectos de una carrera exitosa como conferencista profesional."
            icon={<Rocket className="h-6 w-6" strokeWidth={1.5} />}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base px-8 py-6 rounded-none"
          >
            <Link to="/management">Postúlate al Management →</Link>
          </Button>
          <WhatsAppButton
            message="Me interesa información sobre los cursos para conferencistas."
            className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-black font-semibold text-base px-8 py-6 rounded-none"
            size="lg"
          >
            Consultar por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default SoyConferencistaSection;
