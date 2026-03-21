import { X, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const before = [
  "Vendas manuais e imprevisíveis",
  "Depende de lançamentos estressantes",
  "Trabalha 12h por dia",
  "Faturamento de montanha-russa",
  "Sem tempo para família",
  "Queima dinheiro em tráfego sem retorno",
];

const after = [
  "Vendas automáticas 24/7",
  "Faturamento diário e previsível",
  "Trabalha 2-3h por dia",
  "Crescimento constante mês a mês",
  "Liberdade geográfica e de tempo",
  "ROI de 5x a 15x em tráfego pago",
];

const Comparison = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 tech-border-top section-alt">
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="section-title">
            <span className="text-brand-cta">Antes</span> vs <span className="neon-text">Depois</span> do Método SVA
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className={`glass-card p-8 border-brand-cta/30 reveal-left ${isVisible ? "visible" : ""}`}>
            <h3 className="font-tech text-2xl font-bold text-brand-cta mb-6 text-center">❌ SEM o Método</h3>
            <ul className="space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-brand-cta shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`glass-card p-8 border-brand-accent/30 shadow-neon reveal-right ${isVisible ? "visible" : ""}`}>
            <h3 className="font-tech text-2xl font-bold neon-text mb-6 text-center">✅ COM o Método SVA</h3>
            <ul className="space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
