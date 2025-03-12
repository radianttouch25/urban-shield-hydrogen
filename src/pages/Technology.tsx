
import { useEffect, useRef } from 'react';
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/technology/HeroSection";
import HowItWorksSection from "@/components/technology/HowItWorksSection";
import KeyComponentsSection from "@/components/technology/KeyComponentsSection";
import CTASection from "@/components/technology/CTASection";

const Technology = () => {
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

  return (
    <div className="min-h-screen bg-dark text-white">
      <Helmet>
        <title>Technology | Urban Shield</title>
        <meta name="description" content="Discover how Urban Shield's revolutionary anti-pollution technology creates an invisible barrier against environmental stressors for healthier, more radiant skin." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <HeroSection ref={el => (sectionsRef.current[0] = el)} />
        <HowItWorksSection ref={el => (sectionsRef.current[1] = el)} />
        <KeyComponentsSection ref={el => (sectionsRef.current[2] = el)} />
        <CTASection ref={el => (sectionsRef.current[3] = el)} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Technology;
