// Contentlayer imports for defining document types and content processing
import { defineDocumentType, ComputedFields, makeSource } from 'contentlayer2/source-files'
import { writeFileSync } from 'fs'
import readingTime from 'reading-time' // Calculate reading time for posts
import { slug } from 'github-slugger' // Generate URL-friendly slugs
import path from 'path'
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic' // HTML to HAST conversion

// Remark plugins (process Markdown AST)
import remarkGfm from 'remark-gfm' // GitHub Flavored Markdown support
import remarkMath from 'remark-math' // Math notation support
import { remarkAlert } from 'remark-github-blockquote-alert' // GitHub-style alerts
import {
  remarkExtractFrontmatter, // Extract frontmatter from MDX
  remarkCodeTitles, // Add titles to code blocks
  remarkImgToJsx, // Convert images to JSX components
  extractTocHeadings, // Extract table of contents from headings
} from 'pliny/mdx-plugins/index.js'

// Rehype plugins (process HTML AST)
import rehypeSlug from 'rehype-slug' // Add IDs to headings
import rehypeAutolinkHeadings from 'rehype-autolink-headings' // Add links to headings
import rehypeKatex from 'rehype-katex' // Render math with KaTeX
import rehypeKatexNoTranslate from 'rehype-katex-notranslate' // Prevent KaTeX translation
import rehypeCitation from 'rehype-citation' // Handle citations
import rehypePrismPlus from 'rehype-prism-plus' // Syntax highlighting with Prism
import rehypePresetMinify from 'rehype-preset-minify' // Minify HTML output

// Site configuration and utilities
import siteMetadata from './data/siteMetadata'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js'
import prettier from 'prettier' // Code formatting

// Environment configuration
const root = process.cwd()
const isProduction = process.env.NODE_ENV === 'production'

// Link icon for heading autolinks (Heroicon mini link)
const icon = fromHtmlIsomorphic(
  `
  <span class="content-header-link">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 linkicon">
  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
  </svg>
  </span>
`,
  { fragment: true }
)

// Computed fields that are automatically generated for each document
const computedFields: ComputedFields = {
  // Calculate reading time based on content length
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  // Generate URL slug from file path (remove directory prefix)
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
  // Full path for routing
  path: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  // Source file path for reference
  filePath: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFilePath,
  },
  // Extract table of contents from markdown headings
  toc: { type: 'json', resolve: (doc) => extractTocHeadings(doc.body.raw) },
}

/**
 * Count the occurrences of all tags across blog posts and write to json file
 * This creates a tag index for the tags page functionality
 */
async function createTagCount(allBlogs) {
  const tagCount: Record<string, number> = {}
  
  // Iterate through all blog posts
  allBlogs.forEach((file) => {
    // Only process posts with tags (exclude drafts in production)
    if (file.tags && (!isProduction || file.draft !== true)) {
      file.tags.forEach((tag) => {
        // Convert tag to URL-friendly slug
        const formattedTag = slug(tag)
        // Increment count or initialize to 1
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })
  
  // Format and write tag data to JSON file for client-side usage
  const formatted = await prettier.format(JSON.stringify(tagCount, null, 2), { parser: 'json' })
  writeFileSync('./app/tag-data.json', formatted)
}

/**
 * Create search index for local search functionality
 * Generates a JSON file with all blog content for client-side search
 */
function createSearchIndex(allBlogs) {
  // Only create index if kbar search is configured
  if (
    siteMetadata?.search?.provider === 'kbar' &&
    siteMetadata.search.kbarConfig.searchDocumentsPath
  ) {
    // Write sorted blog content to public directory for client access
    writeFileSync(
      `public/${path.basename(siteMetadata.search.kbarConfig.searchDocumentsPath)}`,
      JSON.stringify(allCoreContent(sortPosts(allBlogs)))
    )
    console.log('Local search index generated...')
  }
}

// Blog post document type definition
export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/**/*.mdx', // Match all MDX files in blog directory
  contentType: 'mdx',
  fields: {
    // Required fields
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    // Optional fields
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    lastmod: { type: 'date' }, // Last modified date
    draft: { type: 'boolean' }, // Hide from production if true
    summary: { type: 'string' }, // Post excerpt
    images: { type: 'json' }, // Featured images
    authors: { type: 'list', of: { type: 'string' } }, // Author references
    layout: { type: 'string' }, // Layout component to use
    bibliography: { type: 'string' }, // Bibliography file reference
    canonicalUrl: { type: 'string' }, // SEO canonical URL
  },
  computedFields: {
    ...computedFields,
    // Generate structured data for SEO (JSON-LD)
    structuredData: {
      type: 'json',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.lastmod || doc.date,
        description: doc.summary,
        image: doc.images ? doc.images[0] : siteMetadata.socialBanner,
        url: `${siteMetadata.siteUrl}/${doc._raw.flattenedPath}`,
      }),
    },
  },
}))

// Author profile document type definition
export const Authors = defineDocumentType(() => ({
  name: 'Authors',
  filePathPattern: 'authors/**/*.mdx', // Match all MDX files in authors directory
  contentType: 'mdx',
  fields: {
    // Required fields
    name: { type: 'string', required: true },
    // Optional profile fields
    avatar: { type: 'string' }, // Profile image URL
    occupation: { type: 'string' }, // Job title
    company: { type: 'string' }, // Company name
    email: { type: 'string' }, // Contact email
    // Social media profiles
    twitter: { type: 'string' },
    bluesky: { type: 'string' },
    linkedin: { type: 'string' },
    github: { type: 'string' },
    layout: { type: 'string' }, // Layout component to use
  },
  computedFields, // Apply common computed fields
}))

// Main Contentlayer configuration
export default makeSource({
  contentDirPath: 'data', // Source directory for content files
  documentTypes: [Blog, Authors], // Document types to process
  mdx: {
    cwd: process.cwd(),
    // Remark plugins (process Markdown AST before conversion to HTML)
    remarkPlugins: [
      remarkExtractFrontmatter, // Extract YAML frontmatter
      remarkGfm, // GitHub Flavored Markdown (tables, strikethrough, etc.)
      remarkCodeTitles, // Add titles to code blocks
      remarkMath, // Parse math notation
      remarkImgToJsx, // Convert img tags to Next.js Image components
      remarkAlert, // GitHub-style alert blocks
    ],
    // Rehype plugins (process HTML AST after Markdown conversion)
    rehypePlugins: [
      rehypeSlug, // Add id attributes to headings
      [
        rehypeAutolinkHeadings, // Add clickable links to headings
        {
          behavior: 'prepend', // Add link before heading text
          headingProperties: {
            className: ['content-header'], // CSS class for styling
          },
          content: icon, // Link icon element
        },
      ],
      rehypeKatex, // Render math with KaTeX
      rehypeKatexNoTranslate, // Prevent Google Translate on math
      [rehypeCitation, { path: path.join(root, 'data') }], // Handle citations
      [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }], // Syntax highlighting
      rehypePresetMinify, // Minify HTML output
    ],
  },
  // Post-processing hook - runs after content is processed
  onSuccess: async (importData) => {
    const { allBlogs } = await importData()
    createTagCount(allBlogs) // Generate tag statistics
    createSearchIndex(allBlogs) // Generate search index
  },
})
