import React, { useRef, useEffect } from 'react';
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';
import { Shield, Wind, Droplets, Zap } from 'lucide-react';

// Sample pollution data for the chart
const pollutionData = [
  { year: '2010', level: 14 },
  { year: '2012', level: 18 },
  { year: '2014', level: 23 },
  { year: '2016', level: 29 },
  { year: '2018', level: 34 },
  { year: '2020', level: 38 },
  { year: '2022', level: 42 },
  { year: '2024', level: 45 },
];

// Feature data
const features = [
  {
    id: 'molecular-shield',
    title: 'Molecular Shield Technology',
    description: 'Creates an invisible barrier that blocks up to 98% of urban pollutants from reaching your skin.',
    icon: <Shield className="w-8 h-8 text-gold" />,
    gradient: 'from-gold/5 to-transparent'
  },
  {
    id: 'pollution-defense',
    title: 'Active Pollution Defense',
    description: 'Neutralizes free radicals and environmental toxins before they can damage skin cells.',
    icon: <Wind className="w-8 h-8 text-gold" />,
    gradient: 'from-gold/5 to-transparent'
  },
  {
    id: 'hydration-lock',
    title: 'Hydration Lock System',
    description: 'Maintains optimal moisture levels throughout the day, even in harsh urban environments.',
    icon: <Droplets className="w-8 h-8 text-gold" />,
    gradient: 'from-gold/5 to-transparent'
  },
  {
    id: 'adaptive-response',
    title: 'Adaptive Response',
    description: 'Intelligent formula that adjusts protection based on environmental stress factors.',
    icon: <Zap className="w-8 h-8 text-gold" />,
    gradient: 'from-gold/5 to-transparent'
  }
];

const ProductFeatures = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    // Add animation for cards on load
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
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
    <section id="product-features" className="relative py-12 md:py-20 bg-dark-light overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 bg-noise mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-block px-4 py-1 mb-4 md:mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-gold text-xs sm:text-sm">The Urban Skin Challenge</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-gradient-gold">Your Skin Faces</span>
            <span className="block text-white">Invisible Urban Enemies</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12 px-2">
            Modern urban environments expose your skin to unprecedented levels of pollution and stress.
          </p>
          
          {/* Interactive Pollution Chart */}
          <div className="glass-dark rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 md:mb-12 transform hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-lg md:text-xl font-medium mb-4 md:mb-6 text-white">Global Urban Pollution Trends</h3>
            <div className="h-[250px] sm:h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={pollutionData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="year" 
                    stroke="rgba(255,255,255,0.5)"
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.5)"
                    tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="level" 
                    stroke="#D4AF37"
                    strokeWidth={2}
                    dot={{ stroke: '#D4AF37', strokeWidth: 2, fill: '#121212' }}
                    activeDot={{ r: 8, stroke: '#D4AF37', strokeWidth: 2, fill: '#121212' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray-400 mt-3 md:mt-4 text-center">
              Pollution Levels in Major Cities (PM2.5 concentration μg/m³)
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative glass-dark rounded-xl p-8 transition-all duration-500 opacity-0 translate-y-10 hover:translate-y-[-4px] overflow-hidden"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Animated gradient background */}
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
