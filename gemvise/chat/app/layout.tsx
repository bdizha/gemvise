import './globals.css'
import { Inter } from 'next/font/google'
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
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
          {/* Header */}
          <div className="h-16 top-0 absolute z-10 flex flex-row items-center justify-center w-full bg-gradient-to-b from-background via-background via-80% to-transparent">
            <div className="absolute flex flex-row items-center start-1">
              <Link href="/" className="ms-2 me-[0.5] rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-ring w-8 sm:w-auto">
                <Image src="/logo.svg" alt="GemVise" width={32} height={32} className="opacity-80 hover:opacity-100" />
              </Link>
            </div>

            <div className="grow justify-center hidden max-w-[50%] sm:flex">
              {/* Center content if needed */}
            </div>

            <div className="absolute flex flex-row items-center gap-0.5 ml-auto end-3">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-default [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:-mx-0.5 text-primary hover:bg-button-ghost-hover h-10 w-10 rounded-full" type="button" aria-label="History">
                <Image src="/history.svg" alt="History" width={20} height={20} className="stroke-2" />
              </button>

              <div className="flex flex-row items-center gap-2">
                <ThemeSwitcher />

                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-default [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:-mx-0.5 bg-button-primary text-background hover:bg-button-primary-hover rounded-full py-2 h-8 px-3 text-sm" type="button">
                  <Image src="/user.svg" alt="User" width={16} height={16} />
                  <div>Sign up</div>
                </button>

                <button className="items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-default [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:-mx-0.5 rounded-full py-2 hidden sm:flex h-8 px-3 text-sm text-primary bg-transparent ring-1 ring-inset ring-toggle-border hover:bg-button-secondary-hover hover:border-text-secondary" type="button">
                  <div>Sign in</div>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1 mt-16">
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
      </body>
    </html>
  )
}
