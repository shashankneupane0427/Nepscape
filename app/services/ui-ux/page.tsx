'use client';

import { SiAdobexd, SiFigma, SiSketch, SiInvision, SiLaravel, SiFramer } from 'react-icons/si';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const UiUxDesign = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
    const toggleFaq = (index: number) => {
      if (openFaqIndex === index) {
        setOpenFaqIndex(null);
      } else {
        setOpenFaqIndex(index);
      }
    };

    const stats = [
        { number: '200+', label: 'UI/UX Projects' },
        { number: '350+', label: 'Satisfied Clients' },
        { number: '40+', label: 'Design Experts' },
    ];

  const features = [
    { 
      title: 'Satisfaction Guarantee',
      description: 'Design eye-catching UI/UX interfaces for effortless user interaction.',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM20 34L10 24L13.414 20.586L20 27.172L34.586 12.586L38 16L20 34Z" fill="#7d2fd0"/>
        </svg>
      )
    },
    {
      title: 'Best Quality Work',
      description: 'Excellence and innovation define our design solutions.',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L30.31 16.76L44 19.48L34 29.24L36.52 43.02L24 36.56L11.48 43.02L14 29.24L4 19.48L17.69 16.76L24 4Z" fill="#7d2fd0"/>
        </svg>
      )
    },
    {
      title: 'Interactive Interface',
      description: 'Create an engaging interface for an optimal user experience.',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      title: 'E-Commerce',
      description: 'Explore how our UI/UX design expertise optimizes user journeys to create intuitive, conversion-focused experiences for the e-commerce sector.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M55 20H25C22 20 20 22 20 25V55C20 58 22 60 25 60H55C58 60 60 58 60 55V25C60 22 58 20 55 20Z" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M35 20V16C35 14 37 12 39 12H41C43 12 45 14 45 16V20" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 32H60" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M35 44H45" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'E-Learning',
      description: 'Discover how our tailored UI/UX design solutions enhance educational platforms, creating intuitive learning experiences in the evolving e-learning landscape.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 16L12 28L40 40L68 28L40 16Z" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 34V50L40 58L56 50V34" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 28V44" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Travel And Trekking',
      description: 'Learn how our specialized UI/UX design solutions enhance travel websites, booking processes, and ensure memorable journeys in the travel and trekking industries.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 12L16 32H22V52H36V40H44V52H58V32H64L40 12Z" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 32H50" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Logistics',
      description: 'Explore how our UI/UX design solutions improve fleet management, streamline tracking processes, and enhance user interfaces for seamless logistics operations.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="16" width="60" height="48" rx="3" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M10 26H70" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M20 40H60" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M20 50H50" stroke="#7d2fd0" strokeWidth="3"/>
          <circle cx="15" cy="21" r="2" fill="#7d2fd0"/>
          <circle cx="22" cy="21" r="2" fill="#7d2fd0"/>
          <circle cx="29" cy="21" r="2" fill="#7d2fd0"/>
        </svg>
      )
    }
  ];

  const designTools = [
    { name: 'Figma', icon: <SiFigma className="text-4xl text-purple-600" /> },
    { name: 'Adobe XD', icon: <SiAdobexd className="text-4xl text-purple-600" /> },
    { name: 'Sketch', icon: <SiSketch className="text-4xl text-purple-600" /> },
    { name: 'InVision', icon: <SiInvision className="text-4xl text-purple-600" /> },
    { name: 'Marvel', icon: <SiLaravel className="text-4xl text-purple-600" /> },
    { name: 'Framer', icon: <SiFramer className="text-4xl text-purple-600" /> }
  ];

  const designProcess = [
    { 
      step: '1. Research & Discovery', 
      description: 'We conduct thorough user research, competitor analysis, and stakeholder interviews to understand your target audience and business goals.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="15" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M35 35L45 45" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      step: '2. Information Architecture', 
      description: 'We organize content and features in a logical structure that ensures intuitive navigation and optimal user flow.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="10" width="30" height="10" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="10" y="30" width="15" height="10" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="35" y="30" width="15" height="10" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="20" y="50" width="20" height="10" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M30 20V25" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M30 25H18" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M30 25H42" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M18 40V45" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M18 45H30" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M42 40V45" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M42 45H30" stroke="#7d2fd0" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      step: '3. Wireframing', 
      description: 'We create low-fidelity mockups that outline the structural layout and basic functionality without visual design elements.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="40" height="40" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="15" y="15" width="30" height="5" rx="1" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="15" y="25" width="30" height="5" rx="1" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="15" y="35" width="15" height="10" rx="1" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="35" y="35" width="10" height="10" rx="1" stroke="#7d2fd0" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      step: '4. Visual Design', 
      description: 'We develop the visual language of your product, including color schemes, typography, iconography, and other visual elements.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="10" fill="#7d2fd0" fillOpacity="0.2" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="35" y="15" width="15" height="10" rx="2" fill="#7d2fd0" fillOpacity="0.4" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M15 40L25 35L35 45L45 40" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      step: '5. Prototyping', 
      description: 'We create interactive prototypes that simulate the user experience, allowing stakeholders to test functionality before development.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="20" height="40" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="15" y="15" width="10" height="5" rx="1" fill="#7d2fd0" fillOpacity="0.3"/>
          <rect x="15" y="25" width="10" height="10" rx="1" fill="#7d2fd0" fillOpacity="0.3"/>
          <rect x="15" y="40" width="10" height="5" rx="1" fill="#7d2fd0" fillOpacity="0.3"/>
          <rect x="35" y="20" width="15" height="25" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M42.5 42.5C43.3284 42.5 44 41.8284 44 41C44 40.1716 43.3284 39.5 42.5 39.5C41.6716 39.5 41 40.1716 41 41C41 41.8284 41.6716 42.5 42.5 42.5Z" fill="#7d2fd0"/>
        </svg>
      )
    },
    { 
      step: '6. User Testing', 
      description: 'We conduct usability testing with real users to identify pain points and areas for improvement in the design.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="20" r="8" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M10 45C10 38.3726 15.3726 33 22 33H28C34.6274 33 40 38.3726 40 45V50H10V45Z" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M40 25L45 30L50 20" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      step: '7. Refinement', 
      description: 'Based on testing results, we iterate and refine the design to optimize user experience and achieve business goals.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 30C15 21.7157 21.7157 15 30 15C38.2843 15 45 21.7157 45 30C45 38.2843 38.2843 45 30 45C21.7157 45 15 38.2843 15 30Z" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M30 15V10" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M45 30H50" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M30 45V50" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M15 30H10" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M25 30L30 35L37 26" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      step: '8. Design Handoff', 
      description: 'We provide development-ready assets and specifications to ensure accurate implementation of the design.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="15" width="25" height="30" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <rect x="15" y="20" width="15" height="5" rx="1" fill="#7d2fd0" fillOpacity="0.3"/>
          <rect x="15" y="30" width="15" height="5" rx="1" fill="#7d2fd0" fillOpacity="0.3"/>
          <path d="M35 30H50" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M45 25L50 30L45 35" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const uiuxFeatures = [
    {
      title: 'User-Centered Design',
      description: 'We prioritize user needs and preferences, creating interfaces that are intuitive, accessible, and enjoyable to use.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="22" r="10" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M16 50C16 42.268 23.163 36 32 36C40.837 36 48 42.268 48 50" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'Responsive Design',
      description: 'Our designs adapt seamlessly to all screen sizes, ensuring a consistent experience across desktop, tablet, and mobile devices.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="32" height="24" rx="2" stroke="#7d2fd0" strokeWidth="3"/>
          <rect x="44" y="20" width="12" height="20" rx="2" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M8 44h32" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M24 44v4" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M50 44h-6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M47 44v4" stroke="#7d2fd0" strokeWidth="3"/>
        </svg>
      )
    },
    {
      title: 'Visual Consistency',
      description: 'We ensure consistent branding, typography, colors, and UI elements throughout your product for a cohesive user experience.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="14" height="32" rx="2" stroke="#7d2fd0" strokeWidth="3"/>
          <rect x="25" y="16" width="14" height="32" rx="2" stroke="#7d2fd0" strokeWidth="3"/>
          <rect x="42" y="16" width="14" height="32" rx="2" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M12 24h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M29 24h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M46 24h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M12 32h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M29 32h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M46 32h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M12 40h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M29 40h6" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M46 40h6" stroke="#7d2fd0" strokeWidth="3"/>
        </svg>
      )
    },
    {
      title: 'Interactive Prototyping',
      description: 'Experience your product before development with our high-fidelity interactive prototypes that simulate real user interactions.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="40" height="40" rx="4" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M26 32l16 0" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
          <path d="M32 26l0 16" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  const digitalServices = [
    {
      title: "Website Development",
      description: "Custom, responsive website designs that elevate your online presence.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="48" height="32" rx="4" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M8 24H56" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="16" cy="20" r="2" fill="#7d2fd0" />
          <circle cx="24" cy="20" r="2" fill="#7d2fd0" />
          <circle cx="32" cy="20" r="2" fill="#7d2fd0" />
          <rect x="16" y="32" width="32" height="4" rx="2" fill="#7d2fd0" />
          <rect x="16" y="40" width="20" height="4" rx="2" fill="#7d2fd0" />
        </svg>
      ),
    },
    {
      title: "App Development",
      description: "Intuitive, feature-rich mobile applications designed for modern users.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="8" width="24" height="48" rx="4" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="32" cy="48" r="3" fill="#7d2fd0" />
          <path d="M20 16H44" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M20 40H44" stroke="#7d2fd0" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Strategic optimization for enhanced visibility and organic traffic growth.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="16" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M40 40L52 52" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Graphic Design",
      description: "Captivating visuals that communicate your brand's essence effectively.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8L8 56H56L32 8Z" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="32" cy="40" r="4" fill="#7d2fd0" />
        </svg>
      ),
    },
  ];
  
    
  const faqs = [
    { 
      question: "What is UI/UX design, and why is it important?",
      answer: "UI (User Interface) design focuses on the visual elements users interact with, while UX (User Experience) design encompasses the entire journey and how users feel when using a product. Good UI/UX design is crucial because it improves user satisfaction, increases conversion rates, builds trust, reduces development costs, and gives you a competitive advantage in the market."
    },
    { 
      question: "What does the UI/UX design process involve?",
      answer: "Our UI/UX design process typically includes: 1) Research and Discovery, 2) Information Architecture, 3) Wireframing, 4) Visual Design, 5) Prototyping, 6) User Testing, 7) Refinement, and 8) Design Handoff. This comprehensive approach ensures we create user-centered designs that meet both user needs and business objectives."
    },
    { 
      question: "How does responsive design factor into UI/UX?",
      answer: "Responsive design ensures your website or application adapts seamlessly to different screen sizes and devices. This is a critical aspect of UI/UX as it provides a consistent experience regardless of how users access your product, improves usability, enhances SEO performance, and ensures you reach users across all devices."
    },
    { 
      question: "How can UI/UX design contribute to brand consistency?",
      answer: "UI/UX design establishes and reinforces brand consistency by implementing standardized color schemes, typography, spacing, imagery style, interaction patterns, and tone of voice throughout your digital products. This consistency builds recognition, trust, and a professional image while creating a cohesive experience across all touchpoints."
    },
    { 
      question: "How can UI/UX design improve user engagement?",
      answer: "UI/UX design improves user engagement by creating intuitive navigation, minimizing cognitive load, incorporating meaningful animations, designing clear calls-to-action, personalizing experiences, optimizing page load speeds, and implementing gamification elements. These strategies make your digital product more engaging, enjoyable, and effective."
    },
    { 
      question: "How does UI/UX design impact conversion rates and business goals?",
      answer: "Well-executed UI/UX design directly impacts business success by streamlining user journeys, removing friction points, clarifying value propositions, building trust through professional design, optimizing calls-to-action, and creating emotional connections. These improvements lead to higher conversion rates, increased customer retention, and stronger brand loyalty."
    },
    { 
      question: "What UI/UX design tools do you use?",
      answer: "We utilize industry-leading design tools including Figma, Adobe XD, Sketch, InVision, Marvel, and Framer, among others. These tools allow us to create wireframes, mockups, prototypes, and design systems efficiently while enabling seamless collaboration with stakeholders and development teams."
    },
    { 
      question: "How do you measure the success of a UI/UX design?",
      answer: "We measure UI/UX success through key metrics including task completion rates, time-on-task, error rates, user satisfaction scores, conversion rates, retention rates, and engagement metrics. We also conduct usability testing and gather qualitative feedback to continuously improve the user experience."
    },
    { 
      question: "Do you provide UI/UX design for existing products?",
      answer: "Yes, we provide UI/UX redesign services for existing products. We begin with a comprehensive audit of your current design, identify pain points and opportunities, and then develop solutions that enhance usability while preserving what's working well. Our approach ensures minimal disruption to existing users while significantly improving their experience."
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
      <section className="relative py-20 overflow-hidden text-white bg-gradient-to-r from-purple-500 to-indigo-600">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute w-40 h-40 bg-white rounded-full top-10 left-10 blur-3xl"></div>
          <div className="absolute bg-purple-300 rounded-full bottom-10 right-10 w-60 h-60 blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-6 mx-auto md:px-12 lg:px-16">
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <div className="w-full mb-8 md:w-1/2 md:mb-0 md:pr-8">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                UI/UX Design
              </h1>
              <p className="mb-8 text-lg md:text-xl">
                  Create intuitive experiences with our UI/UX design services. We blend beautiful interfaces with seamless functionality, ensuring your users enjoy every interaction with your digital products.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="px-6 py-3 text-white transition-all bg-white border border-white rounded-lg bg-opacity-20 hover:bg-opacity-30">
                    Get Started
                  </Link>
                  <Link href="/portfolio" className="px-6 py-3 text-purple-600 transition-all bg-white rounded-lg hover:bg-gray-100">
                    View Portfolio
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="relative z-10 overflow-hidden bg-white rounded-lg shadow-xl">
                    <Image 
                      src="/img/ui-ux-design-hero.jpg" 
                      alt="UI/UX Design" 
                      width={600} 
                      height={400}
                      className="object-cover w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 bg-purple-300 rounded-full blur-2xl opacity-60"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 -mb-8 -ml-8 bg-indigo-300 rounded-full blur-2xl opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container px-6 mx-auto md:px-12 lg:px-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 text-center transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="mb-3 text-4xl font-bold text-purple-600">{stat.number}</div>
                  <div className="text-lg text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-6 mx-auto md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Why Choose Our UI/UX Design Services
              </h2>
              <p className="text-gray-600 md:text-lg">
                We transform complex interfaces into intuitive, engaging experiences that delight users and drive business success.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="mb-4">{feature.svg}</div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container px-6 mx-auto md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Industry-Specific UI/UX Solutions
              </h2>
              <p className="text-gray-600 md:text-lg">
                Explore our specialized UI/UX design services tailored for different industries and business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <div key={index} className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="flex items-center justify-center mb-6">
                    {service.svg}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-center text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-6 mx-auto md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Our UI/UX Design Process
              </h2>
              <p className="text-gray-600 md:text-lg">
                We follow a structured design methodology that ensures all aspects of user experience are considered and optimized.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {designProcess.slice(0, 4).map((process, index) => (
                <div key={index} className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="flex items-center justify-center mb-6">
                    {process.svg}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-center text-gray-900">{process.step}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
              {designProcess.slice(4).map((process, index) => (
                <div key={index} className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="flex items-center justify-center mb-6">
                    {process.svg}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-center text-gray-900">{process.step}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Tools Section */}
        <section className="py-16 bg-white">
          <div className="container px-6 mx-auto md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Tools We Use
              </h2>
              <p className="text-gray-600 md:text-lg">
                We leverage industry-leading design tools to create exceptional user experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {designTools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                  {tool.icon}
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{tool.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UI/UX Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-6 mx-auto md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Key Features of Our UI/UX Design
              </h2>
              <p className="text-gray-600 md:text-lg">
                We incorporate these essential elements to create intuitive, engaging, and effective user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {uiuxFeatures.map((feature, index) => (
                <div key={index} className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="flex items-center justify-center mb-6">
                    {feature.svg}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-center text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Services Section */}
        <section className="py-16 bg-white">
          <div className="container px-6 mx-auto md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Complementary Digital Services
              </h2>
              <p className="text-gray-600 md:text-lg">
                Enhance your digital presence with our comprehensive suite of digital services.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {digitalServices.map((service, index) => (
                <div key={index} className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="flex items-center justify-center mb-6">
                    {service.svg}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-center text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Companies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-6 mx-auto md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Trusted By Leading Companies
              </h2>
              <p className="text-gray-600 md:text-lg">
                Join the roster of satisfied clients who have transformed their digital experiences with our UI/UX design services.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {trustedCompanies.map((company, index) => (
                <div key={index} className="flex items-center justify-center p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                  <Image 
                    src={`/img/companies/${company.logo}`} 
                    alt={company.name} 
                    width={120} 
                    height={60}
                    className="object-contain w-full h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container px-6 mx-auto md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 md:text-lg">
                Find answers to common questions about our UI/UX design services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4 overflow-hidden border border-gray-200 rounded-lg">
                  <button
                    className="flex items-center justify-between w-full p-5 text-left bg-white"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 transition-transform ${openFaqIndex === index ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-300 ${
                      openFaqIndex === index ? 'max-h-96 p-5 bg-gray-50' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-white bg-gradient-to-r from-purple-600 to-indigo-700">
          <div className="container px-6 mx-auto text-center md:px-12 lg:px-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready to Transform Your Digital Experience?
              </h2>
              <p className="mb-8 text-lg md:text-xl opacity-90">
                Let's discuss how our UI/UX design services can elevate your digital products and drive business growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-3 text-purple-600 transition-all bg-white rounded-lg hover:bg-gray-100">
                  Get Started
                </Link>
                <Link href="/portfolio" className="px-8 py-3 transition-all bg-transparent border border-white rounded-lg hover:bg-white hover:bg-opacity-10">
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
}

export default UiUxDesign;