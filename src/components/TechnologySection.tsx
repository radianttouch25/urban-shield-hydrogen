
import { useEffect, useRef, useState } from 'react';
import { Shield, Droplets, Wind, Play, Pause, Zap, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const technologies = [
  {
    id: 'molecular',
    icon: <Shield className="h-8 w-8" />,
    title: 'Molecular Shield Technology',
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
    id: 'antioxidant',
    icon: <Zap className="h-8 w-8" />,
    title: 'Antioxidant Complex',
    description: 'Our powerful blend of vitamins A, C, and E neutralizes free radicals and provides cellular protection. These antioxidants work synergistically to prevent oxidative stress caused by pollution and UV exposure, while helping repair existing damage to maintain skin\'s youthful appearance.',
    details: [
      'Vitamins A, C, E complex',
      'Free radical neutralization',
      'Prevents cellular damage',
      'Brightens and evens skin tone'
    ],
    color: 'silver',
    image: '/lovable-uploads/fb7a29f8-4569-4314-86c6-cb50377eff23.png'
  },
  {
    id: 'barrier',
    icon: <Droplets className="h-8 w-8" />,
    title: 'Barrier Strengthening',
    description: 'Our precision-engineered ceramide and peptide complex rebuilds and reinforces your skin\'s natural barrier function. These biomimetic ingredients integrate with your skin\'s structure to create a stronger defense against environmental aggressors while improving moisture retention.',
    details: [
      'Advanced ceramide complex',
      'Signal peptides for repair',
      'Strengthens skin structure',
      'Improves moisture retention'
    ],
    color: 'rosegold',
    image: '/lovable-uploads/d1bf6ad0-0c6e-40bc-b905-2f192af5660b.png'
  },
  {
    id: 'biotech',
    icon: <Leaf className="h-8 w-8" />,
    title: 'Pollution-Neutralizing Biotech',
    description: 'Urban Shield utilizes cutting-edge biotechnology ingredients that actively neutralize pollution particles on contact. Our fast-absorbing, non-greasy formula creates an invisible shield that prevents pollutants from adhering to the skin while providing hydration and protection against blue light from electronic devices.',
    details: [
      'Active pollution neutralizers',
      'Fast-absorbing formula',
      'Non-greasy texture',
      'Blue light protection'
    ],
    color: 'gold',
    image: '/lovable-uploads/fe4e0f1b-21eb-4787-94ec-269344df1076.png'
  }
];

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
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
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe the main section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Observe individual elements for animation
    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      elementsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section id="technology-section" className="relative py-20 md:py-24 bg-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>
      
      <div ref={sectionRef} className="container mx-auto px-4 opacity-0">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            ref={el => (elementsRef.current[0] = el)} 
            className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 opacity-0 transform translate-y-4 transition-all duration-700"
          >
            <span className="text-gold text-sm">The Science Behind Urban Shield</span>
          </div>
          
          <h2 
            ref={el => (elementsRef.current[1] = el)} 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 opacity-0 transform translate-y-4 transition-all duration-700 delay-100"
          >
            <span className="text-white">The Science of Urban</span>
            <span className="block text-gradient-gold">Skin Protection Has Evolved</span>
          </h2>
          
          <p 
            ref={el => (elementsRef.current[2] = el)} 
            className="text-lg text-gray-300 opacity-0 transform translate-y-4 transition-all duration-700 delay-200"
          >
            Discover the breakthrough technologies that make Urban Shield the most advanced skincare protection system available for modern urban environments.
          </p>
        </div>
        
        {/* Tabs navigation */}
        <div 
          ref={el => (elementsRef.current[3] = el)} 
          className="flex flex-wrap justify-center mb-12 overflow-x-auto opacity-0 transform translate-y-4 transition-all duration-700 delay-300"
        >
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
          <div 
            ref={el => (elementsRef.current[4] = el)} 
            className="order-2 lg:order-1 opacity-0 transform translate-y-4 transition-all duration-700 delay-400"
          >
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
            
            <Link 
              to="/contact" 
              className={`inline-flex items-center px-6 py-3 rounded-md bg-${technologies[activeTab].color} text-dark font-medium transition-all hover:shadow-lg button-shine`}
              style={{backgroundColor: `var(--${technologies[activeTab].color}, #D4AF37)`}}
            >
              Pre-Order Now
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          {/* Image/Video */}
          <div 
            ref={el => (elementsRef.current[5] = el)} 
            className="order-1 lg:order-2 relative opacity-0 transform translate-y-4 transition-all duration-700 delay-500"
          >
            <div className={`absolute -inset-4 bg-gradient-radial from-${technologies[activeTab].color}/30 via-transparent to-transparent opacity-70 filter blur-xl`}></div>
            
            <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-square">
              <img 
                src={technologies[activeTab].image} 
                alt={technologies[activeTab].title} 
                className="w-full h-full object-cover"
              />
              
              {/* Product Benefits Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark to-transparent p-4">
                <h4 className="text-white text-sm font-medium mb-2">Key Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white">24/7 Protection</span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white">Fast-Absorbing</span>
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white">Non-Greasy</span>
                </div>
              </div>
            </div>
            
            {/* Sustainability Badge */}
            <div className="absolute -top-4 -right-4 bg-green-600/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
              <Leaf className="h-3 w-3 inline-block mr-1" /> Microplastic-Free
            </div>
          </div>
        </div>
        
        {/* Sustainability & Ethics Section */}
        <div 
          ref={el => (elementsRef.current[6] = el)} 
          className="mt-16 pt-16 border-t border-white/10 opacity-0 transform translate-y-4 transition-all duration-700 delay-600"
        >
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              <span className="text-gradient-gold">Sustainability Commitment</span>
            </h3>
            <p className="text-gray-300">
              Urban Shield is committed to protecting both your skin and our planet with eco-conscious formulations and sustainable practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-light/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Leaf className="h-10 w-10 text-green-500 mb-4" />
              <h4 className="text-xl font-bold mb-2 text-white">Microplastic-Free</h4>
              <p className="text-gray-300">
                Our formulations are 100% free from microplastics and harmful synthetic polymers that contaminate waterways and marine life.
              </p>
            </div>
            
            <div className="bg-dark-light/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Leaf className="h-10 w-10 text-green-500 mb-4" />
              <h4 className="text-xl font-bold mb-2 text-white">Sustainable Packaging</h4>
              <p className="text-gray-300">
                Urban Shield uses recyclable glass bottles, FSC-certified paper, and soy-based inks to minimize environmental impact.
              </p>
            </div>
            
            <div className="bg-dark-light/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Leaf className="h-10 w-10 text-green-500 mb-4" />
              <h4 className="text-xl font-bold mb-2 text-white">Ethical Sourcing</h4>
              <p className="text-gray-300">
                We partner only with suppliers who meet our strict standards for fair labor practices and sustainable resource management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
