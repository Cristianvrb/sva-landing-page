import { Trophy, Medal, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ranking = [
  { pos: 1, name: "Roberto S.", revenue: "R$ 843.000", icon: Trophy, color: "text-yellow-500" },
  { pos: 2, name: "Patrícia R.", revenue: "R$ 621.000", icon: Medal, color: "text-gray-300" },
  { pos: 3, name: "Carlos M.", revenue: "R$ 512.000", icon: Award, color: "text-amber-600" },
  { pos: 4, name: "Ana P.", revenue: "R$ 389.000", icon: null, color: "text-brand-accent" },
  { pos: 5, name: "Marcos V.", revenue: "R$ 287.000", icon: null, color: "text-brand-accent" },
  { pos: 6, name: "Juliana L.", revenue: "R$ 234.000", icon: null, color: "text-brand-accent" },
  { pos: 7, name: "Fernando A.", revenue: "R$ 198.000", icon: null, color: "text-brand-accent" },
  { pos: 8, name: "Camila D.", revenue: "R$ 167.000", icon: null, color: "text-brand-accent" },
];

const StudentRanking = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 tech-border-top section-alt">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="text-brand-accent font-sans text-sm uppercase tracking-widest mb-3">Hall da Fama</p>
          <h2 className="section-title">
            Ranking dos <span className="neon-text">Top Alunos</span>
          </h2>
        </div>

        <div ref={ref} className="max-w-2xl mx-auto">
          {ranking.map((r, i) => (
            <div
              key={r.pos}
              className={`glass-card p-4 mb-3 flex items-center gap-4 ${r.pos <= 3 ? "border-brand-accent/30" : ""} reveal ${isVisible ? "visible" : ""} stagger-${Math.min(i + 1, 8)}`}
            >
              <div className={`w-10 h-10 rounded flex items-center justify-center font-sans font-bold text-lg ${r.pos <= 3 ? "bg-brand-accent/10" : "bg-secondary"}`}>
                {r.icon ? <r.icon className={`w-5 h-5 ${r.color}`} /> : <span className="text-muted-foreground">#{r.pos}</span>}
              </div>
              <div className="flex-1">
                <p className="font-semibold">{r.name}</p>
              </div>
              <p className={`font-sans font-bold text-lg ${r.color}`}>{r.revenue}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentRanking;
