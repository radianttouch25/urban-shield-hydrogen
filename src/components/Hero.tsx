
import { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Droplets, Wind } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !textRef.current || !bottleRef.current) return;
      
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const scrollFactor = Math.min(scrollY / heroHeight, 1);
      
      // Parallax effect for text
      textRef.current.style.transform = `translateY(${scrollFactor * 50}px)`;
      textRef.current.style.opacity = `${1 - scrollFactor}`;
      
      // Parallax effect for bottle
      bottleRef.current.style.transform = `translateY(${scrollFactor * 100}px) rotate(${scrollFactor * 5}deg)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden bg-dark">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-light via-dark to-dark-darker opacity-80"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-10 mix-blend-screen">
        <div className="absolute w-2 h-2 rounded-full bg-gold top-1/4 left-1/4 animate-pulse-gentle"></div>
        <div className="absolute w-3 h-3 rounded-full bg-gold-light top-1/3 right-1/3 animate-pulse-gentle animate-delay-200"></div>
        <div className="absolute w-2 h-2 rounded-full bg-rosegold top-1/2 left-1/2 animate-pulse-gentle animate-delay-300"></div>
        <div className="absolute w-4 h-4 rounded-full bg-silver top-2/3 right-1/4 animate-pulse-gentle animate-delay-400"></div>
        <div className="absolute w-3 h-3 rounded-full bg-gold-dark bottom-1/4 left-1/3 animate-pulse-gentle animate-delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col lg:flex-row items-center justify-between relative">
        {/* Text content */}
        <div className="w-full lg:w-1/2 relative z-10 mb-16 lg:mb-0">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-gold text-sm">Revolutionary Anti-Pollution Skincare</span>
          </div>
          
          <h1 
            ref={textRef}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in"
          >
            <span className="block">Urban Shield: Molecular</span>
            <span className="block text-gradient-gold">Defense Against</span>
            <span className="block">City Pollution</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg animate-fade-in-up animate-delay-200">
            24/7 protection against environmental stressors with our proprietary Molecular Shield Technology that creates an invisible barrier against pollution, UV rays, and blue light.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
            <div className="flex items-center text-gray-300 mb-6 pr-6">
              <Shield className="h-5 w-5 text-gold mr-2" />
              <span>Pollution Defense</span>
            </div>
            <div className="flex items-center text-gray-300 mb-6 pr-6">
              <Droplets className="h-5 w-5 text-silver mr-2" />
              <span>24/7 Hydration</span>
            </div>
            <div className="flex items-center text-gray-300 mb-6">
              <Wind className="h-5 w-5 text-rosegold mr-2" />
              <span>Barrier Protection</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
            <a 
              href="#preorder" 
              className="button-shine inline-flex items-center justify-center px-8 py-3 rounded-md bg-gradient-gold text-dark font-medium transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              Pre-Order | 20% Off
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            
            <a 
              href="#invest" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium transition-all hover:bg-white/10"
            >
              Investor Opportunities
            </a>
          </div>
        </div>
        
        {/* Product image with before/after overlay */}
        <div 
          ref={bottleRef}
          className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end animate-fade-in-up animate-delay-400"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-radial from-gold/20 via-transparent to-transparent opacity-70 animate-pulse-gentle filter blur-xl"></div>
            <div className="relative">
              <img 
                src="/lovable-uploads/04488e94-b7fc-46c4-9760-2f2ba39b836d.png" 
                alt="Urban Shield Skincare Product" 
                className="w-auto h-[500px] object-contain relative animate-float"
              />
              <div className="absolute -bottom-8 left-0 right-0 bg-dark-light/80 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">Before</div>
                    <div className="h-2 w-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                    <div className="text-xs text-gray-300 mt-1">Unprotected Skin</div>
                  </div>
                  <div className="mx-2 text-gray-400">→</div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">After</div>
                    <div className="h-2 w-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                    <div className="text-xs text-gold mt-1">Urban Shield Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in-up animate-delay-500">
        <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
