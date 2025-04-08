import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Droplet, Leaf, ChevronDown } from 'lucide-react';

const About: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('.scroll-section');

      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle intersection observer for animations
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      featureRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Function to scroll to a specific section
  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.scroll-section');
    if (sections[index]) {
      window.scrollTo({
        top: (sections[index] as HTMLElement).offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 bg-noise mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent opacity-30"></div>
      <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-gold/10 blur-3xl"></div>

      <Helmet>
        <title>About Radiant Touch | Urban Shield Anti-Pollution Skincare</title>
        <meta
          name="description"
          content="Learn about Radiant Touch LIMITED, the innovative company behind Urban Shield's revolutionary anti-pollution skincare technology."
        />
        <meta name="keywords" content="Radiant Touch company, Urban Shield creators, anti-pollution skincare innovation, skincare technology company" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://radianttouch.pro/about" />
        <meta property="og:title" content="About Radiant Touch | Urban Shield Anti-Pollution Skincare" />
        <meta property="og:description" content="Learn about Radiant Touch LIMITED, the innovative company behind Urban Shield's revolutionary anti-pollution skincare technology." />
        <meta property="og:image" content="/assets/logo_radiant_touch.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://radianttouch.pro/about" />
        <meta property="twitter:title" content="About Radiant Touch | Urban Shield Anti-Pollution Skincare" />
        <meta property="twitter:description" content="Learn about Radiant Touch LIMITED, the innovative company behind Urban Shield's revolutionary anti-pollution skincare technology." />
        <meta property="twitter:image" content="/assets/logo_radiant_touch.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Radiant Touch LIMITED",
              "url": "https://radianttouch.pro",
              "logo": "https://radianttouch.pro/assets/logo_radiant_touch.png",
              "description": "Innovative company creating revolutionary anti-pollution skincare technology.",
              "foundingDate": "2023",
              "founders": [{
                "@type": "Person",
                "name": "Radiant Touch Team"
              }],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@radianttouch.pro"
              }
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      {/* Navigation dots for sections */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col items-center space-y-4">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === idx ? 'bg-gold w-4 h-4' : 'bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to section ${idx + 1}`}
          />
        ))}
      </div>

      <main className="pt-32 pb-20 relative z-10">
        {/* Hero section */}
        <section
          ref={sectionRef}
          className="container mx-auto px-4 mb-32 scroll-section opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="max-w-5xl mx-auto text-center">
            <div
              className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in"
              style={{animationDelay: '0.2s'}}
            >
              <span className="text-gold text-sm font-medium">Our Story</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in"
              style={{animationDelay: '0.4s'}}
            >
              <span className="text-white">Pioneering</span>
              <span className="block text-gradient-gold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-600 my-2">Skin Protection</span>
              <span className="text-white">for Urban Life</span>
            </h1>

            <p
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in"
              style={{animationDelay: '0.6s'}}
            >
              Radiant Touch operates in the dynamic beauty and skincare
              industry, focusing on urban skin protection. Exploring diverse
              business models can help Radiant Touch maintain a competitive
              edge while fostering innovation and sustainability.
            </p>

            <div
              className="relative inline-block mb-16 group cursor-pointer animate-fade-in transition-all duration-300 hover:scale-[1.02]"
              style={{animationDelay: '0.8s'}}
            >
              <img
                src="/assets/logo_radiant_touch.png"
                className="rounded-3xl overflow-hidden border border-white/10 max-w-full h-auto shadow-2xl transition-all duration-500 group-hover:shadow-gold/20"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div
              className="flex justify-center items-center animate-fade-in"
              style={{animationDelay: '1s'}}
            >
              <button
                onClick={() => scrollToSection(1)}
                className="flex flex-col items-center text-white/60 hover:text-gold transition-colors group"
              >
                <span className="text-sm font-medium mb-2">Discover More</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
              </button>
            </div>
          </div>
        </section>

        {/* Our Solution section */}
        <section className="container mx-auto px-4 mb-32 scroll-section">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 opacity-0 translate-y-6 transition-all duration-700"
                ref={el => {
                  if (el) {
                    const observer = new IntersectionObserver(
                      ([entry]) => {
                        if (entry.isIntersecting) {
                          entry.target.classList.add('opacity-100', 'translate-y-0');
                          observer.unobserve(entry.target);
                        }
                      },
                      { threshold: 0.1 }
                    );
                    observer.observe(el);
                  }
                }}
              >
                <span className="text-gradient-gold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-600">Our Solution</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 translate-y-6 transition-all duration-700 delay-150"
                ref={el => {
                  if (el) {
                    const observer = new IntersectionObserver(
                      ([entry]) => {
                        if (entry.isIntersecting) {
                          entry.target.classList.add('opacity-100', 'translate-y-0');
                          observer.unobserve(entry.target);
                        }
                      },
                      { threshold: 0.1 }
                    );
                    observer.observe(el);
                  }
                }}
              >
                Urban Shield offers a sophisticated blend of natural
                ingredients that fortify the skin's barrier against pollutants
                and environmental stressors, ensuring hydration and
                revitalisation with each use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div
                ref={el => (featureRefs.current[0] = el)}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center opacity-0 translate-y-10 transition-all duration-700 delay-100 hover:-translate-y-2 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="bg-gradient-to-br from-gold/20 to-amber-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Advanced Protection
                </h3>
                <p className="text-gray-300">
                  Creates an invisible barrier against pollution and
                  environmental stressors, keeping your skin safe in urban environments.
                </p>
              </div>

              <div
                ref={el => (featureRefs.current[1] = el)}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center opacity-0 translate-y-10 transition-all duration-700 delay-100 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-400/5"
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Droplet className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Deep Hydration
                </h3>
                <p className="text-gray-300">
                  Ensures lasting hydration and revitalisation, helping your skin stay moisturized throughout the day.
                </p>
              </div>

              <div
                ref={el => (featureRefs.current[2] = el)}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center opacity-0 translate-y-10 transition-all duration-700 delay-200 hover:-translate-y-2 hover:shadow-lg hover:shadow-green-400/5"
              >
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  Natural Ingredients
                </h3>
                <p className="text-gray-300">
                  Formulated with a blend of natural ingredients for optimal
                  skin health, without harsh chemicals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final section */}
        <section className="container mx-auto px-4 scroll-section">
          <div
            className="max-w-4xl mx-auto text-center p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 opacity-0 translate-y-10 transition-all duration-700"
            ref={el => {
              if (el) {
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('opacity-100', 'translate-y-0');
                      observer.unobserve(entry.target);
                    }
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }
            }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gradient-gold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-600">
              Join Our Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              This innovative product seamlessly integrates into daily
              routines, promoting resilience and a radiant appearance amidst
              the hustle of city living. By choosing this skincare
              advancement, individuals not only prioritise their skin's
              health but also contribute to a community committed to
              sustainability in beauty practices.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Available with exclusive offers online, Urban Shield is poised
              to be an essential addition to your skincare regimen, enhancing
              your natural defences and elevating your skin's vitality.
            </p>


                <img src="/urban-shield-bottle.png" alt="Urban Shield Product" className="max-w-full h-auto mx-auto" />


            <button
              className="px-8 py-3 bg-gradient-to-r from-amber-400 to-yellow-600 text-dark font-medium rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all hover:scale-105 active:scale-95"
            >
              Order Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
