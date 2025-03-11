"use client"

import Head from 'next/head';

const Services = () => {
  // Define your page metadata
  const pageTitle = 'Our Services';
  const pageDescription = 'Explore our range of services';

  return (
    <div className="min-h-screen bg-purple-50">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center p-5 mb-3">
            <div className="h-0.5 w-16 bg-purple-600"></div>
            <h3 className="text-gray-600 font-medium px-4">What We Offer</h3>
            <div className="h-0.5 w-16 bg-purple-600"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our <span className="text-purple-600">Services</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive digital solutions tailored to meet your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Website Development</h3>
            <p className="text-gray-600">
              Custom websites tailored to your brand identity and business goals, built with the latest technologies.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Mobile Application</h3>
            <p className="text-gray-600">
              Native and cross-platform mobile applications that provide seamless user experiences across all devices.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Graphics Design</h3>
            <p className="text-gray-600">
              Eye-catching visuals, logos, and marketing materials that strengthen your brand identity and message.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;