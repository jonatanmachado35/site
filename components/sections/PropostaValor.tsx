"use client";

import { Bot, Zap, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  {
    number: "01",
    icon: Bot,
    title: "Menos tarefas manuais e retrabalho",
    description:
      "Automatizamos rotinas para tirar o peso operacional do seu time.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Processos mais rápidos e previsíveis",
    description:
      "Fluxos padronizados deixam sua operação estável e eficiente.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Visibilidade com indicadores claros (ROI)",
    description:
      "Acompanhe o impacto com métricas simples e objetivas.",
  },
];

export default function PropostaValor() {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* H2 — sem badge */}
        <h2
          className="text-center font-black leading-[1.05] text-white mb-5"
          style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
        >
          IA First de verdade, com impacto mensurável
        </h2>

        {/* Subtitle */}
        <p className="text-center text-xl text-white/70 max-w-2xl mx-auto mb-16 leading-relaxed">
          Usamos IA para acelerar desenvolvimento, reduzir erros e gerar
          resultados que aparecem no dia a dia da sua operação.
        </p>

        {/* Grid 3 colunas */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full" />
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-panel rounded-2xl p-8 group hover:bg-white/[0.03] hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Número decorativo */}
                <p
                  className="font-black leading-none text-white/5 font-mono select-none mb-4 absolute -right-4 -top-4 pointer-events-none"
                  style={{ fontSize: "8rem" }}
                >
                  {item.number}
                </p>

                {/* Ícone */}
                <div className="w-10 h-10 rounded-xl bg-[hsl(172_85%_45%/0.12)] flex items-center justify-center mb-4 group-hover:bg-[hsl(172_85%_45%/0.2)] transition-colors relative z-10">
                  <Icon className="w-5 h-5 text-[hsl(172_85%_45%)]" />
                </div>

                <h3 className="font-bold text-xl text-white mb-3 relative z-10">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm relative z-10">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
