
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A hook that scrolls the page to the top when the pathname changes
 */
export function useScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
}
