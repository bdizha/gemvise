import { blogPosts } from '@/data/blog-posts';
import BlogCard from '@/components/blog/BlogCard';
import Section from '@/components/layout/Section';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Section
        variant="gradient"
        tag="Luminus"
        title="Insights from the Edge of Innovation"
        description="Explore our latest developments, technical deep dives, and vision for the future of AI interaction and the Gemium."
      >
        {/* This section will now only be for the header/description */}
      </Section>

      {/* New Section for the blog posts list */}
      <Section 
        variant="transparent" // Or 'default'
        className="py-8 md:py-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
