"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceSheet, {
  type ServiceData,
} from "@/components/shared/ServiceSheet";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const heroServices: ServiceData[] = [
  {
    title: "Inteligência Artificial",
    description:
      "IA aplicada para automatizar atendimento, análise e decisões.",
    fullDescription:
      "IA aplicada para automatizar atendimento, análise e decisões. Criamos soluções que reduzem trabalho manual e aumentam eficiência sem complexidade.",
    features: [
      "Chatbots",
      "Análise preditiva",
      "NLP",
      "Recomendações",
    ],
    technologies: [
      "OpenAI GPT",
      "Python",
      "TensorFlow",
      "LangChain",
      "Pinecone",
      "FastAPI",
    ],
    badge: "MAIS SOLICITADO",
  },
  {
    title: "Sistemas Web & Mobile",
    description:
      "Sistemas estáveis e rápidos para sua operação não parar.",
    fullDescription:
      "Sistemas estáveis e rápidos para sua operação não parar. Portais, dashboards e apps internos com foco em eficiência do time.",
    features: [
      "Portais",
      "Dashboards",
      "Apps internos",
    ],
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
    ],
    badge: "MAIS SOLICITADO",
  },
];

export default function Servicos() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const sectionRef = useScrollReveal();

  const openSheet = (service: ServiceData) => {
    setSelectedService(service);
    setSheetOpen(true);
  };

  return (
    <section
      id="servicos"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 bg-transparent relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[hsl(172_85%_45%/0.03)] blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 relative z-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[hsl(172_85%_45%/0.1)] text-[hsl(172_85%_45%)] text-xs font-semibold uppercase tracking-wider border border-[hsl(172_85%_45%/0.2)] mb-4">
            Serviços
          </span>
          <h2
            className="font-black leading-[1.05] text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Serviços focados em resultado
          </h2>
        </div>

        {/* Hero Cards — 2 colunas */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {heroServices.map((service, i) => (
            <div
              key={service.title}
              className={`rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ${i === 0
                ? "bg-[hsl(250_60%_12%)] border border-[hsl(172_85%_45%/0.3)]"
                : "bg-gradient-to-br from-[hsl(172_85%_20%)] to-[hsl(250_60%_15%)] border border-transparent"
                }`}
            >
              {/* Glow circle de fundo */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[hsl(172_85%_45%/0.1)] blur-3xl pointer-events-none" />

              {/* Badge */}
              {service.badge && (
                <span className="inline-flex px-3 py-1 rounded-full bg-white/10 text-[hsl(172_85%_55%)] text-xs font-bold uppercase tracking-wider mb-4 border border-[hsl(172_85%_45%/0.3)]">
                  {service.badge}
                </span>
              )}

              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/75 leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <p className="text-xs text-white/70 mb-7">
                {service.features.slice(0, 4).join(" • ")}
              </p>

              <Button
                variant="outline"
                onClick={() => openSheet(service)}
                className="border-white/30 text-white hover:bg-white/15 hover:text-white bg-transparent hover:scale-105 active:scale-95 transition-all duration-200 font-semibold"
              >
                {service.title === "Inteligência Artificial"
                  ? "Quero automatizar com IA"
                  : "Quero melhorar meu sistema"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Grid Cards removidos conforme solicitado */}
      </div>

      <ServiceSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        service={selectedService}
      />
    </section>
  );
}
