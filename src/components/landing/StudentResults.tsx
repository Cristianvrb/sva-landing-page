import { Trophy, BadgeCheck, CheckCircle2, TrendingUp, Crown, Medal, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const ranking = [
  {
    position: 1,
    name: "Bruno",
    amount: "Maior Faturamento (Top 1)",
    desc: "O recordista absoluto de vendas da comunidade",
    print: "/results/result-6.webp",
    icon: Crown,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/40",
    glow: "shadow-[0_0_24px_rgba(251,191,36,0.15)]",
  },
  {
    position: 2,
    name: "Nicolas",
    amount: "R$ 10.017,81",
    desc: "Quebrou a barreira dos 10k de forma consistente",
    print: "/results/result-2.webp",
    icon: Medal,
    color: "text-slate-300",
    bg: "bg-slate-300/10",
    border: "border-slate-300/30",
    glow: "",
  },
  {
    position: 3,
    name: "Higor Torrez",
    amount: "Rumo aos R$ 10k",
    desc: "Acelerando resultados em tempo recorde",
    print: "/results/result-3.webp",
    icon: Award,
    color: "text-amber-600",
    bg: "bg-amber-700/10",
    border: "border-amber-700/30",
    glow: "",
  },
  {
    position: 4,
    name: "Higor",
    amount: "R$ 801,32 / dia",
    desc: "Pico de vendas diário com script automático",
    print: "/results/result-1.webp",
    icon: TrendingUp,
    color: "text-brand-accent",
    bg: "bg-brand-accent/5",
    border: "border-brand-accent/15",
    glow: "",
  },
  {
    position: 5,
    name: "Aluno SVA",
    amount: "Vendas em Dólar (USD)",
    desc: "Faturando 5x mais no mercado internacional",
    print: "/results/result-4.webp",
    icon: TrendingUp,
    color: "text-brand-accent",
    bg: "bg-brand-accent/5",
    border: "border-brand-accent/15",
    glow: "",
  },
];

const extraResults = [
  { print: "/results/result-5.webp", label: "Vendeu seguindo a aula" },
  { print: "/results/result-7.webp", label: "Comissão garantida" },
  { print: "/results/result-8.webp", label: "Venda aprovada no cartão" },
  { print: "/results/result-9.webp", label: "Pix recebido automático" },
  { print: "/results/result-10.webp", label: "Mais vendas caindo" },
  { print: "/results/result-11.webp", label: "Resultado da campanha" },
  { print: "/results/result-12.webp", label: "Acordando com vendas" },
  { print: "/results/result-13.webp", label: "Recorde batido hoje" },
  { print: "/results/result-14.webp", label: "Vendas todos os dias" },
  { print: "/results/result-15.webp", label: "Notificações não param" },
  { print: "/results/result-16.webp", label: "Venda confirmada" },
  { print: "/results/result-17.webp", label: "Resultado comprovado" },
];

const StudentResults = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selectedPrint, setSelectedPrint] = useState<string | null>(null);

  return (
    <section className="py-20 tech-border-top section-alt">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-yellow-500 font-tech text-sm uppercase tracking-widest mb-3 flex justify-center items-center gap-2">
            <Trophy className="w-4 h-4" />
            Hall da Fama SVA
          </p>
          <h2 className="section-title">
            Ranking Bateu-Levou: <span className="neon-text">Top Faturamentos</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Nós não escondemos atrás de textos. Clicando em qualquer resultado abaixo você abre o{" "}
            <span className="text-foreground font-semibold">print real e inquestionável</span> das
            vendas acontecendo no painel.
          </p>
        </div>

        {/* Top 5 Ranking */}
        <div ref={ref} className="max-w-4xl mx-auto space-y-4">
          {ranking.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                onClick={() => setSelectedPrint(r.print)}
                className={`glass-card p-4 sm:p-5 flex flex-col sm:flex-row items-center sm:justify-between gap-4 cursor-pointer border ${r.border} ${r.glow} hover:border-brand-accent/60 transition-all duration-300 reveal ${isVisible ? "visible" : ""} stagger-${i + 1}`}
              >
                {/* Left: Rank + Info */}
                <div className="flex items-center gap-5 w-full sm:w-auto">
                  <div
                    className={`w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center font-tech font-bold text-xl ${r.bg} ${r.color}`}
                  >
                    {i < 3 ? (
                      <Icon className={`w-6 h-6 ${r.color}`} />
                    ) : (
                      <span>#{r.position}</span>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-foreground text-lg">{r.name}</p>
                      <BadgeCheck className="w-4 h-4 text-brand-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                </div>

                {/* Right: Revenue + Thumb */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t border-border sm:border-0">
                  <div className="text-left sm:text-right">
                    <p className="text-xs text-muted-foreground uppercase font-tech tracking-wider mb-0.5">
                      Faturamento Comprovado
                    </p>
                    <p
                      className={`font-bold font-tech text-xl sm:text-2xl ${i < 3 ? r.color : "text-foreground"}`}
                    >
                      {r.amount}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 overflow-hidden rounded border-2 border-brand-accent/30 opacity-80 hover:opacity-100 transition-opacity">
                    <img
                      src={r.print}
                      alt="Print do Faturamento"
                      width="100"
                      height="200"
                      loading="lazy"
                      className="w-full h-full object-cover grayscale brightness-125"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra results mini-grid */}
        <div className="max-w-4xl mx-auto mt-12">
          <p className="text-center text-sm font-tech text-muted-foreground uppercase tracking-wider mb-6">
            + mais resultados dos alunos
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {extraResults.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedPrint(item.print)}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg border border-border hover:border-brand-accent/40 transition-all duration-300 hover:shadow-[0_0_12px_hsl(var(--brand-accent)/0.15)]">
                  <img
                    src={item.print}
                    alt={item.label}
                    width="200"
                    height="400"
                    loading="lazy"
                    className="w-full h-auto object-cover aspect-[1/2] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground text-center mt-1.5 leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Validation badge */}
        <div className="text-center mt-10 flex justify-center items-center gap-1.5 text-sm text-muted-foreground mx-auto max-w-sm">
          <CheckCircle2 className="w-4 h-4 text-brand-accent" /> Todos os prints expostos aqui
          foram validados e autorizados.
        </div>

        {/* Dialog for full-size print */}
        <Dialog open={!!selectedPrint} onOpenChange={() => setSelectedPrint(null)}>
          <DialogContent className="max-w-2xl p-2 bg-background/95 border-brand-accent/30 shadow-neon">
            {selectedPrint && (
              <img
                src={selectedPrint}
                alt="Print de Comprovação de Vendas"
                width="800"
                height="1600"
                loading="lazy"
                className="w-full h-auto rounded-md"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default StudentResults;
