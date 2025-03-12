
interface BenefitsListProps {
  inquiryType: 'pre-order' | 'investor';
}

const BenefitsList = ({ inquiryType }: BenefitsListProps) => {
  const preOrderBenefits = [
    '20% pre-launch discount',
    'Priority shipping when product launches',
    'Exclusive early access to future products',
    'Free skin assessment consultation'
  ];

  const investorBenefits = [
    'Global skincare market: $240B with 5.6% CAGR',
    'Anti-pollution segment growing at 8.2% annually',
    'Patented technology with multiple applications',
    'Direct access to founding team'
  ];

  const benefits = inquiryType === 'pre-order' ? preOrderBenefits : investorBenefits;
  const title = inquiryType === 'pre-order' ? 'Exclusive pre-order benefits:' : 'Investment opportunity highlights:';

  return (
    <div className="mb-4 text-sm text-gray-300">
      <p className="mb-2">{title}</p>
      <ul className="list-disc list-inside space-y-1">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitsList;
