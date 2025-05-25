'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import Link, { type LinkProps as NextLinkProps } from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/utils';

const buttonVariants = cva(
  'relative flex items-center font-medium transition-all duration-[0.4s] ease-out-cubic focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-theme-background text-theme-foreground border border-solid hover:bg-theme-foreground hover:text-theme-background focus:ring-primary justify-center',
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary justify-center',
        secondary: 'bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent justify-center',
        ghost: 'bg-transparent text-theme-foreground hover:bg-theme-hover focus:ring-primary justify-center',
        link: 'text-primary hover:underline focus:ring-primary bg-transparent justify-start', // Links are usually left-aligned
        tab: 'w-[7rem] px-6 bg-white/10 text-white/48 hover:bg-white/30 focus:ring-0 focus:ring-offset-0 justify-center',
        'tab-active': 'w-[7rem] px-6 bg-white/20 text-white/48 hover:bg-white/30 focus:ring-0 focus:ring-offset-0 justify-center',
        // Sidebar Variants - Expanded
        sidebar: 'w-full bg-neutral-200 dark:bg-neutral-700/60 text-theme-foreground dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-600/70 justify-start text-sm p-3 pr-4 rounded-[4rem] gap-2',
        'sidebar-active': 'w-full bg-white/10 backdrop-blur-md/30 text-white/48 justify-start text-sm p-3 pr-4 rounded-[4rem] gap-2',
        'sidebar-create-main': 'w-full bg-muted-foreground/30 hover:bg-muted-foreground/60 text-white/48 justify-start text-sm p-3 pr-4 rounded-[4rem]',
        'sidebar-create-option': 'w-full bg-gradient-pink-purple text-white/48 hover:opacity-80 justify-start text-sm p-3 pr-4 rounded-xl',
        'sidebar-view-all': 'w-full bg-muted-foreground/40 hover:bg-muted-foreground/70 text-white/48 font-semibold justify-start text-sm p-3 pr-4 rounded-[4rem]',
        // Sidebar Variants - Collapsed (styling primarily for color/bg, padding/size handled by props or size variant)
        'sidebar-collapsed': 'bg-neutral-200 dark:bg-neutral-700/60 text-theme-foreground dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-600/70 justify-center',
        'sidebar-collapsed-active': 'bg-white/10 backdrop-blur-md/30 text-white/48 justify-center'
      },
      size: {
        default: 'h-12 p-4 text-base rounded-full',
        sm: 'h-14 px-6 text-sm rounded-full',
        lg: 'h-16 px-8 text-lg rounded-full',
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
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  asChild?: boolean;
  isLoading?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  [key: string]: any;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading = false,
      asChild = false,
      children,
      href,
      onClick,
      type,
      disabled,
      ...props
    },
    ref
  ) => {
    const createRipple = (event: React.MouseEvent<HTMLElement>) => {
      const interactiveElement = event.currentTarget;
      const ripple = document.createElement('span');
      const rect = interactiveElement.getBoundingClientRect();
      const rippleSize = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - rippleSize / 2;
      const y = event.clientY - rect.top - rippleSize / 2;

      ripple.style.width = ripple.style.height = `${rippleSize}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.className = 'ripple';

      interactiveElement.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    const effectiveDisabled = disabled || isLoading;

    const combinedClickHandler = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (effectiveDisabled) {
        event.preventDefault();
        return;
      }
      createRipple(event);
      onClick?.(event);
    };

    const commonClassNames = cn(
      buttonVariants({ variant, size, className }),
      variant === 'tab-active' && 'active',
      { 'cursor-not-allowed': effectiveDisabled }
    );

    const buttonContent = (
      <>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          </div>
        ) : null}
        <span className={cn('flex items-center gap-2 w-full', { 'opacity-0': isLoading })}>
          {children}
        </span>
      </>
    );

    if (href && !asChild) {
      return (
        <Link
          href={effectiveDisabled ? '#' : href}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          className={cn(commonClassNames, {
            'opacity-50 pointer-events-none': effectiveDisabled,
          })}
          onClick={combinedClickHandler}
          aria-disabled={effectiveDisabled}
          tabIndex={effectiveDisabled ? -1 : undefined}
          {...(props as Omit<NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'|'className'|'onClick'|'ref'|'tabIndex'>)}
        >
          {buttonContent}
        </Link>
      );
    }

    const Comp = asChild ? 'span' : 'button';

    return (
      <Comp
        ref={ref as React.ForwardedRef<any>}
        className={commonClassNames}
        onClick={combinedClickHandler}
        disabled={Comp === 'button' ? effectiveDisabled : undefined}
        type={Comp === 'button' ? (type || 'button') : undefined}
        role={Comp === 'span' ? 'button' : undefined}
        tabIndex={Comp === 'span' ? (effectiveDisabled ? -1 : 0) : undefined}
        aria-disabled={effectiveDisabled}
        {...props}
      >
        {buttonContent}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
