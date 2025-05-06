import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog-posts';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <div>
        <Link href="/blog" className="block mb-6 text-secondary hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <div className="mono-tag text-sm mb-6">
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
        <div className="space-y-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-12">
              <h2 className="text-balance text-2xl md:text-4xl lg:text-5xl tracking-tight">
                {post.title}
              </h2>
            </div>
          </div>
        </div>
        <p className="text-neutral-300 mt-6 text-lg max-w-xl">{post.excerpt}</p>
        <hr className="my-12 border-border" />
      </div>
      <div>
        <div className="prose prose-invert max-w-none text-pretty text-primary prose-hr:border-border prose-p:text-primary/85 prose-li:text-primary/85 prose-a:text-primary prose-a:underline prose-headings:font-normal prose-headings:mt-12 prose-h3:mt-10 prose-h4:mt-6 prose-h5:mt-6 prose-h6:mt-6 prose-h1:text-2xl prose-strong:font-medium prose-th:py-2 prose-th:font-medium prose-td:font-normal prose-td:text-primary/85 prose-td:py-2 prose-code:bg-secondary/20 prose-code:inline-block prose-code:before:content-none prose-code:after:content-none prose-code:mx-0.5 prose-code:px-1.5 prose-code:leading-5 prose-code:text-accent prose-code:font-mono prose-code:font-normal prose-a:underline-offset-2">
          {post.content.split('\n\n').map((paragraph, index) => {
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
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
