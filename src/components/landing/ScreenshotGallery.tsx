import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const screenshots = [
  { src: "/results/result-1.webp", name: "Higor", result: "R$ 801 em vendas num dia" },
  { src: "/results/result-2.webp", name: "Nicolas", result: "R$ 10.017 em 3 meses" },
  { src: "/results/result-3.webp", name: "Higor Torrez", result: "Indo pros R$ 10k" },
  { src: "/results/result-4.webp", name: "Módulo Dólar", result: "USD$ 8,93 automático" },
  { src: "/results/result-5.webp", name: "Aluno SVA", result: "Vendeu seguindo a aula" },
  { src: "/results/result-6.webp", name: "Aluno SVA", result: "Nova venda realizada!" },
  { src: "/results/result-7.webp", name: "Aluno SVA", result: "Comissão garantida" },
  { src: "/results/result-8.webp", name: "Aluno SVA", result: "Venda aprovada no cartão" },
  { src: "/results/result-9.webp", name: "Aluno SVA", result: "Pix recebido automático" },
  { src: "/results/result-10.webp", name: "Aluno SVA", result: "Mais vendas caindo" },
  { src: "/results/result-11.webp", name: "Aluno SVA", result: "Resultado da campanha" },
  { src: "/results/result-12.webp", name: "Aluno SVA", result: "Acordando com vendas" },
  { src: "/results/result-13.webp", name: "Aluno SVA", result: "Recorde batido hoje" },
  { src: "/results/result-14.webp", name: "Aluno SVA", result: "Vendas todos os dias" },
  { src: "/results/result-15.webp", name: "Aluno SVA", result: "Notificações não param" },
];

const ScreenshotGallery = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 tech-border-top section-alt">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-brand-cta font-tech text-sm uppercase tracking-widest mb-3">
            Resultados Reais
          </p>
          <h2 className="section-title">
            Faturamento <span className="neon-text">Comprovado</span> dos Alunos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Prints reais de alunos que aplicaram o Método SVA — sem edição, sem filtro.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto reveal-scale ${isVisible ? "visible" : ""}`}
        >
          {screenshots.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="overflow-hidden rounded-lg border-2 border-brand-accent/30 transition-all duration-300 group-hover:border-brand-accent/60 group-hover:shadow-[0_0_20px_hsl(var(--brand-accent)/0.3)]">
                <img
                  src={item.src}
                  alt={`Resultado de ${item.name} — ${item.result}`}
                  width="400"
                  height="800"
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 aspect-[1/2]"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 text-center">
                <p className="text-sm font-tech text-brand-accent">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-2 bg-background/95 border-brand-accent/30">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Print ampliado do resultado"
              className="w-full h-auto rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ScreenshotGallery;
