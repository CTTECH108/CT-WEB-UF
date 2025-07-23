import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoPath from "@assets/WhatsApp Image 2025-03-19 at 12.21.50 PM_1751801533681.jpeg";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/milestones", label: "Milestones" },
    { href: "/contact", label: "Contact" },
    { href: "/cancellations", label: "Cancellations" },
    { href: "/privacy", label: "Privacy" },
    { href: "/shipping", label: "Shipping" },
    { href: "/terms", label: "Terms" },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
            <img src={logoPath} alt="CTSolutions Logo" className="h-10 w-10 rounded-full" />
            <div className="text-2xl font-tech font-bold text-ct-primary neon-glow">
              CT<span className="text-ct-secondary">Solutions</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`nav-link font-medium transition-colors duration-300 ${
                    location.pathname === item.href
                      ? "text-ct-primary"
                      : "text-ct-text hover:text-ct-primary"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="mobile-menu-btn text-ct-primary hover:text-ct-secondary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
              <img src={logoPath} alt="CTSolutions Logo" className="h-8 w-8 rounded-full" />
              <div className="text-xl font-tech font-bold text-ct-primary neon-glow">CTSolutions</div>
            </Link>
            <button
              onClick={closeMobileMenu}
              className="text-ct-primary"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block w-full text-left font-medium py-2 transition-colors duration-300 ${
                  location.pathname === item.href
                    ? "text-ct-primary"
                    : "text-ct-text hover:text-ct-primary"
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}
