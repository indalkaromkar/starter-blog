// Import site configuration and navigation data
import siteMetadata from '@/data/siteMetadata' // Site metadata configuration
import headerNavLinks from '@/data/headerNavLinks' // Navigation menu items
import Logo from '@/data/logo.svg' // Site logo SVG component
// Import custom components
import Link from './Link' // Custom Link component with Next.js optimizations
import MobileNav from './MobileNav' // Mobile navigation menu
import ThemeSwitch from './ThemeSwitch' // Dark/light theme toggle
import SearchButton from './SearchButton' // Search functionality trigger

// Main header component with navigation and branding
const Header = () => {
  // Build header CSS classes - base styles for all screen sizes
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  
  // Add sticky positioning if enabled in site configuration
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      {/* Site logo and title - links to homepage */}
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          {/* Logo container */}
          <div className="mr-3">
            <Logo />
          </div>
          {/* Site title - handle both string and JSX titles */}
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      
      {/* Navigation and utility buttons container */}
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        {/* Desktop navigation menu - hidden on mobile */}
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/') // Exclude home link (already in logo)
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
              >
                {link.title}
              </Link>
            ))}
        </div>
        {/* Utility buttons - search, theme toggle, mobile menu */}
        <SearchButton /> {/* Search functionality */}
        <ThemeSwitch /> {/* Dark/light theme toggle */}
        <MobileNav /> {/* Mobile navigation menu */}
      </div>
    </header>
  )
}

export default Header
