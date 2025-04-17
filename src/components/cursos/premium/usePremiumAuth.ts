
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const usePremiumAuth = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const registered = localStorage.getItem('cursosPremiumRegistered');
    if (!registered) {
      // Redirect to courses page if not registered
      navigate('/cursos');
    } else {
      setIsAuthorized(true);
    }
  }, [navigate]);

  return { isAuthorized };
};
