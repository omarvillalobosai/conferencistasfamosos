import React from 'react';

/**
 * Logo oficial "encendiéndose": la luz aparece, el pedestal se dibuja y el nombre entra.
 * Solo CSS y SVG (sin video ni créditos); respeta prefers-reduced-motion desde app.css.
 */
const StageLogo = () => (
  <div className="cf-stagelogo" aria-label="Conferencistas Famosos" role="img">
    <svg width="34" height="86" viewBox="0 0 64 160" aria-hidden="true" focusable="false">
      <circle className="cf-stagelogo__glow" cx="32" cy="9" r="22" fill="#F97316" />
      <circle className="cf-stagelogo__dot" cx="32" cy="9" r="9" fill="#F97316" />
      <line className="cf-stagelogo__stem" x1="32" y1="31" x2="32" y2="160" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <line className="cf-stagelogo__foot" x1="8" y1="160" x2="56" y2="160" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </svg>
    <span className="cf-stagelogo__text">
      <span className="cf-stagelogo__light">conferencistas</span>
      <span className="cf-stagelogo__bold">FAMOSOS</span>
    </span>
  </div>
);

export default StageLogo;
