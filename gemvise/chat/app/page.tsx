'use client';

import { type FC } from 'react';
import { useRouter } from 'next/navigation';
import { type Gem } from '@/types/gems';
import GemCard from '@/components/gems/GemCard';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { GradientSection, DefaultSection } from '@/components/layout/Section';
import Card from '@/components/ui/Card';

const mockGems: Gem[] = [
  {
    id: '1',
    name: 'Warren Buffett',
    title: 'Investment Expert',
    description: 'Learn value investing from the Oracle of Omaha',
    category: 'Finance',
    imageUrl: '/experts/warren-buffett.jpg',
    gradient: 'bg-gradient-to-r from-[#ff9900] to-[#ffac31]',
    expertise: ['Value Investing', 'Business Analysis', 'Market Strategy'],
    followers: 1000000,
    chatCount: 50000
  },
  {
    id: '2',
    name: 'Marie Kondo',
    title: 'Organization Expert',
    description: 'Master the art of tidying up and organizing',
    category: 'Lifestyle',
    imageUrl: '/experts/marie-kondo.jpg',
    gradient: 'bg-gradient-to-r from-[#ff9900] to-[#ffac31]',
    expertise: ['Organization', 'Minimalism', 'Home Design'],
    followers: 500000,
    chatCount: 25000
  },
  {
    id: '3',
    name: 'Gordon Ramsay',
    title: 'Celebrity Chef',
    description: 'Master the art of cooking with a world-renowned chef.',
    category: 'Cooking',
    imageUrl: '/gradients/mobile/GV-Gradient-03.png',
    gradient: 'bg-gradient-to-r from-[#ff9900] to-[#ffac31]',
    expertise: ['Culinary Arts', 'Restaurant Management', 'Food Critique'],
    followers: 750000,
    chatCount: 35000
  }
];

const Page: FC = () => {
  const router = useRouter();

  const handleGemClick = (gemId: string) => {
    router.push(`/chat/${gemId}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#232f3e] to-[#0f1111]">
      {/* Hero Section with Video Background */}
      <section className="relative flex justify-center items-center min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
            src="https://d1.awsstatic.com/hero-video/hero-video-bg.mp4"
          >
            <source src="https://d1.awsstatic.com/hero-video/hero-video-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">
            Meaningful Conversations with AI Experts
          </h1>
          <p className="text-xl text-white mb-8">
            Connect with AI versions of real experts, thought leaders, and creators for personalized insights
          </p>
          <Button 
            variant="primary"
            size="lg"
            className="bg-[#ff9900] hover:bg-[#ff9900]/90 text-[#0f1111]"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <GradientSection className="py-20 bg-gradient-to-r from-[#232f3e] to-[#3f4b58]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose GemVise?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Insights',
                description: 'Access deep domain expertise from real-world experts in various fields',
                image: '/images/expert-insights.jpg'
              },
              {
                title: 'Interactive Learning',
                description: 'Engage in meaningful conversations that adapt to your interests',
                image: '/images/interactive-learning.jpg'
              },
              {
                title: 'Diverse Expertise',
                description: 'Connect with thought leaders across multiple disciplines',
                image: '/images/diverse-expertise.jpg'
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-md border border-[#d5d9d9] hover:border-[#ff9900] transition-all"
              >
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={225}
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-[#d5d9d9]">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </GradientSection>

      {/* Featured Gems Section */}
      <DefaultSection className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6 text-[#0f1111] dark:text-white">Featured Gems</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockGems.map((gem) => (
              <GemCard
                key={gem.id}
                gem={gem}
                onClick={() => handleGemClick(gem.id)}
              />
            ))}
          </div>
        </div>
      </DefaultSection>

      {/* CTA Section */}
      <DefaultSection className="py-20 bg-[#232f3e]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-[#d5d9d9] mb-8">
            Join our community of learners and engage with AI experts today
          </p>
          <Button 
            variant="primary"
            size="lg"
            className="bg-[#ff9900] hover:bg-[#ff9900]/90 text-[#0f1111]"
          >
            Sign Up Now
          </Button>
        </div>
      </DefaultSection>
    </main>
  );
};

export default Page;
