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
          'rounded-[1.5rem] bg-white border border-[#d5d9d9] p-4 shadow-sm transition-all duration-200',
          'dark:bg-[#232f3e] dark:border-[#3f4b58] dark:text-white',
          interactive && 'hover:shadow-md hover:border-[#0972d3] cursor-pointer',
          gradient && 'bg-gradient-to-br from-[#ff9900] to-[#ffac31] text-[#0f1111]',
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

Card.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('mb-4 text-lg font-semibold', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('text-sm', className)} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('mt-4 text-sm text-[#5f6b7a]', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

interface CardComponent extends React.ForwardRefExoticComponent<CardProps> {
  Header: typeof CardHeader;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
}

const CardWithComponents = Card as CardComponent;
CardWithComponents.Header = CardHeader;
CardWithComponents.Content = CardContent;
CardWithComponents.Footer = CardFooter;

export default CardWithComponents;
