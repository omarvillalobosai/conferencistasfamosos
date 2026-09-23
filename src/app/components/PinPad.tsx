import React, { useEffect, useRef, useState } from 'react';

interface PinPadProps {
  length?: number;
  disabled?: boolean;
  onComplete: (pin: string) => Promise<boolean> | boolean; // false = pin incorrecto (sacude y limpia)
}

const PinPad = ({ length = 6, disabled = false, onComplete }: PinPadProps) => {
  const [pin, setPin] = useState('');
  const [shake, setShake] = useState(false);
  const busy = useRef(false);

  const push = (d: string) => {
    if (disabled || busy.current || pin.length >= length) return;
    setPin((p) => p + d);
  };
  const pop = () => {
    if (disabled || busy.current) return;
    setPin((p) => p.slice(0, -1));
  };

  useEffect(() => {
    if (pin.length !== length) return;
    busy.current = true;
    Promise.resolve(onComplete(pin))
      .then((ok) => {
        if (!ok) {
          setShake(true);
          setTimeout(() => setShake(false), 400);
        }
      })
      .finally(() => {
        busy.current = false;
        setPin('');
      });
  }, [pin, length, onComplete]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (/^[0-9]$/.test(e.key)) push(e.key);
      else if (e.key === 'Backspace') pop();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pin, disabled]);

  return (
    <div>
      <div className={`cf-pin-dots ${shake ? 'is-shake' : ''}`} aria-hidden="true">
        {Array.from({ length }, (_, i) => (
          <i key={i} className={i < pin.length ? 'is-on' : ''} />
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {pin.length === 0 ? 'PIN vacío.' : `${pin.length} de ${length} dígitos.`}
      </p>
      <div className="cf-keypad" role="group" aria-label="Teclado del PIN">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((d) => (
          <button key={d} type="button" className="cf-key" onClick={() => push(d)} disabled={disabled}>
            {d}
          </button>
        ))}
        <span aria-hidden="true" />
        <button type="button" className="cf-key" onClick={() => push('0')} disabled={disabled}>
          0
        </button>
        <button
          type="button"
          className="cf-key cf-key--ghost"
          onClick={pop}
          disabled={disabled || pin.length === 0}
          aria-label="Borrar último dígito"
        >
          ⌫
        </button>
      </div>
    </div>
  );
};

export default PinPad;
