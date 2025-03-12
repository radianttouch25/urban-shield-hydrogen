
import { useState } from 'react';
import { CreditCard, DollarSign, Mail, ArrowRight } from 'lucide-react';
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
    <section id="contact" className="relative py-24 md:py-32 bg-dark overflow-hidden">
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
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <span className="text-gold text-sm">Limited Availability</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-white">Be Among The</span>
                <span className="block text-gradient-gold">First To Experience</span>
                <span className="text-white">Urban Shield</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-8">
                Join our exclusive pre-launch list to secure your Urban Shield product before public release, or connect with our investor relations team to learn about partnership opportunities.
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
                    Pre-Order
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
                    {inquiryType === 'pre-order' ? 'Secure Your Pre-Order' : 'Submit Inquiry'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
                
                <p className="text-xs text-gray-400 mt-4 text-center">
                  By submitting, you agree to our{' '}
                  <a href="/privacy-policy" className="text-gold hover:text-gold-light underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms-of-service" className="text-gold hover:text-gold-light underline">
                    Terms of Service
                  </a>
                </p>
              </div>
              
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
