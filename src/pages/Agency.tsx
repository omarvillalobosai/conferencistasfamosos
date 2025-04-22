
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
        <title>Agencia | ConferencistasFamosos.com</title>
        <meta 
          name="description" 
          content="Somos una agencia que garantiza el resultado efectivo del evento y la calidad del conferencista para agregar verdadero valor con resultados medibles." 
        />
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
