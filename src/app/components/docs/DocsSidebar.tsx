import { Link, useLocation } from 'react-router';
import { ChevronDown, ChevronRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useState } from 'react';
import docsConfig from '../../data/docsConfig.json';

interface NavItem {
  title: string;
  path?: string;
  icon?: string;
  items?: { title: string; path: string }[];
}

export function DocsSidebar() {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>(['Guias', 'API Reference', 'Componentes', 'Exemplos']);

  const toggleSection = (title: string) => {
    setOpenSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const renderNavItem = (item: NavItem, index: number) => {
    const Icon = item.icon ? (LucideIcons as any)[item.icon] || LucideIcons.Circle : null;
    const hasChildren = item.items && item.items.length > 0;
    const isOpen = openSections.includes(item.title);

    if (!hasChildren && item.path) {
      return (
        <Link
          key={index}
          to={item.path}
          className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
            isActive(item.path)
              ? 'bg-blue-50 text-blue-600 font-medium'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {Icon && <Icon size={18} />}
          <span>{item.title}</span>
        </Link>
      );
    }

    if (hasChildren) {
      return (
        <div key={index} className="space-y-1">
          <button
            onClick={() => toggleSection(item.title)}
            className="w-full flex items-center justify-between px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3">
              {Icon && <Icon size={18} />}
              <span className="font-medium">{item.title}</span>
            </div>
            {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>

          {isOpen && (
            <div className="ml-7 space-y-1 mt-1">
              {item.items!.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  to={subItem.path}
                  className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                    isActive(subItem.path)
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <aside className="w-64 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto border-r border-gray-200 bg-white">
      <nav className="p-4 space-y-2">
        {docsConfig.navigation.map((item, index) => renderNavItem(item, index))}
      </nav>
    </aside>
  );
}
