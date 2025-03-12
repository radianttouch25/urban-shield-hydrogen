
import { RefObject } from 'react';
import { Shield, Leaf, Zap } from 'lucide-react';

interface MissionSectionProps {
  sectionRef: RefObject<HTMLElement>;
}

const MissionSection = ({ sectionRef }: MissionSectionProps) => {
  return (
    <section className="bg-dark-light py-20 mb-20">
      <div 
        ref={sectionRef} 
        className="container mx-auto px-4 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-gold">Our Mission & Values</span>
            </h2>
            <p className="text-xl text-gray-300">
              We are driven by a commitment to excellence and innovation in skincare science.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Shield className="h-10 w-10 text-gold mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Protection</h3>
              <p className="text-gray-300">
                We believe everyone deserves effective protection against the increasing environmental threats to skin health in urban environments.
              </p>
            </div>
            
            <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Zap className="h-10 w-10 text-silver mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Innovation</h3>
              <p className="text-gray-300">
                Our dedicated research team constantly pushes the boundaries of cosmeceutical science to develop breakthrough skincare solutions.
              </p>
            </div>
            
            <div className="bg-dark/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Leaf className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">Sustainability</h3>
              <p className="text-gray-300">
                We are committed to developing products that not only protect your skin but also minimize impact on our planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
