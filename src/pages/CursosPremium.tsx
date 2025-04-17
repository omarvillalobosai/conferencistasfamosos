
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import PremiumCourseHeader from '@/components/cursos/premium/PremiumCourseHeader';
import PremiumCourseTabs from '@/components/cursos/premium/PremiumCourseTabs';
import { usePremiumAuth } from '@/components/cursos/premium/usePremiumAuth';

const CursosPremium: React.FC = () => {
  // Scroll to top on page load
  useScrollToTop();
  
  // Check if user is registered
  const { isAuthorized } = usePremiumAuth();

  if (!isAuthorized) {
    return null; // Don't render anything until authorization check completes
  }

  return (
    <>
      <Helmet>
        <title>Cursos Premium | Conferencistas Famosos</title>
        <meta 
          name="description" 
          content="Accede a nuestro contenido exclusivo para desarrollar habilidades específicas según tu rol o aspiración" 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
          <PremiumCourseHeader />
          <div className="container mx-auto px-4">
            <PremiumCourseTabs />
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CursosPremium;
