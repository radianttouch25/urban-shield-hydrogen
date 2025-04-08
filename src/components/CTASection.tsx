import { useState } from 'react';
import CTAContent from './cta/CTAContent';
import ProductCard from './cta/ProductCard';

const CTASection = () => {
  const [inquiryType, setInquiryType] = useState<'order' | 'investor'>('order');

  return (
    <section id="order" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <ProductCard />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <CTAContent inquiryType={inquiryType} setInquiryType={setInquiryType} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
