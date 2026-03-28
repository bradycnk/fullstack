import { useEffect, useRef, useState } from 'react';
import { MessageCircle, FileText, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Consulta Gratuita',
    description:
      'Contáctame por WhatsApp, email o el formulario. En menos de 24 horas coordinamos una llamada de 30 minutos sin costo para entender tu idea o necesidad.',
    color: '#0066FF',
    badge: 'Paso 1',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Propuesta Clara',
    description:
      'Recibirás un presupuesto detallado por escrito: qué se va a hacer, cuánto va a costar y en cuánto tiempo estará listo. Sin costos ocultos ni sorpresas.',
    color: '#00D9A5',
    badge: 'Paso 2',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Desarrollo Profesional',
    description:
      'Me encargo de toda la parte técnica. Durante el proceso te envío avances periódicos para que siempre sepas cómo va tu proyecto sin necesidad de entender código.',
    color: '#FF6B35',
    badge: 'Paso 3',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Entrega y Soporte',
    description:
      'Recibes tu proyecto funcionando, con todo explicado en lenguaje simple. Incluye soporte técnico post-entrega para que no te quedes solo después.',
    color: '#FFD700',
    badge: 'Paso 4',
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0e1a]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 mb-6">
            <Rocket className="w-4 h-4 text-[#FFD700]" />
            <span className="text-sm font-medium text-[#FFD700]">Proceso de Trabajo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Así de Fácil es </span>
            <span className="text-gradient">Trabajar</span>
            <span className="text-white"> Conmigo</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            No necesitas saber nada de tecnología. Solo cuéntame qué quieres lograr y yo me encargo
            del resto. Así funciona el proceso:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#0066FF]/40 via-[#00D9A5]/40 via-[#FF6B35]/40 to-[#FFD700]/40 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative flex flex-col items-center text-center transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step number circle */}
                <div
                  className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center mb-6 border-2"
                  style={{
                    background: `${step.color}15`,
                    borderColor: `${step.color}50`,
                    boxShadow: `0 0 30px ${step.color}20`,
                  }}
                >
                  <Icon className="w-10 h-10" style={{ color: step.color }} />

                  {/* Step badge */}
                  <div
                    className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ background: step.color, color: '#0a0e1a' }}
                  >
                    {step.badge}
                  </div>
                </div>

                {/* Large number watermark */}
                <div
                  className="absolute top-2 left-1/2 -translate-x-1/2 text-7xl font-black opacity-[0.04] select-none pointer-events-none"
                  style={{ color: step.color }}
                >
                  {step.number}
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-400 mb-4">¿Listo para empezar? La consulta inicial es totalmente gratuita.</p>
          <a
            href="https://wa.me/584149555318"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #0066FF, #00D9A5)',
              boxShadow: '0 0 30px #0066FF40',
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Agendar consulta gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
