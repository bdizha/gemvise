import { type FC } from 'react';

export type SectionVariant = 'default' | 'gradient' | 'values' | 'centered';
export type GradientType = 'dark' | 'light' | 'dark-light' | 'light-dark' | 'dark-light-dark' | 'light-dark-light';

interface Value {
  name: string;
  description: string;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

interface SectionProps {
  variant?: SectionVariant;
  gradient?: GradientType;
  tag?: string;
  title?: string;
  description?: string;
  values?: Value[];
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Section: FC<SectionProps> = ({
  variant = 'default',
  gradient = 'dark',
  tag,
  title,
  description,
  values,
  className,
  children,
  style,
}) => {
  const variantClasses = {
    default: '',
    gradient: 'bg-gradient-dark',
    values: 'bg-gradient-dark',
    centered: 'text-center',
  };

  const gradientClasses = {
    'dark': 'bg-gradient-dark',
    'light': 'bg-gradient-light',
    'dark-light': 'bg-gradient-dark-light',
    'light-dark': 'bg-gradient-light-dark',
    'dark-light-dark': 'bg-gradient-dark-light-dark',
    'light-dark-light': 'bg-gradient-light-dark-light',
  };

  const headerClasses = [
    'mx-auto max-w-2xl lg:text-center',
    variant === 'centered' ? 'text-center' : ''
  ].filter(Boolean).join(' ');

  return (
    <section
      className={['relative overflow-hidden', 'rounded-[48px]', variantClasses[variant], gradient && gradientClasses[gradient], className].filter(Boolean).join(' ')}
      style={style}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {tag && title && description && (
        <div className={headerClasses}>
          {tag && (
            <h2 className="text-base font-semibold leading-7 text-theme-foreground/60">
              {tag}
            </h2>
          )}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-theme-foreground sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-6 text-lg leading-8 text-theme-foreground/60">
              {description}
            </p>
          )}
        </div>
      )}

        {values && (
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-theme-foreground">
                    {value.name}
                  </dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-theme-foreground/60">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default Section;
