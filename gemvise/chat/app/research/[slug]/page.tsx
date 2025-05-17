import { notFound } from 'next/navigation';
import { researchPapers } from '@/data/research-papers';
import Section from '@/components/layout/Section';
import Image from 'next/image';
import Link from 'next/link';

export default function ResearchPaper({ params }: { params: { slug: string } }) {
  const paper = researchPapers.find((p) => p.slug === params.slug);

  if (!paper) {
    notFound();
  }

  // Find the next and previous papers in the series if they exist
  const seriesPapers = paper.series
    ? researchPapers
        .filter((p) => p.series?.name === paper.series?.name)
        .sort((a, b) => (a.series?.part || 0) - (b.series?.part || 0))
    : [];
  
  const currentIndex = seriesPapers.findIndex((p) => p.id === paper.id);
  const prevPaper = currentIndex > 0 ? seriesPapers[currentIndex - 1] : null;
  const nextPaper = currentIndex < seriesPapers.length - 1 ? seriesPapers[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <article>
        <Section
          variant="gradient"
          tag={paper.tags[0]}
          title={paper.title}
          description={paper.excerpt}
        >
          <div className="mt-8 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <time dateTime={paper.date} className="text-sm text-stone-500 dark:text-stone-400">
                {new Date(paper.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <span className="text-stone-300 dark:text-stone-600">•</span>
              <span className="text-sm text-stone-500 dark:text-stone-400">{paper.readingTime}</span>
              <span className="text-stone-300 dark:text-stone-600">•</span>
              <span className="text-sm text-stone-500 dark:text-stone-400">{paper.author}</span>
            </div>
          </div>

          {paper.series && (
            <div className="mt-4 flex items-center space-x-2">
              <span className="text-sm font-medium text-stone-600 dark:text-stone-300">
                {paper.series.name}
              </span>
              <span className="text-stone-300 dark:text-stone-600">•</span>
              <span className="text-sm text-stone-500 dark:text-stone-400">
                Part {paper.series.part} of {paper.series.totalParts}
              </span>
            </div>
          )}
        </Section>

        {paper.imageUrl && (
          <div className="relative mx-auto mt-8 aspect-[21/9] max-w-7xl overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md shadow-lg">
            <Image
              src={paper.imageUrl}
              alt={paper.title}
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        )}

        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="prose prose-stone dark:prose-invert max-w-none">
            {paper.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace('##', '').trim()}
                  </h2>
                );
              }
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              if (paragraph.startsWith('*')) {
                const items = paragraph.split('\n').filter(Boolean);
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 mt-4">
                    {items.map((item, i) => (
                      <li key={i} className="pl-2">
                        {item.replace('* ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('1.')) {
                const items = paragraph.split('\n').filter(Boolean);
                return (
                  <ol key={index} className="list-decimal pl-6 space-y-4 mt-4">
                    {items.map((item, i) => (
                      <li key={i} className="pl-2">
                        {item.replace(/^\d+\.\s+\*\*([^*]+)\*\*:/, '<strong>$1:</strong>')}
                      </li>
                    ))}
                  </ol>
                );
              }
              if (paragraph.startsWith('`')) {
                return (
                  <pre key={index} className="bg-stone-100 dark:bg-stone-900 p-4 rounded-[1.5rem] my-4 overflow-x-auto">
                    <code>{paragraph.replace(/`/g, '')}</code>
                  </pre>
                );
              }
              return (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="mt-16 flex flex-wrap gap-2">
            {paper.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          {(prevPaper || nextPaper) && (
            <nav className="mt-16 grid grid-cols-2 gap-8">
              {prevPaper && (
                <Link
                  href={`/research/${prevPaper.slug}`}
                  className="group flex flex-col space-y-2"
                >
                  <span className="text-sm text-stone-500 dark:text-stone-400">Previous</span>
                  <span className="text-lg font-medium text-stone-800 dark:text-stone-200 group-hover:text-stone-600 dark:group-hover:text-stone-400 transition-colors">
                    {prevPaper.title}
                  </span>
                </Link>
              )}
              {nextPaper && (
                <Link
                  href={`/research/${nextPaper.slug}`}
                  className="group flex flex-col space-y-2 text-right ml-auto"
                >
                  <span className="text-sm text-stone-500 dark:text-stone-400">Next</span>
                  <span className="text-lg font-medium text-stone-800 dark:text-stone-200 group-hover:text-stone-600 dark:group-hover:text-stone-400 transition-colors">
                    {nextPaper.title}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </div>
      </article>
    </main>
  );
}
