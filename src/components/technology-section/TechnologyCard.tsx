
import React from 'react';
import { Leaf } from 'lucide-react';
import { Technology } from './TechnologyData';

interface TechnologyCardProps {
  technology: Technology;
  isVisible: boolean;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology, isVisible }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text content */}
      <div 
        className={`order-2 lg:order-1 transform transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
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
      
      {/* Image/Video */}
      <div 
        className={`order-1 lg:order-2 relative transform transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        <div className={`absolute -inset-4 bg-gradient-radial from-${technology.color}/30 via-transparent to-transparent opacity-70 filter blur-xl`}></div>
        
        <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-square">
          <img 
            src={technology.image} 
            alt={technology.title} 
            className="w-full h-full object-cover"
          />
          
          {/* Product Benefits Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark to-transparent p-4">
            <h4 className="text-white text-sm font-medium mb-2">Key Benefits:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white">24/7 Protection</span>
              <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white">Fast-Absorbing</span>
              <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white">Non-Greasy</span>
            </div>
          </div>
        </div>
        
        {/* Sustainability Badge */}
        <div className="absolute -top-4 -right-4 bg-green-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
          <Leaf className="h-3 w-3 inline-block mr-1" /> Microplastic-Free
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
