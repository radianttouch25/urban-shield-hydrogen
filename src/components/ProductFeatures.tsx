
import { useEffect, useRef } from 'react';
import { Shield, Droplets, Wind, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const pollutionData = [
  { year: '2020', level: 30, city: 'New York' },
  { year: '2021', level: 45, city: 'London' },
  { year: '2022', level: 65, city: 'Tokyo' },
  { year: '2023', level: 85, city: 'Beijing' },
  { year: '2024', level: 95, city: 'Delhi' },
];

const features = [
  {
    id: 'pollution',
    icon: <AlertTriangle className="h-8 w-8 text-rose-400" />,
    title: 'Rising Urban Pollution',
    description: 'Urban areas have seen a 60% increase in air pollution over the last decade.',
    gradient: 'from-rose-500/20 via-transparent to-transparent',
  },
  {
    id: 'damage',
    icon: <Wind className="h-8 w-8 text-blue-400" />,
    title: 'Skin Under Attack',
    description: 'Studies show 87% of urban dwellers experience pollution-related skin issues.',
    gradient: 'from-blue-500/20 via-transparent to-transparent',
  },
  {
    id: 'protection',
    icon: <Shield className="h-8 w-8 text-emerald-400" />,
    title: 'Molecular Shield',
    description: 'Our technology blocks 98% of urban pollutants while delivering key antioxidants.',
    gradient: 'from-emerald-500/20 via-transparent to-transparent',
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
      {/* Background decorations */}
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
          
          <p className="text-lg text-gray-300 mb-12">
            Modern urban environments expose your skin to unprecedented levels of pollution and stress.
          </p>
          
          {/* Interactive Pollution Chart */}
          <div className="glass-dark rounded-2xl p-6 lg:p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-medium mb-6 text-white">Global Urban Pollution Trends</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={pollutionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="year" 
                    stroke="rgba(255,255,255,0.5)"
                    tick={{ fill: 'rgba(255,255,255,0.5)' }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.5)"
                    tick={{ fill: 'rgba(255,255,255,0.5)' }}
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
            <p className="text-xs text-gray-400 mt-4 text-center">
              Pollution Levels in Major Cities (PM2.5 concentration μg/m³)
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
