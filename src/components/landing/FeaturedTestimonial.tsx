import { Quote, BadgeCheck, Star, ArrowDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FeaturedTestimonial = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 tech-border-top section-alt">
      <div className="section-container">
        <div className="text-center mb-10">
          <p className="text-brand-accent font-sans text-sm uppercase tracking-widest mb-3">Caso Real — Verificado</p>
          <h2 className="section-title">
            Ele estava prestes a desistir…<br />
            <span className="neon-text">hoje está próximo de R$1 milhão faturado</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`glass-card p-8 md:p-12 max-w-4xl mx-auto border-brand-accent/40 ring-1 ring-brand-accent/20 reveal ${isVisible ? "visible" : ""}`}
        >
          <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
            {/* Print real do WhatsApp */}
            <div className={`reveal ${isVisible ? "visible" : ""} stagger-1`}>
              <div className="rounded-lg overflow-hidden border-2 border-brand-accent/30 shadow-[0_0_20px_hsl(var(--brand-accent)/0.15)]">
                <img
                  src="/results/bruno-whatsapp.webp"
                  width="400"
                  height="800"
                  alt="Relatório de Vendas SVA"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] text-muted-foreground text-center mt-2 font-sans uppercase tracking-wider">
                Print real — sem edição
              </p>
            </div>

            {/* Depoimento editado */}
            <div>
              {/* Badges */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30">
                  <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                  <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-wider">Caso Real</span>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                  <BadgeCheck className="w-3.5 h-3.5 text-brand-accent" />
                  <span className="text-[10px] font-bold text-brand-accent uppercase tracking-wider">Verificado</span>
                </div>
              </div>

              <Quote className="w-10 h-10 text-brand-accent/20 mb-4" />

              <div className="space-y-5 text-lg leading-relaxed">
                <p className={`text-muted-foreground reveal ${isVisible ? "visible" : ""} stagger-2`}>
                  "Em maio de 2025 eu comprei o curso, depois de já ter torrado tudo que tinha tentando dar certo no digital.
                  Eu já estava decidido a desistir e voltar pra CLT…"
                </p>
                <p className={`text-muted-foreground reveal ${isVisible ? "visible" : ""} stagger-3`}>
                  "De maio a agosto eu só perdia dinheiro. Vendia e perdia.
                  Foi quando o Cristian insistiu pra eu continuar e aplicar o método de verdade."
                </p>
                <p className={`text-foreground font-semibold reveal ${isVisible ? "visible" : ""} stagger-4`}>
                  "Em setembro comecei a vender.
                  Em dezembro já tinha faturado quase R$150 mil."
                </p>
                <p className={`text-brand-accent font-bold text-xl reveal ${isVisible ? "visible" : ""} stagger-5`}>
                  "Hoje tenho sócios, estrutura em várias cidades e estou chegando próximo de R$1 milhão faturado."
                </p>
              </div>

              <cite className={`block mt-8 text-sm text-muted-foreground not-italic font-sans reveal ${isVisible ? "visible" : ""} stagger-6`}>
                — Bruno, aluno do Método SVA
              </cite>
            </div>
          </div>
        </div>

        {/* Transition */}
        <div className={`text-center mt-12 reveal ${isVisible ? "visible" : ""} stagger-6`}>
          <p className="text-xl font-sans font-bold text-foreground">Esse não é um caso isolado.</p>
          <ArrowDown className="w-6 h-6 text-brand-accent mx-auto mt-3 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonial;
