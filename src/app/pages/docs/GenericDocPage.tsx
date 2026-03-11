import { useParams } from 'react-router';

const PAGE_DESCRIPTIONS: Record<string, string> = {
  buttons: 'Use os botões sempre que uma ação exigir intenção explícita do usuário. Não crie variações fora das definidas na biblioteca.\nOs botões vem em duas variantes — largura automática e largura fixa — em três tamanhos: 48px, 40px e 32px. E seguem uma hierarquia rigorosa em seu uso.',
};

const PAGE_SECTION1_TITLE: Record<string, string> = {
  buttons: 'Boas práticas',
};

const SHARED_BULLETS = [
  'Use o botão conforme a hierarquia de ação (primário, secundário, etc.).',
  'O rótulo deve ser claro e orientado à ação (ex: "Salvar", "Continuar").',
  'Não utilize botões para ações que não sejam interativas (use links ou texto).',
  'Respeite estados padrão: default, hover, focus, disabled e loading.',
];

const PAGE_SECTION1_BULLETS: Record<string, string[]> = {
  buttons: SHARED_BULLETS,
  tables: SHARED_BULLETS,
  forms: SHARED_BULLETS,
  modals: SHARED_BULLETS,
};

const SHARED_NOTE = 'Sempre reutilize este componente para manter escalabilidade e facilitar a manutenção do produto.';

const PAGE_SECTION1_NOTE: Record<string, string> = {
  buttons: SHARED_NOTE,
  tables: SHARED_NOTE,
  forms: SHARED_NOTE,
  modals: SHARED_NOTE,
};

export default function GenericDocPage() {
  const { section, page } = useParams();
  const description = page && PAGE_DESCRIPTIONS[page]
    ? PAGE_DESCRIPTIONS[page]
    : `Documentação detalhada sobre ${page?.replace(/-/g, ' ')}.`;

  return (
    <article className="max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {page?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
        </h1>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2">
          {page && PAGE_SECTION1_TITLE[page] ? PAGE_SECTION1_TITLE[page] : 'Boas práticas'}
        </h2>
        {page && PAGE_SECTION1_BULLETS[page] ? (
          <ul className="space-y-2 mb-4">
            {PAGE_SECTION1_BULLETS[page].map((item, i) => (
              <li key={i} className="text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {page && PAGE_SECTION1_NOTE[page] && (
          <p className="text-gray-700 leading-relaxed mb-4">{PAGE_SECTION1_NOTE[page]}</p>
        )}
        {!PAGE_SECTION1_BULLETS[page ?? ''] && (
          <p className="text-gray-700 leading-relaxed mb-4">
            Esta página contém informações sobre {page?.replace(/-/g, ' ')}.
            O conteúdo pode ser personalizado editando os arquivos JSON de configuração.
          </p>
        )}

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          Como Usar
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Para personalizar esta página, edite o arquivo JSON correspondente em{' '}
          <code className="px-2 py-1 bg-gray-100 rounded text-sm">/src/app/data/docsContent.json</code>
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <div className="text-blue-600 font-semibold">💡 Dica:</div>
            <div className="text-blue-800">
              Adicione conteúdo customizado para esta seção criando uma entrada em docsContent.json
              com a chave "{section}/{page}".
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          Exemplo de Código
        </h2>
        <div className="bg-gray-900 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <span className="text-xs text-gray-400 font-mono">javascript</span>
          </div>
          <pre className="p-4 overflow-x-auto">
            <code className="text-sm text-gray-100 font-mono">
{`// Exemplo de uso
import { Component } from '@sigma-ui/core';

const example = new Component({
  name: '${page}',
  config: {
    // Suas configurações aqui
  }
});

export default example;`}
            </code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          Próximos Passos
        </h2>
        <ul className="space-y-2 mb-6 ml-6">
          <li className="text-gray-700 flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Explore mais páginas na navegação lateral</span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Veja exemplos práticos na seção de Exemplos</span>
          </li>
          <li className="text-gray-700 flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Consulte a API Reference para detalhes técnicos</span>
          </li>
        </ul>
      </div>
    </article>
  );
}