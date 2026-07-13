import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    q: '¿Tiene costo aplicar?',
    a: 'No. La aplicación y la evaluación son gratuitas. Si avanzamos, definimos el modelo comercial en la propuesta.',
  },
  {
    q: '¿En cuánto tiempo responden?',
    a: 'Revisamos cada aplicación en un plazo de 5 a 7 días hábiles. Si tu perfil encaja, agendamos una entrevista.',
  },
  {
    q: '¿Aceptan speakers sin experiencia?',
    a: 'Sí. Contamos con el Programa Speaker Nuevo, diseñado para acompañar a talento emergente desde el inicio de su carrera.',
  },
  {
    q: '¿Puedo mantener otros representantes?',
    a: 'Depende de la modalidad. El management por proyecto y las alianzas de contenido no requieren exclusividad; el management integral sí.',
  },
  {
    q: '¿En qué países operan?',
    a: 'Operamos en toda Latinoamérica y España, con base en México. Trabajamos con clientes corporativos multinacionales.',
  },
  {
    q: '¿Qué tipo de contenido publican?',
    a: 'Perfil profesional, videos, artículos de blog, entrevistas y difusión en newsletter y redes sociales de la agencia.',
  },
];

const ManagementFAQ: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas frecuentes</h2>
            <p className="text-lg text-gray-600">Todo lo que necesitas saber antes de aplicar.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ManagementFAQ;
