import React from 'react';
import Link from 'next/link';
import type { FC, ReactNode, ElementType } from 'react';

export interface SidebarItemProps {
  href?: string;
  onClick?: () => void;
  label: string;
  icon?: string | ElementType; // For Heroicons or similar SVG components, or a string for an image
  iconElement?: ReactNode; // For custom elements like text initials
  subLabel?: string;
  imageUrl?: string; // For background image (e.g., worlds)
  isActive?: boolean;
  hasNotification?: boolean;
  itemType?: 'link' | 'button' | 'div';
  className?: string; // Custom classes for the item itself
  iconWrapperClassName?: string;
  iconClassName?: string;
  labelClassName?: string;
  subLabelClassName?: string;
  activeClassName?: string;
  hoverClassName?: string;
  notificationDotClassName?: string;
}

export const SidebarItem: FC<SidebarItemProps> = ({
  href,
  onClick,
  label,
  icon,
  iconElement,
  subLabel,
  imageUrl,
  isActive = false,
  hasNotification = false,
  itemType = 'link',
  className = '',
  iconWrapperClassName = 'bg-white/10',
  iconClassName = 'h-5 w-5 text-white',
  labelClassName = 'text-white',
  subLabelClassName = 'text-xs text-theme-muted-foreground',
  activeClassName = 'bg-muted-foreground/60',
  hoverClassName = 'hover:bg-muted-foreground/40',
  notificationDotClassName = 'absolute top-2 right-2 h-6 w-6 rounded-full bg-pink-500 border-2 border-theme-surface-darkest',
}) => {
  const baseClasses = 
    'flex w-full items-center gap-3 rounded-[4rem] p-3 pr-4 text-sm transition-colors duration-300 relative';

  const currentActiveClassName = isActive ? activeClassName : '';
  const itemStyles = imageUrl ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};

  const content = (
    <>
      {typeof icon === 'string' ? (
        <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[1.5rem] ${iconWrapperClassName}`}>
          <img src={icon} alt={`${label} icon`} className={iconClassName} />
        </span>
      ) : icon && (
        <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[1.5rem] ${iconWrapperClassName}`}>
          {React.createElement(icon, { className: iconClassName })}
        </span>
      )}
      {iconElement && (
        <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[1.5rem] ${iconWrapperClassName}`}>
          {iconElement}
        </span>
      )}
      <div className="flex-1 min-w-0">
        <p className={`font-medium truncate ${labelClassName}`}>{label}</p>
        {subLabel && <p className={`truncate ${subLabelClassName}`}>{subLabel}</p>}
      </div>
      {hasNotification && <span className={notificationDotClassName}></span>}
    </>
  );

  const combinedClassName = `${baseClasses} ${currentActiveClassName} ${hoverClassName} ${className}`.trim();

  if (itemType === 'link' && href) {
    return (
      <Link href={href} className={combinedClassName} style={itemStyles} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (itemType === 'button') {
    return (
      <button type="button" onClick={onClick} className={combinedClassName} style={itemStyles}>
        {content}
      </button>
    );
  }

  return (
    <div className={combinedClassName} style={itemStyles} onClick={onClick}>
      {content}
    </div>
  );
};
