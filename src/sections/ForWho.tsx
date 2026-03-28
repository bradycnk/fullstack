import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2, User, Building2, TrendingUp } from 'lucide-react';

const audiences = [
  {
    icon: User,
    title: 'Emprendedores y Personas Naturales',
    subtitle: 'Para quienes están comenzando',
    description:
      'Tienes una idea de negocio o ya emprendiste, pero no sabes cómo llevarla al mundo digital. Te acompaño desde cero: desde crear tu primera página web hasta montar una tienda online completa.',
    color: '#0066FF',
    cases: [
      'Tu primera página web o tienda online',
      'Aplicación para tu emprendimiento',
      'Presencia digital desde cero',
      'Sistema de ventas automático',
    ],
  },
  {
    icon: Building2,
    title: 'Empresas y Personas Jurídicas',
    subtitle: 'Para organizaciones que quieren crecer',
    description:
      'Tu empresa necesita modernizar sus procesos, tener presencia digital profesional o integrar tecnología en sus operaciones. Diseño soluciones a medida para organizaciones como la tuya.',
    color: '#00D9A5',
    cases: [
      'Web corporativa y presencia de marca',
      'Sistemas internos para tu equipo',
      'Integración de inteligencia artificial',
      'Automatización de procesos empresariales',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Negocios Establecidos',
    subtitle: 'Para los que quieren dar el siguiente salto',
    description:
      'Ya tienes un negocio funcionando pero quieres vender más, llegar a más clientes online o hacer que tus procesos sean más eficientes. Te ayudo a dar el siguiente salto digital.',
    color: '#FF6B35',
    cases: [
      'Tienda online para vender 24/7',
      'App propia para tus clientes',
      'Automatización de ventas y marketing',
      'Sistema de gestión e inventario',
    ],
  },
];

export function ForWho() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.audience-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1220] to-[#0a0e1a]" />

      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[200px]" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#FF6B35]/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D9A5]/10 border border-[#00D9A5]/30 mb-6">
            <User className="w-4 h-4 text-[#00D9A5]" />
            <span className="text-sm font-medium text-[#00D9A5]">¿Para Quién?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Soluciones para </span>
            <span className="text-gradient">Cada Tipo</span>
            <span className="text-white"> de Cliente</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ya seas una persona con una idea, una empresa establecida o un negocio que quiere crecer
            online — tengo la solución tecnológica para ti.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            const isVisible = visibleCards.has(index);

            return (
              <Card
                key={index}
                data-index={index}
                className={`audience-card group relative p-8 bg-[#0d1220]/80 border-white/5 backdrop-blur-sm overflow-hidden
                  transition-all duration-700 ease-out hover:scale-[1.02]
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Hover border */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid ${audience.color}`,
                    boxShadow: `0 0 30px ${audience.color}25`,
                  }}
                />

                {/* Top color line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
                  style={{ background: `linear-gradient(90deg, ${audience.color}, ${audience.color}60)` }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `${audience.color}20` }}
                >
                  <Icon className="w-7 h-7" style={{ color: audience.color }} />
                </div>

                {/* Subtitle */}
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: audience.color }}>
                  {audience.subtitle}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">{audience.title}</h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">{audience.description}</p>

                {/* Cases */}
                <ul className="space-y-3">
                  {audience.cases.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: audience.color }}
                      />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/584149555318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium transition-colors hover:underline"
                  style={{ color: audience.color }}
                >
                  Esto es para mí →
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
