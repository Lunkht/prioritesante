import { useState, useRef, useEffect } from 'react';
import { Heart, Stethoscope, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

/**
 * Impact Section - Minimalisme Médical Moderne
 * Design Philosophy:
 * - Compteurs animés pour impact visuel
 * - Design épuré sur fond blanc/gris clair
 * - Trois métriques clés : Patients, Urgences, Solidarité
 * - Animation au scroll pour engagement
 */

interface Counter {
  id: string;
  value: number;
  label: string;
  suffix: string;
}

function AnimatedCounter({ value, label, suffix }: Counter) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 0;
          const increment = value / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setDisplayValue(value);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.floor(current));
            }
          }, 30);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3 p-8 bg-white rounded-lg border border-border"
    >
      <div className="flex items-baseline gap-1">
        <span className="counter-value">{displayValue.toLocaleString('fr-FR')}</span>
        <span className="text-2xl font-bold text-primary">{suffix}</span>
      </div>
      <p className="text-sm md:text-base text-muted-foreground text-center font-medium">{label}</p>
    </div>
  );
}

export default function ImpactSection() {
  const counters: Counter[] = [
    {
      id: 'patients',
      value: 10000,
      label: 'Patients soignés',
      suffix: '+',
    },
    {
      id: 'emergency',
      value: 24,
      label: 'Urgences',
      suffix: '/7',
    },
    {
      id: 'solidarity',
      value: 100,
      label: 'Solidaire',
      suffix: '%',
    },
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="flex flex-col items-center gap-12">
          {/* Section Header */}
          <ScrollReveal animation="animate-slideInUp">
            <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Notre impact en chiffres
              </h2>
              <p className="text-lg text-muted-foreground">
                Depuis notre création, nous avons mis l'accès aux soins au cœur de notre mission.
              </p>
            </div>
          </ScrollReveal>

          {/* Counters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {counters.map((counter, index) => (
              <ScrollReveal key={counter.id} animation="animate-slideInUp" delay={index * 0.1}>
                <div>
                  <AnimatedCounter {...counter} />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border my-4" />

          {/* Additional info with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-8">
            <ScrollReveal animation="animate-slideInUp" delay={0.1}>
              <div className="flex flex-col gap-3 text-center items-center">
                <Heart className="w-8 h-8 text-primary" />
                <p className="text-sm font-semibold text-primary">ENGAGEMENT</p>
                <p className="text-muted-foreground">Soins gratuits ou à faible coût pour les plus démunis</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="animate-slideInUp" delay={0.2}>
              <div className="flex flex-col gap-3 text-center items-center">
                <Stethoscope className="w-8 h-8 text-primary" />
                <p className="text-sm font-semibold text-primary">QUALITÉ</p>
                <p className="text-muted-foreground">Équipe médicale qualifiée et équipements modernes</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="animate-slideInUp" delay={0.3}>
              <div className="flex flex-col gap-3 text-center items-center">
                <Clock className="w-8 h-8 text-primary" />
                <p className="text-sm font-semibold text-primary">ACCESSIBILITÉ</p>
                <p className="text-muted-foreground">Disponible 24h/24, 7j/7 pour les urgences</p>
              </div>
            </ScrollReveal>
          </div>


        </div>
      </div>
    </section>
  );
}
