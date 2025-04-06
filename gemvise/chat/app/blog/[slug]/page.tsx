import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import Section from '@/components/layout/Section';
import Image from 'next/image';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <article>
        <Section
          variant="gradient"
          tag={post.tags[0]}
          title={post.title}
          description={post.excerpt}
        >
          <div className="mt-8 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <time dateTime={post.date} className="text-sm text-stone-500 dark:text-stone-400">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <span className="text-stone-300 dark:text-stone-600">•</span>
              <span className="text-sm text-stone-500 dark:text-stone-400">{post.author}</span>
            </div>
          </div>
        </Section>

        {post.imageUrl && (
          <div className="relative mx-auto mt-8 aspect-[21/9] max-w-7xl overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="prose prose-stone dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace('##', '').trim()}
                  </h2>
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
      </article>
    </main>
  );
}
