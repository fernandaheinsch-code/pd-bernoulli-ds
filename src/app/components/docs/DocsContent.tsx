import { Link } from 'react-router';
import { AlertCircle, CheckCircle, Info, AlertTriangle, Copy, Check } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useState } from 'react';

interface ColorToken {
  name: string;
  value: string;
}

interface ContentBlock {
  type: string;
  text?: string;
  level?: number;
  items?: string[];
  language?: string;
  code?: string;
  variant?: string;
  title?: string;
  cards?: any[];
  link?: string;
  icon?: string;
  description?: string;
  tokens?: ColorToken[];
}

interface DocsContentProps {
  title: string;
  description?: string;
  content: ContentBlock[];
}

export function DocsContent({ title, description, content }: DocsContentProps) {
  const [copiedCode, setCopiedCode] = useState<number | null>(null);

  const copyToClipboard = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const renderContent = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {block.text}
          </p>
        );

      case 'heading':
        const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
        const headingClasses = {
          2: 'text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200',
          3: 'text-xl font-bold text-gray-900 mt-6 mb-3',
          4: 'text-lg font-semibold text-gray-900 mt-4 mb-2',
        };
        return (
          <HeadingTag key={index} className={headingClasses[block.level as keyof typeof headingClasses]}>
            {block.text}
          </HeadingTag>
        );

      case 'list':
        return (
          <ul key={index} className="space-y-2 mb-6 ml-6">
            {block.items?.map((item, i) => (
              <li key={i} className="text-gray-700 flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );

      case 'code':
        return (
          <div key={index} className="relative mb-6 group">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                <span className="text-xs text-gray-400 font-mono">{block.language}</span>
                <button
                  onClick={() => copyToClipboard(block.code || '', index)}
                  className="flex items-center gap-2 px-2 py-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode === index ? (
                    <>
                      <Check size={14} />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-gray-100 font-mono">
                  {block.code}
                </code>
              </pre>
            </div>
          </div>
        );

      case 'alert':
        const alertConfig = {
          info: { icon: Info, bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', iconColor: 'text-blue-600' },
          success: { icon: CheckCircle, bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', iconColor: 'text-green-600' },
          warning: { icon: AlertTriangle, bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800', iconColor: 'text-yellow-600' },
          error: { icon: AlertCircle, bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', iconColor: 'text-red-600' },
        };
        const config = alertConfig[block.variant as keyof typeof alertConfig] || alertConfig.info;
        const AlertIcon = config.icon;

        return (
          <div key={index} className={`flex gap-3 p-4 rounded-lg border ${config.bg} ${config.border} mb-6`}>
            <AlertIcon className={`${config.iconColor} flex-shrink-0 mt-0.5`} size={20} />
            <div>
              {block.title && (
                <div className={`font-semibold ${config.text} mb-1`}>{block.title}</div>
              )}
              <div className={config.text}>{block.text}</div>
            </div>
          </div>
        );

      case 'card-grid':
        return (
          <div key={index} className="grid md:grid-cols-2 gap-6 mb-8">
            {block.cards?.map((card, i) => {
              const Icon = (LucideIcons as any)[card.icon] || LucideIcons.Circle;
              return (
                <div key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              );
            })}
          </div>
        );

      case 'link-cards':
        return (
          <div key={index} className="grid md:grid-cols-2 gap-4 mb-8">
            {block.cards?.map((card, i) => {
              const Icon = (LucideIcons as any)[card.icon] || LucideIcons.ArrowRight;
              return (
                <Link
                  key={i}
                  to={card.link}
                  className="group border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <Icon className="text-gray-400 group-hover:text-blue-600 transition-colors" size={20} />
                  </div>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </Link>
              );
            })}
          </div>
        );

      case 'faq':
        return (
          <div key={index} className="space-y-4 mb-8">
            {block.items?.map((item: any, i: number) => (
              <details key={i} className="group border border-gray-200 rounded-lg">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                  {item.question}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        );

      case 'color-tokens':
        return (
          <div key={index} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
            {block.tokens?.map((token, i) => (
              <div key={i} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="h-14 w-full"
                  style={{ backgroundColor: token.value }}
                  title={token.value}
                />
                <div className="p-2 bg-white">
                  <div className="font-mono text-xs text-gray-800 font-semibold truncate" title={token.name}>
                    {token.name}
                  </div>
                  <div className="font-mono text-xs text-gray-500 uppercase mt-0.5">{token.value}</div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <article className="max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        {description && (
          <p className="text-xl text-gray-600">{description}</p>
        )}
      </header>

      <div className="prose prose-lg max-w-none">
        {content.map((block, index) => renderContent(block, index))}
      </div>
    </article>
  );
}
