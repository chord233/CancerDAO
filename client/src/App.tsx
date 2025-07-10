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
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <TooltipProvider> {/* 如果 TooltipProvider 和 Toaster 需要在路由上下文内，可以放在这里 */}
          <Toaster />
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50">
            <Navbar />
            <main className="min-h-screen">
              {/* 将 Switch 替换为 React Router v6 的 Routes */}
              <Routes>
                {/* Route 组件现在使用 element prop，并且传入 JSX 元素 */}
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/solution" element={<Solution />} />
                <Route path="/for-individuals" element={<ForIndividuals />} />
                <Route path="/for-partners" element={<ForPartners />} />
                <Route path="/community" element={<Community />} />
                <Route path="/resources" element={<Resources />} />
                {/* 对于 404 页面，使用 path="*" 捕获所有未匹配的路径 */}
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
