export const MEMBERSHIP_TIERS = [
  {
    id: 'basic',
    name: 'Basic',
    price: 0,
    features: [
      'Access to public content',
      'Community forum access',
      'Monthly newsletter'
    ],
    color: 'text-white'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 9.99,
    features: [
      'All Basic features',
      'Premium articles',
      'Video tutorials',
      'Priority support'
    ],
    color: 'text-blue-400'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 19.99,
    features: [
      'All Pro features',
      'Exclusive workshops',
      'Private mentoring',
      'Early access to content',
      'Custom badge'
    ],
    color: 'text-[var(--gold)]'
  }
];