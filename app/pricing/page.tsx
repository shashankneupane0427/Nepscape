
import Footer from "@/components/Footer";

function Pricing() {
  return (
    <div className="min-h-screen text-black bg-white">


      <div className="max-w-6xl px-6 py-16 mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-[#a46ede] mb-6">
          Our Pricing Plans
        </h1>
        <p className="mb-12 text-lg text-gray-600">
          Choose a package that best suits your business needs.
        </p>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* SEO Package */}
          <div className="p-8 text-center transition border border-gray-200 shadow-lg rounded-xl hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-[#a46ede] mb-4">
              SEO Package
            </h2>
            <p className="mb-6 text-gray-600">
              Includes keyword research, on-page SEO, backlinks, and more.
            </p>
            <p className="mb-4 text-3xl font-bold text-black">$99/month</p>
            <button className="bg-[#a46ede] text-white py-3 px-6 rounded-lg hover:bg-[#8d5ec3] transition transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Social Media Package */}
          <div className="p-8 text-center transition border border-gray-200 shadow-lg rounded-xl hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-[#a46ede] mb-4">
              Social Media Package
            </h2>
            <p className="mb-6 text-gray-600">
              Includes content creation, social media ads, and engagement.
            </p>
            <p className="mb-4 text-3xl font-bold text-black">$129/month</p>
            <button className="bg-[#a46ede] text-white py-3 px-6 rounded-lg hover:bg-[#8d5ec3] transition transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Pricing;
