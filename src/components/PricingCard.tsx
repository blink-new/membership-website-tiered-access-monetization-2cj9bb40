import { Check } from 'lucide-react';

interface PricingCardProps {
  tier: {
    id: string;
    name: string;
    price: number;
    features: string[];
    color: string;
  };
}

export default function PricingCard({ tier }: PricingCardProps) {
  const isPremium = tier.id === 'premium';

  return (
    <div 
      className={`glass-card rounded-xl p-6 ${isPremium ? 'gold-glow' : ''} 
                 transform hover:scale-105 transition-all duration-300 w-full max-w-sm mx-auto`}
    >
      <h3 className={`text-2xl font-bold mb-2 ${tier.color}`}>
        {tier.name}
      </h3>
      
      <div className="mb-6">
        <span className="text-4xl font-bold">
          ${tier.price}
        </span>
        <span className="text-gray-400">/month</span>
      </div>

      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="text-[var(--gold)]" size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        className={`w-full py-3 px-6 rounded-md font-semibold transition-all duration-200
                   ${isPremium 
                     ? 'bg-[var(--gold)] text-black hover:bg-[var(--gold-hover)]' 
                     : 'bg-white/10 hover:bg-white/20'}`}
      >
        {tier.price === 0 ? 'Get Started' : 'Subscribe Now'}
      </button>
    </div>
  );
}