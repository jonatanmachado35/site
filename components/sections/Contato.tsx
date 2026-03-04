"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, Mail, Phone, MapPin, MessageCircle, ArrowRight, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { sendContactForm } from "@/services/api";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contato() {
  const router = useRouter();
  const sectionRef = useScrollReveal();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendContactForm(data);
      router.push("/obrigado");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Erro ao enviar mensagem. Tente novamente."
      );
    }
  };

  return (
    <section
      id="contato"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 bg-[hsl(250_60%_8%)] relative overflow-hidden"
    >
      {/* Absolute glow elements for "AI/Tech" atmosphere */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[hsl(172_85%_45%)]/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[hsl(250_60%_30%)]/30 rounded-full blur-[100px] translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[hsl(172_85%_45%)]/10 text-[hsl(172_85%_45%)] text-xs font-semibold uppercase tracking-wider border border-[hsl(172_85%_45%)]/20 mb-6">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Vamos entender seu desafio
          </span>
          <h2
            className="font-bold leading-[1.1] text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Vamos entender seu desafio
          </h2>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Preencha o formulário abaixo para receber um diagnóstico inicial.
          </p>
        </div>

        {/* Glass Panel */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Form — 2/3 */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Nome + Contato */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="nome" className="text-white/70 font-medium">
                      Nome <span className="text-[hsl(172_85%_45%)]">*</span>
                    </Label>
                    <Input
                      id="nome"
                      placeholder="Seu nome completo"
                      {...register("nome")}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[hsl(172_85%_45%)] focus-visible:border-[hsl(172_85%_45%)] rounded-xl h-14 px-4 ${
                        errors.nome ? "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500" : ""
                      }`}
                    />
                    {errors.nome && (
                      <p className="text-red-400 text-xs mt-1 font-medium">
                        {errors.nome.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="contato" className="text-white/70 font-medium">
                      WhatsApp ou Email <span className="text-[hsl(172_85%_45%)]">*</span>
                    </Label>
                    <Input
                      id="contato"
                      placeholder="WhatsApp ou email"
                      {...register("contato")}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[hsl(172_85%_45%)] focus-visible:border-[hsl(172_85%_45%)] rounded-xl h-14 px-4 ${
                        errors.contato ? "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500" : ""
                      }`}
                    />
                    {errors.contato && (
                      <p className="text-red-400 text-xs mt-1 font-medium">
                        {errors.contato.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Processo */}
                <div className="space-y-3">
                  <Label htmlFor="processo" className="text-white/70 font-medium">
                    Qual processo você quer automatizar?
                  </Label>
                  <Input
                    id="processo"
                    placeholder="Ex: atendimento, financeiro, suporte..."
                    {...register("processo")}
                    className={`bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[hsl(172_85%_45%)] focus-visible:border-[hsl(172_85%_45%)] rounded-xl h-14 px-4 ${
                      errors.processo ? "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500" : ""
                    }`}
                  />
                  {errors.processo && (
                    <p className="text-red-400 text-xs mt-1 font-medium">
                      {errors.processo.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[hsl(172_85%_45%)] hover:bg-[hsl(172_85%_55%)] text-[#050508] font-bold h-16 text-lg rounded-xl w-full shadow-[0_0_20px_hsl(172_85%_45%/0.2)] hover:shadow-[0_0_30px_hsl(172_85%_45%/0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        Enviando solicitação...
                      </>
                    ) : (
                      <>
                        Enviar e receber diagnóstico
                        <ArrowRight className="w-5 h-5 ml-3" />
                      </>
                    )}
                  </Button>
                  <p className="text-white/50 text-xs mt-3 text-center">
                    Retorno em menos de 24h
                  </p>
                </div>
              </form>
            </div>

            {/* Info — 1/3 */}
            <div className="flex flex-col gap-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">
                  Fale com Especialistas
                </h3>
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[hsl(172_85%_45%)]/50 group-hover:shadow-[0_0_20px_hsl(172_85%_45%/0.2)] transition-all duration-300">
                      <Mail className="w-6 h-6 text-[hsl(172_85%_45%)]" />
                    </div>
                    <div className="pt-1">
                      <p className="text-sm text-white/50 font-medium mb-1.5 uppercase tracking-wide">Email Direto</p>
                      <p className="text-base font-semibold text-white">
                        contato@thinkworld.com.br
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[hsl(172_85%_45%)]/50 group-hover:shadow-[0_0_20px_hsl(172_85%_45%/0.2)] transition-all duration-300">
                      <Phone className="w-6 h-6 text-[hsl(172_85%_45%)]" />
                    </div>
                    <div className="pt-1">
                      <p className="text-sm text-white/50 font-medium mb-1.5 uppercase tracking-wide">WhatsApp</p>
                      <p className="text-base font-semibold text-white">
                        +55 (51) 99133-4348
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[hsl(172_85%_45%)]/50 group-hover:shadow-[0_0_20px_hsl(172_85%_45%/0.2)] transition-all duration-300">
                      <MapPin className="w-6 h-6 text-[hsl(172_85%_45%)]" />
                    </div>
                    <div className="pt-1">
                      <p className="text-sm text-white/50 font-medium mb-1.5 uppercase tracking-wide">Localização</p>
                      <p className="text-base font-semibold text-white">
                        Florianópolis, SC
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Card */}
              <div className="mt-auto bg-gradient-to-br from-[hsl(250_60%_30%)]/20 to-[hsl(172_85%_45%)]/10 border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute -top-6 -right-6 p-4 opacity-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
                  <Bot className="w-32 h-32 text-[hsl(172_85%_45%)]" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[hsl(172_85%_45%)]/20 rounded-xl flex items-center justify-center mb-6 border border-[hsl(172_85%_45%)]/30">
                    <Bot className="w-6 h-6 text-[hsl(172_85%_45%)]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    Resposta rápida
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    Retorno em menos de <strong className="text-white">24h</strong>.
                  </p>
                  <a
                    href="https://wa.me/5551991334348"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full"
                  >
                    <Button className="w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 h-12 rounded-xl">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Falar no WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
