'use client';

import { ThemeProvider } from 'next-themes';
import Footer from '@/components/layout/Footer';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Footer />
    </ThemeProvider>
  );
}
