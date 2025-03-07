import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
  
      <div>
      <footer className="text-black py-12 pb-0 pt-0   mt-0  relative">
          {/* Connect Section */}
      <div
        className="block overflow-hidden text-start mb-12 bg-gray-50 "
        style={{
          // backgroundImage: "url(https://softbenz.com/static/site-assets/images/cta_bg1.png)",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxSizing: "border-box",
          color: "rgb(0, 0, 0)",
          fontFamily: "Poppins, sans-serif",
          fontSize: "16px",
          fontWeight: "400",
          height: "285.438px",
          lineHeight: "30px",
          paddingBottom: "65.35px",
          paddingTop: "65.35px",
          textSizeAdjust: "100%",
          unicodeBidi: "isolate",
          width: "100%",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
       
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <div className="container flex flex-col items-center justify-center px-0 mx-auto md:flex-row">
          {/* Left Section */}
          <div className="md:w-2/3">
            <div className="border-l-4 border-[#a46ede] pl-4">
              <h2 className="text-4xl font-bold leading-tight text-black">
                Let&apos;s <span className="text-black">connect</span>
                <span className="text-[#a46ede]"> and turn your vision into reality.</span>
              </h2>
            </div>
            <p className="mt-4 text-lg text-gray-600">
              We are available from 9:00 AM to 6:00 PM, Monday to Friday.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center justify-center mt-8 md:items-end md:mt-0">
            <p className="text-sm font-semibold tracking-wide text-gray-700">REACH OUT NOW!</p>

            {/* Phone number with WhatsApp link */}
            <a
              href="https://wa.me/9862973810"
              className="text-4xl font-bold text-[#a46ede] my-2 cursor-pointer"
              target="_blank"
            >
              9862973810
            </a>

            <a
              href="/contactus"
              className="bg-[#a46ede] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#8b5cf6] border border-[#a46ede] transition duration-300 font-semibold"
            >
              Let's Start Conversation
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Development Services Section */}
        <div className="pl-8">
          <h4 className="text-xl font-semibold mb-4">Development Services</h4>
          <ul>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">Website Development</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">App Development</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">System/Software Development</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">UI/UX</Link></li>
          </ul>
        </div>

        {/* Marketing Services Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Marketing Services</h4>
          <ul>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">Search Engine Optimization (SEO)</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">Social Media Marketing (SMM)</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">Graphic Design</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">Content Writing</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">Pay Per Click</Link></li>
            <li className="mb-2"><Link href="#" className="text-[#5d605d] hover:text-[#967bb6]">Digital Marketing</Link></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="pl-5">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2"><Link href="/about" className="text-[#5d605d] hover:text-[#967bb6]">About Us</Link></li>
            <li className="mb-2"><Link href="/services" className="text-[#5d605d] hover:text-[#967bb6]">Our Services</Link></li>
            <li className="mb-2"><Link href="/contact" className="text-[#5d605d] hover:text-[#967bb6]">Contact Us</Link></li>
            <li className="mb-2"><Link href="/blog" className="text-[#5d605d] hover:text-[#967bb6]">Blog</Link></li>
            <li className="mb-2"><Link href="/career" className="text-[#5d605d] hover:text-[#967bb6]">Career</Link></li>
            <li className="mb-2"><Link href="/our-work" className="text-[#5d605d] hover:text-[#967bb6]">Our Work</Link></li>
          </ul>
        </div>

        {/* Connect With Us Section */}
        <div className="text-black">
          <h4 className="text-xl font-semibold mb-6 text-center sm:text-left">Connect with Us</h4>
          <ul className="space-y-6">
            <li className="flex items-center text-lg text-[#5d605d] "><FaPhoneAlt className="mr-4   text-[#967bb6] text-2xl" />  <a href="tel:+9801848492" className="text-[#5d605d] hover:text-[#967bb6] hover:underline">9862973810</a></li>
            {/* <li className="flex items-center text-lg"><FaEnvelope className="mr-4   text-[#967bb6] text-2xl" />  <a href="mailto:sales@Nepscape.com" className="text-[#5d605d] hover:text-[#967bb6] hover:underline">sales@Nepscape.com</a></li> */}
            <li className="flex items-center text-lg text-[#5d605d] "><FaMapMarkerAlt className="mr-4   text-[#967bb6] text-2xl" /> Putalisadak, Kathmandu</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#967bb6] mt-12 pt-6 text-center text-sm text-black">
        <div className="flex justify-center space-x-6">
          <Link href="/faq" className="hover:text-[#967bb6]">FAQ</Link>
          <span className="mx-2">|</span>
          <Link href="/terms" className="hover:text-[#967bb6]">Terms & Conditions</Link>
          <span className="mx-2">|</span>
          <Link href="/privacy" className="hover:text-[#967bb6]">Privacy Policy</Link>
      
        </div>
      </div>
    </footer>
        
    {/* Social Media Section */}
    <div className="bg-[#967bb6] py-4 mt-6 text-center text-white flex justify-between items-center px-6">
    <span className="text-white text-lg">© 2025 Softbenz Infosys. All Rights Reserved.</span>
    <div className="flex space-x-4">
      <a href="https://wa.me/9862973810" target="_blank" className="text-white text-2xl"><FaWhatsapp /></a>
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
