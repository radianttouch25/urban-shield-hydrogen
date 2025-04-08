import { useEffect, useRef, useState } from 'react';
import { technologies } from './technology-section/TechnologyData';
import TechnologyTabButton from './technology-section/TechnologyTabButton';
import TechnologyCard from './technology-section/TechnologyCard';
import SustainabilitySection from './technology-section/SustainabilitySection';

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            } else {
              entry.target.classList.add('animate-fade-in');
            }
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
    <section id="technology-section" className="relative py-12 sm:py-16 md:py-20 bg-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>
      
      <div 
        ref={sectionRef} 
        className={`container mx-auto px-4 sm:px-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <div 
            ref={el => (elementsRef.current[0] = el)} 
            className={`inline-block px-4 py-1 mb-4 sm:mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="text-gold text-xs sm:text-sm">The Science Behind Urban Shield</span>
          </div>
          
          <h2 
            ref={el => (elementsRef.current[1] = el)} 
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 transform transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="text-white">The Science of Urban</span>
            <span className="block text-gradient-gold">Skin Protection Has Evolved</span>
          </h2>
          
          <p 
            ref={el => (elementsRef.current[2] = el)} 
            className={`text-base sm:text-lg text-gray-300 px-2 transform transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Discover the breakthrough technologies that make Urban Shield the most advanced skincare protection system available for modern urban environments.
          </p>
        </div>
        
        {/* Tabs navigation */}
        <div 
          ref={el => (elementsRef.current[3] = el)} 
          className={`flex justify-center mb-6 sm:mb-8 md:mb-12 py-2 transform transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex flex-nowrap p-1 rounded-lg bg-dark-light/50 backdrop-blur-sm border border-white/5 w-full max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent px-2 py-1 mx-4 sm:mx-0">
            {technologies.map((tech, index) => (
              <TechnologyTabButton
                key={tech.id}
                technology={tech}
                isActive={activeTab === index}
                onClick={() => handleTabChange(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Active tab content */}
        <TechnologyCard 
          technology={technologies[activeTab]} 
          isVisible={isVisible} 
        />
        
        {/* Sustainability & Ethics Section */}
        <SustainabilitySection isVisible={isVisible} />
      </div>
    </section>
  );
};

export default TechnologySection;
