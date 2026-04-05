import { Play, TrendingUp, ShieldCheck, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-aurora">
      <div className="section-container relative z-10 text-center">
        {/* Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/30 bg-brand-accent/5">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span className="text-sm text-brand-accent font-medium">Alunos com resultados reais — de R$ 800/dia a R$ 10k/mês</span>
          </div>
        </div>

        {/* HEADLINE PRINCIPAL */}
        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight max-w-4xl mx-auto text-white leading-[1.1]">
          O Sistema que Gera Vendas <span className="neon-text">Automáticas Todo Dia</span> — Sem Aparecer, Sem Lançamentos.
        </h1>
        
        {/* SUBHEADLINE */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          O método validado para atrair clientes e vender todos os dias usando tráfego pago e automações, sem depender de lançamentos.
        </p>

        {/* Video embed Lite Facade */}
        <div className="max-w-4xl mx-auto glass-card p-2 md:p-3 mb-10 shadow-2xl">
          <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden cursor-pointer group" onClick={() => setIsVideoLoaded(true)}>
            {!isVideoLoaded ? (
              <>
                <img 
                  src="https://img.youtube.com/vi/0oXf9pjQyRE/hqdefault.jpg" 
                  alt="Aula SVA Thumbnail" 
                  width="1280" height="720"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  loading="eager" decoding="sync" fetchPriority="high"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-brand-cta rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,100,50,0.3)] group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                  </div>
                </div>
              </>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/0oXf9pjQyRE?autoplay=1&rel=0"
                title="Aula Gratuita SVA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl"
              />
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="#oferta-container" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('oferta-container')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-tech"
          >
            VER PREÇO E GARANTIR MINHA VAGA
            <ArrowRight className="w-5 h-5 ml-2" />
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
