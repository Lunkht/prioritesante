import ScrollReveal from './ScrollReveal';

const PRACTITIONERS = [
    { name: "Dr. Bérété Alpha", specialty: "Médecine Générale", role: "Directeur Médical", img: "https://images.pexels.com/photos/5452222/pexels-photo-5452222.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" },
    { name: "Dr. Camara Fatoumata", specialty: "Pédiatrie", role: "Spécialiste", img: "https://images.pexels.com/photos/19218034/pexels-photo-19218034.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" },
    { name: "Dr. Diallo Mamadou", specialty: "Urologie", role: "Spécialiste", img: "https://images.pexels.com/photos/4989148/pexels-photo-4989148.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" },
    { name: "Dr. Keita Aminata", specialty: "Maternité & Gynécologie", role: "Spécialiste", img: "https://images.pexels.com/photos/18844981/pexels-photo-18844981.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" },
    { name: "Dr. Sow Ibrahim", specialty: "Chirurgie Générale", role: "Spécialiste", img: "https://images.pexels.com/photos/31842729/pexels-photo-31842729.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" },
    { name: "Dr. Barry Mariama", specialty: "Cardiologie", role: "Spécialiste", img: "https://images.pexels.com/photos/5452298/pexels-photo-5452298.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" },
    { name: "Dr. Sylla Aboubacar", specialty: "Imagerie Médicale", role: "Spécialiste", img: "https://images.pexels.com/photos/5452235/pexels-photo-5452235.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" },
];

export default function PractitionersSection() {
    return (
        <section id="practitioners" className="section-spacing bg-white relative overflow-hidden">
            <div className="container">
                <div className="flex flex-col gap-12">
                    <ScrollReveal animation="animate-slideInUp">
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                                Nos praticiens
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Une équipe d'experts dévoués et passionnés, mobilisés pour vous offrir les meilleurs soins en Guinée.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PRACTITIONERS.map((practitioner, index) => (
                            <ScrollReveal key={index} animation="animate-slideInUp" delay={index * 0.1}>
                                <div className="bg-white border border-border rounded-xl p-0 overflow-hidden group">
                                    <div className="aspect-square overflow-hidden bg-red-50">
                                        <img
                                            src={practitioner.img}
                                            alt={practitioner.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-foreground text-lg mb-1">
                                            {practitioner.name}
                                        </h3>
                                        <p className="text-sm text-primary font-semibold mb-2">
                                            {practitioner.specialty}
                                        </p>
                                        <div className="w-8 h-0.5 bg-red-200 rounded-full mb-2" />
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                                            {practitioner.role}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
