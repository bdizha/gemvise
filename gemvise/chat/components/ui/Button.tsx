'use client';

import { forwardRef, useRef, type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva(
  'relative flex items-center justify-center font-medium transition-all duration-[0.4s] ease-out-cubic focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-theme-background text-theme-foreground border border-solid hover:bg-theme-foreground hover:text-theme-background focus:ring-primary',
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary',
        secondary: 'bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent',
        ghost: 'bg-transparent text-theme-foreground hover:bg-theme-hover focus:ring-primary',
        link: 'text-primary hover:underline focus:ring-primary bg-transparent',
        tab: 'w-[7rem] px-6 bg-white/10 text-white/80 hover:bg-white/30 focus:ring-0 focus:ring-offset-0',
        'tab-active': 'w-[7rem] px-6 bg-white/20 text-white hover:bg-white/30 focus:ring-0 focus:ring-offset-0'
      },
      size: {
        default: 'h-12 px-6 text-base rounded-full',
        sm: 'h-10 px-4 text-sm rounded-full',
        lg: 'h-14 px-8 text-lg rounded-full',
        icon: 'h-12 w-12 p-0 rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, asChild = false, children, onClick, disabled, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.className = 'ripple';

      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        createRipple(event);
        onClick?.(event);
      }
    };

    const Comp = asChild ? 'span' : 'button';

    return (
      <Comp
        ref={buttonRef}
        className={clsx(
          buttonVariants({ variant, size, className }),
          variant === 'tab-active' && 'active'
        )}
        onClick={handleClick}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          </div>
        ) : null}
        <span className={clsx('flex items-center gap-2', { 'opacity-0': isLoading })}>
          {children}
        </span>
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
