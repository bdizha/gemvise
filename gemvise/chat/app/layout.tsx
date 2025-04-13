import * as React from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from 'next-themes';
import ClientLayout from '@/components/layout/ClientLayout';

export const metadata = {
  title: 'GemVise - Unleash Your Potential',
  description: 'Discover and learn from the greatest minds in history.',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientLayout>
            {children}
          </ClientLayout>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
