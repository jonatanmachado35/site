"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "Quanto custa?",
    answer:
      "Projetos iniciais partem de R$ 4 mil. O valor final depende do escopo — automações simples ficam nessa faixa, sistemas mais complexos variam. No diagnóstico gratuito já conseguimos dar uma estimativa real para o seu caso.",
  },
  {
    question: "Quanto tempo leva?",
    answer:
      "Automações e integrações costumam sair em 2 a 4 semanas. Sistemas web e dashboards levam de 4 a 8 semanas. O diagnóstico já define um prazo concreto para o seu projeto.",
  },
  {
    question: "Preciso já ter dados organizados?",
    answer:
      "Não. Faz parte do nosso trabalho mapear, organizar e integrar os dados existentes. Você não precisa chegar com nada pronto — chegue com o problema.",
  },
  {
    question: "Isso substitui meu time?",
    answer:
      "Não. A automação elimina as tarefas repetitivas e operacionais, liberando seu time para focar no que realmente gera valor. Menos retrabalho, mais resultado.",
  },
  {
    question: "E se eu não gostar do resultado?",
    answer:
      "Trabalhamos em ciclos com validações constantes — você aprova cada etapa antes de avançar. Não entregamos tudo no final e esperamos um 'ok'. Se algo não estiver certo, ajustamos.",
  },
  {
    question: "Vocês dão suporte depois da entrega?",
    answer:
      "Sim. Todo projeto inclui um período de acompanhamento pós-entrega. Para clientes que querem suporte contínuo, temos planos de manutenção e evolução mensal.",
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
