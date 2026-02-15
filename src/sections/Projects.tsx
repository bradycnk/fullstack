import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  Building2, 
  GraduationCap, 
  ShoppingBag,
  ExternalLink,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const projects = [
  {
    category: 'Empresas',
    icon: Building2,
    color: '#0066FF',
    title: 'Webs Corporativas de Impacto',
    description: 'Diseño y desarrollo de sitios web profesionales que destacan la identidad de marca y generan confianza en los clientes.',
    achievements: [
      'Incremento del 150% en conversiones',
      'SEO optimizado para posicionamiento',
      'Diseño responsive en todos los dispositivos',
      'Tiempo de carga menor a 2 segundos'
    ],
    tags: ['React', 'Next.js', 'SEO', 'Tailwind'],
    image: 'corporate'
  },
  {
    category: 'Educación',
    icon: GraduationCap,
    color: '#00D9A5',
    title: 'Apps para Estudiantes Universitarios',
    description: 'Aplicaciones funcionales diseñadas específicamente para potenciar las carreras de estudiantes universitarios.',
    achievements: [
      'Organización de horarios y tareas',
      'Gestión de proyectos académicos',
      'Colaboración en tiempo real',
      'Notificaciones inteligentes'
    ],
    tags: ['React Native', 'Firebase', 'PWA', 'Node.js'],
    image: 'education'
  },
  {
    category: 'E-Commerce',
    icon: ShoppingBag,
    color: '#FF6B35',
    title: 'Apps Android de Ventas Online',
    description: 'Plataformas de comercio electrónico para productos físicos y digitales con experiencia de compra optimizada.',
    achievements: [
      'Ventas automatizadas 24/7',
      'Múltiples pasarelas de pago',
      'Gestión de inventario en tiempo real',
      'Formato PWA instalable'
    ],
    tags: ['Android', 'PWA', 'Stripe', 'PostgreSQL'],
    image: 'ecommerce'
  }
];

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="proyectos"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1220] to-[#0a0e1a]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#FF6B35]/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#0066FF]/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/30 mb-6">
            <Briefcase className="w-4 h-4 text-[#FF6B35]" />
            <span className="text-sm font-medium text-[#FF6B35]">Experiencia</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Proyectos que </span>
            <span className="text-gradient-orange">Transforman</span>
            <span className="text-white"> Negocios</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Cada proyecto es una oportunidad de crear algo extraordinario. 
            Aquí te muestro algunos de mis trabajos más destacados.
          </p>
        </div>

        {/* Projects Navigation */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeProject === index 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10'
                }`}
                style={{
                  background: activeProject === index ? `${project.color}20` : undefined,
                  border: activeProject === index ? `2px solid ${project.color}` : '2px solid transparent',
                  boxShadow: activeProject === index ? `0 0 30px ${project.color}30` : 'none'
                }}
              >
                <Icon className="w-5 h-5" style={{ color: project.color }} />
                <span>{project.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Project Display */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {projects.map((project, index) => {
            if (index !== activeProject) return null;
            const Icon = project.icon;
            
            return (
              <Card 
                key={index}
                className="relative overflow-hidden bg-[#0d1220]/80 border-white/5 backdrop-blur-sm"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${project.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: project.color }} />
                      </div>
                      <Badge 
                        variant="outline" 
                        style={{ borderColor: `${project.color}50`, color: project.color }}
                      >
                        {project.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="space-y-4 mb-8">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        Logros Destacados
                      </h4>
                      <ul className="space-y-3">
                        {project.achievements.map((achievement, aIndex) => (
                          <li 
                            key={aIndex}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 
                              className="w-5 h-5 mt-0.5 flex-shrink-0" 
                              style={{ color: project.color }} 
                            />
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-400 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <a 
                      href="https://wa.me/584149555318"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        className="group"
                        style={{ 
                          background: project.color,
                          boxShadow: `0 0 30px ${project.color}40`
                        }}
                      >
                        <span>Quiero algo similar</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </div>
                  
                  {/* Visual Side */}
                  <div 
                    className="relative min-h-[300px] lg:min-h-full flex items-center justify-center p-8"
                    style={{ 
                      background: `linear-gradient(135deg, ${project.color}10 0%, ${project.color}05 100%)`
                    }}
                  >
                    {/* Abstract Project Visual */}
                    <div className="relative w-full max-w-md">
                      {/* Main Card */}
                      <div 
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2"
                        style={{ borderColor: `${project.color}30` }}
                      >
                        <div 
                          className="absolute inset-0"
                          style={{ 
                            background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}10 50%, transparent 100%)`
                          }}
                        />
                        
                        {/* Project Type Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div 
                            className="w-32 h-32 rounded-2xl flex items-center justify-center"
                            style={{ 
                              background: `linear-gradient(135deg, ${project.color}30 0%, ${project.color}20 100%)`,
                              boxShadow: `0 0 60px ${project.color}40`
                            }}
                          >
                            <Icon className="w-16 h-16" style={{ color: project.color }} />
                          </div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div 
                          className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-medium"
                          style={{ background: `${project.color}30`, color: project.color }}
                        >
                          {project.category}
                        </div>
                        
                        <div 
                          className="absolute bottom-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ background: `${project.color}30` }}
                        >
                          <ExternalLink className="w-5 h-5" style={{ color: project.color }} />
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div 
                        className="absolute -top-4 -right-4 w-24 h-24 rounded-xl -z-10"
                        style={{ background: `${project.color}15` }}
                      />
                      <div 
                        className="absolute -bottom-4 -left-4 w-32 h-32 rounded-xl -z-10"
                        style={{ background: `${project.color}10` }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Project Indicators */}
        <div className={`flex justify-center gap-2 mt-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeProject === index ? 'w-8' : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              style={{ 
                background: activeProject === index ? project.color : undefined 
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
