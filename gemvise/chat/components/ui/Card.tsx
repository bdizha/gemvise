import React from 'react';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gradient?: boolean;
  interactive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, gradient, interactive, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'rounded-2xl bg-background p-6 shadow-lg transition-all duration-200',
          'dark:bg-background-dark dark:border-border-dark',
          interactive && 'hover:shadow-xl hover:-translate-y-2 cursor-pointer',
          gradient && 'bg-gradient-to-br from-primary to-secondary text-white',
          className
        )}
        style={{ fontFamily: 'var(--font-primary)' }}
        data-testid="card"
        {...props}
      >
        {children}
      </div>
    );
  }
);

const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('p-6 -mx-6 -mt-6 mb-6 border-b border-gray-200 dark:border-gray-800 rounded-t-2xl', className)}
        style={{ fontFamily: 'var(--font-primary)' }}
        data-testid="card-header"
        {...props}
      >
        {children}
      </div>
    );
  }
);

const CardContent = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('p-6 -mx-6', className)}
        style={{ fontFamily: 'var(--font-primary)' }}
        data-testid="card-content"
        {...props}
      >
        {children}
      </div>
    );
  }
);

const CardFooter = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('p-6 -mx-6 -mb-6 mt-6 border-t border-gray-200 dark:border-gray-800 rounded-b-2xl', className)}
        style={{ fontFamily: 'var(--font-primary)' }}
        data-testid="card-footer"
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

type CardComponent = typeof Card & {
  Header: typeof CardHeader;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
};

const CardWithComponents = Card as CardComponent;
CardWithComponents.Header = CardHeader;
CardWithComponents.Content = CardContent;
CardWithComponents.Footer = CardFooter;

export default CardWithComponents;
