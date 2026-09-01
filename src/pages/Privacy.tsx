
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Privacy = () => {
  return (
    <>
      <Helmet defer={false}>
        <title>Política de Privacidad | ConferencistasFamosos</title>
        <meta name="description" content="Cómo recopilamos, utilizamos y protegemos tu información personal." />
        <link rel="canonical" href="https://conferencistasfamosos.com/privacidad" />
        <meta property="og:title" content="Política de Privacidad | ConferencistasFamosos" />
        <meta property="og:description" content="Privacidad y cookies de ConferencistasFamosos.com." />
        <meta property="og:url" content="https://conferencistasfamosos.com/privacidad" />
      </Helmet>

      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Política de Privacidad</h1>
            <p className="text-gray-600 mb-8">Última actualización: 17 de abril de 2025</p>
            
            <Separator className="my-8" />
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Introducción</h2>
              <p className="text-gray-700 mb-4">
                En ConferencistasFamosos.com, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política de privacidad te informará sobre cómo recopilamos, utilizamos y protegemos tu información cuando utilizas nuestro sitio web y servicios.
              </p>
              <p className="text-gray-700 mb-4">
                Al utilizar nuestro sitio web y servicios, aceptas las prácticas descritas en esta política de privacidad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Información que Recopilamos</h2>
              <p className="text-gray-700 mb-4">
                Podemos recopilar los siguientes tipos de información:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Información personal:</strong> Nombre, dirección de correo electrónico, número de teléfono, empresa u organización, cargo.</li>
                <li><strong>Información sobre eventos:</strong> Detalles sobre el evento para el que estás solicitando un conferencista, como fecha, lugar, duración, tema, presupuesto.</li>
                <li><strong>Información de uso:</strong> Cómo utilizas nuestro sitio web, qué páginas visitas, cuánto tiempo permaneces en ellas.</li>
                <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador, dispositivo, sistema operativo.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Cómo Recopilamos tu Información</h2>
              <p className="text-gray-700 mb-4">
                Recopilamos información de las siguientes maneras:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Información proporcionada directamente:</strong> Cuando completas formularios en nuestro sitio web, nos contactas por correo electrónico o teléfono, o interactúas con nosotros de cualquier otra manera.</li>
                <li><strong>Información recopilada automáticamente:</strong> A través de cookies y tecnologías similares cuando visitas nuestro sitio web.</li>
                <li><strong>Fuentes de terceros:</strong> Podemos recibir información sobre ti de socios comerciales, proveedores de servicios y otras fuentes públicamente disponibles.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Cómo Utilizamos tu Información</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos tu información para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Proporcionarte nuestros servicios de intermediación para la contratación de conferencistas.</li>
                <li>Responderte cuando nos contactas y atender tus solicitudes.</li>
                <li>Personalizar y mejorar tu experiencia en nuestro sitio web.</li>
                <li>Enviarte información relevante sobre nuestros servicios, conferencistas y eventos.</li>
                <li>Cumplir con nuestras obligaciones legales y proteger nuestros derechos.</li>
                <li>Analizar y mejorar nuestro sitio web y servicios.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Base Legal para el Procesamiento</h2>
              <p className="text-gray-700 mb-4">
                Procesamos tu información personal con las siguientes bases legales:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Consentimiento:</strong> Cuando nos has dado permiso explícito para procesar tu información con un fin específico.</li>
                <li><strong>Ejecución de un contrato:</strong> Cuando el procesamiento es necesario para cumplir con un contrato contigo o para tomar medidas a petición tuya antes de celebrar un contrato.</li>
                <li><strong>Intereses legítimos:</strong> Cuando el procesamiento es necesario para nuestros intereses legítimos o los de un tercero, siempre que tus derechos fundamentales no prevalezcan sobre esos intereses.</li>
                <li><strong>Obligación legal:</strong> Cuando el procesamiento es necesario para cumplir con una obligación legal.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Compartiendo tu Información</h2>
              <p className="text-gray-700 mb-4">
                Podemos compartir tu información con:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Conferencistas:</strong> Para facilitar la contratación y coordinar los detalles del evento.</li>
                <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a proporcionar nuestros servicios (procesamiento de pagos, alojamiento web, marketing, etc.).</li>
                <li><strong>Asesores profesionales:</strong> Abogados, contadores, auditores y aseguradores.</li>
                <li><strong>Autoridades:</strong> Cuando estemos obligados por ley o para proteger nuestros derechos.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                No vendemos tu información personal a terceros.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Seguridad de Datos</h2>
              <p className="text-gray-700 mb-4">
                Hemos implementado medidas de seguridad adecuadas para proteger tu información personal contra pérdida, acceso no autorizado, divulgación, alteración o destrucción.
              </p>
              <p className="text-gray-700 mb-4">
                Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Por lo tanto, no podemos garantizar su seguridad absoluta.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Cookies y Tecnologías Similares</h2>
              <p className="text-gray-700 mb-4">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Tipos de cookies que utilizamos:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Cookies necesarias:</strong> Esenciales para el funcionamiento básico del sitio web.</li>
                <li><strong>Cookies de preferencias:</strong> Permiten recordar información que cambia la forma en que se comporta o se ve el sitio.</li>
                <li><strong>Cookies estadísticas:</strong> Ayudan a entender cómo los visitantes interactúan con el sitio al recopilar y reportar información de forma anónima.</li>
                <li><strong>Cookies de marketing:</strong> Utilizadas para rastrear a los visitantes en los sitios web con el fin de mostrar anuncios relevantes.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <strong>Control de cookies:</strong> Puedes configurar tu navegador para rechazar todas o algunas cookies, o para alertarte cuando los sitios web establezcan o accedan a cookies. Si desactivas o rechazas las cookies, ten en cuenta que algunas partes de este sitio web pueden volverse inaccesibles o no funcionar correctamente.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Tus Derechos</h2>
              <p className="text-gray-700 mb-4">
                Dependiendo de tu ubicación, puedes tener los siguientes derechos respecto a tu información personal:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Derecho de acceso a tu información personal.</li>
                <li>Derecho de rectificación de información inexacta.</li>
                <li>Derecho de eliminación de tu información personal.</li>
                <li>Derecho de restricción del procesamiento de tu información personal.</li>
                <li>Derecho a la portabilidad de datos.</li>
                <li>Derecho a oponerte al procesamiento de tu información personal.</li>
                <li>Derecho a retirar el consentimiento en cualquier momento.</li>
                <li>Derecho a presentar una queja ante una autoridad supervisora.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Para ejercer cualquiera de estos derechos, contáctanos a través de los datos proporcionados en la sección "Contacto".
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Conservación de Datos</h2>
              <p className="text-gray-700 mb-4">
                Conservaremos tu información personal solo durante el tiempo necesario para los fines establecidos en esta política de privacidad, a menos que se requiera o permita un período de retención más largo por ley.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Cambios a esta Política</h2>
              <p className="text-gray-700 mb-4">
                Podemos actualizar nuestra política de privacidad periódicamente. Te informaremos sobre cualquier cambio publicando la nueva política de privacidad en esta página y, si los cambios son significativos, te notificaremos por correo electrónico o mediante un aviso destacado en nuestro sitio web.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tienes preguntas sobre esta política de privacidad, puedes contactarnos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Email: privacidad@conferencistasfamosos.com</li>
                <li>Teléfono: +52 3324166849</li>
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

export default Privacy;
