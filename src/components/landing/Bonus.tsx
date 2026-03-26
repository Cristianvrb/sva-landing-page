import { Gift, Sparkles, Bot, Search, Zap, Eye } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const featuredBonuses = [
  {
    icon: Bot,
    tag: "BÔNUS ESPECIAL #1",
    title: "Agente IA de Fechamento no WhatsApp",
    desc: "Um agente de inteligência artificial configurado para responder, qualificar e fechar suas vendas automaticamente pelo WhatsApp — 24h por dia, 7 dias por semana, mesmo enquanto você dorme.",
    bullets: [
      "Responde leads instantaneamente — zero espera, zero perda de venda",
      "Argumenta objeções e direciona para o checkout automaticamente",
      "Modelo pronto: copiar, colar e conectar ao seu WhatsApp Business",
    ],
    value: "R$ 497",
    color: "from-emerald-500/20 to-emerald-900/10",
    border: "border-emerald-500/40 hover:border-emerald-400/70",
    glow: "hover:shadow-[0_0_30px_hsl(152_76%_45%/0.25)]",
    badgeBg: "bg-emerald-500/10 border-emerald-500/30",
    badgeText: "text-emerald-400",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
  },
  {
    icon: Search,
    tag: "BÔNUS ESPECIAL #2",
    title: "Extensão Busca Ads: Spy de Produtos Escalados",
    desc: "Extensão gratuita que revela quais infoprodutos estão sendo escalados agora no Facebook e Instagram Ads — para você modelar, criar sua oferta e vender também.",
    bullets: [
      "Veja exatamente quais produtos têm verba pesada rodando agora",
      "Filtre por nicho, engajamento e data de publicação dos anúncios",
      "Encontre o produto vencedor e crie sua campanha em cima do que já funciona",
    ],
    value: "R$ 297",
    color: "from-amber-500/20 to-amber-900/10",
    border: "border-amber-500/40 hover:border-amber-400/70",
    glow: "hover:shadow-[0_0_30px_hsl(45_90%_50%/0.25)]",
    badgeBg: "bg-amber-500/10 border-amber-500/30",
    badgeText: "text-amber-400",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15",
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
    <section className="py-20 tech-border-top section-alt">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-brand-cta font-tech text-sm uppercase tracking-widest mb-3">Bônus Exclusivos</p>
          <h2 className="section-title">
            <Sparkles className="w-8 h-8 inline text-yellow-500 mr-2" />
            Bônus que Você Recebe <span className="text-brand-cta">Gratuitamente</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Além do método completo, você leva ferramentas que poucos têm acesso — e que sozinhas valeriam mais que o curso inteiro.
          </p>
        </div>

        {/* ── Bônus Destaque ── */}
        <div ref={ref} className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          {featuredBonuses.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className={`relative glass-card p-8 bg-gradient-to-br ${b.color} ${b.border} ${b.glow} transition-all duration-300 shimmer reveal ${isVisible ? "visible" : ""} stagger-${i + 1}`}
              >
                {/* Tag */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-5 border ${b.badgeBg} ${b.badgeText}`}>
                  <Zap className="w-3 h-3" />
                  {b.tag}
                </div>

                {/* Ícone */}
                <div className={`w-14 h-14 rounded-2xl ${b.iconBg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-7 h-7 ${b.iconColor}`} />
                </div>

                <h3 className="font-tech text-2xl font-bold mb-3 leading-tight">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{b.desc}</p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {b.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm">
                      <Eye className={`w-4 h-4 mt-0.5 flex-shrink-0 ${b.iconColor}`} />
                      <span className="text-foreground/80">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Valor */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground text-sm line-through">{b.value}</span>
                    <span className={`text-xs font-bold ${b.badgeText}`}>→ GRÁTIS</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold border ${b.badgeBg} ${b.badgeText}`}>
                    INCLUSO NO SVA
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bônus Adicionais ── */}
        <p className="text-center text-muted-foreground text-sm uppercase tracking-widest font-tech mb-8">
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
              <h3 className="font-tech text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30">
                <span className="text-xs font-bold text-brand-accent">INCLUSO</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Resumo de Valor ── */}
        <div className="mt-14 max-w-2xl mx-auto text-center glass-card p-8 border-yellow-500/30 bg-gradient-to-br from-yellow-500/5 to-transparent">
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-tech mb-4">Resumo do que você leva</p>
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
            <span className="neon-text font-tech text-3xl font-bold">R$ 97,90</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Bonus;
