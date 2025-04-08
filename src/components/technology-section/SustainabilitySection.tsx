import React from 'react';
import { Leaf } from 'lucide-react';
import SustainabilityCard from './SustainabilityCard';

interface SustainabilitySectionProps {
  isVisible: boolean;
}

const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ isVisible }) => {
  return (
    <div 
      className={`mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/10 transform transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 px-4 sm:px-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
          <span className="text-gradient-gold">Sustainability Commitment</span>
        </h3>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Urban Shield is committed to protecting both your skin and our planet with eco-conscious formulations and sustainable practices.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-0">
        <SustainabilityCard
          title="Microplastic-Free"
          description="Our formulations are 100% free from microplastics and harmful synthetic polymers that contaminate waterways and marine life."
        />
        
        <SustainabilityCard
          title="Sustainable Packaging"
          description="Urban Shield uses recyclable glass bottles, FSC-certified paper, and soy-based inks to minimize environmental impact."
        />
        
        <SustainabilityCard
          title="Eco-Friendly Product"
          description="Our product is designed with sustainability in mind, using environmentally responsible ingredients and packaging."
        />
        
        <SustainabilityCard
          title="Ethical Sourcing"
          description="We partner only with suppliers who meet our strict standards for fair labor practices and sustainable resource management."
        />

        <SustainabilityCard
          title="Zero-Waste Manufacturing"
          description="Our manufacturing process is optimized to minimize waste, with recycling programs and energy-efficient facilities."
        />

        <SustainabilityCard
          title="Carbon Neutral"
          description="We offset our carbon footprint through verified environmental projects and use renewable energy in our operations."
        />
      </div>
    </div>
  );
};

export default SustainabilitySection;
