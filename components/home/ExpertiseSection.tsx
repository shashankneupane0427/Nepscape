import React from 'react';

const TechExpertiseSection = () => {
  return (
    <div className="flex items-center justify-between w-full bg-purple-50 p-16">
      {/* Left Content */}
      <div className="w-1/2">
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-16 bg-purple-500"></div>
          <p className="text-[#443d3d;] font-medium">Our Expertise</p>
          <div className="h-0.5 w-16 bg-purple-500"></div>
        </div>
        
        <h2 className="text-4xl font-bold mt-4 mb-6">
          <span className="text-[#443d3d;]">Technologies We Rely On To </span>
          <span className="text-purple-500">Achieve Success</span>
        </h2>
        
        <div className="flex gap-4 mb-8">
          <span className="text-purple-500 font-medium">Web Development</span>
          <div className="h-full w-px bg-gray-300"></div>
          <span className="text-[#443d3d;] font-medium">App Development</span>
          <div className="h-full w-px bg-gray-300"></div>
          <span className="text-[#443d3d;] font-medium">Database</span>
          <div className="h-full w-px bg-gray-300"></div>
          <span className="text-[#443d3d;] font-medium">Cloud Platform</span>
        </div>
        
        <div className="grid grid-cols-6 gap-8">
          {/* First row */}
          <div className="flex justify-center">
          <img src="https://softbenz.com/media/technology/icons8-javascript-96.png" alt="Node.js" className="w-20 h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/node.png" alt="Node.js" className="w-16 h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-python-96.png" alt="Python" className="w-16 h-16" />
          </div>
          <div className="flex justify-center">
          <img src="https://softbenz.com/media/technology/icons8-django-a-high-level-python-web-framework-that-encourages-rapid-development-96.png" alt="Node.js" className="w-13 h-14" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-html5-96.png" alt="Node.js" className="w-16 h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-css3-96.png" alt="Python" className="w-16 h-16" />
          </div>
          
          {/* Second row */}
          <div className="flex justify-center">
          <img src="https://softbenz.com/media/technology/icons8-next.js-96.png" alt="React" className="w-16 h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-react-native-96_2lITedI.png" alt="React" className="w-16 h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/php.png" alt="PHP" className="w-16 h-16" />
          </div>
          <div className="flex justify-center">
          <img src="https://softbenz.com/media/technology/icons8-laravel-96.png" alt="React" className="w-16 h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-laravel-96.png" alt="React" className="w-16 h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://softbenz.com/media/technology/icons8-wordpress-96.png" alt="PHP" className="w-16 h-16" />
          </div>
        </div>
      </div>
      
      {/* Right Content - External Image with Floating Icons */}
<div className="w-1/2 relative  pr-8"> {/* Added right padding */}
  <div className="absolute inset-0 transform -translate-y-0.5"> {/* Moved up slightly */}
    <div className="w-3/4 h-3/4 mx-auto bg-purple-100 rounded-full"></div> {/* Made circle smaller (3/4 of original) */}
  </div>
         
  <div className="relative z-10 flex justify-center items-center h-full">
    <div className="relative ml-8 p-20">
      {/* External Image */}
      <img
        src="/ext.png"
        alt="Developer working from home"
        className="relative z-10"
      />
             
      
     
    </div>
  </div>
</div>
    </div>
  );
};

export default TechExpertiseSection;