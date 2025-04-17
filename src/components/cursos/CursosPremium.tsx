
import React from 'react';
import { courseCategories } from './courseCategories';
import CourseCategoryCard from './CourseCategoryCard';
import CourseRegistrationDialog from './CourseRegistrationDialog';
import RegistrationSuccessMessage from './RegistrationSuccessMessage';
import { usePremiumCourseRegistration } from './usePremiumCourseRegistration';

const CursosPremium: React.FC = () => {
  const {
    isDialogOpen,
    setIsDialogOpen,
    isRegistered,
    isSubmitting,
    handleViewCourses,
    onSubmit
  } = usePremiumCourseRegistration();

  return (
    <section id="cursos-premium" className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cursos Premium</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Accede a nuestro contenido exclusivo para desarrollar habilidades específicas según tu rol o aspiración
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {courseCategories.map((category) => (
            <CourseCategoryCard
              key={category.id}
              category={category}
              isRegistered={isRegistered}
              onViewCourses={handleViewCourses}
            />
          ))}
        </div>
        
        {isRegistered && <RegistrationSuccessMessage />}

        <CourseRegistrationDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </section>
  );
};

export default CursosPremium;
