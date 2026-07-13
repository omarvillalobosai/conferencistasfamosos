import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: '¿Tiene costo aplicar?', a: 'No. La aplicación y la evaluación son gratuitas. Si avanzamos, definimos el modelo comercial en la propuesta.' },
  { q: '¿En cuánto tiempo responden?', a: 'Revisamos cada aplicación en un plazo de 5 a 7 días hábiles. Si tu perfil encaja, agendamos una entrevista.' },
  { q: '¿Aceptan speakers sin experiencia?', a: 'Sí. Contamos con el Programa Speaker Nuevo, diseñado para acompañar a talento emergente desde el inicio de su carrera.' },
  { q: '¿Puedo mantener otros representantes?', a: 'Depende de la modalidad. El management por proyecto y las alianzas de contenido no requieren exclusividad; el management integral sí.' },
  { q: '¿En qué países operan?', a: 'Operamos en toda Latinoamérica y España, con base en México. Trabajamos con clientes corporativos multinacionales.' },
  { q: '¿Qué tipo de contenido publican?', a: 'Perfil profesional, videos, artículos de blog, entrevistas y difusión en newsletter y redes sociales de la agencia.' },
];

const ManagementFAQ: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 uppercase tracking-[0.4em] text-xs font-bold">Créditos finales</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase mt-4 tracking-tighter">
            Preguntas <span className="text-orange-500">frecuentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-neutral-800">
              <AccordionTrigger className="text-left font-bold uppercase tracking-wide text-white hover:text-orange-500 py-6 text-sm md:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed pb-6 font-light">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ManagementFAQ;
