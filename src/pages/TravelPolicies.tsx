
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const TravelPolicies = () => {
  return (
    <>
      <Helmet>
        <title>Políticas de Viaje | ConferencistasFamosos</title>
        <meta name="description" content="Condiciones de viaje, alojamiento y traslados para nuestros conferencistas." />
        <link rel="canonical" href="https://conferencistasfamosos.com/politicas-viaje" />
        <meta property="og:title" content="Políticas de Viaje | ConferencistasFamosos" />
        <meta property="og:description" content="Viaje, alojamiento y traslados para conferencistas." />
        <meta property="og:url" content="https://conferencistasfamosos.com/politicas-viaje" />
      </Helmet>

      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Políticas de Viaje</h1>
            <p className="text-gray-600 mb-8">Última actualización: 17 de abril de 2025</p>
            
            <Separator className="my-8" />
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Introducción</h2>
              <p className="text-gray-700 mb-4">
                Las siguientes políticas de viaje aplican para todos los conferencistas representados por ConferencistasFamosos.com. Estas políticas están diseñadas para garantizar el bienestar de nuestros conferencistas durante sus desplazamientos y asegurar que puedan ofrecer su mejor rendimiento en cada evento.
              </p>
              <p className="text-gray-700 mb-4">
                El cumplimiento de estas políticas es parte integral del contrato de servicios para la contratación de conferencistas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Transporte Aéreo</h2>
              <p className="text-gray-700 mb-4">
                Para vuelos nacionales e internacionales, se aplicarán las siguientes condiciones:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Vuelos nacionales (menos de 3 horas):</strong> Clase económica premium o similar.</li>
                <li><strong>Vuelos nacionales (más de 3 horas):</strong> Clase ejecutiva, cuando sea posible.</li>
                <li><strong>Vuelos internacionales (menos de 6 horas):</strong> Clase económica premium o similar.</li>
                <li><strong>Vuelos internacionales (más de 6 horas):</strong> Clase ejecutiva o business.</li>
                <li>Los boletos deben ser adquiridos con al menos 2 semanas de anticipación para vuelos nacionales y 4 semanas para vuelos internacionales.</li>
                <li>Se debe permitir la acumulación de millas o puntos en los programas de viajero frecuente del conferencista.</li>
                <li>El conferencista debe llegar al destino al menos un día antes del evento para vuelos nacionales y dos días antes para vuelos internacionales.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Alojamiento</h2>
              <p className="text-gray-700 mb-4">
                El alojamiento debe cumplir con los siguientes requisitos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Hotel de categoría 4 o 5 estrellas.</li>
                <li>Habitación individual o suite, según disponibilidad y categoría del conferencista.</li>
                <li>Ubicación cercana al lugar del evento (preferiblemente a menos de 30 minutos en transporte).</li>
                <li>Check-in garantizado a cualquier hora del día para llegadas tempranas.</li>
                <li>Late check-out disponible hasta las 16:00 horas, cuando sea necesario.</li>
                <li>Incluir desayuno y acceso a internet de alta velocidad.</li>
                <li>El alojamiento debe estar reservado y confirmado al menos 2 semanas antes del evento.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Transporte Terrestre</h2>
              <p className="text-gray-700 mb-4">
                Para los desplazamientos locales, se deberá proporcionar:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Servicio de traslado desde el aeropuerto al hotel y viceversa.</li>
                <li>Servicio de traslado desde el hotel al lugar del evento y viceversa.</li>
                <li>Vehículo privado con chofer para conferencistas de categoría premium.</li>
                <li>Servicio de taxi o aplicaciones de transporte (Uber, Cabify, etc.) para otros conferencistas.</li>
                <li>El servicio de transporte debe ser puntual y contar con un margen de seguridad para evitar retrasos.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Viáticos y Gastos</h2>
              <p className="text-gray-700 mb-4">
                Además del honorario profesional, se deben cubrir los siguientes gastos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Pasajes aéreos ida y vuelta.</li>
                <li>Impuestos de aeropuerto y tasas de embarque.</li>
                <li>Alojamiento por el tiempo requerido.</li>
                <li>Transporte terrestre local.</li>
                <li>Alimentación durante la estadía o viáticos diarios según acuerdo previo.</li>
                <li>Gastos de visa o permisos especiales, cuando aplique.</li>
                <li>Seguro de viaje para destinos internacionales.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Los gastos pueden ser cubiertos directamente por el contratante o reembolsados al conferencista, según el acuerdo previo.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Acompañantes</h2>
              <p className="text-gray-700 mb-4">
                En caso de que el conferencista viaje con acompañante:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Los gastos del acompañante (pasajes, hospedaje en habitación doble, comidas) serán cubiertos por el conferencista, salvo acuerdo específico en contrario.</li>
                <li>Para conferencistas de categoría premium, se puede negociar la inclusión de un acompañante en las condiciones del contrato.</li>
                <li>El acompañante debe ser informado con anticipación y aprobado en el contrato.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Cambios y Cancelaciones</h2>
              <p className="text-gray-700 mb-4">
                En caso de cambios en los itinerarios de viaje:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Los cambios de fechas u horarios solicitados por el contratante con menos de 2 semanas de anticipación generarán cargos adicionales.</li>
                <li>Los cambios solicitados por el conferencista deben ser notificados con al menos 1 semana de anticipación y estarán sujetos a aprobación.</li>
                <li>En caso de cancelación del evento, los gastos de viaje no reembolsables serán responsabilidad de la parte que cancela.</li>
                <li>Si el conferencista no puede viajar por causas de fuerza mayor, se buscará un reemplazo adecuado o se reprogramará el evento.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Requisitos Especiales</h2>
              <p className="text-gray-700 mb-4">
                Algunos conferencistas pueden tener requisitos especiales que deben ser atendidos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Necesidades dietéticas específicas.</li>
                <li>Condiciones médicas o alergias que requieran atención especial.</li>
                <li>Preferencias de asiento en vuelos.</li>
                <li>Necesidades de equipamiento especial para personas con discapacidad.</li>
                <li>Estos requisitos deben ser informados con anticipación y confirmados antes del viaje.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Seguridad</h2>
              <p className="text-gray-700 mb-4">
                Para garantizar la seguridad del conferencista:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Se debe proporcionar información sobre la situación de seguridad en el destino.</li>
                <li>En destinos con situaciones de seguridad complejas, se debe proporcionar escolta o seguridad adicional.</li>
                <li>El conferencista debe ser informado sobre protocolos de emergencia y contactos locales.</li>
                <li>Se debe contratar un seguro de viaje que cubra atención médica de emergencia, evacuación y repatriación.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Para más información sobre nuestras políticas de viaje, contáctanos a través de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Email: viajes@conferencistasfamosos.com</li>
                <li>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/523324166849?text=Me%20interesa%20más%20información%20sobre%20las%20políticas%20de%20viaje."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    +52 332 416 6849
                  </a>
                </li>
                <li>Persona de contacto: Coordinador de Logística</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default TravelPolicies;
