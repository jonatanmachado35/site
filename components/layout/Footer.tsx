import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const serviceLinks = [
  "Inteligência Artificial",
  "Sistemas Web & Mobile",
  "Automações",
  "Mobile",
  "Nuvem",
];

const companyLinks = ["Sobre nós", "Cases", "Contato"];

export default function Footer() {
  return (
    <footer className="bg-[hsl(240_15%_9%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Col 1 — Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Think World Logo"
                width={160}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Agência IA First — Florianópolis, SC
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/60 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[hsl(172_85%_45%)]" />
                <span>contato@thinkworld.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[hsl(172_85%_45%)]" />
                <span>+55 (51) 99133-4348</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[hsl(172_85%_45%)]" />
                <span>Florianópolis, SC</span>
              </div>
            </div>
            <Link
              href="https://instagram.com/thinkworldbr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-[hsl(172_85%_45%)] transition-colors text-sm"
            >
              <Instagram className="w-5 h-5" />
              @thinkworldbr
            </Link>
          </div>

          {/* Col 2 — Serviços */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <span className="text-white/60 hover:text-white transition-colors text-sm cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Empresa */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((item) => (
                <li key={item}>
                  <span className="text-white/60 hover:text-white transition-colors text-sm cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/privacidade" className="text-white/60 hover:text-white transition-colors text-sm">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-white/60 hover:text-white transition-colors text-sm">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © 2026 Think World. Todos os direitos reservados.
          </p>
          <Link
            href="https://instagram.com/thinkworldbr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-[hsl(172_85%_45%)] transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
