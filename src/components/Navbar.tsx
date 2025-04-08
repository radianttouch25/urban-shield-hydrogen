import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (

    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 glass-dark shadow-md' : 'py-3 sm:py-4 md:py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
          >
            <span className="font-display text-gradient-gold text-lg sm:text-xl md:text-2xl font-bold">URBAN SHIELD</span>
            <span className="ml-1 text-[10px] sm:text-xs text-gold-light">by Radiant Touch</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              to="/technology"
              className={`text-sm font-medium ${location.pathname === '/technology' ? 'text-gold' : 'text-gray-200 hover:text-gold'} transition-colors`}
            >
              Technology
            </Link>
            <Link
              to="/benefits"
              className={`text-sm font-medium ${location.pathname === '/benefits' ? 'text-gold' : 'text-gray-200 hover:text-gold'} transition-colors`}
            >
              Benefits
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium ${location.pathname === '/about' ? 'text-gold' : 'text-gray-200 hover:text-gold'} transition-colors`}
            >
              About
            </Link>
            <Link
              to="/invest"
              className={`text-sm font-medium ${location.pathname === '/invest' ? 'text-gold' : 'text-gray-200 hover:text-gold'} transition-colors`}
            >
              Invest
            </Link>

            <Link
              to="/order"
              className="button-shine text-sm font-medium bg-gradient-gold text-dark px-5 py-2 rounded-md hover:shadow-lg hover:shadow-gold/20 transition-all hover:scale-105"
            >
              Order
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-200 hover:text-gold-light p-1 rounded-full hover:bg-white/5 active:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out glass-dark backdrop-blur-lg ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden border-t border-white/10`}
      >
        <div className="container mx-auto px-4 py-3 space-y-4">
          <Link
            to="/technology"
            className={`block text-sm font-medium py-2 ${location.pathname === '/technology' ? 'text-gold' : 'text-gray-200'}`}
          >
            Technology
          </Link>
          <Link
            to="/benefits"
            className={`block text-sm font-medium py-2 ${location.pathname === '/benefits' ? 'text-gold' : 'text-gray-200'}`}
          >
            Benefits
          </Link>
          <Link
            to="/about"
            className={`block text-sm font-medium py-2 ${location.pathname === '/about' ? 'text-gold' : 'text-gray-200'}`}
          >
            About
          </Link>
          <Link
            to="/invest"
            className={`block text-sm font-medium py-2 ${location.pathname === '/invest' ? 'text-gold' : 'text-gray-200'}`}
          >
            Invest
          </Link>

          <div className="pt-2 pb-3">
            <Link
              to="/order"
              className="button-shine block text-center text-sm font-medium bg-gradient-gold text-dark px-6 py-3 rounded-md hover:shadow-lg hover:shadow-gold/20 transition-all"
            >
              Order
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
