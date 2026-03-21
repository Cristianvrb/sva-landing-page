import { Trophy, ArrowRight, BadgeCheck, Medal, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const ranking = [
  { position: 1, name: "Bruno", amount: "Maior Faturamento (Top 1)", desc: "O recordista absoluto de vendas da comunidade", print: "/results/result-6.jpg", color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/30" },
  { position: 2, name: "Nicolas", amount: "R$ 10.017,81", desc: "Quebrou a barreira dos 10k de forma consistente", print: "/results/result-2.jpg", color: "text-slate-300", bg: "bg-slate-300/10", border: "border-slate-300/30" },
  { position: 3, name: "Higor Torrez", amount: "Rumo aos R$ 10k", desc: "Acelerando resultados em tempo recorde", print: "/results/result-3.jpg", color: "text-amber-600", bg: "bg-amber-700/10", border: "border-amber-700/30" },
  { position: 4, name: "Higor (Diário)", amount: "R$ 801,32", desc: "Pico de vendas diário com script automático", print: "/results/result-1.jpg", color: "text-brand-accent", bg: "bg-brand-accent/5", border: "border-brand-accent/10" },
  { position: 5, name: "Aluno Confidencial", amount: "Vendas em Dólar", desc: "Ganhando 5x mais vendendo no mercado internacional", print: "/results/result-4.jpg", color: "text-brand-accent", bg: "bg-brand-accent/5", border: "border-brand-accent/10" },
];

const StudentResults = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selectedPrint, setSelectedPrint] = useState<string | null>(null);

  return (
    <section className="py-20 tech-border-top section-alt">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-yellow-500 font-tech text-sm uppercase tracking-widest mb-3 flex justify-center items-center gap-2">
            <Trophy className="w-4 h-4" />
            Hall da Fama SVA
          </p>
          <h2 className="section-title">
            Ranking Bateu-Levou: <span className="neon-text">Top Faturamentos</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Nós não escondemos atrás de textos. Clicando em qualquer resultado abaixo você abre o 
            <span className="text-foreground font-semibold"> print real e inquestionável </span> 
            das vendas acontecendo no painel.
          </p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto space-y-4">
          {ranking.map((r, i) => (
            <div
              key={i}
              onClick={() => setSelectedPrint(r.print)}
              className={`glass-card p-4 sm:p-5 flex flex-col sm:flex-row items-center sm:justify-between gap-4 cursor-pointer border ${r.border} hover:border-brand-accent/60 reveal ${isVisible ? "visible" : ""} stagger-${i + 1}`}
            >
              {/* Esq: Rank + Info */}
              <div className="flex items-center gap-5 w-full sm:w-auto">
                <div className={`w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center font-tech font-bold text-xl ${r.bg} ${r.color}`}>
                  #{r.position}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-foreground text-lg">{r.name}</p>
                    <BadgeCheck className="w-4 h-4 text-brand-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </div>

              {/* Dir: Faturamento e Botão */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t border-border sm:border-0">
                <div className="text-left sm:text-right">
                  <p className="text-xs text-muted-foreground uppercase font-tech tracking-wider mb-0.5">Faturamento Comprovado</p>
                  <p className={`font-bold font-tech text-xl sm:text-2xl ${i < 3 ? r.color : 'text-foreground'}`}>{r.amount}</p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 overflow-hidden rounded border-2 border-brand-accent/30 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity hidden xs:block">
                  <img src={r.print} alt="Print do Faturamento" width="100" height="200" loading="lazy" className="w-full h-full object-cover grayscale brightness-125" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex justify-center items-center gap-1.5 text-sm text-muted-foreground mx-auto max-w-sm">
          <CheckCircle2 className="w-4 h-4 text-brand-accent" /> Todos os prints expostos aqui foram validados e autorizados.
        </div>

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
