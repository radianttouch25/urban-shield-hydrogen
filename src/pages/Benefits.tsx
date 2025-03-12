
import { useEffect, useRef } from 'react';
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/benefits/HeroSection";
import KeyBenefitsSection from "@/components/benefits/KeyBenefitsSection";
import UrbanProtectionSection from "@/components/benefits/UrbanProtectionSection";
import TestimonialsSection from "@/components/benefits/TestimonialsSection";
import CTASection from "@/components/benefits/CTASection";

const Benefits = () => {
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
        <title>Benefits | Urban Shield</title>
        <meta name="description" content="Discover the benefits of Urban Shield's revolutionary anti-pollution skincare technology for healthier, more radiant skin in urban environments." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <HeroSection ref={(el) => (sectionsRef.current[0] = el)} />
        
        {/* Key Benefits Section */}
        <KeyBenefitsSection ref={(el) => (sectionsRef.current[1] = el)} />
        
        {/* Urban Protection Section */}
        <UrbanProtectionSection ref={(el) => (sectionsRef.current[2] = el)} />
        
        {/* Testimonials Section */}
        <TestimonialsSection ref={(el) => (sectionsRef.current[3] = el)} />
        
        {/* CTA Section */}
        <CTASection ref={(el) => (sectionsRef.current[4] = el)} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Benefits;
