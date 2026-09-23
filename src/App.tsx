import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/shared/FloatingWhatsApp";

const queryClient = new QueryClient();

/**
 * Layout raíz: proveedores globales. Las rutas viven en routes.tsx y se prerenderizan con vite-react-ssg
 * (que ya aporta el router y el HelmetProvider).
 */
const App = () => {
  const { pathname } = useLocation();
  const inHub = pathname.startsWith('/app');
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Outlet />
        {!inHub && <FloatingWhatsApp />}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
