"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "Quanto custa?",
    answer:
      "A partir de R$ 4 mil (varia por escopo).",
  },
  {
    question: "Quanto tempo leva?",
    answer:
      "Soluções iniciais podem sair em semanas, dependendo da complexidade.",
  },
  {
    question: "Preciso já ter dados organizados?",
    answer:
      "Não. Ajudamos a organizar e integrar os dados necessários.",
  },
  {
    question: "Isso substitui meu time?",
    answer:
      "Não. A automação libera o time para focar no que gera mais valor.",
  },
];

export default function Faq() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="faq"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 bg-transparent"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[hsl(172_85%_45%/0.1)] text-[hsl(172_85%_45%)] text-xs font-semibold uppercase tracking-wider border border-[hsl(172_85%_45%/0.2)] mb-4">
            FAQ
          </span>
          <h2
            className="font-black leading-[1.05] text-white"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
          >
            Dúvidas frequentes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="glass-panel rounded-2xl p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
