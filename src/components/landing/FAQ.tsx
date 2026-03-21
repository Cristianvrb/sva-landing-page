import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, MessageCircle } from "lucide-react";

const faqs = [
  { q: "O método funciona para iniciantes?", a: "Sim! O Método SVA foi criado do zero, passo a passo. Mesmo que você nunca tenha vendido nada online, vai conseguir implementar." },
  { q: "Preciso ter um produto digital?", a: "Não necessariamente. Você pode aplicar o método como afiliado, vendendo produtos de terceiros, ou criar seu próprio infoproduto." },
  { q: "Quanto preciso investir em tráfego?", a: "Recomendamos começar com R$ 500 a R$ 1.000 por mês. Conforme os resultados chegam, você reinveste e escala." },
  { q: "Quanto tempo para ver resultados?", a: "A maioria dos alunos começa a ter as primeiras vendas entre 15 a 30 dias. Resultados expressivos geralmente vêm entre 60 e 90 dias." },
  { q: "O acesso é vitalício?", a: "Sim, você terá acesso vitalício a todos os módulos e atualizações futuras do curso." },
  { q: "Tem suporte?", a: "Sim! Você terá suporte dedicado por 12 meses, além da comunidade VIP e mentorias em grupo mensais." },
  { q: "Funciona para qualquer nicho?", a: "Sim, o método já foi validado em mais de 50 nichos diferentes, de finanças a culinária, de saúde a relacionamentos." },
  { q: "Posso parcelar?", a: "Sim, em até 12x no cartão de crédito. Também aceitamos PIX e boleto à vista." },
  { q: "E se eu não conseguir resultado?", a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que o curso não é para você, devolvemos 100% do seu dinheiro — sem perguntas, sem burocracia. Além disso, nosso suporte está à disposição para te ajudar a implementar." },
];

const FAQ = () => {
  return (
    <section className="py-20 tech-border-top">
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="section-title">
            Perguntas <span className="neon-text">Frequentes</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card border-border px-6">
                <AccordionTrigger className="hover:no-underline font-tech text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA final */}
        <div className="text-center mt-12 space-y-4">
          <a href="#oferta" className="btn-tech text-lg px-12 py-5 animate-pulse-glow">
            QUERO MINHA VAGA AGORA
            <ArrowRight className="w-5 h-5" />
          </a>
          <div>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mt-4">
              <MessageCircle className="w-4 h-4" />
              Ainda tem dúvida? Fale com nosso time
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
