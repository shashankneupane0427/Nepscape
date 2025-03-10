import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Layout, 
  Server, 
  Globe,
  Users, 
  Award,
  Monitor,
  BookOpen,
  Compass,
  Briefcase,
  Zap,
  BarChart,
  Shield,
  Sliders,
  Timer
} from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const WebsiteDevelopmentPage = () => {
  // Stats data
  const stats = [
    { count: '300+', label: 'Satisfied Clients' },
    { count: '450+', label: 'Projects Completed' },
    { count: '8', label: 'Years Experience' },
    { count: '50+', label: 'Tech Partners' }
  ];

  // Services data
  const services = [
    {
      title: 'E-Commerce',
      description: 'We revolutionize the online shopping experience through innovative e-commerce website development solutions that offer a seamless buying experience.',
      icon: <Briefcase className="w-16 h-16 text-purple-600" />
    },
    {
      title: 'Travel And Trekking',
      description: 'We highly value experience over anything else. Therefore, we provide you with the best travel & trekking website development services.',
      icon: <Compass className="w-16 h-16 text-white" />
    },
    {
      title: 'E-Learning',
      description: 'We specialize in empowering education through digital solutions. We are dedicated to developing innovative e-learning websites to seamlessly merge technology and education.',
      icon: <BookOpen className="w-16 h-16 text-white" />
    },
    {
      title: 'Informative And Others',
      description: 'Our website design and development services are not limited to the above-mentioned categories. We are your trusted partner for custom website design and development in Nepal.',
      icon: <Monitor className="w-16 h-16 text-white" />
    }
  ];

  // Tech stack
  const techStack = {
    frontend: [
      { name: 'HTML5', icon: <i className="text-2xl text-orange-500">HTML5</i> },
      { name: 'CSS3', icon: <i className="text-2xl text-blue-500">CSS3</i> },
      { name: 'React', icon: <i className="text-2xl text-blue-400">React</i> },
      { name: 'Next.js', icon: <i className="text-2xl text-black">Next.js</i> },
      { name: 'TypeScript', icon: <i className="text-2xl text-blue-600">TS</i> }
    ],
    backend: [
      { name: 'Node.js', icon: <i className="text-2xl text-green-500">Node.js</i> },
      { name: 'Python', icon: <i className="text-2xl text-blue-500">Python</i> },
      { name: 'PHP', icon: <i className="text-2xl text-purple-500">PHP</i> },
      { name: 'WordPress', icon: <i className="text-2xl text-blue-600">WordPress</i> }
    ],
    infrastructure: [
      { name: 'AWS', icon: <i className="text-2xl text-orange-400">AWS</i> },
      { name: 'Google Cloud', icon: <i className="text-2xl text-red-400">GCP</i> },
      { name: 'Docker', icon: <i className="text-2xl text-blue-500">Docker</i> },
      { name: 'Digital Ocean', icon: <i className="text-2xl text-blue-400">DO</i> }
    ]
  };

  // Development process
  const process = [
    {
      step: 1,
      title: 'Requirement Analysis',
      description: 'We conduct a thorough analysis of your requirements to establish the foundation for your website.'
    },
    {
      step: 2,
      title: 'Planning',
      description: 'We create specifications and customized strategies to ensure a secure roadmap to success.'
    },
    {
      step: 3,
      title: 'Design (UI/UX)',
      description: 'We make your vision come alive with engaging user interfaces designed with the latest technology.'
    },
    {
      step: 4,
      title: 'Development',
      description: 'Our team develops your website concepts with cutting-edge programming languages and standards.'
    },
    {
      step: 5,
      title: 'Testing & QA',
      description: 'We ensure reliability through rigorous system testing and QA for a seamless user experience.'
    },
    {
      step: 6,
      title: 'Deployment',
      description: 'After ensuring quality, we launch it from prototype to fully-fledged, live for your online audience.'
    },
    {
      step: 7,
      title: 'Maintenance & Monitoring',
      description: 'We provide technical ongoing monitoring and support to ensure your website runs smoothly.'
    },
    {
      step: 8, 
      title: 'Knowledge Transfer',
      description: 'We guide you through operations, troubleshooting, implementation, and user data access post-launch.'
    }
  ];

  // Benefits with Lucide icons
  const benefits = [
    {
      title: 'Client-Centric Approach',
      description: 'Our client-specific website solutions address unique needs, reflecting your vision with meticulous precision.',
      icon: <Users className="w-12 h-12 text-purple-600" />
    },
    {
      title: 'Innovative Website Design',
      description: 'Infusing creativity, we transform concepts into reality with user-friendly interfaces that ensure functionality.',
      icon: <Layout className="w-12 h-12 text-purple-600" />
    },
    {
      title: 'Robust Functionality',
      description: 'We create high-quality websites with advanced features and seamless performance for an exceptional user experience.',
      icon: <Sliders className="w-12 h-12 text-purple-600" />
    },
    {
      title: 'Timely Website Delivery',
      description: 'We value time, ensuring your website projects meet deadlines seamlessly without compromising quality.',
      icon: <Timer className="w-12 h-12 text-purple-600" />
    }
  ];

  // Portfolio projects - updated to match the screenshot
  const portfolioProjects = [
    {
      id: 1,
      image: "/api/placeholder/400/320",
      title: "E-commerce Website",
      type: "Website Development"
    },
    {
      id: 2,
      image: "/api/placeholder/400/320",
      title: "Travel Website",
      type: "Website Development"
    },
    {
      id: 3,
      image: "/api/placeholder/400/320",
      title: "Business Website",
      type: "Website Development"
    },
    {
      id: 4,
      image: "/api/placeholder/400/320",
      title: "Lawyer Website",
      type: "Website Development"
    },
    {
      id: 5,
      image: "/api/placeholder/400/320",
      title: "Family Website",
      type: "Website Development"
    },
    {
      id: 6,
      image: "/api/placeholder/400/320",
      title: "Nepal's No. 1 Website",
      type: "Website Development"
    }
  ];

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section - Matched to screenshot */}
      <section className="px-4 py-12 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-bold text-gray-800">
              Website Development
            </h1>
            <p className="mb-2 text-gray-700">
              Highly functional and visually appealing website designed to meet your needs.
            </p>
            <p className="mb-6 text-gray-600">
              Crafting Digital Excellence: Elevate Your Online Presence with Innovative Website Development Solutions! Tailored Designs, Seamless Functionality, and Future-Ready Technology — Your Journey to Success Starts Here!
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-2 space-x-2 text-green-800 transition duration-300 bg-green-200 rounded-full hover:bg-green-300"
            >
              <span>Start Conversation</span>
            </motion.button>
          </div>
          
          <div className="relative flex flex-col items-center">
            <div className="relative w-full h-64">
              <div className="flex items-center justify-center w-full h-full">
                {/* Person illustration from screenshot */}
                <img src="/api/placeholder/400/320" alt="Developer illustration" className="w-48 h-48" />
              </div>
            </div>
            
            <div className="absolute top-0 right-0">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="p-2 text-center bg-white rounded-lg shadow">
                    <p className="text-sm font-bold text-green-600">{stat.count}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Matched to screenshot */}
      <section className="px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-start mb-4">
              <CheckCircle className="w-8 h-8 mr-3 text-green-600" />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Satisfaction Guarantee</h3>
                <p className="text-sm text-gray-600">Elevate online presence with website development expertise.</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 text-white bg-green-500 rounded-lg shadow">
            <div className="flex items-start mb-4">
              <Award className="w-8 h-8 mr-3 text-white" />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Best Quality Work</h3>
                <p className="text-sm text-green-50">Excellence and innovation define our development solutions.</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-start mb-4">
              <Layout className="w-8 h-8 mr-3 text-green-600" />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Interactive Interface</h3>
                <p className="text-sm text-gray-600">Create an engaging interface for a captivating user experience.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 text-center">
          <p className="text-sm text-gray-500">——— Industries We Serve ———</p>
          <h2 className="mb-2 text-2xl font-bold">Proud To Deliver Excellence <span className="text-green-500">Every Time</span></h2>
        </div>
      </section>

      {/* Services Section - Matched to screenshot */}
      <section className="px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="grid grid-cols-3 p-6 bg-white rounded-lg shadow">
            <div className="col-span-2">
              <h3 className="mb-2 text-lg font-semibold">E-Commerce</h3>
              <p className="text-sm text-gray-600">
                We revolutionize the online shopping experience through innovative e-commerce website development solutions that offer a seamless buying experience in website development.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Briefcase className="w-16 h-16 text-green-600" />
            </div>
          </div>
          
          <div className="grid grid-cols-3 p-6 text-white bg-green-500 rounded-lg shadow">
            <div className="col-span-2">
              <h3 className="mb-2 text-lg font-semibold">Travel And Trekking</h3>
              <p className="text-sm text-green-50">
                We highly value experience over anything else. Therefore, we provide you with the best travel & trekking website development services.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Compass className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <div className="grid grid-cols-3 p-6 text-white bg-green-500 rounded-lg shadow">
            <div className="col-span-2">
              <h3 className="mb-2 text-lg font-semibold">E-Learning</h3>
              <p className="text-sm text-green-50">
                We specialize in empowering education through digital solutions. We are dedicated to developing innovative e-learning websites to seamlessly merge technology and education.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <BookOpen className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <div className="grid grid-cols-3 p-6 text-white bg-green-500 rounded-lg shadow">
            <div className="col-span-2">
              <h3 className="mb-2 text-lg font-semibold">Informative And Others</h3>
              <p className="text-sm text-green-50">
                Our website design and development services are not limited to the above-mentioned categories. We are your trusted partner for custom website design and development in Nepal.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Monitor className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Matched to screenshot */}
      <section className="px-4 py-12 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <p className="text-sm text-gray-500">——— Technology Stack ———</p>
          <h2 className="mb-8 text-2xl font-bold">Technology We Work With In <span className="text-green-500">Website Development</span></h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold">Frontend</h3>
              <div className="flex flex-wrap gap-6">
                {techStack.frontend.map((tech, index) => (
                  <div key={index} className="flex items-center justify-center">
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold">Backend</h3>
              <div className="flex flex-wrap gap-6">
                {techStack.backend.map((tech, index) => (
                  <div key={index} className="flex items-center justify-center">
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold">Infrastructure</h3>
              <div className="flex flex-wrap gap-6">
                {techStack.infrastructure.map((tech, index) => (
                  <div key={index} className="flex items-center justify-center">
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <img src="/api/placeholder/400/320" alt="Developer with tech" className="w-64 h-64" />
          </div>
        </div>
      </section>

      {/* Roadmap/Process Section - Matched to screenshot */}
      <section className="px-4 py-10 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">Roadmap</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative p-4 bg-white rounded-lg shadow">
            <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 -mt-5 -ml-5 text-white bg-green-500 rounded-full">1</div>
            <h3 className="mb-2 text-lg font-semibold">Requirement Analysis</h3>
            <p className="text-sm text-gray-600">{process[0].description}</p>
          </div>
          
          <div className="relative p-4 bg-white rounded-lg shadow">
            <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 -mt-5 -ml-5 text-white bg-green-500 rounded-full">2</div>
            <h3 className="mb-2 text-lg font-semibold">Planning</h3>
            <p className="text-sm text-gray-600">{process[1].description}</p>
          </div>
          
          <div className="relative p-4 bg-white rounded-lg shadow">
            <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 -mt-5 -ml-5 text-white bg-green-500 rounded-full">3</div>
            <h3 className="mb-2 text-lg font-semibold">Design (UI/UX)</h3>
            <p className="text-sm text-gray-600">{process[2].description}</p>
          </div>
          
          <div className="relative p-4 bg-white rounded-lg shadow">
            <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 -mt-5 -ml-5 text-white bg-green-500 rounded-full">4</div>
            <h3 className="mb-2 text-lg font-semibold">Development</h3>
            <p className="text-sm text-gray-600">{process[3].description}</p>
          </div>
          
          <div className="relative p-4 bg-white rounded-lg shadow">
            <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 -mt-5 -ml-5 text-white bg-green-500 rounded-full">5</div>
            <h3 className="mb-2 text-lg font-semibold">Testing & QA</h3>
            <p className="text-sm text-gray-600">{process[4].description}</p>
          </div>
          
          <div className="relative p-4 bg-white rounded-lg shadow">
            <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 -mt-5 -ml-5 text-white bg-green-500 rounded-full">6</div>
            <h3 className="mb-2 text-lg font-semibold">Deployment</h3>
            <p className="text-sm text-gray-600">{process[5].description}</p>
          </div>
          
          <div className="relative p-4 bg-white rounded-lg shadow">
            <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 -mt-5 -ml-5 text-white bg-green-500 rounded-full">7</div>
            <h3 className="mb-2 text-lg font-semibold">Maintenance & Monitoring</h3>
            <p className="text-sm text-gray-600">{process[6].description}</p>
          </div>
          
          <div className="relative p-4 bg-white rounded-lg shadow">
            <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 -mt-5 -ml-5 text-white bg-green-500 rounded-full">8</div>
            <h3 className="mb-2 text-lg font-semibold">Knowledge Transfer</h3>
            <p className="text-sm text-gray-600">{process[7].description}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section - Matched to screenshot */}
      <section className="px-4 py-12 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <div className="text-center">
            <p className="text-sm text-gray-500">——— Why Choose Us ———</p>
            <h2 className="mb-6 text-2xl font-bold">We Help You Expand <span className="text-green-500">Your Business</span> Through Tech</h2>
          </div>
          
          <p className="max-w-3xl mx-auto text-center text-gray-600">
            We have a team of highly skilled website designers and developers who can provide you with the website of your choice. As a leading website development company in Nepal, we offer exceptional and responsive website design and development services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                  {React.cloneElement(benefit.icon, { className: "w-8 h-8 text-green-600" })}
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-center">{benefit.title}</h3>
              <p className="text-sm text-center text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section - Matched to screenshot */}
      <section className="px-4 py-12 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <p className="text-sm text-gray-500">——— Our Portfolio ———</p>
          <h2 className="mb-8 text-2xl font-bold">Some Of Our Recent <span className="text-green-500">Website Development</span></h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="overflow-hidden bg-white rounded-lg shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="p-8 text-center text-white bg-gradient-to-r from-green-500 to-green-600 rounded-2xl md:p-12"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Transform Your Online Presence?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-green-50">
            Let's create a website that not only looks stunning but delivers results. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 font-medium text-green-600 transition duration-300 bg-white rounded-full hover:bg-gray-100"
            >
              Start a Project
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 font-medium text-white transition duration-300 bg-green-600 border rounded-full border-white/20 hover:bg-green-700"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default WebsiteDevelopmentPage;