"use client";

import { useState } from "react";
import { ArrowRight, Workflow, Cloud, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceSheet, {
  type ServiceData,
} from "@/components/shared/ServiceSheet";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const heroServices: ServiceData[] = [
  {
    title: "Inteligência Artificial",
    description:
      "Automatize processos e gere insights com IA personalizada para o seu negócio.",
    fullDescription:
      "Desenvolvemos soluções de inteligência artificial sob medida para o seu negócio. Desde chatbots inteligentes até sistemas de machine learning, entregamos IA que realmente funciona no mundo real e gera resultados mensuráveis.",
    features: [
      "Chatbots e assistentes virtuais com IA",
      "Machine Learning personalizado",
      "Análise preditiva de dados",
      "Processamento de linguagem natural (NLP)",
      "Integração com sistemas existentes",
      "Treinamento e fine-tuning de modelos",
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
      "Aplicações web e mobile personalizadas, rápidas e escaláveis.",
    fullDescription:
      "Criamos sistemas web e aplicativos mobile de alta performance, com design moderno e experiência de usuário excepcional. Nosso stack de última geração garante velocidade, escalabilidade e manutenibilidade.",
    features: [
      "Aplicações React / Next.js",
      "Apps iOS & Android nativos e React Native",
      "APIs RESTful e GraphQL",
      "Sistemas web empresariais",
      "Progressive Web Apps (PWA)",
      "UI/UX com foco em conversão",
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

const gridServices = [
  {
    order: "01",
    icon: Workflow,
    title: "Automações Inteligentes",
    description: "Elimine tarefas repetitivas com fluxos automatizados.",
    features: ["RPA", "n8n", "Integração APIs", "Automação de Marketing"],
    fullDescription:
      "Automatizamos processos empresariais completos usando as melhores ferramentas do mercado. Seus times ganham tempo para o que realmente importa.",
    technologies: ["n8n", "Make", "Zapier", "Python", "Node.js", "REST APIs"],
  },
  {
    order: "02",
    icon: Cloud,
    title: "Soluções em Nuvem",
    description: "Infraestrutura robusta e escalável nas principais clouds.",
    features: ["AWS", "Azure", "Google Cloud", "DevOps"],
    fullDescription:
      "Projetamos e gerenciamos infraestrutura em nuvem que cresce com o seu negócio. Segurança, performance e custo-benefício na medida certa.",
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
  },
  {
    order: "03",
    icon: Cpu,
    title: "Consultoria Tech",
    description: "Expertise técnica para decisões estratégicas.",
    features: ["Arquitetura", "Code Review", "Performance", "Segurança"],
    fullDescription:
      "Nossa equipe de especialistas auxilia na tomada de decisões técnicas estratégicas, revisão de código, arquitetura de sistemas e auditorias de segurança.",
    technologies: ["System Design", "OWASP", "Code Review", "Load Testing", "SLA"],
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
            Soluções completas em tecnologia
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
              <div className="flex flex-wrap gap-2 mb-7">
                {service.features.slice(0, 4).map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1 bg-[hsl(172_85%_45%/0.12)] rounded-full text-xs text-[hsl(172_85%_60%)] font-medium border border-[hsl(172_85%_45%/0.2)]"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                onClick={() => openSheet(service)}
                className="border-white/30 text-white hover:bg-white/15 hover:text-white bg-transparent hover:scale-105 active:scale-95 transition-all duration-200 font-semibold"
              >
                Quero esse serviço
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Grid Cards — 3 colunas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridServices.map((service) => {
            const Icon = service.icon;
            const serviceData: ServiceData = {
              title: service.title,
              description: service.description,
              fullDescription: service.fullDescription,
              features: service.features,
              technologies: service.technologies,
            };
            return (
              <div
                key={service.title}
                className="backdrop-blur-xl bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-[hsl(172_85%_45%/0.3)] hover:shadow-[0_0_30px_hsl(172_85%_45%/0.05)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                onClick={() => openSheet(serviceData)}
              >
                {/* Número de ordem decorativo */}
                <span
                  className="absolute top-4 right-4 font-black text-white/5 select-none pointer-events-none leading-none transition-colors group-hover:text-[hsl(172_85%_45%/0.1)]"
                  style={{ fontSize: "3rem" }}
                >
                  {service.order}
                </span>

                <div className="w-11 h-11 rounded-xl bg-[hsl(172_85%_45%/0.1)] border border-[hsl(172_85%_45%/0.2)] flex items-center justify-center mb-4 group-hover:bg-[hsl(172_85%_45%/0.2)] transition-colors relative z-10">
                  <Icon className="w-5 h-5 text-[hsl(172_85%_45%)]" />
                </div>
                <h3 className="font-semibold text-lg text-white mb-2 relative z-10">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4 relative z-10">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ServiceSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        service={selectedService}
      />
    </section>
  );
}
