import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Projects", href: "#projects" },
  { label: "Sectors", href: "#sectors" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 ${
          scrolled 
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <img 
              src={logo} 
              alt="Aanchal Traders Logo" 
              className={`h-10 w-auto transition-all ${
                scrolled ? "drop-shadow-lg" : "drop-shadow-2xl"
              }`}
            />
            <span className={`text-xl font-bold uppercase tracking-wide ${
              scrolled ? "text-foreground drop-shadow-lg" : "text-white/95 drop-shadow-2xl"
            }`}>
              AANCHAL TRADERS
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary group relative ${
                  scrolled 
                    ? "text-foreground hover:text-primary hover:drop-shadow-md" 
                    : "text-white/90 hover:text-white hover:drop-shadow-md drop-shadow-sm"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            asChild
            size="sm"
            className={`hidden md:flex gap-2 font-semibold transition-all shadow-lg ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
            }`}
          >
            <a href="tel:+919820749595" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call: 98207 49595 / 90041 03996
            </a>
          </Button>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden ml-auto" onClick={toggleMenu}>
            <svg className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-background/95 backdrop-blur-md border-t border-border/50 px-4 py-6">
            <div className="flex flex-col space-y-4 max-w-md mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold text-foreground hover:text-primary py-3 block transition-colors border-b border-border/20 last:border-b-0"
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
              >
                <a href="tel:+919820749595">
                  📞 Call Now: 98207 49595
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

