import { useEffect, useRef, useState } from 'react';
import { Shield, Droplets, Wind, Play, Pause } from 'lucide-react';

const technologies = [
  {
    id: 'molecular',
    icon: <Shield className="h-8 w-8" />,
    title: 'Molecular Shield',
    description: 'Our proprietary Molecular Shield Technology creates an invisible protective barrier on your skin that blocks pollutants, UV radiation, and other environmental toxins. The shield is breathable, allowing your skin to function naturally while providing comprehensive protection.',
    details: [
      'Nano-particle protection layer',
      'Breathable skin barrier',
      'Blocks up to 98% of urban pollutants',
      '24-hour active protection'
    ],
    color: 'gold',
    image: '/lovable-uploads/fe4e0f1b-21eb-4787-94ec-269344df1076.png'
  },
  {
    id: 'hydration',
    icon: <Droplets className="h-8 w-8" />,
    title: 'Smart Hydration',
    description: 'Smart Hydration technology uses hyaluronic acid microspheres that respond to your skin\'s changing moisture needs throughout the day. The responsive hydration system delivers moisture precisely when and where your skin needs it most.',
    details: [
      'Adaptive moisture delivery',
      'Multiple hyaluronic acid weights',
      'Deep penetrating hydration',
      'Temperature and humidity responsive'
    ],
    color: 'silver',
    image: '/lovable-uploads/fb7a29f8-4569-4314-86c6-cb50377eff23.png'
  },
  {
    id: 'pollution',
    icon: <Wind className="h-8 w-8" />,
    title: 'Anti-Pollution Complex',
    description: 'Our Anti-Pollution Complex neutralizes free radicals and repairs existing damage caused by urban pollutants. The formula contains powerful antioxidants that protect against oxidative stress and restore your skin\'s natural defense mechanisms.',
    details: [
      'Neutralizes free radicals',
      'Repairs cellular damage',
      'Strengthens skin barrier',
      'Reduces inflammation'
    ],
    color: 'rosegold',
    image: '/lovable-uploads/d1bf6ad0-0c6e-40bc-b905-2f192af5660b.png'
  }
];

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };
  
  const togglePlayPause = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('animate-fade-in');
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="molecular" className="relative py-24 md:py-32 bg-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>
      
      <div ref={sectionRef} className="container mx-auto px-4 opacity-0">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-gold text-sm">The Science Behind Urban Shield</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Cutting-Edge</span>
            <span className="block text-gradient-gold">Skincare Science</span>
          </h2>
          
          <p className="text-lg text-gray-300">
            Discover the breakthrough technologies that make Urban Shield the most advanced skincare protection system available.
          </p>
        </div>
        
        {/* Tabs navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="flex p-1 rounded-lg bg-dark-light/50 backdrop-blur-sm border border-white/5">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => handleTabChange(index)}
                className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === index 
                    ? `bg-${tech.color} text-dark shadow-lg` 
                    : 'text-gray-300 hover:text-white'
                }`}
                style={activeTab === index ? {backgroundColor: `var(--${tech.color}, #D4AF37)`} : {}}
              >
                <span className={`mr-2 ${activeTab === index ? 'text-dark' : `text-${tech.color}`}`}>
                  {tech.icon}
                </span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 text-${technologies[activeTab].color}`} style={{color: `var(--${technologies[activeTab].color}, #D4AF37)`}}>
              {technologies[activeTab].title}
            </h3>
            
            <p className="text-gray-300 mb-8">
              {technologies[activeTab].description}
            </p>
            
            <ul className="space-y-4 mb-8">
              {technologies[activeTab].details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-${technologies[activeTab].color}/20 flex items-center justify-center mt-1`} style={{backgroundColor: `var(--${technologies[activeTab].color}20, rgba(212, 175, 55, 0.2))`}}>
                    <div className={`w-2 h-2 rounded-full bg-${technologies[activeTab].color}`} style={{backgroundColor: `var(--${technologies[activeTab].color}, #D4AF37)`}}></div>
                  </div>
                  <span className="ml-3 text-white">{detail}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#contact" 
              className={`inline-flex items-center px-6 py-3 rounded-md bg-${technologies[activeTab].color} text-dark font-medium transition-all hover:shadow-lg button-shine`}
              style={{backgroundColor: `var(--${technologies[activeTab].color}, #D4AF37)`}}
            >
              Learn More
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Image/Video */}
          <div className="order-1 lg:order-2 relative">
            <div className={`absolute -inset-4 bg-gradient-radial from-${technologies[activeTab].color}/30 via-transparent to-transparent opacity-70 filter blur-xl`}></div>
            
            <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-square">
              <img 
                src={technologies[activeTab].image} 
                alt={technologies[activeTab].title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
