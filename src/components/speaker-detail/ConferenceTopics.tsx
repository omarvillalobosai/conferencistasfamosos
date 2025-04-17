
import React from 'react';
import { Award, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ConferenceTopicsProps {
  topics: string[];
}

const ConferenceTopics: React.FC<ConferenceTopicsProps> = ({ topics }) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
          <Award className="text-orange-600 mr-3" size={32} />
          Temas de Conferencias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topics.map((topic, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 flex items-center">
                  <Star className="text-yellow-500 mr-2" size={18} />
                  {topic}
                </h3>
                <p className="text-gray-600">
                  Conferencia diseñada para inspirar y desarrollar habilidades en {topic.toLowerCase()}.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Cada conferencia puede ser adaptada a las necesidades específicas de su organización,
            con duración y enfoque personalizados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConferenceTopics;
