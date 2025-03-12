
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
            <span className="text-white">Revolutionary</span>
            <span className="block text-gradient-gold">Protection Technology</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-10">
            Urban Shield's proprietary NanoBarrier™ technology creates an invisible shield that protects your skin from pollution, UV rays, and environmental stressors.
          </p>
          
          <div className="inline-flex p-1 rounded-lg bg-dark-light/50 backdrop-blur-sm border border-white/10">
            <a href="#how-it-works" className="px-6 py-3 rounded-md bg-gradient-gold text-dark font-medium">
              How It Works
            </a>
            <a href="#key-components" className="px-6 py-3 rounded-md text-white">
              Key Components
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
