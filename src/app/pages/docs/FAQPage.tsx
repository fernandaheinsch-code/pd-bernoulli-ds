import { DocsContent } from '../../components/docs/DocsContent';
import docsContent from '../../data/docsContent.json';

export default function FAQPage() {
  return (
    <DocsContent
      title={docsContent.faq.title}
      description={docsContent.faq.description}
      content={docsContent.faq.content as any}
    />
  );
}
