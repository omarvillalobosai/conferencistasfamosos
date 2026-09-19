# Animaciones y dinamismo del sitio

## Implementación

- Crear `useCountUp` con `IntersectionObserver`, animación única de aproximadamente 1.5 segundos y easing suave.
- Actualizar los tres indicadores de valor para mostrar 20 países, 1 millón de vidas y el total dinámico de conferencistas desde los datos existentes.
- Crear `useScrollReveal` con aparición `fade-up` al entrar por primera vez en pantalla.
- Aplicar el reveal solamente a las secciones solicitadas de Inicio y Agencia, manteniendo ambos encabezados principales visibles desde la carga.
- Reforzar el hover de las tarjetas de conferencistas con zoom sutil y resplandor naranja, conservando navegación y dimensiones.

## Detalles técnicos

- Solo React, Tailwind, CSS existente e `IntersectionObserver`; no se instalarán dependencias.
- Los observadores se desconectarán después de activarse y al desmontar para evitar trabajo innecesario.
- Se respetará `prefers-reduced-motion` para accesibilidad.
- Al finalizar se ejecutará el type-check del proyecto y se comprobará el estado del build del preview.
