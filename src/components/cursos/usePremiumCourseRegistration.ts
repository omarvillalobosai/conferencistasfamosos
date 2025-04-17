
import { useState } from 'react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/sonner';

export const formSchema = z.object({
  name: z.string().min(2, { message: 'Nombre es requerido' }),
  email: z.string().email({ message: 'Email inválido' }),
});

export type FormValues = z.infer<typeof formSchema>;

export const usePremiumCourseRegistration = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleViewCourses = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Check if already registered (could use localStorage)
    const registered = localStorage.getItem('cursosPremiumRegistered');
    if (registered) {
      setIsRegistered(true);
    } else {
      setIsDialogOpen(true);
    }
  };

  const onSubmit = async (data: FormValues) => {
    if (!selectedCategory) return;
    
    setIsSubmitting(true);
    
    try {
      // Insert registration into Supabase
      const { error } = await supabase
        .from('course_registrations')
        .insert({
          name: data.name,
          email: data.email,
          category: selectedCategory
        });
        
      if (error) throw error;
      
      // Save registration state to localStorage
      localStorage.setItem('cursosPremiumRegistered', 'true');
      localStorage.setItem('cursosPremiumEmail', data.email);
      localStorage.setItem('cursosPremiumName', data.name);
      
      setIsRegistered(true);
      setIsDialogOpen(false);
      
      toast.success('¡Registro exitoso!', {
        description: 'Ahora tienes acceso a los cursos premium.'
      });
      
    } catch (error) {
      console.error('Error registering:', error);
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
    selectedCategory,
    isRegistered,
    isSubmitting,
    handleViewCourses,
    onSubmit
  };
};
