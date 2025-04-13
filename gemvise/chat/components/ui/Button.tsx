'use client';

import { forwardRef, useRef, type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva(
  'relative flex items-center justify-center text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-white text-[#232f3e] border border-[#d5d9d9] hover:bg-[#f7fafa] focus:ring-[#0972d3] shadow-sm',
        primary: 'bg-gradient-to-r from-[#ff9900] to-[#ffac31] text-[#0f1111] hover:from-[#ffac31] hover:to-[#ffbd62] focus:ring-[#0972d3] shadow-sm',
        secondary: 'bg-[#232f3e] text-white hover:bg-[#2f3f4f] focus:ring-[#0972d3] shadow-sm',
        ghost: 'bg-transparent text-[#0f1111] dark:text-white hover:bg-[#f7fafa] dark:hover:bg-[#2f3f4f] focus:ring-[#0972d3]',
        link: 'text-[#0972d3] hover:underline focus:ring-[#0972d3] bg-transparent',
        icon: 'relative flex h-10 w-10 items-center justify-center rounded-lg bg-transparent text-[#0f1111] dark:text-white hover:bg-[#f7fafa] dark:hover:bg-[#2f3f4f] transition-colors'
      },
      size: {
        default: 'h-10 px-4 py-2 rounded-lg',
        sm: 'h-8 px-3 rounded-md text-xs',
        lg: 'h-12 px-6 rounded-lg text-base',
        icon: 'h-10 w-10 rounded-lg'
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
        className={clsx(
          buttonVariants({ variant, size, className })
        )}
        ref={ref}
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
