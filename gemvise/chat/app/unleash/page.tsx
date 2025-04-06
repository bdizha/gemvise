'use client';

import Section from '@/components/layout/Section';
import type { SectionVariant } from '@/components/layout/Section/types';

const creationTools = [
  {
    title: 'Core Identity',
    description: 'Define your character\'s fundamental traits, background, expertise, and unique voice.'
  },
  {
    title: 'Knowledge Base',
    description: 'Equip your character with specific knowledge domains and areas of expertise.'
  },
  {
    title: 'Interaction Style',
    description: 'Fine-tune how your character communicates, from formal to casual, serious to playful.'
  },
  {
    title: 'Memory System',
    description: 'Enable your character to remember past interactions and build meaningful relationships.'
  }
];

const advancedFeatures = [
  {
    title: 'AI Integration',
    description: 'Powered by state-of-the-art language models for natural, engaging conversations.'
  },
  {
    title: 'Blockchain Rewards',
    description: 'Earn tokens as your character gains popularity and engagement.'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track performance, engagement metrics, and earnings in real-time.'
  },
  {
    title: 'Community Features',
    description: 'Share your character, gather feedback, and collaborate with other creators.'
  }
];

export default function UnleashPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section
        variant={"gradient" as SectionVariant}
        tag="Create & Earn"
        title="Unleash Your Creative Potential"
        description="Turn your imagination into interactive experiences with GemVise's powerful character creation tools. Plus, learn how your creations can participate in our unique blockchain-powered reward system."
      >
        <div className="flex justify-center mt-8">
          <button className="bg-button-primary text-background hover:bg-button-primary-hover px-8 py-3 rounded-md">
            Start Creating
          </button>
        </div>
      </Section>

      {/* Creation Tools Section */}
      <Section
        variant={"values" as SectionVariant}
        tag="Creation Tools"
        title="Build Your Character"
        description="Our intuitive tools make it easy to bring your vision to life"
        values={creationTools}
      >
        {null}
      </Section>

      {/* Advanced Features Section */}
      <Section
        variant={"values" as SectionVariant}
        tag="Advanced Features"
        title="Powerful Technology"
        description="State-of-the-art tools to make your characters truly come alive"
        values={advancedFeatures}
      >
        {null}
      </Section>

      {/* Testing Section */}
      <Section
        variant={"gradient" as SectionVariant}
        tag="Test & Refine"
        title="Perfect Your Creation"
        description="Interact with your character in our testing environment to ensure they behave exactly as you envision. Get instant feedback and make adjustments in real-time."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 rounded-lg bg-stone-50/50 dark:bg-stone-900/50">
            <h3 className="text-xl font-semibold mb-4">Interactive Testing</h3>
            <ul className="space-y-3 text-grey-600 dark:text-grey-400">
              <li>• Real-time conversation preview</li>
              <li>• Personality consistency checks</li>
              <li>• Knowledge base verification</li>
              <li>• Response style validation</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-stone-50/50 dark:bg-stone-900/50">
            <h3 className="text-xl font-semibold mb-4">Quality Metrics</h3>
            <ul className="space-y-3 text-grey-600 dark:text-grey-400">
              <li>• Engagement scoring</li>
              <li>• Response accuracy</li>
              <li>• Character consistency</li>
              <li>• User satisfaction rating</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        variant={"default" as SectionVariant}
        tag="Ready?"
        title="Start Your Creative Journey"
        description="Join our community of creators and start building unique AI experiences that reward your creativity."
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
