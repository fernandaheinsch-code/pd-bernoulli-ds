import { createBrowserRouter } from 'react-router';
import { DocsLayout } from './components/docs/DocsLayout';
import HomePage from './pages/HomePage';
import IntroducaoPage from './pages/docs/IntroducaoPage';
import GettingStartedPage from './pages/docs/GettingStartedPage';
import FAQPage from './pages/docs/FAQPage';
import GenericDocPage from './pages/docs/GenericDocPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
    ],
  },
]);