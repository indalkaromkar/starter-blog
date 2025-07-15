// React and type imports
import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer' // Content processing utilities
import type { Blog, Authors } from 'contentlayer/generated' // Generated content types

// Component imports
import Comments from '@/components/Comments' // Comments system component
import Link from '@/components/Link' // Custom Link component
import PageTitle from '@/components/PageTitle' // Page title component
import SectionContainer from '@/components/SectionContainer' // Layout container
import Image from '@/components/Image' // Optimized Image component
import Tag from '@/components/Tag' // Tag display component
import siteMetadata from '@/data/siteMetadata' // Site configuration
import ScrollTopAndComment from '@/components/ScrollTopAndComment' // Scroll utilities

// Utility functions for generating external links
const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}` // GitHub edit link
const discussUrl = (path) => // Twitter discussion search link
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

// Date formatting configuration for post dates
const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long', // Full weekday name
  year: 'numeric', // 4-digit year
  month: 'long', // Full month name
  day: 'numeric', // Day of month
}

// TypeScript interface for component props
interface LayoutProps {
  content: CoreContent<Blog> // Blog post content and metadata
  authorDetails: CoreContent<Authors>[] // Author information array
  next?: { path: string; title: string } // Next post navigation
  prev?: { path: string; title: string } // Previous post navigation
  children: ReactNode // MDX content rendered as React components
}

/**
 * PostLayout component - Main layout for individual blog posts
 * Features: author info, publication date, tags, navigation, comments
 */
export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  // Extract content properties
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0] // Get base path for navigation

  return (
    <SectionContainer>
      {/* Scroll to top and comment buttons */}
      <ScrollTopAndComment />
      
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          {/* Post header with date and title */}
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              {/* Publication date */}
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt> {/* Screen reader only */}
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              {/* Post title */}
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          {/* Main content grid - responsive layout */}
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0 dark:divide-gray-700">
            {/* Author information sidebar */}
            <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt> {/* Screen reader only */}
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-y-8 xl:space-x-0">
                  {/* Render each author */}
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {/* Author avatar */}
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={38}
                          height={38}
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      {/* Author details */}
                      <dl className="text-sm leading-5 font-medium whitespace-nowrap">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {/* Author Twitter/X link */}
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {/* Format Twitter URL to @username */}
                              {author.twitter
                                .replace('https://twitter.com/', '@')
                                .replace('https://x.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            {/* Main content area - spans 3 columns on xl screens */}
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              {/* Post content - rendered MDX */}
              <div className="prose dark:prose-invert max-w-none pt-10 pb-8">{children}</div>
              
              {/* Social and edit links */}
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(path)} rel="nofollow">
                  Discuss on Twitter
                </Link>
                {` • `}
                <Link href={editUrl(filePath)}>View on GitHub</Link>
              </div>
              
              {/* Comments section - only show if enabled in config */}
              {siteMetadata.comments && (
                <div
                  className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment" // Anchor for scroll-to-comment functionality
                >
                  <Comments slug={slug} />
                </div>
              )}
            </div>
            {/* Footer with tags and navigation */}
            <footer>
              <div className="divide-gray-200 text-sm leading-5 font-medium xl:col-start-1 xl:row-start-2 xl:divide-y dark:divide-gray-700">
                {/* Tags section */}
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Previous/Next post navigation */}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {/* Previous post link */}
                    {prev && prev.path && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${prev.path}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {/* Next post link */}
                    {next && next.path && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${next.path}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Back to blog link */}
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${basePath}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="Back to the blog"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
