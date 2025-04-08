import { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Droplets, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !textRef.current || !bottleRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const scrollFactor = Math.min(scrollY / heroHeight, 1);

      // Parallax effect for text
      textRef.current.style.transform = `translateY(${scrollFactor * 50}px)`;
      textRef.current.style.opacity = `${1 - scrollFactor}`;

      // Reduced movement for the bottle - no rotation, minimal vertical movement
      bottleRef.current.style.transform = `translateY(${scrollFactor * 30}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    const nextSection = document.getElementById('product-features');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden bg-dark">
      <div className="absolute inset-0 bg-gradient-radial from-dark-light via-dark to-dark-darker opacity-80"></div>

      <div className="absolute inset-0 opacity-10 mix-blend-screen">
        <div className="absolute w-2 h-2 rounded-full bg-gold top-1/4 left-1/4 animate-pulse-gentle"></div>
        <div className="absolute w-3 h-3 rounded-full bg-gold-light top-1/3 right-1/3 animate-pulse-gentle animate-delay-200"></div>
        <div className="absolute w-2 h-2 rounded-full bg-rosegold top-1/2 left-1/2 animate-pulse-gentle animate-delay-300"></div>
        <div className="absolute w-4 h-4 rounded-full bg-silver top-2/3 right-1/4 animate-pulse-gentle animate-delay-400"></div>
        <div className="absolute w-3 h-3 rounded-full bg-gold-dark bottom-1/4 left-1/3 animate-pulse-gentle animate-delay-500"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 flex flex-col lg:flex-row items-center justify-between relative">
        <div className="w-full lg:w-1/2 relative z-10 mb-10 sm:mb-12 md:mb-16 lg:mb-0">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 mb-4 sm:mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-gold text-xs sm:text-sm">Revolutionary Anti-Pollution Skincare</span>
          </div>

          <h1 ref={textRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 animate-fade-in">
            <span className="block">Urban Shield: Molecular</span>
            <span className="block text-gradient-gold">Defense Against</span>
            <span className="block">City Pollution</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-lg animate-fade-in-up animate-delay-200">
            24/7 protection against environmental stressors with our proprietary Molecular Shield Technology that creates an invisible barrier against pollution, UV rays, and blue light.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 animate-fade-in-up animate-delay-300">
            <div className="flex items-center text-gray-300 mb-4 sm:mb-6 pr-4 sm:pr-6">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-gold mr-1.5 sm:mr-2" />
              <span className="text-sm sm:text-base">Pollution Defense</span>
            </div>
            <div className="flex items-center text-gray-300 mb-4 sm:mb-6 pr-4 sm:pr-6">
              <Droplets className="h-4 w-4 sm:h-5 sm:w-5 text-silver mr-1.5 sm:mr-2" />
              <span className="text-sm sm:text-base">24/7 Hydration</span>
            </div>
            <div className="flex items-center text-gray-300 mb-4 sm:mb-6">
              <Wind className="h-4 w-4 sm:h-5 sm:w-5 text-rosegold mr-1.5 sm:mr-2" />
              <span className="text-sm sm:text-base">Barrier Protection</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up animate-delay-300">
            <Link
              to="/order"
              className="button-shine inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-md bg-gradient-gold text-dark text-sm sm:text-base font-medium transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              Order | 42% Off
              <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>

            <Link
              to="/invest"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-md bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm sm:text-base font-medium transition-all hover:bg-white/10"
            >
              Investor Opportunities
            </Link>
          </div>
        </div>

        <div ref={bottleRef} className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end animate-fade-in-up animate-delay-400">
          <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105">
            {/* Enhanced background effects */}
            <div className="absolute -inset-4 bg-gradient-radial from-gold/20 via-transparent to-transparent opacity-70 animate-pulse-gentle filter blur-xl group-hover:from-gold/40"></div>

            {/* Premium floating effect container */}
            <div className="relative">
              {/* Animated floating effect */}
              <div className="animate-float-gentle">
                {/* Decorative circle behind product */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-purple-500/5 rounded-full opacity-70 transform scale-90 blur-sm"></div>

                {/* Gold accent highlight */}
                <div className="absolute -right-4 -top-4 w-12 h-12 bg-gradient-to-br from-gold/40 to-gold/10 rounded-full blur-md animate-pulse-slow"></div>
                <div className="absolute -left-4 -bottom-4 w-10 h-10 bg-gradient-to-br from-gold/30 to-gold/5 rounded-full blur-md animate-pulse-slow animate-delay-500"></div>

                {/* Enhanced image with premium styling - using fixed border width approach */}
                <div
                  className="relative overflow-hidden rounded-3xl"
                  style={{
                    padding: '2px',
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.1), rgba(212,175,55,0.3))'
                  }}
                >
                  {/* Premium inner border with fixed width that doesn't scale down */}
                  <div
                    className="relative overflow-hidden rounded-[calc(1.5rem-2px)]"
                    style={{ backdropFilter: 'blur(8px)' }}
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-dark-light/40 to-dark/60 rounded-[calc(1.5rem-2px)]"></div>

                    {/* Glamour spot highlights */}
                    <div className="absolute top-1/3 -right-6 w-12 h-32 bg-gold/10 rotate-45 blur-md"></div>
                    <div className="absolute bottom-1/4 -left-6 w-12 h-16 bg-gold/10 rotate-45 blur-md"></div>

                    {/* Shine animation effect - more dynamic */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>

                    {/* Enhanced product image with responsive sizing but preserved quality */}
                    <div className="relative p-3 sm:p-4 md:p-6">
                      <img
                        src="/assets/urban-shield-bottle.png"
                        alt="Urban Shield Skincare Product"
                        className="w-auto mx-auto max-w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] relative object-contain drop-shadow-2xl z-10"
                        loading="lazy"
                      />

                      {/* Reflection effect */}
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent blur-sm transform scale-y-50 opacity-70 rounded-b-3xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Hero;
