import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, DollarSign, Zap, BarChart3 } from "lucide-react";

const proofs = [
  { icon: Zap, value: "Vendas no 1º dia", label: "🚀 Início rápido", color: "text-yellow-400" },
  { icon: TrendingUp, value: "R$ 10.017 em 3 meses", label: "📈 Escala", color: "text-green-400" },
  { icon: BarChart3, value: "R$ 801 em 1 dia", label: "🔄 Consistência", color: "text-blue-400" },
  { icon: DollarSign, value: "USD$ 610 automático", label: "💵 Vendas em dólar", color: "text-emerald-400" },
];

const TestimonialCarousel = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 tech-border-top section-alt">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-brand-cta font-sans text-sm uppercase tracking-widest mb-3">Provas Reais</p>
          <h2 className="section-title">
            Resultados <span className="neon-text">Comprovados</span> dos Nossos Alunos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Depoimentos reais de alunos que aplicaram o Método SVA.
          </p>
        </div>

        <div ref={ref} className={`max-w-3xl mx-auto reveal-scale ${isVisible ? "visible" : ""}`}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {proofs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="glass-card flex flex-col items-center gap-2 p-4 text-center hover:scale-105 transition-transform"
                >
                  <span className="text-xs font-sans text-brand-accent">{item.label}</span>
                  <Icon className={`w-8 h-8 ${item.color}`} />
                  <span className="text-xs font-semibold text-foreground">{item.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
