'use client';

import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/utils';

const formVariants = cva(
  'w-full',
  {
    variants: {
      variant: {
        default: 'space-y-4',
        compact: 'space-y-2',
        inline: 'flex flex-row gap-2 items-end',
      },
      size: {
        default: '',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        full: 'max-w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    }
  }
);

export interface FormProps extends 
  React.FormHTMLAttributes<HTMLFormElement>,
  VariantProps<typeof formVariants> {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  className?: string;
}

const Form = forwardRef<HTMLFormElement, FormProps>(({
  variant,
  size,
  className,
  children,
  onSubmit,
  ...props
}, ref) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (onSubmit) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <form
      ref={ref}
      className={cn(formVariants({ variant, size }), className)}
      onSubmit={handleSubmit}
      {...props}
    >
      {children}
    </form>
  );
});

Form.displayName = 'Form';

export default Form;
