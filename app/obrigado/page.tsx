import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Mensagem Recebida",
  description: "Sua mensagem foi recebida. Em breve um especialista entrará em contato.",
  robots: { index: false, follow: false },
};

export default function Obrigado() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-[hsl(172_85%_45%/0.1)] flex items-center justify-center">
            <CheckCircle2
              className="text-[hsl(172_85%_45%)]"
              style={{ width: 64, height: 64 }}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Heading */}
        <h1
          className="font-black text-foreground mb-4 leading-[1.05]"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          Mensagem recebida!
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground leading-relaxed mb-10">
          Em breve um especialista entrará em contato.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[hsl(172_85%_45%)] hover:bg-[hsl(172_85%_40%)] text-[hsl(240_15%_9%)] font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Link href="/#servicos">
              Ver nossos serviços →
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Link href="/">Voltar ao início</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
