import { Gift, Sparkles, Bot, Search, Zap, Eye } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const featuredBonuses = [
  {
    icon: Bot,
    tag: "SOFTWARE PREMIUM #1",
    title: "Agente IA de Vendas",
    desc: "Um vendedor artificial incansável conectado ao seu WhatsApp. Ele responde em segundos, quebra objeções e fecha vendas 24 horas por dia automaticamente.",
    bullets: [
      "Integração instantânea com seu WhatsApp Business",
      "Clone nossa Inteligência focada em conversão",
      "Modelos de comandos inclusos: é só copiar e colar",
    ],
    value: "R$ 497,00",
    color: "from-emerald-500/30 to-emerald-900/10",
    border: "border-emerald-500/20 hover:border-emerald-400/50",
    glow: "hover:shadow-[0_0_50px_hsl(152_76%_45%/0.15)]",
    badgeBg: "bg-emerald-500/20 border-emerald-500/40",
    badgeText: "text-emerald-400",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/20",
  },
  {
    icon: Search,
    tag: "FERRAMENTA EXCLUSIVA #2",
    title: "Extensão BuscaAds",
    desc: "Nossa tecnologia proprietária que revela o cofre de campanhas milionárias. Descubra exatamente quais produtos e criativos estão sendo escalados com sucesso hoje.",
    bullets: [
      "Mapa completo dos anúncios com maior verba rodando",
      "Filtros de validação avançada escondidos pelo Facebook",
      "Evite gastar dinheiro à toa: modele o que já dá lucro",
    ],
    value: "R$ 297,00",
    color: "from-amber-500/30 to-amber-900/10",
    border: "border-amber-500/20 hover:border-amber-400/50",
    glow: "hover:shadow-[0_0_50px_hsl(45_90%_50%/0.15)]",
    badgeBg: "bg-amber-500/20 border-amber-500/40",
    badgeText: "text-amber-400",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/20",
  },
];

const bonuses = [
  { title: "Comunidade VIP", desc: "Acesso ao grupo exclusivo de alunos com networking e suporte." },
  { title: "Templates de Funil", desc: "Modelos prontos de funis de alta conversão para copiar e colar." },
  { title: "Pack de Copies", desc: "Scripts de copy para anúncios, e-mails e páginas de vendas." },
  { title: "Masterclass de Tráfego", desc: "Aula especial com estratégias avançadas de Facebook e Google Ads." },
  { title: "Mentoria em Grupo", desc: "Encontros ao vivo para tirar dúvidas e receber feedback direto." },
];

const Bonus = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();

  return (
    <section className="py-24 tech-border-top section-alt">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-brand-cta font-sans text-sm uppercase tracking-widest mb-3 font-bold">O Seu Arsenal de Conversão</p>
          <h2 className="section-title">
            <Sparkles className="w-8 h-8 inline text-yellow-500 mr-2 -mt-1" />
            Software e Ferramentas <span className="text-brand-cta">Inclusos</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Ao se inscrever, você não leva apenas treinamento. Nós liberamos as nossas ferramentas proprietárias que automatizam o processo de mineração e venda.
          </p>
        </div>

        {/* ── Bônus Destaque ── */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto mb-20">
          {featuredBonuses.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className={`relative overflow-hidden rounded-[2rem] border ${b.border} p-[1px] bg-gradient-to-br ${b.color} hover:scale-[1.02] ${b.glow} transition-all duration-500 reveal ${isVisible ? "visible" : ""} stagger-${i + 1}`}
              >
                <div className="absolute inset-[1px] bg-brand-dark/60 backdrop-blur-2xl rounded-[calc(2rem-2px)] -z-10" />
                
                <div className="p-8 sm:p-10 flex flex-col h-full">
                  <div className="flex-1">
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-black mb-8 border ${b.badgeBg} ${b.badgeText}`}>
                      <Zap className="w-3.5 h-3.5" />
                      {b.tag}
                    </div>
                    
                    <div className="flex sm:items-center flex-col sm:flex-row gap-5 mb-6">
                      <div className={`w-16 h-16 rounded-2xl ${b.iconBg} flex items-center justify-center shrink-0 shadow-inner ring-1 ring-white/10`}>
                        <Icon className={`w-8 h-8 ${b.iconColor}`} />
                      </div>
                      <h3 className="font-sans text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight text-white">{b.title}</h3>
                    </div>
                    
                    <p className="text-foreground/80 text-base leading-relaxed mb-8">{b.desc}</p>
                    
                    <ul className="space-y-4 mb-10">
                      {b.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-4 text-sm">
                          <div className={`w-6 h-6 rounded-full ${b.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                            <Eye className={`w-3.5 h-3.5 ${b.iconColor}`} />
                          </div>
                          <span className="text-foreground/90 font-medium leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Value Section */}
                  <div className="mt-auto flex items-center justify-between p-5 rounded-xl bg-black/40 border border-white/5 backdrop-blur-md">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Preço Avulso</span>
                      <span className="text-muted-foreground line-through text-left font-medium">{b.value}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Na Inscrição Hoje</span>
                      <span className={`text-xl font-black tracking-tight ${b.badgeText}`}>100% GRÁTIS</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bônus Adicionais ── */}
        <p className="text-center text-muted-foreground text-sm uppercase tracking-widest font-sans mb-8">
          + ainda mais bônus adicionais
        </p>
        <div ref={ref2} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {bonuses.map((b, i) => (
            <div
              key={b.title}
              className={`glass-card p-6 border-yellow-500/20 hover:border-yellow-500/40 hover:shadow-[0_0_20px_hsl(45_100%_50%/0.15)] transition-all shimmer reveal ${isVisible2 ? "visible" : ""} stagger-${i + 1}`}
            >
              <div className="absolute top-3 right-3">
                <Gift className="w-5 h-5 text-yellow-500" />
              </div>
              <h3 className="font-sans text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30">
                <span className="text-xs font-bold text-brand-accent">INCLUSO</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Resumo de Valor ── */}
        <div className="mt-14 max-w-2xl mx-auto text-center glass-card p-8 border-yellow-500/30 bg-gradient-to-br from-yellow-500/5 to-transparent">
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-sans mb-4">Resumo do que você leva</p>
          <div className="space-y-2.5 mb-6 text-left text-sm">
            {[
              { label: "Método SVA Completo", value: "R$ 397" },
              { label: "Agente IA WhatsApp", value: "R$ 497" },
              { label: "Extensão Busca Ads", value: "R$ 297" },
              { label: "Bônus Adicionais (5)", value: "R$ 488" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between">
                <span className="text-foreground/70">{item.label}</span>
                <span className="text-foreground/40 line-through">{item.value}</span>
              </div>
            ))}
            <div className="border-t border-white/10 pt-3 flex justify-between font-bold">
              <span className="text-yellow-400">Valor Total</span>
              <span className="text-yellow-400 line-through">R$ 1.679</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-muted-foreground text-sm">Você paga apenas</span>
            <span className="neon-text font-sans text-3xl font-bold">R$ 97,90</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Bonus;
