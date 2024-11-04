
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LifeConnect - Organ Donation Awareness & Support',
  description: 'Join our mission to save lives through organ donation awareness and registration.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">LifeConnect</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/register">Register</NavLink>
              <NavLink href="/education">Learn</NavLink>
              <NavLink href="/support">Support</NavLink>
              <NavLink href="/events">Events</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
    >
      {children}
    </a>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="support" className="text-base text-gray-500 hover:text-gray-900">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/education" className="text-base text-gray-500 hover:text-gray-900">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/support" className="text-base text-gray-500 hover:text-gray-900">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}