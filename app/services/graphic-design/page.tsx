'use client';

import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiAdobepremierepro, SiAdobeaftereffects, SiCanva } from 'react-icons/si';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GraphicDesign = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

const toggleFaq = (index: number) => {
  if (openFaqIndex === index) {
    setOpenFaqIndex(null); // Set to null if the same FAQ is clicked
  } else {
    setOpenFaqIndex(index); // Set to the new index otherwise
  }
};
      
    const stats = [
        { number: '50+', label: 'Graphic Design Projects' },
        { number: '30+', label: 'Satisfied Clients' },
        { number: '5+', label: 'Design Experts' },
    ];

  const features = [
    { 
      title: 'Creative Excellence',
      description: 'Deliver visually stunning designs that communicate your brand message effectively.',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-14 sm:h-14">
          <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM20 34L10 24L13.414 20.586L20 27.172L34.586 12.586L38 16L20 34Z" fill="#7d2fd0"/>
        </svg>
      )
    },
    {
      title: 'Premium Quality',
      description: 'Receive high-quality designs that stand out in the digital landscape.',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-14 sm:h-14">
          <path d="M24 4L30.31 16.76L44 19.48L34 29.24L36.52 43.02L24 36.56L11.48 43.02L14 29.24L4 19.48L17.69 16.76L24 4Z" fill="#7d2fd0"/>
        </svg>
      )
    },
    {
      title: 'Brand-Focused Designs',
      description: 'Create visual identities that align perfectly with your brand values and goals.',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-14 sm:h-14">
          <rect x="4" y="8" width="40" height="28" rx="2" fill="#7d2fd0"/>
          <path d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V14H4V10Z" fill="#2E7D32"/>
          <circle cx="8" cy="11" r="1.5" fill="white"/>
          <circle cx="12" cy="11" r="1.5" fill="white"/>
          <circle cx="16" cy="11" r="1.5" fill="white"/>
          <rect x="8" y="18" width="32" height="2" rx="1" fill="white"/>
          <rect x="8" y="22" width="20" height="2" rx="1" fill="white"/>
          <rect x="8" y="26" width="24" height="2" rx="1" fill="white"/>
          <rect x="8" y="30" width="16" height="2" rx="1" fill="white"/>
        </svg>
      )
    }
  ];

  const services = [
    {
      title: 'Brand Identity',
      description: 'We create comprehensive brand identity packages including logos, color palettes, typography, and brand guidelines that establish a strong and memorable presence.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20">
          <path d="M40 16L12 28L40 40L68 28L40 16Z" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 34V50L40 58L56 50V34" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 28V44" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Print Design',
      description: 'From business cards to brochures, posters to packaging, our print design services ensure your brand makes a lasting impression in physical form.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20">
          <rect x="15" y="20" width="50" height="40" rx="3" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M25 30H55" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
          <path d="M25 40H55" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
          <path d="M25 50H45" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Digital Graphics',
      description: 'Engage your audience with eye-catching social media graphics, web banners, email headers, and digital ads designed for maximum impact online.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20">
          <rect x="10" y="16" width="60" height="48" rx="3" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M10 26H70" stroke="#7d2fd0" strokeWidth="3"/>
          <circle cx="15" cy="21" r="2" fill="#7d2fd0"/>
          <circle cx="22" cy="21" r="2" fill="#7d2fd0"/>
          <circle cx="29" cy="21" r="2" fill="#7d2fd0"/>
          <rect x="20" y="36" width="40" height="20" rx="2" stroke="#7d2fd0" strokeWidth="3"/>
        </svg>
      )
    },
    {
      title: 'Illustration & Infographics',
      description: 'Transform complex information into clear, engaging visuals with our custom illustrations and data-driven infographics.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20">
          <rect x="15" y="15" width="50" height="50" rx="3" stroke="#7d2fd0" strokeWidth="3"/>
          <rect x="25" y="25" width="10" height="30" rx="1" fill="#7d2fd0" fillOpacity="0.3" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="45" y="35" width="10" height="20" rx="1" fill="#7d2fd0" fillOpacity="0.3" stroke="#7d2fd0" strokeWidth="2"/>
          <circle cx="30" cy="20" r="2" fill="#7d2fd0"/>
          <circle cx="50" cy="30" r="2" fill="#7d2fd0"/>
        </svg>
      )
    }
  ];

  const designTools = [
    { name: 'Adobe Photoshop', icon: <SiAdobephotoshop className="text-3xl text-purple-600 sm:text-4xl" /> },
    { name: 'Adobe Illustrator', icon: <SiAdobeillustrator className="text-3xl text-purple-600 sm:text-4xl" /> },
    { name: 'Adobe InDesign', icon: <SiAdobeindesign className="text-3xl text-purple-600 sm:text-4xl" /> },
    { name: 'Adobe Premiere Pro', icon: <SiAdobepremierepro className="text-3xl text-purple-600 sm:text-4xl" /> },
    { name: 'Adobe After Effects', icon: <SiAdobeaftereffects className="text-3xl text-purple-600 sm:text-4xl" /> },
    { name: 'Canva', icon: <SiCanva className="text-3xl text-purple-600 sm:text-4xl" /> }
  ];

  const designProcess = [
    { 
      step: '1. Discovery & Strategy', 
      description: 'We begin by understanding your brand, goals, target audience, and competition to develop a clear design strategy.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <circle cx="25" cy="25" r="15" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M35 35L45 45" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      step: '2. Concept Development', 
      description: 'We explore creative directions and develop initial concepts that align with your brand strategy.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <rect x="15" y="15" width="30" height="30" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M15 25H45" stroke="#7d2fd0" strokeWidth="2"/>
          <circle cx="22" cy="20" r="2" fill="#7d2fd0"/>
          <circle cx="30" cy="20" r="2" fill="#7d2fd0"/>
          <circle cx="38" cy="20" r="2" fill="#7d2fd0"/>
          <path d="M22 35L38 35" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      step: '3. Design Creation', 
      description: 'Our designers craft polished visuals based on approved concepts, focusing on aesthetics and functionality.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <path d="M30 15L45 30L30 45L15 30L30 15Z" stroke="#7d2fd0" strokeWidth="2"/>
          <circle cx="30" cy="30" r="5" fill="#7d2fd0" fillOpacity="0.3" stroke="#7d2fd0" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      step: '4. Revision & Refinement', 
      description: 'We collaborate with you to refine and perfect the designs, incorporating your feedback and making adjustments as needed.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <path d="M15 30C15 21.7157 21.7157 15 30 15C38.2843 15 45 21.7157 45 30C45 38.2843 38.2843 45 30 45C21.7157 45 15 38.2843 15 30Z" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M25 30L30 35L37 26" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      step: '5. Finalization & Delivery', 
      description: 'We prepare and deliver final files in all necessary formats for both digital and print applications.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <rect x="10" y="15" width="25" height="30" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M35 30H50" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M45 25L50 30L45 35" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const graphicDesignFeatures = [
    {
      title: 'Brand Identity Design',
      description: 'Create a distinctive visual identity with our comprehensive brand design services including logo design, color palettes, typography, and brand guidelines.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <circle cx="32" cy="32" r="20" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M26 26L38 38" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
          <path d="M38 26L26 38" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Print Materials',
      description: 'Elevate your brand with professionally designed business cards, brochures, flyers, packaging, and other print materials.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <rect x="12" y="16" width="40" height="32" rx="2" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M12 24h40" stroke="#7d2fd0" strokeWidth="3"/>
          <rect x="20" y="32" width="24" height="4" rx="2" fill="#7d2fd0"/>
          <rect x="20" y="40" width="16" height="2" rx="1" fill="#7d2fd0"/>
        </svg>
      )
    },
    {
      title: 'Digital Graphics',
      description: 'Engage your audience online with eye-catching social media graphics, web banners, email headers, and digital advertisements.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <rect x="8" y="16" width="48" height="32" rx="4" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M8 24H56" stroke="#7d2fd0" strokeWidth="3"/>
          <circle cx="16" cy="20" r="2" fill="#7d2fd0"/>
          <circle cx="24" cy="20" r="2" fill="#7d2fd0"/>
          <circle cx="32" cy="20" r="2" fill="#7d2fd0"/>
          <rect x="16" y="32" width="32" height="8" rx="2" fill="#7d2fd0" fillOpacity="0.3"/>
        </svg>
      )
    },
    {
      title: 'Custom Illustrations',
      description: 'Add a unique visual dimension to your brand with tailor-made illustrations that communicate your message in a distinctive way.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <path d="M12 32C12 20.9543 20.9543 12 32 12C43.0457 12 52 20.9543 52 32C52 43.0457 43.0457 52 32 52C20.9543 52 12 43.0457 12 32Z" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M27 26C27 27.6569 25.6569 29 24 29C22.3431 29 21 27.6569 21 26C21 24.3431 22.3431 23 24 23C25.6569 23 27 24.3431 27 26Z" fill="#7d2fd0"/>
          <path d="M43 26C43 27.6569 41.6569 29 40 29C38.3431 29 37 27.6569 37 26C37 24.3431 38.3431 23 40 23C41.6569 23 43 24.3431 43 26Z" fill="#7d2fd0"/>
          <path d="M24 38C24 38 27 42 32 42C37 42 40 38 40 38" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  const digitalServices = [
    {
      title: "Logo Design",
      description: "Professional, memorable logos that capture your brand essence.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <circle cx="32" cy="32" r="16" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M24 32L40 32" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" />
          <path d="M32 24L32 40" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Branding Materials",
      description: "Comprehensive brand assets to establish your visual identity.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <rect x="16" y="16" width="32" height="32" rx="4" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M16 26H48" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="24" cy="21" r="2" fill="#7d2fd0" />
          <path d="M24 36L40 36" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 42L36 42" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Social Media Graphics",
      description: "Engaging visuals designed for maximum impact across platforms.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <path d="M23 46C14.7157 46 8 39.2843 8 31C8 22.7157 14.7157 16 23 16H41C49.2843 16 56 22.7157 56 31C56 39.2843 49.2843 46 41 46H23Z" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="22" cy="31" r="4" fill="#7d2fd0" />
          <circle cx="32" cy="31" r="4" fill="#7d2fd0" />
          <circle cx="42" cy="31" r="4" fill="#7d2fd0" />
        </svg>
      ),
    },
    {
      title: "Illustrations",
      description: "Custom artwork that visually communicates your brand story.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16">
          <path d="M16 16L32 8L48 16L56 32L48 48L32 56L16 48L8 32L16 16Z" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="32" cy="32" r="8" fill="#7d2fd0" fillOpacity="0.3" stroke="#7d2fd0" strokeWidth="2" />
        </svg>
      ),
    },
  ];
  
    
  const faqs = [
    { 
      question: "What graphic design services do you offer?",
      answer: "We offer a comprehensive range of graphic design services including brand identity design (logos, color palettes, typography), print materials (business cards, brochures, packaging), digital graphics (social media graphics, web banners, email templates), custom illustrations and infographics, motion graphics and animation, and marketing collateral. Our team can handle any design challenge to help your brand make a lasting impression."
    },
    { 
      question: "How does your graphic design process work?",
      answer: "Our design process includes: 1) Discovery & Strategy - understanding your brand and goals, 2) Concept Development - exploring creative directions, 3) Design Creation - crafting polished visuals, 4) Revision & Refinement - incorporating your feedback, and 5) Finalization & Delivery - providing files in all necessary formats. This collaborative approach ensures designs that are both visually stunning and strategically effective."
    },
    { 
      question: "What makes your graphic design services different from others?",
      answer: "What sets us apart is our unique combination of strategic thinking, creative excellence, and technical expertise. We don't just create beautiful designs; we develop visual solutions that align with your business objectives and connect with your target audience. Our team stays at the forefront of design trends while maintaining timeless principles, and we pride ourselves on exceptional communication throughout the process."
    },
    { 
      question: "How much do your graphic design services cost?",
      answer: "Our pricing varies based on the scope, complexity, and timeline of each project. We offer flexible pricing options including project-based quotes, retainer packages for ongoing design needs, and custom packages tailored to your specific requirements. We're committed to providing excellent value and will work with you to find a solution that fits your budget while meeting your design needs."
    },
    { 
      question: "How long does a typical graphic design project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple projects like a social media graphic may take 2-3 days, while comprehensive brand identity packages might require 4-6 weeks. During our initial consultation, we'll discuss your timeline needs and provide a realistic estimate for your specific project. We're committed to meeting deadlines while maintaining the highest quality standards."
    },
    { 
      question: "Do you offer revisions to design concepts?",
      answer: "Yes, revisions are an integral part of our design process. Our standard packages include multiple rounds of revisions to ensure you're completely satisfied with the final result. We value your feedback and work collaboratively to refine designs until they perfectly align with your vision and objectives."
    },
    { 
      question: "What file formats will I receive for my designs?",
      answer: "We provide designs in all formats necessary for your specific needs. For print designs, you'll typically receive high-resolution PDFs, AI, and EPS files. For digital designs, we provide web-optimized PNG, JPG, and SVG files. For branding packages, you'll receive a comprehensive set of files for both print and digital applications. We'll discuss your specific requirements to ensure you receive the exact file formats you need."
    },
    { 
      question: "Can you work with existing brand guidelines?",
      answer: "Absolutely! We're experienced in working within established brand guidelines while bringing fresh creativity to your projects. Whether you have comprehensive guidelines or just a logo and color palette, we'll ensure all new designs maintain brand consistency while meeting your current objectives. We can also help evolve or expand existing guidelines if needed."
    },
    { 
      question: "Do you offer rush services for urgent design projects?",
      answer: "Yes, we understand that sometimes you need designs quickly. We offer rush services for urgent projects, subject to our current schedule and capacity. Rush projects may incur additional fees depending on the timeline and complexity. Contact us with your specific needs, and we'll do our best to accommodate your timeline while maintaining our quality standards."
    }
  ];
    

  const trustedCompanies = [
    { name: 'Redpoint', logo: 'redpoint.png' },
    { name: 'Bluecanvas', logo: 'bluecanvas.png' },
    { name: 'Kaya', logo: 'kaya.png' },
    { name: 'Siteks', logo: 'siteks.png' },
    { name: 'Nexus', logo: 'nexus.png' },
    { name: 'Continuum', logo: 'continuum.png' }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-purple-700 to-indigo-900">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-40 h-40 bg-white rounded-full sm:w-72 sm:h-72 top-10 left-10 blur-3xl"></div>
        <div className="absolute w-48 h-48 bg-purple-400 rounded-full bottom-10 right-10 sm:w-96 sm:h-96 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto sm:px-12 md:px-16">
        <div className="flex flex-col-reverse items-center gap-16 md:flex-row">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            className="text-center md:text-left md:w-1/2"
          >
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Elevate Your Brand with Stunning <span className="text-purple-300">Graphic Design</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl opacity-90">
              We craft compelling visuals that enhance your brand identity and captivate your audience, ensuring your message stands out.
            </p>
            <div className="flex justify-center mt-8 md:justify-start">
              <Link href="/contact" className="px-6 py-3 text-lg font-semibold text-white transition bg-purple-500 shadow-md rounded-xl hover:bg-purple-600">
                Get Started
              </Link>
            </div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl"
          >
            <div className="relative overflow-hidden shadow-lg rounded-xl">
              <Image 
                src="/graphic.jpg" 
                alt="Graphic Design Services" 
                width={700} 
                height={500} 
                className="w-full h-auto transition duration-500 transform hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

            {/* Stats Section */}
            <section className="py-12 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container px-6 mx-auto sm:px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 text-center transition-all bg-white shadow-md rounded-2xl hover:shadow-lg"
              >
                <div className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">{stat.number}</div>
                <div className="mt-2 text-lg text-gray-700 sm:text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-6 mx-auto sm:px-8 md:px-16 lg:px-20">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              Our Design Expertise
            </h2>
            <p className="text-lg text-gray-600 sm:text-xl">
              Delivering exceptional visual solutions that help your brand stand out in today’s competitive market.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 transition-all bg-white shadow-md rounded-2xl hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 bg-indigo-100 rounded-full">
                  {feature.svg}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-white sm:py-16">
        <div className="container px-4 mx-auto sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto mb-8 text-center sm:mb-12">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl md:text-4xl">Our Graphic Design Services</h2>
            <p className="text-base text-gray-600 sm:text-lg">Comprehensive design solutions tailored to your brand's unique needs and objectives.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 sm:mb-6">{service.svg}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools Section */}
      <section className="py-10 sm:py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container px-4 mx-auto sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto mb-8 text-center sm:mb-12">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl md:text-4xl">Professional Design Tools</h2>
            <p className="text-base text-gray-600 sm:text-lg">We use industry-leading software to create exceptional designs for your brand.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {designTools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm sm:p-6">
                <div className="mb-3">{tool.icon}</div>
                <div className="text-sm font-medium text-gray-900 sm:text-base">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 bg-white sm:py-16">
        <div className="container px-4 mx-auto sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto mb-8 text-center sm:mb-12">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl md:text-4xl">Our Design Process</h2>
            <p className="text-base text-gray-600 sm:text-lg">A strategic approach that delivers results. Here's how we bring your vision to life.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {designProcess.map((process, index) => (
              <div key={index} className="flex flex-col items-center p-4 text-center bg-white border border-gray-200 rounded-lg">
                <div className="mb-4">{process.svg}</div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{process.step}</h3>
                <p className="text-sm text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* More Services Section */}
      <section className="py-10 bg-white sm:py-16">
        <div className="container px-4 mx-auto sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto mb-8 text-center sm:mb-12">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl md:text-4xl">Comprehensive Design Solutions</h2>
            <p className="text-base text-gray-600 sm:text-lg">From brand identity to digital assets, we provide all the design services your business needs.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {digitalServices.map((service, index) => (
              <div key={index} className="p-6 transition-all bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
                <div className="mb-4">{service.svg}</div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
      <div className="container px-6 mx-auto sm:px-8 md:px-16 lg:px-20">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Side - Image */}
          <div className="hidden md:block">
            <img
              src="/faqimage.jpg"
              alt="FAQ Illustration"
              className="w-full shadow-lg rounded-2xl"
            />
          </div>

          {/* Right Side - FAQ Content */}
          <div>
            <div className="max-w-3xl mb-10 text-center md:text-left">
              <h2 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 sm:text-xl">
                Find answers to common questions about our graphic design services.
              </p>
            </div>
            <div className="max-w-2xl">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4 overflow-hidden border border-gray-200 shadow-md rounded-2xl">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full p-5 text-left bg-white rounded-lg focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-purple-600 transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaqIndex === index && (
                    <div className="p-5 pt-0 border-t border-gray-200 bg-purple-50">
                      <p className="text-base text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>


      <Footer />
    </div>
  );
};

export default GraphicDesign;