import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const modules = [
  { title: "Módulo 1 — Fundamentos do SVA", lessons: "8 aulas", desc: "Mentalidade, posicionamento e os fundamentos do sistema de vendas automáticas." },
  { title: "Módulo 2 — Estrutura do Funil", lessons: "12 aulas", desc: "Como criar funis de alta conversão, páginas de vendas e sequências de e-mail." },
  { title: "Módulo 3 — Tráfego Pago Inteligente", lessons: "15 aulas", desc: "Facebook Ads, Google Ads, TikTok Ads — como criar campanhas lucrativas do zero." },
  { title: "Módulo 4 — Copy e VSL", lessons: "10 aulas", desc: "Copywriting persuasivo e como criar VSLs que vendem no automático." },
  { title: "Módulo 5 — Automação Total", lessons: "8 aulas", desc: "Automações de e-mail, remarketing, chatbots e integração de ferramentas." },
  { title: "Módulo 6 — Escala e Internacionalização", lessons: "10 aulas", desc: "Como escalar para R$ 100k+/mês e vender para o exterior em dólar." },
  { title: "Módulo 7 — Otimização e Métricas", lessons: "6 aulas", desc: "KPIs, testes A/B, otimização de funil e como maximizar o ROI." },
  { title: "Módulo 8 — Mentalidade de Escala", lessons: "5 aulas", desc: "Gestão de equipe, processos e mentalidade para faturar 7 dígitos." },
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
          <p className="text-muted-foreground mt-4">8 módulos • 74 aulas • +50 horas de conteúdo prático</p>
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
