'use client';

import Section from '@/components/layout/Section';
import type { SectionVariant } from '@/components/layout/Section/types';
import Image from 'next/image';

const benefits = [
  {
    emoji: '🩺',
    title: 'Comprehensive Health Coverage',
    description: 'Top-notch health, dental, and vision insurance for you and your family, with a significant portion of the premium covered by Gemium.'
  },
  {
    emoji: '💰',
    title: 'Invest in Your Future',
    description: 'Generous 401(K) matching program or equivalent regional retirement savings plan.'
  },
  {
    emoji: '🍼',
    title: 'Family Support',
    description: 'Incredible paid parental leave (up to 20 weeks) to support you during important family milestones.'
  },
  {
    emoji: '🌴',
    title: 'Time to Recharge',
    description: 'Ample Paid Time Off (4 weeks PTO) plus flexible work arrangements to maintain work-life balance.'
  }
];

const whyGemium = [
  {
    title: 'Innovate at the Intersection',
    description: 'Tackle unique challenges blending Large Language Models, user experience, blockchain integration, and scalable backend systems.'
  },
  {
    title: 'Empower Creators',
    description: 'Be part of a movement that directly values and rewards digital creativity through transparent blockchain mechanisms.'
  },
  {
    title: 'Shape a New Medium',
    description: 'Contribute to building not just an app, but a foundational platform for future interactive entertainment and virtual world experiences (the Gemium).'
  },
  {
    title: 'Collaborative Culture',
    description: 'Work alongside passionate experts in AI, engineering, design, and community building in a dynamic, fast-paced environment.'
  },
  {
    title: 'Make an Impact',
    description: 'Your work will directly influence how millions interact with AI and how creators are valued in the digital age.'
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section
        variant={"gradient" as SectionVariant}
        title="Build the Future of Interactive Entertainment & Creator Economies"
        description="At Gemium, we're pioneering the next generation of human-computer interaction. We blend cutting-edge AI with the power of blockchain to create not just engaging experiences, but sustainable ecosystems that reward creativity."
      >
        <div className="flex justify-center mt-8">
          <button className="bg-button-primary text-background hover:bg-button-primary-hover px-8 py-3 rounded-md">
            View Open Positions
          </button>
        </div>
      </Section>

      {/* Why Gemium Section */}
      <Section
        variant={"values" as SectionVariant}
        title="Why Gemium?"
        description="Join us in shaping the future of AI interaction and creator economies"
        values={whyGemium}
      />

      {/* Benefits Section */}
      <Section
        title="Perks & Benefits"
        description="We take care of our team so they can focus on building amazing experiences"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card p-6 rounded-lg">
              <div className="text-4xl mb-4">{benefit.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-text-secondary">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Join Us CTA */}
      <Section
        variant={"gradient" as SectionVariant}
        title="Ready to Make an Impact?"
        description="Join our team of innovators, creators, and visionaries building the future of interactive AI experiences."
      >
        <div className="flex justify-center mt-8 space-x-4">
          <button className="bg-button-primary text-background hover:bg-button-primary-hover px-8 py-3 rounded-md">
            View Open Positions
          </button>
          <button className="border border-button-primary text-button-primary hover:bg-button-primary hover:text-background px-8 py-3 rounded-md">
            Learn More About Gemium
          </button>
        </div>
      </Section>
    </main>
  );
}
