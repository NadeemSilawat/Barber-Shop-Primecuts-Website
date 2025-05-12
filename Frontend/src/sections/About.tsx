import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Clock, MapPin, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Us" 
          subtitle="Delivering exceptional grooming services since 2010"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Barbershop interior" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-700 text-white p-6 rounded-lg shadow-xl hidden md:block">
              <p className="font-bold text-xl mb-2">15+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-6 font-serif">
              A CUT ABOVE THE REST
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2010, PRIMECUTS has established itself as the premier destination for 
              men who appreciate precision haircuts, traditional hot towel shaves, and a relaxed, 
              masculine environment. Our barbers are trained in classic and contemporary techniques, 
              ensuring you'll leave looking and feeling your best.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We believe grooming is more than just a haircut—it's an experience. That's why we've 
              created a space where you can unwind, socialize, and transform. Whether you're preparing 
              for a job interview, a wedding, or just maintaining your style, we're here to help you 
              put your best face forward.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
                <Clock className="w-8 h-8 text-amber-500 mb-2" />
                <h4 className="text-white font-bold">Quick Service</h4>
                <p className="text-gray-400 text-sm text-center">No unnecessary waiting</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
                <MapPin className="w-8 h-8 text-amber-500 mb-2" />
                <h4 className="text-white font-bold">Prime Location</h4>
                <p className="text-gray-400 text-sm text-center">Easily accessible</p>
              </div>
              <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
                <Award className="w-8 h-8 text-amber-500 mb-2" />
                <h4 className="text-white font-bold">Expert Barbers</h4>
                <p className="text-gray-400 text-sm text-center">Skilled professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;