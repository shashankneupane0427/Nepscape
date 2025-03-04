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
      {/* Connect Section */}
      <div
        className="block overflow-hidden text-start"
        style={{
          backgroundImage: "url(https://softbenz.com/static/site-assets/images/cta_bg1.png)",
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
          margin: "auto",
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
              href="https://wa.me/9812316018"
              className="text-4xl font-bold text-[#a46ede] my-2 cursor-pointer"
              target="_blank"
            >
              9812316018
            </a>

            <a
              href="/contact"
              className="bg-[#a46ede] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#8b5cf6] border border-[#a46ede] transition duration-300 font-semibold"
            >
              Let's Start Conversation
            </a>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative px-6 py-12 pb-0 text-black animate-fadeIn">
        <div className="container grid grid-cols-1 gap-12 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Development Services */}
          <div className="pl-8">
            <h4 className="mb-4 text-xl font-semibold">Development Services</h4>
            <ul>
              {["Website Development", "App Development", "System/Software Development", "UI/UX"].map(
                (service, index) => (
                  <li key={index} className="mb-2">
                    <Link href="#" className="text-[#5d605d] hover:text-[#a46ede]">
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Marketing Services */}
          <div>
            <h4 className="mb-4 text-xl font-semibold">Marketing Services</h4>
            <ul>
              {["SEO", "SMM", "Graphic Design", "Content Writing", "Pay Per Click", "Digital Marketing"].map(
                (service, index) => (
                  <li key={index} className="mb-2">
                    <Link href="#" className="text-[#5d605d] hover:text-[#a46ede]">
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="pl-5">
            <h4 className="mb-4 text-xl font-semibold">Quick Links</h4>
            <ul>
              {["About Us", "Our Services", "Contact Us", "Blog", "Career", "Our Work"].map((link, index) => (
                <li key={index} className="mb-2">
                  <Link
                    href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-[#5d605d] hover:text-[#a46ede]"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="text-black">
            <h4 className="mb-6 text-xl font-semibold text-center sm:text-left">Connect with Us</h4>
            <ul className="space-y-6">
              <li className="flex items-center text-lg text-[#5d605d]">
                <FaPhoneAlt className="mr-4 text-[#a46ede] text-2xl" />
                <a href="tel:+9812316018" className="hover:text-[#a46ede] hover:underline">
                  9812316018 , 01-4796657
                </a>
              </li>
              <li className="flex items-center text-lg">
                <FaEnvelope className="mr-4 text-[#a46ede] text-2xl" />
                <a href="mailto:sales@Nepscape.com" className="hover:text-[#a46ede] hover:underline">
                  sales@Nepscape.com
                </a>
              </li>
              <li className="flex items-center text-lg text-[#5d605d]">
                <FaMapMarkerAlt className="mr-4 text-[#a46ede] text-2xl" /> Putalisadak, Kathmandu
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#a46ede] mt-12 pt-6 text-center text-sm text-black">
  <div className="flex justify-center space-x-6">
    {[
      { href: "/FAQ", label: "FAQ" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/privacy", label: "Privacy Policy" },
    ].map((item, index, arr) => (
      <span key={index} className="flex items-center space-x-2">
        <Link href={item.href} className="hover:text-[#a46ede]">
          {item.label}
        </Link>
        {index < arr.length - 1 && <span className="text-gray-500">|</span>}
      </span>
    ))}
  </div>
</div>

      </footer>

      {/* Social Media Section */}
<div className="bg-[#a46ede] py-4 mt-6 text-center text-white flex justify-between items-center px-6 animate-slideUp">
  <span className="text-lg text-white">© 2025 Softbenz Infosys. All Rights Reserved.</span>
  
  <div className="flex space-x-6 animate-fadeInUp">
    {/* Updated social media links */}
    <a 
      href="https://wa.me/9812316018" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-2xl text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12"
    >
      <FaWhatsapp />
    </a>
    
    <a 
      href="https://www.facebook.com/yourprofile" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-2xl text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12"
    >
      <FaFacebook />
    </a>
    
    <a 
      href="https://www.instagram.com/yourprofile" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-2xl text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12"
    >
      <FaInstagram />
    </a>
    
    <a 
      href="https://www.linkedin.com/in/yourprofile" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-2xl text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12"
    >
      <FaLinkedin />
    </a>
    
    <a 
      href="https://twitter.com/yourprofile" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-2xl text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12"
    >
      <FaTwitter />
    </a>
    
    <a 
      href="https://www.youtube.com/c/yourchannel" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-2xl text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12"
    >
      <FaYoutube />
    </a>
  </div>
</div>

    </div>
  );
};

export default Footer;
