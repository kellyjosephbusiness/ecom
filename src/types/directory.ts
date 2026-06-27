// Plain prop types for the directory UI components. Templates resolve Sanity
// documents (and image refs) into these simple shapes so the components stay
// presentational and reusable.

export type RatingCategory = { label: string; score: number };

export type CommunityCardData = {
  name: string;
  href: string;
  tagline?: string;
  city?: string;
  state?: string;
  careTypes?: string[];
  logoUrl?: string;
  rating?: number;
  startingMonthlyCost?: number;
  featured?: boolean;
};

export type FaqItem = { question: string; answer: string };

export type CostComparisonRow = {
  name: string;
  startingMonthlyCost?: number;
  href?: string;
  highlight?: boolean;
};
