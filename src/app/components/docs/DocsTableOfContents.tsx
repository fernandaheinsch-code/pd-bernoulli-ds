import { useEffect, useState } from 'react';

export function DocsTableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Encontrar todos os headings na página
    const headingElements = Array.from(
      document.querySelectorAll('article h2, article h3')
    );

    const headingData = headingElements.map((heading) => ({
      id: heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
      text: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1)),
    }));

    // Adicionar IDs aos headings se não tiverem
    headingElements.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = headingData[index].id;
      }
    });

    setHeadings(headingData);

    // Observer para detectar heading ativo
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    headingElements.forEach((heading) => observer.observe(heading));

    return () => {
      headingElements.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block w-64 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto pl-8 py-8 border-l border-gray-200">
      <div className="space-y-2">
        <div className="text-sm font-semibold text-gray-900 mb-4">Nesta Página</div>
        <nav className="space-y-2">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`block text-sm transition-colors ${
                heading.level === 3 ? 'pl-4' : ''
              } ${
                activeId === heading.id
                  ? 'text-blue-600 font-medium'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
