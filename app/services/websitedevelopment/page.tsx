'use client';

import { FaCode, FaPaintBrush, FaServer } from 'react-icons/fa';

const services = [
  { title: 'Frontend Development', icon: <FaCode size={40} />, description: 'Building fast and interactive user interfaces with modern frameworks.' },
  { title: 'UI/UX Design', icon: <FaPaintBrush size={40} />, description: 'Creating visually appealing and user-friendly designs.' },
  { title: 'Backend Development', icon: <FaServer size={40} />, description: 'Developing scalable and secure server-side applications.' },
];

export default function WebsiteDevelopment() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <div className="flex flex-col items-center">
            {service.icon}
            <h3 className="text-lg font-semibold mt-2">{service.title}</h3>
          </div>
          <p className="text-center text-gray-600 mt-2">{service.description}</p>
        </div>
      ))}
    </div>
  );
}