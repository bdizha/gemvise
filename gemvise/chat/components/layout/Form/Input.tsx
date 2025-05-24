'use client';

import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/utils';

const inputVariants = cva(
  'w-full rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-white/20 placeholder:text-white/40 text-white focus:border-white/40',
        filled: 'border-white/10 bg-white/5 backdrop-blur-md placeholder:text-white/40 text-white focus:border-white/40',
        outline: 'border-white/20 placeholder:text-white/40 text-white focus:border-white/40',
        ghost: 'border-transparent placeholder:text-white/40 text-white hover:border-white/20 focus:border-white/40',
      },
      size: {
        default: 'h-10',
        sm: 'h-8 px-2 text-xs',
        lg: 'h-12 px-4 text-base',
        xl: 'h-14 px-5 text-lg',
      },
      radius: {
        default: 'rounded-md',
        sm: 'rounded',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
        none: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'default',
    }
  }
);

export interface InputProps extends 
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
  VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: boolean;
  wrapperClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  variant,
  size,
  radius,
  className,
  leftIcon,
  rightIcon,
  error,
  wrapperClassName,
  ...props
}, ref) => {
  return (
    <div className={cn("relative flex items-center w-full", wrapperClassName)}>
      {leftIcon && (
        <div className="absolute left-3 flex items-center justify-center pointer-events-none text-white/60">
          {leftIcon}
        </div>
      )}
      
      <input
        ref={ref}
        className={cn(
          inputVariants({ variant, size, radius }),
          leftIcon && "pl-10",
          rightIcon && "pr-10",
          error && "border-red-500 focus:border-red-500",
          className
        )}
        {...props}
      />
      
      {rightIcon && (
        <div className="absolute right-3 flex items-center justify-center">
          {rightIcon}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
