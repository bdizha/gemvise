import { Gem } from '@/types'; // Assuming Gem type is in @/types
import Image from 'next/image';

interface GemDetailPanelProps {
  gem: Gem | undefined;
}

const GemDetailPanel: React.FC<GemDetailPanelProps> = ({ gem }) => {
  if (!gem) {
    return (
      <div className="p-4 bg-theme-surface-alt rounded-lg shadow">
        <p className="text-theme-muted-foreground">Gem details not found.</p>
      </div>
    );
  }

  // Determine a fallback or default image if imageUrl is not present
  const imageUrl = gem.imageUrl || gem.iconUrl || '/images/placeholder-gem.png'; // Add a placeholder path

  return (
    <div className="p-6 bg-theme-surface-alt rounded-xl shadow-lg space-y-4 h-full overflow-y-auto text-theme-foreground">
      <h2 className="text-2xl font-bold text-theme-primary">{gem.name || 'Unnamed Gem'}</h2>
      
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={gem.name || 'Gem image'}
          layout="fill"
          objectFit="cover"
          className="bg-gray-200 dark:bg-gray-700" // Background for image loading or if transparent
        />
      </div>

      {
        gem.type && (
          <p className="text-sm text-theme-accent font-semibold bg-theme-accent/10 px-2 py-1 rounded-md inline-block">
            Type: {gem.type}
          </p>
        )
      }
      
      {gem.description && (
        <div>
          <h3 className="text-lg font-semibold mb-1">Description</h3>
          <p className="text-theme-muted-foreground text-sm whitespace-pre-wrap">
            {gem.description}
          </p>
        </div>
      )}

      {gem.attributes && Object.keys(gem.attributes).length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-1">Attributes</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {Object.entries(gem.attributes).map(([key, value]) => (
              <li key={key} className="text-theme-muted-foreground">
                <span className="font-medium text-theme-foreground">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {String(value)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Add more details as needed: tags, genre, etc. */}
    </div>
  );
};

export default GemDetailPanel;
