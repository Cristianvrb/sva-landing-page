import { ArrowRight, BookOpen, Shield, Clock, CreditCard, Lock, Zap, Check, Star, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  "8 módulos com +30 aulas práticas",
  "Aulas de tráfego pago do zero (Facebook & Google Ads)",
  "Vendas via WhatsApp com automação e bots",
  "Como criar seu produto digital do zero",
  "Escala, rastreamento e otimização de campanhas",
  "Vendas internacionais em dólar",
  "Acesso vitalício + todas as atualizações futuras",
  "Templates de funis e copies de anúncios",
];

const Offer = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="oferta" className="py-24 tech-border-top section-alt">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-brand-cta font-sans text-sm uppercase tracking-widest mb-3">Oferta Especial</p>
          <h2 className="section-title">
            Comece a Vender no <span className="neon-text">Automático</span> Hoje
          </h2>
          <p className="text-muted-foreground text-lg mt-3 max-w-2xl mx-auto">
            Tudo o que você precisa para sair do zero e montar seu sistema de vendas — por menos de R$ 1 por dia.
          </p>
        </div>

        {/* Card único — Curso */}
        <div
          ref={ref}
          className={`max-w-2xl mx-auto mb-10 reveal-scale ${isVisible ? "visible" : ""}`}
        >
          <div className="rounded-2xl border-2 border-brand-accent/40 bg-brand-dark/90 p-8 md:p-10 shadow-[0_0_30px_rgba(33,197,93,0.3)] relative ">
            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-brand-accent text-xs font-bold text-background uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Acesso Imediato
              </span>
            </div>

            <div className="text-center mb-6 mt-2">
              <div className="w-14 h-14 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-brand-accent" />
              </div>
              <h3 className="font-sans font-bold text-2xl mb-1">Método SVA — Curso Completo</h3>
              <p className="text-sm text-muted-foreground">Do zero ao sistema vendendo no automático</p>
            </div>

            {/* Preço */}
            <div className="text-center mb-8">
              <p className="text-muted-foreground text-sm line-through mb-1">De R$ 297,00</p>
              <p className="font-sans text-5xl font-bold neon-text leading-none">R$ 97,90</p>
              <p className="text-muted-foreground text-sm mt-2">ou <span className="text-foreground font-semibold">12x de R$ 9,83</span> no cartão</p>
            </div>

            {/* Features — todas positivas */}
            <ul className="space-y-3 mb-8 max-w-md mx-auto">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://pay.cakto.com.br/tky2x9d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tech text-lg px-8 py-5 w-full justify-center "
            >
              QUERO MEU ACESSO AGORA — R$ 97,90
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-center text-xs text-muted-foreground mt-3">
              Pagamento seguro · Acesso liberado em minutos
            </p>
          </div>
        </div>

        {/* Quebra de objeção */}
        <div className="text-center mb-8 space-y-2 text-sm text-muted-foreground">
          <p>✅ Você <span className="text-foreground font-medium">não precisa de experiência</span></p>
          <p>✅ Você <span className="text-foreground font-medium">não precisa aparecer</span></p>
          <p>✅ Você só precisa <span className="text-foreground font-medium">seguir o passo a passo</span></p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-border text-xs text-muted-foreground max-w-xl mx-auto">
          <div className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-brand-accent" />
            <span>SSL Seguro</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-brand-accent" />
            <span>Compra protegida</span>
          </div>
          <div className="flex items-center gap-1">
            <CreditCard className="w-3.5 h-3.5 text-brand-accent" />
            <span>Cartão, Pix ou Boleto</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-brand-accent" />
            <span>Acesso imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
