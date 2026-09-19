import { useEffect, useRef, useState } from 'react';

const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

export const useCountUp = (endValue: number, duration = 1500) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animationFrame: number | undefined;

    const startAnimation = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setValue(endValue);
        return;
      }

      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setValue(Math.round(endValue * easeOutCubic(progress)));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    };

    if (!('IntersectionObserver' in window)) {
      setValue(endValue);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.unobserve(element);
        startAnimation();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
    };
  }, [duration, endValue]);

  return { ref, value };
};