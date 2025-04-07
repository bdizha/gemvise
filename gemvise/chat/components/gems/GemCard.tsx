import Link from 'next/link';
import Image from 'next/image';

interface GemCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  expertise: string[];
}

const GemCard = ({ id, name, description, imageUrl, expertise }: GemCardProps) => {
  return (
    <Link href={`/chat/${id}`} className="block">
      <div className="group/card h-[146px] bg-surface-elevation-1 hover:bg-scrim-8 rounded-spacing-m relative w-[312px]">
        <div className="w-full h-full p-4 flex flex-col gap-2">
          <div className="flex flex-row h-full space-x-3 w-full">
            {/* Avatar */}
            <div className="relative w-[90px] h-[114px] rounded-[14px] overflow-hidden shrink-0">
              <Image
                src="/gradients/mobile/GV-Gradient-08.png"
                alt={name}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            {/* Content */}
            <div className="overflow-auto h-full flex flex-col justify-between w-full">
              <div>
                <p className="mb-[2px] text-md-medium leading-tight line-clamp-1 text-ellipsis break-anywhere overflow-hidden whitespace-normal">
                  {name}
                </p>
                <div className="text-muted-foreground font-normal text-sm truncate mb-[5px]">
                  By @{id}
                </div>
                <p className="text-foreground font-normal line-clamp-3 text-sm text-ellipsis overflow-hidden whitespace-normal break-anywhere">
                  {description}
                </p>
              </div>

              {/* Message Count */}
              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2">
                  <div className="flex flex-row gap-1 items-center">
                    <svg viewBox="0 0 24 24" fill="none" width="14px" height="14px" className="text-muted-foreground">
                      <path d="M21.5 12c0-5-3.694-8-9.5-8s-9.5 3-9.5 8c0 1.294.894 3.49 1.037 3.83l.037.092c.098.266.49 1.66-1.074 3.722 2.111 1 4.353-.644 4.353-.644 1.551.815 3.397 1 5.147 1 5.806 0 9.5-3 9.5-8Z" 
                        stroke="currentColor" 
                        strokeLinecap="square" 
                        strokeLinejoin="round" 
                        strokeWidth="2"
                      />
                    </svg>
                    <p className="text-sm text-muted-foreground">
                      {Math.floor(Math.random() * 900 + 100)}k
                    </p>
                  </div>
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
