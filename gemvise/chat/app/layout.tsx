import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GemVise - Chat with Your Favorite Icons',
  description: 'Connect with influential personalities through AI-powered conversations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
            {/* Main Content */}
            <main className="flex-1">
              {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 bg-white dark:bg-black dark:border-gray-800">
              <div className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Company */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Company</h3>
                    <ul className="mt-4 space-y-2">
                      {['About', 'Blog', 'Careers', 'Press'].map((item) => (
                        <li key={item}>
                          <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resources */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Resources</h3>
                    <ul className="mt-4 space-y-2">
                      {['Documentation', 'Help Center', 'Community', 'Partners'].map((item) => (
                        <li key={item}>
                          <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Legal */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Legal</h3>
                    <ul className="mt-4 space-y-2">
                      {['Privacy', 'Terms', 'Cookie Policy', 'Guidelines'].map((item) => (
                        <li key={item}>
                          <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connect */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Connect</h3>
                    <ul className="mt-4 space-y-2">
                      {['Twitter', 'Instagram', 'Facebook', 'LinkedIn'].map((item) => (
                        <li key={item}>
                          <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
                  <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <div className="flex items-center gap-2">
                      <Image src="/logo.svg" alt="GemVise" width={24} height={24} />
                      <span className="text-sm text-gray-500 dark:text-gray-400"> {new Date().getFullYear()} GemVise AI. All rights reserved.</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                        Status
                      </Link>
                      <span className="text-gray-300 dark:text-gray-600">|</span>
                      <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                        Support
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
