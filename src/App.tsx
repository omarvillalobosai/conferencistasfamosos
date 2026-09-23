import React, { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/shared/FloatingWhatsApp";

// Cada página se carga solo cuando se visita: la portada deja de arrastrar el blog, los cursos y el hub.
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const BlogCategory = lazy(() => import("./pages/BlogCategory"));
const Videos = lazy(() => import("./pages/Videos"));
const Agency = lazy(() => import("./pages/Agency"));
const Cursos = lazy(() => import("./pages/Cursos"));
const CursosPremium = lazy(() => import("./pages/CursosPremium"));
const CoursePost = lazy(() => import("./pages/CoursePost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SpeakerDetail = lazy(() => import("./pages/SpeakerDetail"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const TravelPolicies = lazy(() => import("./pages/TravelPolicies"));
const Spa2 = lazy(() => import("./pages/Spa2"));
const SpeakerManagement = lazy(() => import("./pages/SpeakerManagement"));
const NewsletterUnsubscribe = lazy(() => import("./pages/NewsletterUnsubscribe"));
const NewsletterAdmin = lazy(() => import("./pages/NewsletterAdmin"));
const HubApp = lazy(() => import("./app/HubApp"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen bg-white" aria-busy="true" />
);

const SiteRoutes = () => {
  const { pathname } = useLocation();
  const inHub = pathname.startsWith('/app');
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/categoria/:categorySlug" element={<BlogCategory />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/agencia" element={<Agency />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/:slug" element={<CoursePost />} />
          <Route path="/cursos-premium" element={<CursosPremium />} />
          <Route path="/speaker/:slug" element={<SpeakerDetail />} />
          <Route path="/terminos" element={<Terms />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/politicas-viaje" element={<TravelPolicies />} />
          <Route path="/spa2" element={<Spa2 />} />
          <Route path="/management" element={<SpeakerManagement />} />
          <Route path="/newsletter/unsubscribe" element={<NewsletterUnsubscribe />} />
          <Route path="/admin/newsletter" element={<NewsletterAdmin />} />
          <Route path="/app/*" element={<HubApp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {!inHub && <FloatingWhatsApp />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SiteRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
