"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description:
      "Entendemos seu processo atual, dores e impacto financeiro.",
    duration: "Até 24h",
  },
  {
    number: "02",
    title: "Plano de automação",
    description:
      "Definimos o que será automatizado e o ganho esperado.",
    duration: "2–3 dias",
  },
  {
    number: "03",
    title: "Entrega e acompanhamento",
    description:
      "Implementamos, treinamos seu time e monitoramos resultados.",
    duration: "2–8 semanas",
  },
];

export default function Processo() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="processo"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 bg-transparent"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[hsl(172_85%_45%/0.1)] text-[hsl(172_85%_45%)] text-xs font-semibold uppercase tracking-wider border border-[hsl(172_85%_45%/0.2)] mb-4">
            Processo
          </span>
          <h2
            className="font-black leading-[1.05] text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
          >
            <span className="text-gradient-white">Simples de começar.</span>{" "}
            <span className="text-gradient-accent">Sério na entrega.</span>
          </h2>
        </div>

        {/* Grid: steps (esquerda) + card de impacto (direita) */}
        <div className="grid md:grid-cols-[1fr_340px] gap-12 items-start">
          {/* Steps — lista vertical com linha conectora lateral */}
          <div className="max-w-lg">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex gap-6 items-start glass-panel rounded-2xl p-6 mb-6`}
              >
                {/* Número círculo */}
                <div className="w-12 h-12 rounded-full bg-[hsl(172_85%_45%/0.1)] border border-[hsl(172_85%_45%/0.3)] flex items-center justify-center text-[hsl(172_85%_45%)] font-bold text-sm flex-shrink-0 relative z-10">
                  {step.number}
                </div>

                {/* Conteúdo */}
                <div className="pt-1.5 flex-1">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-bold text-xl text-white">
                      {step.title}
                    </h3>
                    <span className="flex-shrink-0 px-2.5 py-1 rounded-full bg-[hsl(172_85%_45%/0.1)] border border-[hsl(172_85%_45%/0.2)] text-[hsl(172_85%_55%)] text-[11px] font-mono font-semibold tracking-wide">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Card de impacto */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col items-center text-center justify-center">
            <p
              className="font-black text-[hsl(172_85%_45%)] leading-none mb-3"
              style={{ fontSize: "5rem" }}
            >
              95%
            </p>
            <p className="text-white/60 leading-relaxed text-base">
              dos clientes voltam
              <br />
              para novos projetos
            </p>

            {/* Linha decorativa */}
            <div className="w-12 h-px bg-[hsl(172_85%_45%/0.4)] my-6" />

            <p className="text-white/30 text-xs font-mono tracking-[0.2em] uppercase">
              Taxa de retenção
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
