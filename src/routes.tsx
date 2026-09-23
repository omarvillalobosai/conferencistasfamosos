import type { RouteRecord } from 'vite-react-ssg';
import App from './App';
import Index from './pages/Index';
import { speakers } from './data/speakersData';
import { getSpeakerSlug } from './utils/speakerUtils';
import { blogPosts, getCategorySlug } from './data/blogPosts';
import { coursePosts } from './data/coursePosts';

// Cada página se carga por separado en el navegador (lazy) y se prerenderiza a HTML en el build.
const page = (loader: () => Promise<{ default: React.ComponentType }>) => () =>
  loader().then((m) => ({ Component: m.default }));

const categorySlugs = Array.from(new Set(blogPosts.map((p) => getCategorySlug(p.category))));

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: Index },
      { path: 'blog', lazy: page(() => import('./pages/Blog')) },
      {
        path: 'blog/categoria/:categorySlug',
        lazy: page(() => import('./pages/BlogCategory')),
        getStaticPaths: () => categorySlugs.map((s) => `blog/categoria/${s}`),
      },
      {
        path: 'blog/:slug',
        lazy: page(() => import('./pages/BlogPost')),
        getStaticPaths: () => blogPosts.map((p) => `blog/${p.slug}`),
      },
      { path: 'videos', lazy: page(() => import('./pages/Videos')) },
      { path: 'agencia', lazy: page(() => import('./pages/Agency')) },
      { path: 'cursos', lazy: page(() => import('./pages/Cursos')) },
      {
        path: 'cursos/:slug',
        lazy: page(() => import('./pages/CoursePost')),
        getStaticPaths: () => coursePosts.map((c) => `cursos/${c.slug}`),
      },
      { path: 'cursos-premium', lazy: page(() => import('./pages/CursosPremium')) },
      {
        path: 'speaker/:slug',
        lazy: page(() => import('./pages/SpeakerDetail')),
        getStaticPaths: () => speakers.map((s) => `speaker/${getSpeakerSlug(s.name)}`),
      },
      { path: 'terminos', lazy: page(() => import('./pages/Terms')) },
      { path: 'privacidad', lazy: page(() => import('./pages/Privacy')) },
      { path: 'politicas-viaje', lazy: page(() => import('./pages/TravelPolicies')) },
      { path: 'spa2', lazy: page(() => import('./pages/Spa2')) },
      { path: 'management', lazy: page(() => import('./pages/SpeakerManagement')) },
      { path: 'newsletter/unsubscribe', lazy: page(() => import('./pages/NewsletterUnsubscribe')) },
      { path: 'admin/newsletter', lazy: page(() => import('./pages/NewsletterAdmin')) },
      // Hub interno: solo cliente (sesión de Supabase); el HTML prerenderizado es el cascarón de carga.
      { path: 'app', lazy: page(() => import('./app/HubApp')) },
      { path: 'app/*', lazy: page(() => import('./app/HubApp')) },
      // ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
      { path: '*', lazy: page(() => import('./pages/NotFound')) },
    ],
  },
];
