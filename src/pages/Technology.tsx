
import { useEffect, useRef } from 'react';
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Zap, Shield, Sparkles, Droplets, Beaker } from 'lucide-react';

const Technology = () => {
  // Fix 1: Use a correctly typed ref array with non-null assertion for when we add elements
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
    
    // Filter out null values before observing
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
        <title>Technology | Urban Shield</title>
        <meta name="description" content="Discover how Urban Shield's revolutionary anti-pollution technology creates an invisible barrier against environmental stressors for healthier, more radiant skin." />
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
        
        {/* How It Works Section */}
        <section 
          id="how-it-works"
          ref={el => (sectionsRef.current[1] = el)}
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
        
        {/* Key Components Section */}
        <section 
          id="key-components"
          ref={el => (sectionsRef.current[2] = el)}
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
        </section>
        
        {/* CTA Section */}
        <section 
          ref={el => (sectionsRef.current[3] = el)}
          className="opacity-0 translate-y-10 transition-all duration-1000 delay-700 py-20 bg-dark-darker relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Experience the</span>
                <span className="text-gradient-gold"> Future of Skincare</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                Be among the first to experience Urban Shield's revolutionary anti-pollution technology. Secure your product today.
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

export default Technology;
