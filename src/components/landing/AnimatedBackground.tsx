import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* 1. Fundo escuro real */}
      <div className="absolute inset-0 bg-brand-dark" />
      
      {/* 2. Orbs brilhantes baseados em Radial Gradients nativos (0% Lag na GPU) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full opacity-30 animate-blob" style={{ background: 'radial-gradient(circle, hsl(var(--brand-accent)) 0%, transparent 60%)' }} />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full opacity-20 animate-blob animation-delay-2000" style={{ background: 'radial-gradient(circle, hsl(var(--brand-cta)) 0%, transparent 60%)' }} />
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full opacity-20 animate-blob animation-delay-4000" style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 60%)' }} />

      {/* 3. Chuva de Estrelas / Partículas (Starfield CSS) */}
      <div className="absolute inset-0 bg-stars animate-stardrift opacity-40" />

      {/* 4. Grade Cyberpunk Em Movimento Perpétuo (Perspective Grid) */}
      <div className="absolute bottom-0 left-[-50%] w-[200%] h-[50vh] cyber-grid-perspective">
        <div className="absolute inset-0 cyber-grid-pattern animate-grid-scroll" />
      </div>
      
      {/* Luz de Borda Fina no fim da Grade para blend */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />
    </div>
  );
};

export default AnimatedBackground;
