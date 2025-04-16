
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HeroSection = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "ConferencistasFamosos.com",
              "description": "Agencia representante de los mejores speakers de habla hispana. Omar Villalobos, conferencistas motivacionales y expertos de alto impacto para tu evento.",
              "url": "https://conferencistasfamosos.com",
              "logo": "https://conferencistasfamosos.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/conferencistasfamosos",
                "https://www.instagram.com/conferencistasfamosos",
                "https://twitter.com/conferencistasf"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "México"
              }
            }
          `}
        </script>
      </Helmet>
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-black overflow-hidden">
        {/* Background overlay with subtle pattern */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/20 to-transparent z-0"></div>
        
        <div className="container mx-auto relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                ¿Buscas a los conferencistas más influyentes de <span className="text-gradient">Latinoamérica?</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Conectamos a tu empresa con los mejores expertos en motivación, liderazgo y desarrollo personal para transformar tu evento en una experiencia inolvidable.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link to="/#conferencistas">
                  <Button size="lg" className="btn-primary w-full sm:w-auto">
                    Conoce a nuestros expertos
                  </Button>
                </Link>
                <Link to="/#destacado">
                  <Button size="lg" variant="outline" className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white w-full sm:w-auto">
                    Solicita a Omar Villalobos
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Conferencista en escenario" 
                className="rounded-lg shadow-2xl object-cover h-[600px] w-full"
                loading="eager"
              />
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-white text-sm font-medium mb-2">Descubre más</span>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
