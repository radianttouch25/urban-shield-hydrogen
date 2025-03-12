
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-darker relative">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5 bg-noise mix-blend-overlay"></div>
      
      {/* Back to top button */}
      <div className="container mx-auto px-4 relative">
        <button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-dark w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-gold/20 transition-shadow button-shine"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-gold text-2xl font-bold">Urban Shield</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Revolutionary anti-pollution skincare technology that provides molecular-level protection against urban environmental stressors.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Pre-Order
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gold mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-400">
                  Radiant Touch LIMITED<br />
                  123 Innovation Drive<br />
                  London, UK
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">
                  <Mail className="h-5 w-5" />
                </span>
                <a href="mailto:info@urbanshield.com" className="text-gray-400 hover:text-gold transition-colors">
                  info@urbanshield.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <span className="text-gray-400">
                  +44 20 7123 4567
                </span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Join Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest in skincare technology and exclusive offers.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-dark-light border border-white/10 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="bg-gradient-gold text-dark px-4 py-2 rounded-md button-shine"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Radiant Touch LIMITED. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-500 hover:text-gold text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-gray-500 hover:text-gold text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
