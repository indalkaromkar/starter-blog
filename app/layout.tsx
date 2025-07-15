// Global CSS imports
import 'css/tailwind.css' // Main Tailwind CSS styles
import 'pliny/search/algolia.css' // Algolia search component styles
import 'remark-github-blockquote-alert/alert.css' // GitHub alert styles

// Font and component imports
import { Space_Grotesk } from 'next/font/google' // Google Fonts integration
import { Analytics, AnalyticsConfig } from 'pliny/analytics' // Analytics provider
import { SearchProvider, SearchConfig } from 'pliny/search' // Search functionality
import Header from '@/components/Header' // Site header component
import SectionContainer from '@/components/SectionContainer' // Layout container
import Footer from '@/components/Footer' // Site footer component
import siteMetadata from '@/data/siteMetadata' // Site configuration
import { ThemeProviders } from './theme-providers' // Theme context provider
import { Metadata } from 'next' // Next.js metadata types

// Configure Google Font with optimization settings
const space_grotesk = Space_Grotesk({
  subsets: ['latin'], // Load only Latin character subset
  display: 'swap', // Use font-display: swap for better performance
  variable: '--font-space-grotesk', // CSS custom property name
})

// SEO metadata configuration for the entire site
export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl), // Base URL for relative URLs
  title: {
    default: siteMetadata.title, // Default page title
    template: `%s | ${siteMetadata.title}`, // Template for page-specific titles
  },
  description: siteMetadata.description, // Site description for search engines
  // Open Graph metadata for social media sharing
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner], // Social sharing image
    locale: 'en_US',
    type: 'website',
  },
  // Alternative formats and canonical URL
  alternates: {
    canonical: './', // Canonical URL to prevent duplicate content
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`, // RSS feed
    },
  },
  // Search engine crawler instructions
  robots: {
    index: true, // Allow indexing
    follow: true, // Follow links
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1, // No limit on video preview length
      'max-image-preview': 'large', // Allow large image previews
      'max-snippet': -1, // No limit on text snippet length
    },
  },
  // Twitter Card metadata
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image', // Large image card format
    images: [siteMetadata.socialBanner],
  },
}

// Root layout component - wraps all pages
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Get base path for subdirectory deployments
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language} // Set document language
      className={`${space_grotesk.variable} scroll-smooth`} // Apply font variable and smooth scrolling
      suppressHydrationWarning // Suppress hydration warnings for theme switching
    >
      {/* Favicon and app icon configuration */}
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${basePath}/static/favicons/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/static/favicons/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
        color="#5bbad5"
      />
      {/* Theme color configuration for different color schemes */}
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      {/* RSS feed link */}
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        {/* Theme provider for dark/light mode switching */}
        <ThemeProviders>
          {/* Analytics tracking component */}
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          {/* Main layout container */}
          <SectionContainer>
            {/* Search functionality provider */}
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <Header /> {/* Site navigation header */}
              <main className="mb-auto">{children}</main> {/* Page content */}
            </SearchProvider>
            <Footer /> {/* Site footer */}
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
