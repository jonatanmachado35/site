import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/shared/MobileCtaBar";
import Hero from "@/components/sections/Hero";
import Credibilidade from "@/components/sections/Credibilidade";
import PropostaValor from "@/components/sections/PropostaValor";
import Servicos from "@/components/sections/Servicos";
import Processo from "@/components/sections/Processo";
import Cases from "@/components/sections/Cases";
import CtaFinal from "@/components/sections/CtaFinal";
import Contato from "@/components/sections/Contato";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credibilidade />
        <PropostaValor />
        <Servicos />
        <Processo />
        <Cases />
        <Faq />
        <CtaFinal />
        <Contato />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
