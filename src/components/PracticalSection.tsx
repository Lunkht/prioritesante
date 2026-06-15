import { Calendar, Phone, ArrowRight, Image as ImageIcon } from 'lucide-react';

export default function PracticalSection() {
    return (
        <section className="section-spacing bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center animate-slideInUp max-w-4xl mx-auto">
                    <div className="flex items-center justify-center md:justify-end">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-red-50 border border-primary/10 flex items-center justify-center">
                            <ImageIcon className="w-16 h-16 md:w-20 md:h-20 text-primary/30" />
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center gap-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Pratique</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold text-foreground flex items-center justify-center gap-2">
                                    <Calendar className="text-primary w-5 h-5" />
                                    Prendre rendez-vous
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                    Pour prendre rendez-vous en ligne, c'est simple et rapide cliquez sur le lien ci-dessous et laissez-vous guider.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold text-foreground flex items-center justify-center gap-2">
                                    <Phone className="text-primary w-5 h-5" />
                                    Téléphone
                                </h3>
                                <p className="text-primary font-bold text-2xl">+224 621-21-41-76</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-start">
                        <div className="bg-red-50 p-6 md:p-8 rounded-2xl border border-primary/10 flex flex-col items-center text-center gap-6 hover-lift transition-all duration-500 w-full">
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
            </div>
        </section>
    );
}