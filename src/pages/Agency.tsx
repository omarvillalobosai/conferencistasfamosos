
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AgencyHero from '@/components/agency/AgencyHero';
import AboutAgencySection from '@/components/agency/AboutAgencySection';
import ClientsSection from '@/components/agency/ClientsSection';
import CeoSection from '@/components/agency/CeoSection';
import TeamSection from '@/components/agency/TeamSection';
import FaqSection from '@/components/agency/FaqSection';
import CallToActionSection from '@/components/agency/CallToActionSection';

const Agency = () => {
  return (
    <>
      <Helmet>
        <title>Agencia de Conferencistas | ConferencistasFamosos</title>
        <meta name="description" content="Agencia que garantiza el resultado del evento y la calidad del conferencista, con resultados medibles para tu marca." />
        <link rel="canonical" href="https://conferencistasfamosos.com/agencia" />
        <meta property="og:title" content="Agencia de Conferencistas | ConferencistasFamosos" />
        <meta property="og:description" content="Garantizamos el resultado de tu evento con conferencistas de alto impacto." />
        <meta property="og:url" content="https://conferencistasfamosos.com/agencia" />
      </Helmet>
      <Navbar />
      <main className="pt-16">
        <AgencyHero />
        <AboutAgencySection />
        <ClientsSection />
        <CeoSection />
        <TeamSection />
        <FaqSection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
};

export default Agency;
