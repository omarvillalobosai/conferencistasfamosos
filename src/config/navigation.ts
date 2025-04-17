
export interface NavigationItem {
  title: string;
  path: string;
  isExternal?: boolean;
}

export interface SpeakerNavItem {
  name: string;
  slug: string;
}

export const mainNavItems: NavigationItem[] = [
  {
    title: "Quiénes Somos",
    path: "/#quienes-somos",
  },
  {
    title: "Omar Villalobos",
    path: "/#destacado",
  },
  {
    title: "Testimonios",
    path: "/#testimonios",
  },
  {
    title: "Videos",
    path: "/videos",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

export const speakerNavItems: SpeakerNavItem[] = [
  {
    name: "Omar Villalobos",
    slug: "omar-villalobos",
  },
  {
    name: "Yordi Rosado",
    slug: "yordi-rosado",
  },
  {
    name: "Daniel Habif",
    slug: "daniel-habif",
  },
  {
    name: "Gaby Vargas",
    slug: "gaby-vargas",
  },
  {
    name: "Vilma Núñez",
    slug: "vilma-nunez",
  },
];

