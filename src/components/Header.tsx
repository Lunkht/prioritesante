import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component - Minimalisme Médical Moderne
 * Design Philosophy:
 * - Logo textuel épuré avec icône médicale
 * - Navigation claire et accessible
 * - CTA "Prendre RDV" en rouge pour action immédiate
 * - Responsive avec menu mobile
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'Présentation', href: '#presentation' },
    { label: 'Nos Services', href: '#services' },
    { label: 'Notre Mission', href: '#mission' },
    { label: 'Nos Cliniques', href: '#clinics' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663714842432/WUSrQ9vSUBHuPmivm65SYf/logo-priorite-sante-aW8cQzGyWynNiXdvsZYwro.webp"
              alt="Logo Priorité Santé"
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">Priorité</span>
              <span className="text-xs font-semibold text-primary">Santé</span>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                const element = document.querySelector('#appointment');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary text-white px-6 py-3 rounded-md font-semibold transition-all duration-200 hover:bg-red-700 active:scale-95 shadow-sm cursor-pointer"
            >
              Prendre RDV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border bg-white pb-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 px-4 py-2"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  const element = document.querySelector('#appointment');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
                className="bg-primary text-white mx-4 px-6 py-3 rounded-md font-semibold transition-all duration-200 hover:bg-red-700 active:scale-95 cursor-pointer"
              >
                Prendre RDV
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
