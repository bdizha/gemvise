import Link from 'next/link';
import Image from 'next/image';
import { MessagesSquare, Star } from 'lucide-react';

interface GemCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  expertise: string[];
  chatCount?: string;
  energyLevel?: number;
}

const GemCard = ({ 
  id, 
  name, 
  description, 
  imageUrl, 
  expertise, 
  chatCount = '100k',
  energyLevel = 85
}: GemCardProps) => {
  return (
    <Link href={`/chat/${id}`} className="block">
      <div className="group/card h-[180px] bg-card hover:bg-accent/10 rounded-xl relative w-full transition-all duration-300 hover:shadow-lg border border-muted">
        <div className="w-full h-full p-5 flex flex-col gap-2">
          <div className="flex flex-row h-full space-x-4 w-full">
            {/* Avatar */}
            <div className="relative w-[100px] h-[140px] rounded-xl overflow-hidden shrink-0">
              <Image
                src={imageUrl || `/gradients/mobile/GV-Gradient-08.png?v=1`}
                alt={name}
                fill
                className="object-cover w-full h-full group-hover/card:scale-105 transition-transform duration-300"
              />
              {/* Energy level indicator */}
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5">
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-yellow-400" />
                  <span className="text-xs text-white">{energyLevel}%</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-auto h-full flex flex-col justify-between w-full">
              <div>
                <p className="mb-1 text-lg font-semibold leading-tight line-clamp-1 text-ellipsis overflow-hidden">
                  {name}
                </p>
                <div className="text-muted-foreground text-sm truncate mb-2">
                  Created by GemVise
                </div>
                <p className="text-foreground/80 line-clamp-3 text-sm text-ellipsis overflow-hidden whitespace-normal">
                  {description}
                </p>
              </div>

              {/* Bottom metadata */}
              <div className="w-full flex flex-row justify-between items-center pt-2 border-t border-muted/50">
                <div className="flex flex-row gap-3">
                  <div className="flex items-center gap-1">
                    <MessagesSquare size={14} className="text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">
                      {chatCount}
                    </p>
                  </div>
                  
                  {expertise && expertise.length > 0 && (
                    <div className="flex gap-1">
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {expertise[0]}
                      </span>
                      {expertise.length > 1 && (
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          +{expertise.length - 1}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GemCard;
