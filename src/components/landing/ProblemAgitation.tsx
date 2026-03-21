import { AlertTriangle, Clock, TrendingDown, Frown, HeartCrack, BanIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const emotionalPains = [
  { icon: HeartCrack, title: "Ansiedade que não para", desc: "Você acorda todo dia sem saber se vai vender. A incerteza te consome e você não consegue desligar — nem no fim de semana." },
  { icon: Frown, title: "Frustração de quem já tentou de tudo", desc: "Lançamento, webinário, VSL, conteúdo… nada deu resultado consistente. Você começa a duvidar se esse mercado é pra você." },
];

const practicalPains = [
  { icon: Clock, title: "Refém do próprio negócio", desc: "Você trabalha o dia inteiro e mesmo assim não tem dinheiro entrando de forma previsível. Se parar, tudo para junto." },
  { icon: TrendingDown, title: "Picos e vales de faturamento", desc: "Você vive de picos de dinheiro e depois passa semanas no zero. Zero previsibilidade. Zero segurança financeira." },
  { icon: BanIcon, title: "Preso no ciclo de lançamento", desc: "A cada 3 meses você precisa lançar de novo — e o estresse tá destruindo sua saúde, seus relacionamentos e sua motivação." },
  { icon: AlertTriangle, title: "Sem sistema de vendas", desc: "Se você parar, o dinheiro para junto. Você é refém do próprio negócio porque não tem nada funcionando no automático." },
];

const ProblemAgitation = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 tech-border-top">
      <div className="section-container">
        <div className="text-center mb-6">
          <p className="text-brand-cta font-tech text-sm uppercase tracking-widest mb-3">Responda com sinceridade</p>
          <h2 className="section-title">
            Quantas dessas <span className="text-brand-cta">dores</span> são suas?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Se você se identificar com pelo menos <span className="text-foreground font-semibold">2 delas</span>, o Método SVA foi feito sob medida pra você.
          </p>
        </div>

        {/* Dores Emocionais */}
        <div className="mb-8">
          <p className="text-sm font-tech text-brand-cta/70 uppercase tracking-widest mb-4 text-center">😔 Dores Emocionais</p>
          <div ref={ref} className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {emotionalPains.map((p, i) => (
              <div
                key={p.title}
                className={`glass-card p-6 border-brand-cta/20 hover:border-brand-cta/40 hover:shadow-neon-red transition-all reveal ${isVisible ? "visible" : ""} stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded bg-brand-cta/10 flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-brand-cta" />
                </div>
                <h3 className="font-tech text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dores Práticas */}
        <div>
          <p className="text-sm font-tech text-brand-cta/70 uppercase tracking-widest mb-4 text-center">⚙️ Dores Práticas</p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {practicalPains.map((p, i) => (
              <div
                key={p.title}
                className={`glass-card p-6 border-brand-cta/20 hover:border-brand-cta/40 hover:shadow-neon-red transition-all reveal ${isVisible ? "visible" : ""} stagger-${i + 3}`}
              >
                <div className="w-12 h-12 rounded bg-brand-cta/10 flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-brand-cta" />
                </div>
                <h3 className="font-tech text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-muted-foreground">
            Se você disse <span className="text-brand-cta font-bold">"sim"</span> para alguma delas...
          </p>
          <p className="text-2xl font-tech font-bold mt-2">
            O <span className="neon-text">Método SVA</span> é a sua saída.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitation;
