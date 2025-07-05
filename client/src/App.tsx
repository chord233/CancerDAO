import { Switch, Route } from "wouter";
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

function Router() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50">
        <Navbar />
        <main className="min-h-screen">
          <Switch>
            <Route path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/solution" component={Solution} />
            <Route path="/for-individuals" component={ForIndividuals} />
            <Route path="/for-partners" component={ForPartners} />
            <Route path="/community" component={Community} />
            <Route path="/resources" component={Resources} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
