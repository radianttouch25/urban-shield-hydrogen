import { forwardRef } from 'react';

interface HeroSectionProps {
  sectionRef: (el: HTMLDivElement | null) => void;
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ sectionRef }, ref) => {
    return (
      <section
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 mb-4 sm:mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-gold text-xs sm:text-sm">Our Story</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-8">
            <span className="text-white">Pioneering</span>
            <span className="block text-gradient-gold">Skin Protection</span>
            <span className="text-white">for Urban Life</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto px-2">
            Founded with a mission to protect urban skin from increasing environmental threats, Radiant Touch LIMITED is leading the cosmeceutical revolution with our breakthrough Urban Shield technology.
          </p>

          <div className="relative inline-block group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]">
            {/* Enhanced background effects */}
            <div className="absolute -inset-4 bg-gradient-radial from-gold/10 via-transparent to-transparent opacity-60 animate-pulse-gentle filter blur-lg"></div>

            {/* Premium image container with consistent border */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                padding: '2px',
                background: 'linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.1), rgba(212,175,55,0.3))'
              }}
            >
              {/* Inner container */}
              <div className="relative overflow-hidden rounded-[calc(1rem-2px)] backdrop-blur-sm">
                {/* Shine animation effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>

                <img
                  src="/assets/about-team.jpg"
                  alt="Radiant Touch Team"
                  className="rounded-[calc(1rem-2px)] overflow-hidden max-w-full h-auto drop-shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/assets/d1bf6ad0-0c6e-40bc-b905-2f192af5660b.png";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
