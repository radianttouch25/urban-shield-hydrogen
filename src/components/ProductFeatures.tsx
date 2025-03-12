
import { useEffect, useRef } from 'react';
import { Shield, Droplets, Wind } from 'lucide-react';

const features = [
  {
    id: 'molecular',
    icon: <Shield className="h-8 w-8 text-gold" />,
    title: 'Molecular Shield',
    description: 'Creates an invisible protective barrier that blocks pollutants, environmental toxins, and UV radiation from penetrating your skin.',
    gradient: 'from-gold/20 via-transparent to-transparent',
  },
  {
    id: 'hydration',
    icon: <Droplets className="h-8 w-8 text-silver" />,
    title: 'Smart Hydration',
    description: 'Adaptive moisture technology that responds to your skin\'s changing needs throughout the day, delivering hydration exactly when needed.',
    gradient: 'from-silver/20 via-transparent to-transparent',
  },
  {
    id: 'pollution',
    icon: <Wind className="h-8 w-8 text-rosegold" />,
    title: 'Anti-Pollution Complex',
    description: 'Neutralizes free radicals and repairs existing damage caused by urban pollutants and environmental stressors.',
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
    <section id="features" className="relative py-20 md:py-32 bg-dark-light overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 bg-noise mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent"></div>
      
      <div ref={containerRef} className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-gold text-sm">Revolutionary Technology</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Advanced Protection</span>
            <span className="block text-white">For Modern Life</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8">
            Urban Shield combines three breakthrough technologies to provide complete protection for your skin against the harsh realities of urban living.
          </p>
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
