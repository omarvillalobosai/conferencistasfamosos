
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SpeakersSection from '@/components/SpeakersSection';
import FeaturedSpeakerSection from '@/components/FeaturedSpeakerSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <FeaturedSpeakerSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
