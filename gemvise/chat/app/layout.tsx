import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GemVise',
  description: 'Explore and chat with influential gems of wisdom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--primary))]">
          <main className="pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
