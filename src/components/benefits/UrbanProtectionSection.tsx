
import { ForwardedRef, forwardRef } from 'react';
import { Check } from 'lucide-react';

interface UrbanProtectionSectionProps {
  ref: ForwardedRef<HTMLDivElement>;
}

const UrbanProtectionSection = forwardRef<HTMLDivElement, Omit<UrbanProtectionSectionProps, 'ref'>>((_, ref) => {
  return (
    <section
      id="urban-protection"
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-1000 delay-500 py-20 bg-dark-darker relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-xl overflow-hidden border border-white/10 h-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-dark to-transparent opacity-60 z-10"></div>
                <img
                  src="/assets/4734eeae-b7cb-4752-96fd-8a6967e6c29e.png"
                  alt="Urban environment pollution effects on skin"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-white text-xl font-bold">Urban Pollution Reality</h3>
                  <p className="text-white/80 text-sm mt-2">The visible and invisible threats city dwellers face daily</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Protection Against</span>
                <span className="block text-gradient-gold">Urban Challenges</span>
              </h2>

              <p className="text-gray-300 mb-8">
                Urban environments expose your skin to a complex cocktail of harmful elements that accelerate aging and damage skin health. Urban Shield specifically addresses these challenges:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-gold" />
                  </span>
                  <div>
                    <h4 className="font-bold text-white">PM2.5 & PM10 Particulate Matter</h4>
                    <p className="text-gray-300 mt-1">Microscopic particles that penetrate skin and cause inflammation and oxidative stress.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-gold" />
                  </span>
                  <div>
                    <h4 className="font-bold text-white">Vehicle Exhaust</h4>
                    <p className="text-gray-300 mt-1">Contains nitrogen oxides and carbon compounds that trigger free radical damage.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-gold" />
                  </span>
                  <div>
                    <h4 className="font-bold text-white">Industrial Emissions</h4>
                    <p className="text-gray-300 mt-1">Heavy metals and toxic chemicals that accumulate on skin throughout the day.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-gold" />
                  </span>
                  <div>
                    <h4 className="font-bold text-white">Ground-Level Ozone</h4>
                    <p className="text-gray-300 mt-1">Degrades collagen and elastin, leading to premature wrinkles and sagging skin.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3 mt-1">
                    <Check className="w-4 h-4 text-gold" />
                  </span>
                  <div>
                    <h4 className="font-bold text-white">Blue Light from Devices</h4>
                    <p className="text-gray-300 mt-1">Penetrates deeper than UV rays, causing hyperpigmentation and skin damage.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

UrbanProtectionSection.displayName = 'UrbanProtectionSection';

export default UrbanProtectionSection;
