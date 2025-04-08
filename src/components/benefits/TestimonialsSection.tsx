
import { ForwardedRef, forwardRef } from 'react';

interface TestimonialsSectionProps {
  ref: ForwardedRef<HTMLDivElement>;
}

const TestimonialsSection = forwardRef<HTMLDivElement, Omit<TestimonialsSectionProps, 'ref'>>((_, ref) => {
  return (
    <section 
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-1000 delay-700 py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-gradient-gold text-3xl md:text-4xl font-bold mb-12 text-center">
            What Our Early Users Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">Sophia L.</h4>
                  <p className="text-gray-400 text-sm">Urban Professional</p>
                </div>
              </div>
              
              <p className="text-gray-300 italic">
                "After using Urban Shield for just two weeks, I noticed my skin was clearer and more radiant. Living in the city center, I used to come home with my face feeling dirty and dull. Now my skin stays fresh all day."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">Michael T.</h4>
                  <p className="text-gray-400 text-sm">Cyclist & Outdoor Enthusiast</p>
                </div>
              </div>
              
              <p className="text-gray-300 italic">
                "As someone who bikes to work daily through heavy traffic, I was concerned about what all that pollution was doing to my skin. Urban Shield has been a game-changer—it's lightweight but I can tell it's working."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-xl">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">Aisha K.</h4>
                  <p className="text-gray-400 text-sm">Dermatologist</p>
                </div>
              </div>
              
              <p className="text-gray-300 italic">
                "From a professional standpoint, I'm impressed with Urban Shield's formulation. It provides genuine protection against environmental stressors without irritating the skin. I've been recommending it to my patients."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;
