import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import LogoSplash from "@/components/LogoSplash";
import ServicePage from "./pages/ServicePage";

const queryClient = new QueryClient();

const App = () => {
  const [splashDone, setSplashDone] = useState(false);
  return (
    <>
      {!splashDone && <LogoSplash onFinish={() => setSplashDone(true)} />}
      {splashDone && (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
                <Route path="/services/mobile" element={<ServicePage />} />
                <Route path="/services/web" element={<ServicePage />} />
                <Route path="/services/mvp" element={<ServicePage />} />
                <Route path="/services/ai" element={<ServicePage />} />
                <Route path="/services/design" element={<ServicePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
      )}
    </>
);
};

export default App;
