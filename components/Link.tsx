/* eslint-disable jsx-a11y/anchor-has-content */
// Import Next.js Link component and types
import Link from 'next/link' // Next.js optimized Link component
import type { LinkProps } from 'next/link' // TypeScript props for Next.js Link
import { AnchorHTMLAttributes } from 'react' // Standard anchor element attributes

/**
 * Custom Link component that intelligently handles different link types:
 * - Internal links: Use Next.js Link for client-side navigation
 * - Anchor links: Use standard anchor for same-page navigation
 * - External links: Use standard anchor with security attributes
 */
const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  // Determine link type based on href pattern
  const isInternalLink = href && href.startsWith('/') // Starts with / = internal route
  const isAnchorLink = href && href.startsWith('#') // Starts with # = page anchor

  // Internal links: Use Next.js Link for optimized client-side navigation
  if (isInternalLink) {
    return <Link className="break-words" href={href} {...rest} />
  }

  // Anchor links: Use standard anchor for same-page navigation
  if (isAnchorLink) {
    return <a className="break-words" href={href} {...rest} />
  }

  // External links: Open in new tab with security attributes
  return (
    <a 
      className="break-words" 
      target="_blank" // Open in new tab
      rel="noopener noreferrer" // Security: prevent access to window.opener
      href={href} 
      {...rest} 
    />
  )
}

export default CustomLink
