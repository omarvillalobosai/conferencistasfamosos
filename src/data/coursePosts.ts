export type CourseCategory = 'cliente' | 'conferencista';

export interface CoursePost {
  slug: string;
  category: CourseCategory;
  speakerId: string;
  speakerName: string;
  title: string;
  description: string;
  youtubeId: string;
  publishedAt: string;
  topic: string;
}

export const coursePosts: CoursePost[] = [
  {
    slug: 'omar-villalobos-como-ser-conferencista-profesional',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Curso: Cómo Ser Conferencista Profesional by OMV',
    description:
      'Introducción al curso de Omar Villalobos para quienes desean convertirse en conferencistas profesionales de alto impacto.',
    youtubeId: 'et7c7BiZVKQ',
    publishedAt: '2018-01-10',
    topic: 'Fundamentos',
  },
  {
    slug: 'omar-villalobos-7-tipos-de-motivadores',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Cómo Ser el Mejor Conferencista del Mundo: 7 Tipos de Motivadores #002',
    description:
      'Descubre los 7 tipos de motivadores y encuentra el estilo de conferencista que mejor se adapta a tu personalidad.',
    youtubeId: 'Rl1xLJujZFM',
    publishedAt: '2018-01-17',
    topic: 'Estilo personal',
  },
  {
    slug: 'omar-villalobos-como-ser-conferencista-curso-001',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: '¿Cómo Ser Conferencista? Curso Cómo Ser Motivador #001 (Gratis)',
    description:
      'Primera lección gratuita del curso para arrancar tu camino como conferencista y motivador profesional.',
    youtubeId: 'kbgv8-3uha8',
    publishedAt: '2018-01-05',
    topic: 'Fundamentos',
  },
  {
    slug: 'omar-villalobos-5-secretos-para-ser-conferencista-famoso',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: '5 Secretos para Ser Conferencista Famoso',
    description:
      'Omar Villalobos comparte cinco secretos clave para posicionarte como un conferencista reconocido a nivel internacional.',
    youtubeId: 'Ye13rg1l6yU',
    publishedAt: '2018-02-01',
    topic: 'Posicionamiento',
  },
  {
    slug: 'omar-villalobos-como-preparar-una-conferencia-exitosa',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Cómo Preparar una Conferencia Exitosa #003',
    description:
      'Metodología paso a paso para preparar conferencias que conecten con tu audiencia y logren un impacto real.',
    youtubeId: 'o7xR_1Tp_Dc',
    publishedAt: '2018-02-14',
    topic: 'Preparación',
  },
  {
    slug: 'omar-villalobos-7-pasos-conferencia-de-motivacion-perfecta',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: '7 Pasos para Crear una Conferencia de Motivación Perfecta #004',
    description:
      'Live en el que Omar detalla los 7 pasos para diseñar una conferencia motivacional impecable de principio a fin.',
    youtubeId: 'cxeRQqRakdg',
    publishedAt: '2018-03-01',
    topic: 'Estructura',
  },
  {
    slug: 'omar-villalobos-secretos-para-crear-conferencias-exitosas',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Mis Secretos para Crear Conferencias Exitosas',
    description:
      'Los secretos que Omar Villalobos usa para crear conferencias memorables y de alto impacto en cada evento.',
    youtubeId: 'w_M9zCDbYWo',
    publishedAt: '2018-03-15',
    topic: 'Contenido',
  },
  {
    slug: 'omar-villalobos-te-reto-mujer-a-ser-conferencista',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Te Reto Mujer a Ser Conferencista Profesional',
    description:
      'Un mensaje directo para las mujeres que quieren dar el salto y convertirse en conferencistas profesionales.',
    youtubeId: 'ZR5YWhTy3jA',
    publishedAt: '2018-04-01',
    topic: 'Motivación',
  },
  {
    slug: 'omar-villalobos-de-tartamudo-a-conferencista-famoso',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'De Tartamudo a Conferencista Famoso... Tú También Puedes',
    description:
      'La historia inspiradora de cómo superar barreras del habla y convertirse en un conferencista reconocido.',
    youtubeId: 'WPsi2fyBQdk',
    publishedAt: '2018-04-15',
    topic: 'Historia personal',
  },
  {
    slug: 'omar-villalobos-momento-de-motivacion-explosivo',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Cómo Crear un Momento de Motivación Personal Explosivo en Vivo',
    description:
      'Técnicas para construir momentos de alto impacto emocional durante una conferencia en vivo.',
    youtubeId: '03SVEEUINWo',
    publishedAt: '2018-05-01',
    topic: 'Ejecución',
  },
  {
    slug: 'omar-villalobos-movimiento-como-estrategia-de-motivacion',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Movimiento como Estrategia de Motivación Personal',
    description:
      'Cómo usar el lenguaje corporal y el movimiento en el escenario como herramienta de motivación.',
    youtubeId: 'jsH5xxQYPd4',
    publishedAt: '2018-05-15',
    topic: 'Escenario',
  },
  {
    slug: 'omar-villalobos-como-terminar-un-mensaje-de-motivacion',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Cómo Terminar un Mensaje de Motivación Personal',
    description:
      'El cierre de una conferencia es tan importante como su inicio: aprende a rematar con impacto.',
    youtubeId: 'bKzSSivVXeU',
    publishedAt: '2018-06-01',
    topic: 'Cierre',
  },
  {
    slug: 'omar-villalobos-de-que-hablo-cuando-hablo-de-hablar-en-publico',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'De Qué Hablo Cuando Hablo de Hablar en Público',
    description:
      'Reflexión de Omar Villalobos sobre lo que realmente significa dominar el arte de hablar en público.',
    youtubeId: 'vNOi0F2iFj0',
    publishedAt: '2018-06-15',
    topic: 'Filosofía',
  },
  {
    slug: 'omar-villalobos-vivir-de-la-palabra-y-viajar-por-el-mundo',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Cómo Vivir de la Palabra y Viajar por el Mundo Contando Historias',
    description:
      'Convierte tu voz y tus historias en una carrera profesional que te permita viajar por el mundo.',
    youtubeId: 'CfH9FIW8PAM',
    publishedAt: '2018-07-01',
    topic: 'Carrera',
  },
  {
    slug: 'omar-villalobos-como-me-preparo-para-una-conferencia',
    category: 'conferencista',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Hablemos de Cómo Me Preparo para una Conferencia',
    description:
      'Un vistazo detrás de cámaras al ritual y la preparación de Omar Villalobos antes de subir al escenario.',
    youtubeId: 'kbBWnaPKLd8',
    publishedAt: '2018-07-15',
    topic: 'Preparación',
  },
];

export const findCoursePostBySlug = (slug?: string) =>
  coursePosts.find((p) => p.slug === slug);

export const getRelatedCoursePosts = (post: CoursePost, limit = 3) =>
  coursePosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, limit);

export const getCoursePostsByCategory = (category: CourseCategory) =>
  coursePosts.filter((p) => p.category === category);

export const getYoutubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const formatCourseDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
