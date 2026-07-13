import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Sparkles } from 'lucide-react';

const WhoIsItFor: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Para quién es?</h2>
          <p className="text-lg text-gray-600">
            Trabajamos con speakers en cualquier etapa de su carrera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 border-orange-200 hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-xl w-fit mb-5">
                <Trophy className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Speakers establecidos</h3>
              <p className="text-gray-700 mb-4">
                Ya tienes trayectoria y quieres un partner estratégico que multiplique tu impacto.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Escalar bookings y tarifas</li>
                <li>• Expandir a nuevos mercados en Latam</li>
                <li>• Contenido y difusión constante</li>
                <li>• Alianzas con marcas y otros speakers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-xl w-fit mb-5">
                <Sparkles className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Speakers emergentes / nuevos</h3>
              <p className="text-gray-700 mb-4">
                Estás empezando y necesitas una guía experta para construir tu carrera desde bases sólidas.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Posicionamiento y marca personal</li>
                <li>• Estructura de conferencia y demo reel</li>
                <li>• Primeras conferencias y clientes</li>
                <li>• Mentoría y acompañamiento</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
