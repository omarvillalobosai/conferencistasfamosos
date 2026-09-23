
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import QuoteWizard from './QuoteWizard';
// Escenario vacío con un micrófono bajo el reflector: el titular dice quién falta ahí.
const heroBg = '/img/hero/hero-escenario-1600.webp';
const heroSrcSet = '/img/hero/hero-escenario-480.webp 480w, /img/hero/hero-escenario-800.webp 800w, /img/hero/hero-escenario-1200.webp 1200w, /img/hero/hero-escenario-1600.webp 1600w';
const heroVideoMp4 = '/img/hero/hero-escenario.mp4';
const heroVideoWebm = '/img/hero/hero-escenario.webm';

// El video (5 s en bucle, sin audio) solo en pantallas grandes, sin "menos movimiento" y después de cargar la página:
// la imagen sigue siendo el LCP y en móvil no se descarga ni un byte de video.
const useHeroVideo = () => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return;
    const ok = window.matchMedia('(min-width: 768px)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (!ok || conn?.saveData) return;
    const start = () => setEnabled(true);
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => window.removeEventListener('load', start);
  }, []);
  return enabled;
};

const HeroSection = () => {
  const [wizardOpen, setWizardOpen] = useState(false);
  const videoOn = useHeroVideo();

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setWizardOpen(true);
  };

  return (
    <>
      <Helmet defer={false}>
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src={heroBg}
          srcSet={heroSrcSet}
          sizes="100vw"
          alt="Escenario de teatro vacío con un micrófono bajo el reflector y las butacas rojas al fondo"
          width={1600}
          height={900}
          {...{ fetchpriority: "high" }}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {videoOn && (
          <video
            className="hero-video absolute inset-0 w-full h-full object-cover z-0"
            poster={heroBg}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src={heroVideoWebm} type="video/webm" />
            <source src={heroVideoMp4} type="video/mp4" />
          </video>
        )}
        {/* Velo para que el titular se lea sobre la escena */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-0"></div>

        
        <div className="container mx-auto relative z-10 pt-20">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="hero-in text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              ¿Buscas a los conferencistas famosos más influyentes de <span className="text-gradient">Latinoamérica?</span>
            </h1>
            
            <p className="hero-in text-lg md:text-xl text-gray-200 max-w-2xl mx-auto" style={{ ["--hero-delay" as string]: "120ms" }}>
              Conectamos a tu empresa con los mejores expertos en motivación, liderazgo y desarrollo personal para transformar tu evento en una experiencia inolvidable.
            </p>
            
            <div className="hero-in flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4" style={{ ["--hero-delay" as string]: "240ms" }}>
              <a href="#conferencistas" className="w-full sm:w-auto">
                <Button size="lg" className="btn-primary w-full sm:w-auto">
                  Conoce a nuestros expertos
                </Button>
              </a>
              <a href="#" onClick={handleQuoteClick} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white w-full sm:w-auto">
                  Solicitar a un Speaker
                </Button>
              </a>
            </div>
          </div>
          
        </div>

        {/* Indicador de scroll: anclado a la sección (no al contenedor) para que no pise el texto en pantallas bajas */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce z-10 pointer-events-none">
          <span className="text-white text-sm font-medium mb-2">Descubre más</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      <QuoteWizard open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </>
  );
};

export default HeroSection;

