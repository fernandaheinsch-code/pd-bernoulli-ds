import { useParams } from 'react-router';
import { Button } from '../../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { PlusIcon as Plus } from '@phosphor-icons/react';

const PAGE_DESCRIPTIONS: Record<string, string> = {
  avatar: 'O componente Avatar representa visualmente um usuário ou entidade. Use-o para exibir fotos de perfil, iniciais como fallback ou imagens com bordas arredondadas.\nDisponível em 7 tamanhos (2xl até xxs), 3 tipos (Fallback, Image, Image Rounded) e com suporte a indicador de nível.',
  buttons: 'Use os botões sempre que uma ação exigir intenção explícita do usuário. Não crie variações fora das definidas na biblioteca.\nOs botões estão disponíveis em quatro tamanhos: xl (56px), lg (48px), md (40px) e sm (32px). Quatro variantes — Primary, Outline, Ghost e Link — e suporte a ícone isolado ou em conjunto com texto. Seguem hierarquia rigorosa de uso.',
};

const PAGE_SECTION1_TITLE: Record<string, string> = {
  avatar: 'Boas práticas',
  buttons: 'Boas práticas',
};

const SHARED_BULLETS = [
  'Use o botão conforme a hierarquia de ação (primário, secundário, etc.).',
  'O rótulo deve ser claro e orientado à ação (ex: "Salvar", "Continuar").',
  'Não utilize botões para ações que não sejam interativas (use links ou texto).',
  'Respeite estados padrão: default, hover, focus, disabled e loading.',
];

const AVATAR_BULLETS = [
  'Use o tipo Fallback quando a imagem do usuário não estiver disponível — exiba sempre as iniciais.',
  'Mantenha proporção e tamanho consistentes dentro do mesmo contexto de uso.',
  'O indicador de nível (Level) deve ser usado apenas quando a informação de nível for relevante para o contexto.',
  'Não use avatares de tamanho xxs ou xs em contextos onde a legibilidade das iniciais seja importante.',
  'Prefira Image Rounded para avatars de entidades não-humanas (times, grupos, organizações).',
];

const PAGE_SECTION1_BULLETS: Record<string, string[]> = {
  avatar: AVATAR_BULLETS,
  buttons: SHARED_BULLETS,
  tables: SHARED_BULLETS,
  forms: SHARED_BULLETS,
  modals: SHARED_BULLETS,
};

const SHARED_NOTE = 'Sempre reutilize este componente para manter escalabilidade e facilitar a manutenção do produto.';

interface TableRow { type: string; description: string; }

const PAGE_SECTION2_TABLE: Record<string, { title: string; rows: TableRow[] }> = {
  avatar: {
    title: 'Tipos de avatar',
    rows: [
      { type: 'Fallback',       description: 'Exibe as iniciais do usuário quando não há imagem disponível. Fundo colorido com texto em contraste.' },
      { type: 'Image',          description: 'Exibe a foto de perfil do usuário em formato circular.' },
      { type: 'Image Rounded',  description: 'Exibe uma imagem com bordas arredondadas (não totalmente circular). Indicado para entidades como grupos, times ou organizações.' },
      { type: 'Level=True',     description: 'Variante com indicador de nível sobreposto ao avatar. Disponível nos tipos Fallback e Image nos tamanhos 2xl, xl, lg e md.' },
    ],
  },
  buttons: {
    title: 'Tipos de botões',
    rows: [
      { type: 'Default',            description: 'Utilizado para a ação principal da página.' },
      { type: 'Ghost button',       description: 'Utilizado para ações que não necessitam de atenção primária na página.' },
      { type: 'Botões com ícone',   description: 'Ícones podem ser usados dentro dos botões para comunicar melhor a ação. Os ícones devem estar sempre alinhados verticalmente com o texto.' },
      { type: 'Somente ícone',      description: 'Geralmente são associados à um menu dropdown ou ações rápidas.' },
      { type: 'Desabilitado',       description: 'Utilizado quando o usuário não pode prosseguir até que uma condição seja satisfeita.' },
      { type: 'Perigo',             description: 'Utilizado quando uma ação tem efeito destrutivo nos dados do usuário (deletar, remover, etc).' },
      { type: 'Conjunto de botões', description: 'Utilizado quando uma ação possui mais de uma opção. Sempre utilize um botão de uma ação positiva (primário) em conjunto com uma ação negativa ou neutra (secundário). Ações negativas devem ser posicionadas à esquerda. Ações positivas, à direita.' },
    ],
  },
};

const PAGE_SECTION1_NOTE: Record<string, string> = {
  avatar: SHARED_NOTE,
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

        {page === 'avatar' && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
              Visualização
            </h2>

            {/* Fallback */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Fallback</p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden mb-8">
              <div className="grid grid-cols-[100px_1fr_1fr] bg-gray-50 border-b border-gray-100">
                <div className="px-4 py-3" />
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Level=False</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Level=True</div>
              </div>
              {[
                { label: '2xl · 64px', size: 'size-16', text: 'text-xl',     badge: true },
                { label: 'xl · 56px',  size: 'size-14', text: 'text-lg',     badge: true },
                { label: 'lg · 48px',  size: 'size-12', text: 'text-base',   badge: true },
                { label: 'md · 40px',  size: 'size-10', text: 'text-sm',     badge: true },
                { label: 'sm · 32px',  size: 'size-8',  text: 'text-xs',     badge: false },
                { label: 'xs · 24px',  size: 'size-6',  text: 'text-[10px]', badge: false },
                { label: 'xxs · 16px', size: 'size-4',  text: 'text-[8px]',  badge: false },
              ].map((row, i, arr) => (
                <div key={row.label} className={`grid grid-cols-[100px_1fr_1fr] items-center ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="px-4 py-5 text-xs font-semibold text-gray-400">{row.label}</div>
                  <div className="px-4 py-5">
                    <Avatar className={row.size}>
                      <AvatarFallback className={`bg-[#7325b8] text-white font-semibold ${row.text}`}>JD</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="px-4 py-5">
                    {row.badge ? (
                      <div className="relative inline-flex">
                        <Avatar className={row.size}>
                          <AvatarFallback className={`bg-[#7325b8] text-white font-semibold ${row.text}`}>JD</AvatarFallback>
                        </Avatar>
                        <span className="absolute -bottom-0.5 -right-0.5 size-[18px] rounded-full bg-[#ab71e6] text-white flex items-center justify-center font-bold text-[9px] leading-none">1</span>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-300">—</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-8 mb-3">Image</p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden mb-8">
              <div className="grid grid-cols-[100px_1fr_1fr_1fr] bg-gray-50 border-b border-gray-100">
                <div className="px-4 py-3" />
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Image</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Image Rounded</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Image + Level</div>
              </div>
              {[
                { label: '2xl · 64px', size: 'size-16', text: 'text-xl', rounded: 'rounded-xl', badge: 'size-5 text-[9px]' },
                { label: 'xl · 56px',  size: 'size-14', text: 'text-lg',  rounded: 'rounded-lg', badge: 'size-[18px] text-[8px]' },
                { label: 'lg · 48px',  size: 'size-12', text: 'text-base', rounded: 'rounded-lg', badge: 'size-4 text-[7px]' },
                { label: 'md · 40px',  size: 'size-10', text: 'text-sm',  rounded: 'rounded-md', badge: 'size-[14px] text-[6px]' },
                { label: 'sm · 32px',  size: 'size-8',  text: 'text-xs',  rounded: 'rounded-md', badge: null },
                { label: 'xs · 24px',  size: 'size-6',  text: 'text-[10px]', rounded: 'rounded', badge: null },
                { label: 'xxs · 16px', size: 'size-4',  text: 'text-[8px]', rounded: 'rounded-sm', badge: null },
              ].map((row, i, arr) => (
                <div key={row.label} className={`grid grid-cols-[100px_1fr_1fr_1fr] items-center ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="px-4 py-5 text-xs font-semibold text-gray-400">{row.label}</div>
                  {/* Image (circular) */}
                  <div className="px-4 py-5">
                    <Avatar className={row.size}>
                      <AvatarImage src="/avatar.png" alt="User" />
                      <AvatarFallback className={`bg-[#C8E6C9] text-[#2E7D32] font-semibold ${row.text}`}>AB</AvatarFallback>
                    </Avatar>
                  </div>
                  {/* Image Rounded (square-ish) */}
                  <div className="px-4 py-5">
                    <Avatar className={`${row.size} ${row.rounded}`}>
                      <AvatarImage src="/avatar.png" alt="Entity" />
                      <AvatarFallback className={`${row.rounded} bg-[#FFF3E0] text-[#E65100] font-semibold ${row.text}`}>TM</AvatarFallback>
                    </Avatar>
                  </div>
                  {/* Image + Level */}
                  <div className="px-4 py-5">
                    {row.badge ? (
                      <div className="relative inline-flex">
                        <Avatar className={row.size}>
                          <AvatarImage src="/avatar.png" alt="User" />
                          <AvatarFallback className={`bg-[#C8E6C9] text-[#2E7D32] font-semibold ${row.text}`}>AB</AvatarFallback>
                        </Avatar>
                        <span className={`absolute -bottom-0.5 -right-0.5 ${row.badge} rounded-full bg-[#ab71e6] text-white flex items-center justify-center font-bold leading-none`}>1</span>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-300">—</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {page === 'buttons' && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">
              Visualização
            </h2>
            <div className="rounded-2xl border border-gray-100 overflow-hidden mb-10">
              {/* Header row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] bg-gray-50 border-b border-gray-100">
                <div className="px-4 py-3" />
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Primary</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Outline</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Ghost</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Link</div>
              </div>

              {/* xl row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] border-b border-gray-100 items-center">
                <div className="px-4 py-5 text-xs font-semibold text-gray-400">xl · 56px</div>
                <div className="px-4 py-5"><Button size="xl">Button</Button></div>
                <div className="px-4 py-5"><Button variant="outline" size="xl">Button</Button></div>
                <div className="px-4 py-5"><Button variant="ghost" size="xl">Button</Button></div>
                <div className="px-4 py-5"><Button variant="link" size="xl">Button</Button></div>
              </div>

              {/* lg row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] border-b border-gray-100 items-center">
                <div className="px-4 py-5 text-xs font-semibold text-gray-400">lg · 48px</div>
                <div className="px-4 py-5"><Button size="lg">Button</Button></div>
                <div className="px-4 py-5"><Button variant="outline" size="lg">Button</Button></div>
                <div className="px-4 py-5"><Button variant="ghost" size="lg">Button</Button></div>
                <div className="px-4 py-5"><Button variant="link" size="lg">Button</Button></div>
              </div>

              {/* md row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] border-b border-gray-100 items-center">
                <div className="px-4 py-5 text-xs font-semibold text-gray-400">md · 40px</div>
                <div className="px-4 py-5"><Button size="default">Button</Button></div>
                <div className="px-4 py-5"><Button variant="outline" size="default">Button</Button></div>
                <div className="px-4 py-5"><Button variant="ghost" size="default">Button</Button></div>
                <div className="px-4 py-5"><Button variant="link" size="default">Button</Button></div>
              </div>

              {/* sm row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] border-b border-gray-100 items-center">
                <div className="px-4 py-5 text-xs font-semibold text-gray-400">sm · 32px</div>
                <div className="px-4 py-5"><Button size="sm">Button</Button></div>
                <div className="px-4 py-5"><Button variant="outline" size="sm">Button</Button></div>
                <div className="px-4 py-5"><Button variant="ghost" size="sm">Button</Button></div>
                <div className="px-4 py-5"><Button variant="link" size="sm">Button</Button></div>
              </div>

              {/* Disabled row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] border-b border-gray-100 items-center bg-gray-50/50">
                <div className="px-4 py-5 text-xs font-semibold text-gray-400">Disabled</div>
                <div className="px-4 py-5"><Button disabled>Button</Button></div>
                <div className="px-4 py-5"><Button variant="outline" disabled>Button</Button></div>
                <div className="px-4 py-5"><Button variant="ghost" disabled>Button</Button></div>
                <div className="px-4 py-5"><Button variant="link" disabled>Button</Button></div>
              </div>

              {/* Destructive row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] items-center bg-gray-50/50">
                <div className="px-4 py-5 text-xs font-semibold text-gray-400">Destrutivo</div>
                <div className="px-4 py-5"><Button variant="destructive">Button</Button></div>
                <div className="px-4 py-5"><Button variant="outline" className="border-destructive text-destructive hover:border-destructive hover:text-destructive/80">Button</Button></div>
                <div className="px-4 py-5"><Button variant="ghost" className="text-destructive hover:text-destructive/80">Button</Button></div>
                <div className="px-4 py-5"><Button variant="link" className="text-destructive hover:text-destructive/80">Button</Button></div>
              </div>
            </div>

            {/* Icon-only table */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-8 mb-3">Ícone</p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden mb-10">
              {/* Header row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] bg-gray-50 border-b border-gray-100">
                <div className="px-4 py-3" />
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Primary</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Outline</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Ghost</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Link</div>
              </div>

              {/* xl row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] border-b border-gray-100 items-center">
                <div className="px-4 py-5 text-xs font-semibold text-gray-400">xl · 56px</div>
                <div className="px-4 py-5"><Button size="icon-xl"><Plus size={18} /></Button></div>
                <div className="px-4 py-5"><Button variant="outline" size="icon-xl"><Plus size={18} /></Button></div>
                <div className="px-4 py-5"><Button variant="ghost" size="icon-xl"><Plus size={18} /></Button></div>
                <div className="px-4 py-5"><Button variant="link" size="icon-link-xl"><Plus size={18} /></Button></div>
              </div>

              {/* lg row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] border-b border-gray-100 items-center">
                <div className="px-4 py-5 text-xs font-semibold text-gray-400">lg · 48px</div>
                <div className="px-4 py-5"><Button size="icon-lg"><Plus size={18} /></Button></div>
                <div className="px-4 py-5"><Button variant="outline" size="icon-lg"><Plus size={18} /></Button></div>
                <div className="px-4 py-5"><Button variant="ghost" size="icon-lg"><Plus size={18} /></Button></div>
                <div className="px-4 py-5"><Button variant="link" size="icon-link-lg"><Plus size={18} /></Button></div>
              </div>

              {/* md row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] border-b border-gray-100 items-center">
                <div className="px-4 py-5 text-xs font-semibold text-gray-400">md · 40px</div>
                <div className="px-4 py-5"><Button size="icon"><Plus size={15} /></Button></div>
                <div className="px-4 py-5"><Button variant="outline" size="icon"><Plus size={15} /></Button></div>
                <div className="px-4 py-5"><Button variant="ghost" size="icon"><Plus size={15} /></Button></div>
                <div className="px-4 py-5"><Button variant="link" size="icon-link"><Plus size={15} /></Button></div>
              </div>

              {/* sm row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] border-b border-gray-100 items-center">
                <div className="px-4 py-5 text-xs font-semibold text-gray-400">sm · 32px</div>
                <div className="px-4 py-5"><Button size="icon-sm"><Plus size={12} /></Button></div>
                <div className="px-4 py-5"><Button variant="outline" size="icon-sm"><Plus size={12} /></Button></div>
                <div className="px-4 py-5"><Button variant="ghost" size="icon-sm"><Plus size={12} /></Button></div>
                <div className="px-4 py-5"><Button variant="link" size="icon-link-sm"><Plus size={12} /></Button></div>
              </div>

              {/* Disabled row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] items-center bg-gray-50/50">
                <div className="px-4 py-5 text-xs font-semibold text-gray-400">Disabled</div>
                <div className="px-4 py-5"><Button size="icon" disabled><Plus size={15} /></Button></div>
                <div className="px-4 py-5"><Button variant="outline" size="icon" disabled><Plus size={15} /></Button></div>
                <div className="px-4 py-5"><Button variant="ghost" size="icon" disabled><Plus size={15} /></Button></div>
                <div className="px-4 py-5"><Button variant="link" size="icon-link" disabled><Plus size={15} /></Button></div>
              </div>
            </div>

            {/* With icon table */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-8 mb-3">Com ícone</p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden mb-10">
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] bg-gray-50 border-b border-gray-100">
                <div className="px-4 py-3" />
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Ícone à esquerda</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Ícone à direita</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Outline + ícone</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Ghost + ícone</div>
              </div>
              {[
                { label: 'xl · 56px', size: 'xl' as const, iconSize: 18 },
                { label: 'lg · 48px', size: 'lg' as const, iconSize: 18 },
                { label: 'md · 40px', size: 'default' as const, iconSize: 15 },
                { label: 'sm · 32px', size: 'sm' as const, iconSize: 12 },
              ].map((row, i, arr) => (
                <div key={row.label} className={`grid grid-cols-[80px_1fr_1fr_1fr_1fr] items-center ${i < arr.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="px-4 py-5 text-xs font-semibold text-gray-400">{row.label}</div>
                  <div className="px-4 py-5"><Button size={row.size}><Plus size={row.iconSize} />Button</Button></div>
                  <div className="px-4 py-5"><Button size={row.size}>Button<Plus size={row.iconSize} /></Button></div>
                  <div className="px-4 py-5"><Button variant="outline" size={row.size}><Plus size={row.iconSize} />Button</Button></div>
                  <div className="px-4 py-5"><Button variant="ghost" size={row.size}><Plus size={row.iconSize} />Button</Button></div>
                </div>
              ))}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] items-center bg-gray-50/50">
                <div className="px-4 py-5 text-xs font-semibold text-gray-400">Disabled</div>
                <div className="px-4 py-5"><Button disabled><Plus size={15} />Button</Button></div>
                <div className="px-4 py-5"><Button disabled>Button<Plus size={15} /></Button></div>
                <div className="px-4 py-5"><Button variant="outline" disabled><Plus size={15} />Button</Button></div>
                <div className="px-4 py-5"><Button variant="ghost" disabled><Plus size={15} />Button</Button></div>
              </div>
            </div>

            {/* Icon-link table */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-8 mb-3">Ícone link</p>
            <div className="rounded-2xl border border-gray-100 overflow-hidden mb-10">
              {/* Header row — sizes as columns */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] bg-gray-50 border-b border-gray-100">
                <div className="px-4 py-3" />
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">xl · 32px</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">lg · 32px</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">md · 24px</div>
                <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">sm · 16px</div>
              </div>

              {/* Default row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] border-b border-gray-100 items-center">
                <div className="px-4 py-5 text-xs font-semibold text-gray-400">Default</div>
                <div className="px-4 py-5"><Button variant="link" size="icon-link-xl"><Plus size={18} /></Button></div>
                <div className="px-4 py-5"><Button variant="link" size="icon-link-lg"><Plus size={18} /></Button></div>
                <div className="px-4 py-5"><Button variant="link" size="icon-link"><Plus size={15} /></Button></div>
                <div className="px-4 py-5"><Button variant="link" size="icon-link-sm"><Plus size={12} /></Button></div>
              </div>

              {/* Disabled row */}
              <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr] items-center bg-gray-50/50">
                <div className="px-4 py-5 text-xs font-semibold text-gray-400">Disabled</div>
                <div className="px-4 py-5"><Button variant="link" size="icon-link-xl" disabled><Plus size={18} /></Button></div>
                <div className="px-4 py-5"><Button variant="link" size="icon-link-lg" disabled><Plus size={18} /></Button></div>
                <div className="px-4 py-5"><Button variant="link" size="icon-link" disabled><Plus size={15} /></Button></div>
                <div className="px-4 py-5"><Button variant="link" size="icon-link-sm" disabled><Plus size={12} /></Button></div>
              </div>
            </div>
          </>
        )}

        {page && PAGE_SECTION2_TABLE[page] && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2">
              {PAGE_SECTION2_TABLE[page].title}
            </h2>
            <div className="mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-bold text-lg text-gray-700 w-48">Tipo</th>
                    <th className="text-left px-4 py-3 font-bold text-lg text-gray-700">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {PAGE_SECTION2_TABLE[page].rows.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="px-4 py-3 font-medium text-gray-900 align-top">{row.type}</td>
                      <td className="px-4 py-3 text-gray-600 leading-relaxed">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {page === 'buttons' && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
              Como Usar
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Importe o componente <code className="px-2 py-1 bg-gray-100 rounded text-sm">Button</code> e utilize as props <code className="px-2 py-1 bg-gray-100 rounded text-sm">variant</code> e <code className="px-2 py-1 bg-gray-100 rounded text-sm">size</code> para compor as variações necessárias.
            </p>

            <div className="bg-gray-900 rounded-lg overflow-hidden mb-6">
              <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                <span className="text-xs text-gray-400 font-mono">tsx</span>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm text-gray-100 font-mono">{`import { Button } from '@/components/ui/button';
import { Plus } from '@phosphor-icons/react';

// Variante primária (padrão)
<Button>Salvar</Button>

// Variantes disponíveis
<Button variant="outline">Cancelar</Button>
<Button variant="ghost">Ignorar</Button>
<Button variant="link">Ver mais</Button>
<Button variant="destructive">Excluir</Button>

// Tamanhos
<Button size="xl">Extra Large</Button>
<Button size="lg">Large</Button>
<Button size="default">Medium</Button>
<Button size="sm">Small</Button>

// Com ícone
<Button><Plus />Adicionar</Button>
<Button>Adicionar<Plus /></Button>

// Ícone isolado
<Button size="icon"><Plus /></Button>
<Button variant="ghost" size="icon-sm"><Plus /></Button>

// Desabilitado
<Button disabled>Indisponível</Button>`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
              Props
            </h2>
            <div className="mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-bold text-lg text-gray-700 w-32">Prop</th>
                    <th className="text-left px-4 py-3 font-bold text-lg text-gray-700 w-56">Valores</th>
                    <th className="text-left px-4 py-3 font-bold text-lg text-gray-700">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-mono text-sm text-gray-900 align-top">variant</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-500 align-top">default · outline · ghost · link · destructive</td>
                    <td className="px-4 py-3 text-gray-600 leading-relaxed">Define a hierarquia visual do botão. O padrão é <code className="px-1 bg-gray-100 rounded text-xs">default</code> (primário).</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-mono text-sm text-gray-900 align-top">size</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-500 align-top">xl · lg · default · sm · icon · icon-lg · icon-sm · icon-xl · icon-link · icon-link-lg · icon-link-sm · icon-link-xl</td>
                    <td className="px-4 py-3 text-gray-600 leading-relaxed">Controla altura e espaçamento. Tamanhos <code className="px-1 bg-gray-100 rounded text-xs">icon-*</code> são quadrados (somente ícone).</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-mono text-sm text-gray-900 align-top">disabled</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-500 align-top">boolean</td>
                    <td className="px-4 py-3 text-gray-600 leading-relaxed">Desabilita o botão e bloqueia interação com o ponteiro.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-sm text-gray-900 align-top">asChild</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-500 align-top">boolean</td>
                    <td className="px-4 py-3 text-gray-600 leading-relaxed">Delega a renderização para o filho usando o padrão Radix <code className="px-1 bg-gray-100 rounded text-xs">Slot</code>. Útil para usar o estilo de botão em links (<code className="px-1 bg-gray-100 rounded text-xs">&lt;a&gt;</code>).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {page !== 'buttons' && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
              Como Usar
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para personalizar esta página, edite o arquivo JSON correspondente em{' '}
              <code className="px-2 py-1 bg-gray-100 rounded text-sm">/src/app/data/docsContent.json</code>
            </p>

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
          </>
        )}
      </div>
    </article>
  );
}