import React from 'react';

type PriceItemProps = {
  service: string;
  price: string;
  description?: string;
};

const PriceCard: React.FC<PriceItemProps> = ({ service, price, description }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-4 border-b border-gray-700 hover:bg-gray-800 transition-colors duration-300 rounded">
      <div className="mb-2 md:mb-0">
        <h3 className="text-lg font-medium text-white">{service}</h3>
        {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
      </div>
      <div className="text-amber-500 font-bold text-xl">${price}</div>
    </div>
  );
};

export default PriceCard;