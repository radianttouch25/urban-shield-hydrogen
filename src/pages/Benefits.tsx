import { useEffect, useRef, useState } from 'react';
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/benefits/HeroSection";
import KeyBenefitsSection from "@/components/benefits/KeyBenefitsSection";
import UrbanProtectionSection from "@/components/benefits/UrbanProtectionSection";
import TestimonialsSection from "@/components/benefits/TestimonialsSection";
import CTASection from "@/components/benefits/CTASection";

const Benefits = () => {
  const [activeSection, setActiveSection] = useState(0);
  // Use a correctly typed ref array with non-null assertion for when we add elements
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    
    // Filter out null values before observing
    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const scrollY = window.scrollY;
      
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          setActiveSection(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Function to scroll to a specific section
  const scrollToSection = (index: number) => {
    const section = sectionsRef.current[index];
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 bg-noise mix-blend-overlay"></div>
      
      <Helmet>
        <title>Benefits | Urban Shield Anti-Pollution Skincare Protection</title>
        <meta name="description" content="Discover the benefits of Urban Shield's revolutionary anti-pollution skincare technology for healthier, more radiant skin in urban environments." />
        <meta name="keywords" content="anti-pollution benefits, skin protection benefits, urban skincare advantages, pollution defense, environmental skin protection" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://radianttouch.pro/benefits" />
        <meta property="og:title" content="Benefits | Urban Shield Anti-Pollution Skincare Protection" />
        <meta property="og:description" content="Discover the benefits of Urban Shield's revolutionary anti-pollution skincare technology for healthier, more radiant skin in urban environments." />
        <meta property="og:image" content="/lovable-uploads/shield.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://radianttouch.pro/benefits" />
        <meta property="twitter:title" content="Benefits | Urban Shield Anti-Pollution Skincare Protection" />
        <meta property="twitter:description" content="Discover the benefits of Urban Shield's revolutionary anti-pollution skincare technology for healthier, more radiant skin in urban environments." />
        <meta property="twitter:image" content="/lovable-uploads/shield.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Benefits of Urban Shield Anti-Pollution Skincare",
              "description": "How Urban Shield protects your skin from environmental pollutants and provides multiple skincare benefits.",
              "image": "https://radianttouch.pro/lovable-uploads/shield.png",
              "author": {
                "@type": "Organization",
                "name": "Radiant Touch LIMITED"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Radiant Touch LIMITED",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://radianttouch.pro/lovable-uploads/logo_radiant_touch.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://radianttouch.pro/benefits"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      {/* Navigation dots for sections */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col items-center space-y-4">
        {[0, 1, 2, 3, 4].map((idx) => (
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
        {/* Hero Section */}
        <HeroSection ref={el => (sectionsRef.current[0] = el)} />
        
        {/* Key Benefits Section */}
        <KeyBenefitsSection ref={el => (sectionsRef.current[1] = el)} />
        
        {/* Urban Protection Section */}
        <UrbanProtectionSection ref={el => (sectionsRef.current[2] = el)} />
        
        {/* Testimonials Section */}
        <TestimonialsSection ref={el => (sectionsRef.current[3] = el)} />
        
        {/* CTA Section */}
        <CTASection ref={el => (sectionsRef.current[4] = el)} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Benefits;
