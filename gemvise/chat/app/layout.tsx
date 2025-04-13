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
  // Check if current path is chat route
  const isChatRoute = () => {
    if (typeof window !== 'undefined') {
      return window.location.pathname.startsWith('/chat/');
    }
    return false;
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-background font-sans text-primary antialiased">
        <Providers>
          {!isChatRoute() && <Header />}
          <div className={`relative ${isChatRoute() ? 'h-screen' : ''}`}>
            {children}
          </div>
          {!isChatRoute() && <Footer />}
        </Providers>
      </body>
    </html>
  );
}
