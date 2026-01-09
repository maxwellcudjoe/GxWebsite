import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

export interface SubFeature {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface FeatureModule {
  title: string;
  description: string;
  icon: LucideIcon;
  features: SubFeature[];
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}
