
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import CursosHero from '@/components/cursos/CursosHero';
import CoursesTabs from '@/components/cursos/CoursesTabs';
import SoyConferencistaSection from '@/components/cursos/SoyConferencistaSection';
import CursosCta from '@/components/cursos/CursosCta';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { coursePosts } from '@/data/coursePosts';

const Cursos: React.FC = () => {
  // Scroll to top on page load
  useScrollToTop();

  const courseListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Cursos para Speakers y Contratantes",
    itemListElement: coursePosts.slice(0, 20).map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: c.title,
        description: c.description,
        url: `https://conferencistasfamosos.com/cursos/${c.slug}`,
        provider: {
          "@type": "Organization",
          name: "ConferencistasFamosos.com",
          sameAs: "https://conferencistasfamosos.com"
        }
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Cursos para Speakers | ConferencistasFamosos</title>
        <meta name="description" content="Aprende a contratar conferencistas profesionales o conviértete en uno con nuestros cursos especializados." />
        <link rel="canonical" href="https://conferencistasfamosos.com/cursos" />
        <meta property="og:title" content="Cursos para Speakers | ConferencistasFamosos" />
        <meta property="og:description" content="Cursos especializados para contratar o convertirte en conferencista profesional." />
        <meta property="og:url" content="https://conferencistasfamosos.com/cursos" />
        <script type="application/ld+json">{JSON.stringify(courseListJsonLd)}</script>
      </Helmet>
      
      <Navbar />

      <main className="bg-[#0a0a0a]">
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
