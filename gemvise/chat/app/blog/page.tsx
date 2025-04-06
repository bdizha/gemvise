import { blogPosts } from '@/data/blog-posts';
import BlogCard from '@/components/blog/BlogCard';
import Section from '@/components/layout/Section';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Section
        variant="gradient"
        tag="Luminus"
        title="Insights from the Edge of Innovation"
        description="Explore our latest developments, technical deep dives, and vision for the future of AI interaction and the GemVerse."
      >
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Section>
    </main>
  );
}
