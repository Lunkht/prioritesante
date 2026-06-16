import { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import ClinicsMap from './ClinicsMap';
import ScrollReveal from './ScrollReveal';

/**
 * Contact & Appointment Section - Minimalisme Médical Moderne
 * Design Philosophy:
 * - Formulaire de contact simple et accessible
 * - Informations pratiques claires
 * - Horaires d'ouverture visibles
 * - Fausse carte intégrée
 */

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adresse',
      content: 'Conakry, Yattaya marché, Guinée',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      content: '+224 621-21-41-76',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'contact@priorite-sante.org',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horaires',
      content: 'Lun-Ven: 8h30-20h | Sam-Dim: 9h-18h',
    },
  ];

  return (
    <section id="contact" className="section-spacing bg-white">
      <div className="container">
        <div className="flex flex-col gap-16">
          {/* Section Header */}
          <ScrollReveal animation="animate-slideInUp">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nous Contacter
              </h2>
              <p className="text-lg text-muted-foreground">
                Avez-vous des questions ? Nous sommes là pour vous aider. Contactez-nous par téléphone, email ou remplissez le formulaire ci-dessous.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} animation="animate-slideInUp" delay={index * 0.1}>
                <div
                  className="flex flex-col gap-3 p-6 bg-gray-50 rounded-lg border border-border hover:border-primary transition-all duration-300 hover-lift"
                >
                  <div className="text-primary hover-scale transition-all duration-300">{info.icon}</div>
                  <h3 className="font-semibold text-foreground">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">{info.content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal animation="animate-slideInUp">
              <div className="hover-lift">
                <div id="appointment" className="bg-white border border-border rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Prendre Rendez-vous</h3>
                  <p className="text-muted-foreground mb-6">
                    Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="votre@email.com"
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+33 (0)..."
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Objet de votre demande"
                        className="form-input"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Votre message..."
                        rows={5}
                        className="form-textarea"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full py-3 font-semibold transition-all duration-300"
                    >
                      Envoyer le message
                    </button>

                    {isSubmitted && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium animate-slideInUp">
                        ✓ Message envoyé avec succès ! Nous vous recontacterons bientôt.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </ScrollReveal>

            {/* Map & Emergency Info */}
            <ScrollReveal animation="animate-scaleIn" delay={0.2}>
              <div className="flex flex-col gap-6">
                {/* Emergency Info */}
                <div className="bg-red-50 rounded-lg p-6 border border-border">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2 text-primary">
                    <Phone className="w-5 h-5" />
                    Urgences 24/7
                  </h4>
                  <p className="text-sm text-foreground mb-3">
                    En cas d'urgence, appelez immédiatement notre service d'urgences :
                  </p>
                  <p className="text-2xl font-bold text-primary">+224 621-21-41-76</p>
                </div>

                {/* Opening Hours */}
                <div className="bg-white border border-border rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Horaires d'ouverture
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lundi - Vendredi</span>
                      <span className="font-semibold text-foreground">8h30 - 20h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Samedi</span>
                      <span className="font-semibold text-foreground">9h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dimanche</span>
                      <span className="font-semibold text-foreground">9h00 - 18h00</span>
                    </div>
                    <div className="border-t border-border pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Urgences</span>
                        <span className="font-semibold text-primary">24h/24 - 7j/7</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini Map */}
                <div className="w-full h-48 md:h-56 rounded-lg border border-border overflow-hidden">
                  <ClinicsMap selectedClinic={null} onClinicSelect={() => {}} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
