import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10 text-center">
        {/* Badge real */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/5">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span className="text-sm text-brand-accent font-medium">4.9/5 de satisfação dos alunos</span>
          </div>
        </div>

        {/* HEADLINE PRINCIPAL */}
        <h1 className="font-tech text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight max-w-4xl mx-auto">
          Descubra como construir um <span className="neon-text">Sistema de Vendas Automáticas</span> e sair do zero aos R$ 10k faturados.
        </h1>
        
        {/* SUBHEADLINE */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          O método validado para atrair clientes e vender todos os dias usando tráfego pago e automações, sem depender de lançamentos.
        </p>

        {/* Video embed */}
        <div className="max-w-4xl mx-auto glass-card p-2 mb-10 neon-border">
          <div className="relative aspect-video bg-brand-dark rounded overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/0oXf9pjQyRE?rel=0"
              title="Aula Gratuita SVA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="#oferta" className="btn-tech text-xl px-12 py-5 animate-pulse-glow">
            QUERO COMEÇAR NO AUTOMÁTICO HOJE
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground mb-10">
          <ShieldCheck className="w-4 h-4 inline text-brand-accent mr-1" />
          Acesso imediato após o pagamento · Garantia de 7 dias
        </p>
      </div>
    </section>
  );
};

export default Hero;
