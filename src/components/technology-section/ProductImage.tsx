
import React from 'react';
import { Leaf } from 'lucide-react';
import { Technology } from './TechnologyData';

interface ProductImageProps {
  technology: Technology;
  isVisible: boolean;
}

const ProductImage: React.FC<ProductImageProps> = ({ technology, isVisible }) => {
  return (
    <div 
      className={`relative transform transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div 
        className={`absolute -inset-4 bg-gradient-radial from-${technology.color}/30 via-transparent to-transparent opacity-70 filter blur-xl`}
      ></div>
      
      <div className="relative rounded-xl overflow-hidden border border-white/10 h-auto max-h-[500px] mx-auto">
        <img 
          src={technology.image} 
          alt={technology.title} 
          className="w-full h-auto object-contain max-h-[500px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[500px]"
          loading="lazy"
        />
        
        {/* Product Benefits Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark to-transparent p-3 sm:p-4">
          <h4 className="text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">Key Benefits:</h4>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            <span className="px-2 py-0.5 sm:py-1 bg-white/10 rounded-full text-[10px] sm:text-xs text-white">24/7 Protection</span>
            <span className="px-2 py-0.5 sm:py-1 bg-white/10 rounded-full text-[10px] sm:text-xs text-white">Fast-Absorbing</span>
            <span className="px-2 py-0.5 sm:py-1 bg-white/10 rounded-full text-[10px] sm:text-xs text-white">Non-Greasy</span>
          </div>
        </div>
      </div>
      
      {/* Sustainability Badge */}
      <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-green-600/80 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full backdrop-blur-sm border border-white/20">
        <Leaf className="h-2.5 w-2.5 sm:h-3 sm:w-3 inline-block mr-1" /> Microplastic-Free
      </div>
    </div>
  );
};

export default ProductImage;
