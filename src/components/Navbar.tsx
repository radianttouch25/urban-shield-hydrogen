
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
        isScrolled ? 'py-2 glass-dark shadow-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center"
          >
            <span className="font-display text-gradient-gold text-2xl font-bold">URBAN SHIELD</span>
            <span className="ml-1 text-xs text-gold-light">by Radiant Touch</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#technology-section" className="text-sm font-medium text-gray-200 hover:text-gold transition-colors">
              Technology
            </Link>
            <Link to="/#urban-problem" className="text-sm font-medium text-gray-200 hover:text-gold transition-colors">
              Benefits
            </Link>
            <Link to="/about" className={`text-sm font-medium ${location.pathname === '/about' ? 'text-gold' : 'text-gray-200 hover:text-gold'} transition-colors`}>
              About
            </Link>
            <Link to="/terms" className={`text-sm font-medium ${location.pathname === '/terms' ? 'text-gold' : 'text-gray-200 hover:text-gold'} transition-colors`}>
              Terms
            </Link>
            <Link to="/privacy" className={`text-sm font-medium ${location.pathname === '/privacy' ? 'text-gold' : 'text-gray-200 hover:text-gold'} transition-colors`}>
              Privacy
            </Link>
            <Link to="/contact" className="button-shine text-sm font-medium bg-gradient-gold text-dark px-6 py-2 rounded-md hover:shadow-lg transition-shadow">
              Pre-Order
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-gray-200 hover:text-gold-light"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 glass-dark backdrop-blur-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[400px] py-4 border-t border-white/10' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link 
            to="/#technology-section" 
            className="text-gray-200 hover:text-gold py-2 px-4 rounded-md transition-colors"
          >
            Technology
          </Link>
          <Link 
            to="/#urban-problem" 
            className="text-gray-200 hover:text-gold py-2 px-4 rounded-md transition-colors"
          >
            Benefits
          </Link>
          <Link 
            to="/about" 
            className={`py-2 px-4 rounded-md transition-colors ${location.pathname === '/about' ? 'text-gold' : 'text-gray-200 hover:text-gold'}`}
          >
            About
          </Link>
          <Link 
            to="/terms" 
            className={`py-2 px-4 rounded-md transition-colors ${location.pathname === '/terms' ? 'text-gold' : 'text-gray-200 hover:text-gold'}`}
          >
            Terms
          </Link>
          <Link 
            to="/privacy" 
            className={`py-2 px-4 rounded-md transition-colors ${location.pathname === '/privacy' ? 'text-gold' : 'text-gray-200 hover:text-gold'}`}
          >
            Privacy
          </Link>
          <Link 
            to="/contact" 
            className="bg-gradient-gold text-dark py-2 px-4 rounded-md font-medium"
          >
            Pre-Order
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
