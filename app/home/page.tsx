import React from "react";
import ServicesSection from "../../components/home/ServicesSection";
import HeroSection from "@/components/home/HeroSection";

function home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}

export default home;
