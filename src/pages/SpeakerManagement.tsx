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
      <main>
        <ManagementHero />
        <WhoIsItFor />
        <WhatWeOffer />
        <ManagementTracks />
        <HowWeWork />
        <ManagementFAQ />

        <section id="aplicar" className="py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Aplica al management</h2>
                <p className="text-lg text-gray-600">
                  Completa el formulario. Revisamos cada aplicación personalmente en 5 a 7 días hábiles.
                </p>
              </div>
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
