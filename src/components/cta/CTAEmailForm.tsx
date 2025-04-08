
import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface CTAEmailFormProps {
  inquiryType: 'order' | 'investor';
}

const CTAEmailForm = ({ inquiryType }: CTAEmailFormProps) => {
  const [email, setEmail] = useState('');

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
      description: inquiryType === 'order'
        ? "Your order request has been received. We'll contact you soon!"
        : "Your investor inquiry has been received. Our team will be in touch shortly.",
      variant: "default",
    });

    setEmail('');
  };

  return (
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
        {inquiryType === 'order' ? 'Secure Your Order Now' : 'Submit Investment Inquiry'}
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>

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
    </form>
  );
};

export default CTAEmailForm;
