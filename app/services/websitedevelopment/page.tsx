'use client';

import React from 'react';
import { Code2, Paintbrush, Server, Users, Rocket, Brain, Timer, Laptop, BarChart } from 'lucide-react';

const stats = [
  { number: '300+', label: 'Projects Completed' },
  { number: '400+', label: 'Satisfied Clients' },
  { number: '60+', label: 'Team Members' },
];

const features = [
  { 
    title: 'Satisfaction Guarantee',
    icon: <Users className="w-12 h-12 text-green-500" />,
    description: 'Elevate online presence with website development expertise.'
  },
  {
    title: 'Best Quality Work',
    icon: <Rocket className="w-12 h-12 text-green-500" />,
    description: 'Excellence and innovation define our development solutions.'
  },
  {
    title: 'Interactive Interface',
    icon: <Laptop className="w-12 h-12 text-green-500" />,
    description: 'Create an engaging interface for an optimal user experience.'
  }
];

const services = [
  {
    title: 'E-Commerce',
    description: 'We redefine the online shopping experience through innovative e-commerce website development solutions with over a decade of experience in website development.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Travel And Trekking',
    description: 'We highly value experience over anything else. Therefore, we provide you with the best travel and trekking website development services.',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'E-Learning',
    description: 'We specialize in empowering education through digital solutions. Here, we are dedicated to developing innovative e-learning websites to seamlessly merge technology and education.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400'
  }
];

const technologies = {
  frontend: ['HTML5', 'CSS3', 'React', 'Next.js', 'TypeScript'],
  backend: ['Node.js', 'Python', 'PHP', 'WordPress'],
  infrastructure: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes']
};

const roadmap = [
  { step: '1. Requirement Analysis', description: 'We conduct a thorough analysis of your requirements to establish the foundation for your website.' },
  { step: '2. Planning', description: 'We make estimations and customized strategies to ensure a secure roadmap to success.' },
  { step: '3. Design (UI/UX)', description: 'Your vision will be aligned with the latest design using best technology ensuring the best user experience.' },
  { step: '4. Development', description: 'Our team of highly skilled developers work with cutting-edge programming languages and standards.' },
  { step: '5. System Testing & QA', description: 'We ensure reliability through rigorous system testing and QA for a seamless user experience and robust website.' },
  { step: '6. Deployment', description: 'After ensuring website quality, we launch it from prototype to fully-fledged, live for your entire audience.' },
  { step: '7. Maintenance & Monitoring', description: 'We provide reliable hosting and ongoing monitoring and support to ensure your website runs smoothly.' },
  { step: '8. Knowledge Transfer', description: 'We provide training on process operations, troubleshooting, implementation, and user data access post-launch.' }
];

export default function WebsiteDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="container px-6 py-16 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="md:w-1/2">
            <h1 className="mb-6 text-4xl font-bold">Website Development</h1>
            <p className="mb-8 text-gray-600">
              Highly functional and visually appealing website designed to meet your needs.
            </p>
            <button className="px-6 py-3 text-white transition bg-green-500 rounded-full hover:bg-green-600">
              Let's Start Conversation
            </button>
          </div>
          <div className="mt-8 md:w-1/2 md:mt-0">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-green-500">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-6 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex flex-col items-center">
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-center text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container px-6 py-16 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg">
              <img src={service.image} alt={service.title} className="object-cover w-full h-48" />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container px-6 py-16 mx-auto bg-white">
        <h2 className="mb-12 text-3xl font-bold text-center">
          Technology We Work With In <span className="text-green-500">Website Development</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.frontend.map((tech, index) => (
                <span key={index} className="px-4 py-2 text-sm bg-gray-100 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.backend.map((tech, index) => (
                <span key={index} className="px-4 py-2 text-sm bg-gray-100 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Infrastructure</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.infrastructure.map((tech, index) => (
                <span key={index} className="px-4 py-2 text-sm bg-gray-100 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="container px-6 py-16 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Roadmap</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((step, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="mb-3 text-lg font-semibold text-green-500">{step.step}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
