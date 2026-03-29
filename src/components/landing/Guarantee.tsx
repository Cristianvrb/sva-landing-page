import { ShieldCheck, XCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const noNeed = [
  "Não precisa explicar o motivo",
  "Não precisa devolver material",
  "Não precisa preencher formulário",
  "Não precisa esperar dias para receber",
];

const Guarantee = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 tech-border-top">
      <div className="section-container">
        <div
          ref={ref}
          className={`glass-card p-8 md:p-14 max-w-3xl mx-auto border-brand-accent/30 text-center reveal-scale ${isVisible ? "visible" : ""}`}
        >
          {/* Stamp badge */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-brand-accent/40 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full bg-brand-accent/10 flex items-center justify-center">
              <ShieldCheck className="w-14 h-14 text-brand-accent" />
            </div>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl font-bold mb-4">
            Garantia Incondicional de <span className="neon-text">7 Dias</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 text-lg">
            Se por qualquer motivo você não ficar satisfeito com o Método SVA nos primeiros 7 dias,
            basta enviar um e-mail e devolvemos <span className="text-foreground font-semibold">100% do seu investimento</span>.
            Sem perguntas, sem burocracia. <span className="text-foreground font-semibold">O risco é todo nosso.</span>
          </p>

          {/* O que NÃO precisa */}
          <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-8">
            {noNeed.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <XCircle className="w-4 h-4 text-brand-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-accent/10 border border-brand-accent/30">
            <ShieldCheck className="w-6 h-6 text-brand-accent" />
            <span className="font-sans font-bold text-brand-accent text-lg">SATISFAÇÃO GARANTIDA OU SEU DINHEIRO DE VOLTA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
