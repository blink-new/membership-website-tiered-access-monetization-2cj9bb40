import { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-md mx-auto glass-card rounded-xl p-8 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-8">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        <form className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-10 pr-4
                           focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-10 pr-4
                         focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                className="w-full bg-white/5 border border-white/10 rounded-md py-2 pl-10 pr-4
                         focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--gold)] text-black font-semibold py-3 px-4 rounded-md
                     hover:bg-[var(--gold-hover)] transition-colors duration-200"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[var(--gold)] hover:underline"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}