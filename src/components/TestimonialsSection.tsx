
import React, { useRef, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const clients = [
  "Google", "Microsoft", "Santander", "Bimbo", "Telefónica", 
  "BBVA", "Coca-Cola", "Pemex", "Banamex", "Walmart", 
  "Ford", "Universidad Nacional", "Liverpool", "AT&T", "Sony"
];

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

const LogoSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
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

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Clientes Satisfechos</h2>
          <p className="text-lg text-gray-700">
            Las empresas e instituciones más importantes de Latinoamérica han confiado en nuestros conferencistas.
          </p>
        </div>
        
        <div className="mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <Quote className="text-orange-500 mb-4 h-8 w-8" />
                      <blockquote className="text-gray-700 mb-6">
                        "La participación de Omar Villalobos en nuestra convención anual fue un éxito rotundo. Su capacidad para conectar con nuestra audiencia y transmitir un mensaje poderoso superó todas nuestras expectativas."
                      </blockquote>
                      <footer className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                        <div>
                          <cite className="font-medium not-italic">Roberto Hernández</cite>
                          <p className="text-sm text-gray-500">Director de Eventos, Grupo Financiero</p>
                        </div>
                      </footer>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static" />
              <CarouselNext className="static ml-2" />
            </div>
          </Carousel>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Empresas que confían en nosotros</h3>
          
          {/* Replace the grid with the logo slider */}
          <div className="mb-4">
            <LogoSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
