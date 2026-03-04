# Briefing de Redesign — Think World Landing Page

> **Versão:** 1.2  
> **Data:** Fevereiro 2026  
> **Status:** ✅ Implementação Front-End Concluída  
> **Stack alvo:** Next.js 14+ (App Router) + Tailwind CSS + shadcn/ui  
> **Deploy:** Vercel  

---

## 1. Contexto e Diagnóstico

### O que existe hoje

- Landing page one-page em React + Vite (Lovable)
- Deploy via GitHub Pages → `thinkworld.com.br`
- 4 seções: Header, Hero, Services, Contact
- Design system com paleta roxo + teal

### Por que redesenhar

| Problema | Impacto |
|----------|---------|
| SPA pura (React/Vite) → HTML vazio para o Google | SEO inexistente |
| `<title>` com nome interno do Lovable ("pixel-ai-agency-spark") | Identidade de marca quebrada |
| Layout genérico de template — não comunica "IA First" | Baixa conversão, baixa credibilidade |
| Sem prova social (clientes, cases, depoimentos) | Visitante não converte |
| Botões sem ação ("Saiba Mais", "Agendar Consulta") | Funil quebrado |
| Sem footer → sem LGPD | Risco legal |
| `alert()` nativo no formulário | UX ruim |
| Formulário com 6 campos obrigatórios | Alta taxa de abandono |

### Por que Next.js

- **SSG (Static Site Generation):** HTML pré-renderizado → Google indexa corretamente
- **Metadata API:** OG tags, title, description no servidor → compartilhamento social funciona
- **Core Web Vitals:** LCP melhor → melhor ranking no Google
- **Vercel:** Deploy nativo, HTTPS automático, previews por PR
- **Escalabilidade:** Se quiser blog, páginas de serviço, cases no futuro → já está preparado

---

## 2. Posicionamento e Tom de Voz

### Quem é a Think World

- **Tipo:** Agência de tecnologia e IA
- **Posicionamento:** "IA First" — IA não é um serviço extra, é a forma de trabalhar
- **Diferencial:** Combinação de desenvolvimento de software personalizado + automações inteligentes com IA
- **Localização:** Florianópolis, SC — Brasil
- **Tamanho:** 100+ projetos, 50+ clientes, 5+ anos

### Público-alvo (Persona)

**Carlos — Diretor/Gestor de empresa em crescimento**
- Empresa de médio porte querendo escalar com tecnologia
- Tem dores com processos manuais e repetitivos
- Já ouviu falar de IA mas não sabe como aplicar no negócio dele
- Quer resultado, não tecnologia pela tecnologia
- Avalia fornecedores pela credibilidade e cases reais

**Sofia — Founder de startup**
- Precisa de um parceiro técnico, não de uma software house tradicional
- Quer velocidade de entrega e qualidade
- Valoriza comunicação clara e transparência

### Tom de Voz

```
✅ Direto, confiante, sem jargão desnecessário
✅ Foca em resultado para o negócio, não em tecnologia
✅ "Transformamos seu processo em vantagem competitiva"
✅ Profissional mas acessível — não robótico
❌ Não usar: "soluções inovadoras de ponta" (clichê)
❌ Não usar: termos técnicos sem explicação
```

---

## 3. Arquitetura da Informação

### Estrutura de Navegação

```
Header (fixo, sticky)
├── Logo (Think World)
├── Nav: Sobre | Serviços | Processo | Contato
└── CTA: "Falar com especialista" → ancora #contact

Página (one-page, scroll suave)
├── [1] Hero
├── [2] Credibilidade (logos ou stats com contexto)
├── [3] Proposta de Valor (O que fazemos — foco em IA)
├── [4] Serviços (cards com detalhes)
├── [5] Processo (Como trabalhamos — 3 steps)
├── [6] Cases / Resultados
├── [7] CTA Final (conversão)
└── Footer

Rotas
├── / → Landing page
├── /obrigado → Página de confirmação pós-formulário (sem modal)
├── /termos-de-uso → Página legal de Termos
├── /politica-de-privacidade → Página legal de Privacidade
└── * → 404
```

### Hierarquia de CTAs

```
CTA Primário:   "Falar com especialista" → ancora #contact
CTA Secundário: "Ver nossos serviços" → ancora #services
CTA Terciário:  "Saiba mais" nos cards → abre modal ou expande card
```

---

## 4. Seções — Especificação Detalhada

---

### [1] Header

**Comportamento:**
- Fixo no topo (sticky)
- Background transparente → blur + fundo semitransparente ao scrollar (threshold: 50px)
- Mobile: hamburguer menu com drawer lateral

**Conteúdo:**
```
[Logo ThinkWorld]          [Sobre] [Serviços] [Processo] [Contato]          [Falar com especialista →]
```

**Especificações visuais:**
- Altura: 64px (desktop) / 56px (mobile)
- Logo: imagem `/public/logo.png` + texto "Think World" ao lado
- Links: font-medium, 14px, cor foreground, hover → accent (teal)
- CTA button: variant accent, size sm, com ícone `MessageCircle` ou `ArrowRight`
- Border-bottom sutil ao scrollar

---

### [2] Hero

**Objetivo:** Comunicar em 5 segundos quem é a Think World e por que o visitante deve ficar.

**Headline principal:**
```
Linha 1: "Sua empresa mais inteligente"
Linha 2: "com IA que realmente funciona"
```
*(ou variação — deve ser testada)*

**Subtítulo:**
```
"Desenvolvemos software personalizado e automações com IA
para empresas que querem crescer sem contratar mais gente."
```

**Layout (desktop):**
```
[col-left: 55%]                    [col-right: 45%]
Badge "IA First"                   Elemento visual generativo
H1 grande e bold                   (ver spec abaixo)
Subtítulo
[CTA Primário] [CTA Secundário]
─────────────────────
Stats: 100+ Projetos | 50+ Clientes | 5+ Anos
```

**Elemento visual do Hero (✅ DECISÃO TOMADA: Grafo Neural Animado)**

**Justificativa da escolha:**
> A Think World é uma agência **IA First**. O elemento mais honesto e coerente com esse posicionamento é um **grafo neural animado** — nós conectados por linhas pulsantes, simulando como uma rede neural processa informação. Transmite inteligência, tecnologia e sofisticação sem ser genérico. Partículas soltas são bonitas mas abstratas demais; mockup de produto é ótimo mas exige screenshot real pronta; gradiente é a opção mais fraca para uma agência de IA.

**Especificação técnica do elemento:**
```
Biblioteca: tsParticles (leve, ~50kb) ou implementação manual com Canvas API
Tipo: "links" preset — nós que se movem e se conectam por linhas
Configuração:
  - Cor dos nós: accent teal (hsl(172 85% 45%)) + alguns em primary (roxo)
  - Linhas de conexão: accent/30 (semitransparente)
  - Velocidade: lenta (speed: 1.5) — não pode distrair do texto
  - Quantidade: 60-80 nós
  - Interação: mouse repels/attracts — nós reagem ao cursor
  - Background: transparente (o dark do hero já é o fundo)
  - Responsive: reduz para 30 nós no mobile, desativa interação touch

Posicionamento:
  - Desktop: ocupa a coluna direita (45% da largura)
  - Mobile: altura reduzida (200px) atrás do texto, com opacity: 0.4
```

**Especificações visuais:**
- Background: dark (`hsl(250 60% 10%)`) — hero escuro contrasta com o restante branco da página
- Texto: branco / `primary-foreground`
- Accent: teal `hsl(172 85% 45%)`
- H1: 72px desktop / 40px mobile, font-bold, line-height 1.1
- Badge: pill com border accent/30, bg accent/10, texto accent
- Stats: separados por linha vertical, números em accent bold
- Min-height: 100vh

---

### [3] Credibilidade

**Objetivo:** Quebrar ceticismo logo após o Hero.

**✅ DECISÃO: Usar logos de clientes reais (confirmado)**

```
"Empresas que já transformaram seus processos com a Think World"
[Logo 1] [Logo 2] [Logo 3] [Logo 4] [Logo 5] [Logo 6]
(carrossel em mobile, linha em desktop)
```

**Assets necessários:**
- Logos dos clientes em SVG ou PNG com fundo transparente
- Preferência: versão monocromática (cinza) para uniformidade visual
- Tamanho display: altura fixa 32px, largura automática

**Especificações visuais:**
- Background: `bg-muted/30` (cinza muito leve)
- Seção compacta: py-12 (não precisa de muito espaço)
- Números: 48px, font-bold, cor accent
- Contexto: 14px, muted-foreground

---

### [4] Proposta de Valor ("O que fazemos")

**Objetivo:** Explicar o diferencial IA First de forma concreta.

**Headline:**
```
"Não somos uma agência comum.
Somos IA First."
```

**Subtítulo:**
```
"Isso significa que em cada projeto, usamos inteligência artificial
para entregar mais rápido, com mais qualidade e menor custo."
```

**3 pilares em cards horizontais:**
```
┌──────────────────────────────────────────────────────────────┐
│  🤖 IA no Processo        Usamos IA para acelerar            │
│                           desenvolvimento, testes e docs     │
├──────────────────────────────────────────────────────────────┤
│  ⚡ Automação Real         Eliminamos tarefas repetitivas     │
│                           com fluxos inteligentes            │
├──────────────────────────────────────────────────────────────┤
│  📊 Resultado Mensurável  Cada projeto tem KPIs claros       │
│                           e relatórios de impacto            │
└──────────────────────────────────────────────────────────────┘
```

**Especificações visuais:**
- Background: branco
- Cards: border-left com 4px accent, padding-left aumentado
- Ícone: 40px, gradiente primary → accent
- Título do card: 20px, font-semibold
- Descrição: 16px, muted-foreground

---

### [5] Serviços

**Objetivo:** Mostrar o portfólio completo, com destaque para os mais estratégicos.

**✅ DECISÃO: 2 hero cards lado a lado (IA + Sistemas Web/Mobile) + grid 2x2 abaixo**

Os dois serviços âncora confirmados são **Inteligência Artificial** e **Sistemas Web/Mobile**.

**Layout de serviços:**
```
┌──────────────────────────────┐  ┌──────────────────────────────┐
│  ✨ MAIS SOLICITADO           │  │  🚀 MAIS SOLICITADO           │
│                              │  │                              │
│  Inteligência Artificial     │  │  Sistemas Web & Mobile       │
│  Automatize processos e      │  │  Aplicações web e mobile     │
│  gere insights com IA        │  │  personalizadas, rápidas e   │
│  personalizadas.             │  │  escaláveis.                 │
│                              │  │                              │
│  • Chatbots IA               │  │  • React / Next.js           │
│  • Machine Learning          │  │  • Apps iOS & Android        │
│  • Análise Preditiva         │  │  • APIs RESTful              │
│  • Processamento NLP         │  │  • Sistemas Web              │
│                              │  │                              │
│  [Quero esse serviço →]      │  │  [Quero esse serviço →]      │
└──────────────────────────────┘  └──────────────────────────────┘

[Automações]  [Nuvem]  [Consultoria Tech]  [+]   ← grid menor abaixo
```

**Especificações visuais dos hero cards:**
- Card IA: gradiente `from-primary to-accent` (roxo → teal)
- Card Web/Mobile: gradiente `from-accent/80 to-primary` (teal → roxo, invertido)
- Ambos: texto branco, rounded-2xl, shadow-lg, p-8

**Comportamento do "Saiba Mais":**
- Abre um **sheet/drawer** lateral (shadcn Sheet) com descrição expandida do serviço
- Não navega para outra página (mantém one-page)
- Sheet contém: descrição, features, tecnologias, CTA "Falar sobre esse serviço"

**Especificações visuais:**
- Background: `bg-background` (branco)
- Hero card: gradiente `from-primary to-accent`, texto branco, rounded-2xl, shadow-lg
- Cards menores: border/50, hover → border-accent/30 + shadow-md
- Ícone no hero card: branco, 32px
- Badge "MAIS SOLICITADO": pill accent/90

---

### [6] Processo ("Como trabalhamos")

**Objetivo:** Reduzir ansiedade do visitante — mostrar que o processo é simples e transparente.

**Headline:** `"Simples de começar. Sério na entrega."`

**3 steps:**
```
  01                    02                    03
  ────                  ────                  ────
  Diagnóstico           Desenvolvimento       Entrega
  Gratuito              Ágil                  e Suporte

  Entendemos seu        Sprints curtos,       Deploy, treinamento
  negócio e             entregas frequentes   e suporte contínuo.
  mapeamos as          e comunicação          Você acompanha
  oportunidades         transparente.         tudo em tempo real.
  com IA.
```

**Especificações visuais:**
- Background: dark (`bg-primary` ou similar ao hero) — cria ritmo visual
- Texto: branco
- Números: 80px, font-black, accent, opacity-30 (decorativo atrás do título)
- Linha conectora entre steps (desktop): linha horizontal pontilhada accent/30
- Mobile: steps empilhados verticalmente

---

### [7] Cases / Resultados

**Objetivo:** Prova social concreta.

**✅ DECISÃO: Cases reais — 1 implementado (80% sucesso), 2 em modo "Em Breve"**

Os 3 cases na seção foram ajustados de acordo com a disponibilidade atual:
1. **Case Implementado:** Automação n8n, demonstrando 80% de melhoria na taxa de sucesso da automação com IA.
2. **Cases Pendentes:** 2 cards criados em formato de "Em Breve", cobrindo sistemas web e soluções sob medida que em breve serão documentados e adicionados.

> ⚠️ **Ação necessária:** Documentar e preencher os 2 cases faltantes em atualizações futuras para completar a prova social.

**Especificações visuais:**
- Background: `bg-muted/30`
- Cards de depoimento/cases: bg-white, border/50, rounded-xl, shadow-sm
- Quote marks / Indicadores: accent, decorativos

---

### [8] CTA Final

**Objetivo:** Converter visitante que chegou até aqui mas ainda não clicou.

**Bloco:**
```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│   "Pronto para transformar seu negócio com IA?"                  │
│                                                                  │
│   Fale com um especialista hoje. A primeira conversa             │
│   é gratuita e sem compromisso.                                  │
│                                                                  │
│              [Começar agora →]                                   │
│                                                                  │
│   ✓ Resposta em até 24h   ✓ Sem burocracia   ✓ Gratuito         │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Especificações visuais:**
- Background: gradiente `from-primary via-primary to-accent/20`
- Texto: branco
- CTA button: variant accent, size lg, shadow-accent
- Microcopy (linha de confiança): 14px, primary-foreground/70, com ícones check

---

### [9] Formulário de Contato (seção #contact)

**Objetivo:** Capturar lead com mínima fricção e máximo impacto visual.

**Campos (reduzidos de 6 para 4):**
```
[Nome*]          [Email*]
[WhatsApp*]      [Tipo de projeto (select)]
[Mensagem (opcional, placeholder sugestivo)]
```

**Especificações visuais (Implementadas - Design Ultra Premium):**
- **Deep Dark Mode**: O fundo da seção quebra o padrão branco e adota um fundo escuro e imersivo (`bg-slate-950/50` ou similar), elevando o valor percebido da marca na área de conversão.
- **Glassmorphism**: O card do formulário possui `backdrop-blur-xl`, `bg-white/5` e bordas finas translúcidas (`border-white/10`).
- **Inputs Ghost & Glows Neon**: Campos sem preenchimento sólido pesado, com linhas sutis. Ao receber `focus`, ganham um glow neon com as cores da marca (roxo e teal).
- CTA button com estado de carregamento e efeitos luminosos avançados.

**Comportamento do submit:**
1. Loading state no botão (spinner + "Enviando...")
2. Sucesso → redireciona para `/obrigado`
3. Erro → toast de erro inline (sonner)
4. Validação client-side com react-hook-form + zod

**Card de contato direto (ao lado do form):**
```
📧 contato@thinkworld.com.br  ✅ confirmado
📱 +55 (51) 99133-4348
📍 Florianópolis, SC
────────────────────
[WhatsApp direto →]  ← botão que abre wa.me/
```

**Redes sociais:**
```
Instagram: @thinkworldbr ✅ confirmado
```

---

### [10] Footer

**Estrutura:**
```
┌──────────────────────────────────────────────────────────────────┐
│  [Logo Think World]                                              │
│  Agência IA First — Florianópolis, SC                           │
│                                                                  │
│  Serviços          Empresa          Legal                        │
│  ─────────         ───────          ─────                        │
│  Desenvolvimento   Sobre nós        Política de Privacidade      │
│  Inteligência IA   Cases            Termos de Uso                │
│  Automações        Contato          LGPD                         │
│  Mobile                                                          │
│  Nuvem                                                           │
│                                                                  │
│  ────────────────────────────────────────────────────────────── │
│  © 2026 Think World. Todos os direitos reservados.               │
│  [Instagram @thinkworldbr]                                       │
└──────────────────────────────────────────────────────────────────┘
```

> ✅ **Redes sociais confirmadas e atualizadas:** Instagram `@thinkworldbr`.  
> ✅ **Páginas Legais:** Termos de Uso e Política de Privacidade já criados com informações do CNPJ.

---

## 5. Design System

### Design Ultra Premium (Contato)

**Nota de Implementação:** A seção de Contato recebeu um tratamento visual "Ultra Premium", diferenciando-se do restante da página clara. Foi implementado um **Deep Dark Mode** com **Glassmorphism** avançado (fundo translúcido com forte desfoque / blur), **Inputs Ghost** (sem bordas pesadas, apenas linhas sutis e preenchimento incrivelmente suave) e **Glows neon** (brilhos sutis em roxo e teal ao focar nos campos ou no botão). Isso eleva a percepção de valor da marca no momento crucial da conversão.

### Paleta de Cores (mantém a identidade atual, refinada)

```css
/* Tokens principais */
--primary:          250 60% 18%;    /* Roxo escuro */
--primary-foreground: 0 0% 98%;

--accent:           172 85% 45%;    /* Teal vibrante */
--accent-foreground: 240 15% 9%;

--background:       0 0% 100%;      /* Branco puro */
--foreground:       240 15% 9%;     /* Quase preto */

--muted:            240 5% 96%;
--muted-foreground: 240 4% 46%;

/* Gradientes */
--gradient-hero:    linear-gradient(135deg, hsl(250 60% 10%), hsl(250 70% 20%));
--gradient-accent:  linear-gradient(135deg, hsl(172 85% 45%), hsl(180 85% 55%));
--gradient-cta:     linear-gradient(135deg, hsl(250 60% 18%), hsl(172 85% 35%));
```

### Tipografia

```
Font family: Inter (Google Fonts) — já é padrão do Tailwind/shadcn
ou: Geist (fonte da Vercel, mais tech)

Escala:
H1:     72px / 40px mobile — font-black (900), line-height: 1.05
H2:     48px / 32px mobile — font-bold (700), line-height: 1.1
H3:     32px / 24px mobile — font-semibold (600)
Body:   16px — font-normal (400), line-height: 1.6
Small:  14px — font-medium (500)
```

### Espaçamento de Seções

```
Desktop: py-24 (96px topo e base)
Mobile:  py-16 (64px topo e base)
Container: max-w-6xl, mx-auto, px-4 (mobile) / px-8 (desktop)
```

### Componentes Novos Necessários

| Componente | Uso | shadcn disponível? |
|------------|-----|-------------------|
| Sheet/Drawer | Detalhes do serviço | ✅ Sheet |
| Toast | Feedback do formulário | ✅ Sonner |
| Select | Campo tipo de projeto | ✅ Select |
| Skeleton | Loading states | ✅ Skeleton |
| Badge | "Mais solicitado", "IA First" | ✅ Badge |
| Separator | Divisores sutis | ✅ Separator |

### Animações e Microinterações

```
Scroll reveal: fade-in + slide-up (Intersection Observer, sem lib externa)
Cards hover:   scale(1.02) + shadow aumentado — transition 200ms ease
CTA hover:     translate-x-1 no ícone ArrowRight — já implementado
Header scroll: backdrop-blur + bg/80 — já implementado
Loading btn:   spinner (Loader2 do lucide) + disabled state
Floating hero: substituir animate-bounce por animate-float (mais suave)
```

---

## 6. SEO e Metadata (Next.js Metadata API)

> ✅ **OG Image Resolvida:** A imagem open graph (`og-image`) agora é gerada de maneira dinâmica usando a API do Next.js edge runtime na rota `/api/og`.

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: "Think World | Agência IA First",
    template: "%s | Think World"
  },
  description: "Desenvolvemos software personalizado e automações com IA para empresas que querem crescer. Florianópolis, SC.",
  keywords: ["agência IA", "desenvolvimento de software", "automação inteligente", "inteligência artificial", "Florianópolis"],
  authors: [{ name: "Think World" }],
  creator: "Think World",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://thinkworld.com.br",
    siteName: "Think World",
    title: "Think World | Agência IA First",
    description: "Desenvolvemos software personalizado e automações com IA para empresas que querem crescer.",
    images: [{
      url: "/api/og",         // gerado dinamicamente no edge
      width: 1200,
      height: 630,
      alt: "Think World — Agência IA First"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Think World | Agência IA First",
    description: "Desenvolvemos software personalizado e automações com IA.",
    images: ["/api/og"],
    creator: "@thinkworldbr"    
  },
  robots: {
    index: true,
    follow: true,
  }
}
```

---

## 7. Estrutura de Arquivos (Next.js App Router)

```
thinkworld-lp/
├── app/
│   ├── layout.tsx              # RootLayout + metadata global
│   ├── page.tsx                # Landing page (importa seções)
│   ├── obrigado/
│   │   └── page.tsx            # Página de confirmação pós-formulário
│   ├── termos-de-uso/
│   │   └── page.tsx            # Página de Termos implementada
│   ├── politica-de-privacidade/
│   │   └── page.tsx            # Página de Privacidade implementada
│   ├── api/
│   │   └── og/
│   │       └── route.tsx       # Next.js OG Image API route
│   └── globals.css             # Design system (tokens CSS)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Credibilidade.tsx
│   │   ├── PropostaValor.tsx
│   │   ├── Servicos.tsx
│   │   ├── Processo.tsx
│   │   ├── Cases.tsx
│   │   ├── CtaFinal.tsx
│   │   └── Contato.tsx
│   ├── ui/                     # shadcn/ui components
│   └── shared/
│       ├── ServiceSheet.tsx    # Drawer de detalhes do serviço
│       └── AnimatedCounter.tsx # Animação dos números de stats
│
├── lib/
│   ├── utils.ts
│   └── validations.ts          # Schemas zod do formulário
│
├── services/
│   ├── api.ts                  # Axios instance (mantém a estrutura atual)
│   └── types.ts
│
├── public/
│   ├── logo.png
│   └── favicon.ico
│
├── .env.local                  # NEXT_PUBLIC_API_URL=
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 8. Checklist de Implementação (Front-End ✅)

Todas as fases de front-end, setup, integrações básicas e seções foram concluídas.

---

## 9. Decisões Tomadas ✅

Todas as perguntas em aberto foram resolvidas e incorporadas ao projeto:

| # | Item | Decisão |
|---|------|---------|
| 1 | **Logos de clientes** | ✅ Existem e podem ser usados — usar seção de logos na credibilidade |
| 2 | **Cases reais** | ✅ 1 case n8n implementado (80% sucesso), 2 cases de sites em modo "Em Breve" |
| 3 | **Email profissional** | ✅ `contato@thinkworld.com.br` já existe |
| 4 | **Headline do Hero** | ✅ Aprovada: "Sua empresa mais inteligente com IA que realmente funciona" |
| 5 | **Elemento visual do Hero** | ✅ Grafo neural animado (tsParticles) — mais coerente com posicionamento IA First |
| 6 | **Redes sociais** | ✅ `@thinkworldbr` CONFIRMADO e implementado no footer e contato |
| 7 | **Serviços âncora** | ✅ Dois: Inteligência Artificial + Sistemas Web/Mobile — dois hero cards lado a lado |
| 8 | **Política de Privacidade / Termos** | ✅ CRIADOS E IMPLEMENTADOS (com CNPJ inserido nas páginas de termos e privacidade) |
| 9 | **OG Image** | ✅ Resolvida: Implementada dinamicamente via API do Next.js edge runtime (`/api/og`) |

---

## 10. Ações Pendentes Antes do Lançamento Oficial

> Itens que ainda precisam ser resolvidos **fora do código** ou atualizações rápidas antes do Go-Live:

| # | Ação | Responsável | Urgência |
|---|------|-------------|----------|
| 1 | Exportar logos dos clientes em PNG transparente ou SVG e inserir no componente | Jonatan | Alta |
| 2 | Documentar os 2 cases faltantes e substituir os cards de "Em Breve" | Jonatan | Alta |
| 3 | Criar `favicon.ico` com logo da Think World e adicionar na pasta `public/` | Designer | Média |

---

## 11. Referências Visuais

Sites usados como inspiração:

| Site | O que pegar de referência |
|------|--------------------------|
| `linear.app` | Dark hero, tipografia bold, gradientes sutis, glassmorphism de alta qualidade |
| `vercel.com` | Minimalismo, whitespace, CTA claro |
| `resend.com` | Layout de agência tech, seção de features |
| `cal.com` | Prova social, processo transparente |
| `raycast.com` | Animações suaves, cards de feature |

---

*Briefing criado por: Designer UX Agent — Think World*  
*Versão 1.0: briefing inicial*  
*Versão 1.1: todas as decisões incorporadas — pronto para implementação*  
*Versão 1.2: Front-End concluído, com Design Ultra Premium e integrações feitas.*