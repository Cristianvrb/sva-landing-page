import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Calculator } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const getScenarioLabel = (roas: number) => {
  if (roas <= 3) return { label: "Conservador", color: "text-muted-foreground" };
  if (roas <= 6) return { label: "Validado por alunos", color: "text-brand-accent" };
  return { label: "Otimista", color: "text-brand-cta" };
};

const Simulation = () => {
  const [investment, setInvestment] = useState(1000);
  const [roas, setRoas] = useState(4);
  const { ref, isVisible } = useScrollReveal();

  const months = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    const revenue = investment * roas * (1 + i * 0.15);
    const profit = revenue - investment;
    return { name: `Mês ${month}`, receita: Math.round(revenue), lucro: Math.round(profit) };
  });

  const scenario = getScenarioLabel(roas);

  return (
    <section className="py-20 tech-border-top section-alt">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-brand-accent font-tech text-sm uppercase tracking-widest mb-3">Simulador</p>
          <h2 className="section-title">
            Simule Seus <span className="neon-text">Ganhos</span>
          </h2>
        </div>

        <div ref={ref} className={`glass-card p-8 max-w-4xl mx-auto reveal-scale ${isVisible ? "visible" : ""}`}>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                <Calculator className="w-4 h-4 inline mr-1" />
                Investimento mensal em tráfego
              </label>
              <input type="range" min={200} max={10000} step={100} value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="w-full accent-brand-accent" />
              <p className="font-tech text-2xl font-bold neon-text mt-2">R$ {investment.toLocaleString("pt-BR")}</p>
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">ROAS esperado</label>
              <input type="range" min={2} max={15} step={0.5} value={roas} onChange={(e) => setRoas(Number(e.target.value))} className="w-full accent-brand-accent" />
              <div className="flex items-center gap-3 mt-2">
                <p className="font-tech text-2xl font-bold neon-text">{roas}x</p>
                <span className={`text-sm font-tech font-medium ${scenario.color}`}>— {scenario.label}</span>
              </div>
            </div>
          </div>

          <div className="bg-brand-dark/50 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-muted-foreground">Receita Mês 1</p>
                <p className="font-tech text-xl font-bold neon-text">R$ {(investment * roas).toLocaleString("pt-BR")}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Lucro Mês 1</p>
                <p className="font-tech text-xl font-bold text-brand-accent">R$ {(investment * roas - investment).toLocaleString("pt-BR")}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Receita Ano 1</p>
                <p className="font-tech text-xl font-bold text-brand-cta">R$ {months.reduce((a, m) => a + m.receita, 0).toLocaleString("pt-BR")}</p>
              </div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={months}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 30%, 18%)" />
                <XAxis dataKey="name" stroke="hsl(215, 20%, 55%)" fontSize={12} />
                <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                <Tooltip
                  contentStyle={{ background: "hsl(220, 45%, 10%)", border: "1px solid hsl(142, 71%, 45%, 0.3)", borderRadius: 8 }}
                  labelStyle={{ color: "hsl(210, 40%, 92%)" }}
                  formatter={(value: number) => [`R$ ${value.toLocaleString("pt-BR")}`, ""]}
                />
                <Area type="monotone" dataKey="receita" stroke="hsl(142, 71%, 45%)" fill="hsl(142, 71%, 45%, 0.1)" strokeWidth={2} />
                <Area type="monotone" dataKey="lucro" stroke="hsl(0, 72%, 51%)" fill="hsl(0, 72%, 51%, 0.1)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <p className="text-xs text-muted-foreground/60 text-center mt-4">
            * Baseado em resultados reais de alunos. Resultados variam conforme nicho, investimento e dedicação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Simulation;
