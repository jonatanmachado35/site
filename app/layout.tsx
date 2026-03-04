import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Agência IA First para Automação e Software Sob Medida | Think World",
    template: "%s | Think World",
  },
  description:
    "Automatize processos e reduza custos com IA aplicada ao seu negócio. Diagnóstico gratuito em até 24h.",
  keywords: [
    "agência IA",
    "desenvolvimento de software",
    "automação inteligente",
    "inteligência artificial",
    "Florianópolis",
  ],
  authors: [{ name: "Think World" }],
  creator: "Think World",
  metadataBase: new URL("https://thinkworld.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://thinkworld.com.br",
    siteName: "Think World",
    title: "Agência IA First para Automação e Software Sob Medida | Think World",
    description:
      "Automatize processos e reduza custos com IA aplicada ao seu negócio. Diagnóstico gratuito em até 24h.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Think World — Agência IA First",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agência IA First para Automação e Software Sob Medida | Think World",
    description:
      "Automatize processos e reduza custos com IA aplicada ao seu negócio. Diagnóstico gratuito em até 24h.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
