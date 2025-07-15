// Import Contentlayer plugin for processing MDX content
// Import Contentlayer plugin for processing MDX content
const { withContentlayer } = require('next-contentlayer2')

// Bundle analyzer plugin for analyzing bundle size (enabled via ANALYZE=true env var)
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// Content Security Policy configuration to prevent XSS attacks
// Add additional domains here if using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app
`

// Security headers configuration for enhanced protection
const securityHeaders = [
  // Content Security Policy - prevents XSS attacks
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // Controls how much referrer information is sent with requests
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Prevents page from being embedded in frames (clickjacking protection)
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // Prevents MIME type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Controls DNS prefetching for performance
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // Enforces HTTPS connections
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // Controls browser feature permissions
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

// Environment-based configuration for different deployment scenarios
const output = process.env.EXPORT ? 'export' : undefined // Static export mode
const basePath = process.env.BASE_PATH || undefined // Base path for subdirectory deployment
const unoptimized = process.env.UNOPTIMIZED ? true : undefined // Disable image optimization

/**
 * Next.js configuration with TypeScript support
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
  // Apply plugins in sequence (Contentlayer first, then Bundle Analyzer)
  const plugins = [withContentlayer, withBundleAnalyzer]
  return plugins.reduce((acc, next) => next(acc), {
    // Static export configuration
    output,
    basePath,
    // Enable React Strict Mode for better development experience
    reactStrictMode: true,
    // Disable trailing slashes in URLs
    trailingSlash: false,
    // Supported file extensions for pages
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    // ESLint configuration - specify directories to lint
    eslint: {
      dirs: ['app', 'components', 'layouts', 'scripts'],
    },
    // Image optimization configuration
    images: {
      // Allow images from external domains
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
        },
      ],
      unoptimized, // Disable optimization for static exports
    },
    // Apply security headers to all routes
    async headers() {
      return [
        {
          source: '/(.*)', // Apply to all routes
          headers: securityHeaders,
        },
      ]
    },
    // Custom webpack configuration
    webpack: (config, options) => {
      // Add SVG support - convert SVG files to React components
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
  })
}
