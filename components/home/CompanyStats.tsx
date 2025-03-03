import React from 'react';
import { Clock, Users, ClipboardCheck } from 'lucide-react';

const CompanyStats: React.FC = () => {
  return (
    <div className="bg-red-50 p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Background Circle with Gradient */}
      <div 
        className="absolute right-0 top-0 w-96 h-96 rounded-full bg-gradient-to-br from-red-200 to-red-400 opacity-80"
        style={{ transform: 'translate(30%, -30%)' }}
      />
      
      {/* Who We Are Section */}
      <div className="bg-red-100 p-8 rounded-lg shadow-sm z-10 max-w-md mb-8 md:mb-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
        <p className="text-gray-800 mb-6">
          We are a top IT company in Nepal, committed to providing comprehensive 
          digital solutions to enhance your online presence. Let`s join hands and work 
          together to take your brand to the next level with the best IT services.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
          About Us
        </button>
        
      </div>
      
      {/* Numbers Section */}
      <div className="flex flex-col z-10">
        <div className="text-red-500 font-bold text-6xl transform -rotate-90 mb-4 hidden md:block">
          NUMBERS
        </div>
        <div className="text-red-500 font-bold text-4xl md:hidden mb-4">
          NUMBERS
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 z-10">
        {/* Years of Experience Card */}
        <div className="bg-red-100 p-7 rounded-lg shadow-sm relative mb-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-1">6+</h3>
          <p className="text-gray-700 text-center">
            Years of Experience In This Field
          </p>
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full">
            <Clock className="w-5 h-5 text-red-500" />
          </div>
        </div>
        
        {/* Team Members Card */}
        <div className="bg-red-100 p-6 rounded-lg shadow-sm relative mb-4">
          <h3 className="text-3xl font-bold text-gray-900 mb-1">80+</h3>
          <p className="text-gray-700 text-center">
            Skilled Team Members
          </p>
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full">
            <Users className="w-5 h-5 text-red-500" />
          </div>
        </div>
        
        {/* Projects Completed Card */}
        <div className="bg-red-100 p-6 rounded-lg shadow-sm relative">
          <h3 className="text-3xl font-bold text-gray-900 mb-1">400+</h3>
          <p className="text-gray-700 text-center">
            Projects Completed In The Past Years
          </p>
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full">
            <ClipboardCheck className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>    
    </div>
  );
};

export default CompanyStats;