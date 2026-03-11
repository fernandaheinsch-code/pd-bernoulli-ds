# 📐 Estrutura do Site - BOLD Documentation

## Visão Geral do Projeto

```
BOLD Documentation Site
├─ Landing Page (/)
├─ Documentação (/docs/*)
│  ├─ Sidebar Navegável
│  ├─ Conteúdo Principal
│  └─ Table of Contents
└─ Sistema de Conteúdo JSON
```

---

## 🗂️ Estrutura de Arquivos

```
/
├── src/
│   └── app/
│       ├── data/                           # 📊 CONTEÚDO EDITÁVEL
│       │   ├── docsConfig.json            # Configuração do site
│       │   └── docsContent.json           # Conteúdo das páginas
│       │
│       ├── components/
│       │   ├── docs/                       # Componentes de documentação
│       │   │   ├── DocsHeader.tsx         # Header com busca/versões
│       │   │   ├── DocsSidebar.tsx        # Navegação lateral
│       │   │   ├── DocsContent.tsx        # Renderizador de conteúdo
│       │   │   ├── DocsTableOfContents.tsx # TOC da página
│       │   │   └── DocsLayout.tsx         # Layout wrapper
│       │   │
│       │   └── figma/
│       │       └── ImageWithFallback.tsx  # Componente de imagem
│       │
│       ├── pages/
│       │   ├── HomePage.tsx               # Landing page (/)
│       │   └── docs/
│       │       ├── IntroducaoPage.tsx     # /docs/introducao
│       │       ├── GettingStartedPage.tsx # /docs/getting-started
│       │       ├── FAQPage.tsx            # /docs/faq
│       │       └── GenericDocPage.tsx     # Template genérico
│       │
│       ├── routes.ts                       # Configuração de rotas
│       └── App.tsx                         # Entry point
│
├── public/                                  # Arquivos estáticos
│
├── README.md                                # 📖 Documentação principal
├── GUIA_ATUALIZACAO_CONTEUDO.md            # 📝 Guia de edição
├── EXEMPLOS_CONTEUDO.md                    # 💡 Exemplos práticos
└── ESTRUTURA_SITE.md                       # 📐 Este arquivo
```

---

## 🌐 Mapa de Rotas

### Landing Page
```
/ ────────────────────> HomePage.tsx
                        ├─ Hero section
                        ├─ Features grid
                        ├─ CTA section
                        └─ Footer
```

### Documentação
```
/docs ────────────────> DocsLayout
                        ├─ DocsHeader (topo)
                        ├─ DocsSidebar (esquerda)
                        ├─ Conteúdo (centro)
                        └─ TableOfContents (direita)

/docs/introducao ─────> IntroducaoPage
/docs/getting-started > GettingStartedPage
/docs/faq ───────────> FAQPage

/docs/guias/:page ───> GenericDocPage
/docs/api/:page ─────> GenericDocPage
/docs/componentes/:p > GenericDocPage
/docs/exemplos/:page > GenericDocPage
```

---

## 📊 Fluxo de Dados

```
docsConfig.json
    │
    ├─> DocsHeader (logo, versões)
    ├─> DocsSidebar (navegação)
    └─> HomePage (footer links)

docsContent.json
    │
    └─> DocsContent
        └─> Renderiza:
            ├─ Paragraphs
            ├─ Headings
            ├─ Code blocks
            ├─ Lists
            ├─ Alerts
            ├─ Cards
            ├─ Links
            └─ FAQ
```

---

## 🎨 Layout Visual

### Desktop (1920px)
```
┌─────────────────────────────────────────────────────┐
│                    DocsHeader                        │
│  [Logo] [Busca] [Versão] [GitHub]                  │
├──────────┬──────────────────────────┬───────────────┤
│          │                          │               │
│  Sidebar │   Conteúdo Principal     │  TOC          │
│          │                          │               │
│  Nav 1   │  # Título                │  • Seção 1    │
│  Nav 2   │  Parágrafo...           │  • Seção 2    │
│  ▼ Nav 3 │                          │  • Seção 3    │
│    Sub 1 │  ## Subtítulo           │               │
│    Sub 2 │  Mais conteúdo...       │               │
│          │                          │               │
│  Nav 4   │  ```code```             │               │
│          │                          │               │
│  (260px) │      (flex-1)            │  (260px)      │
└──────────┴──────────────────────────┴───────────────┘
```

### Tablet (768px)
```
┌────────────────────────────────────┐
│        DocsHeader                   │
├────────────────────────────────────┤
│  [☰] Sidebar (toggle)              │
├────────────────────────────────────┤
│                                    │
│    Conteúdo Principal              │
│                                    │
│    (TOC hidden)                    │
│                                    │
└────────────────────────────────────┘
```

### Mobile (375px)
```
┌─────────────────┐
│  DocsHeader     │
│  [☰]            │
├─────────────────┤
│                 │
│   Conteúdo      │
│                 │
│  (Full width)   │
│                 │
└─────────────────┘
```

---

## 🔄 Processo de Renderização

### 1. Usuário Acessa Página
```
URL: /docs/getting-started
  ↓
Router encontra rota
  ↓
Carrega GettingStartedPage
  ↓
Importa docsContent.json
  ↓
Passa para DocsContent
```

### 2. DocsContent Renderiza
```
content: [ ... array de blocos ... ]
  ↓
map() sobre cada bloco
  ↓
switch(block.type)
  ├─ paragraph → <p>
  ├─ heading → <h2>, <h3>, <h4>
  ├─ code → <pre><code>
  ├─ list → <ul><li>
  ├─ alert → <div class="alert-*">
  ├─ card-grid → <div class="grid">
  ├─ link-cards → <Link>
  └─ faq → <details>
```

### 3. Navegação Atualiza
```
DocsSidebar
  ↓
Lee docsConfig.navigation
  ↓
Renderiza lista de links
  ↓
Destaca item ativo (useLocation)
```

---

## 📝 Arquivos de Configuração

### docsConfig.json
**Responsabilidade:** Configuração global do site
```json
{
  "siteName": "...",      // Nome do site
  "tagline": "...",       // Descrição
  "version": "...",       // Versão atual
  "github": "...",        // Link GitHub
  "versions": [...],      // Versões disponíveis
  "navigation": [...],    // Estrutura sidebar
  "footer": {...}         // Links footer
}
```

### docsContent.json
**Responsabilidade:** Conteúdo de cada página
```json
{
  "nome-pagina": {
    "title": "...",       // Título da página
    "description": "...", // Subtítulo
    "content": [          // Array de blocos
      { "type": "...", ... }
    ]
  }
}
```

---

## 🎯 Componentes Principais

### DocsLayout
- **Função:** Container principal da documentação
- **Renderiza:** Header + Sidebar + Outlet + TOC
- **Usado em:** Todas as rotas /docs/*

### DocsHeader
- **Função:** Barra superior com navegação
- **Contém:** Logo, Busca, Seletor de Versão, GitHub
- **Estado:** Sticky no topo

### DocsSidebar
- **Função:** Navegação lateral
- **Features:**
  - Seções expansíveis
  - Destaque de item ativo
  - Scroll independente
- **Estado:** Sticky, altura total

### DocsContent
- **Função:** Renderizador de conteúdo
- **Input:** Array de blocos JSON
- **Output:** HTML formatado
- **Tipos:** 8 tipos de blocos diferentes

### DocsTableOfContents
- **Função:** Índice da página atual
- **Features:**
  - Gerado automaticamente dos H2/H3
  - Destaque de seção ativa (IntersectionObserver)
  - Scroll suave
- **Estado:** Sticky, apenas desktop

---

## 🚀 Fluxo de Desenvolvimento

### Para Adicionar Nova Página

1. **Atualizar docsConfig.json**
   ```json
   "navigation": [
     {
       "title": "Nova Seção",
       "path": "/docs/nova-pagina"
     }
   ]
   ```

2. **Adicionar conteúdo em docsContent.json**
   ```json
   "nova-pagina": {
     "title": "...",
     "content": [...]
   }
   ```

3. **Pronto!** ✅
   - Rota já existe (GenericDocPage)
   - Sidebar atualiza automaticamente
   - Conteúdo renderiza automaticamente

### Para Modificar Design

1. **Cores:** Editar classes Tailwind nos componentes
2. **Layout:** Ajustar DocsLayout.tsx
3. **Tipografia:** Modificar classes de texto

---

## 📦 Dependências Principais

```json
{
  "react": "18.3.1",
  "react-router": "7.13.0",
  "lucide-react": "0.487.0",
  "tailwindcss": "4.1.12"
}
```

---

## ✨ Features Implementadas

- ✅ Sistema de navegação completo
- ✅ Renderização de conteúdo JSON
- ✅ 8 tipos de blocos de conteúdo
- ✅ Table of Contents automático
- ✅ Syntax highlighting para código
- ✅ Design responsivo (mobile/tablet/desktop)
- ✅ Sidebar com seções expansíveis
- ✅ Destaque de rota ativa
- ✅ Copy to clipboard em códigos
- ✅ Alerts com 4 variantes
- ✅ Landing page customizável

---

## 🎨 Customizações Comuns

### Mudar Cores Primárias
Buscar e substituir nos componentes:
- `blue-600` → `sua-cor-600`
- `purple-600` → `sua-cor-secundaria-600`

### Adicionar Logo Customizado
Em `DocsHeader.tsx`, substituir:
```tsx
<div className="w-8 h-8 bg-gradient...">
  // Por:
  <img src="/logo.png" alt="Logo" />
```

### Modificar Layout
Em `DocsLayout.tsx`:
- Ajustar larguras: `w-64` (sidebar), `w-64` (TOC)
- Mudar ordem: inverter flex-row
- Ocultar TOC: remover componente

---

**Estrutura criada em:** Março de 2026
**Versão:** 1.0
