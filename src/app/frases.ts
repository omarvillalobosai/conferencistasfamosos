// Frases de los conferencistas de la casa para la entrada del hub. Tomadas de sus videos
// (src/data/blogPostsEnrichment.ts); una distinta cada día.
export interface Frase { texto: string; autor: string }

export const FRASES: Frase[] = [
  { texto: 'Deja de poner pretextos: o tienes excusas o tienes resultados.', autor: 'Omar Villalobos' },
  { texto: 'Tu futuro no existe y el futuro tú lo puedes inventar hoy.', autor: 'Omar Villalobos' },
  { texto: 'Mi objetivo es despertar la pasión por estar vivos.', autor: 'Omar Villalobos' },
  { texto: 'Nosotros nos debemos a la luz, a esa luz que tenemos por dentro.', autor: 'Omar Villalobos' },
  { texto: 'El primer paso para avanzar es simplemente decidir que no te quedarás donde estás hoy.', autor: 'César Lozano' },
  { texto: 'Cuando cambias la forma de ver tu trabajo, el trabajo que ves cambia de forma.', autor: 'César Lozano' },
  { texto: 'La disciplina de hoy es la libertad que disfrutarás el día de mañana.', autor: 'César Lozano' },
  { texto: 'Vender es ayudar a otros a tomar la decisión que transformará positivamente sus realidades.', autor: 'Vilma Núñez' },
  { texto: 'El liderazgo real se demuestra cuando todo sale mal y aun así decides dar lo mejor de ti.', autor: 'Vilma Núñez' },
  { texto: 'La confianza es el hilo invisible que convierte a un grupo de personas en un equipo imparable.', autor: 'Marisa Lazo' },
  { texto: 'La calidad no es un destino final, sino un compromiso diario con quienes confían en nuestra labor.', autor: 'Marisa Lazo' },
  { texto: 'Recuperar el control de tu atención es el primer paso para recuperar el control de tu vida.', autor: 'Elsa Punset' },
  { texto: 'El factor sorpresa es muy potente en nuestras vidas.', autor: 'Elsa Punset' },
  { texto: 'No vemos la vida como es, sino que la vemos como somos.', autor: 'Gaby Vargas' },
  { texto: 'Lo que nos hace inolvidables no es nuestra ropa, sino la huella emocional que dejamos en los demás.', autor: 'Gaby Vargas' },
  { texto: '20 minutos bien hechos son mucho más valiosos que tres horas mal hechas.', autor: 'Yordi Rosado' },
  { texto: 'Muchas cosas se olvidan, pero jamás se olvidan de cuando estuviste ahí.', autor: 'Yordi Rosado' },
  { texto: 'Si aún te consume un hambre voraz de crecer, explícame qué esperas para ir a devorarte la vida.', autor: 'Daniel Habif' },
  { texto: 'Subir cuesta, pero bajar con dignidad es igual de importante.', autor: 'Daniel Habif' },
];

/** Frase del día: la misma para todo el equipo durante el día, distinta al siguiente. */
export const fraseDelDia = (d = new Date()): Frase => FRASES[Math.floor(d.getTime() / 86_400_000) % FRASES.length];
