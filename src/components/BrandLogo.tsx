import React from 'react';

type BrandLogoProps = {
  /** Color del pedestal y de "conferencistas"; FAMOSOS y la luz van siempre en naranja. */
  tone?: 'light' | 'dark';
  /** Alto del bloque en píxeles (el símbolo y el texto escalan juntos). */
  height?: number;
  className?: string;
};

/**
 * Logotipo oficial (2026-09-23): pedestal de micrófono con luz naranja + "conferencistas" ligero / "FAMOSOS" negro.
 * Se dibuja en línea para que sea nítido a cualquier tamaño y herede el color según el fondo.
 */
const BrandLogo = ({ tone = 'light', height = 36, className = '' }: BrandLogoProps) => {
  const ink = tone === 'light' ? '#FFFFFF' : '#0A0A0A';
  const sym = height; // el símbolo ocupa todo el alto
  return (
    <span
      className={`inline-flex items-center gap-[0.55em] font-montserrat leading-none select-none ${className}`}
      style={{ height, fontSize: height * 0.36 }}
      aria-label="Conferencistas Famosos"
    >
      <svg width={sym * 0.4} height={sym} viewBox="0 0 64 160" aria-hidden="true" focusable="false">
        <circle cx="32" cy="9" r="9" fill="#F97316" />
        <line x1="32" y1="31" x2="32" y2="160" stroke={ink} strokeWidth="4" strokeLinecap="round" />
        <line x1="8" y1="160" x2="56" y2="160" stroke={ink} strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col justify-center" style={{ color: ink }}>
        <span className="font-light tracking-[0.18em]" style={{ fontSize: '0.78em' }}>conferencistas</span>
        <span className="font-extrabold tracking-[0.12em] text-orange-500" style={{ fontSize: '1.1em', marginTop: '0.12em' }}>FAMOSOS</span>
      </span>
    </span>
  );
};

export default BrandLogo;
