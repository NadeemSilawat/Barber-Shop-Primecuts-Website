import React from 'react';

type TestimonialCardProps = {
  name: string;
  quote: string;
  image: string;
  rating: number;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, quote, image, rating }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-white font-medium">{name}</h4>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-amber-500' : 'text-gray-600'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-400 italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;