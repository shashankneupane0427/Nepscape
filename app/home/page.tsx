import React from "react";
import ServicesSection from '../../components/home/ServicesSection';
import ExpertiseSection from '../../components/home/ExpertiseSection';
import HowWeWork from '../../components/home/HowWeWork';
import CompanyStats from "@/components/home/CompanyStats";


function home () {
  return (
    <div className="min-h-screen">
      <ServicesSection />
      <ExpertiseSection />
      <HowWeWork />
      <CompanyStats />      
     
    </div>
  )
}

export default home;
