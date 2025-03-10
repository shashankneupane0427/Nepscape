import React from 'react';

const TechExpertiseSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gray-50 p-4 md:p-8 lg:p-16">
      {/* Left Content */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <div className="h-0.5 w-8 md:w-16 bg-purple-500"></div>
          <p className="text-[#443d3d] font-medium">Our Expertise</p>
          <div className="h-0.5 w-8 md:w-16 bg-purple-500"></div>
        </div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 mb-6 text-center md:text-left">
          <span className="text-[#443d3d]">Technologies We Rely On To </span>
          <span className="text-purple-500">Achieve Success</span>
        </h2>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">   
          <span className="text-[#443d3d] font-medium">Web Development</span>
          <div className="hidden md:block h-full w-px bg-gray-300"></div>
          <span className="text-[#443d3d] font-medium">App Development</span>
          <div className="hidden md:block h-full w-px bg-gray-300"></div>
          <span className="text-[#443d3d] font-medium">Database</span>
          <div className="hidden md:block h-full w-px bg-gray-300"></div>
          <span className="text-[#443d3d] font-medium">Cloud Platform</span>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-8">
          {/* First row */}
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-javascript-96.png" alt="JavaScript" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/node.png" alt="Node.js" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-python-96.png" alt="Python" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-96.png" alt="Django" className="w-12 h-12 md:w-13 md:h-14" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-html5-96.png" alt="HTML5" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-css3-96.png" alt="CSS3" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          
          {/* Second row */}
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-next.js-96.png" alt="Next.js" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-react-native-96_2lITedI.png" alt="React Native" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/php.png" alt="PHP" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-laravel-96.png" alt="Laravel" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-laravel-96.png" alt="Laravel" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-wordpress-96.png" alt="WordPress" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
        </div>
      </div>
      
      {/* Right Content - External img with Floating Icons */}
      <div className="w-full md:w-1/2 relative px-4 md:pr-8"> 
        <div className="absolute inset-0 transform -translate-y-0.5">
          <div className="w-3/4 h-3/4 mx-auto  rounded-full"></div>
        </div>
         
        <div className="relative z-10 flex justify-center items-center h-full">
          <div className="relative p-8 md:p-12 lg:p-20">
            {/* External img */}
            <img
              src="/illuss.png"
              alt="Developer working from home"
              className="relative z-10 pl-3.5 w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechExpertiseSection;