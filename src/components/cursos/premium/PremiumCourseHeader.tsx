
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PremiumCourseHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4">
      <Button 
        variant="ghost" 
        className="mb-8 text-gray-300 hover:text-white flex items-center gap-2"
        onClick={() => navigate('/cursos')}
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a Cursos
      </Button>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cursos Premium
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Bienvenido a nuestra biblioteca de cursos premium especializados para cada perfil. 
            Selecciona la categoría que mejor se adapte a tus necesidades.
          </p>
          <div className="flex items-center gap-2 bg-green-900/30 border border-green-500/30 p-3 rounded-lg">
            <BookOpen className="h-5 w-5 text-green-400" />
            <p className="text-green-300">
              Acceso desbloqueado. ¡Disfruta de todo el contenido premium!
            </p>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="bg-gradient-to-br from-orange-500 to-red-600 p-1 rounded-full">
            <div className="bg-slate-900 p-6 rounded-full">
              <Video className="h-16 w-16 text-orange-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCourseHeader;
