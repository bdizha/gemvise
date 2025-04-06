import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Providers from './providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'GemVise - Unleash Your Potential',
  description: 'Discover and learn from the greatest minds in history.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-background font-sans text-primary antialiased">
        <Providers>
          <Header />
          <div className="relative">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
