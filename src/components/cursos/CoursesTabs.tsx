
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import CourseCard from './CourseCard';
import { Button } from '@/components/ui/button';
import { Mic, Rocket } from 'lucide-react';

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

const CoursesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab-cliente");

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
        ]
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
          link: "/membresias"
        }
      }
    }
  ];

  return (
    <section id="cursos" className="py-16 bg-gray-50">
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
                    <a href={tab.content.cta.link}>{tab.content.cta.text}</a>
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CoursesTabs;
