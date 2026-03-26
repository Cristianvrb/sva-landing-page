import { Quote, Youtube, Instagram, Video, Users, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Author = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 tech-border-top">
      <div className="section-container">
        <p className="text-center text-brand-accent font-tech text-sm uppercase tracking-widest mb-2">Conheça seu mentor</p>
        <h2 className="section-title mb-12">Quem vai te guiar nessa jornada</h2>

        <div ref={ref} className={`glass-card p-8 md:p-12 max-w-4xl mx-auto reveal ${isVisible ? "visible" : ""}`}>
          <div className="grid md:grid-cols-[224px_1fr] gap-8 items-start">
            {/* Foto do mentor */}
            <div className={`mx-auto md:mx-0 flex flex-col items-center gap-4 reveal ${isVisible ? "visible" : ""} stagger-1`}>
              <div className="w-56 h-56 rounded-lg overflow-hidden border-2 border-brand-accent/40 shadow-[0_0_30px_hsl(var(--brand-accent)/0.15)] hover:shadow-[0_0_40px_hsl(var(--brand-accent)/0.3)] hover:border-brand-accent/60 transition-all duration-500">
                <img
                  src="https://yt3.googleusercontent.com/tTOyzeA0vNIu6CdcuSi4l4VOtzaVgYFP0vSloTp442pwE9vm5pWGYdwczhqlBVzn2PLR5PvPSr4=s900-c-k-c0x00ffffff-no-rj"
                  alt="Cristian Lourenço — Especialista em Tráfego Pago e Automações"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="font-tech text-2xl font-bold neon-text">Cristian Lourenço</h3>
                <p className="text-muted-foreground text-sm mt-1">Especialista em Tráfego Pago e Automações</p>
                {/* Social links */}
                <div className="flex justify-center gap-3 mt-3">
                  <a
                    href="https://www.youtube.com/@CristianLourenço-TráfegoPagoEA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-colors text-xs font-medium"
                  >
                    <Youtube className="w-3.5 h-3.5" />
                    YouTube
                  </a>
                  <a
                    href="https://www.instagram.com/cristianltrafegopago/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:bg-pink-500/20 transition-colors text-xs font-medium"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* História */}
            <div className={`space-y-4 reveal ${isVisible ? "visible" : ""} stagger-2`}>
              <p className="text-muted-foreground leading-relaxed">
                Eu comecei no digital sem estrutura, sem audiência e sem saber o que realmente funcionava. 
                Testei de tudo — afiliado, páginas, estratégias "da moda" — e por muito tempo só perdi 
                dinheiro tentando fazer dar certo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A virada aconteceu quando eu entendi como construir um sistema de vendas automáticas usando 
                tráfego pago e automações. Em vez de depender de lançamentos ou sorte, comecei a gerar vendas todos 
                os dias com previsibilidade — usando Facebook Ads, Google Ads e automações de WhatsApp.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoje compartilho tudo o que aprendi no meu canal e nos meus treinamentos. 
                Meu objetivo é simples: te mostrar um caminho direto pra sair do zero e construir um 
                sistema que realmente vende no automático.
              </p>
              <p className="text-muted-foreground leading-relaxed font-semibold">
                Já ajudei alunos a saírem do zero, fazerem suas primeiras vendas automáticas e construírem um faturamento consistente.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded bg-brand-accent/10 border border-brand-accent/20">
                  <Video className="w-4 h-4 text-brand-accent" />
                  <span className="text-sm font-medium">115+ vídeos publicados</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded bg-brand-accent/10 border border-brand-accent/20">
                  <Users className="w-4 h-4 text-brand-accent" />
                  <span className="text-sm font-medium">Comunidade ativa de alunos</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded bg-yellow-500/10 border border-yellow-500/20">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">Resultados comprovados em prints</span>
                </div>
              </div>
            </div>
          </div>

          {/* Citação */}
          <blockquote className={`mt-10 border-l-4 border-brand-accent pl-6 py-4 bg-brand-accent/5 rounded-r-lg reveal ${isVisible ? "visible" : ""} stagger-3`}>
            <Quote className="w-6 h-6 text-brand-accent mb-2 opacity-60" />
            <p className="text-lg italic text-foreground leading-relaxed">
              "Meu trabalho não é só ensinar… é fazer você continuar até dar certo — mesmo quando parece que não vai."
            </p>
            <cite className="block mt-3 text-sm text-muted-foreground not-italic font-tech">
              — Cristian Lourenço
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Author;
