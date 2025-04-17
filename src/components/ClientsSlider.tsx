
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Array of client logo images from the supabase storage
const clientLogos = [
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/bayer.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/bmw.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/bnl.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/cfe.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/coppel.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/hcwellness.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/itesm.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/kiosko.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/marista.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/OMV-LOGO-11.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/oxxo.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/pan.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/pepsi.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/tvazteca.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/udg.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/uvm.png",
  "https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/product-images/Logos/Clientes_omv/televisa.png"
];

export const ClientsSlider: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
    align: "start",
    slidesToScroll: 1
  }, [
    Autoplay({ delay: 2000, stopOnInteraction: false })
  ]);
  
  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {clientLogos.map((logo, index) => (
          <div 
            key={index} 
            className="flex-none w-1/2 sm:w-1/3 md:w-1/5 px-4 flex items-center justify-center"
          >
            <div className="h-24 w-full bg-white rounded-md shadow-sm border border-gray-100 flex items-center justify-center p-4">
              <img 
                src={logo} 
                alt={`Cliente ${index + 1}`} 
                className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
