import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// TypeScript interface for blog post data
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  slug: string;
}

interface BlogSectionProps {
  blogPosts: BlogPost[];
}


const BlogSection: React.FC<BlogSectionProps> = ({ blogPosts }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-purple-500"></div>
            <span className="text-gray-600 text-sm font-medium">Our Blogs</span>
            <div className="h-px w-12 bg-purple-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Lastest & <span className="text-purple-500">Popular Blogs</span>
          </h2>
        </div>
      </div>

      {/* Tagline with See All button */}
      <div className="border border-purple-500 rounded-full py-4 px-6  flex items-center justify-between mb-12 mx-auto max-w-4xl">
        <p className="text-[#443d3d]">Tailored solutions addressing diverse business challenges</p>
        <button className="flex items-center text-[#443d3d]">
        <div className="ml-2 w-2 h-2 mr-2.5 rounded-full bg-purple-500"></div>
          <span>See All</span>
          
        </button>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 flex flex-col md:flex-row"
          >
            {/* Left side - Image */}
            <div className="md:w-2/6 relative">
              <div className="h-48 md:h-full w-full relative">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className=""
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="p-6 md:w-3/5 flex flex-col">
              <div className="mb-2">
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
              
              <h3 className="text-xl font-bold  mb-3">{post.title}</h3>
              
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <div className="mt-auto flex items-center gap-2">
               <div className="h-px w-12 bg-gray-500"></div>
                <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;