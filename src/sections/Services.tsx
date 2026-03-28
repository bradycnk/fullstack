import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Code2, 
  Brain, 
  ShoppingCart, 
  Zap, 
  Smartphone, 
  Globe
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Desarrollo Web Full Stack',
    description: 'Construyo tu sitio web o aplicación desde cero: con usuarios, pagos, bases de datos y todo funcionando. Ideal si tienes una idea y necesitas hacerla realidad en internet.',
    color: '#0066FF',
    features: ['Registro de usuarios', 'Pagos integrados', 'Panel de administración', 'Funcionamiento en la nube']
  },
  {
    icon: Brain,
    title: 'Integración de IA',
    description: 'Agrego un asistente virtual que responde preguntas de tus clientes las 24 horas, o que analiza la información de tu negocio para tomar mejores decisiones sin esfuerzo extra.',
    color: '#00D9A5',
    features: ['Asistente virtual 24/7', 'Respuestas automáticas', 'Análisis de datos', 'Integración sencilla']
  },
  {
    icon: ShoppingCart,
    title: 'Apps de Ventas Online',
    description: 'Vende tus productos o servicios online sin depender de otras plataformas. Tu propia tienda con carrito, pagos seguros y control total de tu inventario desde cualquier dispositivo.',
    color: '#FF6B35',
    features: ['Carrito de compras', 'Pagos seguros', 'Control de inventario', 'Facturación automática']
  },
  {
    icon: Zap,
    title: 'Automatización de Ventas',
    description: 'Deja que el sistema trabaje por ti: correos automáticos a clientes potenciales, seguimiento de ventas y reportes listos, sin que tengas que hacer nada manualmente.',
    color: '#FFD700',
    features: ['Correos automáticos', 'Seguimiento de clientes', 'Embudos de venta', 'Reportes diarios']
  },
  {
    icon: Smartphone,
    title: 'Apps Android PWA',
    description: 'Tu aplicación disponible directamente en el celular Android de tus clientes, sin que ellos tengan que ir a ninguna tienda de apps. Se instala fácil y funciona rápido.',
    color: '#9F7AEA',
    features: ['Se instala directo', 'Funciona sin internet', 'Notificaciones push', 'Rápida y ligera']
  },
  {
    icon: Globe,
    title: 'Webs para Empresas',
    description: 'Una presencia profesional en internet que transmite confianza, aparece en Google cuando buscan tu empresa y funciona perfectamente en celulares, tablets y computadoras.',
    color: '#F472B6',
    features: ['Diseño profesional', 'Aparece en Google', 'Carga ultrarrápida', 'Adaptada al celular']
  }
];

export function Services() {
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
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="servicios"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0e1a]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D9A5]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 mb-6">
            <Zap className="w-4 h-4 text-[#0066FF]" />
            <span className="text-sm font-medium text-[#0066FF]">Mis Servicios</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Soluciones </span>
            <span className="text-gradient">Tecnológicas</span>
            <span className="text-white"> a Tu Medida</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Desde aplicaciones web hasta integración de IA, ofrezco servicios completos 
            para llevar tu negocio al siguiente nivel digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(index);
            
            return (
              <Card
                key={index}
                data-index={index}
                className={`service-card group relative p-6 sm:p-8 bg-[#0d1220]/80 border-white/5 hover:border-[${service.color}]/50 
                  backdrop-blur-sm overflow-hidden transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: isVisible ? `0 0 40px ${service.color}10` : 'none'
                }}
              >
                {/* Card Glow Effect */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: service.color }}
                />
                
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: `${service.color}20` }}
                >
                  <Icon className="w-7 h-7" style={{ color: service.color }} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[${service.color}] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{ 
                        background: `${service.color}15`,
                        color: service.color,
                        border: `1px solid ${service.color}30`
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Hover Border */}
                <div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    border: `2px solid ${service.color}`,
                    boxShadow: `0 0 30px ${service.color}30`
                  }}
                />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.
          </p>
          <a 
            href="https://wa.me/584149555318"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#00D9A5] hover:text-[#00F5B8] font-medium transition-colors"
          >
            <span>Consulta gratuita</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
