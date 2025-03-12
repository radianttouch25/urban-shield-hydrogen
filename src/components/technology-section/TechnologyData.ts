
import { Shield, Droplets, Wind, Zap, Leaf } from 'lucide-react';
import React from 'react';

export interface Technology {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  color: 'gold' | 'silver' | 'rosegold';
  image: string;
}

export const technologies: Technology[] = [
  {
    id: 'molecular',
    icon: <Shield className="h-8 w-8" />,
    title: 'Molecular Shield Technology',
    description: 'Our proprietary Molecular Shield Technology creates an invisible protective barrier on your skin that blocks pollutants, UV radiation, and other environmental toxins. The shield is breathable, allowing your skin to function naturally while providing comprehensive protection.',
    details: [
      'Nano-particle protection layer',
      'Breathable skin barrier',
      'Blocks up to 98% of urban pollutants',
      '24-hour active protection'
    ],
    color: 'gold',
    image: '/lovable-uploads/fe4e0f1b-21eb-4787-94ec-269344df1076.png'
  },
  {
    id: 'antioxidant',
    icon: <Zap className="h-8 w-8" />,
    title: 'Antioxidant Complex',
    description: 'Our powerful blend of vitamins A, C, and E neutralizes free radicals and provides cellular protection. These antioxidants work synergistically to prevent oxidative stress caused by pollution and UV exposure, while helping repair existing damage to maintain skin\'s youthful appearance.',
    details: [
      'Vitamins A, C, E complex',
      'Free radical neutralization',
      'Prevents cellular damage',
      'Brightens and evens skin tone'
    ],
    color: 'silver',
    image: '/lovable-uploads/fb7a29f8-4569-4314-86c6-cb50377eff23.png'
  },
  {
    id: 'barrier',
    icon: <Droplets className="h-8 w-8" />,
    title: 'Barrier Strengthening',
    description: 'Our precision-engineered ceramide and peptide complex rebuilds and reinforces your skin\'s natural barrier function. These biomimetic ingredients integrate with your skin\'s structure to create a stronger defense against environmental aggressors while improving moisture retention.',
    details: [
      'Advanced ceramide complex',
      'Signal peptides for repair',
      'Strengthens skin structure',
      'Improves moisture retention'
    ],
    color: 'rosegold',
    image: '/lovable-uploads/d1bf6ad0-0c6e-40bc-b905-2f192af5660b.png'
  },
  {
    id: 'biotech',
    icon: <Leaf className="h-8 w-8" />,
    title: 'Pollution-Neutralizing Biotech',
    description: 'Urban Shield utilizes cutting-edge biotechnology ingredients that actively neutralize pollution particles on contact. Our fast-absorbing, non-greasy formula creates an invisible shield that prevents pollutants from adhering to the skin while providing hydration and protection against blue light from electronic devices.',
    details: [
      'Active pollution neutralizers',
      'Fast-absorbing formula',
      'Non-greasy texture',
      'Blue light protection'
    ],
    color: 'gold',
    image: '/lovable-uploads/fe4e0f1b-21eb-4787-94ec-269344df1076.png'
  }
];
