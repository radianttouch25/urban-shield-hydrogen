
import { TrendingUp, ChartBar, Percent, Shield } from 'lucide-react';

const InvestorFeatureList = () => {
  const features = [
    { text: 'Market Growth: 5.6% CAGR', icon: TrendingUp },
    { text: '$240B Global Market', icon: ChartBar },
    { text: 'Early-Stage Opportunity', icon: Percent },
    { text: 'Patented Technology', icon: Shield }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
            <feature.icon className="h-5 w-5 text-gold" />
          </div>
          <span className="text-sm text-white">{feature.text}</span>
        </div>
      ))}
    </div>
  );
};

export default InvestorFeatureList;
