import { ArrowRight } from "lucide-react";

interface ScrollCTAProps {
  text?: string;
  subtext?: string;
}

const ScrollCTA = ({
  text = "QUERO COMEÇAR AGORA",
  subtext = "Vagas limitadas — garanta a sua antes que acabe",
}: ScrollCTAProps) => {
  return (
    <div className="py-12 text-center">
      <a href="https://pay.cakto.com.br/tky2x9d" target="_blank" rel="noopener noreferrer" className="btn-tech text-lg px-12 py-5 animate-pulse-glow">
        {text}
        <ArrowRight className="w-5 h-5" />
      </a>
      <p className="text-sm text-muted-foreground mt-3">{subtext}</p>
    </div>
  );
};

export default ScrollCTA;
