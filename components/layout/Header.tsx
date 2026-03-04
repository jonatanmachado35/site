"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => scrollToSection(href), 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
        ? "bg-[#050508]/80 backdrop-blur-md border-white/5"
        : "bg-transparent border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Think World Logo"
              width={160}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${scrolled
                  ? "text-white/70 hover:text-white"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-full font-semibold px-5 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Agendar diagnóstico gratuito
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${scrolled ? "text-foreground" : "text-white hover:bg-white/10"
                  }`}
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="Think World Logo"
                    width={140}
                    height={32}
                    className="h-7 w-auto object-contain brightness-0 invert"
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-3 py-3 text-base font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <Button
                    onClick={() => handleNavClick("contato")}
                    className="w-full bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-full font-semibold"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Agendar diagnóstico gratuito
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
