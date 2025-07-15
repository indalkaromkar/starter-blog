/** @type {import("pliny/config").PlinyConfig } */
// Main site configuration object - customize these values for your blog
const siteMetadata = {
  // Basic site information
  title: 'Next.js Starter Blog', // Main site title
  author: 'Tails Azimuth', // Default author name
  headerTitle: 'TailwindBlog', // Title shown in header (can be different from main title)
  description: 'A blog created with Next.js and Tailwind.css', // Site description for SEO
  language: 'en-us', // Primary language code
  theme: 'system', // Default theme: 'system', 'dark', or 'light'
  
  // URLs and paths
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app', // Production URL
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog', // Source code repository
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`, // Site logo path
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`, // Social sharing image
  
  // Social media profiles - update with your actual profiles
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'address@yoursite.com',
  github: 'https://github.com',
  x: 'https://twitter.com/x', // X (formerly Twitter)
  // twitter: 'https://twitter.com/Twitter', // Alternative Twitter field
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  medium: 'https://medium.com',
  bluesky: 'https://bsky.app/',
  
  // Localization and UI settings
  locale: 'en-US', // Locale for date formatting
  stickyNav: false, // Set to true for fixed navigation bar
  // Analytics configuration
  // Note: Add analytics domains to Content Security Policy in next.config.js
  analytics: {
    // Umami Analytics (privacy-focused, self-hostable)
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // Website ID from Umami dashboard
      // Uncomment and modify if using US-hosted Umami:
      // src: 'https://us.umami.is/script.js'
      // Remember to add domain to CSP in next.config.js
    },
    
    // Alternative analytics providers (uncomment to use):
    
    // Plausible Analytics
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // Your domain, e.g. 'tailwind-nextjs-starter-blog.vercel.app'
    //   src: '', // Custom script URL if self-hosting
    // },
    
    // Simple Analytics
    // simpleAnalytics: {},
    
    // PostHog Analytics
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // Project API key from PostHog
    // },
    
    // Google Analytics
    // googleAnalytics: {
    //   googleAnalyticsId: '', // GA4 Measurement ID, e.g. 'G-XXXXXXX'
    // },
  },
  // Newsletter subscription configuration
  newsletter: {
    // Supported providers: mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Configure environment variables in .env file based on your chosen provider
    provider: 'buttondown', // Change to your preferred newsletter service
  },
  // Comments system configuration
  // Note: Add comment provider domains to Content Security Policy in next.config.js
  comments: {
    provider: 'giscus', // Supported: 'giscus', 'utterances', 'disqus'
    
    // Giscus configuration (GitHub Discussions-powered comments)
    giscusConfig: {
      // Configure at https://giscus.app/ and set these environment variables:
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO, // GitHub repo in format 'owner/repo'
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID, // Repository ID from giscus
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY, // Discussion category name
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID, // Category ID from giscus
      
      // Comment mapping strategy
      mapping: 'pathname', // Options: 'pathname', 'url', 'title'
      
      // Feature toggles
      reactions: '1', // Enable emoji reactions: '1' = yes, '0' = no
      metadata: '0', // Send metadata to parent: '1' = yes, '0' = no
      
      // Theme configuration
      theme: 'light', // Light mode theme
      darkTheme: 'transparent_dark', // Dark mode theme
      themeURL: '', // Custom theme CSS URL (if using 'custom' theme)
      
      // Localization
      lang: 'en', // Language code for giscus interface
    },
  },
  // Search functionality configuration
  search: {
    provider: 'kbar', // Options: 'kbar' (local search) or 'algolia' (hosted search)
    
    // Local search configuration (kbar)
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // Path to search index file
    },
    
    // Algolia search configuration (uncomment to use)
    // provider: 'algolia',
    // algoliaConfig: {
    //   appId: 'R2IYF7ETH7', // Algolia Application ID
    //   apiKey: '599cec31baffa4868cae4e79f180729b', // Public API key (safe to commit)
    //   indexName: 'docsearch', // Algolia index name
    // },
  },
}

module.exports = siteMetadata
