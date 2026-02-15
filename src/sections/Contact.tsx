import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Send,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+58 414 955 5318',
    description: 'Respuesta inmediata',
    color: '#25D366',
    action: 'https://wa.me/584149555318',
    buttonText: 'Enviar mensaje'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'contacto@ingeniero.dev',
    description: 'Para propuestas formales',
    color: '#0066FF',
    action: 'mailto:contacto@ingeniero.dev',
    buttonText: 'Enviar email'
  },
  {
    icon: Phone,
    title: 'Llamada',
    value: '+58 414 955 5318',
    description: 'Horario: 8am - 6pm',
    color: '#FF6B35',
    action: 'tel:+584149555318',
    buttonText: 'Llamar ahora'
  }
];

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section 
      id="contacto"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0e1a]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0066FF]/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00D9A5]/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF6B35]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D9A5]/10 border border-[#00D9A5]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#00D9A5]" />
            <span className="text-sm font-medium text-[#00D9A5]">Contacto</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Hagamos Realidad tu </span>
            <span className="text-gradient">Proyecto</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            ¿Tienes una idea en mente? Hablemos y convirtámosla en una solución digital 
            que impulse tu negocio al siguiente nivel.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Methods */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h3 className="text-xl font-bold text-white mb-6">
              Formas de Contacto
            </h3>
            
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="group relative p-6 bg-[#0d1220]/80 border-white/5 hover:border-white/10 
                    backdrop-blur-sm overflow-hidden transition-all duration-500"
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: method.color }}
                  />
                  
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                        transition-transform duration-500 group-hover:scale-110"
                      style={{ background: `${method.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: method.color }} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {method.title}
                      </h4>
                      <p className="text-white font-medium mb-1">
                        {method.value}
                      </p>
                      <p className="text-sm text-gray-500 mb-3">
                        {method.description}
                      </p>
                      
                      <a 
                        href={method.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                        style={{ color: method.color }}
                      >
                        <span>{method.buttonText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </Card>
              );
            })}
            
            {/* Availability Card */}
            <Card className="p-6 bg-gradient-to-r from-[#0066FF]/10 to-[#00D9A5]/10 border-[#0066FF]/20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-[#00D9A5]" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#00D9A5] animate-ping" />
                </div>
                <div>
                  <p className="text-white font-medium">Disponible para proyectos</p>
                  <p className="text-sm text-gray-400">Respuesta en menos de 24h</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <Card className="p-8 lg:p-10 bg-[#0d1220]/80 border-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">
                Cuéntame sobre tu proyecto
              </h3>
              <p className="text-gray-400 mb-8">
                Completa el formulario y me pondré en contacto contigo lo antes posible.
              </p>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#00D9A5]/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#00D9A5]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    ¡Mensaje enviado!
                  </h4>
                  <p className="text-gray-400">
                    Te contactaré pronto para hablar sobre tu proyecto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Nombre
                      </label>
                      <Input
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600
                          focus:border-[#0066FF] focus:ring-[#0066FF]/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600
                          focus:border-[#0066FF] focus:ring-[#0066FF]/20"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      ¿Qué tipo de proyecto necesitas?
                    </label>
                    <Textarea
                      placeholder="Cuéntame sobre tu idea, objetivos y cualquier detalle importante..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600
                        focus:border-[#0066FF] focus:ring-[#0066FF]/20 min-h-[150px] resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#0066FF] to-[#00D9A5] hover:from-[#0055DD] hover:to-[#00C595]
                      text-white font-semibold py-6 glow-blue transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar mensaje
                  </Button>
                  
                  <p className="text-center text-sm text-gray-500">
                    O si prefieres, contáctame directamente por{' '}
                    <a 
                      href="https://wa.me/584149555318"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline"
                    >
                      WhatsApp
                    </a>
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
