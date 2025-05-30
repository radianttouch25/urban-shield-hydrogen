
import InquiryTypeSelector from './InquiryTypeSelector';
import BenefitsList from './BenefitsList';
import CTAEmailForm from './CTAEmailForm';

interface InquiryFormProps {
  inquiryType: 'order' | 'investor';
  setInquiryType: (type: 'order' | 'investor') => void;
}

const InquiryForm = ({ inquiryType, setInquiryType }: InquiryFormProps) => {
  return (
    <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-white/10 mb-8">
      <InquiryTypeSelector
        inquiryType={inquiryType}
        setInquiryType={setInquiryType}
      />

      <BenefitsList inquiryType={inquiryType} />
      <CTAEmailForm inquiryType={inquiryType} />
    </div>
  );
};

export default InquiryForm;
