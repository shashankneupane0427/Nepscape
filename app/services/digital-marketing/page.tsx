"use client"; // This is needed for client-side features like useState

import React, { useState } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Define types for our components
type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  learnMoreLink: string;
};

type StatProps = {
  number: string;
  label: string;
  color?: string;
};

type FAQItemProps = {
  question: string;
  answer: string;
};

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

type ValuePropProps = {
  title: string;
  description: string;
  icon: string;
};

export default function DigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (question: string) => {
    if (openFaq === question) {
      setOpenFaq(null);
    } else {
      setOpenFaq(question);
    }
  };

  return (
    <div className="min-h-screen text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-purple-50 md:py-24">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-10 md:w-1/2 md:mb-0">
              <span className="px-4 py-1 text-sm font-medium tracking-wide text-purple-600 uppercase bg-purple-100 rounded-full">Elevate your brand today</span>
              <h1 className="mt-4 mb-6 text-3xl font-bold md:text-5xl">Revolutionize Your Brand's Impact In The Digital Sphere!</h1>
              <p className="mb-8 text-lg">
                At DigitalPro, we elevate your online presence, drive traffic, and boost conversions. Get
                tailored strategies for success in the digital age. Let's Transform Your Brand Together!
              </p>
              <button className="px-8 py-3 font-bold text-white transition duration-300 bg-purple-600 rounded-lg hover:bg-purple-700">
                Get Free Consultation
              </button>
            </div>
            <div className="flex justify-center md:w-1/2">
              <div className="relative w-full max-w-md">
                <Image 
                  src="/api/placeholder/500/400" 
                  alt="Digital Marketing Illustration" 
                  width={500} 
                  height={400}
                  className="object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-16 text-center section-heading">
            <h2 className="mb-4 text-3xl font-bold">What We Offer <span className="text-purple-600">For Your Business</span></h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-purple-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-16 text-center">
            <span className="text-sm font-medium tracking-wide text-purple-600 uppercase">Work Flow</span>
            <h2 className="mt-2 text-3xl font-bold">How We Get <span className="text-purple-600">Started</span></h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Expect Great Things From Your <span className="text-purple-600">Digital Agency</span></h2>
            <p className="max-w-2xl mx-auto">See how it transforms your business metrics</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center mb-12">
            <div className="flex flex-col items-center w-full p-6 md:w-1/2">
              <div className="w-full max-w-xs">
                <Image 
                  src="/api/placeholder/300/200" 
                  alt="Before Digital Marketing" 
                  width={300} 
                  height={200}
                  className="object-contain" 
                />
              </div>
              <h3 className="mt-4 mb-2 text-xl font-semibold">Before Digital Marketing</h3>
            </div>
            <div className="flex flex-col items-center w-full p-6 md:w-1/2">
              <div className="w-full max-w-xs">
                <Image 
                  src="/api/placeholder/300/200" 
                  alt="After Digital Marketing" 
                  width={300} 
                  height={200}
                  className="object-contain" 
                />
              </div>
              <h3 className="mt-4 mb-2 text-xl font-semibold">After Digital Marketing</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-12 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Stat key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Value Props Section */}
      <section className="py-16 bg-purple-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-16 text-center">
            <span className="text-sm font-medium tracking-wide text-purple-600 uppercase">Solution Oriented</span>
            <h2 className="mt-2 text-3xl font-bold">How We Run <span className="text-purple-600">Our Business</span></h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {valueProps.map((prop, index) => (
              <ValueProp key={index} {...prop} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Performance Stats */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium tracking-wide text-purple-600 uppercase">Our Statistics</span>
            <h2 className="mt-2 text-3xl font-bold">Pay For <span className="text-purple-600">Qualified Traffic</span></h2>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {performanceStats.map((stat, index) => (
              <div key={index} className="p-4 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border-4 border-purple-200 rounded-full"></div>
                    <div 
                      className="absolute inset-0 border-4 border-purple-600 rounded-full" 
                      style={{ 
                        clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos(stat.percentage * 3.6 * Math.PI / 180)}% ${50 - 50 * Math.sin(stat.percentage * 3.6 * Math.PI / 180)}%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)` 
                      }}
                    ></div>
                    <span className="text-xl font-bold">{stat.percentage}%</span>
                  </div>
                </div>
                <p className="font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-purple-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-12 text-center">
            <span className="text-sm font-medium tracking-wide text-purple-600 uppercase">FAQs</span>
            <h2 className="mt-2 text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4">We compiled the most common questions about our products and services.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border border-purple-200 rounded-lg">
                <button
                  className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => toggleFaq(faq.question)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${openFaq === faq.question ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openFaq === faq.question && (
                  <div className="px-6 py-4 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-white bg-purple-600">
        <div className="container px-4 mx-auto text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold">Ready to Transform Your Digital Presence?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">Join hundreds of businesses that have scaled their growth with our proven digital marketing strategies.</p>
          <button className="px-8 py-3 font-bold text-purple-600 transition duration-300 bg-white rounded-lg hover:bg-purple-50">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

// Component definitions
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, learnMoreLink }) => {
  return (
    <div className="p-6 transition-shadow duration-300 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg">
      <div className="flex items-start">
        <div className="mr-4">
          <div className="flex items-center justify-center w-12 h-12 text-purple-600 bg-purple-100 rounded-lg">
            <Image 
              src={`/api/placeholder/48/48`} 
              width={48} 
              height={48} 
              alt={`${title} icon`} 
              className="object-contain" 
            />
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="mb-4 text-gray-600">{description}</p>
          <a href={learnMoreLink} className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Stat: React.FC<StatProps> = ({ number, label, color = "text-purple-600" }) => {
  return (
    <div className="p-4 text-center">
      <p className={`text-4xl font-bold mb-2 ${color}`}>{number}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="relative p-6 bg-white shadow-sm rounded-xl">
      <div className="absolute flex items-center justify-center w-8 h-8 font-bold text-white bg-purple-600 rounded-full -top-4 -left-4">
        {number}
      </div>
      <h3 className="mt-2 mb-3 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ValueProp: React.FC<ValuePropProps> = ({ title, description, icon }) => {
  return (
    <div className="p-6 text-center bg-white rounded-lg">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full">
        <Image 
          src={`/api/placeholder/40/40`} 
          width={40} 
          height={40} 
          alt={`${title} icon`} 
          className="object-contain" 
        />
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Data
const services = [
  {
    title: "Social Media Marketing (SMM)",
    description: "Build robust presence across all major platforms through strategic content planning, community engagement, and targeted advertising to reach your specific audience.",
    icon: "socialMedia",
    learnMoreLink: "#"
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website visibility and ranking in search results with our comprehensive SEO strategies including keyword research, on-page optimization, and quality backlink building.",
    icon: "seo",
    learnMoreLink: "#"
  },
  {
    title: "Content Writing",
    description: "Engage your audience through compelling storytelling, informative articles, and SEO-friendly content that resonates with your audience and drives conversions.",
    icon: "content",
    learnMoreLink: "#"
  },
  {
    title: "Graphic Design",
    description: "Create stunning visual assets that capture your brand essence and communicate your message effectively across all digital platforms and marketing materials.",
    icon: "design",
    learnMoreLink: "#"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Strategy",
    description: "We start with strategy sessions, analyzing your current goals to create a digital success roadmap."
  },
  {
    number: "02",
    title: "Planning",
    description: "After mapping our roadmap, we plan each step with tasks and timelines, ensuring client collaboration."
  },
  {
    number: "03",
    title: "Execution",
    description: "After detailed planning, we execute strategies to create impactful content and launch targeted campaigns."
  },
  {
    number: "04",
    title: "Optimization",
    description: "In the final phase, we optimize content based on data, adjust insights to achieve your digital goals."
  }
];

const stats = [
  {
    number: "103%",
    label: "Average Organic Gain"
  },
  {
    number: "2x",
    label: "Conversion Improvement"
  },
  {
    number: "6%",
    label: "Return on Investment"
  },
  {
    number: "30%",
    label: "Traffic Increase"
  }
];

const valueProps = [
  {
    title: "Result Driven",
    description: "We deliver measurable success with clear metrics to track progress against your business goals.",
    icon: "results"
  },
  {
    title: "Collaboration",
    description: "We integrate your insights with our expertise through seamless communication throughout every project.",
    icon: "collaboration"
  },
  {
    title: "Innovation",
    description: "We're consistently exploring new tools, tech, and methods to keep your marketing both fresh and results-oriented.",
    icon: "innovation"
  }
];

const performanceStats = [
  {
    percentage: 90,
    label: "Client Retention Rate"
  },
  {
    percentage: 25,
    label: "Average Increase in Lead Generation"
  },
  {
    percentage: 50,
    label: "Average Increase in Website Traffic"
  },
  {
    percentage: 85,
    label: "Successful Digital Marketing Campaigns"
  }
];

const faqs = [
  {
    question: "What services does your digital marketing agency provide?",
    answer: "Our agency offers a comprehensive suite of digital marketing services including social media marketing, search engine optimization (SEO), pay-per-click advertising (PPC), content marketing, email marketing, web design and development, graphic design, and analytics reporting."
  },
  {
    question: "Can you customize a digital marketing strategy to fit my business goals and budget?",
    answer: "Absolutely! We believe in tailored solutions rather than one-size-fits-all approaches. Our team will work closely with you to understand your business objectives, target audience, and budget constraints before developing a customized strategy that aligns with your specific needs and goals."
  },
  {
    question: "How will digital marketing benefit my business over traditional methods?",
    answer: "Digital marketing offers several advantages over traditional methods, including better targeting capabilities, real-time performance tracking, higher ROI, greater flexibility to adjust campaigns, and the ability to reach customers where they spend most of their time - online. It also allows for more personalized and interactive engagement with your audience."
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer: "The timeline for seeing results varies depending on the strategies implemented. Some channels like PPC can drive immediate traffic, while SEO and content marketing are longer-term investments that typically show significant results within 3-6 months. We provide regular reports and updates so you can track progress throughout the process."
  },
  {
    question: "Is digital marketing suitable for small businesses?",
    answer: "Definitely! Digital marketing is highly scalable and can be adapted to businesses of all sizes. For small businesses, it provides a cost-effective way to compete with larger companies, reach targeted audiences, and grow your customer base without requiring massive budgets."
  },
  {
    question: "How do you ensure that your digital marketing strategies align with our brand identity and values?",
    answer: "We begin every client relationship with a thorough discovery phase to understand your brand voice, values, visual identity, and positioning. All marketing strategies and content we develop are created to authentically represent your brand while resonating with your target audience. We maintain ongoing communication to ensure alignment throughout our partnership."
  }
];