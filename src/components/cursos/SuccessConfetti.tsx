
import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

interface SuccessConfettiProps {
  show: boolean;
  duration?: number; // Duration in milliseconds
  onComplete?: () => void;
}

const SuccessConfetti: React.FC<SuccessConfettiProps> = ({ 
  show, 
  duration = 2500,
  onComplete 
}) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Set up timeout for confetti duration
    let timeoutId: number | undefined;
    if (show && onComplete) {
      timeoutId = window.setTimeout(() => {
        onComplete();
      }, duration);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [show, duration, onComplete]);

  if (!show) return null;

  return (
    <ReactConfetti
      width={windowDimensions.width}
      height={windowDimensions.height}
      recycle={false}
      numberOfPieces={500}
      tweenDuration={5000}
    />
  );
};

export default SuccessConfetti;
