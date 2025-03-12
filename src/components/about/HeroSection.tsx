
import { RefObject } from 'react';

interface HeroSectionProps {
  sectionRef: RefObject<HTMLElement>;
}

const HeroSection = ({ sectionRef }: HeroSectionProps) => {
  return (
    <section 
      ref={sectionRef} 
      className="container mx-auto px-4 mb-20 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
          <span className="text-gold text-sm">Our Story</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          <span className="text-white">Pioneering</span>
          <span className="block text-gradient-gold">Skin Protection</span>
          <span className="text-white">for Urban Life</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Founded with a mission to protect urban skin from increasing environmental threats, Radiant Touch LIMITED is leading the cosmeceutical revolution with our breakthrough Urban Shield technology.
        </p>
        
        <div className="relative inline-block">
          <img 
            src="/lovable-uploads/d1bf6ad0-0c6e-40bc-b905-2f192af5660b.png" 
            alt="Radiant Touch Team" 
            className="rounded-xl overflow-hidden border border-white/10 max-w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
