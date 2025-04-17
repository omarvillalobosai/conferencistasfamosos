
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/sonner';
import { Lock, BookOpen, Play } from 'lucide-react';

// Validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Nombre es requerido' }),
  email: z.string().email({ message: 'Email inválido' }),
});

type FormValues = z.infer<typeof formSchema>;

interface CourseCategory {
  id: string;
  title: string;
  description: string;
  playlistId: string;
  ctaText: string;
}

const courseCategories: CourseCategory[] = [
  {
    id: 'soy-cliente',
    title: 'Cursos para clientes',
    description: 'Aprende a seleccionar al mejor conferencista y organizar eventos de alto impacto',
    playlistId: 'PL_KW_uw2ITSuvKbQg1_J_QmcYXFw4dybJ',
    ctaText: 'Ver todos los cursos para clientes'
  },
  {
    id: 'soy-conferencista',
    title: 'Cursos para conferencistas',
    description: 'Perfecciona tus habilidades y lleva tu carrera como conferencista al siguiente nivel',
    playlistId: 'PL_KW_uw2ITStJ7NfAr3ypfAuGYEzxi_TH',
    ctaText: 'Ver todos los cursos para conferencistas'
  },
  {
    id: 'quiero-ser-conferencista',
    title: 'Quiero ser conferencista',
    description: 'Inicia tu camino y aprende los fundamentos para convertirte en un exitoso conferencista',
    playlistId: 'PL_KW_uw2ITSsNpz2vbcEXYV16TrwiKGZE',
    ctaText: 'Ver cursos para comenzar'
  }
];

const CursosPremium: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

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

  return (
    <section id="cursos-premium" className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cursos Premium</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Accede a nuestro contenido exclusivo para desarrollar habilidades específicas según tu rol o aspiración
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {courseCategories.map((category) => (
            <div key={category.id} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700 flex flex-col">
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{category.description}</p>
                <div className="aspect-video bg-slate-900 rounded-lg mb-4 overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/videoseries?list=${category.playlistId}`}
                    title={category.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600 mt-2 gap-2"
                  onClick={() => handleViewCourses(category.id)}
                >
                  {isRegistered ? <Play className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
                  {category.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {isRegistered && (
          <div className="mt-8 p-6 bg-green-900/30 border border-green-500/30 rounded-lg text-center">
            <h3 className="text-xl font-semibold flex items-center justify-center gap-2 mb-2">
              <BookOpen className="h-5 w-5" />
              Acceso Desbloqueado
            </h3>
            <p>¡Gracias por registrarte! Ahora tienes acceso completo a todos nuestros cursos premium.</p>
          </div>
        )}

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Acceso a Cursos Premium</DialogTitle>
              <DialogDescription>
                Completa tu registro para acceder al contenido premium
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit" className="bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
                    {isSubmitting ? 'Registrando...' : 'Registrarme y acceder'}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default CursosPremium;
