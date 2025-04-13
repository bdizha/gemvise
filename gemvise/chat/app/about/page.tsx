'use client';

import * as React from 'react';
import Section from '@/components/layout/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const values = [
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
    <main className="min-h-screen bg-gradient-to-b from-[#232f3e] to-[#0f1111]">
      {/* Story Section */}
      <Section
        variant="gradient"
        className="py-20"
        tag="Our Story"
        title="Shaping the Next Era of Interaction, Creativity, and Ownership"
        description="GemVise is pioneering a new frontier where imagination meets technology, empowering creators to build and own unique AI experiences."
      />

      {/* Vision Section */}
      <Section
        variant="default"
        className="py-20"
        tag="Our Vision"
        title="Beyond Chat: Building the GemVerse"
        description="We're creating more than just a platform - we're building a future where digital creation has tangible value. Our vision extends to the GemVerse, an immersive virtual world where AI companions come to life in ways never before possible."
      />

      {/* Values Section */}
      <Section
        variant="values"
        className="py-20"
        tag="Our Values"
        title="What Drives Us Forward"
        description="We believe in a future where creativity is recognized, rewarded, and brought to life through cutting-edge technology."
        values={values}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-md border border-[#d5d9d9] hover:border-[#ff9900] transition-all p-6"
            >
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-[#d5d9d9]">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section
        variant="gradient"
        className="py-20"
        tag="Join Our Team"
        title="Shape the Future With Us"
        description="We're looking for passionate innovators who want to push the boundaries of AI interaction, blockchain integration, and virtual world development."
      >
        <div className="flex justify-center mt-8">
          <Button 
            variant="primary"
            size="lg"
            className="bg-[#ff9900] hover:bg-[#ff9900]/90 text-[#0f1111]"
            onClick={() => window.location.href = '/careers'}
          >
            View Open Positions
          </Button>
        </div>
      </Section>

      {/* Location Section */}
      <Section
        variant="gradient"
        className="py-20"
        tag="Our Location"
        title="Silicon Valley & Beyond"
        description="Headquartered in the heart of innovation, with a distributed team of experts working globally to bring the GemVerse to life."
      />

      {/* Contact Section */}
      <Section
        variant="default"
        className="py-20"
        tag="Connect With Us"
        title="Join Our Community"
        description="Be part of a passionate community of creators, storytellers, and explorers shaping the future of interactive entertainment."
      >
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://discord.gg/gemvise" className="text-[#d5d9d9] hover:text-[#ff9900] transition-colors">Discord</a>
          <span className="text-[#5f6b7a]">•</span>
          <a href="https://twitter.com/gemvise" className="text-[#d5d9d9] hover:text-[#ff9900] transition-colors">Twitter</a>
          <span className="text-[#5f6b7a]">•</span>
          <a href="mailto:hello@gemvise.com" className="text-[#d5d9d9] hover:text-[#ff9900] transition-colors">Email</a>
        </div>
      </Section>
    </main>
  );
}
