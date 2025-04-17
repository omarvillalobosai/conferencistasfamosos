
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, UserCircle, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

interface CourseProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag?: string;
}

const ConferencistaCourse: React.FC<CourseProps> = ({ title, description, icon, tag }) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 border-purple-100">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 text-purple-600 rounded-full">
              {icon}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          {tag && (
            <Badge className="bg-purple-500 hover:bg-purple-600 text-white">
              {tag}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <button className="text-purple-500 font-semibold hover:text-purple-700 transition-colors flex items-center">
          Ver detalles del curso
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </CardFooter>
    </Card>
  );
};

const SoyConferencistaSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-purple-200 text-purple-800 hover:bg-purple-300">Nuevo</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soy Conferencista</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hemos creado estos cursos especialmente para ayudarte a convertirte en un conferencista de alto impacto y construir tu carrera como speaker.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ConferencistaCourse
            title="Tips para crear una conferencia de motivación"
            description="Aprende las técnicas probadas para diseñar y entregar conferencias motivacionales que realmente impacten a tu audiencia."
            icon={<Mic className="h-5 w-5" />}
            tag="Básico"
          />
          
          <ConferencistaCourse
            title="Explota tu marca personal"
            description="Estrategias de posicionamiento y visibilidad para destacarte como conferencista y atraer más oportunidades profesionales."
            icon={<UserCircle className="h-5 w-5" />}
            tag="Popular"
          />
          
          <ConferencistaCourse
            title="Speaker Pro Academy by OMV"
            description="Programa completo y avanzado para dominar todos los aspectos de una carrera exitosa como conferencista profesional."
            icon={<Rocket className="h-5 w-5" />}
            tag="Premium"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg px-8"
          >
            Ver todos los cursos
          </Button>
          
          <WhatsAppButton
            message="Me interesa información sobre los cursos para conferencistas."
            className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold text-lg px-8"
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
