
import React from 'react';
import { Technology } from './TechnologyData';

interface TechnologyTabButtonProps {
  technology: Technology;
  isActive: boolean;
  onClick: () => void;
}

const TechnologyTabButton: React.FC<TechnologyTabButtonProps> = ({ technology, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-md transition-all mx-1 flex-shrink-0 ${isActive ? 'bg-dark border border-white/20 shadow-lg' : 'hover:bg-dark-light/50'}`}
    >
      <technology.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${isActive ? `text-${technology.color}` : 'text-gray-400'}`} />
      <span className={`ml-1.5 sm:ml-2 whitespace-nowrap text-xs sm:text-sm ${isActive ? 'text-white font-medium' : 'text-gray-400'}`}>
        {technology.title.split(' ')[0]}
      </span>
    </button>
  );
};

export default TechnologyTabButton;
