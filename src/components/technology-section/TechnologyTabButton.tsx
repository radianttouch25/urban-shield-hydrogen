
import React from 'react';
import { Technology } from './TechnologyData';

interface TechnologyTabButtonProps {
  technology: Technology;
  isActive: boolean;
  onClick: () => void;
}

const TechnologyTabButton: React.FC<TechnologyTabButtonProps> = ({ 
  technology, 
  isActive, 
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
        isActive 
          ? `bg-${technology.color} text-dark shadow-lg` 
          : 'text-gray-300 hover:text-white'
      }`}
      style={isActive ? {backgroundColor: `var(--${technology.color}, #D4AF37)`} : {}}
    >
      <span className={`mr-2 ${isActive ? 'text-dark' : `text-${technology.color}`}`}>
        {technology.icon}
      </span>
      {technology.title}
    </button>
  );
};

export default TechnologyTabButton;
