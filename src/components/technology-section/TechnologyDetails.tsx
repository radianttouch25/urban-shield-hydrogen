
import React from 'react';
import { Technology } from './TechnologyData';

interface TechnologyDetailsProps {
  technology: Technology;
  isVisible: boolean;
}

const TechnologyDetails: React.FC<TechnologyDetailsProps> = ({ technology, isVisible }) => {
  return (
    <div 
      className={`transform transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="flex items-center mb-3 sm:mb-4">
        <technology.icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${technology.color} mr-2 sm:mr-3 flex-shrink-0`} />
        <h3 
          className={`text-xl sm:text-2xl md:text-3xl font-bold text-${technology.color} leading-tight`}
        >
          {technology.title}
        </h3>
      </div>
      
      <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
        {technology.description}
      </p>
      
      <div className="space-y-2 sm:space-y-3">
        {technology.details.map((detail, index) => (
          <div 
            key={index} 
            className="flex items-start"
          >
            <div className={`h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-${technology.color}/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0`}>
              <div className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-${technology.color}`}></div>
            </div>
            <span className="text-sm sm:text-base text-white">{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyDetails;
