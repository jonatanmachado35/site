"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const contactSection = document.getElementById("contato");
      const contactTop = contactSection?.getBoundingClientRect().top ?? Infinity;

      // Mostra após rolar 300px e oculta quando o formulário está visível
      const nearContact = contactTop < windowHeight * 0.8;
      setVisible(scrollY > 300);
      setHidden(nearContact);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
        md:hidden fixed bottom-0 left-0 right-0 z-50
        transition-transform duration-300 ease-in-out
        ${visible && !hidden ? "translate-y-0" : "translate-y-full"}
      `}
    >
      {/* Fade gradient acima */}
      <div className="h-6 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none" />

      <div className="bg-[#050508] px-4 pb-6 pt-3 border-t border-white/[0.06]">
        <button
          onClick={() => scrollToSection("contato")}
          className="w-full flex items-center justify-center gap-2 bg-[hsl(172_85%_45%)] hover:bg-[hsl(172_85%_50%)] active:scale-[0.98] text-[#050508] font-bold text-sm rounded-xl h-12 transition-all duration-200 shadow-[0_0_24px_hsl(172_85%_45%/0.3)]"
        >
          <Sparkles className="w-4 h-4" />
          Agendar diagnóstico gratuito
        </button>
        <p className="text-center text-[11px] text-white/25 mt-2">
          Sem compromisso • Resposta em até 24h
        </p>
      </div>
    </div>
  );
}
