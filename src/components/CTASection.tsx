
import { useState } from 'react';
import { CreditCard, DollarSign, Mail, ArrowRight, Shield, TrendingUp, ChartBar, Percent } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('pre-order');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate form submission
    toast({
      title: "Success!",
      description: inquiryType === 'pre-order' 
        ? "Your pre-order request has been received. We'll contact you soon!" 
        : "Your investor inquiry has been received. Our team will be in touch shortly.",
      variant: "default",
    });
    
    setEmail('');
  };
  
  return (
    <section id="preorder" className="relative py-24 md:py-32 bg-dark overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-radial from-gold/20 via-transparent to-transparent opacity-70 filter blur-xl"></div>
                <img 
                  src="/lovable-uploads/4734eeae-b7cb-4752-96fd-8a6967e6c29e.png" 
                  alt="Urban Shield Product" 
                  className="w-full h-auto rounded-xl border border-white/10 animate-float"
                />
                {/* Product launch info */}
                <div className="absolute -bottom-6 left-0 right-0 mx-auto w-4/5 bg-dark-light/80 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-400">Launch Price</p>
                      <div className="flex items-end">
                        <span className="text-lg font-bold text-gold">$89</span>
                        <span className="text-xs text-gray-400 ml-1 line-through">$110</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Launch Date</p>
                      <p className="text-sm font-medium text-white">August 2023</p>
                    </div>
                    <div className="bg-gold/20 px-3 py-1 rounded-full">
                      <span className="text-xs font-medium text-gold">20% OFF</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <span className="text-gold text-sm">Limited Availability</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">Join The Urban Shield</span>
                <span className="block text-gradient-gold">Protection Revolution</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-8">
                Be among the first to experience Urban Shield's revolutionary anti-pollution technology. Secure your product through our exclusive pre-launch program, or explore investment opportunities in the rapidly growing skincare market.
              </p>
              
              <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-8">
                <div className="flex mb-6">
                  <button
                    onClick={() => setInquiryType('pre-order')}
                    className={`flex-1 flex items-center justify-center px-4 py-3 rounded-l-md font-medium transition-all ${
                      inquiryType === 'pre-order' 
                        ? 'bg-gradient-gold text-dark' 
                        : 'bg-dark-light text-white hover:bg-dark/50'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Pre-Order | 20% Off
                  </button>
                  
                  <button
                    onClick={() => setInquiryType('investor')}
                    className={`flex-1 flex items-center justify-center px-4 py-3 rounded-r-md font-medium transition-all ${
                      inquiryType === 'investor' 
                        ? 'bg-gradient-gold text-dark' 
                        : 'bg-dark-light text-white hover:bg-dark/50'
                    }`}
                  >
                    <DollarSign className="w-5 h-5 mr-2" />
                    Investor Inquiry
                  </button>
                </div>
                
                {inquiryType === 'pre-order' ? (
                  <div className="mb-4 text-sm text-gray-300">
                    <p className="mb-2">Exclusive pre-order benefits:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>20% pre-launch discount</li>
                      <li>Priority shipping when product launches</li>
                      <li>Exclusive early access to future products</li>
                      <li>Free skin assessment consultation</li>
                    </ul>
                  </div>
                ) : (
                  <div className="mb-4 text-sm text-gray-300">
                    <p className="mb-2">Investment opportunity highlights:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Global skincare market: $240B with 5.6% CAGR</li>
                      <li>Anti-pollution segment growing at 8.2% annually</li>
                      <li>Patented technology with multiple applications</li>
                      <li>Direct access to founding team</li>
                    </ul>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-dark border border-white/10 text-white rounded-md block w-full pl-10 pr-3 py-3 focus:ring-gold focus:border-gold outline-none"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="button-shine w-full flex items-center justify-center px-8 py-3 rounded-md bg-gradient-gold text-dark font-medium transition-all hover:shadow-lg hover:shadow-gold/20"
                  >
                    {inquiryType === 'pre-order' ? 'Secure Your Pre-Order Now' : 'Submit Investment Inquiry'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
                
                <p className="text-xs text-gray-400 mt-4 text-center">
                  By submitting, you agree to our{' '}
                  <a href="/privacy" className="text-gold hover:text-gold-light underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms" className="text-gold hover:text-gold-light underline">
                    Terms of Service
                  </a>
                </p>
              </div>
              
              {inquiryType === 'pre-order' ? (
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-sm text-white">Limited First Release</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-sm text-white">Priority Shipping</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-sm text-white">Exclusive Pricing</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-sm text-white">Concierge Support</span>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-sm text-white">Market Growth: 5.6% CAGR</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <ChartBar className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-sm text-white">$240B Global Market</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Percent className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-sm text-white">Early-Stage Opportunity</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-sm text-white">Patented Technology</span>
                  </div>
                </div>
              )}
              
              {/* Market Opportunity - Investor Section */}
              {inquiryType === 'investor' && (
                <div className="mt-8 p-6 bg-dark-light/30 backdrop-blur-sm rounded-xl border border-white/10">
                  <h3 className="text-xl font-bold mb-4 text-white">Market Growth Projection</h3>
                  <div className="h-60 w-full">
                    <div className="h-full flex items-end">
                      <div className="flex-1 flex flex-col items-center justify-end h-full">
                        <div className="h-[40%] w-full bg-gradient-to-t from-blue-500/70 to-blue-500/20 rounded-t-md relative">
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-300">$240B</span>
                        </div>
                        <span className="text-xs mt-2 text-gray-400">2022</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-end h-full">
                        <div className="h-[48%] w-full bg-gradient-to-t from-blue-500/70 to-blue-500/20 rounded-t-md relative">
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-300">$288B</span>
                        </div>
                        <span className="text-xs mt-2 text-gray-400">2024</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-end h-full">
                        <div className="h-[58%] w-full bg-gradient-to-t from-blue-500/70 to-blue-500/20 rounded-t-md relative">
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-300">$345B</span>
                        </div>
                        <span className="text-xs mt-2 text-gray-400">2026</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-end h-full">
                        <div className="h-[72%] w-full bg-gradient-to-t from-gold/70 to-gold/20 rounded-t-md relative">
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-300">$418B</span>
                        </div>
                        <span className="text-xs mt-2 text-gold">2028</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4 text-center">
                    Global skincare market projection (in billions USD) | Anti-pollution segment growing at 8.2% CAGR
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
