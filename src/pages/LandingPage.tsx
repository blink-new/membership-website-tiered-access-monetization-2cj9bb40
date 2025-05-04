import { ArrowRight } from 'lucide-react';
import { MEMBERSHIP_TIERS } from '../lib/constants';
import PricingCard from '../components/PricingCard';

export default function LandingPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center animate-fade-in">
        <h1 className="text-5xl font-bold mb-6">
          Unlock Premium Content
          <span className="text-[var(--gold)]"> Today</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join our exclusive community and get access to premium content, workshops,
          and personalized mentoring. Start your journey to success now.
        </p>
        <a 
          href="#pricing"
          className="inline-flex items-center gap-2 bg-[var(--gold)] text-black px-8 py-4 rounded-md 
                   font-semibold hover:bg-[var(--gold-hover)] transition-colors duration-200"
        >
          View Membership Tiers
          <ArrowRight size={20} />
        </a>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 animate-fade-in">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-[var(--gold)]">
              Premium Content
            </h3>
            <p className="text-gray-300">
              Access exclusive articles, videos, and workshops created by industry experts.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-[var(--gold)]">
              Community Access
            </h3>
            <p className="text-gray-300">
              Connect with like-minded individuals and grow together in our active community.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-[var(--gold)]">
              Expert Mentoring
            </h3>
            <p className="text-gray-300">
              Get personalized guidance and feedback from experienced mentors.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Choose Your <span className="text-[var(--gold)]">Membership</span>
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Select the perfect membership tier that matches your goals and unlock
            a world of premium content and exclusive benefits.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            {MEMBERSHIP_TIERS.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}