import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { MagnifyingGlassIcon as Search, XIcon as X, ArrowRightIcon as ArrowRight } from '@phosphor-icons/react';
import docsConfig from '../../data/docsConfig.json';

// ─── índice de busca ───────────────────────────────────────────────────────────

interface SearchEntry {
  section: string | null;
  title: string;
  path: string;
  keywords: string;
}

function buildIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];
  for (const item of docsConfig.navigation) {
    if ('path' in item && item.path) {
      entries.push({ section: null, title: item.title, path: item.path, keywords: item.title.toLowerCase() });
    }
    if ('items' in item && item.items) {
      for (const sub of item.items) {
        entries.push({
          section: item.title,
          title: sub.title,
          path: sub.path,
          keywords: [item.title, sub.title].join(' ').toLowerCase(),
        });
      }
    }
  }
  return entries;
}

const INDEX = buildIndex();

const SECTION_COLORS: Record<string, string> = {
  'Componentes': 'bg-blue-100 text-blue-700',
  'Tokens':      'bg-purple-100 text-purple-700',
  'Styles':      'bg-pink-100 text-pink-700',
  'Guias':       'bg-green-100 text-green-700',
  'API Reference': 'bg-orange-100 text-orange-700',
  'Exemplos':    'bg-yellow-100 text-yellow-700',
};

function sectionBadge(section: string | null) {
  if (!section) return null;
  const cls = SECTION_COLORS[section] ?? 'bg-gray-100 text-gray-600';
  return (
    <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded ${cls}`}>
      {section}
    </span>
  );
}

// ─── componente ───────────────────────────────────────────────────────────────

interface SearchModalProps {
  onClose: () => void;
}

export function SearchModal({ onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = query.trim()
    ? INDEX.filter(e => e.keywords.includes(query.toLowerCase().trim()))
    : INDEX.filter(e => e.section === 'Componentes');

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setCursor(0);
  }, [query]);

  // fecha com Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor(c => Math.min(c + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor(c => Math.max(c - 1, 0));
    } else if (e.key === 'Enter' && results[cursor]) {
      go(results[cursor].path);
    }
  }

  function go(path: string) {
    navigate(path);
    onClose();
  }

  // scroll automático do item ativo
  useEffect(() => {
    const el = listRef.current?.children[cursor] as HTMLElement | undefined;
    el?.scrollIntoView({ block: 'nearest' });
  }, [cursor]);

  return (
    /* backdrop */
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

      {/* painel */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* campo de busca */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
          <Search size={18} className="text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Buscar componentes, tokens, guias..."
            className="flex-1 text-sm text-gray-900 placeholder-gray-400 bg-transparent outline-none"
          />
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* resultados */}
        <div className="max-h-80 overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-gray-400">
              Nenhum resultado para "{query}"
            </div>
          ) : (
            <>
              {!query && (
                <div className="px-4 pt-3 pb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Componentes
                </div>
              )}
              <ul ref={listRef}>
                {results.map((entry, i) => (
                  <li key={entry.path}>
                    <button
                      onMouseEnter={() => setCursor(i)}
                      onClick={() => go(entry.path)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                        i === cursor ? 'bg-blue-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className="flex-1 text-sm font-medium text-gray-800">{entry.title}</span>
                      {sectionBadge(entry.section)}
                      <ArrowRight
                        size={14}
                        className={`shrink-0 transition-colors ${i === cursor ? 'text-blue-500' : 'text-gray-300'}`}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* rodapé com dicas */}
        <div className="flex items-center gap-4 px-4 py-2 border-t border-gray-100 bg-gray-50 text-xs text-gray-400">
          <span><kbd className="font-mono">↑↓</kbd> navegar</span>
          <span><kbd className="font-mono">↵</kbd> abrir</span>
          <span><kbd className="font-mono">Esc</kbd> fechar</span>
        </div>
      </div>
    </div>
  );
}
