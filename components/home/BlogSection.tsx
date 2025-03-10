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
    <section className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-6 md:mb-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <div className="h-px w-8 md:w-12 bg-purple-500"></div>
            <span className="text-gray-600 text-xs md:text-sm font-medium">Our Blogs</span>
            <div className="h-px w-8 md:w-12 bg-purple-500"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 px-2">
            Our Lastest & <span className="text-purple-500">Popular Blogs</span>
          </h2>
        </div>
      </div>

      {/* Tagline with See All button */}
      <div className="border border-purple-500 rounded-full py-3 px-4 md:py-4 md:px-6 flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 mx-auto max-w-4xl gap-3 md:gap-0">
        <p className="text-[#443d3d] text-sm md:text-base text-center md:text-left">
          Tailored solutions addressing diverse business challenges
        </p>
        <button className="flex items-center text-[#443d3d] text-sm md:text-base">
          <div className="w-2 h-2 mr-2 rounded-full bg-purple-500"></div>
          <span>See All</span>
        </button>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
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
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="p-4 md:p-6 md:w-4/6 flex flex-col">
              <div className="mb-1 md:mb-2">
                <p className="text-gray-500 text-xs md:text-sm">{post.date}</p>
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 line-clamp-2">{post.title}</h3>

              <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-3">{post.excerpt}</p>

              <div className="mt-auto flex items-center gap-2">
                <div className="h-px w-8 md:w-12 bg-gray-500"></div>
                <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs md:text-sm font-medium"
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