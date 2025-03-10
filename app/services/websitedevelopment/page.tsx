'use client';

import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const WebsiteDevelopment = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const stats = [
    { number: '300+', label: 'Projects Completed' },
    { number: '400+', label: 'Satisfied Clients' },
    { number: '60+', label: 'Team Members' },
  ];

  const features = [
    { 
      title: 'Satisfaction Guarantee',
      description: 'Elevate online presence with website development expertise.',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM20 34L10 24L13.414 20.586L20 27.172L34.586 12.586L38 16L20 34Z" fill="#7d2fd0"/>
        </svg>
      )
    },
    {
      title: 'Best Quality work',
      description: 'Excellence and innovation define our development solutions.',
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
      description: 'We redefine the online shopping experience through innovative e-commerce website development solutions with over a decade of experience in website development.',
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
      title: 'Travel And Trekking',
      description: 'We highly value experience over anything else. Therefore, we provide you with the best travel and trekking website development services.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 12L16 32H22V52H36V40H44V52H58V32H64L40 12Z" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 32H50" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'E-Learning',
      description: 'We specialize in empowering education through digital solutions. Here, we are dedicated to developing innovative e-learning websites to seamlessly merge technology and education.',
      svg: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 16L12 28L40 40L68 28L40 16Z" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 34V50L40 58L56 50V34" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 28V44" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Informative And Others',
      description: 'We specialize in empowering content creation through our tailored digital solutions. We are not limited by the domain-restricted categories. We do your trusted partner for custom website design and development in Nepal.',
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

  const technologies = {
    frontend: ['HTML5', 'CSS3', 'React', 'Next.js', 'TypeScript'],
    backend: ['Node.js', 'Python', 'PHP', 'WordPress'],
    infrastructure: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes']
  };

  const roadmap = [
    { 
      step: '1. Requirement Analysis', 
      description: 'We conduct a thorough analysis of your requirements to establish the foundation for your website.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="40" height="40" rx="4" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M20 25H40" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M20 35H40" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M20 30H30" stroke="#7d2fd0" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      step: '2. Planning', 
      description: 'We make estimations and customized strategies to ensure a secure roadmap to success.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="20" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M30 20V30L38 34" stroke="#7d2fd0" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      step: '3. Design (UI/UX)', 
      description: 'Your vision will be aligned with the latest design using best technology ensuring the best user experience.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="15" width="40" height="30" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M10 22H50" stroke="#7d2fd0" strokeWidth="2"/>
          <circle cx="15" cy="19" r="1.5" fill="#7d2fd0"/>
          <circle cx="20" cy="19" r="1.5" fill="#7d2fd0"/>
          <circle cx="25" cy="19" r="1.5" fill="#7d2fd0"/>
          <rect x="15" y="27" width="30" height="3" rx="1.5" fill="#7d2fd0"/>
          <rect x="15" y="35" width="20" height="3" rx="1.5" fill="#7d2fd0"/>
        </svg>
      )
    },
    { 
      step: '4. Development', 
      description: 'Our team of highly skilled developers work with cutting-edge programming languages and standards.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 35L25 25L15 15" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M45 35L35 25L45 15" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M25 45L35 15" stroke="#7d2fd0" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      step: '5. System Testing & QA', 
      description: 'We ensure reliability through rigorous system testing and QA for a seamless user experience and robust website.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10C18.954 10 10 18.954 10 30C10 41.046 18.954 50 30 50C41.046 50 50 41.046 50 30C50 18.954 41.046 10 30 10Z" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M25 30L28 33L35 26" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      step: '6. Deployment', 
      description: 'After ensuring website quality, we launch it from prototype to fully-fledged, live for your entire audience.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 40L30 20L50 40" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M20 40V50H40V40" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M30 20V10" stroke="#7d2fd0" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      step: '7. Maintenance & Monitoring', 
      description: 'We provide reliable hosting and ongoing monitoring and support to ensure your website runs smoothly.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 30H20L25 20L35 40L40 30H45" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M10 30C10 18.954 18.954 10 30 10C41.046 10 50 18.954 50 30C50 41.046 41.046 50 30 50C18.954 50 10 41.046 10 30Z" stroke="#7d2fd0" strokeWidth="2"/>
        </svg>
      )
    },
    { 
      step: '8. Knowledge Transfer', 
      description: 'We provide training on process operations, troubleshooting, implementation, and user data access post-launch.',
      svg: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20L40 20" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M20 30L40 30" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M20 40L40 40" stroke="#7d2fd0" strokeWidth="2"/>
          <path d="M15 10L45 10L45 50L15 50L15 10Z" stroke="#7d2fd0" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  const businessFeatures = [
    {
      title: 'Robust Functionality',
      description: 'Your website with optimized features and seamless performance for an exceptional user experience.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8Z" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 16V32L42.667 37.333" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Client-Centric Approach',
      description: 'Our client-centric website solutions address unique needs, reflecting your business vision with precision.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="24" r="8" stroke="#7d2fd0" strokeWidth="3"/>
          <circle cx="44" cy="24" r="8" stroke="#7d2fd0" strokeWidth="3"/>
          <circle cx="32" cy="44" r="8" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M24 30L30 38" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M40 30L34 38" stroke="#7d2fd0" strokeWidth="3"/>
        </svg>
      )
    },
    {
      title: 'Innovative Website Design',
      description: 'Striking creativity, we transform concepts into reality with user-friendly modern designs.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="12" width="48" height="40" rx="4" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M8 20H56" stroke="#7d2fd0" strokeWidth="3"/>
          <circle cx="14" cy="16" r="2" fill="#7d2fd0"/>
          <circle cx="20" cy="16" r="2" fill="#7d2fd0"/>
          <circle cx="26" cy="16" r="2" fill="#7d2fd0"/>
        </svg>
      )
    },
    {
      title: 'Timely Website Delivery',
      description: 'We value time, ensuring your website projects meet deadlines consistently with uncompromised quality.',
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="24" stroke="#7d2fd0" strokeWidth="3"/>
          <path d="M32 16V32L44 44" stroke="#7d2fd0" strokeWidth="3"/>
        </svg>
      )
    }
  ];

  const digitalServices = [
    {
      title: "UI/UX",
      description: "Design eye-catching UI/UX solutions for effortless user interfaces.",
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
      title: "Search Engine Optimization (SEO)",
      description: "Custom SEO solutions for enhanced organic visibility and growth.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="16" stroke="#7d2fd0" strokeWidth="3" />
          <path d="M40 40L52 52" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Social Media Marketing (SMM)",
      description: "Build a strong online presence and engage with your targeted audience.",
      svg: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="32" r="12" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="44" cy="20" r="12" stroke="#7d2fd0" strokeWidth="3" />
          <circle cx="44" cy="44" r="12" stroke="#7d2fd0" strokeWidth="3" />
          <line x1="30" y1="26" x2="34" y2="22" stroke="#7d2fd0" strokeWidth="3" />
          <line x1="30" y1="38" x2="34" y2="42" stroke="#7d2fd0" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "Graphic Design",
      description: "Designs that speak your brand's essence and connect with your audience.",
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
        question: "What types of website development services do you offer?",
        answer: "We offer a comprehensive range of website development services including e-commerce websites, corporate websites, landing pages, custom web applications, CMS development, and responsive design. We tailor our solutions to meet your specific business requirements."
      },
      { 
        question: "How much does it cost to develop my website?",
        answer: "The cost of website development varies depending on your specific requirements, complexity, features, and scope. We provide customized quotes based on your project needs. Contact us for a free consultation and estimate."
      },
      { 
        question: "How long does it take to build a website?",
        answer: "The timeline for website development depends on the complexity and scope of your project. Simple websites may take 2-4 weeks, while complex e-commerce or custom web applications can take 2-6 months. We'll provide you with a detailed timeline during our project planning phase."
      },
      { 
        question: "What is the process of website development?",
        answer: "Our website development process includes: 1) Requirement Analysis, 2) Planning, 3) Design (UI/UX), 4) Development, 5) Testing & QA, 6) Deployment, 7) Maintenance & Monitoring, and 8) Knowledge Transfer. We follow a systematic approach to ensure quality and timely delivery."
      },
      { 
        question: "Do you offer mobile website hosting services?",
        answer: "Yes, we provide reliable website hosting services with robust security measures, regular backups, and ongoing technical support to ensure your website runs smoothly and efficiently."
      },
      { 
        question: "Do you develop dynamic websites?",
        answer: "Yes, we specialize in developing dynamic websites that offer interactive features, personalized user experiences, and database integration. Our dynamic websites are designed to engage visitors and drive conversions."
      },
      { 
        question: "Do you develop SEO-friendly websites?",
        answer: "Absolutely! All our websites are built with SEO best practices in mind. We implement proper site structure, mobile responsiveness, fast loading speeds, semantic markup, and other SEO elements to help improve your search engine rankings."
      },
      { 
        question: "Do you offer support services and maintenance after development?",
        answer: "Yes, we provide comprehensive support and maintenance services after website launch. Our support packages include regular updates, security monitoring, performance optimization, content updates, and technical troubleshooting."
      },
      { 
        question: "How do you ensure the security of the websites you develop?",
        answer: "We implement multiple security measures including SSL certificates, secure coding practices, regular security updates, firewall protection, data encryption, and vulnerability scanning. We also provide security training and documentation to clients."
      }
    ];
    

  const trustedCompanies = [
    { name: 'Nepal Research', logo: 'nepal-research.png' },
    { name: 'Visit Nepal', logo: 'visit-nepal.png' },
    { name: 'E-Learning', logo: 'elearning.png' },
    { name: 'Chautari', logo: 'chautari.png' },
    { name: 'Astra Media', logo: 'astra-media.png' },
    { name: 'Harilo', logo: 'harilo.png' }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 md:w-1/2 md:mb-0">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                Website Development
              </h1>
              <p className="mb-6 text-lg text-gray-700">
                <span className="font-semibold">Highly functional and visually appealing website designed to meet your needs.</span>
              </p>
              <p className="mb-6 text-gray-600">
                Crafting Digital Excellence: Elevate Your Online Presence with Innovative Website Development Solutions. Perfect Design, Seamless Functionality, and Future-Ready.
              </p>
              <p className="mb-8 text-gray-600">
                We specialize in developing websites that not only look great but also deliver results.
              </p>
              <button className="px-8 py-3 text-white transition duration-300 bg-purple-600 rounded-full hover:bg-green-600">
                Get Free Consultation
              </button>
            </div>
            <div className="flex justify-center md:w-1/2">
              <div className="relative">
                <img src="/images/website-development-hero.png" alt="Website Development" className="max-w-full" />
                <div className="absolute px-4 py-2 bg-white rounded-lg shadow-md -top-8 -right-8">
                  <div className="flex items-center">
                    <div className="mr-2 text-purple-600">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">300+</span>
                  </div>
                  <p className="text-xs text-gray-500">Projects</p>
                </div>
                <div className="absolute px-4 py-2 bg-white rounded-lg shadow-md top-16 -right-12">
                  <div className="flex items-center">
                    <div className="mr-2 text-purple-600">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27 L22 9.27L15.09 15.74L16.24 23.01L12 19.54L7.76 23.01L8.91 15.74L2 9.27L9.27 8.26L12 2Z" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">400+</span>
                  </div>
                  <p className="text-xs text-gray-500">Happy Clients</p>
                </div>
                <div className="absolute px-4 py-2 bg-white rounded-lg shadow-md -bottom-6 -left-8">
                  <div className="flex items-center">
                    <div className="mr-2 text-purple-600">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">60+</span>
                  </div>
                  <p className="text-xs text-gray-500">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-lg ${index === 1 ? 'bg-purple-600 text-white' : 'bg-white shadow-lg'}`}>
                <div className="mb-4">
                  {feature.svg}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className={index === 1 ? 'text-white opacity-90' : 'text-gray-600'}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proud to Deliver Section */}
      <section className="py-12 text-center">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-block mb-3">
              <div className="flex items-center">
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
                <span className="mx-4 text-sm text-gray-500">Standards We Serve</span>
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold">
              Proud To Deliver Excellence <span className="text-purple-600">Every Time</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center">
            {stats.map((stat, index) => (
              <div key={index} className="w-full px-4 mb-8 sm:w-1/3">
                <div className="mb-2 text-3xl font-bold text-purple-600 md:text-4xl">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="flex overflow-hidden bg-white rounded-lg">
                <div className={`w-1/2 p-6 ${index % 2 === 0 ? 'bg-purple-600 text-white' : 'bg-green-50'}`}>
                  <h3 className={`text-xl font-semibold mb-3 ${index % 2 === 0 ? 'text-white' : 'text-gray-800'}`}>{service.title}</h3>
                  <p className={index % 2 === 0 ? 'text-white opacity-90' : 'text-gray-600'}>{service.description}</p>
                </div>
                <div className="flex items-center justify-center w-1/2 p-6">
                  {service.svg}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-block mb-3">
              <div className="flex items-center">
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
                <span className="mx-4 text-sm text-gray-500">Technology Stack</span>
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold">
              Technology We Work With In <span className="text-purple-600">Website Development</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="mb-8 md:w-3/5 md:mb-0">
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">Frontend</h3>
                <div className="flex flex-wrap gap-4">
                  {technologies.frontend.map((tech, index) => (
                    <div key={index} className="px-6 py-3 bg-white rounded-lg shadow-md">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">Backend</h3>
                <div className="flex flex-wrap gap-4">
                  {technologies.backend.map((tech, index) => (
                    <div key={index} className="px-6 py-3 bg-white rounded-lg shadow-md">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold">Infrastructure</h3>
                <div className="flex flex-wrap gap-4">
                  {technologies.infrastructure.map((tech, index) => (
                    <div key={index} className="px-6 py-3 bg-white rounded-lg shadow-md">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center md:w-2/5">
              <img src="/developer.png" alt="Developer" className="max-w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Roadmap</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our systematic approach ensures smooth development and successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {roadmap.slice(0, 4).map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="p-3 mr-4 bg-green-100 rounded-full">
                    {item.svg}
                  </div>
                  <h3 className="text-lg font-semibold">{item.step}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
            {roadmap.slice(4, 8).map((item, index) => (
              <div key={index + 4} className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="p-3 mr-4 bg-green-100 rounded-full">
                    {item.svg}
                  </div>
                  <h3 className="text-lg font-semibold">{item.step}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block mb-3">
              <div className="flex items-center">
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
                <span className="mx-4 text-sm text-gray-500">Why Choose Us</span>
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold">
              We Help You Expand <span className="text-purple-600">Your Business</span> Through Tech
            </h2>
            <p className="max-w-3xl text-gray-600">
              We have proven expertise in advancing businesses through innovative digital solutions. We understand the needs of your choice. As a leading website development company in Nepal, our other exceptional technical services include design and development services. Some of our additional perks are as follows:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="h-full p-6 rounded-lg bg-green-50">
                <div className="mb-4">
                  {businessFeatures[0].svg}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{businessFeatures[0].title}</h3>
                <p className="text-gray-600">{businessFeatures[0].description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:col-span-3 md:grid-cols-3">
              {businessFeatures.slice(1).map((feature, index) => (
                <div key={index + 1} className="p-6 rounded-lg bg-green-50">
                  <div className="mb-4">
                    {feature.svg}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-block mb-3">
              <div className="flex items-center">
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
                <span className="mx-4 text-sm text-gray-500">Portfolio</span>
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold">
              Some Of Our Recent <span className="text-purple-600">Website Development</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="overflow-hidden bg-white rounded-lg shadow-md">
                <img src={`/images/project-${item}.jpg`} alt={`Project ${item}`} className="object-cover w-full h-48" />
                <div className="p-4">
                  <h3 className="mb-1 text-lg font-semibold">Project Title {item}</h3>
                  <p className="mb-3 text-gray-600">Category</p>
                  <Link href="#" className="flex items-center font-medium text-purple-600 hover:text-green-600">
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-purple-600">Time Is Running Out!</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Don't miss the chance to unleash the full potential of your business with Software Website Development!
            </p>
          </div>

          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-8 md:w-2/3 md:mb-0">
              <div className="flex flex-wrap justify-center gap-8 md:justify-start">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 mb-2 bg-white rounded-full shadow-md">
                      <span className="font-semibold text-purple-600">{step}</span>
                    </div>
                    <div className="text-center max-w-[120px]">
                      <p className="text-sm text-gray-700">
                        {step === 1 && "Is your website fast?"}
                        {step === 2 && "Is your website secure?"}
                        {step === 3 && "Is your website mobile-friendly?"}
                        {step === 4 && "Does your website look good?"}
                        {step === 5 && "Is your website optimized for SEO?"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-semibold text-center">Check Your Website Quality For Free</h3>
                <form>
                  <div className="mb-4">
                    <input type="text" placeholder="Enter your website..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div className="mb-4">
                    <input type="email" placeholder="Your email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <button type="submit" className="w-full px-4 py-2 text-white transition duration-300 bg-purple-600 rounded-md hover:bg-green-600">
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Services Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-block mb-3">
              <div className="flex items-center">
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
                <span className="mx-4 text-sm text-gray-500">Other Services</span>
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold">
              One Solution For All Your <span className="text-purple-600">Digital Needs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {digitalServices.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <div className="mb-4">
                  {service.svg}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <Link href="#" className="flex items-center font-medium text-purple-600 hover:text-green-600">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="inline-block mb-3">
              <div className="flex items-center">
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
                <span className="mx-4 text-sm text-gray-500">Our Valued Clients</span>
                <div className="flex-grow w-24 h-px bg-gray-300"></div>
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold">
              Trusted By <span className="text-purple-600">Top-Rated Companies</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                <img src={`/images/clients/${company.logo}`} alt={company.name} className="object-contain h-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            <div className="mb-8 md:w-1/3 md:mb-0">
              <div className="inline-block mb-3">
                <div className="flex items-center">
                  <div className="flex-grow w-12 h-px bg-gray-300"></div>
                  <span className="mx-4 text-sm text-gray-500">FAQs</span>
                </div>
              </div>
              <h2 className="mb-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="mb-4 text-gray-600">
                Welcome to our FAQ section! Here you'll find answers to the most common questions about website development.
              </p>
              <img src="/images/faq-illustration.png" alt="FAQ" className="max-w-full" />
            </div>

            <div className="md:w-2/3 md:pl-12">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="overflow-hidden border border-gray-200 rounded-lg">
                    <button
                      className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-50"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="font-medium">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${openFaqIndex === index ? 'transform rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaqIndex === index && (
                      <div className="p-4 border-t border-gray-200 bg-gray-50">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 text-white bg-purple-600">
        <div className="container px-4 mx-auto text-center md:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Project?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let's discuss your website needs and create a custom solution that drives results for your business.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="px-8 py-3 font-medium text-purple-600 transition duration-300 bg-white rounded-full hover:bg-gray-100">
              Contact Us
            </button>
            <button className="px-8 py-3 font-medium transition duration-300 border-2 border-white rounded-full hover:bg-white hover:text-purple-600">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;