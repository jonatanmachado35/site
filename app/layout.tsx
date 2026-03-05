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
    "Porto Alegre",
    "agência de tecnologia Porto Alegre",
    "automação de processos para PME",
    "sistema personalizado para empresa",
    "chatbot IA para atendimento",
    "software sob medida",
    "consultoria em inteligência artificial",
    "automação com LangChain",
    "agência de inovação tecnológica",
    "integração de sistemas com IA",
    "redução de retrabalho com automação",
    "dashboard personalizado",
  ],
  authors: [{ name: "Think World" }],
  creator: "Think World",
  metadataBase: new URL("https://thinkworld.com.br"),
  alternates: {
    canonical: "https://thinkworld.com.br",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://thinkworld.com.br",
    siteName: "Think World",
    title: "Agência IA First para Automação e Software Sob Medida | Think World",
    description:
      "Automatize processos e reduza custos com IA aplicada ao seu negócio. Diagnóstico gratuito em até 24h.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agência IA First para Automação e Software Sob Medida | Think World",
    description:
      "Automatize processos e reduza custos com IA aplicada ao seu negócio. Diagnóstico gratuito em até 24h.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Think World",
  description:
    "Agência IA First especializada em automação de processos e desenvolvimento de software sob medida para PMEs.",
  url: "https://thinkworld.com.br",
  telephone: "+55-51-99447-2418",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto Alegre",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  areaServed: "BR",
  serviceType: [
    "Automação com Inteligência Artificial",
    "Desenvolvimento de Software Sob Medida",
    "Sistemas Web e Mobile",
    "Chatbots e NLP",
    "Dashboards e Portais Internos",
  ],
  sameAs: [],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
