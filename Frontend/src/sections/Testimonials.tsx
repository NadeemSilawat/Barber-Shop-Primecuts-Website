import React from 'react';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'James Wilson',
      quote: 'Best haircut I\'ve ever had. The attention to detail is incredible, and the hot towel service is a game changer.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5
    },
    {
      name: 'Michael Chen',
      quote: 'I\'ve been coming here for over a year now. The consistency and quality is unmatched anywhere else in the city.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5
    },
    {
      name: 'David Thompson',
      quote: 'Finally found a barber who knows exactly how to handle my type of hair. Worth every penny.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Client Testimonials" 
          subtitle="What our satisfied customers have to say"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Join our community of satisfied clients and experience the PRIMECUTS difference.
          </p>
          <a 
            href="#contact" 
            className="inline-block py-3 px-8 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;