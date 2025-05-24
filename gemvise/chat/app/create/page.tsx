'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShapeTower from '@/components/shapes/ShapeTower';
import Section from '@/components/layout/Section/Section';
import { Form, FormField, Input, Button } from '@/components/layout/Form';
import { type GridItem } from '@/components/layout/Grid/types';

// Sample images for the carousel
const carouselImages = [
  {
    src: '/icons/GV-LOGO-02-GOT-06.png',
    alt: 'Gemium Quantum State Visualization',
    description: 'Experience advanced quantum state visualization'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-07.png',
    alt: 'Gemium Energy Flow System',
    description: 'Harness the power of energy flow systems'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-08.png',
    alt: 'Gemium Neural Network',
    description: 'Create sophisticated neural networks'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-05.png',
    alt: 'Gemium Data Processing',
    description: 'Process complex data structures efficiently'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-04.png',
    alt: 'Gemium AI Integration',
    description: 'Seamlessly integrate advanced AI capabilities'
  }
];

// Data for new Timeline section
const timelineItems: GridItem[] = [
  {
    id: 'timeline-bold-girls',
    title: 'Bold Girls: Marry a Millionaire',
    description: 'Ready for your first mission, Agent?',
    tag: 'B', 
    href: '/timeline/bold-girls', 
  },
  {
    id: 'timeline-spy-loved-swing',
    title: 'The Spy Who Loved Swing',
    description: 'The casino is crawling with enemy agents tonight, 008.',
    tag: 'T',
    href: '/timeline/spy-loved-swing', 
  },
  {
    id: 'timeline-neon-nights',
    title: 'Neon Nights: Datastreams',
    description: "The city's secrets flow in the datastreams...",
    tag: 'N',
    href: '/timeline/neon-nights', 
  },
];

// Data for new Worlds section
const worldItems: GridItem[] = [
  {
    id: 'world-boldland',
    title: 'BoldLand',
    description: 'Explore the vibrant world of BoldLand.',
    imageUrl: '/icons/worlds/boldland-icon.png', 
    href: '/worlds/boldland', 
  },
  {
    id: 'world-nakai',
    title: 'Nakai',
    description: 'Discover the mysteries of Nakai.',
    imageUrl: '/icons/worlds/nakai-icon.png', 
    href: '/worlds/nakai', 
  },
  {
    id: 'world-naimland',
    title: 'NaimLand',
    description: 'Adventure through the landscapes of NaimLand.',
    imageUrl: '/icons/worlds/naimland-icon.png', 
    href: '/worlds/naimland', 
  },
  {
    id: 'world-spaceum',
    title: 'Spaceum',
    description: 'Journey into the cosmic expanse of Spaceum.',
    imageUrl: '/icons/worlds/spaceum-icon.png', 
    href: '/worlds/spaceum', 
  },
];

export default function CreatePage() {
  const [query, setQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Map carouselImages to GridItem[] format
  const exploreItems: GridItem[] = carouselImages.map((item, index) => ({
    id: `carousel-image-${index}`,
    imageUrl: item.src,
    title: item.alt,
    description: item.description,
    // Assuming no specific href or onClick for these slider items in create page context
  }));

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        {/* Hero Section */}
        <Section
          variant="hero"
          className="text-center"
          title="Create with GemVise"
          description="Create powerful AI gems with advanced capabilities in reasoning, coding, and visual processing. Experience the next generation of AI interaction."
        >
          <div className="mt-8 mb-12 max-w-2xl mx-auto">
            <Form variant="default" className="relative">
              <FormField variant="floating">
                <Input
                  type="text"
                  id="query"
                  placeholder="Describe the gem you want to create... e.g., 'A wise stoic philosopher'"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  variant="filled"
                  size="lg"
                  radius="full"
                  rightIcon={
                    <Button
                      type="submit"
                      variant="primary"
                      size="icon"
                      radius="full"
                      aria-label="Create anything"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                      </svg>
                    </Button>
                  }
                />
              </FormField>
            </Form>
          </div>
        </Section>

        {/* Content Sections */}
        <section className="py-16 sm:py-32">
          <div className="mx-auto w-full px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
            {/* Create powerful AI gems with Gemium Section */}
            <Section
              tag="Create anything"
              title="Create powerful AI gems with Gemium"
              description="Transform your ideas into interactive AI experiences with real-time capabilities and seamless integration."
              variant="default" 
              className="text-center md:text-left"
            />

            {/* Talk with Gems Section */}
            <Section
              tag="Talk with Gems"
              title="Engage in natural conversations"
              description="Experience fluid, contextual dialogue with your AI gems through text or voice interaction."
              variant="default" 
              className="text-center md:text-left"
            />

            {/* Craft Your Unique AI Companions Section */}
            <Section
              title="Craft Your Unique AI Companions"
              description="Visually design and bring to life AI companions tailored to your needs, with unique personalities and expertise."
              variant="transparent"
              className="text-center"
            >
              <div className="mt-8 flex flex-col items-center justify-center gap-6 text-center 
                            lg:mx-auto lg:max-w-[1100px] lg:flex-row lg:gap-12 lg:text-left 
                            overflow-hidden rounded-[6rem] p-8 bg-white/5 backdrop-blur-sm shadow-lg"
                   aria-label="Create your Gem feature"
              >
                <div className="flex w-full flex-col items-center justify-center gap-2 lg:w-1/2 lg:items-start lg:gap-3">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent" id="create-gem-heading">
                    Create your <span className="italic">unique</span> Gem.
                  </h2>
                  <p className="text-md md:text-lg text-muted-foreground" aria-labelledby="create-gem-heading">
                    Design personalized AI experts to guide you with deep domain knowledge and authentic insights.
                  </p>
                </div>
                <div className="relative w-full lg:w-1/2 flex items-center justify-center rounded-[1.5rem] overflow-hidden bg-white/10 backdrop-blur-md shadow-lg">
                    <Image
                          src="/poses/Pose01.png" 
                          alt="Gem creation visual placeholder" 
                          width={1024} 
                          height={1024} 
                          className="h-auto w-full max-w-full rounded-[1.5rem]" 
                        />
                </div>
              </div>
            </Section>

            {/* Timeline Section */}
            <Section
              title="Timeline"
              items={timelineItems}
              variant="grid" 
              className="text-center"
            >
              <Button variant="secondary" size="lg">
                <Link href="/timeline">View All Timeline</Link>
              </Button>
            </Section>

            {/* Worlds Section */}
            <Section
              title="Worlds"
              items={worldItems}
              variant="grid" 
              className="text-center"
            >
              <Button variant="secondary" size="lg">
                <Link href="/worlds">View All Worlds</Link>
              </Button>
            </Section>

            {/* Explore Our Creations Slider Section */}
            <Section 
              variant="slider" 
              className="text-center"
              title="Explore Inspiring Creations"
              description="See what's possible and get inspired by a gallery of AI-generated gems and concepts."
              items={exploreItems}
              sliderTitle="Creations Gallery"
            />
          </div>
        </section>

      </main>
    </div>
  );
}
