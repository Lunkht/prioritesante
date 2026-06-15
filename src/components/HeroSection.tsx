/**
 * Hero Section - Minimalisme Médical Moderne
 * Design Philosophy:
 * - Titre percutant avec sous-titre clair
 * - Image d'équipe médicale professionnelle
 * - Deux CTA distincts : RDV (rouge) et Don (bordure noire)
 * - Espacement généreux pour respiration visuelle
 */

import { Calendar } from 'lucide-react';

export default function HeroSection() {
  const handleAppointment = () => {
    const element = document.querySelector('#appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDonate = () => {
    const element = document.querySelector('#donate');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-cover bg-center min-h-screen flex items-center" style={{
      backgroundImage: 'url("https://d2xsxph8kpxj0f.cloudfront.net/310519663714842432/WUSrQ9vSUBHuPmivm65SYf/hero-medical-team-african-2337hVHfmQi9QxMZbfvt9Q.webp")',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Gradient overlay - from left (dark) to right (darker) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-black/50 pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="flex flex-col gap-8 animate-slideInUp hover-lift">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Votre santé, notre seule <span className="text-red-400">priorité</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-lg">
                Une clinique solidaire dédiée à offrir des soins de santé de qualité pour tous, sans exception. Parce que la santé est un droit, pas un privilège.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleAppointment}
                className="btn-primary text-base font-semibold py-4 px-8 transition-all duration-300 active:scale-95 hover-glow inline-flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Prendre Rendez-vous
              </button>
              <button
                onClick={handleDonate}
                className="btn-secondary text-base font-semibold py-4 px-8 transition-all duration-300 hover:bg-muted active:scale-95 hover-lift"
              >
                Soutenir notre ONG
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-8 text-sm text-gray-200 border-t border-white/20 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full" />
                <span>Certifié ONG</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full" />
                <span>100% Solidaire</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full" />
                <span>Accessible 24/7</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
