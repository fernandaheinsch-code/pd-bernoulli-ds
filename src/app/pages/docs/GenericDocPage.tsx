import { useParams } from 'react-router';

export default function GenericDocPage() {
  const { section, page } = useParams();

  return (
    <article className="max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {page?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
        </h1>
        <p className="text-xl text-gray-600">
          Documentação detalhada sobre {page?.replace(/-/g, ' ')}.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
          Visão Geral
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Esta página contém informações sobre {page?.replace(/-/g, ' ')}. 
          O conteúdo pode ser personalizado editando os arquivos JSON de configuração.
        </p>

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