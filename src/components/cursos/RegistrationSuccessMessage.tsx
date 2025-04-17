
import React from 'react';
import { BookOpen } from 'lucide-react';

const RegistrationSuccessMessage: React.FC = () => {
  return (
    <div className="mt-8 p-6 bg-green-900/30 border border-green-500/30 rounded-lg text-center">
      <h3 className="text-xl font-semibold flex items-center justify-center gap-2 mb-2">
        <BookOpen className="h-5 w-5" />
        Acceso Desbloqueado
      </h3>
      <p>¡Gracias por registrarte! Ahora tienes acceso completo a todos nuestros cursos premium.</p>
    </div>
  );
};

export default RegistrationSuccessMessage;
