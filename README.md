# BOLD Documentation Site

Site de documentação técnica completo com arquitetura modular e conteúdo totalmente personalizável via JSON.

## 🎯 Características Principais

- **📚 Estrutura de Documentação Profissional**: Sidebar navegável, table of contents, breadcrumbs
- **✏️ Conteúdo Editável via JSON**: Todo o conteúdo em arquivos JSON, sem mexer no código
- **🎨 Design Moderno**: Interface limpa e profissional focada em legibilidade
- **📱 Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **🔍 Navegação Intuitiva**: Sidebar expansível com seções e subseções
- **💻 Syntax Highlighting**: Blocos de código com destaque de sintaxe
- **📋 Componentes de Conteúdo**: Alerts, cards, listas, código, FAQ e mais
- **⚡ Performance Otimizada**: React + Vite para velocidade máxima

## 🏗️ Estrutura do Projeto

```
/src/app/
├── data/                           # 📊 Conteúdo editável
│   ├── docsConfig.json            # Configuração geral do site
│   └── docsContent.json           # Conteúdo das páginas
│
├── components/
│   └── docs/                       # 🧩 Componentes de documentação
│       ├── DocsHeader.tsx         # Cabeçalho com busca e versões
│       ├── DocsSidebar.tsx        # Navegação lateral
│       ├── DocsContent.tsx        # Renderizador de conteúdo
│       ├── DocsTableOfContents.tsx # Índice da página atual
│       └── DocsLayout.tsx         # Layout principal
│
└── pages/                          # 📄 Páginas
    ├── HomePage.tsx               # Landing page
    └── docs/
        ├── IntroducaoPage.tsx     # Página de introdução
        ├── GettingStartedPage.tsx # Getting Started
        ├── FAQPage.tsx            # FAQ
        └── GenericDocPage.tsx     # Template genérico
```

## 🌐 Estrutura de Navegação

### Páginas Disponíveis

- **/** - Landing page com overview e quick start
- **/docs/introducao** - Introdução ao BOLD
- **/docs/getting-started** - Guia de início rápido
- **/docs/guias/*** - Guias práticos (instalação, configuração, etc.)
- **/docs/api/*** - Referência da API
- **/docs/componentes/*** - Documentação de componentes
- **/docs/exemplos/*** - Exemplos de código
- **/docs/faq** - Perguntas frequentes

## ✏️ Como Editar o Conteúdo

### 1. Configuração Geral (docsConfig.json)

Edite `/src/app/data/docsConfig.json` para alterar:

```json
{
  "siteName": "Nome do Seu Projeto",
  "tagline": "Sua descrição",
  "version": "v1.0",
  "navigation": [
    {
      "title": "Seção",
      "icon": "BookOpen",
      "items": [
        { "title": "Subpágina", "path": "/docs/secao/subpagina" }
      ]
    }
  ]
}
```

**O que você pode editar:**
- Nome do site e tagline
- Versão atual
- Links do GitHub e redes sociais
- Estrutura de navegação (sidebar)
- Links do footer

### 2. Conteúdo das Páginas (docsContent.json)

Edite `/src/app/data/docsContent.json` para adicionar/editar páginas:

```json
{
  "nome-da-pagina": {
    "title": "Título da Página",
    "description": "Descrição breve",
    "content": [
      {
        "type": "paragraph",
        "text": "Seu texto aqui..."
      },
      {
        "type": "code",
        "language": "javascript",
        "code": "const exemplo = 'código aqui';"
      }
    ]
  }
}
```

## 📝 Tipos de Conteúdo Disponíveis

### 1. Parágrafo
```json
{
  "type": "paragraph",
  "text": "Texto normal do parágrafo."
}
```

### 2. Heading (Título)
```json
{
  "type": "heading",
  "level": 2,
  "text": "Título da Seção"
}
```
Níveis disponíveis: 2, 3, 4

### 3. Lista
```json
{
  "type": "list",
  "items": [
    "Item 1",
    "Item 2",
    "Item 3"
  ]
}
```

### 4. Código
```json
{
  "type": "code",
  "language": "javascript",
  "code": "const exemplo = 'Seu código aqui';\nconsole.log(exemplo);"
}
```
Linguagens: `javascript`, `typescript`, `bash`, `json`, `html`, `css`, etc.

### 5. Alert (Avisos)
```json
{
  "type": "alert",
  "variant": "info",
  "title": "Nota Importante",
  "text": "Conteúdo do alerta."
}
```
Variantes: `info`, `success`, `warning`, `error`

### 6. Grid de Cards
```json
{
  "type": "card-grid",
  "cards": [
    {
      "icon": "Zap",
      "title": "Performance",
      "description": "Descrição do card"
    }
  ]
}
```

### 7. Cards com Links
```json
{
  "type": "link-cards",
  "cards": [
    {
      "title": "Próxima Página",
      "description": "Descrição",
      "link": "/docs/pagina",
      "icon": "ArrowRight"
    }
  ]
}
```

### 8. FAQ (Perguntas e Respostas)
```json
{
  "type": "faq",
  "items": [
    {
      "question": "Como fazer X?",
      "answer": "Resposta detalhada aqui..."
    }
  ]
}
```

## 🎨 Ícones Disponíveis

Os ícones vêm da biblioteca Lucide React. Exemplos:

- **BookOpen** - Livro aberto
- **Rocket** - Foguete
- **Code** - Código
- **Lightbulb** - Lâmpada/Ideias
- **Settings** - Configurações
- **Box** - Caixa/Componente
- **Zap** - Raio/Velocidade
- **Shield** - Escudo/Segurança
- **ArrowRight** - Seta direita
- **Download** - Download
- **HelpCircle** - Interrogação
- **BookMarked** - Livro marcado

Ver todos em: https://lucide.dev/icons

## 📖 Exemplo: Criar Nova Página

### 1. Adicionar à Navegação (docsConfig.json)

```json
{
  "navigation": [
    {
      "title": "Minha Seção",
      "icon": "BookOpen",
      "items": [
        {
          "title": "Minha Página",
          "path": "/docs/minha-secao/minha-pagina"
        }
      ]
    }
  ]
}
```

### 2. Adicionar Conteúdo (docsContent.json)

```json
{
  "minha-secao/minha-pagina": {
    "title": "Minha Página Incrível",
    "description": "Descrição da página",
    "content": [
      {
        "type": "paragraph",
        "text": "Conteúdo da minha página..."
      },
      {
        "type": "code",
        "language": "javascript",
        "code": "console.log('Olá mundo!');"
      }
    ]
  }
}
```

### 3. Pronto!

A página estará disponível automaticamente em `/docs/minha-secao/minha-pagina`

## 🎨 Personalização de Estilo

### Cores Principais

As cores podem ser ajustadas editando as classes Tailwind nos componentes:

- **Primária**: `blue-600` (azul)
- **Secundária**: `purple-600` (roxo)
- **Texto**: `gray-900` (escuro), `gray-600` (médio)
- **Background**: `white`, `gray-50`, `gray-100`

### Gradientes

Gradientes padrão: `from-blue-600 via-purple-600 to-blue-700`

## 🚀 Desenvolvimento

### Instalar Dependências
```bash
npm install
```

### Executar em Desenvolvimento
```bash
npm run dev
```

### Build para Produção
```bash
npm run build
```

## 📋 Checklist de Personalização

- [ ] Atualizar `siteName` e `tagline` em `docsConfig.json`
- [ ] Atualizar link do `github` em `docsConfig.json`
- [ ] Personalizar estrutura de `navigation` em `docsConfig.json`
- [ ] Adicionar conteúdo personalizado em `docsContent.json`
- [ ] Revisar e customizar a landing page (`HomePage.tsx`)
- [ ] Adicionar logo customizado (substituir gradiente por imagem)
- [ ] Configurar busca (opcional - requer integração)

## 🔧 Recursos Avançados

### Adicionar Busca

Para adicionar funcionalidade de busca, você pode integrar:
- Algolia DocSearch
- Lunr.js
- FlexSearch

### Versionamento

O selector de versão já está implementado no header. Para ativar:
1. Edite `versions` em `docsConfig.json`
2. Crie rotas específicas para cada versão
3. Implemente lógica de redirecionamento

### Dark Mode

Para adicionar dark mode:
1. Use `next-themes` ou context do React
2. Adicione classes dark: no Tailwind
3. Crie toggle no header

## 📝 Dicas Importantes

1. **JSON Válido**: Sempre valide seu JSON antes de salvar (use jsonlint.com)
2. **Paths Consistentes**: Use caminhos consistentes entre navegação e conteúdo
3. **Ícones**: Certifique-se de usar nomes exatos dos ícones Lucide
4. **Código**: Use `\n` para quebras de linha em blocos de código
5. **Links**: Use paths relativos começando com `/docs/`

## 🤝 Suporte

Para dúvidas ou suporte:
- Abra uma issue no GitHub
- Consulte a documentação do Lucide Icons
- Veja exemplos práticos em `/src/app/data/docsContent.json`

## 📄 Licença

© 2026 BOLD. MIT License.
