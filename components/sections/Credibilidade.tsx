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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {segments.map((segment) => {
            const Icon = segment.icon;
            return (
              <div
                key={segment.name}
                className="rounded-2xl p-5 md:p-6 border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 text-white/70"
              >
                <div className="w-11 h-11 rounded-xl bg-[hsl(172_85%_45%/0.12)] border border-[hsl(172_85%_45%/0.25)] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[hsl(172_85%_45%)]" />
                </div>
                <span className="text-xs md:text-sm font-bold tracking-wide uppercase text-white">
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
