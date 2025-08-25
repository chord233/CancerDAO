import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/language-context";
import Homepage from "@/pages/homepage";
import About from "@/pages/about";
import Solution from "@/pages/solution";
import ForIndividuals from "@/pages/for-individuals";
import ForPartners from "@/pages/for-partners";
import Community from "@/pages/community";
import Resources from "@/pages/resources";
import NotFound from "@/pages/not-found";
import { ProfilePage } from "@/pages/profile";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// 滚动到顶部的组件
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50">
            <Navbar />
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/solution" element={<Solution />} />
                <Route path="/for-individuals" element={<ForIndividuals />} />
                <Route path="/for-partners" element={<ForPartners />} />
                <Route path="/community" element={<Community />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
