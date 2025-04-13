'use client';

import GemCard from './GemCard';
import Image from 'next/image';

interface Gem {
  id: string;
  name: string;
  expertise: string[];
  imageUrl: string;
  description: string;
}

interface GemListProps {
  gems: Gem[];
  onSelect?: (gemId: string) => void;
  showHeader?: boolean;
  title?: string;
}

const featuredGems = [
  {
    id: 'einstein',
    name: 'Albert Einstein',
    expertise: ['Physics', 'Mathematics', 'Philosophy'],
    imageUrl: '/shapes/GV-SHAPE.png',
    description: 'Revolutionary physicist who reshaped our understanding of space, time, and the universe. Explore profound insights and scientific breakthroughs!'
  },
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    expertise: ['Electrical Engineering', 'Innovation', 'Energy'],
    imageUrl: '/shapes/GV-SHAPE.png',
    description: 'Brilliant inventor who illuminated the world with AC power. Discuss innovation, energy, and the future of technology!'
  },
  {
    id: 'curie',
    name: 'Marie Curie',
    expertise: ['Chemistry', 'Physics', 'Research'],
    imageUrl: '/shapes/GV-SHAPE.png',
    description: 'Pioneer in radioactivity research, first woman to win a Nobel Prize. Explore persistence, discovery, and scientific excellence!'
  },
  {
    id: 'da-vinci',
    name: 'Leonardo da Vinci',
    expertise: ['Art', 'Engineering', 'Anatomy'],
    imageUrl: '/shapes/GV-SHAPE.png',
    description: 'Renaissance polymath spanning art and science. Delve into creativity, innovation, and multidisciplinary mastery!'
  },
  {
    id: 'turing',
    name: 'Alan Turing',
    expertise: ['Computer Science', 'Mathematics', 'Cryptography'],
    imageUrl: '/shapes/GV-SHAPE.png',
    description: 'Father of computer science and artificial intelligence, played a pivotal role in breaking the Enigma code.'
  },
  {
    id: 'hawking',
    name: 'Stephen Hawking',
    expertise: ['Cosmology', 'Physics', 'Black Holes'],
    imageUrl: '/shapes/GV-SHAPE.png',
    description: 'Theoretical physicist who made groundbreaking contributions to our understanding of black holes and the universe.'
  }
];

export default function GemList({ gems = featuredGems, onSelect, showHeader = true, title = "It's great to see you" }: GemListProps) {
  return (
    <section className="sm:pb-20 pb-16" aria-label={title}>
      {showHeader && (
        <h1 className="text-center text-2xl pb-9">{title}</h1>
      )}
      <div className="grid grid-cols-2 gap-4 bp-960:grid-cols-4">
        {/* Featured Gem - Large Card */}
        {gems.length > 0 && (
          <div className="squircle-60 bg-white/45 dark:bg-midnight-350/10 relative relative size-full max-h-128 pb-0.5 text-foreground-800 transition-transform duration-200 ease-in hover:scale-[1.025] col-span-2 row-span-2 aspect-square max-h-discover-card-large !pb-0 isolate will-change-transform" role="button" tabIndex={0} data-testid="daily-briefing-card">
            <div className="relative size-full overflow-hidden">
              <Image 
                alt="" 
                className="absolute z-0 size-full overflow-hidden object-cover blur-[30px]" 
                src={gems[0].imageUrl || "/gradients/mobile/GV-Gradient-06.png"}
                width={600}
                height={600}
              />
              <div className="absolute z-10 size-full bg-black/70"></div>
              <div className="relative z-10 flex size-full flex-col items-center p-6 sm:p-8">
                <div className="relative flex h-12 w-full items-center justify-center min-[360px]:h-24 md:mt-4">
                  <div className="absolute z-10 flex h-[50%] w-[90%] items-center justify-center min-[360px]:h-12">
                    <Image 
                      className="t-wave-mask w-full object-cover blur-[6px] brightness-[500%]" 
                      src={gems[0].imageUrl || "/gradients/mobile/GV-Gradient-06.png"}
                      alt=""
                      width={600}
                      height={600}
                    />
                  </div>
                  <Image 
                    className="z-20 aspect-square min-h-0 max-w-16 shrink-0 object-cover squircle-16 min-[360px]:max-w-24 min-[360px]:squircle-24 md:max-w-28 md:squircle-36" 
                    alt="" 
                    src={gems[0].imageUrl || "/gradients/mobile/GV-Gradient-06.png"}
                    width={600}
                    height={600}
                    draggable="false" 
                    aria-hidden="true" 
                    role="presentation"
                  />
                </div>
                <div className="mt-auto flex w-full flex-col gap-2 text-start text-white">
                  <span className="text-base min-[360px]:text-md">{gems[0].name}</span>
                  <div className="line-clamp-2 text-xs min-[360px]:line-clamp-3 min-[360px]:text-sm">
                    <span>Featured Gem</span>
                    <span className="mx-1">•</span>
                    <span>4 min</span>
                    <span className="ms-2 opacity-70">{gems[0].description}</span>
                  </div>
                </div>
                <div className="mt-2 w-full bg-white fill-foreground-static-800 text-foreground-static-800 min-[360px]:mt-4 justify-center rounded-3xl before:rounded-3xl relative flex items-center text-base min-h-12 min-w-12 px-3 py-2.5 gap-x-3 before:absolute before:inset-0 before:pointer-events-none before:border before:border-transparent before:contrast-more:border-2 outline-2 outline-offset-1 focus-visible:z-[1] focus-visible:outline focus-visible:outline-stroke-900">
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                    <path d="M17.2204 8.68703C18.2558 9.25661 18.2558 10.7434 17.2204 11.313L7.2234 16.812C6.22371 17.362 5 16.6393 5 15.4991L5 4.50093C5 3.36068 6.22371 2.63805 7.2234 3.18795L17.2204 8.68703ZM16.7381 10.4377C17.0833 10.2478 17.0833 9.7522 16.7381 9.56234L6.74113 4.06327C6.4079 3.87997 6 4.12084 6 4.50093L6 15.4991C6 15.8792 6.4079 16.12 6.74114 15.9367L16.7381 10.4377Z" fill="currentColor"></path>
                  </svg>
                  Play now
                </div>
              </div>
            </div>
            <div className="squircle-stroke-60 border-black/8 dark:border-white/8 border-[20px] pointer-events-none absolute inset-0"></div>
          </div>
        )}
        
        {/* Regular Gem Cards */}
        {gems.slice(1).map((gem) => (
          <GemCard
            key={gem.id}
            {...gem}
          />
        ))}
      </div>
    </section>
  );
}

export { featuredGems };
