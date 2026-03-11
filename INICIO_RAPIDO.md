# ⚡ Início Rápido - BOLD Documentation

## 🎯 O que foi Criado?

Um **site de documentação técnica completo** similar ao BOLD (https://bold.bridge.ufsc.tech/pt/), com:

✅ **Landing Page** profissional  
✅ **Navegação lateral** (sidebar) com seções expansíveis  
✅ **Table of Contents** automático  
✅ **Conteúdo editável via JSON** (sem mexer no código)  
✅ **8 tipos de blocos de conteúdo** (texto, código, alerts, cards, FAQ, etc.)  
✅ **Design responsivo** (mobile, tablet, desktop)  
✅ **Syntax highlighting** para código  
✅ **Busca e versionamento** (UI pronta, integração opcional)  

---

## 📂 Estrutura Simplificada

```
/src/app/data/
├── docsConfig.json     ← Edite aqui: navegação, logo, links
└── docsContent.json    ← Edite aqui: conteúdo das páginas

/src/app/components/docs/
└── [Componentes prontos - não mexer]

/src/app/pages/
├── HomePage.tsx        ← Landing page
└── docs/               ← Páginas de documentação
```

---

## 🚀 Como Usar

### 1. Executar o Site

```bash
# Instalar dependências (primeira vez)
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

### 2. Personalizar Conteúdo

**Editar apenas 2 arquivos:**

#### `/src/app/data/docsConfig.json`
- Nome do site
- Estrutura de navegação (sidebar)
- Versões
- Links do footer

#### `/src/app/data/docsContent.json`
- Conteúdo de todas as páginas
- Textos, código, exemplos

**📖 Documentação completa:**
- `GUIA_ATUALIZACAO_CONTEUDO.md` - Como editar conteúdo
- `EXEMPLOS_CONTEUDO.md` - Exemplos prontos para copiar

---

## 📝 Adicionar Nova Página (3 passos)

### 1. Adicionar à navegação
Em `docsConfig.json`:
```json
{
  "navigation": [
    {
      "title": "Minha Seção",
      "icon": "BookOpen",
      "items": [
        {
          "title": "Nova Página",
          "path": "/docs/minha-secao/nova-pagina"
        }
      ]
    }
  ]
}
```

### 2. Adicionar conteúdo
Em `docsContent.json`:
```json
{
  "minha-secao/nova-pagina": {
    "title": "Título da Página",
    "description": "Descrição breve",
    "content": [
      {
        "type": "paragraph",
        "text": "Seu conteúdo aqui..."
      }
    ]
  }
}
```

### 3. Pronto! ✅
Acesse: `http://localhost:3000/docs/minha-secao/nova-pagina`

---

## 🎨 Tipos de Conteúdo Disponíveis

### 1. Texto
```json
{ "type": "paragraph", "text": "Seu texto..." }
```

### 2. Título
```json
{ "type": "heading", "level": 2, "text": "Título" }
```

### 3. Código
```json
{
  "type": "code",
  "language": "javascript",
  "code": "const x = 'exemplo';"
}
```

### 4. Alert
```json
{
  "type": "alert",
  "variant": "info",
  "title": "Nota",
  "text": "Informação importante"
}
```

Variantes: `info`, `success`, `warning`, `error`

### 5. Lista
```json
{
  "type": "list",
  "items": ["Item 1", "Item 2"]
}
```

### 6. Cards
```json
{
  "type": "card-grid",
  "cards": [
    {
      "icon": "Zap",
      "title": "Título",
      "description": "Descrição"
    }
  ]
}
```

### 7. Links
```json
{
  "type": "link-cards",
  "cards": [
    {
      "title": "Próxima Página",
      "description": "Continue aqui",
      "link": "/docs/proxima",
      "icon": "ArrowRight"
    }
  ]
}
```

### 8. FAQ
```json
{
  "type": "faq",
  "items": [
    {
      "question": "Como fazer?",
      "answer": "Resposta aqui..."
    }
  ]
}
```

---

## 🔧 Personalizações Comuns

### Mudar Nome e Logo
Em `docsConfig.json`:
```json
{
  "siteName": "Meu Projeto",
  "tagline": "Minha descrição",
  "logo": "MP"
}
```

### Mudar Cores
Editar classes Tailwind nos componentes:
- `blue-600` → Sua cor primária
- `purple-600` → Sua cor secundária

### Adicionar Link GitHub
Em `docsConfig.json`:
```json
{
  "github": "https://github.com/seu-usuario/seu-projeto"
}
```

### Versões
Em `docsConfig.json`:
```json
{
  "versions": [
    { "label": "v2.0", "path": "/v2" },
    { "label": "v1.0", "path": "/v1" }
  ]
}
```

---

## 🎯 Páginas Prontas

O site já vem com 3 páginas de exemplo:

1. **Introdução** (`/docs/introducao`)
   - Overview do projeto
   - Recursos principais
   - Requisitos do sistema

2. **Getting Started** (`/docs/getting-started`)
   - Tutorial passo a passo
   - Instalação
   - Primeiro projeto

3. **FAQ** (`/docs/faq`)
   - Perguntas e respostas
   - Accordion expansível

**Todas podem ser editadas em `docsContent.json`**

---

## 📚 Documentação Completa

### Arquivos de Ajuda
1. **README.md** - Visão geral técnica
2. **GUIA_ATUALIZACAO_CONTEUDO.md** - Tutorial de edição (⭐ LEIA ESTE)
3. **EXEMPLOS_CONTEUDO.md** - Exemplos prontos para copiar
4. **ESTRUTURA_SITE.md** - Arquitetura detalhada
5. **INICIO_RAPIDO.md** - Este arquivo

### Ordem Recomendada de Leitura
1. ⚡ **INICIO_RAPIDO.md** (este arquivo) - Começe aqui
2. 📝 **GUIA_ATUALIZACAO_CONTEUDO.md** - Como editar
3. 💡 **EXEMPLOS_CONTEUDO.md** - Copie e cole exemplos
4. 📖 **README.md** - Detalhes técnicos (opcional)

---

## ⚠️ Importante

### ✅ PODE Editar
- `/src/app/data/docsConfig.json`
- `/src/app/data/docsContent.json`
- `/src/app/pages/HomePage.tsx` (landing page)

### ❌ NÃO Mexer (a menos que saiba o que está fazendo)
- `/src/app/components/docs/*`
- `/src/app/components/figma/ImageWithFallback.tsx`
- `/src/app/routes.ts`

### 💡 Dica
**Para 99% dos casos, você só precisa editar os 2 arquivos JSON!**

---

## 🆘 Problemas Comuns

### Página não aparece
✅ Verifique se adicionou em `docsConfig.json` E `docsContent.json`

### Ícone não aparece
✅ Use nome exato do ícone em PascalCase: `BookOpen`, não `bookopen`  
✅ Lista de ícones: https://lucide.dev/icons

### JSON inválido
✅ Valide em: https://jsonlint.com/  
✅ Verifique vírgulas (não pode ter no último item)

### Código aparece em uma linha
✅ Use `\n` para quebras de linha no JSON

---

## 🎨 Ícones Mais Usados

```
BookOpen     - Documentação
Rocket       - Getting Started
Code         - Código/API
Lightbulb    - Exemplos
Settings     - Configuração
Box          - Componentes
Zap          - Performance
Shield       - Segurança
ArrowRight   - Navegação
Download     - Downloads
HelpCircle   - FAQ
Users        - Comunidade
```

**Lista completa:** https://lucide.dev/icons

---

## 🚀 Deploy

O site funciona com qualquer plataforma:

### Vercel
```bash
npm run build
# Conecte seu repositório no Vercel
```

### Netlify
```bash
npm run build
# Arraste a pasta dist/ no Netlify
```

### Outros
O build gera arquivos estáticos em `/dist/`  
Hospede em qualquer servidor web.

---

## ✨ Próximos Passos

1. ✅ Execute o site: `npm run dev`
2. ✅ Abra: `http://localhost:3000`
3. ✅ Explore as páginas de exemplo
4. ✅ Leia: `GUIA_ATUALIZACAO_CONTEUDO.md`
5. ✅ Edite `docsConfig.json` com suas informações
6. ✅ Adicione seu conteúdo em `docsContent.json`
7. ✅ Customize a landing page (opcional)
8. ✅ Deploy!

---

## 💬 Precisa de Ajuda?

- 📖 Leia `GUIA_ATUALIZACAO_CONTEUDO.md`
- 💡 Veja exemplos em `EXEMPLOS_CONTEUDO.md`
- 🏗️ Entenda a estrutura em `ESTRUTURA_SITE.md`
- 📚 Detalhes técnicos em `README.md`

---

**Criado em:** Março de 2026  
**Versão:** 1.0  
**Status:** ✅ Pronto para uso!
