"use client";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Zap } from "lucide-react";

export interface ServiceData {
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  badge?: string;
}

interface ServiceSheetProps {
  open: boolean;
  onClose: () => void;
  service: ServiceData | null;
}

export default function ServiceSheet({
  open,
  onClose,
  service,
}: ServiceSheetProps) {
  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById("contato");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  if (!service) return null;

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full sm:w-[500px] sm:max-w-[500px] overflow-y-auto border-l border-white/[0.06] bg-[#07070d] p-0 flex flex-col"
      >
        <SheetTitle className="sr-only">Detalhes do serviço</SheetTitle>
        {/* Accent top bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[hsl(172_85%_45%)] to-transparent flex-shrink-0" />

        {/* Header */}
        <div className="relative px-7 pt-8 pb-6 flex-shrink-0">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-48 bg-[hsl(172_85%_45%/0.06)] blur-[80px] pointer-events-none rounded-full" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-white/50 hover:text-white transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Badge */}
          {service.badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(172_85%_45%/0.12)] border border-[hsl(172_85%_45%/0.25)] mb-5">
              <Zap className="w-3 h-3 text-[hsl(172_85%_55%)]" />
              <span className="text-[hsl(172_85%_55%)] text-[10px] font-bold uppercase tracking-widest">
                {service.badge}
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className="text-2xl font-black text-white leading-tight mb-3">
            {service.title}
          </h2>

          {/* Description */}
          <p className="text-white/60 leading-relaxed text-sm">
            {service.fullDescription}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent flex-shrink-0" />

        {/* Body */}
        <div className="px-7 py-6 flex flex-col gap-7 flex-1">

          {/* Features */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 mb-4">
              O que inclui
            </p>
            <ul className="flex flex-col gap-1">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] hover:border-[hsl(172_85%_45%/0.2)] transition-all duration-200 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(172_85%_45%)] flex-shrink-0 group-hover:shadow-[0_0_6px_hsl(172_85%_45%)] transition-all duration-200" />
                  <span className="text-sm text-white/75 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 mb-4">
              Tecnologias
            </p>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-white/50 hover:text-white/80 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-7 py-6 flex-shrink-0 border-t border-white/[0.06] bg-[#050508]">
          <Button
            onClick={scrollToContact}
            className="w-full bg-[hsl(172_85%_45%)] hover:bg-[hsl(172_85%_50%)] text-[#07070d] font-bold text-sm tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_24px_hsl(172_85%_45%/0.25)] hover:shadow-[0_0_32px_hsl(172_85%_45%/0.4)] rounded-xl h-12"
            size="lg"
          >
            Falar sobre esse serviço
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="text-center text-[11px] text-white/25 mt-3">
            Resposta em até 24h • Sem compromisso
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
