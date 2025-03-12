
import React from 'react';
import SustainabilityCard from './SustainabilityCard';

interface SustainabilitySectionProps {
  isVisible: boolean;
}

const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({ isVisible }) => {
  return (
    <div 
      className={`mt-16 pt-16 border-t border-white/10 transform transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          <span className="text-gradient-gold">Sustainability Commitment</span>
        </h3>
        <p className="text-gray-300">
          Urban Shield is committed to protecting both your skin and our planet with eco-conscious formulations and sustainable practices.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SustainabilityCard
          title="Microplastic-Free"
          description="Our formulations are 100% free from microplastics and harmful synthetic polymers that contaminate waterways and marine life."
        />
        
        <SustainabilityCard
          title="Sustainable Packaging"
          description="Urban Shield uses recyclable glass bottles, FSC-certified paper, and soy-based inks to minimize environmental impact."
        />
        
        <SustainabilityCard
          title="Ethical Sourcing"
          description="We partner only with suppliers who meet our strict standards for fair labor practices and sustainable resource management."
        />
      </div>
    </div>
  );
};

export default SustainabilitySection;
