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
          <p className="text-brand-accent font-sans text-sm uppercase tracking-widest mb-3">Conteúdo Completo</p>
          <h2 className="section-title">
            O que Você Vai <span className="neon-text">Receber</span>
          </h2>
          <p className="text-muted-foreground mt-4">8 módulos • 30+ aulas práticas</p>
        </div>

        <div ref={ref} className={`grid md:grid-cols-2 gap-5 max-w-5xl mx-auto reveal ${isVisible ? "visible" : ""}`}>
          {modules.map((m, i) => {
            const moduleName = m.title.includes('—') ? m.title.split('—')[1].trim() : m.title;
            return (
              <div key={i} className="relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-8 hover:border-brand-accent/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(33,197,93,0.12)]">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300 shadow-inner">
                    <span className="font-sans font-black text-xl text-brand-accent group-hover:text-brand-dark transition-colors">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-xl text-white mb-2 leading-tight group-hover:text-brand-accent transition-colors">{moduleName}</h3>
                    <div className="inline-flex items-center gap-1.5 mb-4">
                      <BookOpen className="w-3.5 h-3.5 text-brand-cta" />
                      <span className="text-[11px] font-black text-brand-cta uppercase tracking-widest">{m.lessons} Direto ao ponto</span>
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
