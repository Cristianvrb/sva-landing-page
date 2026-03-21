import { Search, Video, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  { letter: "S", title: "Sistema de Captação", icon: Search, desc: "Tráfego direto + funis de entrada que geram leads qualificados no automático — sem depender de seguidores ou conteúdo." },
  { letter: "V", title: "VSL Oculta", icon: Video, desc: "Vídeo de vendas estratégico que converte sem você precisar aparecer, ter audiência ou fazer lançamentos." },
  { letter: "A", title: "Automação Inteligente", icon: Zap, desc: "Remarketing + sequências que vendem 24h por dia sem você precisar estar online. Seu negócio roda no piloto automático." },
];

const WhatIsSVA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 tech-border-top">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-brand-accent font-tech text-sm uppercase tracking-widest mb-3">A Metodologia</p>
          <h2 className="section-title">
            O que é o <span className="neon-text">Método SVA</span>?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Baseado em <span className="text-foreground font-semibold">tráfego direto + VSL oculta + remarketing inteligente</span> — um sistema completo para vendas automáticas do zero.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.letter}
              className={`glass-card p-8 text-center hover:shadow-neon transition-all duration-300 group reveal ${isVisible ? "visible" : ""} stagger-${i + 1}`}
            >
              <div className="w-20 h-20 mx-auto rounded-lg bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center mb-6 group-hover:border-brand-accent/60 group-hover:scale-110 transition-all">
                <span className="font-tech text-4xl font-bold neon-text">{p.letter}</span>
              </div>
              <h3 className="font-tech text-2xl font-bold mb-3">{p.title}</h3>
              <p.icon className="w-6 h-6 text-brand-accent mx-auto mb-4 group-hover:rotate-12 transition-transform" />
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSVA;
