import { Link } from 'react-router';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import docsConfig from '../../data/docsConfig.json';

export function DocsHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/docs" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">{docsConfig.logo.charAt(0)}</span>
            </div>
            <div>
              <div className="font-bold text-gray-900">{docsConfig.siteName}</div>
              <div className="text-xs text-gray-500">{docsConfig.tagline}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <button className="flex items-center gap-2 px-4 py-2 w-96 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
              <Search size={18} />
              <span className="text-sm">Buscar...</span>
            </button>

            {/* Version */}
            <select className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 border-none focus:ring-2 focus:ring-blue-600">
              {docsConfig.versions.map((version, index) => (
                <option key={index} value={version.path}>
                  {version.label}
                </option>
              ))}
            </select>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-3">
              <button className="w-full flex items-center gap-2 px-8 py-2 bg-gray-100 rounded-lg text-gray-600">
                <Search size={18} />
                <span className="text-sm">Buscar documentação...</span>
              </button>
              <select className="w-full px-3 py-2 bg-gray-100 rounded-lg text-sm">
                {docsConfig.versions.map((version, index) => (
                  <option key={index}>{version.label}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
