// Import Next.js Link and URL slug utility
import Link from 'next/link' // Next.js optimized Link component
import { slug } from 'github-slugger' // Convert text to URL-friendly slugs

// TypeScript interface for component props
interface Props {
  text: string // Tag text to display and link
}

/**
 * Tag component that displays a clickable tag linking to the tag's page
 * Converts tag text to URL-friendly format and applies consistent styling
 */
const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`} // Generate tag page URL with slug
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
    >
      {/* Display tag text with spaces converted to hyphens */}
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
