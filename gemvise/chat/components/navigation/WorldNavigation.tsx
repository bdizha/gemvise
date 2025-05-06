import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlobeAltIcon, SparklesIcon, SunIcon } from '@heroicons/react/24/outline';
import { worlds } from '@/data/worlds';

interface WorldNavigationProps {
  className?: string;
}

const worldIcons = {
  nakaland: SparklesIcon,
  boldland: GlobeAltIcon,
  naimland: SunIcon,
  spaceum: GlobeAltIcon,
};

export const WorldNavigation: FC<WorldNavigationProps> = ({ className = '' }) => {
  const pathname = usePathname();

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="px-4 text-sm font-medium text-theme-foreground/60">Worlds</div>
      <div className="space-y-1">
        {worlds.map((world) => {
          const Icon = worldIcons[world.id as keyof typeof worldIcons];
          const href = `/worlds/${world.id}`;
          const isActive = pathname === href;

          return (
            <Link key={world.id} href={href} className="block">
              <button
                className={`flex h-[48px] w-full items-center gap-3 rounded-[4rem] px-4 text-theme-foreground transition-all duration-300 ${
                  isActive
                    ? 'bg-[#333639]/30 hover:bg-[#333639]/60'
                    : 'bg-theme-surface hover:bg-[#333639]/60 focus:outline-none'
                }`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-[1.5rem] bg-theme-surface bg-cover bg-center transition-all duration-300 hover:bg-gradient-pink-purple">
                  <Icon className="h-5 w-5 text-theme-foreground" />
                </span>
                <span className="flex-1 text-left">{world.name}</span>
                <span className="text-xs text-theme-foreground/60">
                  {world.collections.length}
                </span>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
