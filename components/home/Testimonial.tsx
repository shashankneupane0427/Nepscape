import React from 'react';

interface TestimonialProps {
  avatar: string;
  name: string;
  title: string;
  content: string;
  stars: number;
  hasGoogleReview?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  avatar, 
  name, 
  title, 
  content, 
  stars, 
  hasGoogleReview = false 
}) => {
  return (
    <div className="border border-purple-500 rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 flex-grow">{content}</p>
      
      <div className="flex items-center">
        <div className="flex mr-2">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-5 h-5 ${i < stars ? "text-yellow-400" : "text-gray-300"}`}
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {hasGoogleReview && (
          <div className="flex items-center">
          
          </div>
        )}
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      avatar: "/pip1.jpg", // Replace with actual image paths
      name: "Bibek Regmi",
      title: "Managing Director, NLPRC",
      content: "Nepscape Pvt. Ltd is the best website design and development company in nepal with highly qualified IT staff having an amazing sense of understanding, cooperation, and support to the clients during the project design. The company offers follow-up services even after the completion of projects.",
      stars: 5,
      hasGoogleReview: true
    },
    {
      id: 2,
      avatar: "/pip2.jpg", // Replace with actual image paths
      name: "Shristi Dhakal",
      title: "Chairman, NIMS Group Clinic Pvt. Ltd.",
      content: "Nepscape has been a game-changer for us at NIMS Group Clinic Pvt Ltd. Their Social Media Marketing and Website Development services have transformed our online presence. Their innovative strategies boosted our engagement and patient interactions. We're incredibly grateful for their expertise, and highly recommend their services.",
      stars: 5,
      hasGoogleReview: true
    },
    {
      id: 3,
      avatar: "/pip3.jpg", // Replace with actual image paths
      name: "Sulav Prasad Pudasaini",
      title: "Founder/ CEO, Eduzelt Education Network",
      content: "Nepscape has very unique team, work professionally and understands the need of customers in the very sight. Its very worthy to be the part of its customer due to its time relevant services. Very thankful for its reliable support.",
      stars: 5,
      hasGoogleReview: true
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="text-center mb-12">
        <p className="text-gray-600 tracking-wider font-medium">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          <span className="text-gray-800">What Our</span>
          <span className="text-purple-500"> Clients Says</span>
        </h2>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            avatar={testimonial.avatar}
            name={testimonial.name}
            title={testimonial.title}
            content={testimonial.content}
            stars={testimonial.stars}
            hasGoogleReview={testimonial.hasGoogleReview}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;