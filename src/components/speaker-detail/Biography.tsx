
import React from 'react';
import { BookOpen } from 'lucide-react';

interface BiographyProps {
  speakerName: string;
  specialty: string;
}

const Biography: React.FC<BiographyProps> = ({ speakerName, specialty }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
          <BookOpen className="text-blue-600 mr-3" size={32} />
          Biografía
        </h2>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p>
            {speakerName} es reconocido como uno de los conferencistas más destacados en el ámbito de {specialty}.
            Con una trayectoria profesional que abarca más de 15 años, ha impactado positivamente a miles de personas y cientos
            de organizaciones a través de sus conferencias, talleres y programas de formación.
          </p>
          <p>
            Su enfoque único combina conocimientos teóricos sólidos con experiencias prácticas y anécdotas personales,
            lo que hace que sus presentaciones sean no solo informativas sino también inspiradoras y memorables.
          </p>
          <p>
            Ha colaborado con empresas líderes en diversos sectores, ayudándoles a potenciar el talento de sus equipos
            y a desarrollar culturas organizacionales basadas en valores como la excelencia, la innovación y el trabajo en equipo.
          </p>
          <p>
            Su pasión por compartir conocimientos le ha llevado a escribir varios libros de gran éxito y a desarrollar
            metodologías propias que facilitan la aplicación práctica de conceptos complejos en el día a día personal y profesional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Biography;
