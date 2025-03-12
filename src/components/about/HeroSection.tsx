
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  sectionRef: (el: HTMLDivElement | null) => void;
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ sectionRef }, ref) => {
    return (
      <section 
        ref={ref}
        className="container mx-auto px-4 mb-20 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div ref={el => sectionRef(el)} className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="text-gold text-sm">Our Story</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-white">Pioneering</span>
            <span className="block text-gradient-gold">Skin Protection</span>
            <span className="text-white">for Urban Life</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Founded with a mission to protect urban skin from increasing environmental threats, Radiant Touch LIMITED is leading the cosmeceutical revolution with our breakthrough Urban Shield technology.
          </p>
          
          <div className="flex justify-center mb-10">
            <Button asChild className="bg-gradient-gold text-dark hover:shadow-lg button-shine mr-4">
              <Link to="/contact">
                Pre-Order Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="border-white/10 hover:bg-white/5">
              <a href="#team" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#team')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Meet Our Team
              </a>
            </Button>
          </div>
          
          <div className="relative inline-block">
            <img 
              src="/lovable-uploads/d1bf6ad0-0c6e-40bc-b905-2f192af5660b.png" 
              alt="Radiant Touch Team" 
              className="rounded-xl overflow-hidden border border-white/10 max-w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
