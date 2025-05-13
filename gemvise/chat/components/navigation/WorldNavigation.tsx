import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlobeAltIcon, SparklesIcon, SunIcon } from '@heroicons/react/24/outline';
import { worlds } from '@/data/worldData';

interface WorldNavigationProps {
  className?: string;
}

export const WorldNavigation: FC<WorldNavigationProps> = ({ className = '' }) => {
  const pathname = usePathname();

  const baseButtonClasses = "flex h-[48px] w-full items-center gap-3 rounded-[4rem] px-4 text-white transition-all duration-300";

  return (
    <div className={`space-y-2 w-full ${className}`}>
      <div className="px-4 text-sm font-medium text-theme-foreground/60">Worlds</div>
      <div className="space-y-1 w-full">
        {worlds.map((world) => {
          const Icon = world.icon as React.ElementType;
          const href = `/world/${world.id}`;
          const isActive = pathname === href;

          return (
            <Link key={world.id} href={href} className="block">
              <button
                className={`${baseButtonClasses} ${
                  isActive
                    ? 'bg-muted-foreground/60'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60 focus:outline-none'
                }`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-[1.5rem] bg-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <span className="flex-1 text-left text-white">{world.name}</span>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
