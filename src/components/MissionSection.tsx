import { useState } from 'react';
import { Heart, Users, Target } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

/**
 * Mission & Donation Section - Minimalisme Médical Moderne
 * Design Philosophy:
 * - Engagement ONG clairement communiqué
 * - Formulaire de don rapide et simple
 * - Options de don prédéfinies + libre
 * - Image inspirante de l'équipe
 */

export default function MissionSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50000);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');

  const donationAmounts = [50000, 100000, 250000, 500000]; // GNF

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    if (amount && donorName && donorEmail) {
      alert(`Merci pour votre don de ${amount} GNF ! Vous recevrez une confirmation à ${donorEmail}`);
      // Reset form
      setDonorName('');
      setDonorEmail('');
      setCustomAmount('');
      setSelectedAmount(50000);
    }
  };

  return (
    <section id="mission" className="section-spacing bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal animation="animate-slideInUp">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Notre Mission Solidaire
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Priorité Santé est une ONG dédiée à l'accès équitable aux soins de santé. Nous croyons que la santé est un droit humain fondamental, pas un privilège.
                </p>
              </div>

              {/* Mission Points */}
              <div className="space-y-4">
                <div className="flex gap-4 items-start hover-lift">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg hover-scale transition-all duration-300">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Soins Accessibles</h3>
                    <p className="text-sm text-muted-foreground">
                      Soins gratuits ou à faible coût pour les populations les plus vulnérables.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Équipe Engagée</h3>
                    <p className="text-sm text-muted-foreground">
                      Professionnels de santé passionnés par l'humanitaire et la solidarité.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-lg">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Impact Durable</h3>
                    <p className="text-sm text-muted-foreground">
                      Prévention, éducation sanitaire et suivi long terme pour nos patients.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Donation Form */}
          <ScrollReveal animation="animate-scaleIn" delay={0.2}>
            <div className="flex flex-col gap-8">
              {/* Image */}
              <div className="relative rounded-lg overflow-hidden h-64 md:h-80 border border-border">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663714842432/WUSrQ9vSUBHuPmivm65SYf/patient-care-african-jb9EuPvwMAzKePKDhMNDX3.webp"
                  alt="Moment de soin patient africain"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Donation Form */}
              <div id="donate" className="bg-white border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Faire un Don</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Votre contribution nous aide à continuer notre mission. Chaque don compte.
                </p>

                <form onSubmit={handleDonate} className="space-y-4">
                  {/* Donation Amount Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Montant du don (GNF)
                    </label>
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount('');
                          }}
                          className={`py-2 px-3 rounded-md font-semibold transition-all duration-200 text-xs ${
                            selectedAmount === amount && !customAmount
                              ? 'bg-primary text-white'
                              : 'border border-border text-foreground hover:border-primary'
                          }`}
                        >
                          {(amount / 1000).toFixed(0)}K
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      placeholder="Montant libre (GNF)"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="form-input"
                    />
                  </div>

                  {/* Donor Info */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="Nom complet"
                      className="form-input"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Votre email
                    </label>
                    <input
                      type="email"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="email@exemple.com"
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full py-3 font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    Faire un don maintenant
                  </button>

                  {/* Info */}
                  <p className="text-xs text-muted-foreground text-center">
                    Votre don est sécurisé et confidentiel. Reçu fourni.
                  </p>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
