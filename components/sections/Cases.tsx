"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Lock } from "lucide-react";

const cases = [
  {
    tag: "Automação com IA",
    fullTitle: "Agente de Atendimento no WhatsApp",
    description:
      "Desenvolvemos um agente de IA integrado ao WhatsApp para automatizar o agendamento de consultas, enviar notificações de confirmação e lembretes antes do atendimento, além de mensagens de pós-atendimento — tudo de forma autônoma, sem intervenção humana.",
    details: [
      "Agendamento automático via conversa no WhatsApp",
      "Notificações de confirmação e lembretes",
      "Mensagens automáticas de pós-atendimento",
      "Integração com agenda e sistema do cliente",
    ],
    resultNumber: "80%",
    resultLabel: "das consultas agendadas sem intervenção humana",
    isReal: true,
  },
  {
    tag: "Desenvolvimento Web",
    fullTitle: "Case em breve",
    description: "Estamos preparando os detalhes deste case. Em breve disponível.",
    details: [],
    resultNumber: "—",
    resultLabel: "",
    isReal: false,
  },
  {
    tag: "Desenvolvimento Web",
    fullTitle: "Case em breve",
    description: "Estamos preparando os detalhes deste case. Em breve disponível.",
    details: [],
    resultNumber: "—",
    resultLabel: "",
    isReal: false,
  },
];

export default function Cases() {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-4">
            Cases
          </span>
          <h2
            className="font-black leading-[1.05] text-gradient-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
          >
            Resultados reais, clientes reais
          </h2>
        </div>

        {/* Lista */}
        <div>
          {cases.map((c, i) =>
            c.isReal ? (
              // Case real — layout completo
              <div
                key={i}
                className="grid md:grid-cols-[1fr_2fr_1fr] gap-6 md:gap-10 items-center border border-white/10 bg-white/5 py-10 mb-6 px-8 hover:bg-white/[0.03] rounded-2xl transition-colors glass-panel"
              >
                {/* Col 1 — tag + título */}
                <div>
                  <span className="inline-flex px-3 py-1 rounded-full bg-[hsl(172_85%_45%/0.1)] text-[hsl(172_85%_45%)] text-xs font-semibold mb-3">
                    {c.tag}
                  </span>
                  <h3 className="font-bold text-xl text-white leading-tight">
                    {c.fullTitle}
                  </h3>
                </div>

                {/* Col 2 — descrição + detalhes */}
                <div>
                  <p className="text-white/60 leading-relaxed mb-3 text-sm">
                    {c.description}
                  </p>
                  <ul className="flex flex-col gap-1">
                    {c.details.map((d) => (
                      <li
                        key={d}
                        className="text-xs text-white/50 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-[hsl(172_85%_45%)] flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 3 — resultado */}
                <div className="flex flex-col items-start md:items-end">
                  <p
                    className="font-black text-[hsl(172_85%_45%)] leading-none"
                    style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
                  >
                    {c.resultNumber}
                  </p>
                  <p className="text-white/50 text-sm mt-1 md:text-right leading-snug max-w-[160px]">
                    {c.resultLabel}
                  </p>
                </div>
              </div>
            ) : (
              // Case "em breve" — visual diferenciado
              <div
                key={i}
                className="grid md:grid-cols-[1fr_2fr_1fr] gap-6 md:gap-10 items-center border border-white/10 bg-white/5 py-10 mb-6 px-8 rounded-2xl opacity-50 glass-panel"
              >
                <div>
                  <span className="inline-flex px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs font-semibold mb-3">
                    {c.tag}
                  </span>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-white/50" />
                    <h3 className="font-bold text-lg text-white/50 leading-tight">
                      {c.fullTitle}
                    </h3>
                  </div>
                </div>
                <p className="text-white/40 text-sm italic">
                  {c.description}
                </p>
                <div className="flex flex-col items-start md:items-end">
                  <p className="font-black text-white/20 text-5xl leading-none">
                    {c.resultNumber}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
