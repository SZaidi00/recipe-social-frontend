import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import { AuthProvider } from '@/context/AuthContext'
// import { ThemeProvider } from '@/context/ThemeContext'
// import { NotificationProvider } from '@/context/NotificationContext'
// import { Toaster } from '@/components/ui/Toast'
// import ErrorBoundary from '@/components/common/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Recipe Social - Share Your Culinary Journey',
    template: '%s | Recipe Social'
  },
  description: 'Connect with fellow food enthusiasts, share your favorite recipes, and discover new culinary adventures in our vibrant cooking community.',
  keywords: ['recipes', 'cooking', 'food', 'social', 'community', 'sharing'],
  authors: [{ name: 'Recipe Social Team' }],
  creator: 'Recipe Social',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'Recipe Social - Share Your Culinary Journey',
    description: 'Connect with fellow food enthusiasts and share your favorite recipes',
    siteName: 'Recipe Social',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Recipe Social'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recipe Social - Share Your Culinary Journey',
    description: 'Connect with fellow food enthusiasts and share your favorite recipes',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    // Add your verification tokens here when you have them
    // google: 'your-google-verification-token',
    // yandex: 'your-yandex-verification-token',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#f97316" />
        <meta name="color-scheme" content="light dark" />
        
        {/* PWA meta tags */}
        <meta name="application-name" content="Recipe Social" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Recipe Social" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#f97316" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Viewport meta tag for responsive design */}
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" 
        />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        {/* <ErrorBoundary>
          <ThemeProvider>
            <AuthProvider>
              <NotificationProvider> */}
                {/* Skip to main content link for accessibility */}
                <a 
                  href="#main-content" 
                  className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Skip to main content
                </a>
                
                {/* Main app content */}
                <div id="root" className="min-h-screen flex flex-col">
                  <main id="main-content" className="flex-1">
                    {children}
                  </main>
                </div>
                
                {/* Toast notifications */}
                {/* <Toaster /> */}
                
                {/* Portal root for modals and overlays */}
                <div id="modal-root" />
                <div id="tooltip-root" />
              {/* </NotificationProvider>
            </AuthProvider>
          </ThemeProvider>
        </ErrorBoundary> */}
        
        {/* Loading script for theme to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                console.warn('Failed to load theme preference:', e);
              }
            `,
          }}
        />
      </body>
    </html>
  )
}