import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import ServicesDone from "@/pages/ServicesDone";
import Milestones from "@/pages/Milestones";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import CancellationRefund from "@/pages/CancellationRefund";
import ShippingDelivery from "@/pages/ShippingDelivery";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <TooltipProvider>
          <Toaster />
          <Layout>
            <Routes>
              <Route path="/" element={
                <div className="scroll-smooth">
                  <section id="home"><Home /></section>
                  <section id="about"><About /></section>
                  <section id="services"><Services /></section>
                  <section id="products"><Products /></section>
                  <section id="portfolio"><ServicesDone /></section>
                  <section id="milestones"><Milestones /></section>
                  <section id="contact"><Contact /></section>
                </div>
              }/>
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/cancellations" element={<CancellationRefund />} />
              <Route path="/shipping" element={<ShippingDelivery />} />
              <Route path="*" element={<div className="p-4 text-center">404 - Page Not Found</div>} />
            </Routes>
          </Layout>
        </TooltipProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
