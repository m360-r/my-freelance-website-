import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function App() {
  const [themeDark] = useState(true); // default premium dark
  return (
    <div className={themeDark ? "min-h-screen" : "min-h-screen bg-white text-slate-900"}>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
