
import { useEffect, useRef } from 'react';
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissionSection";
import JourneySection from "@/components/about/JourneySection";
import TeamSection from "@/components/about/TeamSection";

const About = () => {
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
        {/* Hidden anchor links for direct navigation */}
        <div id="about" className="anchor-link"></div>
        
        {/* Hero section */}
        <HeroSection sectionRef={el => (sectionsRef.current[0] = el)} />
        
        {/* Mission and values */}
        <div id="mission" className="anchor-link"></div>
        <MissionSection sectionRef={el => (sectionsRef.current[1] = el)} />
        
        {/* Our journey */}
        <div id="journey" className="anchor-link"></div>
        <JourneySection sectionRef={el => (sectionsRef.current[2] = el)} />
        
        {/* Team section */}
        <div id="team" className="anchor-link"></div>
        <TeamSection sectionRef={el => (sectionsRef.current[3] = el)} />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
