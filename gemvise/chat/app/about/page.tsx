'use client';

import { type FC } from 'react';
import Section from '@/components/layout/Section'; 
import Button from '@/components/ui/Button';

const AboutPage: FC = () => {
  return (
    <main className="flex flex-col gap-24">
      {/* Story Section - Hero Style Gradient */}
      <Section
        variant="hero" 
        title="Dreams meet Reality"
        description="Crafting the future of entertainment. Bringing imagination to life through interactive AI personas, community collaboration, and creator empowerment."
        gradient="dark" 
        className="py-12 md:py-16"
      />

      {/* Our Story Section - Text Focused */}
      <Section
        title="Our Story"
        description="GemVise started with a simple idea: what if stories could be as dynamic and evolving as the communities that love them? We envisioned a platform where creators could launch entire universes and fans could co-create narratives, characters, and adventures. From that spark, GemVise was born – a place to build, explore, and own the next generation of interactive entertainment."
        variant="centered" 
        className="py-12 md:py-16"
      />

      {/* Our Company Values Section */}
      <Section
        title="Our Core Values"
        variant="default" 
        gradient="dark"
        className="py-12 md:py-16"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
            {/* Dream Value */}
            <div className="p-6 rounded-3xl shadow-xl bg-gradient-purple-pink text-white">
              <h3 className="text-2xl font-bold text-white mb-3">Dream</h3>
              <p className="text-white/80 leading-relaxed">
                To spark the imagination.
              </p>
            </div>
            {/* Create Value */}
            <div className="p-6 rounded-3xl shadow-xl bg-gradient-cyan-blue text-white">
              <h3 className="text-2xl font-bold text-white mb-3">Create</h3>
              <p className="text-white/80 leading-relaxed">
                To empower you with the tools to bring any vision to life – from sprawling worlds and unforgettable characters to intricate adventures and unique digital gems, fostering a universe of collaborative storytelling.
              </p>
            </div>
            {/* Delight Value */}
            <div className="p-6 rounded-3xl shadow-xl bg-gradient-pink-orange text-white">
              <h3 className="text-2xl font-bold text-white mb-3">Delight</h3>
              <p className="text-white/80 leading-relaxed">
                To deliver captivating interactive experiences where every choice unfolds new possibilities, igniting curiosity and offering endless joy through exploration and shared narrative adventures.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Mission Section (Text Left, Image Right) - Using Children for custom layout */}
      <Section
        className="py-12 md:py-16"
        gradient="dark"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 md:px-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-tight">
              To empower creators and fans to collaboratively build and own the future of storytelling through unique digital collectibles and interactive experiences.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
              alt="Team collaborating on ideas"
              className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[400px] md:max-h-[500px]"
            />
          </div>
        </div>
      </Section>

      {/* Our Vision Section (Image Left, Text Right) - Using Children */}
      <Section
        className="py-12 md:py-16"
        gradient="dark"
      >
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 px-4 md:px-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-tight">
              To be the leading platform where creativity knows no bounds, fostering a vibrant ecosystem of shared narratives and digital ownership.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Digital world illustration"
              className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[400px] md:max-h-[500px]"
            />
          </div>
        </div>
      </Section>

      {/* Team Section - Updated Gradient and Styles */}
      <Section
        variant="centered"
        tag="Join Our Team"
        title="Shape the Future With Us"
        description="We're looking for passionate innovators who want to push the boundaries of AI interaction, blockchain integration, and virtual world development."
        gradient="dark" 
        className="py-12 md:py-16 text-white"
      >
        <div className="flex justify-center mt-8">
          <Button 
            variant="primary"
            size="lg"
            onClick={() => window.location.href = '/careers'} 
            className="bg-white text-purple-600 hover:bg-gray-200 font-semibold"
          >
            View Open Positions
          </Button>
        </div>
      </Section>

      {/* Location Section - Updated Gradient and Styles */}
      <Section
        variant="centered"
        tag="Our Location"
        title="Silicon Valley & Beyond"
        description="Headquartered in the heart of innovation, with a distributed team of experts working globally to bring GemVise to life."
        gradient="dark-light" 
        className="py-12 md:py-16 text-white"
      />

      {/* Future Section / Join Us - Updated Gradient and Styles */}
      <Section
        variant="centered"
        tag="Get Involved"
        title="Join Us in Building Tomorrow"
        description="The future of digital interaction is being shaped right now. Be part of this revolutionary journey as we create new possibilities for connection, creativity, and commerce."
        gradient="light" 
        className="py-12 md:py-16 text-neutral-800"
      >
        <div className="flex justify-center gap-4 sm:gap-6 mt-8">
          <a href="https://discord.gg/Gemium" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-neutral-900 transition-colors font-medium">
            Discord
          </a>
          <span className="text-neutral-500">•</span>
          <a href="https://twitter.com/Gemium" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-neutral-900 transition-colors font-medium">
            Twitter
          </a>
          <span className="text-neutral-500">•</span>
          <a href="mailto:hello@Gemium.com" className="text-neutral-700 hover:text-neutral-900 transition-colors font-medium">
            Email Us
          </a>
        </div>
      </Section>
    </main>
  );
};

export default AboutPage;
