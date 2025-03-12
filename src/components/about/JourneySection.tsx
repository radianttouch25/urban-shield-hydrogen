
import { forwardRef } from 'react';

interface JourneySectionProps {
  sectionRef: (el: HTMLDivElement | null) => void;
}

const JourneySection = forwardRef<HTMLDivElement, JourneySectionProps>(
  ({ sectionRef }, ref) => {
    return (
      <section 
        ref={ref}
        className="container mx-auto px-4 mb-20 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div ref={el => sectionRef(el)} className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-gold">Our Journey</span>
            </h2>
            <p className="text-xl text-gray-300">
              From research lab to cosmetic innovation leader
            </p>
          </div>
          
          <div className="relative border-l-2 border-white/10 pl-10 ml-6 md:ml-0 md:mx-auto max-w-2xl">
            {/* Timeline items */}
            <div className="mb-12 relative">
              <div className="absolute -left-[46px] bg-dark-light border-2 border-gold rounded-full h-8 w-8 flex items-center justify-center">
                <div className="bg-gold h-3 w-3 rounded-full"></div>
              </div>
              <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-gold text-xl font-bold mb-2">2022</h3>
                <h4 className="text-white text-lg font-semibold mb-3">Research Begins</h4>
                <p className="text-gray-300">
                  Our team of dermatologists and cosmetic chemists began research on urban environmental factors affecting skin health.
                </p>
              </div>
            </div>
            
            <div className="mb-12 relative">
              <div className="absolute -left-[46px] bg-dark-light border-2 border-gold rounded-full h-8 w-8 flex items-center justify-center">
                <div className="bg-gold h-3 w-3 rounded-full"></div>
              </div>
              <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-gold text-xl font-bold mb-2">2023</h3>
                <h4 className="text-white text-lg font-semibold mb-3">Breakthrough Discovery</h4>
                <p className="text-gray-300">
                  After years of research, our team made a breakthrough in molecular shield technology that effectively blocks urban pollutants.
                </p>
              </div>
            </div>
            
            <div className="mb-12 relative">
              <div className="absolute -left-[46px] bg-dark-light border-2 border-gold rounded-full h-8 w-8 flex items-center justify-center">
                <div className="bg-gold h-3 w-3 rounded-full"></div>
              </div>
              <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-gold text-xl font-bold mb-2">December 10, 2024</h3>
                <h4 className="text-white text-lg font-semibold mb-3">Radiant Touch LIMITED Founded</h4>
                <p className="text-gray-300">
                  We established Radiant Touch LIMITED to bring our revolutionary Urban Shield technology to market and protect urban skin worldwide.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[46px] bg-dark-light border-2 border-gold rounded-full h-8 w-8 flex items-center justify-center">
                <div className="bg-gold h-3 w-3 rounded-full"></div>
              </div>
              <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-gold text-xl font-bold mb-2">March 31, 2025</h3>
                <h4 className="text-white text-lg font-semibold mb-3">Global Launch</h4>
                <p className="text-gray-300">
                  Urban Shield launches globally, bringing advanced pollution protection to urban dwellers in major cities around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

JourneySection.displayName = "JourneySection";

export default JourneySection;
