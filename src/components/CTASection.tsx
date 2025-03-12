
import CTAContent from './cta/CTAContent';
import ProductCard from './cta/ProductCard';

const CTASection = () => {
  return (
    <section id="preorder" className="relative py-24 md:py-32 bg-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <ProductCard />
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <CTAContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
