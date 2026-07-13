import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ManagementHero from '@/components/management/ManagementHero';
import WhoIsItFor from '@/components/management/WhoIsItFor';
import WhatWeOffer from '@/components/management/WhatWeOffer';
import ManagementTracks from '@/components/management/ManagementTracks';
import HowWeWork from '@/components/management/HowWeWork';
import ManagementFAQ from '@/components/management/ManagementFAQ';
import ManagementApplicationForm from '@/components/management/ManagementApplicationForm';

const SpeakerManagement: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Management para Conferencistas | Conferencistas Famosos</title>
        <meta
          name="description"
          content="Management de carrera para speakers en Latam: representación, contenido, alianzas y mentoría para speakers establecidos y emergentes."
        />
        <link rel="canonical" href="https://conferencistasfamosos.com/management" />
        <meta property="og:title" content="Management para Conferencistas | Conferencistas Famosos" />
        <meta property="og:description" content="Impulsamos tu carrera como speaker con representación, contenido y alianzas estratégicas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://conferencistasfamosos.com/management" />
      </Helmet>

      <Navbar />
      <main className="bg-[#0a0a0a]">
        <ManagementHero />
        <WhoIsItFor />
        <WhatWeOffer />
        <ManagementTracks />
        <HowWeWork />
        <ManagementFAQ />

        <section id="aplicar" className="relative py-32 px-6 bg-black text-white border-t border-neutral-900 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12)_0%,transparent_60%)]" />
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-orange-500 uppercase tracking-[0.4em] text-xs font-bold">Casting</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 mb-6 tracking-tighter">
                Aplica al <span className="text-orange-500">management</span>
              </h2>
              <p className="text-gray-400 font-light">
                Completa el formulario. Revisamos cada aplicación personalmente en 5 a 7 días hábiles.
              </p>
            </div>
            <div className="bg-white text-gray-900 p-8 md:p-10 shadow-[0_0_60px_rgba(249,115,22,0.15)] border border-orange-500/20">
              <ManagementApplicationForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SpeakerManagement;
