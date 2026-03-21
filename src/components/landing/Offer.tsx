import { useState, useEffect } from "react";
import { ArrowRight, BookOpen, Users, FolderOpen, Shield, Clock, CreditCard, Lock, Zap, Check, X, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Progress } from "@/components/ui/progress";

const cursoFeatures = [
  "8 módulos (+74 aulas)",
  "+50h de conteúdo prático",
  "Acesso vitalício + atualizações",
  "Templates de funis prontos",
  "Pack de copies para anúncios",
];

const cursoExcluded = [
  "Mentoria em grupo mensal",
  "Comunidade VIP de alunos",
  "Suporte dedicado por 12 meses",
  "Masterclass de tráfego avançado",
];

const mentoriaFeatures = [
  "8 módulos (+74 aulas)",
  "+50h de conteúdo prático",
  "Acesso vitalício + atualizações",
  "Templates de funis prontos",
  "Pack de copies para anúncios",
  "Mentoria em grupo mensal",
  "Comunidade VIP de alunos",
  "Suporte dedicado por 12 meses",
  "Masterclass de tráfego avançado",
];

const Offer = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="oferta" className="py-24 tech-border-top section-alt">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-brand-cta font-tech text-sm uppercase tracking-widest mb-3">Oferta Especial</p>
          <h2 className="section-title">
            Escolha o Plano Ideal Para <span className="neon-text">Você</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-3 max-w-2xl mx-auto">
            Do zero aos R$10k — e depois no automático todos os dias.
          </p>
        </div>

        {/* Urgência compartilhada */}
        <div className="max-w-xl mx-auto mb-10 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-brand-cta animate-pulse" />
            <span className="text-sm font-tech font-bold text-brand-cta">OFERTA DE LANÇAMENTO</span>
          </div>
          <div className="max-w-xs mx-auto">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
              <span>Vagas preenchidas (Turma Atual)</span>
              <span className="font-tech font-bold text-brand-cta">47/50</span>
            </div>
            <Progress value={94} className="h-2.5 bg-muted" />
          </div>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10 reveal-scale ${isVisible ? "visible" : ""}`}
        >
          {/* Card 1 — Curso Gravado */}
          <div className={`rounded-2xl border border-border bg-brand-dark/70 p-8 flex flex-col reveal ${isVisible ? "visible" : ""} stagger-1`}>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="font-tech font-bold text-xl mb-1">Curso Gravado</h3>
              <p className="text-sm text-muted-foreground">Aprenda no seu ritmo</p>
            </div>

            {/* Preço placeholder */}
            <div className="text-center mb-6">
              <p className="text-muted-foreground text-sm line-through mb-1">De R$ 297,00</p>
              <p className="font-tech text-4xl font-bold text-foreground leading-none">R$ 97,90</p>
              <p className="text-muted-foreground text-xs mt-1">ou 12x de R$ 9,83</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-1">
              {cursoFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
              {cursoExcluded.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground/50">
                  <X className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="line-through">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a href="https://pay.cakto.com.br/tky2x9d" target="_blank" rel="noopener noreferrer" className="btn-tech text-base px-6 py-4 w-full justify-center">
              QUERO O CURSO GRAVADO
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Card 2 — Mentoria (destacado) */}
          <div className={`rounded-2xl border-2 border-brand-accent/40 bg-brand-dark/90 p-8 flex flex-col shadow-neon relative reveal neon-border ${isVisible ? "visible" : ""} stagger-2`}>
            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-brand-accent text-xs font-bold text-background uppercase tracking-wider">
                <Star className="w-3.5 h-3.5" />
                Recomendado
              </span>
            </div>

            <div className="text-center mb-6 mt-2">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="font-tech font-bold text-xl mb-1">Mentoria Completa</h3>
              <p className="text-sm text-muted-foreground">Curso + acompanhamento ao vivo</p>
            </div>

            {/* Preço placeholder */}
            <div className="text-center mb-6">
              <p className="text-muted-foreground text-sm line-through mb-1">De R$ 997,00</p>
              <p className="font-tech text-4xl font-bold neon-text leading-none">12x R$ 49,90</p>
              <p className="text-muted-foreground text-xs mt-1">ou R$ 497,90 à vista no Pix</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-1">
              {mentoriaFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a href="https://pay.cakto.com.br/3dc2ayt" target="_blank" rel="noopener noreferrer" className="btn-tech text-base px-6 py-4 w-full justify-center animate-pulse-glow">
              QUERO A MENTORIA COMPLETA
              <ArrowRight className="w-5 h-5 animate-bounce" />
            </a>
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
