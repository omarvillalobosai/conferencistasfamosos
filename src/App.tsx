
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Videos from "./pages/Videos";
import Agency from "./pages/Agency";
import Cursos from "./pages/Cursos";
import CursosPremium from "./pages/CursosPremium";
import NotFound from "./pages/NotFound";
import SpeakerDetail from "./pages/SpeakerDetail";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import TravelPolicies from "./pages/TravelPolicies";
import ScrollToTop from "./components/ScrollToTop";
import Spa2 from "./pages/Spa2";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/agencia" element={<Agency />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/cursos-premium" element={<CursosPremium />} />
            <Route path="/speaker/:slug" element={<SpeakerDetail />} />
            <Route path="/terminos" element={<Terms />} />
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/politicas-viaje" element={<TravelPolicies />} />
            <Route path="/spa2" element={<Spa2 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
