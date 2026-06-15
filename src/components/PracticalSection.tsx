import { Calendar, Phone, ArrowRight } from 'lucide-react';

export default function PracticalSection() {
    return (
        <section className="section-spacing bg-white">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-slideInUp">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Pratique</h2>

                        <div className="space-y-6">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                                    <Calendar className="text-primary w-5 h-5" />
                                    Prendre rendez-vous
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Pour prendre rendez-vous en ligne, c'est simple et rapide cliquez sur le lien ci-dessous et laissez-vous guider.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                                    <Phone className="text-primary w-5 h-5" />
                                    Téléphone
                                </h3>
                                <p className="text-primary font-bold text-2xl">+224 621-21-41-76</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-50 p-8 rounded-2xl border border-primary/10 flex flex-col items-center text-center gap-6 hover-lift transition-all duration-500">
                        <div className="space-y-4">
                            <button className="btn-primary w-full py-4 px-8 text-lg font-bold flex items-center justify-center gap-3">
                                Prendre mon rendez-vous
                            </button>
                            <button className="flex items-center justify-center gap-2 text-primary font-semibold hover:underline w-full">
                                <a
                                    href="#clinics"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector('#clinics')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Voir plus <ArrowRight className="w-4 h-4" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}