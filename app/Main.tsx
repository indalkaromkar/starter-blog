// Import custom components and utilities
import Link from '@/components/Link' // Custom Link component with Next.js optimizations
import Tag from '@/components/Tag' // Tag display component
import siteMetadata from '@/data/siteMetadata' // Site configuration
import { formatDate } from 'pliny/utils/formatDate' // Date formatting utility
import NewsletterForm from 'pliny/ui/NewsletterForm' // Newsletter subscription form

// Maximum number of posts to display on homepage
const MAX_DISPLAY = 5

// Homepage component displaying recent blog posts
export default function Home({ posts }) {
  return (
    <>
      {/* Main content container with dividers */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Page header section */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        
        {/* Blog posts list */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {/* Show message if no posts available */}
          {!posts.length && 'No posts found.'}
          
          {/* Display recent posts (limited by MAX_DISPLAY) */}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  {/* Post layout - responsive grid */}
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    {/* Publication date */}
                    <dl>
                      <dt className="sr-only">Published on</dt> {/* Screen reader only */}
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    
                    {/* Post content - takes up 3 columns on xl screens */}
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          {/* Post title with link to full post */}
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          {/* Post tags */}
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        {/* Post summary/excerpt */}
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      {/* Read more link */}
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      
      {/* "All Posts" link - shown if there are more posts than displayed */}
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      
      {/* Newsletter subscription form - only show if provider is configured */}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
