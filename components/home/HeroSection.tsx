"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image"

function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Add parallax effect for decorative elements
    const handleMouseMove = (e: any) => {
      const decorElements = document.querySelectorAll(".decor-element");
      decorElements.forEach((elem) => {
        const speed: any = elem.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pt-16 overflow-hidden">
      <div className="relative h-[70vh] md:h-[80vh]  bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-100 m-4 md:m-9 rounded-3xl pt-52 pb-60 md:rounded-none md:rounded-tr-[5rem] md:rounded-bl-[5rem] flex flex-col md:flex-row  transition-all duration-500">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl md:rounded-none md:rounded-tr-[5rem] md:rounded-bl-[5rem]">
          <div
            className="decor-element absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full opacity-10 animate-pulse"
            data-speed="2"
          ></div>
          <div
            className="decor-element absolute top-1/3 right-1/4 w-40 h-40 bg-indigo-400 rounded-full opacity-10 animate-blob animation-delay-4000"
            data-speed="3"
          ></div>
          <div
            className="decor-element absolute bottom-10 left-1/4 w-48 h-48 bg-violet-500 rounded-full opacity-10 animate-blob animation-delay-2000"
            data-speed="1"
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-200 opacity-50"></div>
        </div>

        {/* Text Content */}
        <div
          className={`md:w-1/2 p-8 md:p-12 h-full flex flex-col justify-center transform ${
            isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          } transition-all duration-700 ease-out relative z-10`}
        >
          <div className="absolute -left-3 top-1/4 h-20 w-1 bg-gradient-to-b from-purple-400 to-indigo-600 rounded-full"></div>
          <span className="uppercase tracking-wider text-xs font-semibold text-purple-700 mb-2 animate-pulse">
            Premier IT Solutions
          </span>

          <h1 className="text-3xl md:text-5xl text-gray-800 font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Transform
            </span>{" "}
            your vision into a Digital Reality
          </h1>

          <p className="text-purple-900 mb-2 font-medium">
            The most innovative IT company in Nepal
          </p>

          <p className="text-gray-600 mb-8 transform transition-all duration-700 delay-200 ease-out max-w-md">
            We blend creativity with cutting-edge technology to deliver
            solutions that empower your business in the digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium h-12 px-8 rounded-full shadow-lg hover:shadow-purple-300/50 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0">
              <span className="flex items-center justify-center">
                Let`&apos;`s get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>

            <button className="relative overflow-hidden border-2 border-purple-500 text-purple-700 font-medium h-12 px-8 rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 group">
              <span className="relative z-10 flex items-center justify-center">
                Discover our work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-5-5 5-5"
                  />
                </svg>
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-full transition-all duration-500"></span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div
          className={`flex justify-center items-center transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } transition-all duration-700 delay-300 ease-out relative z-10`}
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-300 to-indigo-400 opacity-70 blur-2xl animate-pulse"></div>
            <div className="absolute -inset-6 rounded-full border-2 border-purple-200 opacity-30 animate-spin-slow"></div>
            <Image
              src="heroPicture.png"
              alt="IT Solutions"
              className="h-[35vh] md:h-[45vh] w-auto object-contain relative z-10 drop-shadow-2xl transform transition-transform duration-500 hover:scale-105 filter"
            />
          </div>
        </div>
      </div>

      {/* Additional CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: scale(1) rotate(0deg);
          }
          33% {
            transform: scale(1.1) rotate(2deg);
          }
          66% {
            transform: scale(0.9) rotate(-2deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s forwards;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default HeroSection;
