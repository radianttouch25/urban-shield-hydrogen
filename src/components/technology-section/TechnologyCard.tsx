
import React from 'react';
import { Technology } from './TechnologyData';
import TechnologyDetails from './TechnologyDetails';
import ProductImage from './ProductImage';

interface TechnologyCardProps {
  technology: Technology;
  isVisible: boolean;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology, isVisible }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text content */}
      <div className="order-2 lg:order-1">
        <TechnologyDetails technology={technology} isVisible={isVisible} />
      </div>
      
      {/* Image/Video */}
      <div className="order-1 lg:order-2">
        <ProductImage technology={technology} isVisible={isVisible} />
      </div>
    </div>
  );
};

export default TechnologyCard;
