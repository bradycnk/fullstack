import { 
  Code2, 
  Heart, 
  MessageCircle, 
  Mail, 
  Github,
  Linkedin,
  Twitter,
  ArrowUp
} from 'lucide-react';

const socialLinks = [
  { icon: MessageCircle, href: 'https://wa.me/584149555318', label: 'WhatsApp', color: '#25D366' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
  { icon: Github, href: '#', label: 'GitHub', color: '#ffffff' },
  { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
];

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

const services = [
  'Desarrollo Full Stack',
  'Integración de IA',
  'Apps de Ventas',
  'Automatización',
  'Apps Android PWA',
  'Webs Corporativas',
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0e1a] border-t border-white/5">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a 
              href="#inicio"
              onClick={(e) => { e.preventDefault(); scrollToSection('#inicio'); }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#00D9A5] 
                flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Ingeniero<span className="text-[#0066FF]">.dev</span>
              </span>
            </a>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transformando ideas en realidades digitales. Especialista en desarrollo 
              Full Stack e integración de Inteligencia Artificial.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center
                      text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                    style={{ '--hover-color': social.color } as React.CSSProperties}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <a 
                href="https://wa.me/584149555318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>+58 414 955 5318</span>
              </a>
              <a 
                href="mailto:contacto@ingeniero.dev"
                className="flex items-center gap-3 text-gray-400 hover:text-[#0066FF] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contacto@ingeniero.dev</span>
              </a>
            </div>
            
            {/* CTA */}
            <a 
              href="https://wa.me/584149555318"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-lg
                bg-gradient-to-r from-[#0066FF]/20 to-[#00D9A5]/20
                border border-[#0066FF]/30 text-[#00D9A5] text-sm font-medium
                hover:from-[#0066FF]/30 hover:to-[#00D9A5]/30 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Disponible para proyectos</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row 
          items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35]" /> usando React & Tailwind
          </p>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ingeniero.dev - Todos los derechos reservados
          </p>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center
              text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
