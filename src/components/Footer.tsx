import { Phone, Mail, Globe } from "lucide-react";

const Footer = () => (
  <footer className="gradient-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">AANCHAL TRADERS</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Aluminium Windows | Facade | Railing
            <br />
            Precision-crafted solutions since 2017.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-primary-foreground/70 text-sm">
            {["Home", "About", "Products", "Clients", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-primary-foreground transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
          <div className="space-y-3 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4" /> +91 98207 49595 / 90041 03996
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4" /> aanchaltraders85r@gmail.com
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4" /> www.aanchaltraders.com
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-primary-foreground/50 text-sm">
        Copyright © 2026 Aanchal Traders. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
