import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Code2, 
  Brain, 
  Rocket, 
  MessageCircle, 
  Terminal, 
  Cpu, 
  Sparkles
} from 'lucide-react';

const leftMatrixChars = ['0', '1', 'λ', 'ア', '1', '0', 'X', 'シ', '1', '1', '0', 'F', '9', '0', '1', 'λ', 'ア', '1', '0', 'X', 'シ', '1', '1', '0', 'F', '9'];
const rightMatrixChars = ['1', '0', 'Ξ', 'カ', '0', '1', 'A', 'チ', '0', '0', '1', '7', 'E', '1', '0', 'Ξ', 'カ', '0', '1', 'A', 'チ', '0', '0', '1', '7', 'E'];

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 24;
      const y = (clientY / innerHeight - 0.5) * 24;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        (el as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });

      const elementsReverse = heroRef.current.querySelectorAll('.parallax-reverse');
      elementsReverse.forEach((el) => {
        (el as HTMLElement).style.transform = `translate(${-x * 0.7}px, ${-y * 0.7}px)`;
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark pointer-events-none" />
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00FF41]/20 rounded-full blur-[100px] animate-pulse-glow parallax pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D9A5]/15 rounded-full blur-[120px] animate-pulse-glow parallax pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39FF14]/10 rounded-full blur-[150px] animate-pulse-glow parallax pointer-events-none" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#00FF41 1px, transparent 1px), linear-gradient(90deg, #00FF41 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left lg:col-span-6 xl:col-span-7">
            <Badge 
              variant="outline" 
              className="mb-6 px-4 py-2 text-sm border-[#00FF41]/50 text-[#00D9A5] bg-[#00FF41]/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,65,0.2)]"
            >
              <Code2 className="w-4 h-4 mr-2" />
              Ingeniero de Software & Arquitecto IA
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Si lo puedes</span>
              <br />
              <span className="text-gradient">Imaginar,</span>
              <br />
              <span className="text-gradient-orange">Lo Podemos Programar</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              ¿Tienes una <span className="text-[#00FF41] font-medium">idea de negocio</span>, necesitas una
              <span className="text-[#00D9A5] font-medium"> página web profesional</span> o quieres
              <span className="text-[#39FF14] font-medium"> vender tus productos en internet</span>?
              Me encargo de todo lo técnico para que tú solo te preocupes por hacer crecer tu negocio. Sin jerga, sin complicaciones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-[#00FF41] to-[#00D9A5] hover:from-[#00DD38] hover:to-[#00C595] text-black font-bold px-8 py-6 text-lg glow-blue transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablemos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToServices}
                className="border-2 border-[#39FF14]/50 text-white hover:bg-[#39FF14]/10 hover:border-[#39FF14] px-8 py-6 text-lg transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Ver Servicios
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#00FF41]">+50</div>
                <div className="text-sm text-gray-500 mt-1">Proyectos Entregados</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#00D9A5]">+30</div>
                <div className="text-sm text-gray-500 mt-1">Clientes Satisfechos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#39FF14]">100%</div>
                <div className="text-sm text-gray-500 mt-1">Satisfacción Garantizada</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Transparent Profile Avatar with Matrix Side Animations */}
          <div className="relative lg:col-span-6 xl:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
              
              {/* Background Matrix HUD Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Outer Glow Halo */}
                <div className="w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-[#00FF41]/25 via-[#00D9A5]/20 to-[#39FF14]/15 blur-2xl animate-pulse-glow" />
                
                {/* Rotating Cyber HUD Ring 1 */}
                <div 
                  className="absolute w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full border border-dashed border-[#00FF41]/30 animate-spin-slow" 
                />
                
                {/* Rotating Cyber HUD Ring 2 */}
                <div 
                  className="absolute w-64 sm:w-[340px] h-64 sm:h-[340px] rounded-full border border-dotted border-[#00D9A5]/40 animate-spin-reverse-slow" 
                />

                {/* Cyber Brackets HUD Frame */}
                <div className="absolute w-[92%] h-[92%] border-l-2 border-t-2 border-[#00FF41]/40 rounded-tl-3xl top-0 left-0" />
                <div className="absolute w-[92%] h-[92%] border-r-2 border-b-2 border-[#00D9A5]/40 rounded-br-3xl bottom-0 right-0" />
              </div>

              {/* LEFT SIDE: Matrix Code Rain Stream & Telemetry HUD */}
              <div className="absolute -left-2 sm:-left-6 top-8 bottom-8 flex flex-col justify-between items-start z-20 pointer-events-none">
                
                {/* Left Floating Telemetry Badge */}
                <div className="bg-[#020802]/90 border border-[#00FF41]/50 rounded-xl px-3.5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,65,0.25)] animate-float parallax">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF41] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FF41]"></span>
                    </span>
                    <Terminal className="w-3.5 h-3.5 text-[#00FF41]" />
                    <span className="text-xs font-mono font-semibold text-[#00FF41]">SYS: ONLINE</span>
                  </div>
                  <div className="text-[10px] font-mono text-gray-400 mt-0.5">FULL_STACK_DEV</div>
                </div>

                {/* Left Matrix Character Cascade Stream */}
                <div className="h-44 sm:h-56 w-6 overflow-hidden relative opacity-75 mask-gradient">
                  <div className="flex flex-col font-mono text-xs text-[#00FF41] font-bold animate-matrix-stream-1 leading-4 select-none">
                    {leftMatrixChars.map((char, i) => (
                      <span 
                        key={i} 
                        className={i % 4 === 0 ? 'text-white text-shadow-glow' : i % 3 === 0 ? 'text-[#39FF14]' : 'text-[#00FF41]/60'}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Left Bottom Telemetry Badge */}
                <div className="bg-[#020802]/90 border border-[#00D9A5]/50 rounded-xl px-3.5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(0,217,165,0.2)] animate-float parallax" style={{ animationDelay: '1.2s' }}>
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-[#00D9A5]" />
                    <span className="text-xs font-semibold text-white">IA Integrada</span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Matrix Code Rain Stream & Telemetry HUD */}
              <div className="absolute -right-2 sm:-right-6 top-8 bottom-8 flex flex-col justify-between items-end z-20 pointer-events-none">
                
                {/* Right Floating Telemetry Badge */}
                <div className="bg-[#020802]/90 border border-[#39FF14]/50 rounded-xl px-3.5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(57,255,20,0.25)] animate-float parallax" style={{ animationDelay: '0.8s' }}>
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#39FF14]" />
                    <span className="text-xs font-mono font-semibold text-[#39FF14]">CORE: ACTIVE</span>
                  </div>
                  <div className="text-[10px] font-mono text-gray-400 mt-0.5">LATENCY: 12ms</div>
                </div>

                {/* Right Matrix Character Cascade Stream */}
                <div className="h-44 sm:h-56 w-6 overflow-hidden relative opacity-75 mask-gradient text-right">
                  <div className="flex flex-col font-mono text-xs text-[#00D9A5] font-bold animate-matrix-stream-2 leading-4 select-none">
                    {rightMatrixChars.map((char, i) => (
                      <span 
                        key={i} 
                        className={i % 5 === 0 ? 'text-white text-shadow-glow' : i % 2 === 0 ? 'text-[#00D9A5]' : 'text-[#00FF41]/60'}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Bottom Telemetry Badge */}
                <div className="bg-[#020802]/90 border border-[#00FF41]/50 rounded-xl px-3.5 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,65,0.2)] animate-float parallax" style={{ animationDelay: '1.8s' }}>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00FF41]" />
                    <span className="text-xs font-semibold text-white">PWA & Cloud</span>
                  </div>
                </div>
              </div>

              {/* CENTER: High-Res Transparent Avatar Image with Glow & Parallax */}
              <div className="relative z-10 w-64 sm:w-80 lg:w-[340px] xl:w-[380px] flex flex-col items-center justify-center animate-float">
                
                {/* Holographic Laser Scanline passing through the avatar */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00FF41] to-transparent shadow-[0_0_15px_#00FF41] animate-scanline z-20 pointer-events-none" />

                {/* Transparent Avatar */}
                <div className="relative w-full aspect-square flex items-center justify-center">
                  <img 
                    src="/nuevofondo.png" 
                    alt="Ingeniero de Software"
                    className="w-full h-full object-contain filter drop-shadow-[0_10px_35px_rgba(0,255,65,0.55)] transition-transform duration-500 hover:scale-105 parallax"
                  />
                </div>

                {/* Cyber Holographic Glowing Pedestal at Bottom */}
                <div className="relative -mt-6 w-56 sm:w-72 h-8 pointer-events-none">
                  <div className="w-full h-full rounded-[100%] bg-gradient-to-r from-[#00FF41]/40 via-[#00D9A5]/60 to-[#39FF14]/40 blur-md" />
                  <div className="absolute inset-0 rounded-[100%] border border-[#00FF41]/70 shadow-[0_0_25px_rgba(0,255,65,0.6)]" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020802] to-transparent pointer-events-none" />
    </section>
  );
}
