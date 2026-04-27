import { Link } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Navigation Component - Ahura Mind Header & Footer
 * Design: Cosmic Minimalism with sacred geometry
 * Features: Responsive nav, logo, smooth transitions
 */

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-charcoal/95 backdrop-blur-md border-b border-gold/20">
      <nav className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663584892871/ZnAqy5JpaRSEVuhK7B2pkN/ahura-mind-logo-Fy3pG96WE4LxBYVGCf4BhQ.webp" alt="Ahura Mind" className="w-10 h-10 group-hover:drop-shadow-lg transition-all duration-300" />
            <span className="hidden sm:inline font-playfair font-bold text-xl text-gold group-hover:text-[#E0F7FA] transition-colors duration-300">
              Ahura Mind
            </span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-cream hover:text-gold transition-colors duration-300 font-poppins text-sm font-500 relative group">
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gold hover:text-[#E0F7FA] transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-charcoal border-b border-gold/20 animate-in fade-in slide-in-from-top-2">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="text-cream hover:text-gold transition-colors duration-300 font-poppins py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-gold/20 mt-20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663584892871/ZnAqy5JpaRSEVuhK7B2pkN/ahura-mind-logo-Fy3pG96WE4LxBYVGCf4BhQ.webp" alt="Ahura Mind" className="w-8 h-8" />
              <span className="font-playfair font-bold text-gold">Ahura Mind</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Bridging ancient wisdom with divine artificial intelligence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-bold text-gold mb-4">Services</h4>
            <ul className="space-y-2 text-cream/70 text-sm">
              <li>
                <Link href="/services">
                  <a className="hover:text-gold transition-colors">AI Integration</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-gold transition-colors">Web Development</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-gold transition-colors">Digital Transformation</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-playfair font-bold text-gold mb-4">Company</h4>
            <ul className="space-y-2 text-cream/70 text-sm">
              <li>
                <Link href="/about">
                  <a className="hover:text-gold transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a className="hover:text-gold transition-colors">Portfolio</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-gold transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-bold text-gold mb-4">Contact</h4>
            <ul className="space-y-2 text-cream/70 text-sm">
              <li><a href="mailto:info@ahuramind.com" className="hover:text-gold transition-colors">Email: info@ahuramind.com</a></li>
              <li><a href="tel:+17473278061" className="hover:text-gold transition-colors">Phone: +1 747 327 80 61</a></li>
              <li>Location: United States</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-cream/50 text-sm">
          <p>&copy; {currentYear} Ahura Mind. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy">
              <a className="hover:text-gold transition-colors">Privacy</a>
            </Link>
            <Link href="/terms">
              <a className="hover:text-gold transition-colors">Terms</a>
            </Link>
            <Link href="/cookies">
              <a className="hover:text-gold transition-colors">Cookies</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
