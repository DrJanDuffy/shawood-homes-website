import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import Home from "@/pages/home";
import Community from "@/pages/community";
import Neighborhood from "@/pages/neighborhood";
import Lifestyle from "@/pages/lifestyle";
import Gallery from "@/pages/gallery";
import FloorPlans from "@/pages/floor-plans";
import Testimonials from "@/pages/testimonials";
import Homes from "@/pages/homes";
import HomeDetails from "@/pages/home-details";
import MarketReport from "@/pages/market-report";
import Amenities from "@/pages/amenities";
import Schools from "@/pages/schools";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import HomeValue from "@/pages/home-value";
import PropertyAlerts from "@/pages/property-alerts";
import MortgageCalculator from "@/pages/mortgage-calculator";
import MarketPredictions from "@/pages/market-predictions";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/homes" component={Homes} />
      <Route path="/homes/:id" component={HomeDetails} />
      <Route path="/floor-plans" component={FloorPlans} />
      <Route path="/community" component={Community} />
      <Route path="/neighborhood" component={Neighborhood} />
      <Route path="/lifestyle" component={Lifestyle} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/amenities" component={Amenities} />
      <Route path="/schools" component={Schools} />
      <Route path="/market-report" component={MarketReport} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/home-value" component={HomeValue} />
      <Route path="/property-alerts" component={PropertyAlerts} />
      <Route path="/mortgage-calculator" component={MortgageCalculator} />
      <Route path="/market-predictions" component={MarketPredictions} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <ExitIntentPopup />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
