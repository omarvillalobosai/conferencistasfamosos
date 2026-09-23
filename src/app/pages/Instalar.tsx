import React from 'react';
import Shell from '../components/Shell';
export default function Instalar() {
  return <Shell back="/app"><p className="cf-kicker">Siempre a la mano</p><h1 className="cf-h1">La app en tu iPhone</h1>
    <ol className="cf-install cf-section">
      <li><strong>Abre en Safari</strong><p>Entra a conferencistasfamosos.com/app. Si vienes de WhatsApp, abre el enlace en Safari.</p></li>
      <li><strong>Toca Compartir</strong><p>Busca el cuadro con una flecha hacia arriba. También puede estar dentro del menú del navegador.</p></li>
      <li><strong>Añadir a pantalla de inicio</strong><p>Desliza las opciones hasta encontrarla. Si aparece «Abrir como app», déjalo activado.</p></li>
      <li><strong>Toca Añadir</strong><p>Listo. Abre CF App desde la pantalla de tu iPhone y entra con tu acceso de siempre.</p></li>
    </ol><p className="cf-note">Necesitas internet para consultar y guardar datos.</p>
  </Shell>;
}
