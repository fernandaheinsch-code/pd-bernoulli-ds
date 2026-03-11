# 📚 Exemplos de Conteúdo - BOLD Documentation

Este arquivo contém exemplos práticos de como criar diferentes tipos de páginas de documentação.

---

## Exemplo 1: Página de Instalação Completa

```json
{
  "guias/instalacao": {
    "title": "Instalação",
    "description": "Guia completo para instalar e configurar o BOLD",
    "content": [
      {
        "type": "paragraph",
        "text": "Este guia irá orientá-lo através do processo de instalação do BOLD em diferentes ambientes."
      },
      {
        "type": "alert",
        "variant": "info",
        "title": "Pré-requisitos",
        "text": "Antes de começar, certifique-se de ter Node.js 18+ e npm 9+ instalados."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Instalação via NPM"
      },
      {
        "type": "paragraph",
        "text": "A forma mais rápida de instalar o BOLD é através do npm:"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "npm install -g @bold/cli"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Instalação via Yarn"
      },
      {
        "type": "paragraph",
        "text": "Se você preferir usar Yarn:"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "yarn global add @bold/cli"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Verificar Instalação"
      },
      {
        "type": "paragraph",
        "text": "Para verificar se a instalação foi bem-sucedida:"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "bold --version"
      },
      {
        "type": "alert",
        "variant": "success",
        "title": "Instalação Concluída!",
        "text": "Se você viu o número da versão, a instalação foi bem-sucedida."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Próximos Passos"
      },
      {
        "type": "link-cards",
        "cards": [
          {
            "title": "Configuração",
            "description": "Configure seu primeiro projeto",
            "link": "/docs/guias/configuracao",
            "icon": "Settings"
          },
          {
            "title": "Getting Started",
            "description": "Crie seu primeiro app",
            "link": "/docs/getting-started",
            "icon": "Rocket"
          }
        ]
      }
    ]
  }
}
```

---

## Exemplo 2: Página de API Reference

```json
{
  "api/endpoints": {
    "title": "API Endpoints",
    "description": "Referência completa dos endpoints disponíveis",
    "content": [
      {
        "type": "paragraph",
        "text": "A API BOLD fornece endpoints RESTful para todas as operações principais."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Autenticação"
      },
      {
        "type": "paragraph",
        "text": "Todos os endpoints requerem autenticação via Bearer token."
      },
      {
        "type": "code",
        "language": "bash",
        "code": "curl -H \"Authorization: Bearer SEU_TOKEN\" \\\n  https://api.bold.com/v1/users"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Listar Usuários"
      },
      {
        "type": "paragraph",
        "text": "Retorna uma lista paginada de usuários."
      },
      {
        "type": "code",
        "language": "http",
        "code": "GET /v1/users\n\nQuery Parameters:\n- page (int): Número da página (default: 1)\n- limit (int): Itens por página (default: 20)\n- sort (string): Campo para ordenação"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Exemplo de Resposta"
      },
      {
        "type": "code",
        "language": "json",
        "code": "{\n  \"data\": [\n    {\n      \"id\": \"usr_123\",\n      \"name\": \"João Silva\",\n      \"email\": \"joao@example.com\"\n    }\n  ],\n  \"pagination\": {\n    \"page\": 1,\n    \"limit\": 20,\n    \"total\": 100\n  }\n}"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Criar Usuário"
      },
      {
        "type": "code",
        "language": "http",
        "code": "POST /v1/users\n\nBody (JSON):\n{\n  \"name\": \"string\",\n  \"email\": \"string\",\n  \"password\": \"string\"\n}"
      },
      {
        "type": "alert",
        "variant": "warning",
        "title": "Rate Limiting",
        "text": "Este endpoint está limitado a 100 requisições por hora por IP."
      }
    ]
  }
}
```

---

## Exemplo 3: Página de Componente

```json
{
  "componentes/buttons": {
    "title": "Button Component",
    "description": "Botões customizáveis para sua aplicação",
    "content": [
      {
        "type": "paragraph",
        "text": "O componente Button fornece botões estilizados e acessíveis com múltiplas variantes."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Uso Básico"
      },
      {
        "type": "code",
        "language": "jsx",
        "code": "import { Button } from '@bold/ui';\n\nfunction App() {\n  return (\n    <Button onClick={() => alert('Clicado!')}>\n      Clique Aqui\n    </Button>\n  );\n}"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Variantes"
      },
      {
        "type": "paragraph",
        "text": "O Button suporta diferentes variantes visuais:"
      },
      {
        "type": "code",
        "language": "jsx",
        "code": "<Button variant=\"primary\">Primário</Button>\n<Button variant=\"secondary\">Secundário</Button>\n<Button variant=\"outline\">Outline</Button>\n<Button variant=\"ghost\">Ghost</Button>\n<Button variant=\"danger\">Danger</Button>"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Tamanhos"
      },
      {
        "type": "code",
        "language": "jsx",
        "code": "<Button size=\"sm\">Pequeno</Button>\n<Button size=\"md\">Médio</Button>\n<Button size=\"lg\">Grande</Button>"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Props"
      },
      {
        "type": "list",
        "items": [
          "variant - Estilo visual do botão",
          "size - Tamanho do botão",
          "disabled - Desabilita o botão",
          "loading - Mostra indicador de carregamento",
          "fullWidth - Ocupa largura total do container"
        ]
      },
      {
        "type": "alert",
        "variant": "info",
        "title": "Acessibilidade",
        "text": "Todos os botões incluem atributos ARIA apropriados automaticamente."
      }
    ]
  }
}
```

---

## Exemplo 4: Página de Exemplo/Tutorial

```json
{
  "exemplos/react": {
    "title": "Exemplo: Aplicação React",
    "description": "Construa uma aplicação React completa com BOLD",
    "content": [
      {
        "type": "paragraph",
        "text": "Neste tutorial, vamos criar uma aplicação React do zero usando BOLD."
      },
      {
        "type": "card-grid",
        "cards": [
          {
            "icon": "Clock",
            "title": "Tempo Estimado",
            "description": "15 minutos"
          },
          {
            "icon": "BarChart",
            "title": "Nível",
            "description": "Iniciante"
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "1. Criar Projeto"
      },
      {
        "type": "paragraph",
        "text": "Primeiro, crie um novo projeto React:"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "bold create meu-app --template react\ncd meu-app"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "2. Estrutura de Pastas"
      },
      {
        "type": "paragraph",
        "text": "O projeto terá a seguinte estrutura:"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "meu-app/\n├── src/\n│   ├── components/\n│   ├── pages/\n│   ├── App.tsx\n│   └── main.tsx\n├── public/\n└── package.json"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "3. Criar Componente"
      },
      {
        "type": "paragraph",
        "text": "Crie um novo componente em src/components/Welcome.tsx:"
      },
      {
        "type": "code",
        "language": "tsx",
        "code": "import { Card, Button } from '@bold/ui';\n\nexport function Welcome() {\n  return (\n    <Card>\n      <h1>Bem-vindo ao BOLD!</h1>\n      <p>Sua aplicação está rodando.</p>\n      <Button>Começar</Button>\n    </Card>\n  );\n}"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "4. Usar no App"
      },
      {
        "type": "code",
        "language": "tsx",
        "code": "import { Welcome } from './components/Welcome';\n\nfunction App() {\n  return (\n    <div className=\"container\">\n      <Welcome />\n    </div>\n  );\n}\n\nexport default App;"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "5. Executar"
      },
      {
        "type": "code",
        "language": "bash",
        "code": "npm run dev"
      },
      {
        "type": "alert",
        "variant": "success",
        "title": "Parabéns!",
        "text": "Sua aplicação React está rodando em http://localhost:3000"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Código Completo"
      },
      {
        "type": "paragraph",
        "text": "O código completo deste exemplo está disponível no GitHub:"
      },
      {
        "type": "link-cards",
        "cards": [
          {
            "title": "Ver no GitHub",
            "description": "Código fonte completo do exemplo",
            "link": "https://github.com/bold/exemplos/react-app",
            "icon": "Github"
          }
        ]
      }
    ]
  }
}
```

---

## Exemplo 5: FAQ Completo

```json
{
  "faq": {
    "title": "Perguntas Frequentes",
    "description": "Respostas para as dúvidas mais comuns sobre o BOLD",
    "content": [
      {
        "type": "paragraph",
        "text": "Encontre respostas rápidas para as perguntas mais frequentes sobre o BOLD."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Geral"
      },
      {
        "type": "faq",
        "items": [
          {
            "question": "O que é o BOLD?",
            "answer": "BOLD é um framework full-stack para desenvolvimento de aplicações web modernas, combinando React, Node.js e ferramentas de desenvolvimento em uma solução integrada."
          },
          {
            "question": "O BOLD é gratuito?",
            "answer": "Sim! BOLD é completamente open-source e gratuito, licenciado sob MIT License. Você pode usar em projetos pessoais e comerciais sem restrições."
          },
          {
            "question": "Qual o tamanho da comunidade?",
            "answer": "Temos uma comunidade ativa com mais de 10.000 desenvolvedores no Discord e GitHub. Sempre há alguém disponível para ajudar!"
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Técnico"
      },
      {
        "type": "faq",
        "items": [
          {
            "question": "Quais tecnologias o BOLD usa?",
            "answer": "BOLD é construído com React 18+, Node.js 18+, TypeScript, Vite para build, e suporta múltiplos bancos de dados incluindo PostgreSQL, MongoDB e MySQL."
          },
          {
            "question": "Posso usar com Next.js?",
            "answer": "Sim! BOLD é compatível com Next.js. Você pode usar nossos componentes e ferramentas em projetos Next.js existentes ou novos."
          },
          {
            "question": "Como faço deploy?",
            "answer": "BOLD funciona com todas as principais plataformas: Vercel, Netlify, AWS, Google Cloud, Azure. Veja nosso guia de deploy para instruções específicas de cada plataforma."
          }
        ]
      },
      {
        "type": "alert",
        "variant": "info",
        "title": "Não encontrou sua resposta?",
        "text": "Entre em nosso Discord ou abra uma issue no GitHub. Nossa comunidade está sempre pronta para ajudar!"
      }
    ]
  }
}
```

---

## Dicas para Conteúdo de Qualidade

### 1. Use Headings Hierárquicos
- H2 para seções principais
- H3 para subseções
- H4 para detalhes específicos

### 2. Combine Texto com Código
Sempre explique o código antes de mostrá-lo:
```json
{
  "type": "paragraph",
  "text": "Aqui está como fazer X:"
},
{
  "type": "code",
  "language": "javascript",
  "code": "// código aqui"
}
```

### 3. Use Alerts Estrategicamente
- `info` - Informações adicionais
- `success` - Confirmações e parabéns
- `warning` - Avisos importantes
- `error` - Erros críticos ou cuidados

### 4. Finalize com Próximos Passos
Sempre direcione o usuário para onde ir depois:
```json
{
  "type": "link-cards",
  "cards": [...]
}
```

### 5. Mantenha Parágrafos Curtos
- 2-3 frases por parágrafo
- Use listas para múltiplos itens
- Quebre conteúdo longo em seções

---

**Última atualização:** Março de 2026
