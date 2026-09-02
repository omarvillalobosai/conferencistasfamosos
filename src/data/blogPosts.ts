export interface RankingItem {
  position: number;
  speakerId: string;
  reason: string;
}

export interface BlogPost {
  slug: string;
  speakerId: string;
  speakerName: string;
  title: string;
  description: string;
  youtubeId?: string;
  publishedAt: string;
  category: string;
  type?: 'video' | 'ranking';
  coverImage?: string;
  ranking?: RankingItem[];
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
  {
    slug: 'gaby-vargas-inteligencia-del-corazon',
    speakerId: 'gaby-vargas',
    speakerName: 'Gaby Vargas',
    title: '¿De qué trata el curso "La Inteligencia del Corazón"? | Gaby Vargas',
    description:
      'Gaby Vargas nos presenta su curso "La Inteligencia del Corazón", una invitación a conectar con la sabiduría interna para tomar mejores decisiones de vida.',
    youtubeId: 'QTEQrqRtzQ8',
    publishedAt: '2020-01-15',
    category: 'Desarrollo Personal',
  },
  {
    slug: 'gaby-vargas-dignidad-interior',
    speakerId: 'gaby-vargas',
    speakerName: 'Gaby Vargas',
    title: 'Dignidad interior | Gaby Vargas',
    description:
      'Gaby Vargas nos habla de la dignidad interior como base para relacionarnos con nosotros mismos y con los demás desde el respeto y el amor propio.',
    youtubeId: 'Npeq8RHyJ-g',
    publishedAt: '2020-02-10',
    category: 'Autoestima',
  },
  {
    slug: 'gaby-vargas-la-vida-te-ama',
    speakerId: 'gaby-vargas',
    speakerName: 'Gaby Vargas',
    title: 'Date cuenta: la vida te ama | Gaby Vargas',
    description:
      'Una reflexión de Gaby Vargas para reconocer las señales cotidianas que nos muestran que la vida está de nuestro lado y nos ama profundamente.',
    youtubeId: 'tXJK0uWAAgk',
    publishedAt: '2020-03-05',
    category: 'Inspiración',
  },
  {
    slug: 'gaby-vargas-credibilidad-energetica',
    speakerId: 'gaby-vargas',
    speakerName: 'Gaby Vargas',
    title: '¿Credibilidad energética? | Gaby Vargas',
    description:
      'Gaby Vargas explica el concepto de credibilidad energética y cómo la coherencia entre lo que sentimos, decimos y hacemos define la confianza que generamos.',
    youtubeId: 'ybBHJjzlljU',
    publishedAt: '2020-04-01',
    category: 'Comunicación',
  },
  {
    slug: 'gaby-vargas-hay-que-crear-ritos',
    speakerId: 'gaby-vargas',
    speakerName: 'Gaby Vargas',
    title: 'Hay que crear ritos | Gaby Vargas',
    description:
      'Gaby Vargas nos invita a crear ritos personales y familiares que doten de sentido y profundidad a los momentos importantes de nuestra vida.',
    youtubeId: 'ZqFD4zZuASI',
    publishedAt: '2020-05-01',
    category: 'Bienestar',
  },
  {
    slug: 'gaby-vargas-que-es-ser-sexy',
    speakerId: 'gaby-vargas',
    speakerName: 'Gaby Vargas',
    title: '¿Qué es ser sexy? | Gaby Vargas',
    description:
      'Gaby Vargas redefine el concepto de "sexy" desde la seguridad interior, la actitud y la presencia auténtica, más allá de lo físico.',
    youtubeId: 'UJwrNjDlzac',
    publishedAt: '2020-06-01',
    category: 'Autoestima',
  },
  {
    slug: 'gaby-vargas-el-poder-de-la-certeza',
    speakerId: 'gaby-vargas',
    speakerName: 'Gaby Vargas',
    title: 'El poder de la certeza | Gaby Vargas',
    description:
      'Gaby Vargas comparte cómo la certeza interna se convierte en una fuerza que nos permite avanzar con claridad y firmeza en cualquier área de la vida.',
    youtubeId: 'DSTCYY8ZC6Y',
    publishedAt: '2020-07-01',
    category: 'Mentalidad',
  },
  {
    slug: 'vilma-nunez-documente-mi-dia-como-speaker',
    speakerId: 'vilma-nunez',
    speakerName: 'Vilma Núñez',
    title: 'Documenté mi día como speaker y la vida me saboteó | Vilma Núñez',
    description:
      'Vilma Núñez comparte un vlog íntimo detrás de bambalinas de un día como speaker, mostrando los retos reales y los aprendizajes de la vida empresarial.',
    youtubeId: '-nDJeEEAu80',
    publishedAt: '2024-05-01',
    category: 'Emprendimiento',
  },
  {
    slug: 'vilma-nunez-lo-que-nadie-ve-exitos-y-desafios',
    speakerId: 'vilma-nunez',
    speakerName: 'Vilma Núñez',
    title: 'Lo que nadie ve: mi semana de éxitos y desafíos | Vilma Núñez',
    description:
      'Vilma Núñez abre las puertas de su semana como empresaria: los éxitos, los desafíos y las decisiones clave que marcan la diferencia en un negocio.',
    youtubeId: '3ssVoLR5Jig',
    publishedAt: '2024-05-15',
    category: 'Emprendimiento',
  },
  {
    slug: 'vilma-nunez-un-dia-multifacetico-trabajando-desde-casa',
    speakerId: 'vilma-nunez',
    speakerName: 'Vilma Núñez',
    title: 'Un día multifacético trabajando desde casa | Vilma Núñez',
    description:
      'Vilma Núñez muestra cómo balancea múltiples roles trabajando desde casa: estrategia, creación de contenido y liderazgo de equipos remotos.',
    youtubeId: 'fY8N-aErqhQ',
    publishedAt: '2024-06-01',
    category: 'Productividad',
  },
  {
    slug: 'vilma-nunez-10-horas-consultoria-mentalidad-de-dinero',
    speakerId: 'vilma-nunez',
    speakerName: 'Vilma Núñez',
    title: '10 horas de consultoría y mentalidad de dinero | Vilma Núñez',
    description:
      'Vilma Núñez comparte una jornada intensa de consultoría enfocada en mentalidad de dinero y estrategias para escalar negocios digitales.',
    youtubeId: 'Adm5nJDNSf0',
    publishedAt: '2024-06-15',
    category: 'Negocios',
  },
  {
    slug: 'vilma-nunez-un-lunes-consultora-y-speaker',
    speakerId: 'vilma-nunez',
    speakerName: 'Vilma Núñez',
    title: 'Un lunes siendo consultora y speaker | Vilma Núñez',
    description:
      'Vilma Núñez nos lleva por un lunes típico combinando su rol de consultora y speaker internacional, con foco en marketing digital y ventas.',
    youtubeId: 'PPNnwnebVXY',
    publishedAt: '2024-07-01',
    category: 'Emprendimiento',
  },
  {
    slug: 'elsa-punset-los-malos-pensamientos-tus-miedos',
    speakerId: 'elsa-punset',
    speakerName: 'Elsa Punset',
    title: 'Los malos pensamientos: ¿cuáles son tus miedos? | Elsa Punset',
    description:
      'Elsa Punset nos ayuda a identificar los malos pensamientos y los miedos que nos limitan, con herramientas prácticas para gestionarlos.',
    youtubeId: 'VNWFw8eojv8',
    publishedAt: '2021-01-15',
    category: 'Inteligencia Emocional',
  },
  {
    slug: 'elsa-punset-conversaciones-dificiles',
    speakerId: 'elsa-punset',
    speakerName: 'Elsa Punset',
    title: 'Cómo gestionar conversaciones difíciles | Elsa Punset',
    description:
      'Elsa Punset comparte claves prácticas para gestionar conversaciones difíciles con empatía, asertividad y sin dañar la relación.',
    youtubeId: 'cLEt9nIQCGg',
    publishedAt: '2021-02-10',
    category: 'Comunicación',
  },
  {
    slug: 'elsa-punset-estimular-el-cerebro-lama-tulku-lobsang',
    speakerId: 'elsa-punset',
    speakerName: 'Elsa Punset',
    title: 'Estimular el cerebro para sentirnos bien - Lama Tulku Lobsang | Elsa Punset',
    description:
      'Elsa Punset conversa con Lama Tulku Lobsang sobre cómo estimular el cerebro y las prácticas ancestrales que nos ayudan a sentirnos mejor.',
    youtubeId: '_g9mPNCBst0',
    publishedAt: '2021-03-05',
    category: 'Bienestar',
  },
  {
    slug: 'elsa-punset-un-minuto-para-meditar',
    speakerId: 'elsa-punset',
    speakerName: 'Elsa Punset',
    title: 'Un minuto para meditar | Elsa Punset',
    description:
      'Elsa Punset nos propone un ejercicio breve de meditación de un minuto para volver al presente y recuperar la calma en medio del día.',
    youtubeId: 'loEsatFPt-A',
    publishedAt: '2021-04-01',
    category: 'Mindfulness',
  },
  {
    slug: 'elsa-punset-buenas-conversaciones',
    speakerId: 'elsa-punset',
    speakerName: 'Elsa Punset',
    title: 'Pistas para tener buenas conversaciones | Elsa Punset',
    description:
      'Elsa Punset revela las pistas fundamentales para tener buenas conversaciones que fortalezcan nuestros vínculos personales y profesionales.',
    youtubeId: '2XM3v_Mse2c',
    publishedAt: '2021-05-01',
    category: 'Comunicación',
  },
  {
    slug: 'elsa-punset-transformar-la-tristeza',
    speakerId: 'elsa-punset',
    speakerName: 'Elsa Punset',
    title: 'Transformar la tristeza | Elsa Punset',
    description:
      'Elsa Punset nos guía a entender y transformar la tristeza en una emoción aliada que nos conecta con lo que realmente nos importa.',
    youtubeId: 'p0gWXDRk5TU',
    publishedAt: '2021-06-01',
    category: 'Inteligencia Emocional',
  },
  {
    slug: 'elsa-punset-secretos-de-parejas-felices',
    speakerId: 'elsa-punset',
    speakerName: 'Elsa Punset',
    title: 'Dos secretos de las parejas felices | Elsa Punset',
    description:
      'Elsa Punset comparte dos secretos respaldados por la ciencia que distinguen a las parejas felices y cómo aplicarlos en tu relación.',
    youtubeId: 'PBLbDuJQZNQ',
    publishedAt: '2021-07-01',
    category: 'Relaciones',
  },
  {
    slug: 'cesar-lozano-como-dejar-de-procrastinar',
    speakerId: 'cesar-lozano',
    speakerName: 'César Lozano',
    title: 'Cómo dejar de procrastinar | Dr. César Lozano',
    description:
      'El Dr. César Lozano comparte estrategias prácticas para vencer la procrastinación y recuperar el control de tu tiempo y productividad.',
    youtubeId: 'Cvjd543JL1A',
    publishedAt: '2023-01-15',
    category: 'Productividad',
  },
  {
    slug: 'cesar-lozano-sindrome-del-impostor',
    speakerId: 'cesar-lozano',
    speakerName: 'César Lozano',
    title: '¿Padeces del síndrome del impostor? | Dr. César Lozano',
    description:
      'Aprende a identificar el síndrome del impostor y descubre cómo superar la sensación de no merecer tus logros.',
    youtubeId: '_j93OKPhHm0',
    publishedAt: '2023-02-15',
    category: 'Desarrollo Personal',
  },
  {
    slug: 'cesar-lozano-test-para-descubrir-tus-talentos',
    speakerId: 'cesar-lozano',
    speakerName: 'César Lozano',
    title: 'Test para descubrir tus talentos | Dr. César Lozano',
    description:
      'En entrevista con Gilda García, el Dr. César Lozano presenta un test para identificar tus talentos naturales y potenciarlos.',
    youtubeId: '2ISYuP8nQgs',
    publishedAt: '2023-03-15',
    category: 'Desarrollo Personal',
  },
  {
    slug: 'cesar-lozano-5-tips-para-dejar-de-ser-indeciso',
    speakerId: 'cesar-lozano',
    speakerName: 'César Lozano',
    title: '5 Tips para dejar de ser indeciso | Dr. César Lozano',
    description:
      'Cinco consejos claros del Dr. César Lozano para tomar decisiones con seguridad y superar la indecisión.',
    youtubeId: 'ISgjPFot9rU',
    publishedAt: '2023-04-15',
    category: 'Desarrollo Personal',
  },
  {
    slug: 'cesar-lozano-como-hacer-que-te-guste-tu-trabajo',
    speakerId: 'cesar-lozano',
    speakerName: 'César Lozano',
    title: 'Cómo hacer que te guste tu trabajo | Dr. César Lozano',
    description:
      'Entrevista con Gilda García donde el Dr. César Lozano explica cómo cambiar tu perspectiva y disfrutar más tu trabajo.',
    youtubeId: 'MXJaC0128vE',
    publishedAt: '2023-05-15',
    category: 'Vida Laboral',
  },
  {
    slug: 'cesar-lozano-jefe-o-companero-insoportable',
    speakerId: 'cesar-lozano',
    speakerName: 'César Lozano',
    title: 'Cómo tratar con un jefe o compañero insoportable | Dr. César Lozano',
    description:
      'El Dr. César Lozano comparte estrategias para manejar relaciones laborales difíciles y proteger tu bienestar emocional.',
    youtubeId: 'jGdr4KAwEpA',
    publishedAt: '2023-06-15',
    category: 'Vida Laboral',
  },
  {
    slug: 'cesar-lozano-tu-trabajo-te-esta-enfermando',
    speakerId: 'cesar-lozano',
    speakerName: 'César Lozano',
    title: 'Señales de que tu trabajo te está enfermando | Dr. César Lozano',
    description:
      'Entrevista con Jaime Leal sobre las señales físicas y emocionales que indican que tu trabajo está afectando tu salud.',
    youtubeId: 'EYXbMCPh7Gw',
    publishedAt: '2023-07-15',
    category: 'Bienestar',
  },
  {
    slug: 'cesar-lozano-conectar-con-la-energia-del-dinero',
    speakerId: 'cesar-lozano',
    speakerName: 'César Lozano',
    title: 'Aprende a conectar con la energía del dinero | Dr. César Lozano',
    description:
      'Entrevista con Martha Oliveira sobre cómo transformar tu relación con el dinero y atraer abundancia a tu vida.',
    youtubeId: 'zm8t79w3QN0',
    publishedAt: '2023-08-15',
    category: 'Abundancia',
  },
  {
    slug: 'cesar-lozano-3-peores-enemigos-del-exito',
    speakerId: 'cesar-lozano',
    speakerName: 'César Lozano',
    title: 'Los 3 peores enemigos que frenan tu éxito | Dr. César Lozano',
    description:
      'Entrevista con Coral Mujaes que revela los tres bloqueos internos más comunes que impiden alcanzar el éxito.',
    youtubeId: 'AcQ9GB5W3b0',
    publishedAt: '2023-09-15',
    category: 'Éxito',
  },
  {
    slug: 'cesar-lozano-vida-con-abundancia',
    speakerId: 'cesar-lozano',
    speakerName: 'César Lozano',
    title: 'Cómo tener una vida con abundancia | Dr. César Lozano',
    description:
      'El Dr. César Lozano comparte principios prácticos para vivir con abundancia en todas las áreas de tu vida.',
    youtubeId: 'LYHRUfNqieQ',
    publishedAt: '2023-10-15',
    category: 'Abundancia',
  },
  {
    slug: 'marisa-lazo-tour-pastelerias-shark-tank',
    speakerId: 'marisa-lazo',
    speakerName: 'Marisa Lazo',
    title: '¡Conoce más sobre Marisa Lazo! | Tour por Pastelerías Marisa | Shark Tank México',
    description:
      'Recorre con Marisa Lazo el corazón de Pastelerías Marisa y descubre la historia detrás de una de las empresarias más reconocidas de México.',
    youtubeId: 'JN7-mkXBsfQ',
    publishedAt: '2022-05-01',
    category: 'Emprendimiento',
  },
  {
    slug: 'marisa-lazo-shark-tank-equidad-genero',
    speakerId: 'marisa-lazo',
    speakerName: 'Marisa Lazo',
    title: 'Marisa Lazo | Shark Tank, equidad de género y crecer sin inversión',
    description:
      'Marisa Lazo habla sobre su paso por Shark Tank, equidad de género, cómo crecer un negocio sin inversión y aprender a callar opiniones.',
    youtubeId: 'XdNOAcfVlu4',
    publishedAt: '2023-01-15',
    category: 'Emprendimiento',
  },
  {
    slug: 'marisa-lazo-pensar-diferente-ataque',
    speakerId: 'marisa-lazo',
    speakerName: 'Marisa Lazo',
    title: '¿Por qué cada vez que alguien piensa diferente siento que me atacan?',
    description:
      'Marisa Lazo reflexiona sobre cómo manejar las diferencias de opinión sin sentirlas como un ataque personal.',
    youtubeId: 'n5ol-vMT0hk',
    publishedAt: '2024-03-01',
    category: 'Liderazgo',
  },
  {
    slug: 'marisa-lazo-cultivar-confianza-organizaciones',
    speakerId: 'marisa-lazo',
    speakerName: 'Marisa Lazo',
    title: 'Cultivar la confianza construye organizaciones humanas',
    description:
      'Marisa Lazo comparte por qué la confianza es la base para construir organizaciones más humanas y productivas.',
    youtubeId: 'LuZ4m1Zfo4A',
    publishedAt: '2024-06-01',
    category: 'Liderazgo',
  },
  {
    slug: 'marisa-lazo-invertir-mas-alla-del-dinero',
    speakerId: 'marisa-lazo',
    speakerName: 'Marisa Lazo',
    title: 'Lo que nadie te dice sobre invertir (y no hablo solo de dinero)',
    description:
      'Marisa Lazo revela lecciones clave sobre invertir en la vida, más allá del dinero: tiempo, relaciones y crecimiento personal.',
    youtubeId: 'lLgEUxaraPY',
    publishedAt: '2024-09-01',
    category: 'Emprendimiento',
  },
  {
    slug: 'mejores-conferencistas-motivacion-latinoamerica',
    speakerId: 'daniel-habif',
    speakerName: 'Daniel Habif',
    title: 'Los mejores conferencistas de motivación en Latinoamérica',
    description:
      'Un ranking de los speakers de motivación con mayor trayectoria e impacto en Latinoamérica: alcance internacional, contenido propio y capacidad real de transformar audiencias.',
    publishedAt: '2026-09-01',
    category: 'Rankings',
    type: 'ranking',
    coverImage:
      'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//daniel%20habif%20conferencista%20famosos.png',
    ranking: [
      {
        position: 1,
        speakerId: 'daniel-habif',
        reason:
          'De origen cubano y con formación como actor, Daniel Habif construyó una de las comunidades más grandes de habla hispana en torno al desarrollo personal. Es autor de Inquebrantables, una de las obras de desarrollo personal más vendidas en español de los últimos años, y de RUGE. Sus giras "Ascender" han recorrido México, Estados Unidos, Puerto Rico y el resto de Latinoamérica.',
      },
      {
        position: 2,
        speakerId: 'omar-villalobos',
        reason:
          'Reconocido como uno de los tres speakers más influyentes de Latinoamérica en desarrollo humano, liderazgo y ventas, Omar Villalobos acumula más de 1,000 conferencias en 15+ países, un récord Guinness y tres doctorados Honoris Causa. Es autor de más de 30 libros, entre ellos el bestseller Ser Chingón Sin Ir a Harvard.',
      },
      {
        position: 3,
        speakerId: 'cesar-lozano',
        reason:
          'Médico cirujano y conductor, el Dr. César Lozano es la voz detrás de Por el placer de vivir, presente en radio, podcast y televisión. Su estilo cercano y lleno de humor lo ha convertido en uno de los conferencistas más queridos de México en temas de actitud y bienestar emocional.',
      },
    ],
  },
  {
    slug: 'mejores-conferencistas-liderazgo-empresas',
    speakerId: 'ismael-cala',
    speakerName: 'Ismael Cala',
    title: 'Los mejores conferencistas de liderazgo para empresas',
    description:
      'Speakers con trayectoria comprobada en liderazgo organizacional: desde exdirectivos de medios internacionales hasta empresarias que construyeron compañías desde cero.',
    publishedAt: '2026-09-01',
    category: 'Rankings',
    type: 'ranking',
    coverImage:
      'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//ismael-cala-conferencistas%20famosos.png',
    ranking: [
      {
        position: 1,
        speakerId: 'ismael-cala',
        reason:
          'Periodista cubano que condujo durante casi 15 años el programa CALA en CNN en Español, entrevistando a algunas de las figuras más influyentes del mundo. Hoy dirige Ismael Cala Foundation, impulsando programas de educación emocional en Latinoamérica, y combina inteligencia emocional con liderazgo consciente.',
      },
      {
        position: 2,
        speakerId: 'omar-villalobos',
        reason:
          'Con formación en Business Psychology y una maestría en Terapia Gestalt, Omar Villalobos ha asesorado a organizaciones en más de 15 países, personalizando cada conferencia según los retos específicos de liderazgo de la audiencia que lo contrata.',
      },
      {
        position: 3,
        speakerId: 'marisa-lazo',
        reason:
          'Fundadora de Pastelerías Marisa, que construyó desde la cocina de su casa en 1992 hasta más de cien sucursales, sin recurrir jamás a un préstamo bancario. Fue la primera mujer en presidir el consejo del Tecnológico de Monterrey campus Guadalajara y formó parte del jurado de Shark Tank México.',
      },
    ],
  },
  {
    slug: 'mejores-conferencistas-ventas-alto-rendimiento',
    speakerId: 'omar-villalobos',
    speakerName: 'Omar Villalobos',
    title: 'Los mejores conferencistas de ventas y alto rendimiento',
    description:
      'Speakers enfocados en mentalidad de ventas, conversión y alto rendimiento comercial, con resultados medibles detrás de su mensaje.',
    publishedAt: '2026-09-01',
    category: 'Rankings',
    type: 'ranking',
    coverImage:
      'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//a_photo_of_omv%20(14).png',
    ranking: [
      {
        position: 1,
        speakerId: 'omar-villalobos',
        reason:
          'Ventas y mentalidad de éxito son uno de los ejes centrales del trabajo de Omar Villalobos desde hace más de 25 años, combinando psicología aplicada y estrategias de negocio para equipos comerciales en toda Latinoamérica.',
      },
      {
        position: 2,
        speakerId: 'vilma-nunez',
        reason:
          'Con un doctorado en Publicidad y Relaciones Públicas y más de una década construyendo Grupo Convierte Más, Vilma Núñez fue reconocida en 2025 con cuatro premios Emmy regionales por una campaña centrada en liderazgo humano frente a la inteligencia artificial.',
      },
      {
        position: 3,
        speakerId: 'cesar-lozano',
        reason:
          'Además de sus temas de bienestar, el Dr. César Lozano lleva a audiencias comerciales su enfoque sobre la relación con el dinero y la abundancia, ayudando a equipos de ventas a transformar su actitud frente a las metas.',
      },
    ],
  },
  {
    slug: 'mejores-conferencistas-transformacion-personal',
    speakerId: 'daniel-habif',
    speakerName: 'Daniel Habif',
    title: 'Los mejores conferencistas de transformación personal',
    description:
      'Historias reales de superación y reinvención que convierten cada conferencia en una experiencia transformadora para la audiencia.',
    publishedAt: '2026-09-01',
    category: 'Rankings',
    type: 'ranking',
    coverImage:
      'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//daniel%20habif%20conferencista%20famosos.png',
    ranking: [
      {
        position: 1,
        speakerId: 'daniel-habif',
        reason:
          'Autor de Inquebrantables y RUGE, el mensaje de Daniel Habif sobre resiliencia y reinvención nace de su propia trayectoria, desde el trabajo como actor hasta convertirse en una de las voces de desarrollo personal más seguidas en español.',
      },
      {
        position: 2,
        speakerId: 'omar-villalobos',
        reason:
          'Con maestría en Terapia Gestalt, Omar Villalobos combina psicología aplicada con relatos de transformación profunda, abordando autoestima y desarrollo humano en más de 30 libros publicados.',
      },
      {
        position: 3,
        speakerId: 'adriana-macias',
        reason:
          'Abogada mexicana que nació sin brazos, Adriana Macías obtuvo un Récord Guinness en 2017 y recibió el Pase de Oro en Got Talent España. Es autora de Abrazar el éxito y su mensaje invita a cuestionar los propios pretextos frente a la adversidad.',
      },
    ],
  },
];

export const findPostBySlug = (slug?: string) =>
  blogPosts.find((p) => p.slug === slug);

export const getRelatedPosts = (post: BlogPost, limit = 3) =>
  blogPosts.filter((p) => p.speakerId === post.speakerId && p.slug !== post.slug).slice(0, limit);

export const getYoutubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const getPostThumbnail = (post: BlogPost) =>
  post.type === 'ranking' && post.coverImage ? post.coverImage : getYoutubeThumbnail(post.youtubeId || '');

export const formatBlogDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
