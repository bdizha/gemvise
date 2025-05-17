'use client';

import { researchPapers } from '@/data/research-papers';
import ResearchCard from '@/components/research/ResearchCard';
import Section from '@/components/layout/Section';

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Section
        variant="gradient"
        tag="GemLabs"
        title="Research & Engineering"
        description="Explore our technical publications on AI architecture, high-performance computing, and the foundations of the Gemium."
      >
        {/* This section will now only be for the header/description */}
      </Section>

      {/* New Section for the research papers list */}
      <Section 
        variant="transparent" // Or 'default' if padding/background is desired
        className="py-8 md:py-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {researchPapers.map((paper) => (
              <ResearchCard key={paper.id} paper={paper} />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
