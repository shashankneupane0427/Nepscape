import React from "react";

function HeroSection() {
  return (
    <div>
      <div className="h-[80vh] md:h-[60vh] bg-[#ef4444]/20 m-4 md:m-9 rounded-4xl md:rounded-none md:rounded-tr-4xl flex ">
        <div className="md:w-[50%] p-5 h-[100%] flex flex-col">
          <div className="text-3xl text-[#443d3d] font-bold pt-96 md:pt-48 w-full flex items-center ">
            <div>
              Transform your vision into a Digital Reality with the best IT
              company in Nepal
            </div>
          </div>
          <div className="flex gap-5 pt-20 ">
            <div>
              <button className="border-red-800 h-[30px] w-[170px] border-2 flex justify-center items-center cursor-pointer rounded-4xl">
                Let's get Started
              </button>
            </div>
            <div>
              <button className="border-red-800 h-[30px] w-[170px] border-2 flex justify-center items-center cursor-pointer rounded-4xl">
                Discover our work
              </button>
            </div>
          </div>
        </div>
        <div>images here</div>
      </div>
    </div>
  );
}

export default HeroSection;
