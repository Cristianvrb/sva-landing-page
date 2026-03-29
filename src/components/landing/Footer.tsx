import { ArrowRight, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 tech-border-top">
      <div className="section-container">
        <div className="text-center mb-10">
          <div className="w-16 h-16 mx-auto rounded-full bg-brand-cta/10 border border-brand-cta/30 flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-brand-cta" />
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold mb-4">
            A Decisão é <span className="text-brand-cta">Sua</span>
          </h2>
          <p className="text-muted-foreground mb-4 max-w-xl mx-auto text-lg">
            Ou você continua tentando sozinho… ou segue um sistema que já ajudou dezenas de alunos a saírem do zero e construírem vendas automáticas — todos os dias.
          </p>
          <p className="text-foreground font-semibold mb-2 max-w-xl mx-auto">
            Primeiro você chega nos R$10k.
          </p>
          <p className="text-foreground font-semibold mb-8 max-w-xl mx-auto text-brand-accent">
            Depois o sistema vende por você, todos os dias.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://pay.cakto.com.br/tky2x9d" target="_blank" rel="noopener noreferrer" className="btn-tech text-xl px-14 py-6 ">
              GARANTIR MINHA VAGA
              <ArrowRight className="w-6 h-6" />
            </a>
            <a href="https://pay.cakto.com.br/tky2x9d" target="_blank" rel="noopener noreferrer" className="btn-tech-green text-lg px-10 py-5">
              QUERO FATURAR NO AUTOMÁTICO
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Método SVA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
