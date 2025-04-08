
import InquiryForm from './InquiryForm';
import OrderFeatureList from './OrderFeatureList';
import InvestorFeatureList from './InvestorFeatureList';
import MarketChart from './MarketChart';

interface CTAContentProps {
  inquiryType: 'order' | 'investor';
  setInquiryType: (type: 'order' | 'investor') => void;
}

const CTAContent = ({ inquiryType, setInquiryType }: CTAContentProps) => {
  return (
    <div>
      <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
        <span className="text-gold text-sm">Limited Availability</span>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        <span className="text-white">Join The Urban Shield</span>
        <span className="block text-gradient-gold">Protection Revolution</span>
      </h2>

      <p className="text-lg text-gray-300 mb-8">
        Experience Urban Shield's revolutionary anti-pollution technology. Secure your product today, or explore investment opportunities in the rapidly growing skincare market.
      </p>

      <InquiryForm inquiryType={inquiryType} setInquiryType={setInquiryType} />

      {inquiryType === 'order' ? <OrderFeatureList /> : <InvestorFeatureList />}

      {/* Market Opportunity - Investor Section */}
      {inquiryType === 'investor' && <MarketChart />}
    </div>
  );
};

export default CTAContent;
