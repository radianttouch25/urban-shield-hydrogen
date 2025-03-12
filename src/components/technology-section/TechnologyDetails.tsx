
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
      <h3 
        className={`text-2xl md:text-3xl font-bold mb-6 text-${technology.color}`} 
        style={{color: `var(--${technology.color}, #D4AF37)`}}
      >
        {technology.title}
      </h3>
      
      <p className="text-gray-300 mb-8">
        {technology.description}
      </p>
      
      <ul className="space-y-4 mb-8">
        {technology.details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <div 
              className={`flex-shrink-0 w-5 h-5 rounded-full bg-${technology.color}/20 flex items-center justify-center mt-1`} 
              style={{backgroundColor: `var(--${technology.color}20, rgba(212, 175, 55, 0.2))`}}
            >
              <div 
                className={`w-2 h-2 rounded-full bg-${technology.color}`} 
                style={{backgroundColor: `var(--${technology.color}, #D4AF37)`}}
              ></div>
            </div>
            <span className="ml-3 text-white">{detail}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href="#contact" 
        className={`inline-flex items-center px-6 py-3 rounded-md bg-${technology.color} text-dark font-medium transition-all hover:shadow-lg button-shine`}
        style={{backgroundColor: `var(--${technology.color}, #D4AF37)`}}
      >
        Learn More
        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
};

export default TechnologyDetails;
