"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegHandshake, FaSearchDollar } from "react-icons/fa"; // Additional icons for hover effect

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPricingHovered, setIsPricingHovered] = useState(false); // State for hover effect on Pricing

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true); // Always keep navbar visible
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white shadow-md py-3 px-6 w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Nepscape Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-black font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-[#ef4444] font-medium transition duration-300 ease-in-out transform hover:scale-105"
            >
              Home
            </Link>
          </li>

          {/* About Dropdown */}
          <li className="relative group">
            <Link
              href="#"
              className="hover:text-[#ef4444] flex items-center transition duration-300 ease-in-out transform hover:scale-105"
            >
              About <MdKeyboardArrowDown className="ml-1" />
            </Link>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-64">
              <li className="mb-3">
                <h4 className="font-semibold text-black">Introduction</h4>
                <p className="text-sm text-gray-600">
                  Nepscape is an innovative tech company delivering cutting-edge digital solutions.
                </p>
              </li>
              <li className="mb-3">
                <h4 className="font-semibold text-black">How We Work</h4>
                <p className="text-sm text-gray-600">
                  Our team collaborates to build impactful digital experiences.
                </p>
              </li>
              <li className="mb-3">
                <h4 className="font-semibold text-black">Our Team</h4>
                <p className="text-sm text-gray-600">
                  A group of passionate experts driving technology forward.
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-black">Our Activities</h4>
                <p className="text-sm text-gray-600">
                  Engaging in continuous learning and innovation.
                </p>
              </li>
            </ul>
          </li>

          {/* Service Dropdown */}
          <li className="relative group">
            <Link
              href="#"
              className="hover:text-[#ef4444] flex items-center transition duration-300 ease-in-out transform hover:scale-105"
            >
              Service <MdKeyboardArrowDown className="ml-1" />
            </Link>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-72">
              <li className="mb-3">
                <h4 className="font-semibold text-black">Development</h4>
                <p className="text-sm text-gray-600">
                  Creating digital experiences through coding, design, and user interaction principles.
                </p>
              </li>
              <li className="mb-3">
                <h4 className="font-semibold text-black">Marketing</h4>
                <p className="text-sm text-gray-600">
                  Promotion of products or services via online channels and strategies.
                </p>
              </li>
              <li className="mb-3">
                <h4 className="font-semibold text-black">Website Development</h4>
                <p className="text-sm text-gray-600">
                  Specialized Custom Website Development Services.
                </p>
              </li>
              <li className="mb-3">
                <h4 className="font-semibold text-black">App Development</h4>
                <p className="text-sm text-gray-600">
                  Building Custom Apps for Seamless User Experience.
                </p>
              </li>
              <li className="mb-3">
                <h4 className="font-semibold text-black">System/Software Development</h4>
                <p className="text-sm text-gray-600">
                  Cutting-edge System/Software Development Solutions.
                </p>
              </li>
              <li>
                <h4 className="font-semibold text-black">UI/UX</h4>
                <p className="text-sm text-gray-600">
                  Design UI/UX interfaces for effortless user interaction.
                </p>
              </li>
            </ul>
          </li>

          {/* Pricing with Hover Effect */}
          <li className="relative group">
  <Link
    href="#"
    className="hover:text-[#ef4444] flex items-center transition duration-300 ease-in-out transform hover:scale-105"
  >
    Pricing <MdKeyboardArrowDown className="ml-1" />
  </Link>
  <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-72">
    <li className="mb-3">
      <h4 className="font-semibold text-black">SEO Package</h4>
      <p className="text-sm text-gray-600">
        Typically offers a range of services including keyword research.
      </p>
    </li>
    <li className="mb-3">
      <h4 className="font-semibold text-black">Social Media Package</h4>
      <p className="text-sm text-gray-600">
        Typically offers a range of services tailored to clients' needs, including social media marketing.
      </p>
    </li>
    {/* Add more pricing services as needed */}
  </ul>
</li>


          <li>
            <Link
              href="/work"
              className="hover:text-[#ef4444] transition duration-300 ease-in-out transform hover:scale-105"
            >
              Our Work
            </Link>
          </li>
          <li>
            <Link
              href="/career"
              className="hover:text-[#ef4444] transition duration-300 ease-in-out transform hover:scale-105"
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-[#ef4444] transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Contact Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-[#ef4444] font-semibold text-lg">
            <FaPhoneAlt className="mr-2" />
            <span>9801848492</span>
          </div>
          <button className="border-2 border-[#ef4444] text-[#ef4444] px-4 py-2 rounded-full hover:bg-[#ef4444] hover:text-white transition hover:cursor-pointer">
            Quick Enquiry
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
