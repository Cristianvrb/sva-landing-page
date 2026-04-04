import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 rounded-lg bg-card border border-border text-sm text-foreground whitespace-nowrap shadow-lg animate-fade-in">
          Fale conosco 💬
          <div className="absolute top-full right-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-border" />
        </div>
      )}
      <a
        href="https://wa.me/5532984685677?text=Olá! Tenho interesse no Método SVA"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform pulse-ring"
        aria-label="Falar no WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
};

export default WhatsAppFloat;
