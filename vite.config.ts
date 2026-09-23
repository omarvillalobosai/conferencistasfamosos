/// <reference types="vite-react-ssg" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react-helmet-async", "@tanstack/react-query"],
  },
  // Prerenderizado (vite-react-ssg): una carpeta por ruta (blog/slug/index.html), que el hosting de
  // Lovable sirve en la URL limpia. Con `script: "defer"` la app hidrata después de leer el HTML.
  ssgOptions: {
    script: "defer",
    dirStyle: "nested",
    formatting: "none",
    onPageRendered: (_route: string, html: string) => {
      // La librería inyecta <title> y metas antes de <meta charset>; el charset debe ir primero.
      const charset = /<meta charset="UTF-8"\s*\/?>/i;
      return charset.test(html) ? html.replace(charset, "").replace("<head>", '<head><meta charset="UTF-8">') : html;
    },
  },
  build: {
    rollupOptions: {
      output: {
        // En el build SSR React es externo y no puede ir en manualChunks.
        manualChunks: isSsrBuild
          ? undefined
          : {
              "vendor-react": ["react", "react-dom", "react-router-dom", "react-helmet-async"],
            },
      },
    },
  },
}));
