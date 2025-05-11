// /Users/bmatuku/Applications/GemVise/gemvise/chat/components/shared/MenuIcon.tsx
import React from 'react';

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {
  // SVGProps already includes className, width, height
}

const MenuIcon: React.FC<MenuIconProps> = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
};

export default MenuIcon;
