import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Dashboard from "@/pages/Dashboard";
import Classes from "@/pages/Classes";
import Teachers from "@/pages/Teachers";
import Announcements from "@/pages/Announcements";
import AIAssistant from "@/pages/AIAssistant";
import PathwayRecommendation from "@/pages/PathwayRecommendation";
import ChatAssistant from "@/pages/ChatAssistant";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/pathway-recommendation" element={<PathwayRecommendation />} />
        <Route path="/chat-assistant" element={<ChatAssistant />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
