import { Helmet } from "react-helmet";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductFeatures from "@/components/ProductFeatures";
import TechnologySection from "@/components/TechnologySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([null, null, null, null]);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const scrollY = window.scrollY;

      sectionRefs.current.forEach((section, index) => {
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
    const section = sectionRefs.current[index];
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
        <title>Urban Shield | Revolutionary Anti-Pollution Skincare Technology</title>
        <meta name="description" content="Urban Shield creates an invisible protective barrier against pollution, UV rays, and environmental stressors with advanced Molecular Shield Technology. Discover the science behind our anti-pollution skincare." />
        <meta name="keywords" content="anti-pollution skincare, urban skincare protection, molecular shield technology, environmental protection for skin" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://urbanshield.com/" />
        <meta property="og:title" content="Urban Shield | Revolutionary Anti-Pollution Skincare" />
        <meta property="og:description" content="Revolutionary molecular shield technology that creates an invisible barrier against pollution, UV rays, and environmental stressors." />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://urbanshield.com/" />
        <meta property="twitter:title" content="Urban Shield | Revolutionary Anti-Pollution Skincare" />
        <meta property="twitter:description" content="Revolutionary molecular shield technology that creates an invisible barrier against pollution, UV rays, and environmental stressors." />
        <meta property="twitter:image" content="/og-image.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Urban Shield Anti-Pollution Skincare",
              "description": "Revolutionary molecular shield technology that creates an invisible barrier against pollution, UV rays, and environmental stressors.",
              "brand": {
                "@type": "Brand",
                "name": "Radiant Touch LIMITED"
              },
              "offers": {
                "@type": "Offer",
                "price": "89.00",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      {/* Navigation dots for sections */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col items-center space-y-4">
        {[0, 1, 2, 3].map((idx) => (
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

      <main>
        <section ref={el => sectionRefs.current[0] = el}>
          <Hero />
        </section>
        <section ref={el => sectionRefs.current[1] = el} id="product-features">
          <ProductFeatures />
        </section>
        <section ref={el => sectionRefs.current[2] = el} id="technology">
          <TechnologySection />
        </section>
        <section ref={el => sectionRefs.current[3] = el} id="cta">
          <CTASection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
