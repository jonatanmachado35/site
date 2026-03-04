"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function CtaFinal() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "hsl(250 60% 8%)" }}
    >
      {/* Glow esquerdo — roxo */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "hsl(250 60% 18% / 0.5)",
          filter: "blur(100px)",
        }}
      />
      {/* Glow direito — teal */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "hsl(172 85% 45% / 0.15)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="font-black leading-[1.0] text-white mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Pronto para automatizar
          <br />
          <span className="text-gradient-accent">e ganhar eficiência?</span>
        </h2>
        <p className="text-white/60 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Fale com um especialista. A primeira conversa é gratuita e em até 24h
          você recebe um plano inicial.
        </p>

        <Button
          size="lg"
          onClick={() => scrollToSection("contato")}
          className="bg-[hsl(172_85%_45%)] hover:bg-[hsl(172_85%_40%)] text-[hsl(240_15%_9%)] font-bold text-lg py-5 px-10 h-auto hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_60px_hsl(172_85%_45%/0.5)]"
        >
          Agendar diagnóstico gratuito
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        {/* Microcopy */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-10 text-sm text-white/50">
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[hsl(172_85%_45%)]" />
            Sem burocracia
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[hsl(172_85%_45%)]" />
            Resposta rápida
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[hsl(172_85%_45%)]" />
            Gratuito
          </span>
        </div>
      </div>
    </section>
  );
}
