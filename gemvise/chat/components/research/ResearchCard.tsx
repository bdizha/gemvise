import Link from 'next/link';
import Image from 'next/image';
import type { ResearchPaper } from '@/data/research-papers';

const gradientImages = [
  "/gradients/GV-Gradient-01.png",
  "/gradients/GV-Gradient-02.png",
  "/gradients/GV-Gradient-03.png",
  "/gradients/GV-Gradient-05.png",
  "/gradients/GV-Gradient-06.png",
  "/gradients/GV-Gradient-07.png",
  "/gradients/GV-Gradient-08.png",
  "/gradients/GV-Gradient-09.png"
];

export default function ResearchCard({ paper }: { paper: ResearchPaper }) {
  let displayImageUrl = paper.imageUrl;
  if (!displayImageUrl) {
    const fallbackIndex = paper.slug.length % gradientImages.length;
    displayImageUrl = gradientImages[fallbackIndex];
  }

  return (
    <Link href={`/research/${paper.slug}`} className="group">
      <article className="flex flex-col space-y-4 h-full bg-white/5 p-4 rounded-3xl shadow-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-200">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-white/10 backdrop-blur-md shadow-inner">
          <Image
            src={displayImageUrl} 
            alt={paper.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col space-y-2 flex-grow">
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
          <h2 className="text-xl font-semibold tracking-tight text-white group-hover:text-primary transition-colors">
            {paper.title}
          </h2>
          <p className="text-white/80 line-clamp-2 flex-grow">{paper.excerpt}</p>
          <div className="flex items-center space-x-2 pt-2">
            <span className="text-sm text-white/60">{paper.author}</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {paper.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80"
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
