"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    sector: "Clínica de odontologia",
    title: "Atendimento automatizado e menos retrabalho",
    description:
      "Simplificamos o fluxo de atendimento e eliminamos tarefas repetitivas de busca, confirmação e reagendamento. A equipe passou a focar no paciente com muito mais eficiência no dia a dia.",
    results: [
      "Redução do trabalho manual",
      "Aumento de produtividade em 80%",
    ],
    tag: "Saúde",
  },
  {
    sector: "Aluguel de casas por temporada",
    title: "Gestão de locação clara e integrada",
    description:
      "Unificamos o processo de locação em um fluxo simples e descentralizado, dando mais visibilidade a todas as etapas. A gestão ficou clara para proprietários e operadores.",
    results: [
      "Processo unificado e mais simples",
      "Maior transparência dos lucros para todos os envolvidos",
    ],
    tag: "Imobiliário",
  },
  {
    sector: "Controle financeiro",
    title: "Portal + assistente no WhatsApp",
    description:
      "Criamos um portal com informações e gráficos centralizados e integrados a um assistente conversacional via WhatsApp. Assim, o registro de gastos ficou rápido e acessível.",
    results: [
      "Visualização clara de indicadores financeiros",
      "Registro de despesas direto pelo WhatsApp com IA",
    ],
    tag: "Finanças",
  },
  {
    sector: "Clínica veterinária",
    title: "Triagem com apoio de IA",
    description:
      "Implementamos um assistente de IA que interpreta exames e cruza dados com histórico de consultas para apoiar o pré‑diagnóstico. A triagem ficou mais ágil e consistente.",
    results: [
      "Pré‑diagnóstico apoiado por IA",
      "Integração entre exames e histórico clínico",
    ],
    tag: "Saúde Animal",
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

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
          {/* Mobile — carrossel */}
          <div className="md:hidden -mx-4 px-4">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {cases.map((c) => (
                <div
                  key={c.title}
                  className="min-w-[85%] snap-center border border-white/10 bg-white/5 p-6 rounded-2xl glass-panel hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[hsl(172_85%_45%/0.1)] text-[hsl(172_85%_45%)] text-xs font-semibold uppercase tracking-wider border border-[hsl(172_85%_45%/0.2)]">
                      {c.sector}
                    </span>
                    <span className="text-xs text-white/60 font-semibold uppercase tracking-wider">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-white leading-tight mb-3">
                    {c.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm mb-4">
                    {c.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {c.results.map((d) => (
                      <li
                        key={d}
                        className="text-xs text-white/60 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 mt-1 rounded-full bg-[hsl(172_85%_45%)] flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop — grid 2x2 */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {cases.map((c) => (
              <div
                key={c.title}
                className="border border-white/10 bg-white/5 p-8 rounded-2xl glass-panel hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[hsl(172_85%_45%/0.1)] text-[hsl(172_85%_45%)] text-xs font-semibold uppercase tracking-wider border border-[hsl(172_85%_45%/0.2)]">
                    {c.sector}
                  </span>
                  <span className="text-xs text-white/60 font-semibold uppercase tracking-wider">
                    {c.tag}
                  </span>
                </div>
                <h3 className="font-bold text-2xl text-white leading-tight mb-3">
                  {c.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm mb-5">
                  {c.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {c.results.map((d) => (
                    <li
                      key={d}
                      className="text-sm text-white/60 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[hsl(172_85%_45%)] flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Button
            size="lg"
            onClick={() => scrollToSection("contato")}
            className="bg-[hsl(172_85%_45%)] hover:bg-[hsl(172_85%_40%)] text-[hsl(240_15%_9%)] font-bold text-base sm:text-lg py-5 px-10 h-auto hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_40px_hsl(172_85%_45%/0.35)]"
          >
            Agendar diagnóstico gratuito
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Nota discreta */}
        <p className="text-center text-white/40 text-xs mt-6 italic">
          Casos reais. Identidades preservadas por confidencialidade.
        </p>
      </div>
    </section>
  );
}
