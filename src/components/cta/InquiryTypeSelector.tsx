
import { CreditCard, DollarSign } from 'lucide-react';

interface InquiryTypeSelectorProps {
  inquiryType: 'pre-order' | 'investor';
  setInquiryType: (type: 'pre-order' | 'investor') => void;
}

const InquiryTypeSelector = ({ inquiryType, setInquiryType }: InquiryTypeSelectorProps) => {
  return (
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
  );
};

export default InquiryTypeSelector;
