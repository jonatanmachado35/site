"use client";

import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NeuralGraph = dynamic(() => import("@/components/shared/NeuralGraph"), {
  ssr: false,
});

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent"
    >
      {/* Radial glow — right side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 72% 50%, hsl(172 85% 45% / 0.08) 0%, transparent 65%)",
        }}
      />
      {/* Radial glow — top left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 10% 20%, hsl(250 60% 30% / 0.25) 0%, transparent 60%)",
        }}
      />

      {/* Mobile NeuralGraph (behind text, subtle) */}
      <div className="absolute inset-0 md:hidden opacity-20 pointer-events-none">
        <NeuralGraph className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid md:grid-cols-[55%_45%] gap-12 items-center">
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-7 md:gap-9">

            {/* Eyebrow line */}
            <p className="text-[hsl(172_85%_45%)] text-sm font-mono tracking-[0.3em] uppercase">
              Think World — Agência IA First
            </p>

            {/* H1 */}
            <h1
              className="font-black leading-[1.0]"
              style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
            >
              <span className="text-gradient-white">
                Automatize processos e
                <br />
                melhore seus sistemas
              </span>
              <br />
              <span className="text-gradient-accent">com IA sob medida</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/70 text-xl leading-relaxed max-w-lg">
              Criamos automações e software personalizado para PMEs reduzirem
              trabalho manual e ganharem eficiência — sem precisar aumentar
              equipe.
            </p>

            {/* Single CTA */}
            <div>
              <Button
                onClick={() => scrollToSection("contato")}
                className="group relative bg-[hsl(172_85%_45%)] hover:bg-[hsl(172_85%_55%)] text-[#050508] font-bold text-lg py-4 px-8 h-auto rounded-full hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),_0_0_40px_hsl(172_85%_45%/0.35)]"
              >
                Agendar diagnóstico gratuito
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-white/50 text-sm">
              Resposta em até 24h • Sem compromisso
            </p>

            {/* Stats — horizontal com separadores */}
            <div className="flex items-center gap-6 pt-6 border-t border-[hsl(172_85%_45%/0.2)]">
              {[
                { value: "100+", label: "Projetos" },
                { value: "50+", label: "Clientes" },
                { value: "5+", label: "Anos" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  {i > 0 && (
                    <span className="text-white/20 text-lg select-none">|</span>
                  )}
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="font-black text-[hsl(172_85%_45%)] leading-none"
                      style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-white/50 text-xs tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN — NeuralGraph (desktop) ── */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full h-[520px] rounded-2xl overflow-hidden relative">
              {/* Border glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                style={{
                  boxShadow:
                    "inset 0 0 80px hsl(172 85% 45% / 0.07), 0 0 80px hsl(172 85% 45% / 0.12)",
                }}
              />
              <NeuralGraph className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #050508)",
        }}
      />
    </section>
  );
}
