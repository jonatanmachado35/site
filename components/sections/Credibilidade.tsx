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
          Setores que já transformamos com IA
        </p>

        {/* Desktop: flex row */}
        <div className="hidden sm:flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {segments.map((segment) => {
            const Icon = segment.icon;
            return (
              <div
                key={segment.name}
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl backdrop-blur-md bg-white/[0.02] border border-white/5 text-white/50 hover:text-white hover:bg-white/[0.04] hover:border-[hsl(172_85%_45%/0.3)] transition-all duration-300 cursor-default select-none shadow-[0_0_15px_transparent] hover:shadow-[0_0_20px_hsl(172_85%_45%/0.05)] hover:-translate-y-0.5 group"
              >
                <Icon className="w-5 h-5 text-[hsl(172_85%_45%/0.6)] group-hover:text-[hsl(172_85%_45%)] transition-colors" />
                <span className="text-sm font-bold tracking-wide uppercase">{segment.name}</span>
              </div>
            );
          })}
        </div>

        {/* Mobile: grid 2 cols */}
        <div className="grid grid-cols-2 gap-4 sm:hidden">
          {segments.map((segment) => {
            const Icon = segment.icon;
            return (
              <div
                key={segment.name}
                className="flex flex-col items-center justify-center gap-3 px-4 py-5 rounded-xl backdrop-blur-sm bg-white/[0.02] border border-white/5 text-white/50 hover:text-white hover:border-[hsl(172_85%_45%/0.3)] hover:bg-white/[0.04] transition-all select-none group"
              >
                <Icon className="w-6 h-6 text-[hsl(172_85%_45%/0.6)] group-hover:text-[hsl(172_85%_45%)] transition-colors" />
                <span className="text-xs font-bold text-center tracking-wider uppercase">{segment.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
