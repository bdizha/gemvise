'use client';

import { type FC } from 'react';
import Section, { type SectionVariant } from '@/components/layout/Section';
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
      {/* Story Section - Hero Style Gradient */}
      <Section
        variant="default"
        tag="About Gemium"
        title="Dreams meet Reality"
        description="Crafting the future of entertainment. Bringing imagination to life through interactive AI personas, community collaboration, and creator empowerment."
        className="py-20 text-center bg-gradient-light-dark-"
      />
      {/* Story Section - Dark Theme for contrast */}
      <Section
        variant="default"
        gradient="dark"
        tag="Our Mission"
        title="Spark the human imagination"
        description="Gemium is pioneering a new frontier where imagination meets technology. By seamlessly blending human creativity with AI responsiveness, we're empowering creators to build, own, and evolve unique AI experiences that adapt and grow with every conversation."
        className="py-20 text-center"
      />

      {/* Vision Section - Dynamic Gradient inspired by Carousel */}
      <Section
        variant="default"
        tag="Our Vision"
        title="Build the future of possibilities"
        description="We're creating more than just a platform - we're building a future where digital creation has tangible value. Our vision extends to the Gemium, an immersive virtual world where AI companions come to life in ways never before possible."
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #5785f2 0%, #de5159 100%)', color: 'white' }}
      />

      {/* Values Section - Contrasting Gradient */}
      <Section
        variant="values"
        tag="Our Values"
        title="Making sense. Making value"
        description="At Gemium, our values shape everything we do. They guide our decisions, inspire our innovations, and define our relationships with creators and users."
        values={values}
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #11EDBA 0%, #AABEFF 100%)', color: '#141925' }}
      />

      {/* Team Section - Engaging Gradient */}
      <Section
        variant="default"
        tag="Join Our Team"
        title="Shape the Future With Us"
        description="We're looking for passionate innovators who want to push the boundaries of AI interaction, blockchain integration, and virtual world development."
        className="py-20 text-center"
        style={{ background: 'linear-gradient(135deg, #C484FF 0%, #b879c7 100%)', color: 'white' }}
      >
        <div className="flex justify-center mt-8">
          <Button 
            variant="primary"
            size="lg"
            onClick={() => window.location.href = '/careers'}
            className="bg-white text-[#8A2BE2] hover:bg-gray-200 font-semibold"
          >
            View Open Positions
          </Button>
        </div>
      </Section>

      {/* Location Section - Subtle Gradient */}
      <Section
        variant="default"
        tag="Our Location"
        title="Silicon Valley & Beyond"
        description="Headquartered in the heart of innovation, with a distributed team of experts working globally to bring the Gemium to life."
        className="py-20 text-center"
        style={{ background: 'linear-gradient(135deg, #232f3e 0%, #3f4b58 100%)', color: 'white' }}
      />

      {/* Future Section - Final CTA Gradient */}
      <Section
        variant="default"
        tag="The Future"
        title="Join Us in Building Tomorrow"
        description="The future of digital interaction is being shaped right now. Be part of this revolutionary journey as we create new possibilities for connection, creativity, and commerce."
        className="py-20 text-center"
        style={{ background: 'linear-gradient(135deg, #d15e7e 0%, #FFC55A 100%)', color: '#141925' }}
      >
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://discord.gg/Gemium" className="text-[#141925]/80 hover:text-[#141925] transition-colors font-medium">Discord</a>
          <span className="text-[#141925]/50">•</span>
          <a href="https://twitter.com/Gemium" className="text-[#141925]/80 hover:text-[#141925] transition-colors font-medium">Twitter</a>
          <span className="text-[#141925]/50">•</span>
          <a href="mailto:hello@Gemium.com" className="text-[#141925]/80 hover:text-[#141925] transition-colors font-medium">Email</a>
        </div>
      </Section>
    </main>
  );
};

export default AboutPage;
