import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aïssatou Diallo',
    role: 'Patient',
    content: "Grâce à Priorité Santé, j'ai pu recevoir des soins de qualité pour ma famille. Le personnel est dévoué et les installations sont modernes. Une véritable bouée de sauvetage pour notre communauté.",
    rating: 5,
  },
  {
    id: '2',
    name: 'Mamadou Bah',
    role: 'Patient',
    content: "Le service d'urgence a sauvé la vie de mon père. L'équipe médicale a réagi rapidement avec professionnalisme. Je recommande vivement cette clinique à tous.",
    rating: 5,
  },
  {
    id: '3',
    name: 'Fatoumata Sylla',
    role: 'Patiente',
    content: "La maternité de Priorité Santé est exceptionnelle. J'ai été suivie tout au long de ma grossesse avec beaucoup d'attention et de bienveillance. Merci à toute l'équipe.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-spacing bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="flex flex-col items-center gap-12">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 max-w-2xl text-center animate-slideInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ce que disent nos patients
            </h2>
            <p className="text-lg text-muted-foreground">
              La satisfaction de nos patients est notre plus belle récompense.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                style={{ animationDelay: `${index * 0.15}s` }}
                className="animate-slideInUp"
              >
                <div className="bg-white border border-border rounded-lg p-8 hover-lift relative">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-red-50">
                    <Quote className="w-12 h-12" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
