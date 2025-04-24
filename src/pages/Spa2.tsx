
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import HeroSection from '@/components/spa2/HeroSection';
import IntroSection from '@/components/spa2/IntroSection';
import FeaturesSection from '@/components/spa2/FeaturesSection';
import ExperienceBanner from '@/components/spa2/ExperienceBanner';
import PricingSection from '@/components/spa2/PricingSection';

const Spa2 = () => {
  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>SpeakerPro.AI | Omar Villalobos</title>
        <meta 
          name="description" 
          content="La primera academia donde tu marca personal no la diseñas tú… la construyes con inteligencia (artificial + emocional)" 
        />
      </Helmet>

      <Navbar />

      <main className="bg-gradient-to-b from-gray-50 to-white">
        <HeroSection />
        <IntroSection />
        <FeaturesSection />
        <ExperienceBanner />
        <PricingSection />
      </main>

      <Footer />
    </>
  );
};

export default Spa2;
