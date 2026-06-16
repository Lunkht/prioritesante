import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ImpactSection from '@/components/ImpactSection';
import ServicesSection from '@/components/ServicesSection';
import MissionSection from '@/components/MissionSection';
import ClinicsSection from '@/components/ClinicsSection';
import PractitionersSection from '@/components/PractitionersSection';
import PracticalSection from '@/components/PracticalSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * Home Page - Priorité Santé Clinic
 * 
 * Design Philosophy: Minimalisme Médical Moderne
 * - Sections bien délimitées avec espacement généreux
 * - Palette stricte : Rouge (action), Blanc (pureté), Noir (professionnalisme)
 * - Typographie hiérarchique : Poppins (titres) + Inter (corps)
 * - Animations fluides et fonctionnelles
 * - Accessible WCAG AAA
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header - Navigation sticky */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section - Impact visuel immédiat */}
        <HeroSection />

        {/* About Section - Présentation */}
        <AboutSection />

        {/* Services Section - Grille de services */}
        <ServicesSection />

{/* Practitioners Section - Nos praticiens */}
<PractitionersSection />

{/* Practical Info - Pratique */}
<PracticalSection />

{/* Clinics Section - Liste des cliniques en Guinée */}
<ClinicsSection />

        {/* Impact Section - Chiffres clés animés */}
        <ImpactSection />

        {/* Mission & Donation Section - Engagement ONG */}
        <MissionSection />

        {/* Testimonials Section - Avis patients */}
        <TestimonialsSection />

        {/* Contact & Appointment Section - Formulaires avec carte */}
        <ContactSection />
      </main>

      {/* Footer - Navigation et informations */}
      <Footer />
    </div>
  );
}
