
import React from 'react';

interface SustainabilityCardProps {
  title: string;
  description: string;
}

const SustainabilityCard: React.FC<SustainabilityCardProps> = ({ title, description }) => {
  return (
    <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:border-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 group h-full">
      <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white group-hover:text-gold transition-colors">
        {title}
      </h4>
      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SustainabilityCard;
