import { useParams } from 'react-router';
import { DocsContent } from '../../components/docs/DocsContent';
import tokensContent from '../../data/tokensContent.json';

type TokensSection = keyof typeof tokensContent;

export default function TokensPage() {
  const { page } = useParams<{ page?: string }>();
  const key = (page ?? 'overview') as TokensSection;
  const section = tokensContent[key] ?? tokensContent.overview;

  return (
    <DocsContent
      title={section.title}
      description={section.description}
      content={section.content as any}
    />
  );
}
