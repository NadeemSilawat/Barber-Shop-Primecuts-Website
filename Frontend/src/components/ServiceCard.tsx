import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <div className="w-16 h-16 rounded-full bg-amber-700 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-amber-500 mb-2 text-center">{title}</h3>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;