
import { useEffect, useRef } from 'react';
import { Shield, Droplets, Wind, AlertTriangle } from 'lucide-react';

const features = [
  {
    id: 'pollution',
    icon: <AlertTriangle className="h-8 w-8 text-gold" />,
    title: 'Rising Urban Pollution',
    description: 'Urban areas have seen a 60% increase in air pollution over the last decade, with microscopic particles that penetrate and damage skin cells, accelerating aging by up to 20%.',
    gradient: 'from-gold/20 via-transparent to-transparent',
  },
  {
    id: 'damage',
    icon: <Wind className="h-8 w-8 text-silver" />,
    title: 'Skin Under Attack',
    description: 'Conventional skincare fails to address urban-specific challenges, with studies showing 87% of urban dwellers experience pollution-related skin issues like hyperpigmentation and dryness.',
    gradient: 'from-silver/20 via-transparent to-transparent',
  },
  {
    id: 'protection',
    icon: <Shield className="h-8 w-8 text-rosegold" />,
    title: 'Molecular Shield',
    description: 'Our proprietary technology creates a breathable barrier that blocks 98% of urban pollutants while delivering key antioxidants, ceramides, and peptides to repair and strengthen skin.',
    gradient: 'from-rosegold/20 via-transparent to-transparent',
  }
];

const ProductFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="urban-problem" className="relative py-20 bg-dark-light overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 bg-noise mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent"></div>
      
      <div ref={containerRef} className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-gold text-sm">The Urban Skin Challenge</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Your Skin Faces</span>
            <span className="block text-white">Invisible Urban Enemies</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8">
            Modern urban environments expose your skin to unprecedented levels of pollution and stress. Conventional skincare is no longer enough.
          </p>
          
          {/* Pollution Visualization */}
          <div className="bg-dark/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-12">
            <h3 className="text-xl font-medium mb-4 text-white">Air Pollution in Major Cities</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end h-48">
              <div className="flex flex-col items-center">
                <div className="h-[30%] w-full bg-gradient-to-t from-green-400/70 to-green-400/20 rounded-t-md relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-300">30%</span>
                </div>
                <span className="text-xs mt-2 text-gray-400">1990</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[45%] w-full bg-gradient-to-t from-yellow-400/70 to-yellow-400/20 rounded-t-md relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-300">45%</span>
                </div>
                <span className="text-xs mt-2 text-gray-400">2000</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[65%] w-full bg-gradient-to-t from-orange-400/70 to-orange-400/20 rounded-t-md relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-300">65%</span>
                </div>
                <span className="text-xs mt-2 text-gray-400">2010</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[85%] w-full bg-gradient-to-t from-red-500/70 to-red-500/20 rounded-t-md relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-300">85%</span>
                </div>
                <span className="text-xs mt-2 text-gray-400">2020</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-[95%] w-full bg-gradient-to-t from-red-600/70 to-red-600/20 rounded-t-md relative">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-300">95%</span>
                </div>
                <span className="text-xs mt-2 text-gold">Today</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">Percentage of urban population exposed to harmful levels of air pollution</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 transition-all duration-500 opacity-0 translate-y-10 hover-lift overflow-hidden"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-radial ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-white/10">
                  <a 
                    href={`#${feature.id}`} 
                    className="inline-flex items-center text-sm font-medium text-gold hover:text-gold-light transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:ml-3 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
