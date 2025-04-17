
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones | ConferencistasFamosos.com</title>
        <meta name="description" content="Términos y condiciones para la contratación de conferencistas famosos. Conoce las condiciones legales que aplican al contratar nuestros servicios." />
      </Helmet>

      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Términos y Condiciones</h1>
            <p className="text-gray-600 mb-8">Última actualización: 17 de abril de 2025</p>
            
            <Separator className="my-8" />
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Introducción</h2>
              <p className="text-gray-700 mb-4">
                Bienvenido a ConferencistasFamosos.com. Estos términos y condiciones regulan el uso de nuestro sitio web y los servicios de intermediación para la contratación de conferencistas que ofrecemos. Al utilizar nuestros servicios, aceptas estos términos en su totalidad.
              </p>
              <p className="text-gray-700 mb-4">
                ConferencistasFamosos.com actúa como intermediario entre los organizadores de eventos y los conferencistas profesionales. No somos representantes exclusivos de los conferencistas, salvo que se especifique lo contrario.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Servicios</h2>
              <p className="text-gray-700 mb-4">
                Nuestros servicios incluyen:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Intermediación para la contratación de conferencistas profesionales</li>
                <li>Asesoramiento en la selección del conferencista adecuado según las necesidades del evento</li>
                <li>Gestión de la logística relacionada con la participación del conferencista en el evento</li>
                <li>Comunicación entre el organizador del evento y el conferencista</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Proceso de Contratación</h2>
              <p className="text-gray-700 mb-4">
                El proceso de contratación de un conferencista a través de nuestra plataforma sigue los siguientes pasos:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
                <li>Solicitud de cotización a través de nuestro formulario de contacto</li>
                <li>Evaluación de las necesidades específicas del evento</li>
                <li>Presentación de propuestas de conferencistas adecuados</li>
                <li>Negociación de honorarios y condiciones</li>
                <li>Firma de contrato y pago de anticipo</li>
                <li>Coordinación logística</li>
                <li>Realización del evento</li>
                <li>Pago final y evaluación</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Pagos y Cancelaciones</h2>
              <p className="text-gray-700 mb-4">
                La contratación de un conferencista requiere el pago de un anticipo no reembolsable del 50% del total acordado.
              </p>
              <p className="text-gray-700 mb-4">
                En caso de cancelación por parte del contratante:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Cancelación con más de 30 días de anticipación: pérdida del anticipo</li>
                <li>Cancelación entre 30 y 15 días antes del evento: pago del 75% del total</li>
                <li>Cancelación con menos de 15 días de anticipación: pago del 100% del total</li>
              </ul>
              <p className="text-gray-700 mb-4">
                En caso de cancelación por parte del conferencista por causas de fuerza mayor, se ofrecerá un reemplazo adecuado o la devolución del anticipo.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Propiedad Intelectual</h2>
              <p className="text-gray-700 mb-4">
                Todos los contenidos de las conferencias son propiedad intelectual del conferencista. No se permite la grabación, reproducción o distribución sin autorización expresa.
              </p>
              <p className="text-gray-700 mb-4">
                Los materiales proporcionados por los conferencistas son para uso exclusivo del evento contratado y no pueden ser reutilizados sin autorización.
              </p>
              <p className="text-gray-700 mb-4">
                El contenido de nuestro sitio web (textos, imágenes, logos, etc.) está protegido por leyes de propiedad intelectual y no puede ser reproducido sin autorización.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 mb-4">
                ConferencistasFamosos.com actúa como intermediario y no será responsable por:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>El contenido específico de las conferencias</li>
                <li>Opiniones expresadas por los conferencistas</li>
                <li>Problemas técnicos o logísticos no directamente relacionados con nuestras obligaciones</li>
                <li>Cancelaciones por causas de fuerza mayor (desastres naturales, emergencias sanitarias, etc.)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Modificaciones</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web.
              </p>
              <p className="text-gray-700 mb-4">
                Es responsabilidad del usuario revisar periódicamente estos términos para estar al tanto de las actualizaciones.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Ley Aplicable</h2>
              <p className="text-gray-700 mb-4">
                Estos términos y condiciones se rigen por las leyes de México, sin consideración a las disposiciones sobre conflicto de leyes.
              </p>
              <p className="text-gray-700 mb-4">
                Cualquier disputa relacionada con estos términos será sometida a la jurisdicción exclusiva de los tribunales de la Ciudad de México.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos a través de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Email: legal@conferencistasfamosos.com</li>
                <li>Teléfono: +52 55 1234 5678</li>
                <li>Dirección: Ciudad de México, México</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Terms;
