import React from 'react';

const Footer: React.FC = () => {
  return (
    <div>
      {/* Connect Section */}
      <div className="px-6 py-12 bg-white border-2 border-red-500">
  <div className="container flex flex-col mx-auto md:flex-row">
    <div className="mb-6 md:mb-0 md:pr-12">
      <h2 className="mb-4 text-3xl font-bold">
        Let's <span className="text-[#4CAF50]">connect</span> and turn your vision into reality.
      </h2>
      <p className="text-[#5d605d] mb-4">We are available from 9:00 AM to 6:00 PM, Monday to Friday.</p>
    </div>
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold text-[#4CAF50] mb-4">9801848492</div>
      <a href="/contact" className="bg-[#4CAF50] text-white px-6 py-3 rounded-full hover:bg-[#45a049]">
        Let's Start Conversation
      </a>
    </div>
  </div>
</div>


      <footer className="relative px-6 py-12 pb-0 text-black">
        <div className="container grid grid-cols-1 gap-12 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Development Services Section */}
          <div className="pl-8">
            <h4 className="mb-4 text-xl font-semibold">Development Services</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-[#5d605d] hover:text-[#ef4444]">Website Development</a></li>
              <li className="mb-2"><a href="#" className="text-[#5d605d] hover:text-[#ef4444]">App Development</a></li>
              <li className="mb-2"><a href="#" className="text-[#5d605d] hover:text-[#ef4444]">System/Software Development</a></li>
              <li className="mb-2"><a href="#" className="text-[#5d605d] hover:text-[#ef4444]">UI/UX</a></li>
            </ul>
          </div>

          {/* Marketing Services Section */}
          <div>
            <h4 className="mb-4 text-xl font-semibold">Marketing Services</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-[#5d605d] hover:text-[#ef4444]">Search Engine Optimization (SEO)</a></li>
              <li className="mb-2"><a href="#" className="text-[#5d605d] hover:text-[#ef4444]">Social Media Marketing (SMM)</a></li>
              <li className="mb-2"><a href="#" className="text-[#5d605d] hover:text-[#ef4444]">Graphic Design</a></li>
              <li className="mb-2"><a href="#" className="text-[#5d605d] hover:text-[#ef4444]">Content Writing</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="pl-5">
            <h4 className="mb-4 text-xl font-semibold">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="/about" className="text-[#5d605d] hover:text-[#ef4444]">About Us</a></li>
              <li className="mb-2"><a href="/services" className="text-[#5d605d] hover:text-[#ef4444]">Our Services</a></li>
              <li className="mb-2"><a href="/contact" className="text-[#5d605d] hover:text-[#ef4444]">Contact Us</a></li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div className="text-black">
            <h4 className="mb-6 text-xl font-semibold text-center sm:text-left">Connect with Us</h4>
            <ul className="space-y-6">
              <li className="flex items-center text-lg">
                📞 <a href="tel:+9801848492" className="text-[#5d605d] hover:text-[#ef4444] hover:underline">9801848492</a>
              </li>
              <li className="flex items-center text-lg">
                ✉️ <a href="mailto:sales@nepscape.com" className="text-[#5d605d] hover:text-[#ef4444] hover:underline">sales@nepscape.com</a>
              </li>
              <li className="flex items-center text-lg">
                📍 Putalisadak, Kathmandu
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#ef4444] mt-12 pt-6 text-center text-sm text-black">
          <div className="flex justify-center space-x-6">
            <a href="/faq" className="hover:text-[#ef4444]">FAQ</a>
            <span className="mx-2">|</span>
            <a href="/terms" className="hover:text-[#ef4444]">Terms & Conditions</a>
            <span className="mx-2">|</span>
            <a href="/privacy" className="hover:text-[#ef4444]">Privacy Policy</a>
          </div>
        </div>
      </footer>

      {/* Social Media Section */}
      <div className="bg-[#ef4444] py-4 mt-6 text-center text-white flex flex-col sm:flex-row justify-between items-center px-6">
        <span className="text-lg">© 2025 Softbenz Infosys. All Rights Reserved.</span>
        <div className="flex mt-3 space-x-4 sm:mt-0">
          <a href="https://wa.me/9812316018" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">WhatsApp</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
