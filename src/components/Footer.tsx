import { Heart, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

/**
 * Footer Component - Minimalisme Médical Moderne
 * Design Philosophy:
 * - Liens utiles bien organisés
 * - Mentions légales et politique de confidentialité
 * - Icônes réseaux sociaux
 * - Design épuré et accessible
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Médecine Générale', href: '#' },
      { label: 'Pédiatrie', href: '#' },
      { label: 'Maternité', href: '#' },
      { label: 'Urgences', href: '#' },
    ],
    company: [
      { label: 'À propos', href: '#' },
      { label: 'Notre Mission', href: '#mission' },
      { label: 'Équipe', href: '#' },
      { label: 'Carrières', href: '#' },
    ],
    legal: [
      { label: 'Mentions Légales', href: '#' },
      { label: 'Politique de Confidentialité', href: '#' },
      { label: 'Conditions d\'Utilisation', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-md">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">Priorité</span>
                <span className="text-xs font-semibold text-red-300">Santé</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Une clinique solidaire dédiée à offrir des soins de santé de qualité pour tous, sans exception.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-primary transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white">Entreprise</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white">Légal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white">Contact</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-300">Téléphone</p>
                <a href="tel:+224621214176" className="text-white hover:text-red-300 transition-colors">
                  +224 621-21-41-76
                </a>
              </div>
              <div>
                <p className="text-gray-300">Email</p>
                <a href="mailto:contact@priorite-sante.org" className="text-white hover:text-red-300 transition-colors">
                  contact@priorite-sante.org
                </a>
              </div>
              <div>
                <p className="text-gray-300">Adresse</p>
                <p className="text-white">Conakry, Yattaya marché</p>
                <p className="text-white">Guinée</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">
            © {currentYear} Priorité Santé. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition-colors">
              Politique de Confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Conditions d'Utilisation
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Nous Contacter
            </a>
          </div>
        </div>
      </div>

      {/* Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-all duration-300 opacity-0 hover:opacity-100 pointer-events-none hover:pointer-events-auto"
        style={{
          opacity: typeof window !== 'undefined' && window.scrollY > 300 ? 1 : 0,
          pointerEvents: typeof window !== 'undefined' && window.scrollY > 300 ? 'auto' : 'none',
        }}
        aria-label="Retour au haut"
      >
        ↑
      </button>
    </footer>
  );
}
