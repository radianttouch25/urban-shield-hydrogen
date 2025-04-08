
import { ForwardedRef, forwardRef } from 'react';

interface CTASectionProps {
  ref: ForwardedRef<HTMLDivElement>;
}

const CTASection = forwardRef<HTMLDivElement, Omit<CTASectionProps, 'ref'>>((_, ref) => {
  return (
    <section
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-1000 delay-700 py-20 bg-dark-darker relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Experience the</span>
            <span className="text-gradient-gold"> Future of Skincare</span>
          </h2>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Be among the first to experience Urban Shield's revolutionary anti-pollution technology. Secure your product today.
          </p>

          <a
            href="/#order"
            className="button-shine px-8 py-3 bg-gradient-gold text-dark font-medium rounded-md inline-block hover:shadow-lg transition-shadow"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;
