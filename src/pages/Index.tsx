
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductFeatures from "@/components/ProductFeatures";
import TechnologySection from "@/components/TechnologySection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      <ProductFeatures />
      <TechnologySection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
