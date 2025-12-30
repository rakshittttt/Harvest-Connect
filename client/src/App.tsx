import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Dashboard from "@/pages/Dashboard";
import CommunitiesPage from "@/pages/CommunitiesPage";
import ArticlesPage from "@/pages/ArticlesPage";
import HelplinePage from "@/pages/HelplinePage";
import MspsPage from "@/pages/MspsPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/communities" component={CommunitiesPage} />
      <Route path="/laws" component={ArticlesPage} />
      <Route path="/helpline" component={HelplinePage} />
      <Route path="/msps" component={MspsPage} />
      <Route component={NotFound} />
    </Switch>
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
