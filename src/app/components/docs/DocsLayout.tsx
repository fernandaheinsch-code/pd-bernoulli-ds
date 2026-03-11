import { Outlet } from 'react-router';
import { DocsHeader } from './DocsHeader';
import { DocsSidebar } from './DocsSidebar';
import { DocsTableOfContents } from './DocsTableOfContents';

export function DocsLayout() {
  return (
    <div className="min-h-screen bg-white">
      <DocsHeader />
      
      <div className="max-w-screen-2xl mx-auto flex">
        {/* Sidebar */}
        <DocsSidebar />

        {/* Main Content */}
        <main className="flex-1 px-8 py-8">
          <Outlet />
        </main>

        {/* Table of Contents */}
        <DocsTableOfContents />
      </div>
    </div>
  );
}
