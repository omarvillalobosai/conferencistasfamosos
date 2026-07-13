import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    q: '¿Por qué contratar un conferencista a través de su agencia?',
    a: 'Obtienes un servicio integral: asesoría personalizada, selección del conferencista ideal, gestión logística completa y garantía de satisfacción. Nos enfocamos en el ROI real de tu evento.',
  },
  {
    q: '¿Cómo aseguran que el conferencista sea el adecuado?',
    a: 'Analizamos objetivos, perfil de audiencia y resultados esperados. Recomendamos únicamente conferencistas con experiencia comprobada en contextos similares.',
  },
  {
    q: '¿Qué incluye el servicio de contratación?',
    a: 'Asesoría en selección, coordinación de agenda, gestión de contratos, requisitos técnicos, traslados y hospedaje, material promocional y seguimiento post-evento. Solución llave en mano.',
  },
  {
    q: '¿Cómo garantizan el éxito de la conferencia?',
    a: 'Con nuestro proceso de 4 pasos: diagnóstico, selección, preparación personalizada del contenido y medición post-evento. Respaldado personalmente por nuestro CEO.',
  },
  {
    q: '¿Trabajan con conferencistas internacionales?',
    a: 'Sí. Contamos con red global en múltiples idiomas y gestionamos toda la logística internacional: traslados, visas, hospedaje y requisitos técnicos.',
  },
  {
    q: '¿Cómo miden el retorno de inversión del evento?',
    a: 'Definimos KPIs relevantes antes del evento: encuestas pre/post, cambios comportamentales, métricas de productividad, leads y conversiones según el caso.',
  },
  {
    q: '¿Ofrecen precios para contrataciones múltiples?',
    a: 'Sí. Diseñamos paquetes corporativos con beneficios económicos y seguimiento integral para programas continuos de capacitación.',
  },
];

const FaqSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] text-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 uppercase tracking-[0.4em] text-xs font-bold">Créditos finales</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 tracking-tighter">
            Consultas <span className="text-orange-500">frecuentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-neutral-800 border-t-0"
            >
              <AccordionTrigger className="text-left font-bold uppercase text-sm tracking-widest text-white hover:text-orange-500 hover:no-underline py-6">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed pb-6">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
