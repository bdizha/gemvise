'use client';

import Section from '@/components/layout/Section';
import type { SectionVariant } from '@/components/layout/Section/types';

const createSteps = [
  {
    title: "Design Your Character",
    description: "Define your character's personality, backstory, knowledge base, and unique traits. Our advanced AI system will bring them to life with consistent behavior and engaging responses."
  },
  {
    title: "Train & Test",
    description: "Interact with your character to refine their responses and ensure they behave exactly as you envision. Our tools make it easy to adjust and perfect their personality."
  },
  {
    title: "Share & Earn",
    description: "Release your character to the GemVise community. As others engage with your creation, you'll earn rewards through our blockchain-based creator economy."
  },
  {
    title: "Evolve & Grow",
    description: "Watch your character evolve through interactions, gather feedback, and continuously enhance their capabilities. Soon, they'll be ready for the immersive GemVerse."
  }
];

export default function CreatePage() {
  return (
    <main>
      {/* Hero Section */}
      <Section
        variant="gradient" 
        tag="Create on GemVise"
        title="Build Characters That Matter"
        description="Turn your imagination into interactive experiences. Create unique AI characters that engage, inspire, and reward you for your creativity."
      >
        <div className="flex justify-center mt-8">
          <button className="bg-button-primary text-background hover:bg-button-primary-hover px-8 py-3 rounded-md">
            Start Creating
          </button>
        </div>
      </Section>

      {/* Steps Section */}
      <Section
        variant={"values" as SectionVariant}
        tag="How It Works"
        title="Your Journey to Creation"
        description="Follow these steps to bring your character to life and start earning from your creativity."
        values={createSteps}
      >
        {null}
      </Section>

      {/* Features Section */}
      <Section
        variant="gradient"
        tag="Creator Tools"
        title="Everything You Need"
        description="Our platform provides powerful tools to help you create compelling characters:"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 rounded-lg bg-stone-50/50 dark:bg-stone-900/50">
            <h3 className="text-xl font-semibold mb-4">Advanced AI Integration</h3>
            <ul className="space-y-3 text-grey-600 dark:text-grey-400">
              <li>• State-of-the-art language models</li>
              <li>• Personality consistency system</li>
              <li>• Dynamic response generation</li>
              <li>• Memory and context awareness</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-stone-50/50 dark:bg-stone-900/50">
            <h3 className="text-xl font-semibold mb-4">Creator Dashboard</h3>
            <ul className="space-y-3 text-grey-600 dark:text-grey-400">
              <li>• Character performance metrics</li>
              <li>• Engagement analytics</li>
              <li>• Reward tracking</li>
              <li>• Community feedback system</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Blockchain Section */}
      <Section
        variant="default"
        tag="Creator Economy"
        title="Own Your Success"
        description="GemVise uses blockchain technology to ensure creators are fairly rewarded for their contributions. Your success is tracked transparently, and rewards are distributed automatically based on:"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-lg bg-stone-50/50 dark:bg-stone-900/50">
            <h3 className="text-xl font-semibold mb-2">Engagement</h3>
            <p className="text-grey-600 dark:text-grey-400">
              Earn based on how much users interact with your characters
            </p>
          </div>
          <div className="p-6 rounded-lg bg-stone-50/50 dark:bg-stone-900/50">
            <h3 className="text-xl font-semibold mb-2">Popularity</h3>
            <p className="text-grey-600 dark:text-grey-400">
              Receive rewards as your characters gain followers and recognition
            </p>
          </div>
          <div className="p-6 rounded-lg bg-stone-50/50 dark:bg-stone-900/50">
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-grey-600 dark:text-grey-400">
              Get bonuses for consistently high user ratings and feedback
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        variant="gradient"
        tag="Ready?"
        title="Start Your Creative Journey"
        description="Join our community of creators and build the next generation of interactive experiences."
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="bg-button-primary text-background hover:bg-button-primary-hover px-8 py-3 rounded-md">
            Create Your First Character
          </button>
          <a href="/docs" className="text-primary hover:text-primary-hover px-8 py-3">
            Read the Documentation
          </a>
        </div>
      </Section>
    </main>
  );
}
