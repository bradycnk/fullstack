import { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuánto cuesta un proyecto?',
    answer:
      'Cada proyecto es diferente, por eso no tengo precios fijos. Lo que sí ofrezco es una consulta gratuita donde analizamos tu necesidad y te doy un presupuesto personalizado. Los precios son justos y transparentes: sabrás exactamente en qué se invierte cada bolívar o dólar.',
  },
  {
    question: '¿Cuánto tiempo tarda en estar listo mi proyecto?',
    answer:
      'Depende de la complejidad. Una página web corporativa puede estar lista en 1 a 2 semanas. Una tienda online completa tarda entre 2 y 4 semanas. Una aplicación más compleja puede requerir 4 a 8 semanas. En la propuesta inicial siempre especifico el tiempo exacto de entrega.',
  },
  {
    question: '¿Necesito saber de tecnología para contratarte?',
    answer:
      'Para nada. Mi trabajo es precisamente encargarse de toda la parte técnica para que tú no tengas que preocuparte por eso. Solo necesito que me cuentes qué quieres lograr con tu negocio o idea, y yo me encargo del resto. Trabajo con personas sin conocimiento técnico todo el tiempo.',
  },
  {
    question: '¿Qué pasa después de que me entreguen el proyecto?',
    answer:
      'El proyecto viene con documentación en lenguaje simple y soporte técnico post-entrega incluido. Si algo falla o necesitas un ajuste menor, te ayudo sin costo adicional por un período acordado. También ofrezco contratos de mantenimiento para quienes prefieren tener soporte continuo.',
  },
  {
    question: '¿Trabajas con empresas pequeñas y emprendedores?',
    answer:
      'Sí, absolutamente. Trabajo con emprendedores individuales que están comenzando, con pequeñas y medianas empresas, y también con organizaciones más grandes. Cada proyecto recibe la misma atención y calidad sin importar el tamaño. Creo que todas las personas y negocios merecen acceso a tecnología profesional.',
  },
];

export function FAQ() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1220] to-[#0a0e1a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0066FF]/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9F7AEA]/10 border border-[#9F7AEA]/30 mb-6">
            <HelpCircle className="w-4 h-4 text-[#9F7AEA]" />
            <span className="text-sm font-medium text-[#9F7AEA]">Preguntas Frecuentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Resolvemos </span>
            <span className="text-gradient">tus Dudas</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Estas son las preguntas más comunes de personas y empresas antes de contratar. Si tienes
            otra duda, ¡escríbeme sin compromiso!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#0d1220]/80 border border-white/5 rounded-xl px-6 hover:border-[#0066FF]/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-white text-base font-semibold hover:no-underline hover:text-[#00D9A5] transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom note */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-500 mb-4">¿Tienes una pregunta diferente?</p>
          <a
            href="https://wa.me/584149555318"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#20BA5A] font-medium transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Pregúntame por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
