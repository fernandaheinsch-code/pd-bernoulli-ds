import { Link } from 'react-router';
import { BookOpen, Rocket, Code, Lightbulb, ArrowRight } from 'lucide-react';
import docsConfig from '../data/docsConfig.json';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">{docsConfig.logo.charAt(0)}</span>
              </div>
              <span className="font-bold text-gray-900">{docsConfig.siteName}</span>
            </Link>

            <div className="flex items-center gap-4">
              <Link
                to="/docs/introducao"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Acessar Docs
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Versão {docsConfig.version} - Atualizada
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Documentação<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Completa e Atualizada
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {docsConfig.tagline}. Tudo que você precisa para começar, desenvolver e fazer deploy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/docs/getting-started"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg font-semibold"
            >
              <Rocket size={20} />
              Getting Started
            </Link>
            <Link
              to="/docs/introducao"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 font-semibold"
            >
              <BookOpen size={20} />
              Ler Documentação
            </Link>
          </div>

        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white" style={{ marginTop: '148px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tudo que Você Precisa
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Documentação organizada, exemplos práticos e referências completas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              to="/docs/getting-started"
              className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Rocket className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Start</h3>
              <p className="text-gray-600 mb-4">
                Comece em minutos com nosso guia de início rápido.
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                Começar agora
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/docs/guias/instalacao"
              className="group p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Guias</h3>
              <p className="text-gray-600 mb-4">
                Tutoriais passo a passo para todos os recursos.
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                Ver guias
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/docs/api/endpoints"
              className="group p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">API Reference</h3>
              <p className="text-gray-600 mb-4">
                Documentação completa de todos os endpoints.
              </p>
              <div className="flex items-center text-green-600 font-medium">
                Ver API
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/docs/exemplos/react"
              className="group p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Exemplos</h3>
              <p className="text-gray-600 mb-4">
                Código pronto para usar em seus projetos.
              </p>
              <div className="flex items-center text-orange-600 font-medium">
                Ver exemplos
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="font-bold text-white mb-2">{docsConfig.siteName}</div>
              <p className="text-sm">{docsConfig.footer.copyright}</p>
            </div>

            <div className="flex gap-6">
              {docsConfig.footer.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
