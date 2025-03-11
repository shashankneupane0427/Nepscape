'use client';

import { SiInstagram, SiFacebook, SiGitter, SiLinkedin, SiPinterest, SiTiktok } from 'react-icons/si';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const SocialMediaMarketing = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
    const toggleFaq = (index: number) => {
      if (openFaqIndex === index) {
        setOpenFaqIndex(null);
      } else {
        setOpenFaqIndex(index);
      }
    };

    const stats = [
        { number: '500+', label: 'Clients Served' },
        { number: '1200+', label: 'Campaigns Launched' },
        { number: '25+', label: 'Social Media Experts' },
    ];

    const features = [
        { 
            title: 'Satisfaction Guarantee',
            description: 'Assured satisfaction regarding your social media impact.',
            svg: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM20 34L10 24L13.414 20.586L20 27.172L34.586 12.586L38 16L20 34Z" fill="#7d2fd0"/>
                </svg>
            )
        },
        {
            title: 'Best Service',
            description: 'We offer affordable price for committed social media results.',
            svg: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4L30.31 16.76L44 19.48L34 29.24L36.52 43.02L24 36.56L11.48 43.02L14 29.24L4 19.48L17.69 16.76L24 4Z" fill="#7d2fd0"/>
                </svg>
            )
        },
        {
            title: 'Marketing Expertise',
            description: 'Experience in effective social media marketing strategies.',
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
            title: 'Healthcare And Hospitals',
            description: 'In healthcare marketing, we excel at creating social media content that positions your organization as a leader. Building patient trust and attracting new clients.',
            svg: (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38 16V40M26 28H50" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M55 38.5V31C55 28.2386 52.7614 26 50 26H26C23.2386 26 21 28.2386 21 31V55C21 57.7614 23.2386 60 26 60H50C52.7614 60 55 57.7614 55 55V46.5" stroke="#7d2fd0" strokeWidth="3"/>
                    <path d="M60 30L45 45" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M60 45L45 30" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            )
        },
        {
            title: 'Educational Industries',
            description: 'Elevate your educational institution with our targeted social media strategies. We build engaging content and showcase your unique learning value.',
            svg: (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 16L12 28L40 40L68 28L40 16Z" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 34V50L40 58L56 50V34" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 28V44" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: 'Travel And Others',
            description: 'Specializing in creating captivating social media campaigns that inspire wanderlust and drive bookings, we\'ll elevate your travel online presence together!',
            svg: (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 12L16 32H22V52H36V40H44V52H58V32H64L40 12Z" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M30 32H50" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: 'Share Brokers',
            description: 'In share brokerage, credibility is crucial. We create compelling social media content to establish your brokerage as a trusted partner, attracting new investors effectively.',
            svg: (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="16" width="60" height="48" rx="3" stroke="#7d2fd0" strokeWidth="3"/>
                    <path d="M10 26H70" stroke="#7d2fd0" strokeWidth="3"/>
                    <path d="M20 40H60" stroke="#7d2fd0" strokeWidth="3"/>
                    <path d="M20 50H50" stroke="#7d2fd0" strokeWidth="3"/>
                    <path d="M25 16L40 8L55 16" stroke="#7d2fd0" strokeWidth="3"/>
                    <circle cx="15" cy="21" r="2" fill="#7d2fd0"/>
                    <circle cx="22" cy="21" r="2" fill="#7d2fd0"/>
                    <circle cx="29" cy="21" r="2" fill="#7d2fd0"/>
                </svg>
            )
        }
    ];

    const socialMediaPlatforms = [
        { name: 'Instagram', icon: <SiInstagram className="text-4xl text-purple-600" /> },
        { name: 'Facebook', icon: <SiFacebook className="text-4xl text-purple-600" /> },
        { name: 'Twitter', icon: <SiGitter className="text-4xl text-purple-600" /> },
        { name: 'LinkedIn', icon: <SiLinkedin className="text-4xl text-purple-600" /> },
        { name: 'Pinterest', icon: <SiPinterest className="text-4xl text-purple-600" /> },
        { name: 'TikTok', icon: <SiTiktok className="text-4xl text-purple-600" /> }
    ];

    const roadmapSteps = [
        { 
            step: '1. Initial Consultation', 
            description: 'Understand your specific goals, values, and organizational identity through our detailed consultation process.',
            svg: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="25" r="10" stroke="#7d2fd0" strokeWidth="2"/>
                    <path d="M15 50C15 43.3726 21.7157 36 30 36C38.2843 36 45 43.3726 45 50" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            )
        },
        { 
            step: '2. Audience Analysis', 
            description: 'Analyze your target market using audience insights to create content tailored to their preferences & behaviors.',
            svg: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 40L25 35L35 45L45 40" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="15" y="15" width="30" height="15" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
                    <path d="M20 20H40" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M20 25H35" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            )
        },
        { 
            step: '3. Platform Selection', 
            description: 'Identify which social media platforms align with your audience demographics and business goals.',
            svg: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="20" width="15" height="15" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
                    <rect x="35" y="20" width="15" height="15" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
                    <rect x="20" y="40" width="15" height="15" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
                </svg>
            )
        },
        { 
            step: '4. Content Calendar', 
            description: 'Develop a structured monthly content plan to ensure consistent and organized posting.',
            svg: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="15" width="40" height="35" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
                    <path d="M10 25H50" stroke="#7d2fd0" strokeWidth="2"/>
                    <path d="M20 10V20" stroke="#7d2fd0" strokeWidth="2"/>
                    <path d="M40 10V20" stroke="#7d2fd0" strokeWidth="2"/>
                    <path d="M18 33H22" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M28 33H32" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M38 33H42" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18 40H22" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M28 40H32" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M38 40H42" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            )
        },
        { 
            step: '5. Creative Design', 
            description: 'Create compelling graphics and visuals that resonate with your brand & audience.',
            svg: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 25C15 18.3726 20.3726 15 27 15H33C39.6274 15 45 18.3726 45 25V25C45 31.6274 39.6274 35 33 35H27C20.3726 35 15 31.6274 15 25V25Z" stroke="#7d2fd0" strokeWidth="2"/>
                    <path d="M25 45L35 45" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M20 40L40 40" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="25" cy="25" r="3" fill="#7d2fd0"/>
                    <circle cx="35" cy="25" r="3" fill="#7d2fd0"/>
                </svg>
            )
        },
        { 
            step: '6. Consistent Posting', 
            description: 'Implement regular posting schedule to keep your audience engaged and informed.',
            svg: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15" y="15" width="30" height="30" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
                    <path d="M15 25H45" stroke="#7d2fd0" strokeWidth="2"/>
                    <path d="M22 20H25" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M35 20H38" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M30 35V30" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M30 30L35 30" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            )
        },
        { 
            step: '7. Paid Advertising', 
            description: 'Amplify engagement & results through targeted ads to reach marketing objectives.',
            svg: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 15L40 35H20L30 15Z" stroke="#7d2fd0" strokeWidth="2"/>
                    <path d="M20 40H40" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M25 45H35" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M30 35V25" stroke="#7d2fd0" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            )
        },
        { 
            step: '8. Analysis and Reporting', 
            description: 'Analyze campaign results, generate detailed reports, and optimize future strategies.',
            svg: (
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="15" width="40" height="30" rx="2" stroke="#7d2fd0" strokeWidth="2"/>
                    <path d="M15 25H45" stroke="#7d2fd0" strokeWidth="2"/>
                    <rect x="15" y="30" width="5" height="10" rx="1" fill="#7d2fd0" fillOpacity="0.3"/>
                    <rect x="25" y="30" width="5" height="10" rx="1" fill="#7d2fd0" fillOpacity="0.5"/>
                    <rect x="35" y="30" width="5" height="10" rx="1" fill="#7d2fd0" fillOpacity="0.7"/>
                </svg>
            )
        }
    ];

    const smmFeatures = [
        {
            title: 'Strategic Approach',
            description: 'We develop a social media marketing plan around your goals and target audience for maximum results.',
            svg: (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 8L8 24V56H24V40H40V56H56V24L32 8Z" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 40L8 32" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M40 40L56 32" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M32 8V24H48L56 24" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            title: 'Creative Content',
            description: 'We excel in creating compelling, resonant content that sets you apart.',
            svg: (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="12" width="48" height="40" rx="4" stroke="#7d2fd0" strokeWidth="3"/>
                    <path d="M8 22H56" stroke="#7d2fd0" strokeWidth="3"/>
                    <path d="M16 17h4" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M26 17h4" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M16 32h24" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M16 40h16" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            )
        },
        {
            title: 'Data-Driven Insights',
            description: 'We use advanced analytics to generate insights, optimizing your social media impact.',
            svg: (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="16" width="48" height="32" rx="4" stroke="#7d2fd0" strokeWidth="3"/>
                    <path d="M16 36L24 28L32 36L48 24" stroke="#7d2fd0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="16" cy="36" r="3" fill="#7d2fd0"/>
                    <circle cx="24" cy="28" r="3" fill="#7d2fd0"/>
                    <circle cx="32" cy="36" r="3" fill="#7d2fd0"/>
                    <circle cx="48" cy="24" r="3" fill="#7d2fd0"/>
                </svg>
            )
        },
        {
            title: 'Exceptional Customer Service',
            description: 'As a top SMM agency, we prioritize customer satisfaction with dedicated support at digital success.',
            svg: (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="20" r="12" stroke="#7d2fd0" strokeWidth="3"/>
                    <path d="M14 56C14 45.5066 22.0589 37 32 37C41.9411 37 50 45.5066 50 56" stroke="#7d2fd0" strokeWidth="3"/>
                    <circle cx="32" cy="20" r="5" fill="#7d2fd0" fillOpacity="0.4"/>
                </svg>
            )
        }
    ];

    const packages = [
        {
            title: "Basic SMM Package",
            price: "Rs 28,000",
            period: "per month",
            subtitle: "Starting at",
            description: "For new local established companies wanting to grow",
            features: [
                "Social Profile Setup",
                "Content Creation",
                "Basic Analytics",
                "Social Media Management"
            ]
        },
        {
            title: "Standard SMM Package",
            price: "Rs 38,000",
            period: "per month",
            subtitle: "Starting at",
            description: "For those looking to grow their business/brand",
            features: [
                "Content Creation",
                "Engagement Strategy",
                "Moderate Analytics",
                "Social Media Management",
                "Community Building"
            ]
        },
        {
            title: "Premium SMM Package",
            price: "Rs 55,000",
            period: "per month",
            subtitle: "Starting at",
            description: "For those looking to sell products or build a brand",
            features: [
                "Advanced Strategy",
                "Content Creation",
                "Comprehensive Analytics",
                "Premium Features",
                "Influencer Collaborations",
                "Paid Advertising Management"
            ]
        }
    ];
    
    const faqs = [
        { 
            question: "What are your SMM packages?",
            answer: "We offer three main packages: Basic (Rs 28,000/month), Standard (Rs 38,000/month), and Premium (Rs 55,000/month). Each is designed for different business needs and goals, from local establishments to major brands looking to scale. All packages include content creation, social media management, and analytics, with additional features at higher tiers."
        },
        { 
            question: "Which industries do you provide SMM services for?",
            answer: "We provide specialized SMM services across multiple industries including Healthcare and Hospitals, Educational Institutions, Travel and Tourism, Financial Services (Share Brokers), E-commerce, Retail, Food and Beverage, Real Estate, and more. Our strategies are customized to address the unique challenges and opportunities within each sector."
        },
        { 
            question: "Which social media platforms do you work with?",
            answer: "We work with all major social media platforms including Instagram, Facebook, Twitter, LinkedIn, Pinterest, TikTok, YouTube, and Snapchat. We recommend the most suitable platforms based on your target audience demographics, business goals, and industry specifics."
        },
        { 
            question: "How do you create a social media marketing plan and strategy?",
            answer: "Our social media marketing strategy development follows a comprehensive 8-step process: Initial consultation to understand your business goals, audience analysis, platform selection, content calendar development, creative design implementation, consistent posting schedule, paid advertising campaigns, and ongoing analysis with reporting. This structured approach ensures alignment with your business objectives while maintaining flexibility for optimization."
        },
        { 
            question: "How do you determine the most suitable social media platforms for my business?",
            answer: "We determine the most suitable platforms by analyzing your target audience demographics, business objectives, industry benchmarks, and competitive landscape. We consider factors like age, location, income level, interests of your ideal customers, along with the nature of your content and products/services. This research-backed approach ensures you invest time and resources where your audience is most active."
        },
        { 
            question: "Do you provide paid advertising on social media?",
            answer: "Yes, we offer comprehensive paid social media advertising services across all major platforms. Our approach includes audience targeting, creative development, budget management, A/B testing, and performance optimization. We provide detailed reports on campaign performance and continuously refine targeting to maximize your ROI."
        },
        { 
            question: "Is Social Media Marketing and Digital Marketing the same?",
            answer: "No, they're not the same. Social Media Marketing (SMM) is a specialized subset of Digital Marketing that focuses exclusively on social platforms like Instagram, Facebook, Twitter, etc. Digital Marketing is broader, encompassing SMM along with SEO, email marketing, content marketing, PPC advertising, and more. We offer both integrated digital marketing solutions and specialized SMM services depending on your needs."
        },
        { 
            question: "Why should I choose Social Media Marketing for my business?",
            answer: "Social Media Marketing offers significant benefits including increased brand awareness, direct customer engagement, targeted advertising options, competitor insights, cost-effectiveness compared to traditional marketing, measurable ROI, enhanced customer service opportunities, and valuable market research. In today's digital landscape, a strong social media presence is essential for businesses of all sizes to remain competitive and connect with their audience where they spend significant time."
        }
    ];
        
    const recentWorks = [
        { 
            image: "/smm/work1.jpg", 
            alt: "Educational Institution SMM Example",
            title: "Visa Life Prep"
        },
        { 
            image: "/smm/work2.jpg", 
            alt: "Professional Services SMM Example",
            title: "Panchagram English"
        },
        { 
            image: "/smm/work3.jpg", 
            alt: "Healthcare SMM Example",
            title: "Physicians Group"
        }
    ];

    const trustedCompanies = [
        { name: 'Venus', logo: '/clients/venus.png' },
        { name: 'Sikder', logo: '/clients/sikder.png' },
        { name: 'Service', logo: '/clients/service.png' },
        { name: 'QA', logo: '/clients/qa.png' },
        { name: 'Pashchima', logo: '/clients/pashchima.png' },
        { name: 'Food', logo: '/clients/food.png' }
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
                                Social Media Marketing
                            </h1>
                            <p className="mb-8 text-lg md:text-xl">
                                Build a strong online presence and engage with your targeted audience. Transform your social media presence with the expertise of SMM specialists.
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
                            <div className="p-1 bg-white rounded-lg bg-opacity-20 backdrop-blur-sm">
                                <div className="overflow-hidden rounded-lg">
                                    <Image
                                        src="/images/smm-hero.jpg"
                                        alt="Social Media Marketing"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="container px-6 mx-auto md:px-12 lg:px-16">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-8 text-center transition-all bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="mb-4 text-4xl font-bold text-purple-600">{stat.number}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="container px-6 mx-auto md:px-12 lg:px-16">
                    <div className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">Why Choose Our Social Media Marketing</h2>
                        <p className="text-lg text-gray-600">We help businesses establish a strong presence across all social media platforms with our specialized marketing services.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <div key={index} className="p-6 transition-all bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
                                <div className="mb-4">{feature.svg}</div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-white">
                <div className="container px-6 mx-auto md:px-12 lg:px-16">
                    <div className="max-w-3xl mx-auto mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">Industries We Serve</h2>
                        <p className="text-lg text-gray-600">Our social media marketing strategies are tailored to the unique needs of various industries.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <div key={index} className="p-6 transition-all bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
                                <div className="flex justify-center mb-4">{service.svg}</div>
                                <h3 className="mb-3 text-xl font-semibold text-center text-gray-800">{service.title}</h3>
                                <p className="text-center text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Media Platforms */}
            <section className="py-16 bg-gray-50">
                <div className="container px-6 mx-auto md:px-12 lg:px-16">
                    <div className="max-w-3xl mx-auto mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">Platforms We Specialize In</h2>
                        <p className="text-lg text-gray-600">We create engaging content and manage campaigns across all major social platforms.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
                        {socialMediaPlatforms.map((platform, index) => (
                            <div key={index} className="flex flex-col items-center p-6 transition-all bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
                                <div className="mb-4">{platform.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-800">{platform.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roadmap Section */}
            <section className="py-16 bg-white">
                <div className="container px-6 mx-auto md:px-12 lg:px-16">
                    <div className="max-w-3xl mx-auto mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">Our Social Media Marketing Process</h2>
                        <p className="text-lg text-gray-600">We follow a structured approach to create and implement effective social media strategies.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {roadmapSteps.slice(0, 4).map((step, index) => (
                            <div key={index} className="p-6 transition-all bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
                                <div className="flex justify-center mb-4">{step.svg}</div>
                                <h3 className="mb-3 text-xl font-semibold text-center text-gray-800">{step.step}</h3>
                                <p className="text-center text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
                        {roadmapSteps.slice(4).map((step, index) => (
                            <div key={index} className="p-6 transition-all bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
                                <div className="flex justify-center mb-4">{step.svg}</div>
                                <h3 className="mb-3 text-xl font-semibold text-center text-gray-800">{step.step}</h3>
                                <p className="text-center text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="container px-6 mx-auto md:px-12 lg:px-16">
                    <div className="max-w-3xl mx-auto mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">Benefits of Our Social Media Marketing</h2>
                        <p className="text-lg text-gray-600">We deliver comprehensive social media marketing solutions to drive your business growth.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {smmFeatures.map((feature, index) => (
                            <div key={index} className="p-6 transition-all bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
                                <div className="flex justify-center mb-4">{feature.svg}</div>
                                <h3 className="mb-3 text-xl font-semibold text-center text-gray-800">{feature.title}</h3>
                                <p className="text-center text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 bg-white">
                <div className="container px-6 mx-auto md:px-12 lg:px-16">
                    <div className="max-w-3xl mx-auto mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">Our Social Media Marketing Packages</h2>
                        <p className="text-lg text-gray-600">Choose the package that aligns with your business goals and budget.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {packages.map((pkg, index) => (
                            <div key={index} className="overflow-hidden transition-all bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
                                <div className="p-6 text-center bg-purple-50">
                                    <h3 className="mb-2 text-2xl font-bold text-gray-800">{pkg.title}</h3>
                                    <p className="mb-4 text-gray-600">{pkg.description}</p>
                                    <div className="flex flex-col items-center justify-center mb-4">
                                        <span className="text-sm text-gray-500">{pkg.subtitle}</span>
                                        <span className="text-3xl font-bold text-purple-600">{pkg.price}</span>
                                        <span className="text-sm text-gray-500">{pkg.period}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        {pkg.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center">
                                                <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                </svg>
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-6 mt-6 text-center border-t border-gray-100">
                                        <Link href="/contact" className="inline-block w-full px-6 py-3 text-white transition-all bg-purple-600 rounded-lg hover:bg-purple-700">
                                            Get Started
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Work Section */}
            <section className="py-16 bg-gray-50">
                <div className="container px-6 mx-auto md:px-12 lg:px-16">
                    <div className="max-w-3xl mx-auto mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">Our Recent Work</h2>
                        <p className="text-lg text-gray-600">Check out some of our successful social media marketing campaigns.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {recentWorks.map((work, index) => (
                            <div key={index} className="overflow-hidden transition-all bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={work.image}
                                        alt={work.alt}
                                        width={400}
                                        height={300}
                                        className="object-cover w-full h-64"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="mb-2 text-xl font-semibold text-gray-800">{work.title}</h3>
                                    <Link href="/portfolio" className="text-purple-600 hover:text-purple-700">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trusted Clients */}
            <section className="py-16 bg-white">
                <div className="container px-6 mx-auto md:px-12 lg:px-16">
                    <div className="max-w-3xl mx-auto mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">Trusted By</h2>
                        <p className="text-lg text-gray-600">We've helped numerous businesses achieve their social media marketing goals.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
                        {trustedCompanies.map((company, index) => (
                            <div key={index} className="flex items-center justify-center p-4 transition-all bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={120}
                                    height={80}
                                    className="object-contain w-auto h-16"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="container px-6 mx-auto md:px-12 lg:px-16">
                    <div className="max-w-3xl mx-auto mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">Find answers to common questions about our social media marketing services.</p>
                    </div>

                    <div className="max-w-4xl mx-auto divide-y divide-gray-200">
                        {faqs.map((faq, index) => (
                            <div key={index} className="py-5">
                                <button
                                    className="flex items-center justify-between w-full text-left"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                                    <svg
                                        className={`w-6 h-6 text-purple-600 transform ${openFaqIndex === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                {openFaqIndex === index && (
                                    <div className="mt-2 text-gray-600">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 text-white bg-gradient-to-r from-purple-500 to-indigo-600">
                <div className="container px-6 mx-auto md:px-12 lg:px-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Transform Your Social Media Presence?</h2>
                        <p className="mb-8 text-lg">
                            Contact us today to discuss how our social media marketing services can help your business grow.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="px-8 py-3 font-medium text-purple-600 transition-all bg-white rounded-lg hover:bg-gray-100">
                                Get Started Today
                            </Link>
                            <Link href="/portfolio" className="px-8 py-3 font-medium transition-all bg-white border border-white rounded-lg bg-opacity-20 hover:bg-opacity-30">
                                View Our Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SocialMediaMarketing;