'use client';

import { researchPapers } from '@/data/research-papers';
import ResearchCard from '@/components/research/ResearchCard';
import Section from '@/components/layout/Section';

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Section
        variant="gradient"
        tag="GemLabs"
        title="Research & Engineering"
        description="Explore our technical publications on AI architecture, high-performance computing, and the foundations of the GemVerse."
      >
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {researchPapers.map((paper) => (
            <ResearchCard key={paper.id} paper={paper} />
          ))}
        </div>
      </Section>
    </main>
  );
}
