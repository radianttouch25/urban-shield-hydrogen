
import { useState } from 'react';
import InquiryTypeSelector from './InquiryTypeSelector';
import BenefitsList from './BenefitsList';
import CTAEmailForm from './CTAEmailForm';

interface InquiryFormProps {
  inquiryType: 'pre-order' | 'investor';
  setInquiryType: (type: 'pre-order' | 'investor') => void;
}

const InquiryForm = ({ inquiryType, setInquiryType }: InquiryFormProps) => {
  return (
    <div className="bg-dark-light/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-8">
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
