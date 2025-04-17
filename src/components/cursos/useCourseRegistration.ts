
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormValues } from './CourseRegistrationForm';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/sonner';

export const useCourseRegistration = (activeTab: string) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Check if already registered (could use localStorage)
    const registered = localStorage.getItem('cursosPremiumRegistered');
    if (registered) {
      navigate('/cursos-premium');
    } else {
      setIsDialogOpen(true);
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Store user data in Supabase
      const { error } = await supabase
        .from('course_registrations')
        .insert({
          name: data.name,
          email: data.email,
          category: activeTab.replace('tab-', '')
        });
        
      if (error) throw error;
      
      // Save registration state to localStorage for future verification
      localStorage.setItem('cursosPremiumRegistered', 'true');
      localStorage.setItem('cursosPremiumEmail', data.email);
      localStorage.setItem('cursosPremiumName', data.name);
      
      // Close dialog and show success message
      setIsDialogOpen(false);
      setShowConfetti(true);
      
      toast.success('¡Registro exitoso!', {
        description: 'Redirigiendo a los cursos premium...'
      });
      
      // Redirect to premium courses page after short delay
      setTimeout(() => {
        navigate('/cursos-premium');
        setShowConfetti(false);
      }, 2500);
      
    } catch (error) {
      console.error('Error al registrarse:', error);
      toast.error('Error en el registro', { 
        description: 'Por favor intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isDialogOpen,
    setIsDialogOpen,
    isSubmitting,
    showConfetti,
    setShowConfetti,
    handleCtaClick,
    onSubmit
  };
};
