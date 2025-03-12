
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductFeatures from "@/components/ProductFeatures";
import TechnologySection from "@/components/TechnologySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
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
                "availability": "https://schema.org/PreOrder"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <Hero />
      <ProductFeatures />
      <TechnologySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
