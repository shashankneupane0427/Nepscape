import React from 'react';


// Types for our services data
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServicesSection: React.FC = () => {
  // Services data array
  const services: Service[] = [
    {
      id: 1,
      title: "Website Development",
      description: "Highly functional & visually appealing website designed to meet your need.",
      icon: <WebsiteIcon />
    },
    {
      id: 2,
      title: "App Development",
      description: "Innovative and user-friendly mobile application designed to engage users.",
      icon: <AppDevIcon />
    },
    {
      id: 3,
      title: "System/Software Development",
      description: "System/software developed according to your business needs.",
      icon: <SoftwareIcon />
    },
    {
      id: 4,
      title: "UI/UX",
      description: "Design eye-catching UI/UX interfaces for effortless user interaction",
      icon: <UiUxIcon />
    },
    {
      id: 5,
      title: "Search Engine Optimization (SEO)",
      description: "Custom SEO solutions for enhanced search engine visibility and growth",
      icon: <SeoIcon />
    },
    {
      id: 6,
      title: "Social Media Marketing (SMM)",
      description: "Build a strong online presence and engage with your targeted audience",
      icon: <SmmIcon />
    },
    {
      id: 7,
      title: "Graphic Design",
      description: "Designs that Speak Your Brand's Narrative and Connect with Your Audience",
      icon: <GraphicDesignIcon />
    },
    {
      id: 8,
      title: "Content Writing",
      description: "Engaging and meaningful content to connect with your audience",
      icon: <ContentWritingIcon />
    }
  ];

  return (
    <div className="w-full mt-20 py-16 px-4 md:px-8 bg-white font-poppins">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-[#443d3d;] mb-2 flex items-center justify-center font-poppins">
          <span className="border-t border-gray-300 font-extrabold w-12 mr-4"></span>
          Our Services
          <span className="border-t border-gray-300 font-extrabold w-12 ml-4"></span>
        </p>
        <h2 className="text-3xl text-[#443d3d;] md:text-4xl font-bold mb-4 font-poppins">
          Exceptional Services For Your 
          <span className="text-[#967bb6] ml-2">
            Business Growth
          </span>
        </h2>
        <p className="text-[#443d3d;] max-w-3xl mx-auto font-poppins">
          Discover our wide range of digital solutions to enhance your online presence.
          <span className="ml-4 inline-flex items-center">
            <span className="h-2 w-2 rounded-full mr-2 bg-[#967bb6]"></span>
            See All
          </span>
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:bg-purple-50 hover: cursor-pointer group font-poppins"
          >
            <div className="w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3 font-poppins">{service.title}</h3>
            <p className="text-gray-600 font-poppins">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// SVG Icons Components using direct purple color values instead of CSS variables
const WebsiteIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:animate-bounce w-20 h-20">
    <rect x="10" y="20" width="80" height="60" rx="4" fill="rgba(139, 92, 246, 0.15)" />
    <rect x="20" y="30" width="60" height="40" rx="2" fill="white" stroke="#967bb6" strokeWidth="2" />
    <rect x="25" y="40" width="35" height="4" rx="1" fill="#967bb6" />
    <rect x="25" y="48" width="25" height="3" rx="1" fill="#D1D5DB" />
    <rect x="25" y="55" width="20" height="3" rx="1" fill="#D1D5DB" />
    <circle cx="72" cy="45" r="8" fill="rgba(139, 92, 246, 0.3)" />
    <path d="M70 80 L55 65 L60 60 L75 75 Z" fill="#967bb6" />
  </svg>
);

const AppDevIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:rotate-6 w-20 h-20">
    <path d="M50 15 C66 15 78 25 78 45 C78 65 66 85 50 85 C34 85 22 65 22 45 C22 25 34 15 50 15Z" fill="rgba(139, 92, 246, 0.15)" />
    <rect x="35" y="25" width="30" height="50" rx="3" stroke="#967bb6" strokeWidth="2" fill="white" />
    <rect x="40" y="30" width="20" height="3" rx="1" fill="#967bb6" />
    <rect x="40" y="37" width="15" height="3" rx="1" fill="#D1D5DB" />
    <rect x="40" y="44" width="12" height="3" rx="1" fill="#D1D5DB" />
    <circle cx="50" cy="65" r="3" stroke="#967bb6" strokeWidth="2" fill="white" />
  </svg>
);

const SoftwareIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:-rotate-6 w-20 h-20">
    <rect x="15" y="20" width="50" height="60" rx="3" fill="white" stroke="#967bb6" strokeWidth="2" />
    <rect x="20" y="25" width="40" height="25" rx="2" fill="rgba(139, 92, 246, 0.15)" />
    <rect x="20" y="55" width="15" height="3" rx="1" fill="#967bb6" />
    <rect x="20" y="62" width="35" height="3" rx="1" fill="#D1D5DB" />
    <rect x="20" y="69" width="25" height="3" rx="1" fill="#D1D5DB" />
    <circle cx="75" cy="40" r="15" fill="rgba(139, 92, 246, 0.3)" className="group-hover:scale-110 origin-center transition-transform duration-300" />
    <rect x="65" y="58" width="5" height="12" fill="#967bb6" className="group-hover:translate-y-1 transition-transform duration-300" />
    <rect x="75" y="53" width="5" height="17" fill="#967bb6" className="group-hover:translate-y-2 transition-transform duration-500" />
    <rect x="85" y="50" width="5" height="20" fill="#967bb6" className="group-hover:translate-y-1 transition-transform duration-700" />
  </svg>
);

const UiUxIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:scale-105 w-20 h-20">
    <rect x="20" y="25" width="35" height="50" rx="3" fill="white" stroke="#967bb6" strokeWidth="2" className="group-hover:translate-x-1 transition-transform duration-300" />
    <rect x="25" y="30" width="25" height="4" rx="1" fill="#967bb6" />
    <rect x="25" y="38" width="20" height="3" rx="1" fill="#D1D5DB" />
    <rect x="25" y="45" width="15" height="3" rx="1" fill="#D1D5DB" />
    <circle cx="30" cy="55" r="3" fill="rgba(139, 92, 246, 0.3)" />
    <circle cx="40" cy="55" r="3" fill="rgba(139, 92, 246, 0.6)" />
    <rect x="45" y="40" width="30" height="45" rx="3" fill="rgba(139, 92, 246, 0.15)" stroke="#967bb6" strokeWidth="2" className="group-hover:translate-x-1 transition-transform duration-500" />
    <rect x="50" y="45" width="20" height="4" rx="1" fill="#967bb6" />
    <rect x="50" y="53" width="15" height="3" rx="1" fill="#D1D5DB" />
    <rect x="50" y="60" width="10" height="3" rx="1" fill="#D1D5DB" />
  </svg>
);

const SeoIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:rotate-12 w-20 h-20">
    <circle cx="50" cy="50" r="30" fill="rgba(139, 92, 246, 0.15)" />
    <path d="M35 35 L65 65" stroke="#967bb6" strokeWidth="2" />
    <path d="M35 65 L65 35" stroke="#967bb6" strokeWidth="2" />
    <circle cx="50" cy="50" r="15" fill="white" stroke="#967bb6" strokeWidth="2" className="group-hover:scale-110 origin-center transition-transform duration-300" />
    <path d="M50 42 L50 58" stroke="#967bb6" strokeWidth="2" className="group-hover:rotate-90 origin-center transition-transform duration-500" />
    <path d="M42 50 L58 50" stroke="#967bb6" strokeWidth="2" />
    <circle cx="70" cy="70" r="5" fill="#967bb6" className="group-hover:scale-125 origin-center transition-transform duration-300" />
    <path d="M70 70 L80 80" stroke="#967bb6" strokeWidth="2" />
  </svg>
);

const SmmIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:-rotate-6 w-20 h-20">
    <rect x="30" y="25" width="40" height="60" rx="5" stroke="#967bb6" strokeWidth="2" fill="white" />
    <rect x="35" y="35" width="30" height="25" rx="2" fill="rgba(139, 92, 246, 0.15)" />
    <path d="M45 45 L55 50 L45 55 Z" fill="#967bb6" className="group-hover:translate-x-1 transition-transform duration-300" />
    <circle cx="50" cy="75" r="3" stroke="#967bb6" strokeWidth="2" fill="white" />
    <path d="M75 40 C85 45 85 55 75 60" stroke="#967bb6" strokeWidth="2" className="group-hover:translate-x-1 transition-transform duration-500" />
    <path d="M80 35 C95 42 95 58 80 65" stroke="#967bb6" strokeWidth="2" className="group-hover:translate-x-2 transition-transform duration-700" />
  </svg>
);

const GraphicDesignIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:scale-105 w-20 h-20">
    <rect x="20" y="20" width="60" height="60" rx="3" fill="rgba(139, 92, 246, 0.15)" />
    <circle cx="35" cy="35" r="10" fill="white" stroke="#967bb6" strokeWidth="2" className="group-hover:scale-110 origin-center transition-transform duration-300" />
    <rect x="50" y="25" width="20" height="20" rx="2" fill="white" stroke="#967bb6" strokeWidth="2" className="group-hover:rotate-12 origin-center transition-transform duration-500" />
    <path d="M25 55 L45 55 L35 75 Z" fill="white" stroke="#967bb6" strokeWidth="2" className="group-hover:translate-y-1 transition-transform duration-300" />
    <rect x="50" y="55" width="20" height="20" rx="2" fill="#967bb6" className="group-hover:-rotate-12 origin-center transition-transform duration-500" />
    <circle cx="75" cy="35" r="5" fill="#967bb6" className="group-hover:scale-125 origin-center transition-transform duration-300" />
  </svg>
);

const ContentWritingIcon: React.FC = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:scale-105 w-20 h-20">
    <rect x="25" y="20" width="50" height="60" rx="3" fill="white" stroke="#967bb6" strokeWidth="2" />
    <rect x="30" y="30" width="40" height="3" rx="1" fill="#967bb6" className="group-hover:translate-x-1 transition-transform duration-300" />
    <rect x="30" y="38" width="30" height="3" rx="1" fill="#D1D5DB" className="group-hover:translate-x-2 transition-transform duration-400" />
    <rect x="30" y="46" width="35" height="3" rx="1" fill="#D1D5DB" className="group-hover:translate-x-1 transition-transform duration-500" />
    <rect x="30" y="54" width="25" height="3" rx="1" fill="#D1D5DB" className="group-hover:translate-x-2 transition-transform duration-600" />
    <rect x="30" y="62" width="30" height="3" rx="1" fill="#D1D5DB" className="group-hover:translate-x-1 transition-transform duration-700" />
    <rect x="30" y="70" width="20" height="3" rx="1" fill="#D1D5DB" className="group-hover:translate-x-2 transition-transform duration-800" />
    <circle cx="75" cy="75" r="10" fill="rgba(139, 92, 246, 0.3)" className="group-hover:scale-110 origin-center transition-transform duration-300" />
  </svg>
);

export default ServicesSection;