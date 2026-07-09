export interface BlogPost {
  slug: string;
  speakerId: string; // matches slug in speakersData helpers
  speakerName: string;
  title: string;
  description: string;
  youtubeId: string;
  publishedAt: string; // ISO date
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'omar-villalobos-liderazgo-omvlog-1',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Liderazgo, celebración y propósito | OMVLOG 1',
    description:
      'Omar Villalobos regresa a YouTube con reflexiones sobre liderazgo, celebración y propósito en el primer episodio de su serie de motivación.',
    youtubeId: 'Yp8XKDuyqr8',
    publishedAt: '2016-10-18',
    category: 'Liderazgo',
  },
  {
    slug: 'omar-villalobos-secreto-vivir-feliz-en-pareja',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'El secreto para vivir feliz en pareja | OMVLOG 2',
    description:
      'Desde Bolivia, Omar Villalobos comparte claves de bioenergética, ego y espíritu para construir relaciones de pareja más plenas.',
    youtubeId: 'QSdDdh8K_8E',
    publishedAt: '2016-10-25',
    category: 'Relaciones',
  },
  {
    slug: 'omar-villalobos-ser-mejor-aunque-duela',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Ser mejor aunque duela | OMVLOG 3 desde Guatemala',
    description:
      'Un mensaje directo desde Guatemala sobre el precio del crecimiento personal y por qué vale la pena aunque incomode.',
    youtubeId: 'Ial57qtXuMs',
    publishedAt: '2016-11-04',
    category: 'Desarrollo Personal',
  },
  {
    slug: 'omar-villalobos-una-noche-antes-del-record-guinness',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Una noche antes del Récord Guinness | OMVLOG 4',
    description:
      'Detrás de cámaras en Lima, Perú: la noche previa al abrazo grupal más grande del mundo que llevó a Omar Villalobos al Récord Guinness.',
    youtubeId: 'G4TMiBjaIs8',
    publishedAt: '2016-11-23',
    category: 'Motivación',
  },
  {
    slug: 'omar-villalobos-autoestima-de-rockstar',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Autoestima de Rockstar | OMVLOG 5 desde Los Ángeles',
    description:
      'Omar Villalobos habla desde Los Ángeles sobre cómo construir una autoestima sólida al estilo de una rockstar.',
    youtubeId: 'F9RwmYeBLtE',
    publishedAt: '2017-01-13',
    category: 'Autoestima',
  },
  {
    slug: 'omar-villalobos-entrevista-feria-del-libro',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Entrevista en la Feria del Libro | OMVLOG 6',
    description:
      'Una entrevista sin filtros a Omar Villalobos durante la Feria del Libro: sexualidad, cultura y desarrollo humano.',
    youtubeId: 'Mr70b1-QBHY',
    publishedAt: '2017-02-14',
    category: 'Entrevistas',
  },
  {
    slug: 'omar-villalobos-verdadero-poder-pachuca',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'El verdadero poder | OMVLOG 7 desde Pachuca',
    description:
      'Desde el DIF Hidalgo en Pachuca, Omar Villalobos redefine qué significa realmente tener poder en la vida y en el liderazgo.',
    youtubeId: 'Xm3JszebgtA',
    publishedAt: '2017-03-29',
    category: 'Liderazgo',
  },
  {
    slug: 'omar-villalobos-eterno-viaje-cochabamba',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Eterno viaje a Cochabamba | OMVLOG 8',
    description:
      'Omar Villalobos comparte lecciones de conexión humana y propósito durante uno de sus viajes más entrañables a Bolivia.',
    youtubeId: '5ERIudfUUhc',
    publishedAt: '2017-05-01',
    category: 'Motivación',
  },
  {
    slug: 'omar-villalobos-tecnologia-que-no-sirve',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Tecnología que no sirve | OMVLOG 9',
    description:
      'Una reflexión provocadora sobre cómo la tecnología puede alejarnos de lo esencial cuando la usamos sin intención.',
    youtubeId: 'NqDX53CHXwY',
    publishedAt: '2017-05-18',
    category: 'Reflexión',
  },
  {
    slug: 'omar-villalobos-gente-dentro-de-un-volcan',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Gente que vive dentro del cráter de un volcán | OMVLOG 10',
    description:
      'Desde Ecuador, Omar Villalobos visita a personas que viven dentro del cráter de un volcán y extrae poderosas lecciones de vida.',
    youtubeId: 'yVRIIRNakHQ',
    publishedAt: '2017-10-04',
    category: 'Inspiración',
  },
  {
    slug: 'yordi-rosado-trabajo-mucho-culpable-con-mis-hijos',
    speakerId: 'yordi-rosado',
    speakerName: 'Yordi Rosado',
    title: 'Trabajo mucho y me siento culpable con mis hijos | Yordi Rosado',
    description:
      'Yordi Rosado aborda la culpa de los padres que trabajan mucho y comparte cómo transformar el tiempo con los hijos en presencia real y de calidad.',
    youtubeId: '9moVS_iBBBw',
    publishedAt: '2024-01-01',
    category: 'Familia',
  },
  {
    slug: 'yordi-rosado-te-graduas-como-papa',
    speakerId: 'yordi-rosado',
    speakerName: 'Yordi Rosado',
    title: '¿Te gradúas como Papá? | Yordi Rosado',
    description:
      'Yordi Rosado reflexiona sobre la paternidad como un proceso continuo: nunca te gradúas de ser papá, siempre hay algo nuevo que aprender de tus hijos.',
    youtubeId: 'GCDWY-_LgEs',
    publishedAt: '2024-02-01',
    category: 'Paternidad',
  },
  {
    slug: 'yordi-rosado-cuidar-de-un-hijo-es-un-privilegio',
    speakerId: 'yordi-rosado',
    speakerName: 'Yordi Rosado',
    title: 'Cuidar de un hijo no es una carga, ¡es un privilegio! | Yordi Rosado',
    description:
      'Yordi Rosado invita a cambiar la perspectiva sobre la crianza: cuidar a un hijo no es un peso, es uno de los mayores privilegios que da la vida.',
    youtubeId: 'NhqlkZiRLPI',
    publishedAt: '2024-03-01',
    category: 'Familia',
  },
  {
    slug: 'daniel-habif-empotrado-en-un-sillon',
    speakerId: 'daniel-habif',
    speakerName: 'Daniel Habif',
    title: 'Empotrado en un Sillón | Daniel Habif',
    description:
      'Daniel Habif nos sacude con una reflexión poderosa sobre salir de la comodidad y dejar de vivir empotrados en un sillón para perseguir nuestro propósito.',
    youtubeId: 'seOEOJKLZFw',
    publishedAt: '2018-01-15',
    category: 'Motivación',
  },
  {
    slug: 'daniel-habif-cuando-me-entierren',
    speakerId: 'daniel-habif',
    speakerName: 'Daniel Habif',
    title: 'Cuando Me Entierren | Daniel Habif',
    description:
      'Un mensaje profundo de Daniel Habif sobre el legado, la muerte y cómo vivir hoy para dejar huella cuando ya no estemos.',
    youtubeId: '7QJLun0PUqY',
    publishedAt: '2018-02-10',
    category: 'Inspiración',
  },
  {
    slug: 'daniel-habif-en-el-nombre-del-amor',
    speakerId: 'daniel-habif',
    speakerName: 'Daniel Habif',
    title: 'En el nombre del amor | Daniel Habif',
    description:
      'Daniel Habif comparte una reflexión emotiva sobre el amor como motor transformador de nuestra vida y nuestras relaciones.',
    youtubeId: 'FqrUHzyaPmM',
    publishedAt: '2018-03-05',
    category: 'Relaciones',
  },
  {
    slug: 'daniel-habif-on-the-road-exma',
    speakerId: 'daniel-habif',
    speakerName: 'Daniel Habif',
    title: 'On The Road / EXMA | Daniel Habif',
    description:
      'Daniel Habif nos lleva tras bambalinas de su participación en EXMA, uno de los eventos empresariales más importantes de Latinoamérica.',
    youtubeId: '9FDLXt4d8Ig',
    publishedAt: '2018-04-01',
    category: 'On The Road',
  },
  {
    slug: 'daniel-habif-el-amor-todo-lo-puede-xalapa',
    speakerId: 'daniel-habif',
    speakerName: 'Daniel Habif',
    title: 'El Amor Todo Lo Puede - On The Road / Xalapa | Daniel Habif',
    description:
      'Desde Xalapa, Daniel Habif nos regala un mensaje contundente: el amor tiene el poder de transformar cualquier realidad.',
    youtubeId: 'qfD3al6tgHs',
    publishedAt: '2018-05-01',
    category: 'On The Road',
  },
  {
    slug: 'daniel-habif-on-the-road-republica-dominicana',
    speakerId: 'daniel-habif',
    speakerName: 'Daniel Habif',
    title: 'On The Road / República Dominicana / Premios Soberano | Daniel Habif',
    description:
      'Daniel Habif nos comparte su experiencia en República Dominicana durante los Premios Soberano, un recorrido lleno de inspiración.',
    youtubeId: 'bL_rMZkmVOI',
    publishedAt: '2018-06-01',
    category: 'On The Road',
  },
  {
    slug: 'daniel-habif-on-the-road-miami',
    speakerId: 'daniel-habif',
    speakerName: 'Daniel Habif',
    title: 'On The Road / MIAMI | Daniel Habif',
    description:
      'Daniel Habif desde Miami: un vistazo íntimo a su gira internacional y a los mensajes que están tocando corazones alrededor del mundo.',
    youtubeId: 'Q2BTln2NE4E',
    publishedAt: '2018-07-01',
    category: 'On The Road',
  },
];

export const findPostBySlug = (slug?: string) =>
  blogPosts.find((p) => p.slug === slug);

export const getRelatedPosts = (post: BlogPost, limit = 3) =>
  blogPosts.filter((p) => p.speakerId === post.speakerId && p.slug !== post.slug).slice(0, limit);

export const getYoutubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const formatBlogDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
