import { useScrollReveal } from "@/hooks/useScrollReveal";

const StudentVideo = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-12 section-alt tech-border-bottom relative z-10 -mt-10 pt-16">
      <div className="section-container">
        <div className="text-center mb-8">
          <p className="text-brand-accent font-sans text-sm uppercase tracking-widest mb-2 font-semibold">
            Prova Social Inquestionável
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Aluno faz mais de <span className="neon-text">R$ 50.000,00</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`max-w-[340px] mx-auto glass-card p-2 border-brand-accent/30 shadow-[0_0_40px_hsl(var(--brand-accent)/0.15)] reveal-scale ${
            isVisible ? "visible" : ""
          }`}
        >
          <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-black/50">
            <iframe
              src="https://www.youtube.com/embed/V9i3ln_MNsI?rel=0"
              title="Aluno faturou mais de R$ 50 mil"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentVideo;
