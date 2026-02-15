import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code2, Brain, Rocket, MessageCircle } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        (el as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0066FF]/20 rounded-full blur-[100px] animate-pulse-glow parallax" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D9A5]/15 rounded-full blur-[120px] animate-pulse-glow parallax" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B35]/10 rounded-full blur-[150px] animate-pulse-glow parallax" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#0066FF 1px, transparent 1px), linear-gradient(90deg, #0066FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <Badge 
              variant="outline" 
              className="mb-6 px-4 py-2 text-sm border-[#0066FF]/50 text-[#00D9A5] bg-[#0066FF]/10 backdrop-blur-sm"
            >
              <Code2 className="w-4 h-4 mr-2" />
              Ingeniero de Software
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Transformo</span>
              <br />
              <span className="text-gradient">Ideas en</span>
              <br />
              <span className="text-gradient-orange">Realidad Digital</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Especialista en desarrollo <span className="text-[#0066FF] font-medium">Full Stack</span>, 
              integración de <span className="text-[#00D9A5] font-medium">Inteligencia Artificial</span> y 
              automatización de <span className="text-[#FF6B35] font-medium">ventas online</span>. 
              Creo soluciones tecnológicas que impulsan tu negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-[#0066FF] to-[#00D9A5] hover:from-[#0055DD] hover:to-[#00C595] text-white font-semibold px-8 py-6 text-lg glow-blue transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablemos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToServices}
                className="border-2 border-[#FF6B35]/50 text-white hover:bg-[#FF6B35]/10 hover:border-[#FF6B35] px-8 py-6 text-lg transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Ver Servicios
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#0066FF]">+50</div>
                <div className="text-sm text-gray-500 mt-1">Proyectos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#00D9A5]">+30</div>
                <div className="text-sm text-gray-500 mt-1">Clientes</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#FF6B35]">100%</div>
                <div className="text-sm text-gray-500 mt-1">Satisfacción</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0066FF] via-[#00D9A5] to-[#FF6B35] blur-xl opacity-60 animate-pulse-glow" />
              
              {/* Outer Ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#0066FF]/30 animate-spin" style={{ animationDuration: '20s' }} />
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 glow-blue">
                <img 
                  src="https://jfnrxehidhqydqgntuaw.supabase.co/storage/v1/object/public/assets/gen.png" 
                  alt="Ingeniero de Software"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0066FF]/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-[#0d1220] border border-[#0066FF]/50 rounded-xl px-4 py-2 animate-float">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-[#0066FF]" />
                  <span className="text-sm font-medium text-white">IA Integrada</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-[#0d1220] border border-[#00D9A5]/50 rounded-xl px-4 py-2 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-[#00D9A5]" />
                  <span className="text-sm font-medium text-white">Full Stack</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 sm:-right-12 bg-[#0d1220] border border-[#FF6B35]/50 rounded-xl px-4 py-2 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#FF6B35]" />
                  <span className="text-sm font-medium text-white">PWA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e1a] to-transparent" />
    </section>
  );
}
