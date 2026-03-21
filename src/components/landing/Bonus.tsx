import { Gift, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const bonuses = [
  { title: "Comunidade VIP", value: "R$ 997", desc: "Acesso ao grupo exclusivo de alunos com networking e suporte." },
  { title: "Templates de Funil", value: "R$ 1.497", desc: "Modelos prontos de funis de alta conversão para copiar e colar." },
  { title: "Pack de Copies", value: "R$ 797", desc: "Scripts de copy para anúncios, e-mails e páginas de vendas." },
  { title: "Masterclass de Tráfego", value: "R$ 497", desc: "Aula especial com estratégias avançadas de Facebook e Google Ads." },
  { title: "Mentoria em Grupo", value: "R$ 2.997", desc: "4 encontros mensais ao vivo para tirar dúvidas e receber feedback." },
];

const Bonus = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 tech-border-top section-alt">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-brand-cta font-tech text-sm uppercase tracking-widest mb-3">Bônus Exclusivos</p>
          <h2 className="section-title">
            <Sparkles className="w-8 h-8 inline text-yellow-500 mr-2" />
            Bônus que Você Recebe <span className="text-brand-cta">Gratuitamente</span>
          </h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bonuses.map((b, i) => (
            <div
              key={b.title}
              className={`glass-card p-6 border-yellow-500/20 hover:border-yellow-500/40 hover:shadow-[0_0_20px_hsl(45_100%_50%/0.15)] transition-all shimmer reveal ${isVisible ? "visible" : ""} stagger-${i + 1}`}
            >
              <div className="absolute top-3 right-3">
                <Gift className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-xs text-muted-foreground line-through mb-1">Valor: {b.value}</p>
              <h3 className="font-tech text-xl font-bold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30">
                <span className="text-xs font-bold text-brand-accent">GRÁTIS</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            Total em bônus: <span className="line-through">R$ 6.785</span>{" "}
            <span className="neon-text font-bold text-lg">GRÁTIS</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
