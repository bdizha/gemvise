'use client';

import { type FC } from 'react';
import Section from '@/components/layout/Section';
import Button from '@/components/ui/Button';

const values = [
  {
    title: "Authentic Expertise",
    description: "Creating meaningful AI conversations with real experts, thought leaders, and creators that deliver genuine value and insights."
  },
  {
    title: "Interactive Learning",
    description: "Enabling direct, personalized learning through dynamic conversations that adapt to each user's needs and interests."
  },
  {
    title: "Creator Empowerment",
    description: "Providing a platform for experts to share their knowledge and connect with audiences in new, innovative ways through AI."
  }
];

const AboutPage: FC = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Story Section */}
      <Section
        variant="default"
        gradient="dark"
        tag="Our Mission"
        title="Spark the human imagination"
        description="Gemvise is pioneering a new frontier where imagination meets technology. By seamlessly blending human creativity with AI responsiveness, we're empowering creators to build, own, and evolve unique AI experiences that adapt and grow with every conversation."
        className="py-20"
      />

      {/* Vision Section */}
      <Section
        variant="default"
        gradient="purple-pink-purple"
        tag="Our Vision"
        title="Build the future of possibilities"
        description="We're creating more than just a platform - we're building a future where digital creation has tangible value. Our vision extends to the Gemium, an immersive virtual world where AI companions come to life in ways never before possible."
        className="py-20"
      />

      {/* Values Section */}
      <Section
        variant="values"
        gradient="light-dark-light"
        tag="Our Values"
        title="Making sense. Making value"
        description="At Gemvise, our values shape everything we do. They guide our decisions, inspire our innovations, and define our relationships with creators and users."
        values={values}
        className="py-20"
      />

      {/* Team Section */}
      <Section
        variant="gradient"
        tag="Join Our Team"
        title="Shape the Future With Us"
        description="We're looking for passionate innovators who want to push the boundaries of AI interaction, blockchain integration, and virtual world development."
        className="py-20"
      >
        <div className="flex justify-center mt-8">
          <Button 
            variant="primary"
            size="lg"
            onClick={() => window.location.href = '/careers'}
          >
            View Open Positions
          </Button>
        </div>
      </Section>

      {/* Location Section */}
      <Section
        variant="gradient"
        tag="Our Location"
        title="Silicon Valley & Beyond"
        description="Headquartered in the heart of innovation, with a distributed team of experts working globally to bring the Gemium to life."
        className="py-20"
      />

      {/* Future Section */}
      <Section
        variant="default"
        gradient="pink-purple-pink"
        tag="The Future"
        title="Join Us in Building Tomorrow"
        description="The future of digital interaction is being shaped right now. Be part of this revolutionary journey as we create new possibilities for connection, creativity, and commerce."
        className="py-20"
      >
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://discord.gg/Gemvise" className="text-theme-foreground/80 hover:text-theme-foreground transition-colors">Discord</a>
          <span className="text-theme-foreground/50">•</span>
          <a href="https://twitter.com/Gemvise" className="text-theme-foreground/80 hover:text-theme-foreground transition-colors">Twitter</a>
          <span className="text-theme-foreground/50">•</span>
          <a href="mailto:hello@Gemvise.com" className="text-theme-foreground/80 hover:text-theme-foreground transition-colors">Email</a>
        </div>
      </Section>
    </main>
  );
};

export default AboutPage;
