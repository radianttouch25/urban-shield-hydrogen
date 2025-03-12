
import { useEffect, useRef, useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah J.',
    role: 'Beauty Influencer',
    content: 'Urban Shield has completely transformed my skincare routine. Living in the city, my skin used to look dull by midday, but now it stays protected and radiant all day long. The molecular shield technology is a game-changer!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 2,
    name: 'Michael T.',
    role: 'Dermatologist',
    content: 'As a dermatologist, I\'m impressed by the science behind Urban Shield. The combination of molecular protection and smart hydration offers my patients superior defense against urban environmental factors. I recommend it to all my city-dwelling patients.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 3,
    name: 'Jennifer L.',
    role: 'Marketing Executive',
    content: 'My job requires long hours in polluted urban environments. Urban Shield has noticeably reduced my skin\'s stress response. My complexion is clearer, and I no longer get the dry patches I used to experience from pollution exposure.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 4,
    name: 'David K.',
    role: 'Tech Entrepreneur',
    content: 'I was skeptical about skincare products until I tried Urban Shield. The difference is remarkable - my skin feels protected even during my commute through heavy traffic. The anti-pollution complex really works.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
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
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);
  
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-dark-light overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 bg-noise mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent"></div>
      
      <div ref={testimonialsRef} className="container mx-auto px-4 opacity-0">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-gold text-sm">Customer Experiences</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">What People Are</span>
            <span className="block text-gradient-gold">Saying About Us</span>
          </h2>
          
          <p className="text-lg text-gray-300">
            Real results from real people who've experienced the Urban Shield difference.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial carousel */}
          <div className="relative overflow-hidden rounded-xl bg-dark p-8 border border-white/10">
            <div 
              className={`transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-radial from-gold/20 via-transparent to-transparent opacity-70 filter blur-xl"></div>
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gold">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-gold fill-gold' : 'text-gray-400'}`}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl italic text-white mb-6">
                    "{testimonials[activeIndex].content}"
                  </blockquote>
                  
                  <div>
                    <p className="text-lg font-bold text-white">{testimonials[activeIndex].name}</p>
                    <p className="text-gold">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? 'bg-gold scale-125' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 w-12 h-12 rounded-full bg-dark border border-white/10 flex items-center justify-center text-white hover:bg-dark-light transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 w-12 h-12 rounded-full bg-dark border border-white/10 flex items-center justify-center text-white hover:bg-dark-light transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
