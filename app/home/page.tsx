import React from "react";
import Navbar from "../../components/Navbar"
import ServicesSection from '../../components/home/ServicesSection';
import Footer from "../../components/Footer"

function home () {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ServicesSection />
      <Footer />
      
     
    </div>
  )
}

export default home;
