
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import CursosHero from '@/components/cursos/CursosHero';
import CoursesTabs from '@/components/cursos/CoursesTabs';
import SoyConferencistaSection from '@/components/cursos/SoyConferencistaSection';
import CursosCta from '@/components/cursos/CursosCta';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Cursos: React.FC = () => {
  // Scroll to top on page load
  useScrollToTop();
  
  return (
    <>
      <Helmet>
        <title>Cursos | Conferencistas Famosos</title>
        <meta 
          name="description" 
          content="Aprende a contratar conferencistas profesionales o conviértete en uno con nuestros cursos especializados" 
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        <CursosHero />
        <CoursesTabs />
        <SoyConferencistaSection />
        <CursosCta />
      </main>
      
      <Footer />
    </>
  );
};

export default Cursos;
