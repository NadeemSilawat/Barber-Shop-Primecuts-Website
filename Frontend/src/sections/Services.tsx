import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { Scissors, Rat as Razor, SprayCan as Spray, Coffee } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Haircut',
      description: 'Precision haircut tailored to your face shape and style preferences.',
      icon: Scissors
    },
    {
      title: 'Beard Trim',
      description: 'Expert beard shaping and trimming to enhance your facial features.',
      icon: Razor
    },
    {
      title: 'Hair Styling',
      description: 'Professional styling with premium products for a lasting finish.',
      icon: Spray
    },
    {
      title: 'VIP Experience',
      description: 'Complete grooming package with complimentary beverages and hot towel service.',
      icon: Coffee
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Services" 
          subtitle="Premium grooming services for the modern gentleman"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            Experience the difference with our premium services, designed for the modern man who values quality and style.
          </p>
          <a 
            href="#pricing" 
            className="inline-block py-3 px-8 bg-amber-700 text-white rounded-md hover:bg-amber-800 trxansition-colors duration-300"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;