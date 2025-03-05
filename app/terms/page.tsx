import React from "react";
import Head from "next/head";
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

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Nepscape</title>
        <meta name="description" content="Read the terms and conditions of Nepscape before using our services." />
      </Head>

      {/* Hero Section */}
      <section
        className="relative text-black bg-[rgb(240,250,242)] py-20 px-8"
        style={{
          backgroundImage: "url(https://softbenz.com/static/site-assets/images/vector/6.png)",
          backgroundPosition: "50% 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          borderTopRightRadius: "41.824px",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#a46ede]">Terms and Conditions</h1>
          <p className="mt-4 text-lg text-gray-700">
            Please read the following terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <main className="container px-6 py-12 mx-auto text-black">
        <section className="space-y-8 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold text-[#a46ede]">Welcome to Nepscape!</h2>
          <p className="text-gray-700">
            These Terms and Conditions govern your use of Nepscape Pvt. Ltd.'s website, accessible at [your website URL].
            By accessing or using our website, you agree to comply with these terms. If you do not agree with any part
            of these terms, please do not continue using our website.
          </p>

          <h3 className="text-xl font-semibold text-[#a46ede] mt-6">Definitions</h3>
          <p className="text-gray-700">
            - <strong>"Client," "You," "Your"</strong>: Refers to the individual accessing or using the website. <br />
            - <strong>"Company," "We," "Our," "Us"</strong>: Refers to Nepscape Pvt. Ltd. <br />
            - <strong>"Party," "Parties"</strong>: Refers to both the Client and the Company.
          </p>

          <h3 className="text-xl font-semibold text-[#a46ede] mt-6">Cookies</h3>
          <p className="text-gray-700">
            Our website uses cookies to enhance your experience. By using Nepscape, you consent to our use of cookies
            in accordance with our Privacy Policy. Cookies help improve functionality and personalize content. Third-party
            affiliates may also use cookies.
          </p>

          <h3 className="text-xl font-semibold text-[#a46ede] mt-6">Intellectual Property Rights</h3>
          <p className="text-gray-700">
            Unless explicitly stated otherwise, Nepscape Pvt. Ltd. and its licensors own all intellectual property rights
            on this website. You may use the website for personal purposes but must not: <br />
            - Republish, sell, or redistribute website content <br />
            - Reproduce, copy, or modify content without authorization <br />
            - Use content for commercial purposes without prior permission
          </p>

          <h3 className="text-xl font-semibold text-[#a46ede] mt-6">User Contributions</h3>
          <p className="text-gray-700">
            Users may post comments or share content in certain sections of the website. Nepscape does not pre-moderate
            comments but reserves the right to remove content that is: <br />
            - Unlawful, defamatory, offensive, or misleading <br />
            - Infringing on third-party rights <br />
            - Used for spam, advertising, or solicitation <br />
            By posting content, you grant Nepscape Pvt. Ltd. a non-exclusive right to use, distribute, and display your
            contributions.
          </p>

          <h3 className="text-xl font-semibold text-[#a46ede] mt-6">Linking to Our Website</h3>
          <p className="text-gray-700">
            Certain organizations, such as government agencies, search engines, and news organizations, may link to our
            website without prior approval. Others may request permission to link, provided that the link: <br />
            - Is not deceptive or misleading <br />
            - Does not imply sponsorship, endorsement, or affiliation <br />
            - Fits within the context of the linking site <br />
            We reserve the right to request the removal of any links that violate our terms.
          </p>

          <h3 className="text-xl font-semibold text-[#a46ede] mt-6">Frames and Embedded Content</h3>
          <p className="text-gray-700">
            Without prior written permission, you may not create frames around our web pages that alter the presentation
            or visual appearance of our website.
          </p>

          <h3 className="text-xl font-semibold text-[#a46ede] mt-6">Content Liability</h3>
          <p className="text-gray-700">
            We do not assume responsibility for content appearing on external sites linking to or from Nepscape. By linking
            to our website, you agree to protect and defend us against claims arising from such content.
          </p>

          <h3 className="text-xl font-semibold text-[#a46ede] mt-6">Modifications and Updates</h3>
          <p className="text-gray-700">
            Nepscape Pvt. Ltd. reserves the right to update these Terms and Conditions at any time. Continued use of the
            website after changes constitutes acceptance of the revised terms.
          </p>

          <h3 className="text-xl font-semibold text-[#a46ede] mt-6">Disclaimer</h3>
          <p className="text-gray-700">
            To the fullest extent permitted by law, Nepscape Pvt. Ltd. excludes all warranties and liability regarding
            website use, accuracy, or availability. We shall not be held responsible for any direct or indirect damages
            arising from website use.
          </p>

          <h3 className="text-xl font-semibold text-[#a46ede] mt-6">Governing Law</h3>
          <p className="text-gray-700">
            These Terms and Conditions are governed by the laws of Nepal. Any disputes shall be subject to the jurisdiction
            of Nepalese courts.
          </p>

          <p className="mt-6 text-gray-700">
            For any questions, contact us at <a href="mailto:sales@nepscape.com" className="text-[#a46ede]">sales@nepscape.com</a>.
          </p>
        </section>
      </main>

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

      {/* Footer */}
      <footer className="bg-[#a46ede] text-white py-12">
        <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold">Development Services</h4>
            <ul className="mt-4 space-y-2">
              {["Website Development", "App Development", "Software Development", "UI/UX"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-gray-300">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Marketing Services</h4>
            <ul className="mt-4 space-y-2">
              {["SEO", "SMM", "Graphic Design", "Content Writing", "Digital Marketing"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-gray-300">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {["About Us", "Services", "Contact Us", "Blog", "Career"].map((item, index) => (
                <li key={index}>
                  <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="hover:text-gray-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold">Connect with Us</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3" /> <a href="tel:+9812316018">9812316018 , 01-4796657</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" /> <a href="mailto:sales@nepscape.com">sales@nepscape.com</a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-3" /> Putalisadak, Kathmandu
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 mt-8 text-center border-t border-white">
          <div className="flex justify-center space-x-4">
            <Link href="/FAQ" className="hover:text-gray-300">FAQ</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-gray-300">Terms & Conditions</Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
          </div>
          <p className="mt-4 text-sm">© 2025 Nepscape. All Rights Reserved.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-6 space-x-6">
          {[
            { href: "https://wa.me/9812316018", icon: <FaWhatsapp /> },
            { href: "https://www.facebook.com/yourprofile", icon: <FaFacebook /> },
            { href: "https://www.instagram.com/yourprofile", icon: <FaInstagram /> },
            { href: "https://www.linkedin.com/in/yourprofile", icon: <FaLinkedin /> },
            { href: "https://twitter.com/yourprofile", icon: <FaTwitter /> },
            { href: "https://www.youtube.com/c/yourchannel", icon: <FaYoutube /> },
          ].map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer"
              className="text-2xl transition-transform transform hover:scale-110">
              {item.icon}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
};

export default TermsAndConditions;
