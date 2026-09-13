# KUWALA TECH — Website Institucional Completo

Website institucional moderno, de alto desempenho e acessibilidade para a **KUWALA TECH** (Pemba, Cabo Delgado, Moçambique), desenvolvido de acordo com a especificação oficial do projeto (**Prompt Mestre 10/10 - Secções 1 a 76**).

---

## 1. Visão Geral da Arquitetura

O projeto foi concebido para transmitir autoridade técnica, confiabilidade de engenharia e impacto local, sem a aparência genérica de templates de SaaS.

- **Frontend**: Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS.
- **Tipografia Técnica**: IBM Plex Sans (textos e títulos institucionais) e IBM Plex Mono (números, metadados, labels e códigos técnicos).
- **Design System Centralizado**: Paleta semântica com Primary Navy (`#0A1128`), System Cyan (`#00D2FF`) e Energy Gold (`#F59E0B`), com tokens CSS centralizados em `src/app/globals.css` e `tailwind.config.ts`.
- **Internacionalização (i18n)**: Suporte bilíngue nativo e reativo (Português / Inglês) persistido no navegador.
- **Base de Dados & Backend**: SQLite nativo com modelo `service_requests` e endpoint `/api/atendimento` com validação de esquema Zod, rate limiting e encaminhamento seguro para WhatsApp.
- **Acessibilidade (WCAG 2.1 AA)**: Skip link, suporte a `@media (prefers-reduced-motion: reduce)`, navegação por teclado, anéis de foco visíveis e landmarks semânticos.

---

## 2. Mapa de Rotas e Páginas

| Rota | Descrição |
| :--- | :--- |
| `/` | **Página Inicial**: Hero com painel de especificações técnicas, resumo institucional, grelha dos 8 serviços, 5 soluções e 6 fases do método. |
| `/empresa` | **Empresa**: Apresentação detalhada, 3 pilares, visão, missão, 8 valores e carrossel editorial dos 3 fundadores. |
| `/sobre-nos` | **Sobre Nós**: Fundação e percurso técnico detalhado de cada fundador. |
| `/servicos` | **Catálogo de Serviços**: Catálogo dos 8 serviços técnicos com filtros interativos. |
| `/servicos/:slug` | **Páginas de Detalhe de Serviço**: Páginas individuais completas para cada um dos 8 serviços com escopo, aplicações, componentes e processo. |
| `/solucoes` | **Catálogo de Soluções**: As 5 soluções integradas e método de integração global. |
| `/solucoes/:slug` | **Páginas de Detalhe de Solução**: Páginas individuais com arquitetura, contexto, percurso em 6 passos e benefícios. |
| `/metodo` | **Método de Trabalho**: Diagrama técnico das 6 fases (Diagnóstico, Análise, Projecto, Implementação, Testes, Continuidade). |
| `/contacto` | **Contacto Directo**: Informações oficiais de email, WhatsApp, Instagram e Google Maps (sem formulário, conforme secção 24). |
| `/atendimento` | **Portal de Atendimento**: Formulário dinâmico Pessoal/Empresa com os 18 bairros de Pemba, validação no servidor e integração WhatsApp. |
| `/orcamento` | **Redirecionamento**: Redireciona automaticamente para `/atendimento`. |
| `404` | **Página Não Encontrada**: Página de erro técnico com diagnóstico e links de recuperação. |

---

## 3. Instruções de Instalação e Execução

### 3.1. Pré-requisitos
- Node.js versão 18 ou superior (testado em Node.js v24).
- Gestor de pacotes `npm`.

### 3.2. Instalação de Dependências
```bash
npm install
```

### 3.3. Configurar Ambiente (.env)
Copie o ficheiro de exemplo para o seu ambiente local:
```bash
cp .env.example .env
```
Variáveis principais:
- `NEXT_PUBLIC_APP_URL`: URL base da aplicação (ex: `http://localhost:3000` ou `https://kuwalatech.co.mz`).
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Número oficial de WhatsApp (formato internacional, ex: `258840000000`).
- `NEXT_PUBLIC_CONTACT_EMAIL`: Email oficial (`kuwalatech.office@gmail.com`).
- `NEXT_PUBLIC_INSTAGRAM`: Utilizador de Instagram (`kuwalatech.official`).
- `DATABASE_PATH`: Caminho do ficheiro SQLite (`./data/kuwala.sqlite`).

### 3.4. Executar em Desenvolvimento
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### 3.5. Executar os Testes Unitários e de Integração
```bash
npm run test
```

### 3.6. Verificação de Tipos TypeScript (Typecheck)
```bash
npm run typecheck
```

### 3.7. Compilação de Produção (Build)
```bash
npm run build
```

### 3.8. Executar em Modo Produção (Start)
```bash
npm run start
```

---

## 4. Guia de Customização e Manutenção

1. **Onde alterar dados da marca, slogan e contactos**:
   - `src/content/brand.ts`: Centraliza nome, slogan, apresentação, missão, visão, 3 pilares, 8 valores e lista dos 18 bairros de Pemba.
2. **Onde alterar dados dos 8 Serviços**:
   - `src/content/services.ts`: Títulos, descrições, escopo técnico, aplicações, componentes e processos de cada serviço.
3. **Onde alterar dados das 5 Soluções**:
   - `src/content/solutions.ts`: Contexto, problemas, tecnologias, passos de implementação e benefícios de cada solução.
4. **Onde alterar dados dos 3 Fundadores**:
   - `src/content/founders.ts`: Biografias, cargos, fotos e competências de Chelton da Costa Anatona, Eunildo Paulo e Jone Zacarias Jemus.
5. **Onde alterar traduções (i18n)**:
   - Português: `src/i18n/pt.ts`
   - Inglês: `src/i18n/en.ts`
6. **Onde configurar o design system e cores**:
   - Tokens CSS: `src/app/globals.css`
   - Configuração de classes: `tailwind.config.ts`

---

## 5. Estrutura do Projeto

```
├── public/
│   └── images/
│       ├── brand/           # Logótipo oficial e vetores
│       └── founders/        # Fotografias oficiais dos fundadores (Eunildo, Chelton, Jone)
├── src/
│   ├── app/
│   │   ├── api/atendimento/ # Rota de API POST para pedidos
│   │   ├── atendimento/     # Página do formulário de pedidos
│   │   ├── contacto/        # Página de contactos diretos
│   │   ├── empresa/         # Página institucional da empresa
│   │   ├── metodo/          # Página do método de 6 fases
│   │   ├── servicos/        # Catálogo e páginas dinâmicas [slug]
│   │   ├── solucoes/        # Catálogo e páginas dinâmicas [slug]
│   │   ├── sobre-nos/       # Página dos fundadores e história
│   │   ├── globals.css      # Design tokens e variáveis de engenharia
│   │   ├── layout.tsx       # Root layout com SEO, i18n e acessibilidade
│   │   ├── page.tsx         # Página Inicial (Home)
│   │   └── not-found.tsx    # 404 técnico personalizado
│   ├── components/          # Componentes reutilizáveis e acessíveis
│   ├── content/             # Dados tipados centrais (brand, services, solutions, method, founders)
│   ├── context/             # Contexto de Internacionalização (PT/EN)
│   ├── db/                  # Persistência nativa SQLite (service_requests)
│   ├── i18n/                # Dicionários completos PT e EN
│   ├── schemas/             # Validação Zod cliente e servidor
│   ├── tests/               # Testes unitários e de integração
│   └── utils/               # Utilitários de WhatsApp e estilos
├── .env.example
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```
