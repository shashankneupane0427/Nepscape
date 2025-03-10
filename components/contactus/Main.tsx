"use client";
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPencilAlt,
  FaMapMarkerAlt,
  FaHeadset,
  FaBriefcase,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Main Contact Form Component
const Main = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-purple-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            We are here for You. Can we help?
          </h1>
          <p className="text-purple-600 text-lg">
            Fill out the form below and we'll get back to you soon
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 bg-white rounded-xl shadow-lg p-6"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Full Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaUser className="text-purple-500" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    className="w-full py-3 pl-10 pr-4 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaEnvelope className="text-purple-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className="w-full py-3 pl-10 pr-4 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    required
                  />
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaPhone className="text-purple-500 " />
                  </div>
                  <div className="flex">
                    <select className="bg-purple-100 pl-7 text-purple-800 border border-purple-300 rounded-l-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300">
                      <option >+977</option>
                      <option>+1</option>
                      <option>+44</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full py-3  pl-3.5 pr-4 border border-purple-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaPencilAlt className="text-purple-500" />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject *"
                    className="w-full py-3 pl-10 pr-4 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="relative mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message *"
                rows={5}
                  className="w-full py-3 px-4 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Illustration Section - Increased Size */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 flex items-center justify-center"
          >
            <img
              src="contactus.png"
              alt="Contact illustration"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Contact Information Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone Number */}
          <ContactInfoCard
            icon={<FaPhone size={24} />}
            title="Our Phone Number"
            content="+977 9862973810"
            delay={0.2}
          />

          {/* Email */}
          <ContactInfoCard
            icon={<FaEnvelope size={24} />}
            title="Our Email"
            content="info@company.com"
            delay={0.4}
          />

          {/* PO Box */}
          <ContactInfoCard
            icon={<FaHeadset size={24} />}
            title="PO Box Number"
            content="GPO - 5051"
            delay={0.6}
          />

          {/* Office */}
          <ContactInfoCard
            icon={<FaMapMarkerAlt size={24} />}
            title="Our Office"
            content="Putalisadak, Kathmandu"
            delay={0.8}
          />
        </div>

        {/* Support Sections */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <SupportCard
            title="For Sales"
            phone="+977 9862973810"
            icon={<FaBriefcase size={20} />}
            delay={0.3}
          />

          <SupportCard
            title="For Career"
            phone="+977 9827394116"
            icon={<FaUser size={20} />}
            delay={0.5}
          />

          <SupportCard
            title="For Support"
            phone="+977 9862973810"
            icon={<FaHeadset size={20} />}
            delay={0.7}
          />
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center mt-16 gap-4"
        >
          <SocialIcon icon={<FaFacebookF />} />
          <SocialIcon icon={<FaInstagram />} />
          <SocialIcon icon={<FaLinkedinIn />} />
          <SocialIcon icon={<FaTwitter />} />
          <SocialIcon icon={<FaYoutube />} />
        </motion.div>
      </div>
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  delay: number;
}

const ContactInfoCard: React.FC<ContactInfoProps> = ({ icon, title, content, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-lg"
    >
      <div className="bg-purple-100 p-4 rounded-full mb-4 text-purple-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-purple-800 mb-2">{title}</h3>
      <p className="text-purple-700">{content}</p>
    </motion.div>
  );
};

interface SupportCardProps {
  title: string;
  phone: string;
  icon: React.ReactNode;
  delay: number;
}

const SupportCard: React.FC<SupportCardProps> = ({ title, phone, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-purple-700 text-white rounded-xl shadow-md p-6 text-center transform transition-all duration-300 hover:bg-purple-800"
    >
      <div className="flex justify-center mb-4">
        <div className="bg-purple-500 p-3 rounded-full">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex items-center justify-center gap-2">
        <FaPhone />
        <span className="text-lg">{phone}</span>
      </div>
    </motion.div>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="bg-purple-600 text-white p-3 rounded-full cursor-pointer"
    >
      {icon}
    </motion.div>
  );
};

export default Main;
