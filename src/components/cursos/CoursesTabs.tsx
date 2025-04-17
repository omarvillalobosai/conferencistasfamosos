
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Mic, Rocket } from 'lucide-react';
import { TabData } from './types';
import CourseTabContent from './CourseTabContent';
import CourseRegistrationDialog from './CourseRegistrationDialog';
import SuccessConfetti from './SuccessConfetti';
import { useCourseRegistration } from './useCourseRegistration';

const CoursesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab-cliente");
  const {
    isDialogOpen,
    setIsDialogOpen,
    isSubmitting,
    showConfetti,
    setShowConfetti,
    handleCtaClick,
    onSubmit
  } = useCourseRegistration(activeTab);

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
      <SuccessConfetti 
        show={showConfetti} 
        onComplete={() => setShowConfetti(false)}
      />
      
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
              <CourseTabContent 
                content={tab.content} 
                onCtaClick={handleCtaClick}
              />
            </TabsContent>
          ))}
        </Tabs>

        <CourseRegistrationDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </section>
  );
};

export default CoursesTabs;
