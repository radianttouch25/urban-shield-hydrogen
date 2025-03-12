
import { useEffect, useRef } from 'react';
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Clock, Droplets, Sun, Feather, Heart } from 'lucide-react';

const Benefits = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      <Helmet>
        <title>Benefits | Urban Shield</title>
        <meta name="description" content="Discover the benefits of Urban Shield's revolutionary anti-pollution skincare technology for healthier, more radiant skin in urban environments." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section 
          ref={el => (sectionsRef.current[0] = el)}
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
        
        {/* Key Benefits Section */}
        <section 
          id="key-benefits"
          ref={el => (sectionsRef.current[1] = el)}
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
        
        {/* Urban Protection Section */}
        <section 
          id="urban-protection"
          ref={el => (sectionsRef.current[2] = el)}
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
                      src="/lovable-uploads/4734eeae-b7cb-4752-96fd-8a6967e6c29e.png" 
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
        
        {/* Testimonials Section */}
        <section 
          ref={el => (sectionsRef.current[3] = el)}
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
        
        {/* CTA Section */}
        <section 
          ref={el => (sectionsRef.current[4] = el)}
          className="opacity-0 translate-y-10 transition-all duration-1000 delay-900 py-20 bg-dark-darker relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Ready to</span>
                <span className="text-gradient-gold"> Transform Your Skin?</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                Join our exclusive pre-launch program and be among the first to experience Urban Shield's revolutionary technology.
              </p>
              
              <a 
                href="/#preorder" 
                className="button-shine px-8 py-3 bg-gradient-gold text-dark font-medium rounded-md inline-block hover:shadow-lg transition-shadow"
              >
                Pre-Order Now
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Benefits;
