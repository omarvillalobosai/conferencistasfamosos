import React from 'react';

// Antes: foto de banco de Unsplash con el alt «Omar Villalobos - Director». Ahora, foto real de Omar en escenario.
const AboutImage = () => {
  return (
    <div>
      <img
        src="/img/speakers/omar-villalobos-destacado.webp"
        alt="Omar Villalobos, director de Conferencistas Famosos, en el escenario"
        width={1000}
        height={563}
        loading="lazy"
        decoding="async"
        className="reveal rounded-lg shadow-xl object-cover h-[500px] w-full"
      />
    </div>
  );
};

export default AboutImage;
