
import { ForwardedRef, forwardRef } from 'react';

interface HowItWorksSectionProps {
  ref: ForwardedRef<HTMLDivElement>;
}

const HowItWorksSection = forwardRef<HTMLDivElement, Omit<HowItWorksSectionProps, 'ref'>>((_, ref) => {
  return (
    <section 
      id="how-it-works"
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-1000 delay-300 py-20 bg-dark-darker relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-gradient-gold text-3xl md:text-4xl font-bold mb-12 text-center">
            How Urban Shield Protects Your Skin
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold/20 hidden md:block"></div>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-12 flex md:block items-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-4 md:ml-0 mr-4 md:mr-0 z-10">
                    <span className="text-gold text-2xl font-bold">01</span>
                  </div>
                  <h3 className="text-xl font-bold text-white md:mt-6">Nano-Barrier Formation</h3>
                </div>
                
                <div className="md:w-2/3 md:pl-12">
                  <p className="text-gray-300">
                    Our NanoBarrier™ formula contains microscopic particles that bind together to create an ultra-thin, breathable shield on the skin's surface. This barrier is only nanometers thick—invisible to the naked eye, but powerful enough to repel harmful elements.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-12 flex md:block items-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-4 md:ml-0 mr-4 md:mr-0 z-10">
                    <span className="text-gold text-2xl font-bold">02</span>
                  </div>
                  <h3 className="text-xl font-bold text-white md:mt-6">Electrostatic Repulsion</h3>
                </div>
                
                <div className="md:w-2/3 md:pl-12">
                  <p className="text-gray-300">
                    The barrier carries a slight negative charge, actively repelling positively charged pollution particles, preventing them from adhering to the skin and clogging pores. This electrostatic protection creates an invisible force field around your skin.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-12 flex md:block items-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-4 md:ml-0 mr-4 md:mr-0 z-10">
                    <span className="text-gold text-2xl font-bold">03</span>
                  </div>
                  <h3 className="text-xl font-bold text-white md:mt-6">UV Ray Deflection</h3>
                </div>
                
                <div className="md:w-2/3 md:pl-12">
                  <p className="text-gray-300">
                    Our proprietary mineral compounds reflect and scatter harmful UV rays before they can penetrate the skin. Unlike traditional sunscreens that absorb UV, Urban Shield creates a physical barrier that deflects these rays without chemical reactions.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-12 flex md:block items-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-4 md:ml-0 mr-4 md:mr-0 z-10">
                    <span className="text-gold text-2xl font-bold">04</span>
                  </div>
                  <h3 className="text-xl font-bold text-white md:mt-6">Adaptive Protection</h3>
                </div>
                
                <div className="md:w-2/3 md:pl-12">
                  <p className="text-gray-300">
                    The NanoBarrier™ technology is responsive to environmental changes. It strengthens in high-pollution environments and relaxes in cleaner settings, providing dynamic protection that adapts to your surroundings throughout the day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HowItWorksSection.displayName = 'HowItWorksSection';

export default HowItWorksSection;
