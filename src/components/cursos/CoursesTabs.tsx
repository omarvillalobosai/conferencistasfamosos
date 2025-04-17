
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import CourseCard from './CourseCard';
import { Button } from '@/components/ui/button';
import { Mic, Rocket } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/sonner';
import { useNavigate } from 'react-router-dom';
import ReactConfetti from 'react-confetti';

interface Course {
  title: string;
  description: string;
  tag: string;
}

interface TabContent {
  title: string;
  description: string;
  courses: Course[];
  cta?: {
    text: string;
    link: string;
  }
}

interface TabData {
  label: string;
  icon: React.ReactNode;
  content: TabContent;
}

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Nombre es requerido' }),
  email: z.string().email({ message: 'Email inválido' }),
});

type FormValues = z.infer<typeof formSchema>;

const CoursesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab-cliente");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const tabs: TabData[] = [
    {
      label: "Soy Cliente",
      icon: <Mic className="h-5 w-5" />,
      content: {
        title: "¿Vas a contratar a un conferencista?",
        description: "No tires tu presupuesto en seguidores sin sustancia. Aprende a elegir al speaker correcto para tu evento, según objetivos, tipo de audiencia y calidad de contenido.",
        courses: [
          {
            title: "Cómo elegir al conferencista ideal",
            description: "Checklist de objetivos, personalidad, estilo, y nivel de profundidad según tu tipo de audiencia.",
            tag: "Gratis"
          },
          {
            title: "Tips para organizar un evento de alto impacto",
            description: "Errores comunes, tiempos ideales, logística profesional y cómo asegurar una experiencia WOW.",
            tag: "Popular"
          },
          {
            title: "Tipos de conferencistas y cuándo elegir a cada uno",
            description: "Inspiracionales, técnicos, disruptivos, panelistas… ¿Cuál necesitas tú?",
            tag: "Premium"
          }
        ],
        cta: {
          text: "Ver cursos premium",
          link: "/cursos-premium"
        }
      }
    },
    {
      label: "Quiero ser conferencista",
      icon: <Rocket className="h-5 w-5" />,
      content: {
        title: "¿Quieres ser un conferencista famoso?",
        description: "Cursos estratégicos sobre marca personal, storytelling, psicología de impacto y posicionamiento digital. De la tarima al trending topic.",
        courses: [
          {
            title: "Cómo construir tu marca personal como speaker",
            description: "Define tu mensaje, tu voz y tu diferenciador con estrategia.",
            tag: "Gratis"
          },
          {
            title: "El arte de hablar y vender sin parecer vendedor",
            description: "Técnicas de neuroventa y conexión emocional para escenarios.",
            tag: "Premium"
          },
          {
            title: "Posiciónate como experto en tu nicho",
            description: "Framework de autoridad, visibilidad y conversión.",
            tag: "Nuevo"
          }
        ],
        cta: {
          text: "Ver cursos premium",
          link: "/cursos-premium"
        }
      }
    }
  ];

  return (
    <section id="cursos" className="py-16 bg-gray-50">
      {showConfetti && (
        <ReactConfetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={500}
          tweenDuration={5000}
        />
      )}
      <div className="container mx-auto px-4">
        <Tabs 
          defaultValue="tab-cliente" 
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              {tabs.map((tab, idx) => (
                <TabsTrigger 
                  key={idx} 
                  value={`tab-${tab.label.toLowerCase().split(' ')[0]}`}
                  className="flex items-center gap-2 px-4 py-3"
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {tabs.map((tab, idx) => (
            <TabsContent 
              key={idx} 
              value={`tab-${tab.label.toLowerCase().split(' ')[0]}`}
              className="animate-fade-in"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">{tab.content.title}</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {tab.content.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tab.content.courses.map((course, courseIdx) => (
                  <CourseCard 
                    key={courseIdx} 
                    title={course.title} 
                    description={course.description} 
                    tag={course.tag} 
                  />
                ))}
              </div>

              {tab.content.cta && (
                <div className="mt-12 text-center">
                  <Button 
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    asChild
                  >
                    <a 
                      href={tab.content.cta.link} 
                      onClick={handleCtaClick}
                    >
                      {tab.content.cta.text}
                    </a>
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

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

export default CoursesTabs;
