import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

// Botón flotante de WhatsApp: aparece tras el primer scroll para no competir con el hero.
const FloatingWhatsApp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const href = `https://wa.me/523324166849?text=${encodeURIComponent(
    'Hola, quiero cotizar un conferencista para mi evento.',
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25d366] text-[#04140a] font-bold text-sm pl-4 pr-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 motion-reduce:transition-none hover:scale-105 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;
