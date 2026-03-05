import { HeartPulse, ShoppingCart, Building2, GraduationCap, Truck, Laptop } from "lucide-react";

export default function Credibilidade() {
  const segments = [
    { name: "SaaS & B2B", icon: Laptop },
    { name: "Saúde & Clínicas", icon: HeartPulse },
    { name: "E-commerce", icon: ShoppingCart },
    { name: "Imobiliário", icon: Building2 },
    { name: "Educação", icon: GraduationCap },
    { name: "Logística", icon: Truck },
  ];

  return (
    <section id="sobre" className="bg-transparent relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[hsl(172_85%_45%/0.04)] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10 border-t border-white/5">
        <p className="text-center text-white/40 text-xs font-mono tracking-[0.4em] uppercase mb-10">
          Resultados reais para operações reais
        </p>

        {/* Métricas reais */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-12 max-w-3xl mx-auto">
          {[
            { value: "70%", label: "menos retrabalho" },
            { value: "80%", label: "mais produtividade" },
            { value: "95%", label: "taxa de retenção" },
            { value: "30+", label: "projetos entregues" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1 py-6 px-4 bg-[#050508]"
            >
              <span className="text-2xl sm:text-3xl font-black text-[hsl(172_85%_50%)] leading-none">
                {stat.value}
              </span>
              <span className="text-[11px] text-white/40 font-medium text-center leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {segments.map((segment) => {
            const Icon = segment.icon;
            return (
              <div
                key={segment.name}
                className="inline-flex items-center gap-3 rounded-full px-4 py-2.5 border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white/80 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_hsl(172_85%_45%/0.12)] transition-all duration-300"
              >
                <span className="w-8 h-8 rounded-full bg-[hsl(172_85%_45%/0.12)] border border-[hsl(172_85%_45%/0.25)] flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[hsl(172_85%_45%)]" />
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-white">
                  {segment.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
