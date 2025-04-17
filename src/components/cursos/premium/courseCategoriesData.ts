
export interface PremiumCourse {
  title: string;
  description: string;
  videoId: string;
}

export interface PremiumCourseCategory {
  id: string;
  title: string;
  playlistId: string;
  courses: PremiumCourse[];
}

export const premiumCourseCategories: PremiumCourseCategory[] = [
  {
    id: 'soy-cliente',
    title: 'Cursos para Clientes',
    playlistId: 'PL_KW_uw2ITSuvKbQg1_J_QmcYXFw4dybJ',
    courses: [
      {
        title: 'Cómo elegir al conferencista ideal',
        description: 'Aprende a seleccionar el conferencista perfecto para tu evento según tus objetivos y audiencia.',
        videoId: 'e-kHJ3J2ZTQ'
      },
      {
        title: 'Tips para organizar un evento de alto impacto',
        description: 'Estrategias probadas para crear eventos que dejen huella en tu audiencia.',
        videoId: 'Rkzv8fJTA4k'
      },
      {
        title: 'Tipos de conferencistas',
        description: 'Conoce los diferentes perfiles de conferencistas y cuándo contratar cada uno.',
        videoId: 'WHPLOFiSHJ0'
      }
    ]
  },
  {
    id: 'soy-conferencista',
    title: 'Cursos para Conferencistas',
    playlistId: 'PL_KW_uw2ITStJ7NfAr3ypfAuGYEzxi_TH',
    courses: [
      {
        title: 'Cómo construir tu marca personal como speaker',
        description: 'Estrategias avanzadas para posicionarte como referente en tu especialidad.',
        videoId: 'xKpLOtvV-G4'
      },
      {
        title: 'El arte de hablar y vender sin parecer vendedor',
        description: 'Técnicas de comunicación persuasiva para conferencistas profesionales.',
        videoId: 'K0pxo-dS9Hc'
      },
      {
        title: 'Masterclass: Storytelling avanzado',
        description: 'Domina el arte de contar historias memorables que transformen a tu audiencia.',
        videoId: 'JGLfyYUKevQ'
      }
    ]
  },
  {
    id: 'quiero-ser-conferencista',
    title: 'Quiero ser Conferencista',
    playlistId: 'PL_KW_uw2ITSsNpz2vbcEXYV16TrwiKGZE',
    courses: [
      {
        title: 'Primeros pasos como conferencista',
        description: 'Guía para iniciarte en el mundo de las conferencias y charlas profesionales.',
        videoId: 'up9InGrSS9o'
      },
      {
        title: 'Cómo superar el miedo escénico',
        description: 'Técnicas prácticas para dominar los nervios y brillar en el escenario.',
        videoId: 'M8Hs_EsGZtE'
      },
      {
        title: 'Estructura básica de una conferencia efectiva',
        description: 'Aprende a organizar tus ideas para crear conferencias de alto impacto.',
        videoId: 'a9YctEARYQs'
      }
    ]
  }
];
