import { useParams } from 'react-router';
import { DocsContent } from '../../components/docs/DocsContent';
import stylesContent from '../../data/stylesContent.json';

type StylesSection = keyof typeof stylesContent;

export default function StylesPage() {
  const { page } = useParams<{ page?: string }>();
  const key = (page ?? 'overview') as StylesSection;
  const section = stylesContent[key] ?? stylesContent.overview;

  return (
    <DocsContent
      title={section.title}
      description={section.description}
      content={section.content as any}
    />
  );
}
