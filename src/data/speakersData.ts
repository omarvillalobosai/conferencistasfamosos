
import { StarIcon, ThumbsUp, Award, TrendingUp, LightbulbIcon, BrainCircuit } from 'lucide-react';

export interface Speaker {
  id: number;
  name: string;
  image: string;
  specialty: string;
  shortBio: string;
  fullBio?: string;
  tags: string[];
  featured: boolean;
  topics?: string[];
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Omar Villalobos',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//a_photo_of_omv%20(14).png',
    specialty: 'Alto Impacto y Transformación Personal',
    shortBio: 'Reconocido como top 3 mejores speakers de Latam, Récord Guinness Oficial, Doctor Honoris Causa',
    fullBio: `Omar Villalobos es un conferencista internacional, autor y capacitador mexicano, considerado uno de los tres speakers más influyentes de Latinoamérica en desarrollo humano, liderazgo y ventas. Nacido en Ciudad Juárez, Chihuahua, en 1976, estudió Business Psychology en la Universidad de Texas en El Paso (UTEP) y cursó una maestría en Terapia Gestalt en Guadalajara, México.\n\nCon más de 25 años de trayectoria, Omar ha impartido más de 1,000 conferencias en más de 15 países, con audiencias en vivo que han llegado hasta un millón de personas en un solo evento. Sus conferencias abordan liderazgo, ventas, autoestima, mentalidad de alto rendimiento y transformación personal, combinando psicología aplicada con estrategias de negocio.\n\nEs autor de más de 30 obras de desarrollo humano, entre ellas el libro bestseller Ser Chingón Sin Ir a Harvard, y ha dirigido y producido 12 documentales. Ha vendido más de 500,000 discos de audio y contenido de desarrollo personal.\n\nEntre sus reconocimientos destaca un récord Guinness (por organizar el abrazo grupal más grande del mundo, Perú, 2012) y tres doctorados Honoris Causa, otorgados en Ecuador, Puerto Rico y México.\n\nOmar Villalobos ofrece conferencias corporativas, seminarios, programas de coaching y contenido a través de su academia digital, personalizando cada conferencia según los retos específicos de la organización o audiencia que lo contrata.`,
    tags: ['Motivación', 'Liderazgo', 'Éxito'],
    featured: true,
    topics: ['Liderazgo y alto rendimiento', 'Ventas y mentalidad de éxito', 'Transformación personal profunda', 'Autoestima y desarrollo humano', 'Mentalidad de campeones']
  },
  {
    id: 2,
    name: 'Yordi Rosado',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//yordi-rosado-conferencista-famoso.png',
    specialty: 'Comunicación y Desarrollo Personal',
    shortBio: 'Reconocido conductor, escritor y conferencista especializado en relaciones personales',
    fullBio: `Yordi Rosado es uno de los conductores, escritores y conferencistas más reconocidos de México, especializado en comunicación familiar, paternidad y relación entre generaciones. Con más de dos décadas de trayectoria frente a las cámaras, se ha convertido en una de las voces más escuchadas de Latinoamérica cuando se trata de entender a los adolescentes y fortalecer los vínculos dentro de la familia.\n\nSu carrera en televisión incluye programas como Netas Divinas y De Noche con Yordi Rosado, además de su propio espacio de entrevistas, La Entrevista con Yordi Rosado, disponible en YouTube y plataformas de audio. A lo largo de los años ha entrevistado a cientos de figuras públicas y expertos, siempre con el mismo interés de fondo: entender mejor a las personas y sus relaciones.\n\nEs autor de varios libros que se convirtieron en fenómenos editoriales en México, entre ellos Quiúbole con... (coescrito junto a Gaby Vargas), pensado para acompañar a adolescentes y sus padres, y Los mejores papás del mundo, cuyo éxito llevó a Netflix a adaptarlo como serie bajo el título El mejor papá del mundo. También es autor de ¡Renuncio!, sobre los miedos y retos de la crianza.\n\nEn sus conferencias, Yordi combina humor, cercanía y años de investigación sobre juventud y familia para ofrecer herramientas prácticas a padres, educadores y organizaciones que buscan mejorar la comunicación entre generaciones. Cada presentación se adapta al perfil de la audiencia, ya sea un evento corporativo, educativo o familiar.`,
    tags: ['Comunicación', 'Juventud', 'Relaciones'],
    featured: false,
    topics: ['Comunicación entre padres e hijos', 'Crianza consciente y sin manual', 'Adolescencia y nuevas generaciones', 'Familia en la era digital']
  },
  {
    id: 3,
    name: 'Daniel Habif',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//daniel%20habif%20conferencista%20famosos.png',
    specialty: 'Mentalidad y Superación',
    shortBio: 'Escritor, conferencista y creador de contenido motivacional con millones de seguidores',
    fullBio: `Daniel Habif es uno de los conferencistas y escritores motivacionales de mayor alcance en el mundo de habla hispana, con una enorme comunidad que lo sigue en redes sociales en decenas de países. De origen cubano, antes de dedicarse a la palabra pública trabajó como actor, un oficio que hoy se refleja en la fuerza escénica de sus presentaciones.\n\nEs autor de Inquebrantables, su libro más conocido y una de las obras de desarrollo personal más vendidas en español en los últimos años, así como de RUGE, en el que invita a sus lectores a encontrar y defender su voz interior. Sus textos abordan la resiliencia, la reinvención y la capacidad humana de levantarse después de la adversidad.\n\nHabif ha llevado sus conferencias a escenarios en toda América Latina, Estados Unidos y Puerto Rico, incluyendo giras de varias ciudades como "Ascender". Su estilo directo y emocional lo ha convertido en una referencia obligada dentro del circuito de conferencias motivacionales en español, con presentaciones que combinan storytelling personal, contenido editorial y un fuerte componente inspiracional.\n\nEn el ámbito corporativo, sus conferencias están orientadas a equipos y líderes que atraviesan momentos de cambio, crisis o reinvención, ofreciendo un mensaje centrado en la fortaleza interior y la capacidad de transformar la adversidad en propósito.`,
    tags: ['Inspiración', 'Mentalidad', 'Superación'],
    featured: false,
    topics: ['Resiliencia y superación de la adversidad', 'Transformación personal profunda', 'Encontrar la voz interior', 'Reinvención y propósito de vida']
  },
  {
    id: 4,
    name: 'Odin Dupeyron',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//odin%20dupeyron%20conferencistas%20famosos.svg',
    specialty: 'Creatividad y Desarrollo Humano',
    shortBio: 'Actor, director y conferencista especializado en creatividad y crecimiento personal',
    fullBio: `Odin Dupeyron es actor, director de teatro y conferencista mexicano, conocido principalmente por Un Buda, la pieza escénica y el libro que se convirtieron en su sello personal. A través de su productora, Grupo Odin Dupeyron, ha desarrollado un formato propio que combina teatro, storytelling y desarrollo personal.\n\nAntes de dedicarse a la conferencia y al monólogo escénico, construyó una carrera como actor y director en cine, televisión y teatro mexicano. Esa formación escénica es justo lo que distingue su forma de comunicar: en lugar de una charla convencional, sus presentaciones son experiencias narrativas que buscan mover emocionalmente a la audiencia.\n\nUn Buda, su obra más reconocida, aborda el bienestar personal y la aceptación de uno mismo como punto de partida para cualquier cambio genuino, una idea que también ha compartido en plataformas como Aprendemos Juntos de BBVA, bajo el título "El éxito empieza por estar bien contigo mismo".\n\nSus presentaciones corporativas retoman ese mismo enfoque narrativo para hablar de bienestar, autenticidad y salud emocional dentro de las organizaciones, ofreciendo una experiencia distinta a la conferencia tradicional, pensada para dejar una huella memorable en la audiencia.`,
    tags: ['Creatividad', 'Teatro', 'Desarrollo'],
    featured: false,
    topics: ['Autenticidad y aceptación personal', 'Bienestar emocional desde el arte', 'Vivir en paz contigo mismo', 'Storytelling y transformación personal']
  },
  {
    id: 5,
    name: 'César Lozano',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//cesar%20lozano%20conferencista.png',
    specialty: 'Actitud y Calidad de Vida',
    shortBio: 'Médico, conductor y conferencista experto en bienestar emocional y calidad de vida',
    fullBio: `El Dr. César Lozano es médico cirujano egresado de la Universidad Autónoma de Nuevo León, conductor y uno de los conferencistas más queridos de México en temas de actitud, bienestar emocional y calidad de vida. Combina su formación médica con un estilo cercano y lleno de humor que lo distingue dentro del circuito de speakers en español.\n\nEs la voz detrás de Por el placer de vivir, su marca personal presente en radio, podcast y televisión, así como autor de varios libros, entre ellos Por el placer de vivir y El lado fácil de la gente difícil, en el que ofrece herramientas para manejar relaciones complicadas sin perder la salud emocional.\n\nA lo largo de su carrera, el Dr. Lozano ha llevado su mensaje a cientos de escenarios en México, Estados Unidos y toda Latinoamérica, ayudando a miles de personas a encontrarle sentido y disfrute a la vida cotidiana, incluso en medio de la adversidad.\n\nSus conferencias corporativas están pensadas para equipos que buscan mejorar su clima laboral, manejar mejor el estrés y las relaciones interpersonales, y recuperar el sentido del humor como herramienta de bienestar dentro y fuera del trabajo.`,
    tags: ['Actitud', 'Bienestar', 'Felicidad'],
    featured: false,
    topics: ['El lado fácil de la gente difícil', 'Actitud positiva y calidad de vida', 'Salud emocional con sentido del humor', 'El placer de vivir']
  },
  {
    id: 6,
    name: 'Ismael Cala',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//ismael-cala-conferencistas%20famosos.png',
    specialty: 'Liderazgo y Mindfulness',
    shortBio: 'Periodista, autor y conferencista especializado en mindfulness y liderazgo consciente',
    fullBio: `Ismael Cala es periodista, autor y conferencista cubano, reconocido internacionalmente por haber conducido durante casi 15 años el programa CALA en CNN en Español, donde entrevistó a algunas de las figuras más influyentes del mundo. Hoy dedica su carrera a la conferencia, la escritura y el trabajo social a través de su fundación.\n\nEs autor de libros como La vida es una piñata, CALA Contigo: El poder de escuchar y Un buen hijo de p..., en los que aborda la inteligencia emocional, el liderazgo consciente y la construcción del propio destino. A través de su fundación, Ismael Cala Foundation, impulsa programas de educación emocional para niños en distintos países de Latinoamérica.\n\nSu transición del periodismo a la conferencia le permitió profundizar en temas como el mindfulness, el liderazgo con propósito y el poder de la escucha activa, convirtiéndose en una referencia en el desarrollo de habilidades blandas para líderes y organizaciones.\n\nEn sus conferencias corporativas, Cala combina su experiencia como entrevistador de líderes mundiales con herramientas de inteligencia emocional, ayudando a equipos y directivos a liderar con mayor consciencia, empatía y propósito.`,
    tags: ['Mindfulness', 'Liderazgo', 'Bienestar'],
    featured: false,
    topics: ['Inteligencia emocional para liderar', 'Mindfulness y liderazgo consciente', 'El poder de la escucha activa', 'Propósito y reinvención personal']
  },
  {
    id: 7,
    name: 'Carlos Páez',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//carlos-paez-conferencista-famosos.png',
    specialty: 'Resiliencia y Supervivencia',
    shortBio: 'Sobreviviente de la Tragedia de los Andes y conferencista sobre resiliencia extrema',
    fullBio: `Carlos Páez, conocido como "Carlitos" Páez, es uno de los sobrevivientes de la tragedia de los Andes de 1972, cuando el vuelo 571 de la Fuerza Aérea Uruguaya se estrelló en la cordillera con un equipo de rugby a bordo. Junto a otros sobrevivientes, resistió 72 días en condiciones extremas antes de ser rescatado, una historia llevada al cine en Alive y, más recientemente, en La sociedad de la nieve, película en la que Carlos tuvo la oportunidad de interpretar a su propio padre, el reconocido artista uruguayo Carlos Páez Vilaró.\n\nEs autor del libro Después del día diez, en el que narra su experiencia y las lecciones de vida que dejó aquella tragedia. Desde entonces, ha dedicado buena parte de su carrera a compartir, en escenarios de todo el mundo, lo que la experiencia le enseñó sobre el trabajo en equipo, la toma de decisiones bajo presión y la fuerza del espíritu humano.\n\nCarlos participa regularmente en foros de liderazgo y encuentros corporativos internacionales, donde combina el relato de su propia historia con reflexiones aplicables al mundo empresarial: la importancia de la humildad, la cooperación y la esperanza incluso en las circunstancias más adversas.\n\nSus conferencias son una experiencia profundamente humana, pensada para equipos y líderes que buscan fortalecer la cohesión, la resiliencia organizacional y la capacidad de sostenerse unidos frente a la adversidad.`,
    tags: ['Resiliencia', 'Supervivencia', 'Trabajo en equipo'],
    featured: false,
    topics: ['Resiliencia extrema y trabajo en equipo', 'Liderazgo con humildad', 'Toma de decisiones bajo presión', 'Superación desde la tragedia']
  },
  {
    id: 8,
    name: 'Victor Kuppers',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//Victor-Kuppers-conferencistas-famosos.png',
    specialty: 'Entusiasmo y Actitud Positiva',
    shortBio: 'Docente, conferenciante y formador especializado en valores, actitud y entusiasmo',
    fullBio: `Víctor Küppers es conferenciante, profesor y divulgador español especializado en actitud, entusiasmo y psicología positiva aplicada al mundo laboral y personal. Colaborador de ESADE, una de las escuelas de negocios más reconocidas de España, ha dedicado su carrera a estudiar y comunicar cómo la actitud transforma el valor real de las personas y los equipos.\n\nEs autor de libros como El efecto actitud y Vivir la vida con sentido, en los que desarrolla su fórmula más conocida: el valor de una persona equivale a sus conocimientos y habilidades, multiplicados por su actitud. Esta idea, que ha compartido en escenarios de toda Iberoamérica y en plataformas como Aprendemos Juntos de BBVA, se ha convertido en una de las más citadas dentro del mundo del desarrollo humano y organizacional.\n\nSu estilo cercano, divertido y profundamente humano lo ha convertido en uno de los conferenciantes más solicitados en español, capaz de hacer reflexionar a audiencias masivas sobre temas tan cotidianos como la actitud frente a la vida y el trabajo.\n\nEn el ámbito corporativo, sus conferencias buscan que los equipos entiendan el impacto real de la actitud en los resultados, el clima laboral y la calidad humana de una organización, dejando un mensaje memorable y fácil de aplicar en el día a día.`,
    tags: ['Entusiasmo', 'Valores', 'Actitud'],
    featured: false,
    topics: ['El valor de la actitud', 'Vales lo que vale tu calidad humana', 'Gestión emocional en equipos', 'Vivir con pasión y sentido']
  },
  {
    id: 9,
    name: 'Adriana Macías',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//adriana-macias-conferenicstas-famosos.png',
    specialty: 'Superación y Motivación',
    shortBio: 'Abogada, escritora y conferencista, experta en superación personal y resiliencia',
    fullBio: `Adriana Macías es abogada, escritora y conferencista mexicana que nació sin brazos, una condición que, lejos de limitarla, se convirtió en el punto de partida de una carrera dedicada a inspirar a otros a superar sus propias barreras. Es licenciada en Derecho y ha construido una trayectoria profesional que combina su formación jurídica con la conferencia y la escritura.\n\nEs autora del libro Abrazar el éxito, en el que narra su historia de vida y las lecciones que ha aprendido sobre la resiliencia y la actitud frente a la adversidad. En 2017 obtuvo un Récord Guinness al lograr encender el mayor número de velas de cumpleaños usando los pies en un minuto, una hazaña que refleja su filosofía de vida: no hay límite que no se pueda replantear.\n\nSu historia también la llevó a los escenarios de Got Talent España, donde recibió el Pase de Oro del jurado, y a impartir conferencias como "Éxito sin pretextos" en instituciones como el Tecnológico de Monterrey, además de presentarse en foros corporativos y educativos en distintos países de Latinoamérica.\n\nEn sus conferencias, Adriana invita a las audiencias a cuestionar sus propios pretextos y a enfocarse en lo que sí tienen, en lugar de en lo que les falta, un mensaje especialmente poderoso para organizaciones que buscan fortalecer la resiliencia y la actitud de sus equipos.`,
    tags: ['Superación', 'Resiliencia', 'Inclusión'],
    featured: false,
    topics: ['Éxito sin pretextos', 'Superación de la adversidad', 'Romper barreras y límites mentales', 'Actitud ante la vida']
  },
  {
    id: 10,
    name: 'Gaby Vargas',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//gaby-varfas-conferencista-famosa.png',
    specialty: 'Imagen y Desarrollo Personal',
    shortBio: 'Escritora, consultora de imagen y conferencista especializada en comportamiento humano',
    fullBio: `Gaby Vargas es escritora, conferencista y consultora mexicana especializada en imagen, comunicación y desarrollo personal. Reconocida como una de las pioneras de la consultoría de imagen en México, ha dedicado más de tres décadas a ayudar a las personas a comunicar mejor quiénes son, tanto en lo personal como en lo profesional.\n\nEs autora de varios libros de gran éxito en México, entre ellos Quiúbole con... para mujeres, coescrito junto a Yordi Rosado, y Yo decido, en el que invita a sus lectoras a tomar el control de sus propias decisiones de vida. Sus libros han acompañado a distintas generaciones de lectores en temas de autoestima, comunicación y desarrollo personal.\n\nA lo largo de su carrera ha sido invitada frecuente en medios de comunicación mexicanos y ha participado en foros como la Feria Internacional del Libro de Guadalajara, consolidándose como una de las voces más respetadas en temas de imagen y comportamiento humano en el país.\n\nSus conferencias combinan su experiencia como consultora de imagen con herramientas prácticas de comunicación y autoestima, ideales para audiencias interesadas en fortalecer su marca personal y su forma de relacionarse con los demás.`,
    tags: ['Imagen', 'Comunicación', 'Autoestima'],
    featured: false,
    topics: ['Imagen personal y comunicación', 'Autoestima y desarrollo personal', 'Toma de decisiones y vida plena', 'Comunicación efectiva para la vida moderna']
  },
  {
    id: 11,
    name: 'Elsa Punset',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//ElsaPunset_conferencista.png',
    specialty: 'Inteligencia Emocional',
    shortBio: 'Escritora y divulgadora especializada en inteligencia emocional y educación positiva',
    fullBio: `Elsa Punset es escritora, divulgadora y conferencista española especializada en inteligencia emocional y educación emocional. Con una formación que incluye estudios de Filosofía, Humanidades en Oxford, Periodismo y Educación, ha dedicado su carrera a acercar la inteligencia emocional al público general, a las familias y a las escuelas.\n\nEs autora de varios libros de gran éxito, entre ellos Una mochila para el universo, que ha vendido más de 150,000 ejemplares y ha sido traducido a más de 15 idiomas, además de Inocencia radical, Brújula para navegantes emocionales y, más recientemente, Alas para volar. También es creadora de Los Atrevidos, una colección de libros infantiles centrada en la educación emocional de los niños.\n\nHa sido colaboradora habitual en televisión española, con espacios como "La Mirada de Elsa" dentro del programa Redes de TVE y participaciones en El Hormiguero, además de dirigir el Laboratorio de Aprendizaje Social y Emocional, donde desarrolla talleres de educación emocional para adultos, familias y centros educativos.\n\nEn sus conferencias, Elsa ofrece herramientas concretas para gestionar las emociones en un mundo cada vez más acelerado, tanto a nivel personal como organizacional, con un enfoque que combina rigor divulgativo y cercanía.`,
    tags: ['Emociones', 'Educación', 'Bienestar'],
    featured: false,
    topics: ['Inteligencia emocional aplicada', 'Educación emocional en familia y escuela', 'Gestión de la ansiedad y el estrés', 'Bienestar y crecimiento personal']
  },
  {
    id: 12,
    name: 'Marisa Lazo',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//marisa-lazo-conferencistas-famosos.png',
    specialty: 'Emprendimiento y Liderazgo',
    shortBio: 'Empresaria, fundadora de Pastelerías Marisa y conferencista sobre emprendimiento femenino',
    fullBio: `Marisa Lazo es empresaria mexicana, fundadora de Pastelerías Marisa, una de las historias de emprendimiento femenino más admiradas de México. Originaria de Guadalajara, comenzó el negocio desde la cocina de su casa en 1992, con un solo pedido de pastel, hasta convertirlo en una empresa con más de cien sucursales y marcas como Tía Lola y Dolce Natura.\n\nEs autora del libro La ambición también es dulce, en el que comparte su historia y las lecciones de autenticidad, generosidad e intuición que la llevaron a construir su empresa sin recurrir jamás a un préstamo bancario. Su historia la ha convertido en referente del emprendimiento familiar y femenino en México.\n\nMarisa ha sido reconocida como Emprendedora del Año por EY, ha recibido el premio a la Trayectoria Empresarial de ENDEAVOR, y fue la primera mujer en presidir el consejo del Tecnológico de Monterrey campus Guadalajara. También formó parte del jurado de inversionistas de Shark Tank México, donde apoyó a nuevos emprendedores desde su experiencia como empresaria.\n\nEn sus conferencias, Marisa comparte de forma cercana y auténtica las lecciones de liderazgo, resiliencia y visión de negocio que aprendió construyendo una empresa familiar desde cero, un mensaje especialmente valioso para audiencias interesadas en emprendimiento, liderazgo femenino y crecimiento empresarial.`,
    tags: ['Emprendimiento', 'Negocios', 'Liderazgo'],
    featured: false,
    topics: ['Emprendimiento femenino', 'Liderazgo en negocios familiares', 'Escalar un negocio sin perder la esencia', 'Visión e innovación empresarial']
  },
  {
    id: 13,
    name: 'Vilma Núñez',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//vilma-nunez-conferencista-famosos.png',
    specialty: 'Marketing Digital',
    shortBio: 'Consultora, conferencista y experta en marketing digital y estrategias de contenidos',
    fullBio: `Vilma Núñez es empresaria y conferencista dominicana especializada en marketing digital, con una trayectoria que combina formación académica de alto nivel —incluyendo un doctorado en Publicidad y Relaciones Públicas— con más de una década de experiencia construyendo su propia empresa de marketing digital.\n\nEs fundadora de Grupo Convierte Más, un grupo empresarial que incluye una agencia de marketing digital y una academia de formación online. Su blog, vilmanunez.com, se convirtió en una referencia del marketing en español desde su lanzamiento en 2012, ganando el Premio Bitácoras al mejor blog entre más de 20,000 participantes.\n\nEs autora de La Brújula de los Negocios Digitales y coautora de Tres Damas con Marca, y en 2025 su trabajo fue reconocido con cuatro Premios Emmy regionales por una campaña publicitaria centrada en el liderazgo humano frente a la inteligencia artificial, un tema que se ha convertido en parte central de su discurso más reciente.\n\nEn sus conferencias corporativas, Vilma combina su experiencia como estratega digital con una mirada actual sobre cómo las marcas y los profesionales pueden diferenciarse en la era de la inteligencia artificial, ofreciendo herramientas prácticas de marketing, contenido y liderazgo digital.`,
    tags: ['Marketing', 'Digital', 'Redes Sociales'],
    featured: false,
    topics: ['Marketing digital y estrategias de conversión', 'Liderazgo humano en la era de la IA', 'Contenido digital que genera ventas', 'Emprendimiento digital']
  },
  {
    id: 14,
    name: 'Claudia Lizaldi',
    image: 'https://ythqjhiyavgpghmoreiz.supabase.co/storage/v1/object/public/confamosos//claudia-lizaldi-conferencistas-famosos.png',
    specialty: 'Bienestar Integral y Mindfulness',
    shortBio: 'Conductora, escritora y conferencista enfocada en bienestar, meditación y vida consciente',
    fullBio: `Claudia Lizaldi es conductora, actriz y conferencista mexicana con más de dos décadas de trayectoria en la televisión, actualmente al frente de MasterChef Celebrity México, uno de los programas más vistos de TV Azteca. Su carrera incluye también espacios en Once TV, Televisa y diversas producciones de entretenimiento.\n\nEs coautora de los libros La decisión es tu vida, tú eliges, Puro corazón y Un abrazo para mamá, en los que aborda temas de toma de decisiones, maternidad y bienestar personal. En 2012 fundó Mamá Natural, un portal enfocado en crianza natural y bienestar que celebró más de una década acompañando a madres mexicanas, incluyendo la campaña "Ámate Completa".\n\nA lo largo de su carrera, Claudia ha combinado su faceta como conductora con una genuina vocación de acompañar a otras mujeres en temas de bienestar, maternidad consciente y equilibrio entre la vida personal y profesional, siempre desde la cercanía y la autenticidad que la caracterizan frente a cámaras.\n\nEn sus conferencias, Claudia comparte su experiencia como mujer pública, madre y comunicadora para hablar de equilibrio, toma de decisiones y bienestar integral, con un mensaje cercano especialmente valorado por audiencias femeninas y organizaciones interesadas en bienestar y balance de vida.`,
    tags: ['Bienestar', 'Maternidad', 'Desarrollo Personal'],
    featured: false,
    topics: ['Balance entre carrera y vida personal', 'Bienestar y maternidad consciente', 'Toma de decisiones y reinvención', 'Alegría y propósito personal']
  }
];
