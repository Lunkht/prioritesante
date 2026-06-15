import React from 'react';
import {
  Stethoscope,
  Heart,
  Baby,
  AlertCircle,
  Microscope,
  Image,
  UserCheck,
  Scissors,
  Activity,
  User
} from 'lucide-react';

/**
 * Services Section - Minimalisme Médical Moderne
 * Design Philosophy:
 * - Grille de cartes avec accent rouge gauche
 * - Icônes minimalistes noires/rouges
 * - Descriptions claires et concises
 * - Hover effect subtil avec shadow
 */

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
}

const SERVICES: Service[] = [
  {
    id: 'general',
    title: 'Médecine Générale',
    description: 'Consultations médicales générales pour tous les âges',
    icon: <Stethoscope className="w-8 h-8" />,
    details: ['Consultations', 'Examens', 'Suivi médical'],
  },
  {
    id: 'pediatrics',
    title: 'Pédiatrie',
    description: 'Soins spécialisés pour les enfants et nourrissons',
    icon: <Baby className="w-8 h-8" />,
    details: ['Vaccinations', 'Suivi enfant', 'Urgences pédiatriques'],
  },
  {
    id: 'maternity',
    title: 'Maternité',
    description: 'Suivi de grossesse et accompagnement à la naissance',
    icon: <Heart className="w-8 h-8" />,
    details: ['Suivi grossesse', 'Accouchement', 'Post-partum'],
  },
  {
    id: 'emergency',
    title: 'Soins d\'Urgence',
    description: 'Prise en charge immédiate 24h/24, 7j/7',
    icon: <AlertCircle className="w-8 h-8" />,
    details: ['Urgences', 'Stabilisation', 'Orientation'],
  },
];

const ADDITIONAL_SERVICES: Service[] = [
  {
    id: 'lab',
    title: 'Laboratoire',
    description: 'Analyses biologiques complètes et rapides',
    icon: <Microscope className="w-8 h-8" />,
    details: ['Analyses sanguines', 'Dépistages', 'Résultats rapides'],
  },
  {
    id: 'imaging',
    title: 'Imagerie Médicale',
    description: 'Radiographie, échographie et imagerie avancée',
    icon: <Image className="w-8 h-8" />,
    details: ['Radiographie', 'Échographie', 'Interprétation'],
  },
  {
    id: 'specialist',
    title: 'Consultations Spécialisées',
    description: "Avis d'experts pour vos besoins spécifiques",
    icon: <UserCheck className="w-8 h-8" />,
    details: ['Cardiologie', 'Dermatologie', 'Autres spécialités'],
  },
  {
    id: 'surgery',
    title: 'Chirurgie',
    description: 'Interventions chirurgicales et suivis opératoires',
    icon: <Scissors className="w-8 h-8" />,
    details: ['Consultation pré-opératoire', 'chirurgie générale'],
  },
  {
    id: 'urology',
    title: 'Urologie',
    description: "Pathologies urinaires et de l'appareil génital",
    icon: <Activity className="w-8 h-8" />,
    details: ['Infections urinaires', 'Troubles de la miction', 'Problèmes de prostate'],
  },
  {
    id: 'andrology',
    title: 'Andrologie (homme)',
    description: 'Santé reproductive et sexuelle masculine',
    icon: <User className="w-8 h-8" />,
    details: ['Troubles de l\'érection', 'Infertilité masculine'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-spacing bg-white">
      <div className="container">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-2xl animate-slideInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nos Services Médicaux
            </h2>
            <p className="text-lg text-muted-foreground">
              Une gamme complète de services médicaux pour répondre à tous vos besoins de santé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-slideInUp"
              >
                <div className="service-card group hover-lift">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 bg-red-50 rounded-lg mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 hover-scale">
                    <div className="text-primary group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className="mt-6 w-full py-2 px-4 border border-primary text-primary rounded-md text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover-scale">
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8 animate-slideInUp">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Services Additionnels
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Nous proposons également une gamme complète de services de soutien pour compléter votre parcours médical.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ADDITIONAL_SERVICES.map((service, index) => (
                <div
                  key={service.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="animate-slideInUp"
                >
                  <div className="service-card group hover-lift">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-12 h-12 bg-red-50 rounded-lg mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 hover-scale">
                      <div className="text-primary group-hover:text-white transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button className="mt-6 w-full py-2 px-4 border border-primary text-primary rounded-md text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover-scale">
                      En savoir plus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
