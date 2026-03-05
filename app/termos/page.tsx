import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso do site da Think World.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://thinkworld.com.br/termos" },
};

export default function TermosPage() {
  const lastUpdate = "26 de fevereiro de 2026";

  return (
    <main className="min-h-screen bg-background">
      {/* Header de navegação */}
      <div className="border-b border-border/40 bg-background/95 backdrop-blur sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </Link>
          <span className="text-xs text-muted-foreground font-mono">Atualizado em {lastUpdate}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Título */}
        <div className="mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-4">
            Legal
          </span>
          <h1 className="font-black text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Termos de Uso
          </h1>
          <p className="text-muted-foreground text-lg">
            Última atualização: {lastUpdate}
          </p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-10 text-foreground">

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao acessar e utilizar o site <strong>thinkworld.com.br</strong>, você concorda com estes Termos de Uso. Se não concordar com alguma das condições, pedimos que não utilize o site. O uso continuado do site após eventuais alterações nos Termos implica aceitação das mudanças.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Sobre a Think World</h2>
            <p className="text-muted-foreground leading-relaxed">
              A <strong>Think World</strong> é uma agência especializada em Inteligência Artificial e desenvolvimento de software com sede em Porto Alegre, RS, Brasil. Este site é um canal de apresentação institucional e captação de clientes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso do site</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Ao utilizar este site, você concorda em:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Fornecer informações verdadeiras, precisas e completas no formulário de contato.</li>
              <li>Não utilizar o site para fins ilegais, fraudulentos ou que causem danos à Think World ou a terceiros.</li>
              <li>Não tentar acessar áreas restritas ou comprometer a segurança do site.</li>
              <li>Não reproduzir, distribuir ou criar trabalhos derivados do conteúdo do site sem autorização prévia por escrito.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Propriedade intelectual</h2>
            <p className="text-muted-foreground leading-relaxed">
              Todo o conteúdo deste site — incluindo textos, imagens, logotipos, design, código-fonte e identidade visual — é de propriedade exclusiva da Think World ou de seus licenciantes, protegido pelas leis de direito autoral e propriedade intelectual brasileiras. É vedada qualquer reprodução sem autorização expressa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Formulário de contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              O formulário de contato destina-se exclusivamente a solicitações legítimas de informações e orçamentos. A Think World reserva-se o direito de não responder a mensagens de caráter publicitário, spam ou que violem estes Termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Isenção de garantias</h2>
            <p className="text-muted-foreground leading-relaxed">
              O site é fornecido "como está", sem garantias expressas ou implícitas. A Think World não garante que o site estará disponível ininterruptamente, livre de erros ou vírus. Nos reservamos o direito de modificar, suspender ou encerrar o site a qualquer momento sem aviso prévio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitação de responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Think World não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou impossibilidade de uso do site, incluindo perda de dados ou lucros cessantes. Nos casos em que a lei não permite exclusão de responsabilidade, nossa responsabilidade é limitada ao mínimo permitido pela lei aplicável.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Links externos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Este site pode conter links para sites de terceiros. A Think World não tem controle sobre o conteúdo ou práticas de privacidade desses sites e não se responsabiliza por eles. O acesso a links externos é feito por sua própria conta e risco.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Privacidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              O tratamento dos seus dados pessoais é regido pela nossa{" "}
              <Link href="/privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link>
              , que faz parte integrante destes Termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Lei aplicável e foro</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Para dirimir quaisquer controvérsias, fica eleito o foro da Comarca de Porto Alegre, RS, com exclusão de qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Alterações nos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos revisar estes Termos a qualquer momento. As alterações entram em vigor na data de publicação. Recomendamos que você revise esta página periodicamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Think World — Agência IA First<br />
              Porto Alegre, RS, Brasil<br />
              E-mail: <a href="mailto:contato@thinkworld.com.br" className="text-primary hover:underline">contato@thinkworld.com.br</a>
            </p>
          </section>

        </div>

        {/* Footer da página */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Think World. Todos os direitos reservados.</p>
          <div className="flex gap-4 text-xs">
            <Link href="/privacidade" className="text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</Link>
            <Link href="/termos" className="text-primary font-medium">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
