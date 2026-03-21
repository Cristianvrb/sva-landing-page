import { Rocket, Target, Shield, Clock, Globe, BarChart3, Repeat, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  { icon: Rocket, title: "Escale Rápido", desc: "Passe de R$ 0 a R$ 50k/mês em menos de 90 dias" },
  { icon: Target, title: "Tráfego Preciso", desc: "Aprenda a criar anúncios que convertem de verdade" },
  { icon: Shield, title: "Método Validado", desc: "Já funcionou para mais de 2.500 alunos em 15 países" },
  { icon: Clock, title: "Tempo Livre", desc: "Trabalhe apenas 2-3 horas por dia com o sistema rodando" },
  { icon: Globe, title: "Venda Global", desc: "Aprenda a vender em dólar e euro para o mundo todo" },
  { icon: BarChart3, title: "ROI Alto", desc: "Nossos alunos atingem em média 8x de retorno em ads" },
  { icon: Repeat, title: "Receita Recorrente", desc: "Construa renda previsível e crescente mês a mês" },
  { icon: Heart, title: "Qualidade de Vida", desc: "Tenha liberdade geográfica e financeira de verdade" },
];

const Benefits = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 tech-border-top">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-brand-accent font-tech text-sm uppercase tracking-widest mb-3">Benefícios</p>
          <h2 className="section-title">
            Por que o Método SVA <span className="neon-text">Funciona</span>?
          </h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`glass-card p-6 text-center hover:shadow-neon transition-all duration-300 group reveal ${isVisible ? "visible" : ""} stagger-${i + 1}`}
            >
              <div className="w-14 h-14 mx-auto rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-4 group-hover:border-brand-accent/50 group-hover:scale-110 transition-all">
                <b.icon className="w-7 h-7 text-brand-accent group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="font-tech text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
