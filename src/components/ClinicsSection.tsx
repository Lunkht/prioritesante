import { useState, useMemo } from 'react';
import { Search, MapPin, Phone, Clock, AlertCircle } from 'lucide-react';
import { clinics, Clinic } from '@/data/clinics';
import ScrollReveal from './ScrollReveal';

/**
 * Clinics Section - Nos Cliniques
 * Design Philosophy:
 * - Liste complète des cliniques Priorité Santé en Guinée
 * - Recherche et filtrage par ville/région
 * - Affichage des informations clés (services, horaires, urgences)
 * - Intégration avec carte interactive
 */

export default function ClinicsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClinic, setSelectedClinic] = useState<Clinic | null>(null);
  const [filterRegion, setFilterRegion] = useState('all');

  // Extraire les régions uniques
  const regions = useMemo(() => {
    const uniqueRegions = Array.from(new Set(clinics.map(c => c.region)));
    return uniqueRegions.sort();
  }, []);

  // Filtrer les cliniques
  const filteredClinics = useMemo(() => {
    let result = clinics.filter(clinic => {
      const matchesSearch = 
        clinic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        clinic.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        clinic.address.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRegion = filterRegion === 'all' || clinic.region === filterRegion;
      
      return matchesSearch && matchesRegion;
    });
    
    // Si aucune recherche/filtre actif, afficher seulement les 3 premières cliniques
    if (searchQuery === '' && filterRegion === 'all') {
      return result.slice(0, 3);
    }
    
    return result;
  }, [searchQuery, filterRegion]);
  
  // Compter le total de cliniques correspondant aux filtres
  const totalFilteredClinics = useMemo(() => {
    return clinics.filter(clinic => {
      const matchesSearch = 
        clinic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        clinic.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        clinic.address.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRegion = filterRegion === 'all' || clinic.region === filterRegion;
      
      return matchesSearch && matchesRegion;
    }).length;
  }, [searchQuery, filterRegion]);

  return (
    <section id="clinics" className="section-spacing bg-white">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal animation="animate-slideInUp">
          <div className="flex flex-col gap-4 max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nos Cliniques en Guinée
            </h2>
            <p className="text-lg text-muted-foreground">
              Trouvez la clinique Priorité Santé la plus proche de vous. Nous sommes présents dans les principales villes de Guinée pour vous servir.
            </p>
          </div>
        </ScrollReveal>

        {/* Search and Filter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <ScrollReveal animation="animate-slideInUp" delay={0.1}>
            {/* Search Input */}
            <div className="md:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Rechercher par nom, ville ou adresse..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="animate-slideInUp" delay={0.2}>
            {/* Region Filter */}
            <select
              value={filterRegion}
              onChange={(e) => setFilterRegion(e.target.value)}
              className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white cursor-pointer"
            >
              <option value="all">Toutes les régions</option>
              {regions.map(region => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </ScrollReveal>
        </div>

        {/* Results Count */}
        <ScrollReveal animation="animate-slideInUp" delay={0.3}>
          <div className="mb-6 text-sm text-muted-foreground">
            {searchQuery === '' && filterRegion === 'all' ? (
              <span>Affichage de 3 cliniques sur {totalFilteredClinics} disponibles</span>
            ) : (
              <span>{filteredClinics.length} clinique{filteredClinics.length !== 1 ? 's' : ''} trouvée{filteredClinics.length !== 1 ? 's' : ''}</span>
            )}
          </div>
        </ScrollReveal>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {filteredClinics.length > 0 ? (
            filteredClinics.map((clinic, index) => (
              <ScrollReveal key={clinic.id} animation="animate-slideInUp" delay={index * 0.05}>
                <div
                  onClick={() => setSelectedClinic(clinic)}
                  className="clinic-card group cursor-pointer hover-lift p-4"
                >
                  {/* Header with Emergency Badge */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {clinic.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {clinic.city}, {clinic.region}
                      </p>
                    </div>
                    {clinic.emergencyAvailable && (
                      <div className="ml-2 px-2 py-1 bg-red-50 rounded-full flex items-center gap-1">
                        <AlertCircle className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-primary">24/7</span>
                      </div>
                    )}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-3">
                    {/* Address */}
                    <div className="flex gap-3 items-start">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{clinic.address}</p>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-3 items-center">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href={`tel:${clinic.phone}`} className="text-sm font-semibold text-primary hover:underline">
                        {clinic.phone}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="flex gap-3 items-start">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{clinic.hours}</p>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-foreground mb-2">Services :</p>
                    <div className="flex flex-wrap gap-1">
                      {clinic.services.slice(0, 3).map((service, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-red-50 text-primary text-xs rounded-full font-medium"
                        >
                          {service}
                        </span>
                      ))}
                      {clinic.services.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-muted-foreground text-xs rounded-full font-medium">
                          +{clinic.services.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full py-1.5 px-3 border border-primary text-primary rounded-md text-xs font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover-scale">
                    Voir sur la carte
                  </button>
                </div>
              </ScrollReveal>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <ScrollReveal animation="animate-slideInUp">
                <div>
                  <p className="text-muted-foreground mb-2">Aucune clinique trouvée</p>
                  <p className="text-sm text-muted-foreground">Essayez une autre recherche ou un autre filtre</p>
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>

        {/* Selected Clinic Details */}
        {selectedClinic && (
          <ScrollReveal animation="animate-slideInUp">
            <div className="mt-8 p-6 bg-red-50 rounded-lg border border-primary">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{selectedClinic.name}</h3>
                  <p className="text-muted-foreground">{selectedClinic.city}, {selectedClinic.region}</p>
                </div>
                <button
                  onClick={() => setSelectedClinic(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Services disponibles :</h4>
                  <ul className="space-y-2">
                    {selectedClinic.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Informations pratiques :</h4>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <p><strong>Adresse :</strong> {selectedClinic.address}</p>
                    <p><strong>Téléphone :</strong> <a href={`tel:${selectedClinic.phone}`} className="text-primary hover:underline">{selectedClinic.phone}</a></p>
                    <p><strong>Email :</strong> <a href={`mailto:${selectedClinic.email}`} className="text-primary hover:underline">{selectedClinic.email}</a></p>
                    <p><strong>Horaires :</strong> {selectedClinic.hours}</p>
                    {selectedClinic.emergencyAvailable && (
                      <p className="text-primary font-semibold">✓ Service d'urgence 24h/24, 7j/7</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
