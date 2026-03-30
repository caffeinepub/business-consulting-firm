import { Briefcase, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 text-navy font-bold text-xl tracking-tight"
          data-ocid="nav.link"
        >
          <span className="bg-navy p-1.5 rounded">
            <Briefcase className="w-4 h-4 text-white" />
          </span>
          <span className="text-navy">
            Pro<span className="text-primary">Consult</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="text-sm font-medium text-body hover:text-navy transition-colors duration-200"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => handleNav("#contact")}
            className="bg-navy text-white text-sm font-semibold px-5 py-2 rounded hover:bg-navy-dark transition-colors duration-200"
            data-ocid="nav.primary_button"
          >
            Request a Quote
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="text-sm font-medium text-body hover:text-navy transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => handleNav("#contact")}
            className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded text-center hover:bg-navy-dark transition-colors"
            data-ocid="nav.primary_button"
          >
            Request a Quote
          </button>
        </div>
      )}
    </header>
  );
}
