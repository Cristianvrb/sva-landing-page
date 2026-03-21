import { Globe, DollarSign, Languages, Plane } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: DollarSign, title: "Venda em Dólar e Euro", desc: "Multiplique seus ganhos vendendo em moedas fortes para o mercado internacional." },
  { icon: Languages, title: "Mercado Global", desc: "Atinja públicos em Portugal, EUA, Europa e outros 15+ países." },
  { icon: Globe, title: "Plataformas Globais", desc: "Aprenda a usar Stripe, PayPal e plataformas internacionais de infoprodutos." },
  { icon: Plane, title: "Liberdade Geográfica", desc: "Trabalhe de qualquer lugar do mundo com uma estrutura 100% digital." },
];

const InternationalSales = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 tech-border-top">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-brand-accent font-tech text-sm uppercase tracking-widest mb-3">Mercado Global</p>
          <h2 className="section-title">
            Venda Para o <span className="neon-text">Mundo Inteiro</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            O Método SVA ensina você a escalar suas vendas para o mercado internacional, faturando em dólar e euro.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`glass-card p-6 flex gap-4 hover:shadow-neon transition-all group reveal ${isVisible ? "visible" : ""} stagger-${i + 1}`}
            >
              <div className="w-12 h-12 shrink-0 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center group-hover:border-brand-accent/50 group-hover:scale-110 transition-all">
                <f.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h3 className="font-tech text-lg font-bold mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalSales;
