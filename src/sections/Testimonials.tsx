import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'María Fernández',
    role: 'Dueña de tienda de ropa',
    initials: 'MF',
    rating: 5,
    color: '#0066FF',
    text: 'No sabía nada de tecnología y tenía miedo de que fuera complicado. Me explicó todo con palabras sencillas y en pocas semanas tenía mi tienda online vendiendo sola. Ahora recibo pedidos hasta de madrugada.',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Gerente de empresa de servicios',
    initials: 'CR',
    rating: 5,
    color: '#00D9A5',
    text: 'Necesitábamos una página profesional que diera confianza a nuestros clientes. El resultado superó lo que esperábamos: rápida, bonita y que aparece en Google. La inversión se pagó sola con los nuevos clientes.',
  },
  {
    name: 'Ana Gómez',
    role: 'Emprendedora digital',
    initials: 'AG',
    rating: 5,
    color: '#FF6B35',
    text: 'Lo que más valoro es que se encargó de TODO. Yo solo le conté mi idea y él la hizo realidad. Siempre disponible, cumplió los tiempos y me dejó un sistema fácil de manejar yo misma.',
  },
  {
    name: 'José Martínez',
    role: 'Dueño de restaurante',
    initials: 'JM',
    rating: 5,
    color: '#9F7AEA',
    text: 'Integró un asistente que responde a mis clientes las 24 horas por WhatsApp. Dejé de perder pedidos por no contestar a tiempo y mi equipo ahora se enfoca en lo importante. Totalmente recomendado.',
  },
  {
    name: 'Lucía Pérez',
    role: 'Coach y consultora',
    initials: 'LP',
    rating: 5,
    color: '#FFD700',
    text: 'Pasé de no tener presencia en internet a tener una web que me consigue clientes mientras duermo. El trato fue cercano y profesional en todo momento. Por fin alguien que habla mi idioma y no solo tecnicismos.',
  },
  {
    name: 'Diego Sánchez',
    role: 'Fundador de startup',
    initials: 'DS',
    rating: 5,
    color: '#00D9A5',
    text: 'Construyó nuestra aplicación desde cero con usuarios, pagos y todo funcionando perfecto. Entendió el negocio, no solo el código. Es el tipo de aliado tecnológico que cualquier emprendedor necesita.',
  },
];

export function Testimonials() {
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

    const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0e1a]" />

      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9F7AEA]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D9A5]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9F7AEA]/10 border border-[#9F7AEA]/30 mb-6">
            <Star className="w-4 h-4 text-[#9F7AEA]" />
            <span className="text-sm font-medium text-[#9F7AEA]">Testimonios</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Lo que Dicen </span>
            <span className="text-gradient">Mis Clientes</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Detrás de cada proyecto hay una persona o un negocio que decidió confiar.
            Estas son algunas de sus experiencias trabajando conmigo.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleCards.has(index);

            return (
              <Card
                key={index}
                data-index={index}
                className={`testimonial-card group relative p-8 bg-[#0d1220]/80 border-white/5 backdrop-blur-sm overflow-hidden
                  transition-all duration-700 ease-out hover:scale-[1.02]
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                {/* Hover border */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid ${testimonial.color}`,
                    boxShadow: `0 0 30px ${testimonial.color}25`,
                  }}
                />

                {/* Quote icon */}
                <Quote
                  className="w-10 h-10 mb-4 opacity-20"
                  style={{ color: testimonial.color }}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                      style={{ color: testimonial.color }}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.text}</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
                    style={{ background: `${testimonial.color}30`, color: testimonial.color }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            ¿Quieres ser el próximo cliente satisfecho?
          </p>
          <a
            href="https://wa.me/584149555318"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#00D9A5] hover:text-[#00F5B8] font-medium transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Hablemos de tu proyecto →
          </a>
        </div>
      </div>
    </section>
  );
}
