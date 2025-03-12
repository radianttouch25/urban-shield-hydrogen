
import { useEffect, useRef } from 'react';
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Leaf, Zap } from 'lucide-react';

const About = () => {
  // Update the ref type to be more generic to match what's being assigned
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      <Helmet>
        <title>About | Urban Shield</title>
        <meta name="description" content="Learn about Radiant Touch LIMITED, the creator of Urban Shield, our mission, values, and the team behind our revolutionary anti-pollution skincare technology." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section 
          ref={el => (sectionsRef.current[0] = el)} 
          className="container mx-auto px-4 mb-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="max-w-4xl mx-auto text-center">
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
        
        {/* Mission and values */}
        <section className="bg-dark-light py-20 mb-20">
          <div 
            ref={el => (sectionsRef.current[1] = el)} 
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
        
        {/* Our journey */}
        <section 
          ref={el => (sectionsRef.current[2] = el)} 
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
        
        {/* Team section */}
        <section 
          ref={el => (sectionsRef.current[3] = el)} 
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
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
