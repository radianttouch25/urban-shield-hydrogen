
import { RefObject } from 'react';

interface TeamSectionProps {
  sectionRef: RefObject<HTMLElement>;
}

const TeamSection = ({ sectionRef }: TeamSectionProps) => {
  return (
    <section 
      ref={sectionRef} 
      className="container mx-auto px-4 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Meet Our</span>
            <span className="text-gradient-gold"> Team</span>
          </h2>
          <p className="text-xl text-gray-300">
            The visionaries and experts behind Urban Shield.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-dark/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover-lift">
            <img 
              src="/lovable-uploads/d1bf6ad0-0c6e-40bc-b905-2f192af5660b.png" 
              alt="Dr. Sarah Chen" 
              className="w-full h-56 object-cover object-top"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-white">Dr. Sarah Chen</h3>
              <p className="text-gold mb-4">Chief Scientific Officer</p>
              <p className="text-gray-300 text-sm">
                With a PhD in Molecular Dermatology, Dr. Chen leads our research team and was the primary inventor of our Molecular Shield Technology.
              </p>
            </div>
          </div>
          
          <div className="bg-dark/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover-lift">
            <img 
              src="/lovable-uploads/d1bf6ad0-0c6e-40bc-b905-2f192af5660b.png" 
              alt="Marcus Rodriguez" 
              className="w-full h-56 object-cover object-top"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-white">Marcus Rodriguez</h3>
              <p className="text-silver mb-4">Chief Executive Officer</p>
              <p className="text-gray-300 text-sm">
                With 15 years of experience in the cosmetics industry, Marcus brings vision and strategic leadership to Radiant Touch.
              </p>
            </div>
          </div>
          
          <div className="bg-dark/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover-lift">
            <img 
              src="/lovable-uploads/d1bf6ad0-0c6e-40bc-b905-2f192af5660b.png" 
              alt="Dr. Aisha Patel" 
              className="w-full h-56 object-cover object-top"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-white">Dr. Aisha Patel</h3>
              <p className="text-rosegold mb-4">Head of Product Development</p>
              <p className="text-gray-300 text-sm">
                A cosmetic chemist with expertise in clean beauty formulations, Dr. Patel ensures our products meet the highest standards of efficacy and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
