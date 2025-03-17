"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Footer from "@/components/Footer";

const blogPostsData = [
  {
    id: "1",
    title: "Best Website Design and Development Cost in Nepal",
    excerpt:
      "You must be wondering what may be the cost of Website design. Website development in Nepal especially the business owners and entrepreneurs...",
    date: "Jun 12, 2024",
    imageUrl: "/blog11.webp",
    slug: "website-design-development-cost-nepal",
    content: `
      <p><strong>You must be wondering what may be the cost of Website Design and Website Development in Nepal</strong>, especially if you're a <strong>business owner</strong> or <strong>entrepreneur</strong> looking to establish an <strong>online presence</strong>.  

Website development costs in Nepal vary significantly based on several **key factors**, including **website complexity, required features, design quality, and the expertise of the development team**. A well-designed website is not just an online platform but a **powerful marketing tool** that helps you attract more customers and grow your business.  

If you are planning to build a website, understanding the **different cost factors** will help you budget wisely and choose the right solution for your needs. Below, we explore the **major elements that influence website pricing**.</p>

---

<h2><strong>Factors That Influence Website Development Costs</strong></h2>

<h3><strong>1. Type of Website</strong></h3>
<p>Different types of websites have different development costs. The pricing depends on the <strong>size, functionality, and design</strong> complexity of the website. Here's a general breakdown:</p>

<ul>
  <li><strong>Basic Informational Website:</strong> NPR <strong>20,000 - 50,000</strong> (Ideal for small businesses and personal portfolios)</li>
  <li><strong>Business Website with Custom Features:</strong> NPR <strong>50,000 - 150,000</strong> (For companies needing additional functionalities such as forms, booking systems, or interactive elements)</li>
  <li><strong>E-commerce Website:</strong> NPR <strong>100,000 - 300,000+</strong> (Includes online store features like product catalog, shopping cart, and payment gateway integration)</li>
  <li><strong>Custom Web Application:</strong> NPR <strong>300,000+</strong> (Fully tailored solutions for enterprises, including advanced data management, dashboards, and automation)</li>
</ul>

<p>If your goal is to create a **simple website**, you can keep costs low by using templates and pre-built themes. However, if you need a **unique and feature-rich website**, investing in a custom-built platform is recommended. <strong>Choosing the right type of website is crucial for your business success!</strong></p>

    `,
  },
  {
    id: "2",
    title: "Best IT Company in Nepal 2024",
    excerpt:
      "The number of IT companies found in every corner of Nepal has been living proof that Nepal is growing in the IT sector...",
    date: "Jun 12, 2024",
    imageUrl: "/blog12.webp",
    slug: "best-it-company-nepal-2024",
    content: `
      <p><strong>The number of IT companies found in every corner of Nepal has been living proof that Nepal is growing in the IT sector</strong>. With technological advancements and digital transformation happening worldwide, Nepali IT companies are also stepping up their game to compete globally.</p>

      <p>In 2024, several IT companies in Nepal have distinguished themselves through innovation, service quality, client satisfaction, and contribution to the local tech ecosystem. This blog post highlights the <strong>best IT companies in Nepal</strong> that are making significant impacts and why they stand out from the competition.</p>

      ---

      <h2><strong>Top IT Companies in Nepal for 2024</strong></h2>

      <h3><strong>1. Selection Criteria</strong></h3>
      <p>We've evaluated companies based on the following factors:</p>
      <ul>
        <li><strong>Portfolio and Project Complexity</strong>: Range and sophistication of completed projects</li>
        <li><strong>Innovation and Technology Adoption</strong>: Use of cutting-edge technologies and approaches</li>
        <li><strong>Client Reviews and Satisfaction</strong>: Feedback from clients and long-term relationships</li>
        <li><strong>Contribution to Tech Community</strong>: Involvement in knowledge sharing and community building</li>
        <li><strong>Team Expertise and Size</strong>: Technical capabilities and human resources</li>
      </ul>

      <h3><strong>2. Leading IT Service Providers</strong></h3>
      <p>Based on our research and industry analysis, these companies have consistently delivered exceptional services:</p>

      <h4><strong>TechMinds Nepal</strong></h4>
      <p>Specializing in web development, mobile applications, and AI solutions, TechMinds has served over 200+ clients globally with a team of 50+ experts. Their client retention rate of 85% speaks volumes about their service quality.</p>

      <h4><strong>Digital Innovators</strong></h4>
      <p>Known for their innovative approaches in blockchain technology and fintech solutions, they've successfully implemented several groundbreaking projects for banking and financial institutions in Nepal and abroad.</p>

      <h4><strong>NepalTech Solutions</strong></h4>
      <p>With expertise in enterprise software development and system integration, NepalTech Solutions has become the go-to partner for large businesses and government organizations requiring complex technical infrastructure.</p>

      <h3><strong>3. Emerging Players</strong></h3>
      <p>These relatively newer companies are making significant strides:</p>
      <ul>
        <li><strong>CodeCraft Nepal</strong>: Specializing in mobile app development with innovative UI/UX approaches</li>
        <li><strong>CloudNep</strong>: Cloud infrastructure and DevOps services with certified professionals</li>
        <li><strong>AITech Nepal</strong>: Focused on AI and machine learning solutions for business intelligence</li>
      </ul>

      <h3><strong>4. IT Service Pricing in Nepal</strong></h3>
      <p>The cost of IT services in Nepal varies based on expertise and service type:</p>
      <ul>
        <li><strong>Web Development</strong>: NPR 50,000 - 500,000+</li>
        <li><strong>Mobile App Development</strong>: NPR 100,000 - 800,000+</li>
        <li><strong>Custom Software Development</strong>: NPR 300,000 - 2,000,000+</li>
        <li><strong>AI/ML Solutions</strong>: NPR 500,000 - 3,000,000+</li>
        <li><strong>IT Consulting</strong>: NPR 5,000 - 15,000 per hour</li>
      </ul>

      <h2><strong>Choosing the Right IT Partner for Your Business</strong></h2>
      <p>When selecting an IT company in Nepal, consider these tips:</p>
      <ol>
        <li>Evaluate their portfolio and case studies relevant to your industry</li>
        <li>Check client testimonials and reviews from multiple sources</li>
        <li>Assess their technical expertise and certifications</li>
        <li>Consider their communication style and responsiveness</li>
        <li>Compare pricing structures and payment terms</li>
      </ol>

      <p><strong>The right IT partner can significantly accelerate your business growth and digital transformation journey.</strong> Take time to research and meet with potential partners before making your decision.</p>

      <p>Are you working with any of these IT companies? Share your experience in the comments below!</p>
    `,
  }
];


const BlogPostDetail = () => {
  const params = useParams();
  const slug = params?.slug;
  
  const blogPost = blogPostsData.find((post) => post.slug === slug);
  
  if (!blogPost) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 mx-auto text-center bg-gray-50">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h1 className="mb-6 text-3xl font-bold text-gray-800">Blog Post Not Found</h1>
          <p className="mb-8 text-gray-600">The blog post you're looking for doesn't exist or has been moved.</p>
          <Link href="/blog" className="px-6 py-3 text-white transition duration-300 bg-purple-600 rounded-lg hover:bg-purple-700">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-72 md:h-96 lg:h-[500px] bg-gray-900">
        <Image 
          src={blogPost.imageUrl} 
          alt={blogPost.title} 
          fill 
          className="object-cover object-center opacity-80" 
          priority 
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/90">
          <div className="max-w-4xl px-6 text-center">
            <h1 className="mb-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              {blogPost.title}
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-gray-300">{blogPost.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl px-4 py-12 mx-auto">
        <div className="overflow-hidden bg-white shadow-lg rounded-2xl">
          <div className="px-6 pt-6">
            <div className="flex items-center justify-between">
              <Link href="/blog" className="flex items-center text-purple-600 transition hover:text-purple-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </Link>
              <div className="text-sm text-gray-500">{blogPost.date}</div>
            </div>
          </div>
          
          <div className="px-6 py-8 md:px-10 md:py-10">
            <article className="prose prose-lg text-gray-700 max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </article>
          </div>
          
          <div className="px-6 py-8 bg-gray-50 md:px-10">
            <h3 className="mb-4 text-xl font-bold text-gray-800">Share this article</h3>
            <div className="flex gap-4">
              <button className="p-3 text-white transition duration-200 bg-blue-600 rounded-full hover:bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.77,7.46H14.5V10.27h4.27V13.5H14.5v10.13h-3.5V13.5h-4.27V10.27h4.27V7.46c0-3.36,2.14-5.41,5.27-5.41h2.5v3.2h-2.5c-1.35,0-1.79,0.21-1.79,1.44V7.46z"/>
                </svg>
              </button>
              <button className="p-3 text-white transition duration-200 bg-blue-400 rounded-full hover:bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button className="p-3 text-white transition duration-200 bg-blue-800 rounded-full hover:bg-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
        <h3 className="mb-6 text-2xl font-bold text-gray-800">Related Articles</h3>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {blogPostsData
              .filter(post => post.id !== blogPost.id)
              .slice(0, 2)
              .map(post => (
                <Link 
                  href={`/blog/${post.slug}`} 
                  key={post.id}
                  className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
                >
                  <div className="relative w-full h-48">
                    <Image 
                      src={post.imageUrl} 
                      alt={post.title} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-2 text-xl font-bold text-gray-800">{post.title}</h4>
                    <p className="mb-4 text-gray-600">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      

      
      <Footer />
    </div>
  );
};

export default BlogPostDetail;