import { Shield } from 'lucide-react';

const OrderFeatureList = () => {
  const features = [
    'Limited First Release',
    'Priority Shipping',
    'Exclusive Pricing',
    'Concierge Support'
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
            <Shield className="h-5 w-5 text-gold" />
          </div>
          <span className="text-sm text-white">{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default OrderFeatureList;
