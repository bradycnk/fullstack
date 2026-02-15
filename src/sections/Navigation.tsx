import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Code2, 
  MessageCircle,
  Briefcase,
  Layers,
  User
} from 'lucide-react';

const navItems = [
  { label: 'Inicio', href: '#inicio', icon: User },
  { label: 'Servicios', href: '#servicios', icon: Layers },
  { label: 'Proyectos', href: '#proyectos', icon: Briefcase },
  { label: 'Contacto', href: '#contacto', icon: MessageCircle },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0a0e1a]/90 backdrop-blur-xl border-b border-white/5 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#inicio"
              onClick={(e) => { e.preventDefault(); scrollToSection('#inicio'); }}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00D9A5] 
                flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white hidden sm:block">
                Ingeniero<span className="text-[#0066FF]">.dev</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.slice(1);
                
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-lg bg-white/10" />
                    )}
                    <span className="relative flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a 
                href="https://wa.me/584149555318"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-[#0066FF] to-[#00D9A5] hover:from-[#0055DD] hover:to-[#00C595]
                    text-white font-medium"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center
                text-white hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute top-20 left-4 right-4 bg-[#0d1220] border border-white/10 rounded-2xl 
            p-6 transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#0066FF]/20 text-white border border-[#0066FF]/30' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#0066FF]' : ''}`} />
                  {item.label}
                </a>
              );
            })}
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/10">
            <a 
              href="https://wa.me/584149555318"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button 
                className="w-full bg-gradient-to-r from-[#0066FF] to-[#00D9A5] hover:from-[#0055DD] hover:to-[#00C595]
                  text-white font-medium py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
