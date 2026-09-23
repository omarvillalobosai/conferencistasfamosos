import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';

// vite-react-ssg: prerenderiza cada ruta a HTML en el build y la hidrata en el navegador.
export const createRoot = ViteReactSSG({ routes });

// Ayudante del editor de Lovable (antes era un <script type="module"> en index.html). Solo en desarrollo:
// en producción no hace falta y en el build SSR lo tomaba como módulo de entrada.
if (import.meta.env.DEV && typeof document !== 'undefined') {
  const s = document.createElement('script');
  s.type = 'module';
  s.src = 'https://cdn.gpteng.co/gptengineer.js';
  document.body.appendChild(s);
}
