import { Link } from 'react-router-dom';
import { Crown, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/70 backdrop-blur-md border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-[hsl(45,100%,60%)]" />
              <span className="text-xl font-bold gold-text">Premium</span>
            </Link>
            <p className="text-white/70 text-sm">
              Exclusive content and premium experiences for our valued members.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/content">Content Library</FooterLink>
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h3 className="text-white font-semibold mb-4">Membership</h3>
            <ul className="space-y-2">
              <FooterLink to="/pricing">Plans & Pricing</FooterLink>
              <FooterLink to="/faq">FAQ</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Email: support@premium.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Premium Ave, Suite 100, New York, NY 10001</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Premium Membership. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-white/70 hover:text-[hsl(45,100%,60%)] transition-colors duration-200 text-sm"
      >
        {children}
      </Link>
    </li>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon = ({ icon }: SocialIconProps) => {
  return (
    <a 
      href="#" 
      className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 text-white/70 hover:bg-[hsl(45,100%,60%)] hover:text-black transition-colors duration-200"
    >
      {icon}
    </a>
  );
};

export default Footer;