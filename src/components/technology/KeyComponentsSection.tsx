
import { ForwardedRef, forwardRef } from 'react';
import { Zap, Shield, Beaker, Sparkles, Droplets, Check, Leaf } from 'lucide-react';

interface KeyComponentsSectionProps {
  ref: ForwardedRef<HTMLDivElement>;
}

const KeyComponentsSection = forwardRef<HTMLDivElement, Omit<KeyComponentsSectionProps, 'ref'>>((_, ref) => {
  return (
    <section 
      id="key-components"
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-1000 delay-500 py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-gradient-gold text-3xl md:text-4xl font-bold mb-12 text-center">
            Key Components of Our Technology
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Component 1 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gold/30 transition-colors group">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-6 group-hover:bg-gold/20 transition-colors">
                <Zap className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Charged Nanoparticles</h3>
              
              <p className="text-gray-300">
                Microscopic mineral compounds with specific electrical properties that form the foundation of the protective barrier.
              </p>
            </div>
            
            {/* Component 2 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gold/30 transition-colors group">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-6 group-hover:bg-gold/20 transition-colors">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Molecular Matrix</h3>
              
              <p className="text-gray-300">
                A flexible network of molecules that holds the protective elements in place while allowing skin to breathe naturally.
              </p>
            </div>
            
            {/* Component 3 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gold/30 transition-colors group">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-6 group-hover:bg-gold/20 transition-colors">
                <Beaker className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Catalytic Activators</h3>
              
              <p className="text-gray-300">
                Compounds that accelerate the formation of the protective barrier when applied to skin, ensuring immediate protection.
              </p>
            </div>
            
            {/* Component 4 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gold/30 transition-colors group">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-6 group-hover:bg-gold/20 transition-colors">
                <Sparkles className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Light-Adaptive Minerals</h3>
              
              <p className="text-gray-300">
                Specialized minerals that respond to different light wavelengths, offering enhanced protection against UV radiation.
              </p>
            </div>
            
            {/* Component 5 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gold/30 transition-colors group">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-6 group-hover:bg-gold/20 transition-colors">
                <Droplets className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Hydration Retainers</h3>
              
              <p className="text-gray-300">
                Molecules that lock in skin's natural moisture while still allowing the skin to breathe and function normally.
              </p>
            </div>
            
            {/* Component 6 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gold/30 transition-colors group">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-6 group-hover:bg-gold/20 transition-colors">
                <Check className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Biocompatible Framework</h3>
              
              <p className="text-gray-300">
                A structural system designed to be entirely compatible with human skin, eliminating the risk of irritation or allergic reactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sustainability & Ethics Section */}
      <div className="mt-16 pt-16 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            <span className="text-gradient-gold">Sustainability Commitment</span>
          </h3>
          <p className="text-gray-300">
            Urban Shield is committed to protecting both your skin and our planet with eco-conscious formulations and sustainable practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark-light/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Leaf className="h-10 w-10 text-green-500 mb-4" />
            <h4 className="text-xl font-bold mb-2 text-white">Microplastic-Free</h4>
            <p className="text-gray-300">
              Our formulations are 100% free from microplastics and harmful synthetic polymers that contaminate waterways and marine life.
            </p>
          </div>
          
          <div className="bg-dark-light/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Leaf className="h-10 w-10 text-green-500 mb-4" />
            <h4 className="text-xl font-bold mb-2 text-white">Sustainable Packaging</h4>
            <p className="text-gray-300">
              Urban Shield uses recyclable glass bottles, FSC-certified paper, and soy-based inks to minimize environmental impact.
            </p>
          </div>
          
          <div className="bg-dark-light/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <Leaf className="h-10 w-10 text-green-500 mb-4" />
            <h4 className="text-xl font-bold mb-2 text-white">Ethical Sourcing</h4>
            <p className="text-gray-300">
              We partner only with suppliers who meet our strict standards for fair labor practices and sustainable resource management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

KeyComponentsSection.displayName = 'KeyComponentsSection';

export default KeyComponentsSection;
