import { Check, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const forYou = [
  "Infoprodutores que querem escalar vendas",
  "Afiliados que querem sair do zero",
  "Quem quer aprender tráfego pago do zero",
  "Quem busca renda no piloto automático",
  "Quem quer vender para o exterior",
  "Empreendedores digitais de qualquer nicho",
];

const notForYou = [
  "Quem busca esquemas de dinheiro fácil",
  "Quem não quer investir em tráfego pago",
  "Quem não tem paciência para aprender",
  "Quem espera resultados sem esforço",
];

const TargetAudience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 tech-border-top">
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="section-title">
            Para <span className="neon-text">Quem</span> é o Método SVA?
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className={`glass-card p-8 border-brand-accent/30 reveal-left ${isVisible ? "visible" : ""}`}>
            <h3 className="font-tech text-xl font-bold neon-text mb-6">✅ É para você se...</h3>
            <ul className="space-y-3">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`glass-card p-8 border-brand-cta/30 reveal-right ${isVisible ? "visible" : ""}`}>
            <h3 className="font-tech text-xl font-bold text-brand-cta mb-6">❌ NÃO é para você se...</h3>
            <ul className="space-y-3">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-brand-cta shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
