export interface Clinic {
  id: string;
  name: string;
  city: string;
  region: string;
  address: string;
  latitude: number;
  longitude: number;
  phone: string;
  email: string;
  hours: string;
  services: string[];
  emergencyAvailable: boolean;
}

export const clinics: Clinic[] = [
  {
    id: 'conakry-yattaya',
    name: 'Clinique Priorité Santé - Conakry',
    city: 'Conakry',
    region: 'Conakry',
    address: 'Yattaya marché, Conakry, Guinée',
    latitude: 9.657558,
    longitude: -13.576852,
    phone: '+224 621-21-41-76',
    email: 'contact@priorite-sante.org',
    hours: 'Lun-Ven: 8h30-20h | Sam-Dim: 9h-18h',
    services: ['Médecine générale', 'Urgences', 'Pédiatrie', 'Maternité'],
    emergencyAvailable: true,
  },
];
