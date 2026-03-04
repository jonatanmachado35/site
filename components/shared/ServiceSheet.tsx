"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, X } from "lucide-react";

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
        className="w-full sm:w-[480px] overflow-y-auto"
      >
        <SheetHeader className="mb-6">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-bold">
              {service.title}
            </SheetTitle>
          </div>
          {service.badge && (
            <Badge className="w-fit bg-[hsl(172_85%_45%/0.1)] text-[hsl(172_85%_45%)] border-[hsl(172_85%_45%/0.3)] text-xs">
              {service.badge}
            </Badge>
          )}
          <SheetDescription className="text-base leading-relaxed text-muted-foreground mt-2">
            {service.description}
          </SheetDescription>
        </SheetHeader>

        {/* Full Description */}
        <div className="mb-6">
          <p className="text-foreground leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
            O que inclui
          </h4>
          <ul className="flex flex-col gap-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[hsl(172_85%_45%)] flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
            Tecnologias
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-border pt-6">
          <Button
            onClick={scrollToContact}
            className="w-full bg-[hsl(172_85%_45%)] hover:bg-[hsl(172_85%_40%)] text-[hsl(240_15%_9%)] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            size="lg"
          >
            Falar sobre esse serviço
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
