import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const modules = [
  { title: "Módulo 1 — Fundamentos do SVA", lessons: "4 aulas", desc: "Visão geral do sistema, início prático e o que você precisa fazer para vender." },
  { title: "Módulo 2 — Estrutura & Tráfego Pago", lessons: "4 aulas", desc: "Como montar sua estrutura e criar campanhas no Facebook Ads do zero." },
  { title: "Módulo 3 — Vendas via WhatsApp", lessons: "5 aulas", desc: "Campanhas para WhatsApp, bots de automação e análise de métricas." },
  { title: "Módulo 4 — Automação com I.A", lessons: "4 aulas", desc: "Agentes de I.A para vendas, sites automatizados e recuperação de vendas." },
  { title: "Módulo 5 — Criação de Produto do Zero", lessons: "4 aulas", desc: "Como criar e hospedar seu próprio produto digital." },
  { title: "Módulo 6 — Escala & Otimização", lessons: "5 aulas", desc: "Rastreamento, pré-escala e como preparar tudo para crescer." },
  { title: "Módulo 7 — Vendas Internacionais", lessons: "2 aulas", desc: "Como vender em dólar no mercado internacional." },
  { title: "Módulo 8 — Mentorias ao Vivo", lessons: "3 aulas", desc: "Tira-dúvidas, análise de resultados e suporte em grupo." },
];

const Deliverables = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 tech-border-top section-alt">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-brand-accent font-tech text-sm uppercase tracking-widest mb-3">Conteúdo Completo</p>
          <h2 className="section-title">
            O que Você Vai <span className="neon-text">Receber</span>
          </h2>
          <p className="text-muted-foreground mt-4">8 módulos • 30+ aulas práticas</p>
        </div>

        <div ref={ref} className={`max-w-3xl mx-auto reveal ${isVisible ? "visible" : ""}`}>
          <Accordion type="single" collapsible className="space-y-3">
            {modules.map((m, i) => (
              <AccordionItem key={i} value={`module-${i}`} className="glass-card border-border px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-brand-accent shrink-0" />
                    <div className="text-left">
                      <p className="font-tech font-bold">{m.title}</p>
                      <p className="text-xs text-muted-foreground">{m.lessons}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pl-8">{m.desc}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
