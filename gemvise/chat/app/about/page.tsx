'use client';

import React from 'react';
import Section from '@/components/layout/Section/index';

const values: { title: string; description: string }[] = [
  {
    title: "Innovation",
    description: "Pioneering the future of AI interaction and creator economies through blockchain technology."
  },
  {
    title: "Community",
    description: "Building a vibrant ecosystem where creators, storytellers, and explorers come together to shape the future."
  },
  {
    title: "Transparency",
    description: "Ensuring fair, direct rewards for creators through blockchain-powered engagement tracking."
  },
  {
    title: "Empowerment",
    description: "Giving creators the tools and incentives to bring their imagination to life and earn from their creativity."
  },
  {
    title: "Quality",
    description: "Delivering cutting-edge AI technology with beautiful, intuitive interfaces for seamless interaction."
  },
  {
    title: "Vision",
    description: "Working towards the GemVerse - an immersive virtual world where AI characters truly come alive."
  }
];

export default function AboutPage() {
  return (
    <main>
      {/* Story Section */}
      <Section
        variant="gradient"
        tag="Our Story"
        title="Shaping the Next Era of Interaction, Creativity, and Ownership"
        description="GemVise is pioneering a new frontier where imagination meets technology, empowering creators to build and own unique AI experiences."
      />

      {/* Vision Section */}
      <Section
        variant="default"
        tag="Our Vision"
        title="Beyond Chat: Building the GemVerse"
        description="We're creating more than just a platform - we're building a future where digital creation has tangible value. Our vision extends to the GemVerse, an immersive virtual world where AI companions come to life in ways never before possible."
      />

      {/* Values Section */}
      <Section
        variant="values"
        tag="Our Values"
        title="What Drives Us Forward"
        description="We believe in a future where creativity is recognized, rewarded, and brought to life through cutting-edge technology."
        values={values}
      />

      {/* Team Section */}
      <Section
        variant="gradient"
        tag="Join Our Team"
        title="Shape the Future With Us"
        description="We're looking for passionate innovators who want to push the boundaries of AI interaction, blockchain integration, and virtual world development."
      >
        <div className="flex flex-col items-center mt-8">
          <a href="/careers" className="bg-gradient-to-r from-grey-400 to-grey-900 text-white px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
            View Open Positions
          </a>
        </div>
      </Section>

      {/* Location Section */}
      <Section
        variant="gradient"
        tag="Our Location"
        title="Silicon Valley & Beyond"
        description="Headquartered in the heart of innovation, with a distributed team of experts working globally to bring the GemVerse to life."
      />

      {/* Contact Section */}
      <Section
        variant="default"
        tag="Connect With Us"
        title="Join Our Community"
        description="Be part of a passionate community of creators, storytellers, and explorers shaping the future of interactive entertainment."
      >
        <div className="flex flex-col items-center mt-8">
          <div className="flex gap-4">
            <a href="https://discord.gg/gemvise" className="text-grey-900 dark:text-grey-50 hover:underline">Discord</a>
            <span className="text-grey-400">•</span>
            <a href="https://twitter.com/gemvise" className="text-grey-900 dark:text-grey-50 hover:underline">Twitter</a>
            <span className="text-grey-400">•</span>
            <a href="mailto:hello@gemvise.com" className="text-grey-900 dark:text-grey-50 hover:underline">Email</a>
          </div>
        </div>
      </Section>
    </main>
  );
}
