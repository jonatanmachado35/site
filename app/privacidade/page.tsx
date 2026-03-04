import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Think World — como coletamos, usamos e protegemos seus dados.",
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
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
            Política de Privacidade
          </h1>
          <p className="text-muted-foreground text-lg">
            Última atualização: {lastUpdate}
          </p>
        </div>

        {/* Conteúdo */}
        <div className="prose prose-neutral max-w-none space-y-10 text-foreground">

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Quem somos</h2>
            <p className="text-muted-foreground leading-relaxed">
              A <strong>Think World</strong> é uma agência especializada em Inteligência Artificial e desenvolvimento de software, com sede em Florianópolis, SC, Brasil. CNPJ: <strong>62.053.055/0001-17</strong>. Para fins desta Política, somos o <strong>Controlador</strong> dos dados pessoais coletados em nosso site <strong>thinkworld.com.br</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Dúvidas sobre privacidade: <a href="mailto:contato@thinkworld.com.br" className="text-primary hover:underline">contato@thinkworld.com.br</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Quais dados coletamos</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Coletamos apenas os dados necessários para prestar nossos serviços:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Dados de contato:</strong> nome, e-mail, telefone e empresa — fornecidos voluntariamente pelo formulário de contato.</li>
              <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas e tempo de visita — coletados automaticamente via cookies analíticos.</li>
              <li><strong>Mensagens:</strong> conteúdo das mensagens enviadas pelo formulário de contato.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Não coletamos dados sensíveis (saúde, biometria, orientação sexual, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Para que usamos seus dados</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Responder solicitações de contato e orçamentos.</li>
              <li>Enviar informações sobre nossos serviços (apenas se você solicitou).</li>
              <li>Melhorar a experiência do site com base em dados de navegação agregados.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              <strong>Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Base legal (LGPD)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Tratamos seus dados com base nas seguintes hipóteses legais previstas na Lei nº 13.709/2018 (LGPD):</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Consentimento</strong> (art. 7º, I) — para envio de comunicações de marketing.</li>
              <li><strong>Execução de contrato</strong> (art. 7º, V) — para atender solicitações e prestar serviços contratados.</li>
              <li><strong>Legítimo interesse</strong> (art. 7º, IX) — para melhoria do site e segurança da plataforma.</li>
              <li><strong>Cumprimento de obrigação legal</strong> (art. 7º, II) — quando exigido por lei.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Com quem compartilhamos</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Podemos compartilhar dados apenas com:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Provedores de serviço:</strong> ferramentas de e-mail, CRM e hospedagem que utilizamos para operar nosso negócio, sempre sob contrato de confidencialidade.</li>
              <li><strong>Autoridades competentes:</strong> quando exigido por lei ou ordem judicial.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Utilizamos cookies para:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site.</li>
              <li><strong>Cookies analíticos:</strong> para entender como os visitantes usam o site (dados agregados e anônimos).</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Você pode desativar cookies nas configurações do seu navegador, mas isso pode afetar funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Por quanto tempo guardamos</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Dados de contato:</strong> enquanto houver relação comercial ativa + 5 anos após encerramento.</li>
              <li><strong>Dados de navegação:</strong> até 24 meses.</li>
              <li><strong>Obrigações legais:</strong> pelo prazo exigido pela legislação aplicável.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Seus direitos (LGPD)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Como titular de dados, você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Confirmar se tratamos seus dados e acessá-los.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários.</li>
              <li>Revogar o consentimento a qualquer momento.</li>
              <li>Obter portabilidade dos seus dados.</li>
              <li>Apresentar reclamação à ANPD (Autoridade Nacional de Proteção de Dados).</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Para exercer seus direitos, entre em contato: <a href="mailto:contato@thinkworld.com.br" className="text-primary hover:underline">contato@thinkworld.com.br</a>. Responderemos em até 15 dias úteis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Segurança</h2>
            <p className="text-muted-foreground leading-relaxed">
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda, destruição ou divulgação indevida. O tráfego do site é protegido por HTTPS/TLS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Alterações nesta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos atualizar esta Política periodicamente. Quando houver mudanças relevantes, notificaremos por e-mail (se tivermos seu contato) ou por aviso no site. A data de atualização no topo desta página sempre refletirá a versão mais recente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Think World — Agência IA First<br />
              Florianópolis, SC, Brasil<br />
              E-mail: <a href="mailto:contato@thinkworld.com.br" className="text-primary hover:underline">contato@thinkworld.com.br</a><br />
              Instagram: <a href="https://instagram.com/thinkworldbr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@thinkworldbr</a>
            </p>
          </section>

        </div>

        {/* Footer da página */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Think World. Todos os direitos reservados.</p>
          <div className="flex gap-4 text-xs">
            <Link href="/privacidade" className="text-primary font-medium">Política de Privacidade</Link>
            <Link href="/termos" className="text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
