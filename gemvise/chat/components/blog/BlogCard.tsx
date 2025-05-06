import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/data/blog-posts';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="flex flex-col space-y-4">
        {post.imageUrl && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-stone-100 dark:bg-stone-900">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex flex-col space-y-2">
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
          <h2 className="text-xl font-semibold tracking-tight text-stone-800 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
            {post.title}
          </h2>
          <p className="text-stone-600 dark:text-stone-400 line-clamp-2">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag) => (
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
