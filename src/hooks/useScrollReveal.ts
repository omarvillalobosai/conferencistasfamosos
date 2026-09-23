import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    // Lo que ya está en pantalla al cargar se queda visible; lo que está más abajo se revela al llegar.
    if (element.getBoundingClientRect().top <= window.innerHeight) return;
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(element);
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const animationClass = isVisible
    ? 'animate-fade-in [animation-fill-mode:forwards]'
    : 'opacity-0 translate-y-4';

  return { ref, animationClass };
};