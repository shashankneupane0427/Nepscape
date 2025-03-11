import React from 'react';
import { Clock, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';

const CompanyStats = () => {
  return (
    <div className="bg-purple-50 p-4 md:p-8 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
      {/* Background Circle with Gradient */}
      <div
        className="absolute right-0 top-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 opacity-80"
        style={{ transform: 'translate(30%, -30%)' }}
      />
      
      {/* Who We Are Section */}
      <div className="bg-purple-100 p-4 md:p-8 rounded-lg shadow-sm z-10 w-full max-w-md mb-8 lg:mb-0 lg:mr-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-4">Who We Are</h2>
        <p className="text-sm md:text-base text-gray-800 mb-4 md:mb-6">
          We are a top IT company in Nepal, committed to providing comprehensive 
          digital solutions to enhance your online presence. Let's join hands and work 
          together to take your brand to the next level with the best IT services.
        </p>
        <Link href="/aboutus">
        <button className="bg-purple-500 cursor-pointer hover:bg-purple-600 text-white font-medium py-2 px-4 md:px-6 rounded-full transition duration-300">
          About Us
        </button>
        </Link>
      </div>
      
      {/* Numbers Section */}
      <div className="flex flex-col z-10 mb-6 lg:mb-0">
        <div className="text-purple-500 font-bold text-4xl md:text-5xl lg:text-6xl transform lg:-rotate-90 text-center lg:text-left">
          NUMBERS
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 z-10 w-full max-w-4xl lg:max-w-md">
        {/* Years of Experience Card */}
        <div className="bg-purple-100 p-4 md:p-6 rounded-lg shadow-sm relative mb-2 md:mb-0 lg:mb-4">
          <div className="flex flex-row md:flex-col items-center md:items-start">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mr-2 md:mr-0 md:mb-1">4+</h3>
            <p className="text-sm md:text-base text-gray-700">
              Years of Experience In This Field
            </p>
          </div>
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-white p-2 rounded-full">
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
          </div>
        </div>
        
     
        
        {/* Projects Completed Card */}
        <div className="bg-purple-100 p-4 md:p-6 rounded-lg shadow-sm relative">
          <div className="flex flex-row md:flex-col items-center md:items-start">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mr-2 md:mr-0 md:mb-1">50+</h3>
            <p className="text-sm md:text-base text-gray-700">
              Projects Completed In The Past Years
            </p>
          </div>
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-white p-2 rounded-full">
            <ClipboardCheck className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;