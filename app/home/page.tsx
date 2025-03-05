import ServicesSection from "../../components/home/ServicesSection";
import ExpertiseSection from "../../components/home/ExpertiseSection";
import HowWeWork from "../../components/home/HowWeWork";
import CompanyStats from "@/components/home/CompanyStats";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FAQ from "../FAQ/page";
import termsandcondition from "../terms/page";
import privacypolicy from "../privacy/page";






function home() {
  return (
    <div className="min-h-screen text-black bg-white">
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <HowWeWork />
      <CompanyStats />
      <Footer />
    </div>
  );
}

export default home;
