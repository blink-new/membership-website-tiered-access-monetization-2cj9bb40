import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-[hsl(45,100%,60%)]" />
            <span className="text-xl font-bold gold-text">Premium</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/content">Content</NavLink>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-[hsl(45,100%,60%)] text-[hsl(45,100%,60%)]">
              Sign In
            </Button>
            <Button className="gold-gradient text-black">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden absolute left-0 right-0 bg-black/90 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out',
            isMenuOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
          )}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <NavLink to="/" mobile onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/pricing" mobile onClick={toggleMenu}>Pricing</NavLink>
            <NavLink to="/about" mobile onClick={toggleMenu}>About</NavLink>
            <NavLink to="/content" mobile onClick={toggleMenu}>Content</NavLink>
            <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
              <Button variant="outline" className="border-[hsl(45,100%,60%)] text-[hsl(45,100%,60%)]">
                Sign In
              </Button>
              <Button className="gold-gradient text-black">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink = ({ to, children, mobile = false, onClick }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        'transition-colors duration-200',
        mobile ? 'text-white hover:text-[hsl(45,100%,60%)] text-lg' : 'text-white/80 hover:text-white'
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;