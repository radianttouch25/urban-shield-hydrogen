
import React from 'react';
import { Leaf } from 'lucide-react';

interface SustainabilityCardProps {
  title: string;
  description: string;
}

const SustainabilityCard: React.FC<SustainabilityCardProps> = ({ title, description }) => {
  return (
    <div className="bg-dark-light/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <Leaf className="h-10 w-10 text-green-500 mb-4" />
      <h4 className="text-xl font-bold mb-2 text-white">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default SustainabilityCard;
