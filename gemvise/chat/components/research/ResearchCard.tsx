import Link from 'next/link';
import Image from 'next/image';
import type { ResearchPaper } from '@/data/research-papers';

export default function ResearchCard({ paper }: { paper: ResearchPaper }) {
  return (
    <Link href={`/research/${paper.slug}`} className="group">
      <article className="flex flex-col space-y-4">
        {paper.imageUrl && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-stone-100 dark:bg-stone-900">
            <Image
              src={paper.imageUrl}
              alt={paper.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex flex-col space-y-2">
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
          </div>
          {paper.series && (
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-stone-600 dark:text-stone-300">
                {paper.series.name}
              </span>
              <span className="text-stone-300 dark:text-stone-600">•</span>
              <span className="text-sm text-stone-500 dark:text-stone-400">
                Part {paper.series.part} of {paper.series.totalParts}
              </span>
            </div>
          )}
          <h2 className="text-xl font-semibold tracking-tight text-stone-800 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
            {paper.title}
          </h2>
          <p className="text-stone-600 dark:text-stone-400 line-clamp-2">{paper.excerpt}</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-stone-500 dark:text-stone-400">{paper.author}</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {paper.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
