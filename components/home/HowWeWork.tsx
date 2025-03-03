import React from 'react';

interface WorkflowStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

const HowWeWork: React.FC = () => {
  const workflowSteps: WorkflowStep[] = [
    {
      id: "01",
      number: "01",
      title: "Requirement Gathering",
      description: "We start our collaboration by collecting client requirements, listing and compiling them. This helps us build the process from scratch to deliver results aligned with your goals."
    },
    {
      id: "02",
      number: "02",
      title: "Plan & Resources",
      description: "After gathering requirements, we devise a strategic path and select resources. As the best IT company in Nepal, we offer clients a roadmap, laying the groundwork for a successful project."
    },
    {
      id: "03",
      number: "03",
      title: "Design & Develop",
      description: "In the design and development phase, we turn strategic ideas into digital products that are visually appealing, technically robust, focusing on user experience and functionality."
    },
    {
      id: "04",
      number: "04",
      title: "Quality Assurance",
      description: "In this phase, we rigorously test and validate to ensure all elements work correctly and meet standards, delivering the desired user experience. Our team tests each aspect for reliability."
    },
    {
      id: "05",
      number: "05",
      title: "Deployment",
      description: "Once the product meets standards, we deploy it, releasing product or updates on servers. This ensures our products are delivered seamlessly and efficiently."
    },
    {
      id: "06",
      number: "06",
      title: "Support & Maintenance",
      description: "In the final stage, we maintain systems to ensure smooth operation, security, and reliability. Optimization keeps performance high and client satisfaction focused on operational excellence."
    }
  ];

  return (
    <div className="bg-white container mx-auto py-10 px-4">
      <div className="text-center mb-8">
        <p className="text-[#443d3d] inline-block py-1 px-8 border-[#967bb6]">How We Work</p>
        <h2 className="text-4xl font-bold mt-2 text-[#443d3d]">Enjoy Seamless Service With <span className="text-[#967bb6]">Our Easy Steps!</span></h2>
      </div>
      
      <div className="border border-purple-400 rounded-full py-4 px-6  flex items-center justify-between mb-12 mx-auto max-w-4xl">
        <p className="text-[#443d3d]">Efficient workflow from requirements gathering to support and maintenance</p>
        <button className="flex items-center text-[#443d3d]">
        <div className="ml-2 w-2 h-2 mr-2.5 rounded-full bg-[#967bb6]"></div>
          <span>See All</span>
          
        </button>
      </div>
      
      <div className="space-y-8">
        {workflowSteps.map((step) => (
          <div key={step.id} className="flex flex-col md:flex-row border-b pb-8">
            <div className="md:w-1/6 pr-4">
              <div className="text-6xl font-bold text-[#443d3d] opacity-75  p-4 rounded-lg inline-block">{step.number}</div>
            </div>
            <div className="md:w-1/3 pr-4">
              <h3 className="text-3xl font-bold text-[#443d3d]">{step.title}</h3>
            </div>
            <div className="md:w-1/2">
              <p className="">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;