import React from 'react';
import SectionHeading from '../components/SectionHeading';
import PriceCard from '../components/PriceCard';
import Button from '../components/Button';

const Pricing: React.FC = () => {
  const basicServices = [
    {
      service: 'Classic Haircut',
      price: '30',
      description: 'Precision cut with styling'
    },
    {
      service: 'Beard Trim',
      price: '15',
      description: 'Shape and line up'
    },
    {
      service: 'Haircut & Beard Combo',
      price: '40',
      description: 'Complete look refresh'
    },
    {
      service: 'Hot Towel Shave',
      price: '35',
      description: 'Traditional straight razor shave'
    }
  ];

  const premiumServices = [
    {
      service: 'Executive Experience',
      price: '65',
      description: 'Haircut, beard trim, hot towel & facial'
    },
    {
      service: 'Father & Son',
      price: '45',
      description: 'Haircuts for two'
    },
    {
      service: 'Hair Coloring',
      price: '50+',
      description: 'Professional color application'
    },
    {
      service: 'The Full Treatment',
      price: '85',
      description: 'Complete package with all premium services'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Pricing" 
          subtitle="Quality services at competitive prices"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Services */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="bg-amber-700 py-4 px-6">
              <h3 className="text-2xl font-bold text-white">Basic Services</h3>
            </div>
            <div className="p-6">
              {basicServices.map((service, index) => (
                <PriceCard 
                  key={index}
                  service={service.service}
                  price={service.price}
                  description={service.description}
                />
              ))}
            </div>
          </div>
          
          {/* Premium Services */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="bg-amber-800 py-4 px-6">
              <h3 className="text-2xl font-bold text-white">Premium Services</h3>
            </div>
            <div className="p-6">
              {premiumServices.map((service, index) => (
                <PriceCard 
                  key={index}
                  service={service.service}
                  price={service.price}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            All services include complimentary consultation. Prices may vary based on hair length and complexity.
          </p>
          <a href='#contact'><Button size="lg">Book Your Appointment</Button></a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;