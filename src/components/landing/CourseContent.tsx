import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Play,
  Rocket,
  Target,
  MessageSquare,
  Bot,
  Globe,
  BarChart3,
  Layers,
  Zap,
  GraduationCap,
  ChevronDown,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

interface Lesson {
  title: string;
}

interface Module {
  id: number;
  title: string;
  icon: React.ElementType;
  color: string;
  lessons: Lesson[];
}

const modules: Module[] = [
  {
    id: 1,
    title: "Fundamentos do Método SVA",
    icon: Rocket,
    color: "text-green-400",
    lessons: [
      { title: "Comece Por Aqui — Visão Geral do Sistema" },
      { title: "Entendendo o Método SVA Completo" },
      { title: "Iniciando a Prática — Primeiro Setup" },
      { title: "Vendas: O Que Você Precisa Fazer" },
    ],
  },
  {
    id: 2,
    title: "Estrutura & Tráfego Pago",
    icon: Target,
    color: "text-blue-400",
    lessons: [
      { title: "Criando Estrutura do Zero" },
      { title: "Organizando Facebook Ads" },
      { title: "Criativo do Zero — Teoria" },
      { title: "Criativo na Prática — Mão na Massa" },
    ],
  },
  {
    id: 3,
    title: "Vendas via WhatsApp",
    icon: MessageSquare,
    color: "text-emerald-400",
    lessons: [
      { title: "Campanha Para WhatsApp" },
      { title: "Anúncio de Vendas Para o WhatsApp" },
      { title: "Bot Para WhatsApp 01" },
      { title: "Bot 02 — Automação Avançada" },
      { title: "Análise de Métricas — Campanha WhatsApp" },
    ],
  },
  {
    id: 4,
    title: "Automação com Inteligência Artificial",
    icon: Bot,
    color: "text-purple-400",
    lessons: [
      { title: "Agente I.A Pra Vender Muito" },
      { title: "Criando Site com I.A" },
      { title: "Recuperação de Vendas Automáticas" },
      { title: "Entrega e Oferta de Order Bump Automáticos" },
      { title: "Automações Complexas" },
      { title: "Criação de Vídeos com I.A" },
    ],
  },
  {
    id: 5,
    title: "Criação de Produto do Zero",
    icon: Layers,
    color: "text-orange-400",
    lessons: [
      { title: "Criando Produto do Zero — Aula 1" },
      { title: "Criando Produto do Zero — Aula 2" },
      { title: "Criando Produto do Zero — Aula 3" },
      { title: "Hospedando Sua LP" },
      { title: "Criação de Infoproduto Rápido" },
      { title: "Modelagem Rápida de Infoprodutos" },
      { title: "Criação de SaaS MVP" },
    ],
  },
  {
    id: 6,
    title: "Escala & Otimização",
    icon: BarChart3,
    color: "text-cyan-400",
    lessons: [
      { title: "Levantando Caixa — Primeiros Resultados" },
      { title: "Rastreamento Avançado" },
      { title: "Criação de Contas Infinitas" },
      { title: "Pré Escala — Preparando Tudo" },
      { title: "Cenários Que Você Pode Estar Passando" },
    ],
  },
  {
    id: 7,
    title: "Vendas no Mundo Todo",
    icon: Globe,
    color: "text-amber-400",
    lessons: [
      { title: "Vendendo em Dólar — Mercado Internacional" },
      { title: "Estrutura Global de Vendas Automáticas" },
    ],
  },
  {
    id: 8,
    title: "Mentorias Semanais ao Vivo",
    icon: GraduationCap,
    color: "text-pink-400",
    lessons: [
      { title: "Mentoria — Revisão + Tira Dúvidas" },
      { title: "Tira Dúvidas ao Vivo (Recorrente)" },
      { title: "Análise de Resultados em Grupo" },
    ],
  },
];

const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);

const CourseContent = () => {
  const { ref, isVisible } = useScrollReveal();
  const [openModule, setOpenModule] = useState<number | null>(1);

  const toggle = (id: number) =>
    setOpenModule((prev) => (prev === id ? null : id));

  return (
    <section className="py-20 tech-border-top">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-accent font-sans text-sm uppercase tracking-widest mb-3 flex justify-center items-center gap-2">
            <Play className="w-4 h-4" />
            Conteúdo Completo
          </p>
          <h2 className="section-title">
            Tudo Que Você <span className="neon-text">Recebe Hoje</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            <span className="text-foreground font-bold">{modules.length} módulos</span> e{" "}
            <span className="text-foreground font-bold">{totalLessons}+ aulas práticas</span> — do
            zero à escala com automação e I.A.
          </p>
        </div>

        {/* Module Accordion */}
        <div ref={ref} className="max-w-3xl mx-auto space-y-3">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            const isOpen = openModule === mod.id;

            return (
              <div
                key={mod.id}
                className={`glass-card overflow-hidden border transition-all duration-300 ${
                  isOpen
                    ? "border-brand-accent/40 shadow-[0_0_20px_hsl(var(--brand-accent)/0.15)]"
                    : "border-border hover:border-brand-accent/20"
                } reveal ${isVisible ? "visible" : ""} stagger-${Math.min(i + 1, 8)}`}
              >
                {/* Module Header */}
                <button
                  onClick={() => toggle(mod.id)}
                  className="w-full flex items-center gap-4 p-4 sm:p-5 text-left"
                >
                  <div
                    className={`w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center ${
                      isOpen ? "bg-brand-accent/15" : "bg-secondary"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${mod.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-sans text-muted-foreground uppercase tracking-wider">
                      Módulo {mod.id}
                    </p>
                    <p className="font-bold text-foreground truncate">{mod.title}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs font-sans text-muted-foreground hidden sm:inline">
                      {mod.lessons.length} aulas
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Lessons */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 space-y-2 border-t border-border/50 mt-0 pt-3">
                    {mod.lessons.map((lesson, li) => (
                      <div
                        key={li}
                        className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-secondary/50 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                        <span className="text-sm text-foreground/90">{lesson.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA hint */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground glass-card px-5 py-3">
            <Lock className="w-4 h-4 text-brand-accent" />
            <span>
              Acesso <span className="text-foreground font-semibold">vitalício</span> a todos os
              módulos + atualizações futuras
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
