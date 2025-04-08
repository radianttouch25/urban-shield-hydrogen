
import { ForwardedRef, forwardRef } from 'react';
import { Shield, Clock, Droplets, Sun, Feather, Heart } from 'lucide-react';

interface KeyBenefitsSectionProps {
  ref: ForwardedRef<HTMLDivElement>;
}

const KeyBenefitsSection = forwardRef<HTMLDivElement, Omit<KeyBenefitsSectionProps, 'ref'>>((_, ref) => {
  return (
    <section 
      id="key-benefits"
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-1000 delay-300 py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-gradient-gold text-3xl md:text-4xl font-bold mb-12 text-center">
            Key Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-gold/30 transition-colors group">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-6 group-hover:bg-gold/20 transition-colors">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Complete Pollution Defense</h3>
              
              <p className="text-gray-300">
                Creates an invisible shield that blocks particulate matter, exhaust fumes, and other airborne contaminants from adhering to your skin.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-gold/30 transition-colors group">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-6 group-hover:bg-gold/20 transition-colors">
                <Sun className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">UV Ray Protection</h3>
              
              <p className="text-gray-300">
                Provides SPF 30 equivalent protection by reflecting and scattering harmful UV rays before they can penetrate and damage skin cells.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-gold/30 transition-colors group">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-6 group-hover:bg-gold/20 transition-colors">
                <Droplets className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Enhanced Hydration</h3>
              
              <p className="text-gray-300">
                Locks in moisture while allowing skin to breathe, improving hydration levels and preventing water loss throughout the day.
              </p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-gold/30 transition-colors group">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-6 group-hover:bg-gold/20 transition-colors">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Anti-Aging Properties</h3>
              
              <p className="text-gray-300">
                Prevents premature aging by blocking environmental stressors that accelerate the formation of fine lines, wrinkles, and age spots.
              </p>
            </div>
            
            {/* Benefit 5 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-gold/30 transition-colors group">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-6 group-hover:bg-gold/20 transition-colors">
                <Feather className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Weightless Formula</h3>
              
              <p className="text-gray-300">
                So light you'll forget it's there. No heavy, greasy feeling—just an imperceptible layer of protection that won't clog pores.
              </p>
            </div>
            
            {/* Benefit 6 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-gold/30 transition-colors group">
              <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full border border-gold/30 mb-6 group-hover:bg-gold/20 transition-colors">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Skin-Friendly Ingredients</h3>
              
              <p className="text-gray-300">
                Made with hypoallergenic, dermatologist-tested ingredients suitable for all skin types, including sensitive skin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

KeyBenefitsSection.displayName = 'KeyBenefitsSection';

export default KeyBenefitsSection;
