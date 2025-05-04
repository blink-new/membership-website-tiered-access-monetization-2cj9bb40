import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-[var(--gold)]">
              Premium<span className="text-white">Hub</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/auth"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--gold)] text-black font-medium 
                         hover:bg-[var(--gold-hover)] transition-colors duration-200"
            >
              <LogIn size={20} />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}