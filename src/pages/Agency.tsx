
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Building, CheckCircle, User, MessageSquare } from 'lucide-react';

const Agency = () => {
  return (
    <>
      <Helmet>
        <title>Agencia | ConferencistasFamosos.com</title>
        <meta 
          name="description" 
          content="Somos una agencia que garantiza el resultado efectivo del evento y la calidad del conferencista para agregar verdadero valor con resultados medibles." 
        />
      </Helmet>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Agencia de Conferencistas Profesionales</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Conectamos a los mejores conferencistas con eventos que buscan generar un impacto real y medible
            </p>
          </div>
        </section>
        
        {/* About Agency Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <Building className="text-orange-500 mr-3" size={32} />
                  <h2 className="text-3xl font-bold">Nuestra Agencia</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  En Conferencistas Famosos, somos una agencia especializada en conectar a los mejores oradores y expertos 
                  con eventos que buscan generar un verdadero impacto en su audiencia.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Nuestra principal misión es garantizar el resultado efectivo del evento y la calidad del conferencista. 
                  Nos preocupamos porque la inversión realizada sea rentable para nuestros clientes, 
                  agregándole verdadero valor con resultados medibles.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p>Seleccionamos cuidadosamente a cada conferencista según las necesidades específicas de tu evento</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p>Garantizamos la calidad y profesionalismo de nuestros oradores</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <p>Ofrecemos seguimiento post-evento para medir resultados y asegurar la satisfacción del cliente</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                  alt="Equipo de Conferencistas Famosos" 
                  className="rounded-lg shadow-xl w-full object-cover h-96"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* CEO Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <User className="text-orange-500 mr-3" size={32} />
                  <h2 className="text-3xl font-bold">Nuestro CEO y Fundador</h2>
                </div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4">Omar Villalobos</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Como fundador y CEO de Conferencistas Famosos, Omar Villalobos ha dedicado su carrera a elevar 
                  el estándar de las conferencias y eventos en Latinoamérica y el mundo.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Con más de 15 años de experiencia como conferencista internacional, Omar comprende perfectamente 
                  las necesidades tanto de los oradores como de las organizaciones que los contratan. 
                </p>
                <p className="text-lg text-gray-700">
                  Bajo su liderazgo, nuestro equipo se compromete personalmente en velar y garantizar que se cumpla 
                  el objetivo del cliente, cumpliendo con nuestra promesa de valor y nuestra garantía de satisfacción.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                  alt="Omar Villalobos - CEO de Conferencistas Famosos" 
                  className="rounded-lg shadow-xl w-full object-cover h-96"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <MessageSquare className="text-orange-500 mr-3" size={32} />
                <h2 className="text-3xl font-bold">Preguntas Frecuentes</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Resolvemos tus dudas sobre nuestra agencia y el proceso de contratación de conferencistas
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    ¿Por qué debería contratar un conferencista a través de su agencia?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Contratando a través de Conferencistas Famosos obtienes un servicio integral que incluye asesoría personalizada,
                    selección del conferencista ideal para tu evento, gestión logística completa y garantía de satisfacción.
                    Además, nos enfocamos en el ROI de tu evento, asegurándonos que la inversión realizada genere resultados tangibles para tu organización.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    ¿Cómo aseguran que el conferencista seleccionado sea el adecuado para mi evento?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Realizamos un análisis detallado de las necesidades específicas de tu evento, incluyendo objetivos, 
                    perfil de la audiencia y resultados esperados. Con esta información, recomendamos únicamente conferencistas 
                    que tienen experiencia comprobada generando impacto en contextos similares, asegurando así la mejor elección para tus objetivos.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    ¿Qué incluye su servicio de contratación de conferencistas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Nuestro servicio incluye asesoría completa en la selección del conferencista, coordinación de agenda,
                    gestión de contratos, requisitos técnicos, traslados y hospedaje cuando corresponda, material promocional
                    para tu evento, y seguimiento post-evento para evaluar resultados y satisfacción. Ofrecemos una solución llave en mano.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    ¿Cómo garantizan el éxito de la conferencia?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Garantizamos el éxito a través de nuestro proceso de cuatro pasos: 1) Diagnóstico detallado de necesidades,
                    2) Selección del conferencista con la experiencia y enfoque adecuados, 3) Preparación personalizada del contenido
                    en colaboración con el cliente, y 4) Medición de resultados post-evento para asegurar que se cumplieron los objetivos propuestos.
                    Además, ofrecemos una garantía de satisfacción respaldada personalmente por nuestro CEO.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    ¿Trabajan con conferencistas internacionales?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Sí, contamos con una red global de conferencistas de primer nivel en múltiples idiomas.
                    Gestionamos todos los aspectos logísticos incluyendo traslados internacionales, visas de trabajo cuando son necesarias,
                    hospedaje y requisitos técnicos específicos. Nuestra experiencia internacional asegura una coordinación perfecta
                    sin importar el origen del conferencista o la ubicación del evento.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    ¿Cómo miden el retorno de inversión de un evento con conferencistas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Implementamos diversas metodologías de medición según los objetivos específicos del evento:
                    para eventos corporativos utilizamos encuestas pre y post evento, evaluación de cambios comportamentales,
                    métricas de desempeño y productividad. Para eventos comerciales, medimos leads generados, conversiones y ventas.
                    Trabajamos con cada cliente para establecer KPIs relevantes y medibles antes del evento.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    ¿Ofrecen precios especiales para contrataciones múltiples o programas continuos?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Sí, diseñamos paquetes personalizados para organizaciones que requieren múltiples conferencistas o
                    programas continuos de capacitación. Estos paquetes no solo ofrecen beneficios económicos, sino también
                    una mayor coherencia en los contenidos, seguimiento más efectivo y un acompañamiento integral que potencia
                    los resultados a largo plazo. Consultanos sobre nuestros paquetes corporativos.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para elevar tu próximo evento?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contacta con nosotros hoy mismo y déjanos ayudarte a encontrar al conferencista perfecto
              que garantice el éxito de tu evento con resultados medibles.
            </p>
            <button 
              className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => document.querySelector('a[href="#contacto"]')?.dispatchEvent(new MouseEvent('click'))}
            >
              Solicitar cotización
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Agency;
