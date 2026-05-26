
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
        <title>Cursos para Speakers | ConferencistasFamosos</title>
        <meta name="description" content="Aprende a contratar conferencistas profesionales o conviértete en uno con nuestros cursos especializados." />
        <link rel="canonical" href="https://conferencistasfamosos.com/cursos" />
        <meta property="og:title" content="Cursos para Speakers | ConferencistasFamosos" />
        <meta property="og:description" content="Cursos especializados para contratar o convertirte en conferencista profesional." />
        <meta property="og:url" content="https://conferencistasfamosos.com/cursos" />
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
