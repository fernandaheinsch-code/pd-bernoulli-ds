import { DocsContent } from '../../components/docs/DocsContent';
import docsContent from '../../data/docsContent.json';

export default function IntroducaoPage() {
  return (
    <DocsContent
      title={docsContent.introducao.title}
      description={docsContent.introducao.description}
      content={docsContent.introducao.content as any}
    />
  );
}
