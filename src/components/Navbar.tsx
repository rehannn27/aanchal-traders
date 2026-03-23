import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <a href="#home" className="flex items-center gap-3">
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
          <Button variant="ghost" size="sm" className="md:hidden ml-auto">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

