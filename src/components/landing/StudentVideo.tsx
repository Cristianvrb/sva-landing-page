import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const StudentVideo = () => {
  const { ref, isVisible } = useScrollReveal();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
          onClick={() => setIsVideoLoaded(true)}
        >
          <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-black/50 cursor-pointer group">
            {!isVideoLoaded ? (
              <>
                <img 
                  src="https://img.youtube.com/vi/V9i3ln_MNsI/hqdefault.jpg" 
                  alt="Aluno faturou mais de R$ 50 mil" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-brand-cta rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,100,50,0.3)] group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                  </div>
                </div>
              </>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/V9i3ln_MNsI?autoplay=1&rel=0"
                title="Aluno faturou mais de R$ 50 mil"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentVideo;
