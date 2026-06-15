import { User } from 'lucide-react';

const PRACTITIONERS = [
    { name: "Dr. Bérété Alpha", specialty: "Médecine Générale", role: "Directeur Médical" },
    { name: "Dr. Camara Fatoumata", specialty: "Pédiatrie", role: "Spécialiste" },
    { name: "Dr. Diallo Mamadou", specialty: "Urologie", role: "Spécialiste" },
    { name: "Dr. Keita Aminata", specialty: "Maternité & Gynécologie", role: "Spécialiste" },
    { name: "Dr. Sow Ibrahim", specialty: "Chirurgie Générale", role: "Spécialiste" },
    { name: "Dr. Barry Mariama", specialty: "Cardiologie", role: "Spécialiste" },
    { name: "Dr. Sylla Aboubacar", specialty: "Imagerie Médicale", role: "Spécialiste" },
];

export default function PractitionersSection() {
    return (
        <section id="practitioners" className="section-spacing bg-gray-50">
            <div className="container">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4 max-w-2xl animate-slideInUp">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">
                            Nos praticiens
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Une équipe d'experts dévoués et passionnés, mobilisés pour vous offrir les meilleurs soins en Guinée.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PRACTITIONERS.map((practitioner, index) => (
                            <div
                                key={index}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                className="bg-white p-6 rounded-lg border border-border hover-lift animate-slideInUp"
                            >
                                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 hover-scale">
                                    <User className="text-primary w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-foreground text-lg mb-1">
                                    {practitioner.name}
                                </h3>
                                <p className="text-sm text-primary font-semibold mb-2">
                                    {practitioner.specialty}
                                </p>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                                    {practitioner.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}