
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen 
        ? "bg-dark/90 backdrop-blur-md shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-gold text-2xl font-bold">Urban Shield</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-lg transition-colors hover:text-gold ${isActive ? 'text-gold' : 'text-white'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-lg transition-colors hover:text-gold ${isActive ? 'text-gold' : 'text-white'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-lg transition-colors hover:text-gold ${isActive ? 'text-gold' : 'text-white'}`
              }
            >
              Pre-Order
            </NavLink>
          </nav>
          
          {/* Action Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-gradient-gold text-dark hover:shadow-gold/20 hover:shadow-lg transition-all duration-300 button-shine"
            >
              <Link to="/contact">
                Pre-Order | 20% Off
              </Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? "max-h-screen opacity-100 py-4 border-t border-white/10" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-lg py-2 transition-colors ${isActive ? 'text-gold' : 'text-white'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-lg py-2 transition-colors ${isActive ? 'text-gold' : 'text-white'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-lg py-2 transition-colors ${isActive ? 'text-gold' : 'text-white'}`
              }
            >
              Pre-Order
            </NavLink>
            
            <Button 
              asChild
              className="bg-gradient-gold text-dark hover:shadow-gold/20 w-full mt-4 button-shine"
            >
              <Link to="/contact">
                Pre-Order Now | 20% Off
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
