'use client';

interface PageTemplateProps {
  title: string;
  children: React.ReactNode;
}

export default function PageTemplate({ title, children }: PageTemplateProps) {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold gradient-text">{title}</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </div>
    </div>
  );
}
