import { Heart, Users, Clock, MapPin } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8 animate-slideInUp">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Présentation
              </h2>
              <div className="bg-gray-50 rounded-lg p-4 border border-border inline-block self-start">
                <div className="flex items-center gap-3 mb-1">
                  <Users className="w-5 h-5 text-primary" />
                  <p className="text-xl font-bold text-primary">Dr. Bérété Alpha</p>
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Directeur Médical</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fondée par le Dr. Bérété Alpha, Priorité Santé est une clinique solidaire
                dédiée à offrir des soins de santé de qualité pour tous, sans exception.
                Notre mission est de rendre la santé accessible à chaque personne,
                indépendamment de sa situation financière.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Soins de Qualité</h3>
                  <p className="text-sm text-muted-foreground">
                    Une équipe médicale qualifiée et des équipements modernes pour des soins optimaux.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Accessibilité</h3>
                  <p className="text-sm text-muted-foreground">
                    Présents dans les principales villes de Guinée pour être proches de vous.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-scaleIn" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-lg overflow-hidden h-64 md:h-72 border border-border">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663714842432/WUSrQ9vSUBHuPmivm65SYf/patient-care-african-jb9EuPvwMAzKePKDhMNDX3.webp"
                alt="Équipe médicale Priorité Santé"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-semibold">Priorité Santé</p>
                <p className="text-gray-200 text-sm">Ensemble pour votre santé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
