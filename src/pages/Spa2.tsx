
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
      <Helmet defer={false}>
        <title>SpeakerPro.AI | Omar Villalobos</title>
        <meta name="description" content="Academia donde construyes tu marca personal con inteligencia artificial y emocional, creada por Omar Villalobos." />
        <link rel="canonical" href="https://conferencistasfamosos.com/spa2" />
        <meta property="og:title" content="SpeakerPro.AI | Omar Villalobos" />
        <meta property="og:description" content="Construye tu marca personal con IA junto a Omar Villalobos." />
        <meta property="og:url" content="https://conferencistasfamosos.com/spa2" />
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
