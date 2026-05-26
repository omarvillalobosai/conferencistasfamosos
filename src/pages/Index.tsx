
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SpeakersSection from '@/components/SpeakersSection';
import FeaturedSpeakerSection from '@/components/FeaturedSpeakerSection';

import BlogSection from '@/components/BlogSection';
import RequestQuoteSection from '@/components/RequestQuoteSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Conferencistas Famosos | Speakers de Latinoamérica</title>
        <meta name="description" content="Agencia representante de los mejores speakers de habla hispana. Omar Villalobos y conferencistas de alto impacto para tu evento." />
        <meta name="keywords" content="conferencistas, speakers, Omar Villalobos, motivación, liderazgo, conferencias, eventos corporativos" />
        <link rel="canonical" href="https://conferencistasfamosos.com/" />
        <meta property="og:title" content="Conferencistas Famosos | Speakers de Latinoamérica" />
        <meta property="og:description" content="Agencia representante de los mejores speakers de habla hispana." />
        <meta property="og:url" content="https://conferencistasfamosos.com/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <FeaturedSpeakerSection />
        
        <BlogSection />
        <RequestQuoteSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
