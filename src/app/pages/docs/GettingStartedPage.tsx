import { DocsContent } from '../../components/docs/DocsContent';
import docsContent from '../../data/docsContent.json';

export default function GettingStartedPage() {
  return (
    <DocsContent
      title={docsContent['getting-started'].title}
      description={docsContent['getting-started'].description}
      content={docsContent['getting-started'].content as any}
    />
  );
}
