# 📖 Guia de Atualização de Conteúdo - BOLD Documentation

## Visão Geral

Este site de documentação foi construído com **total separação entre conteúdo e código**. Você pode atualizar todo o conteúdo editando apenas 2 arquivos JSON, sem precisar mexer em nenhum código.

## 📁 Arquivos de Configuração

### Localização
Todos os arquivos de configuração estão em:
```
/src/app/data/
├── docsConfig.json     # Configuração geral do site
└── docsContent.json    # Conteúdo das páginas
```

---

## 1️⃣ docsConfig.json - Configuração Geral

### O que você pode editar:

#### Nome e Identidade
```json
{
  "siteName": "BOLD Documentation",
  "tagline": "Documentação Técnica Completa",
  "version": "v2.0",
  "logo": "BOLD"
}
```

#### Links Externos
```json
{
  "github": "https://github.com/bold/bold"
}
```

#### Versões Disponíveis
```json
{
  "versions": [
    { "label": "v2.0", "path": "/v2" },
    { "label": "v1.0", "path": "/v1" }
  ]
}
```

#### Navegação (Sidebar)

**Estrutura básica:**
```json
{
  "navigation": [
    {
      "title": "Nome da Seção",
      "path": "/docs/pagina-direta",
      "icon": "NomeDoIcone"
    }
  ]
}
```

**Com subpáginas:**
```json
{
  "navigation": [
    {
      "title": "Seção com Subpáginas",
      "icon": "BookOpen",
      "items": [
        {
          "title": "Subpágina 1",
          "path": "/docs/secao/subpagina1"
        },
        {
          "title": "Subpágina 2",
          "path": "/docs/secao/subpagina2"
        }
      ]
    }
  ]
}
```

#### Footer
```json
{
  "footer": {
    "links": [
      { "label": "GitHub", "url": "https://github.com/..." },
      { "label": "Discord", "url": "https://discord.gg/..." }
    ],
    "copyright": "© 2026 Seu Nome. MIT License."
  }
}
```

---

## 2️⃣ docsContent.json - Conteúdo das Páginas

### Estrutura de uma Página

```json
{
  "nome-da-pagina": {
    "title": "Título que Aparece na Página",
    "description": "Subtítulo/descrição breve",
    "content": [
      // Array de blocos de conteúdo
    ]
  }
}
```

### Tipos de Blocos de Conteúdo

#### 📄 1. Parágrafo Normal

```json
{
  "type": "paragraph",
  "text": "Texto normal do parágrafo. Pode ter várias linhas e será renderizado como um bloco de texto."
}
```

**Resultado:** Texto normal, formatado e legível.

---

#### 📌 2. Título (Heading)

```json
{
  "type": "heading",
  "level": 2,
  "text": "Título da Seção"
}
```

**Níveis disponíveis:**
- `level: 2` - Título grande (H2)
- `level: 3` - Título médio (H3)
- `level: 4` - Título pequeno (H4)

**Resultado:** Títulos com formatação automática e âncoras para o índice.

---

#### 📝 3. Lista

```json
{
  "type": "list",
  "items": [
    "Primeiro item da lista",
    "Segundo item da lista",
    "Terceiro item da lista"
  ]
}
```

**Resultado:** Lista com bullets (•) azuis.

---

#### 💻 4. Bloco de Código

```json
{
  "type": "code",
  "language": "javascript",
  "code": "const exemplo = 'Olá Mundo';\nconsole.log(exemplo);"
}
```

**Linguagens suportadas:**
- `javascript` / `js`
- `typescript` / `ts`
- `bash` / `shell`
- `json`
- `html`
- `css`
- `python`
- E outras...

**Dica:** Use `\n` para quebras de linha no código.

**Resultado:** Bloco de código com fundo escuro, syntax highlighting e botão de copiar.

---

#### 💡 5. Alerts (Avisos/Notas)

```json
{
  "type": "alert",
  "variant": "info",
  "title": "Título do Alerta",
  "text": "Conteúdo do alerta com informações importantes."
}
```

**Variantes disponíveis:**

| Variante | Cor | Uso |
|----------|-----|-----|
| `info` | Azul | Informações gerais |
| `success` | Verde | Sucesso ou confirmações |
| `warning` | Amarelo | Avisos importantes |
| `error` | Vermelho | Erros ou cuidados críticos |

**Resultado:** Caixa colorida com ícone e destaque.

---

#### 🎴 6. Grid de Cards

```json
{
  "type": "card-grid",
  "cards": [
    {
      "icon": "Zap",
      "title": "Performance",
      "description": "Otimizado para velocidade máxima."
    },
    {
      "icon": "Shield",
      "title": "Segurança",
      "description": "Proteção de dados integrada."
    }
  ]
}
```

**Resultado:** Grid de cards 2 colunas (responsivo) com ícone, título e descrição.

---

#### 🔗 7. Cards com Links

```json
{
  "type": "link-cards",
  "cards": [
    {
      "title": "Próxima Seção",
      "description": "Continue sua jornada por aqui",
      "link": "/docs/proxima-secao",
      "icon": "ArrowRight"
    }
  ]
}
```

**Resultado:** Cards clicáveis que navegam para outras páginas.

---

#### ❓ 8. FAQ (Perguntas Frequentes)

```json
{
  "type": "faq",
  "items": [
    {
      "question": "Como faço para instalar?",
      "answer": "Use o comando npm install @bold/cli para instalar o CLI globalmente."
    },
    {
      "question": "É gratuito?",
      "answer": "Sim! BOLD é open-source com licença MIT."
    }
  ]
}
```

**Resultado:** Accordion expansível com perguntas e respostas.

---

## 🎨 Ícones Disponíveis

### Ícones Mais Comuns

| Ícone | Nome no JSON | Uso Comum |
|-------|--------------|-----------|
| 📖 | `BookOpen` | Documentação |
| 🚀 | `Rocket` | Getting Started |
| 💻 | `Code` | Código/API |
| 💡 | `Lightbulb` | Exemplos/Ideias |
| ⚙️ | `Settings` | Configuração |
| 📦 | `Box` | Componentes |
| ⚡ | `Zap` | Performance |
| 🛡️ | `Shield` | Segurança |
| 👥 | `Users` | Equipe/Comunidade |
| ➡️ | `ArrowRight` | Próximo/Navegar |
| ⬇️ | `Download` | Download |
| ❓ | `HelpCircle` | Ajuda/FAQ |
| 🔖 | `BookMarked` | Guias |
| 🎯 | `Target` | Objetivos |
| 🔧 | `Tool` | Ferramentas |

**Ver lista completa:** https://lucide.dev/icons

**Importante:** Use o nome exato do ícone em PascalCase (primeira letra maiúscula).

---

## 📝 Exemplos Práticos

### Exemplo 1: Criar Página de Instalação

**1. Adicionar à navegação (docsConfig.json):**
```json
{
  "navigation": [
    {
      "title": "Guias",
      "icon": "BookMarked",
      "items": [
        {
          "title": "Instalação",
          "path": "/docs/guias/instalacao"
        }
      ]
    }
  ]
}
```

**2. Criar conteúdo (docsContent.json):**
```json
{
  "guias/instalacao": {
    "title": "Instalação",
    "description": "Como instalar o BOLD em seu projeto",
    "content": [
      {
        "type": "paragraph",
        "text": "Este guia mostra como instalar o BOLD passo a passo."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Pré-requisitos"
      },
      {
        "type": "list",
        "items": [
          "Node.js 18 ou superior",
          "npm ou yarn instalado",
          "Git para controle de versão"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Instalação via NPM"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "npm install @bold/core"
      },
      {
        "type": "alert",
        "variant": "success",
        "title": "Instalação Concluída!",
        "text": "BOLD foi instalado com sucesso em seu projeto."
      }
    ]
  }
}
```

---

### Exemplo 2: Página de API com Código

```json
{
  "api/autenticacao": {
    "title": "Autenticação API",
    "description": "Como autenticar requisições à API",
    "content": [
      {
        "type": "paragraph",
        "text": "A API BOLD usa autenticação JWT (JSON Web Tokens)."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Obter Token"
      },
      {
        "type": "code",
        "language": "javascript",
        "code": "const response = await fetch('https://api.bold.com/auth/login', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({\n    email: 'user@example.com',\n    password: 'senha123'\n  })\n});\n\nconst { token } = await response.json();"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Usar Token nas Requisições"
      },
      {
        "type": "code",
        "language": "javascript",
        "code": "const data = await fetch('https://api.bold.com/users/me', {\n  headers: {\n    'Authorization': `Bearer ${token}`\n  }\n});"
      },
      {
        "type": "alert",
        "variant": "warning",
        "title": "Importante",
        "text": "Nunca exponha seu token em código frontend. Use variáveis de ambiente."
      }
    ]
  }
}
```

---

## ✅ Checklist de Validação

Antes de salvar suas alterações, verifique:

- [ ] JSON está válido (sem vírgulas extras, aspas fechadas)
- [ ] Paths na navegação correspondem às chaves em docsContent
- [ ] Ícones usam nomes corretos do Lucide
- [ ] Código usa `\n` para quebras de linha
- [ ] Alerts usam variantes corretas (info/success/warning/error)
- [ ] Todos os links internos começam com `/docs/`

## 🛠️ Ferramentas Úteis

### Validar JSON
- Online: https://jsonlint.com/
- VS Code: Instalado por padrão
- Sublime Text: Plugin JSONLint

### Procurar Ícones
- https://lucide.dev/icons
- Use o nome exatamente como mostrado (PascalCase)

### Formatar Código
Para blocos de código, mantenha a indentação:
```json
{
  "code": "function exemplo() {\n  return 'teste';\n}"
}
```

---

## 🚨 Problemas Comuns

### "Página não aparece na navegação"
- ✅ Verifique se o path em `docsConfig.json` está correto
- ✅ Confirme que há uma entrada correspondente em `docsContent.json`

### "Ícone não aparece"
- ✅ Confirme o nome do ícone em https://lucide.dev
- ✅ Use PascalCase (primeira letra maiúscula): `BookOpen`, não `bookopen`

### "Código aparece em uma linha só"
- ✅ Use `\n` para quebras de linha no JSON
- ✅ Exemplo: `"código linha 1\ncódigo linha 2"`

### "JSON inválido ao salvar"
- ✅ Use um validador online
- ✅ Verifique vírgulas (não pode ter vírgula no último item)
- ✅ Verifique se todas as aspas estão fechadas

---

## 💬 Precisa de Ajuda?

Se você precisar:
- ✨ Adicionar novos tipos de blocos de conteúdo
- 🎨 Modificar o design/layout
- ⚙️ Adicionar funcionalidades (busca, dark mode, etc.)
- 🔧 Integrar com sistemas externos

Entre em contato com o desenvolvedor do site.

---

**Última atualização:** Março de 2026
