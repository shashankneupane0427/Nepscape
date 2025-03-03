import React from "react";
import Navbar from "../../components/Navbar"
import ServicesSection from '../../components/home/ServicesSection';

function home () {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ServicesSection />
      
     
    </div>
  )
}

export default home;
