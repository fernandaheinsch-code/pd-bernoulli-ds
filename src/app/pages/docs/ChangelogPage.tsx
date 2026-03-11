import changelogContent from '../../data/changelogContent.json';

type ChangeItem = {
  message: string;
  scope: string | null;
  breaking: boolean;
  hash: string;
  date: string;
};

type ChangeGroup = {
  type: string;
  label: string;
  color: string;
  items: ChangeItem[];
};

type Version = {
  version: string;
  date: string | null;
  dateFormatted: string | null;
  isUnreleased: boolean;
  breakingChanges: boolean;
  totalCommits: number;
  changes: ChangeGroup[];
};

const TYPE_COLORS: Record<string, string> = {
  green:  'bg-green-100 text-green-800 border-green-200',
  red:    'bg-red-100 text-red-800 border-red-200',
  blue:   'bg-blue-100 text-blue-800 border-blue-200',
  purple: 'bg-purple-100 text-purple-800 border-purple-200',
  pink:   'bg-pink-100 text-pink-800 border-pink-200',
  gray:   'bg-gray-100 text-gray-700 border-gray-200',
  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  orange: 'bg-orange-100 text-orange-800 border-orange-200',
};

function TypeBadge({ label, color }: { label: string; color: string }) {
  const cls = TYPE_COLORS[color] ?? TYPE_COLORS.gray;
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${cls}`}>
      {label}
    </span>
  );
}

function VersionCard({ v }: { v: Version }) {
  const isEmpty = v.changes.length === 0;

  return (
    <div className="relative pl-8">
      {/* linha da timeline */}
      <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200" />
      {/* bolinha */}
      <div
        className={`absolute left-1.5 top-2 w-3 h-3 rounded-full border-2 border-white ring-2 ${
          v.isUnreleased ? 'bg-blue-500 ring-blue-200' : 'bg-gray-400 ring-gray-200'
        }`}
      />

      <div className="mb-10">
        {/* cabeçalho */}
        <div className="flex flex-wrap items-baseline gap-3 mb-1">
          <h2 className="text-xl font-bold text-gray-900">{v.version}</h2>
          {v.isUnreleased && (
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200">
              Não lançado
            </span>
          )}
          {v.breakingChanges && (
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-600 border border-red-200">
              Breaking Changes
            </span>
          )}
        </div>
        {v.dateFormatted && (
          <p className="text-sm text-gray-500 mb-4">{v.dateFormatted}</p>
        )}
        {!v.dateFormatted && v.isUnreleased && (
          <p className="text-sm text-gray-400 mb-4 italic">Sem data de lançamento definida</p>
        )}

        {isEmpty ? (
          <p className="text-sm text-gray-400 italic">Nenhuma alteração registrada.</p>
        ) : (
          <div className="space-y-5">
            {v.changes.map((group, gi) => (
              <div key={gi}>
                <div className="flex items-center gap-2 mb-2">
                  <TypeBadge label={group.label} color={group.color} />
                </div>
                <ul className="space-y-1.5">
                  {group.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gray-400 mt-0.5 select-none">—</span>
                      <span className="flex-1">
                        {item.breaking && (
                          <span className="mr-1.5 text-red-600 font-bold text-xs">BREAKING</span>
                        )}
                        {item.scope && (
                          <span className="mr-1.5 text-gray-500 font-mono text-xs">({item.scope})</span>
                        )}
                        {item.message}
                      </span>
                      <span className="shrink-0 font-mono text-xs text-gray-400 bg-gray-50 border border-gray-200 rounded px-1.5 py-0.5">
                        {item.hash}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ChangelogPage() {
  const { title, description, generatedAt, versions } = changelogContent as {
    title: string;
    description: string;
    generatedAt: string;
    versions: Version[];
  };

  const generated = new Date(generatedAt).toLocaleString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });

  return (
    <article className="max-w-3xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{title}</h1>
        <p className="text-xl text-gray-600 mb-3">{description}</p>
        <p className="text-xs text-gray-400">
          Gerado automaticamente em {generated} a partir do histórico git.
        </p>
      </header>

      {versions.length === 0 ? (
        <div className="text-gray-500 italic">Nenhum commit encontrado no repositório.</div>
      ) : (
        <div className="relative">
          {versions.map((v, i) => (
            <VersionCard key={i} v={v} />
          ))}
          {/* fim da timeline */}
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 h-2 w-px bg-gray-200" />
            <div className="absolute left-1.5 top-2 w-3 h-3 rounded-full bg-gray-200" />
          </div>
        </div>
      )}
    </article>
  );
}
