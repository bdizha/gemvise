'use client';

import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/utils';

const formFieldVariants = cva(
  'w-full flex flex-col',
  {
    variants: {
      variant: {
        default: 'space-y-2',
        inline: 'flex-row items-center gap-2',
        floating: 'relative',
      },
    },
    defaultVariants: {
      variant: 'default',
    }
  }
);

export interface FormFieldProps extends 
  React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof formFieldVariants> {
  label?: string;
  htmlFor?: string;
  error?: string;
  description?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

const FormField = forwardRef<HTMLDivElement, FormFieldProps>(({
  variant,
  label,
  htmlFor,
  error,
  description,
  required,
  children,
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(formFieldVariants({ variant }), className)}
      {...props}
    >
      {label && variant !== 'floating' && (
        <label 
          htmlFor={htmlFor} 
          className="text-sm font-medium text-white/48"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative w-full">
        {children}
        
        {variant === 'floating' && label && (
          <label 
            htmlFor={htmlFor} 
            className={cn(
              "absolute text-sm font-medium transition-all duration-200 pointer-events-none",
              "left-3 text-white/60",
              // Different positioning based on whether the input is focused/filled
              "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base",
              "peer-focus:top-0 peer-focus:text-xs peer-focus:text-white/48",
              "top-0 text-xs"
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
      </div>
      
      {description && !error && (
        <p className="text-xs text-white/60">{description}</p>
      )}
      
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
});

FormField.displayName = 'FormField';

export default FormField;
