
import { RefObject } from 'react';

interface JourneySectionProps {
  sectionRef: RefObject<HTMLElement>;
}

const JourneySection = ({ sectionRef }: JourneySectionProps) => {
  return (
    <section 
      ref={sectionRef} 
      className="container mx-auto px-4 mb-20 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Our</span>
            <span className="text-gradient-gold"> Journey</span>
          </h2>
          <p className="text-xl text-gray-300">
            The story behind Urban Shield and our commitment to urban skin protection.
          </p>
        </div>
        
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-radial from-gold/20 via-transparent to-transparent opacity-70 filter blur-xl"></div>
                <img 
                  src="/lovable-uploads/fe4e0f1b-21eb-4787-94ec-269344df1076.png" 
                  alt="Research & Discovery" 
                  className="rounded-xl border border-white/10 w-full"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-4 text-white">Research & Discovery</h3>
              <p className="text-gray-300 mb-4">
                Our journey began in 2018 when our team of scientists identified a critical gap in skincare: while urban pollution levels were rising dramatically, existing products weren't specifically designed to address these new environmental threats.
              </p>
              <p className="text-gray-300">
                After three years of intensive research and development, we created our proprietary Molecular Shield Technology - a breakthrough in skin protection science.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-white">Development & Testing</h3>
              <p className="text-gray-300 mb-4">
                We partnered with leading dermatologists and environmental scientists to rigorously test our formulations in the most polluted urban environments worldwide.
              </p>
              <p className="text-gray-300">
                Our clinical trials demonstrated Urban Shield's remarkable ability to reduce pollution-related skin damage by up to 87% while improving overall skin health metrics.
              </p>
            </div>
            <div className="md:col-span-2 order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-radial from-silver/20 via-transparent to-transparent opacity-70 filter blur-xl"></div>
                <img 
                  src="/lovable-uploads/fb7a29f8-4569-4314-86c6-cb50377eff23.png" 
                  alt="Development & Testing" 
                  className="rounded-xl border border-white/10 w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-radial from-rosegold/20 via-transparent to-transparent opacity-70 filter blur-xl"></div>
                <img 
                  src="/lovable-uploads/04488e94-b7fc-46c4-9760-2f2ba39b836d.png" 
                  alt="Launch & Future" 
                  className="rounded-xl border border-white/10 w-full"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold mb-4 text-white">Launch & Future</h3>
              <p className="text-gray-300 mb-4">
                Today, we're proud to introduce Urban Shield to the world as the first comprehensive anti-pollution skincare system specifically designed for modern urban life.
              </p>
              <p className="text-gray-300">
                Looking ahead, we're continuing to innovate with new formulations and technologies that will further revolutionize urban skincare protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
