import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { clinics, Clinic } from '@/data/clinics';

/**
 * Clinics Map Component - Carte OpenStreetMap avec Leaflet
 * Affiche les emplacements de toutes les cliniques Priorité Santé
 */

interface ClinicsMapProps {
  selectedClinic?: Clinic | null;
  onClinicSelect?: (clinic: Clinic) => void;
}

export default function ClinicsMap({ selectedClinic, onClinicSelect }: ClinicsMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialiser la carte centrée sur la Guinée
    if (!map.current) {
      map.current = L.map(mapContainer.current).setView([9.657558, -13.576852], 13);

      // Ajouter le layer OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map.current);
    }

    // Créer les marqueurs pour chaque clinique
    clinics.forEach((clinic) => {
      // Créer une icône personnalisée
      const iconHtml = `
        <div style="
          background-color: #DC143C;
          color: white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
          border: 3px solid white;
          cursor: pointer;
          transition: all 0.3s ease;
        ">
          +
        </div>
      `;

      const icon = L.divIcon({
        html: iconHtml,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20],
      });

      // Créer le marqueur
      const marker = L.marker([clinic.latitude, clinic.longitude], { icon })
        .bindPopup(
          `<div style="min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1A1A1A;">${clinic.name}</h3>
            <p style="margin: 0 0 4px 0; font-size: 12px; color: #666;">${clinic.city}, ${clinic.region}</p>
            <p style="margin: 0 0 8px 0; font-size: 12px; color: #666;">${clinic.address}</p>
            <p style="margin: 0 0 4px 0; font-size: 12px;">
              <strong>Tél:</strong> <a href="tel:${clinic.phone}" style="color: #DC143C; text-decoration: none;">${clinic.phone}</a>
            </p>
            <p style="margin: 0 0 8px 0; font-size: 12px;">
              <strong>Services:</strong> ${clinic.services.slice(0, 2).join(', ')}${clinic.services.length > 2 ? '...' : ''}
            </p>
            ${clinic.emergencyAvailable ? '<p style="margin: 0; font-size: 12px; color: #DC143C; font-weight: bold;">✓ Urgences 24/7</p>' : ''}
          </div>`,
          {
            maxWidth: 250,
            className: 'clinic-popup',
          }
        )
        .addTo(map.current!);

      // Ajouter un événement click
      marker.on('click', () => {
        if (onClinicSelect) {
          onClinicSelect(clinic);
        }
      });

      markersRef.current[clinic.id] = marker;
    });

    return () => {
      // Cleanup
    };
  }, [onClinicSelect]);

  // Mettre en évidence la clinique sélectionnée
  useEffect(() => {
    if (selectedClinic && map.current && markersRef.current[selectedClinic.id]) {
      const marker = markersRef.current[selectedClinic.id];
      
      // Centrer la carte sur le marqueur
      map.current.setView([selectedClinic.latitude, selectedClinic.longitude], 12);
      
      // Ouvrir le popup
      marker.openPopup();

      // Animer le marqueur
      const element = marker.getElement();
      if (element) {
        element.style.transform = 'scale(1.3)';
        element.style.zIndex = '1000';
      }
    }
  }, [selectedClinic]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '0.5rem',
        overflow: 'hidden',
      }}
    />
  );
}
