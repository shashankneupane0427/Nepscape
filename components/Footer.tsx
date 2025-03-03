import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="text-black py-12 pb-0 px-6 relative">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Development Services Section */}
        <div className="pl-8">
          <h4 className="text-xl font-semibold mb-4">Development Services</h4>
          <ul>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#ef4444]">Website Development</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#ef4444]">App Development</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#ef4444]">System/Software Development</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#ef4444]">UI/UX</Link></li>
          </ul>
        </div>

        {/* Marketing Services Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Marketing Services</h4>
          <ul>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#ef4444]">Search Engine Optimization (SEO)</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#ef4444]">Social Media Marketing (SMM)</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#ef4444]">Graphic Design</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#ef4444]">Content Writing</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#ef4444]">Pay Per Click</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#ef4444]">Digital Marketing</Link></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="pl-5">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2"><Link href="/about" className="text-[#5d605d] hover:text-[#ef4444]">About Us</Link></li>
            <li className="mb-2"><Link href="/services" className="text-[#5d605d] hover:text-[#ef4444]">Our Services</Link></li>
            <li className="mb-2"><Link href="/contact" className="text-[#5d605d] hover:text-[#ef4444]">Contact Us</Link></li>
            <li className="mb-2"><Link href="/blog" className="text-[#5d605d] hover:text-[#ef4444]">Blog</Link></li>
            <li className="mb-2"><Link href="/career" className="text-[#5d605d] hover:text-[#ef4444]">Career</Link></li>
            <li className="mb-2"><Link href="/our-work" className="text-[#5d605d] hover:text-[#ef4444]">Our Work</Link></li>
          </ul>
        </div>

        {/* Connect With Us Section */}
        <div className="text-black">
          <h4 className="text-xl font-semibold mb-6 text-center sm:text-left">Connect with Us</h4>
          <ul className="space-y-6">
            <li className="flex items-center text-lg text-[#5d605d] "><FaPhoneAlt className="mr-4   text-[#ef4444] text-2xl" />  <a href="tel:+9801848492" className="text-[#5d605d] hover:text-[#ef4444] hover:underline">9801848492</a>, 01-4796657</li>
            <li className="flex items-center text-lg"><FaEnvelope className="mr-4   text-[#ef4444] text-2xl" />  <a href="mailto:sales@Nepscape.com" className="text-[#5d605d] hover:text-[#ef4444] hover:underline">sales@Nepscape.com</a></li>
            <li className="flex items-center text-lg text-[#5d605d] "><FaMapMarkerAlt className="mr-4   text-[#ef4444] text-2xl" /> Putalisadak, Kathmandu</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#ef4444] mt-12 pt-6 text-center text-sm text-black">
        <div className="flex justify-center space-x-6">
          <Link href="/faq" className="hover:text-[#ef4444]">FAQ</Link>
          <span className="mx-2">|</span>
          <Link href="/terms" className="hover:text-[#ef4444]">Terms & Conditions</Link>
          <span className="mx-2">|</span>
          <Link href="/privacy" className="hover:text-[#ef4444]">Privacy Policy</Link>
      
        </div>
      </div>
    </footer>
        
    {/* Social Media Section */}
    <div className="bg-[#ef4444] py-4 mt-6 text-center text-white flex justify-between items-center px-6">
    <span className="text-white text-lg">© 2025 Softbenz Infosys. All Rights Reserved.</span>
    <div className="flex space-x-4">
      <a href="https://wa.me/9812316018" target="_blank" className="text-white text-2xl"><FaWhatsapp /></a>
      <a href="#" target="_blank" className="text-white text-2xl"><FaFacebook /></a>
      <a href="#" target="_blank" className="text-white text-2xl"><FaInstagram /></a>
      <a href="#" target="_blank" className="text-white text-2xl"><FaLinkedin /></a>
      <a href="#" target="_blank" className="text-white text-2xl"><FaTwitter /></a>
      <a href="#" target="_blank" className="text-white text-2xl"><FaYoutube /></a>
    </div>
        </div>
    </div>



  );
};

export default Footer;