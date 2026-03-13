import { createBrowserRouter, Navigate } from 'react-router';
import { DocsLayout } from './components/docs/DocsLayout';
import IntroducaoPage from './pages/docs/IntroducaoPage';
import GettingStartedPage from './pages/docs/GettingStartedPage';
import FAQPage from './pages/docs/FAQPage';
import GenericDocPage from './pages/docs/GenericDocPage';
import TokensPage from './pages/docs/TokensPage';
import ChangelogPage from './pages/docs/ChangelogPage';
import StylesPage from './pages/docs/StylesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/docs" replace />,
  },
  {
    path: '/docs',
    element: <DocsLayout />,
    children: [
      {
        index: true,
        element: <IntroducaoPage />
      },
      { 
        path: 'introducao', 
        element: <IntroducaoPage /> 
      },
      { 
        path: 'getting-started', 
        element: <GettingStartedPage /> 
      },
      { 
        path: 'faq', 
        element: <FAQPage /> 
      },
      // Rotas genéricas para guias
      { 
        path: 'guias/:page', 
        element: <GenericDocPage /> 
      },
      // Rotas genéricas para API
      { 
        path: 'api/:page', 
        element: <GenericDocPage /> 
      },
      // Rotas genéricas para componentes
      {
        path: 'componentes/:page',
        element: <GenericDocPage />
      },
      // Rotas genéricas para exemplos
      {
        path: 'exemplos/:page',
        element: <GenericDocPage />
      },
      // Tokens (gerados do Figma)
      {
        path: 'tokens',
        element: <TokensPage />,
      },
      {
        path: 'tokens/:page',
        element: <TokensPage />,
      },
      // Styles (estilos extraídos do Figma components)
      {
        path: 'styles',
        element: <StylesPage />,
      },
      {
        path: 'styles/:page',
        element: <StylesPage />,
      },
      // Changelog (gerado do git)
      {
        path: 'changelog',
        element: <ChangelogPage />,
      },
    ],
  },
]);