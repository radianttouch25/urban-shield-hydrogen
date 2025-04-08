
import { ForwardedRef, forwardRef } from 'react';

interface HeroSectionProps {
  ref: ForwardedRef<HTMLDivElement>;
}

const HeroSection = forwardRef<HTMLDivElement, Omit<HeroSectionProps, 'ref'>>((_, ref) => {
  return (
    <section 
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-1000 relative py-20 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Transform Your</span>
            <span className="block text-gradient-gold">Skin Health</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-10">
            Urban Shield offers comprehensive protection against modern environmental threats while enhancing your skin's natural beauty and resilience.
          </p>
          
          <div className="inline-flex p-1 rounded-lg bg-dark-light/50 backdrop-blur-sm border border-white/10">
            <a href="#key-benefits" className="px-6 py-3 rounded-md bg-gradient-gold text-dark font-medium">
              Key Benefits
            </a>
            <a href="#urban-protection" className="px-6 py-3 rounded-md text-white">
              Urban Protection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
