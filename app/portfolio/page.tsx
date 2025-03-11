"use client"

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [projects] = useState<Project[]>([
    {
      id: 1,
      name: "NEPAL'S NO.1 OUTDOOR ADVERTISING COMPANY",
      category: "Website Development",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      name: "JustKleek E-commerce",
      category: "Mobile Application",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      name: "Nepal Tourism Portal",
      category: "Graphics Design",
      image: "/images/project3.jpg",
    },
  ]);

  const categories = ['All', 'Website Development', , 'Graphics Design'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-purple-50">
      <Head>
        <title>Our Portfolio | Recent Work</title>
        <meta name="description" content="Showcase of our recent projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center p-5 mb-3">
            <div className="h-0.5 w-16 bg-purple-600"></div>
            <h3 className="text-gray-600 font-medium px-4">Our Portfolio</h3>
            <div className="h-0.5 w-16 bg-purple-600"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Some Of Our <span className="text-purple-600">Recent Work</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-8 py-3 text-lg rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md group transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-purple-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-center px-6">
                    <h3 className="text-white text-xl font-bold mb-2">{project.name}</h3>
                    <span className="inline-block bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}