import { useState, useEffect } from "react";
import { ArrowRight, Clock } from "lucide-react";

const StickyBar = () => {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState({ h: 23, m: 59, s: 59 });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-brand-dark/95 backdrop-blur-md border-b border-brand-accent/20 shadow-neon">
        <div className="section-container py-2.5 flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-brand-cta animate-pulse" />
            <span className="text-muted-foreground">Oferta expira em</span>
            <span className="font-tech font-bold text-brand-cta text-base">
              {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 mx-auto sm:mx-0">
            <span className="text-sm text-muted-foreground hidden md:inline">
              A partir de <span className="font-tech font-bold text-foreground">R$ 97,90</span>
            </span>
            <a href="#oferta" className="btn-tech text-sm px-6 py-2.5">
              COMEÇAR A VENDER AGORA <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
