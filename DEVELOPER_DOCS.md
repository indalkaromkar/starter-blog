# Developer Documentation

## Table of Contents
- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Content Management](#content-management)
- [Components](#components)
- [Layouts](#layouts)
- [Styling](#styling)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Customization Guide](#customization-guide)
- [Troubleshooting](#troubleshooting)

## Architecture Overview

This blog is built with:
- **Next.js 14** - React framework with App Router
- **Contentlayer** - Content processing and type generation
- **Tailwind CSS** - Utility-first CSS framework
- **MDX** - Markdown with JSX components
- **TypeScript** - Type safety and better DX

### Key Features
- Static site generation (SSG)
- Dark/light theme switching
- Full-text search (local or Algolia)
- Comments system (Giscus/Utterances/Disqus)
- Analytics integration
- Newsletter subscription
- SEO optimization
- Responsive design

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── blog/              # Blog routes
│   ├── tags/              # Tag pages
│   └── projects/          # Projects page
├── components/            # Reusable UI components
├── layouts/               # Page layout templates
├── data/                  # Content and configuration
│   ├── blog/             # Blog posts (MDX)
│   ├── authors/          # Author profiles
│   └── siteMetadata.js   # Site configuration
├── css/                   # Stylesheets
├── public/               # Static assets
└── scripts/              # Build scripts
```

## Configuration

### Site Metadata (`data/siteMetadata.js`)

Core site configuration:

```javascript
const siteMetadata = {
  title: 'Your Blog Title',
  author: 'Your Name',
  description: 'Blog description',
  siteUrl: 'https://yourdomain.com',
  
  // Social profiles
  email: 'your@email.com',
  github: 'https://github.com/username',
  twitter: 'https://twitter.com/username',
  
  // Features
  analytics: { /* provider config */ },
  comments: { /* provider config */ },
  search: { /* provider config */ },
  newsletter: { /* provider config */ }
}
```

### Environment Variables

Create `.env.local`:

```bash
# Analytics
NEXT_UMAMI_ID=your-umami-id

# Comments (Giscus)
NEXT_PUBLIC_GISCUS_REPO=owner/repo
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=repo-id
NEXT_PUBLIC_GISCUS_CATEGORY=category-name
NEXT_PUBLIC_GISCUS_CATEGORY_ID=category-id

# Newsletter (Buttondown example)
BUTTONDOWN_API_KEY=your-api-key

# Deployment
BASE_PATH=/subdirectory  # For subdirectory deployment
EXPORT=1                 # For static export
UNOPTIMIZED=1           # Disable image optimization
```

### Content Configuration (`contentlayer.config.ts`)

Defines content types and processing:

```typescript
export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
    // ... other fields
  }
}))
```

## Content Management

### Creating Blog Posts

1. Create MDX file in `data/blog/`:

```markdown
---
title: 'Your Post Title'
date: '2024-01-15'
tags: ['nextjs', 'react', 'web-dev']
draft: false
summary: 'Brief description of your post'
authors: ['default']
---

# Your Content Here

This is your blog post content written in MDX.
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Post title |
| `date` | date | ✅ | Publication date |
| `tags` | array | ❌ | Post tags |
| `draft` | boolean | ❌ | Hide from production |
| `summary` | string | ❌ | Post excerpt |
| `authors` | array | ❌ | Author references |
| `images` | array | ❌ | Featured images |
| `layout` | string | ❌ | Layout override |

### Author Profiles

Create author files in `data/authors/`:

```markdown
---
name: 'Author Name'
avatar: '/static/images/avatar.jpg'
occupation: 'Developer'
company: 'Company Name'
email: 'author@email.com'
twitter: 'https://twitter.com/author'
github: 'https://github.com/author'
---

Author bio content here.
```

## Components

### Core Components

#### Header (`components/Header.tsx`)
- Site navigation and branding
- Theme toggle and search button
- Mobile navigation menu

#### ThemeSwitch (`components/ThemeSwitch.tsx`)
- Light/dark/system theme options
- Persistent theme selection
- Smooth transitions

#### Link (`components/Link.tsx`)
- Smart link routing (internal/external/anchor)
- Next.js optimization for internal links
- Security attributes for external links

#### Tag (`components/Tag.tsx`)
- Clickable tags linking to tag pages
- Consistent styling and formatting

### Creating Custom Components

1. Create component file:

```typescript
// components/CustomComponent.tsx
interface Props {
  title: string
  children: React.ReactNode
}

export default function CustomComponent({ title, children }: Props) {
  return (
    <div className="custom-component">
      <h2>{title}</h2>
      {children}
    </div>
  )
}
```

2. Add to MDX components (`components/MDXComponents.tsx`):

```typescript
import CustomComponent from './CustomComponent'

export const MDXComponents = {
  CustomComponent,
  // ... other components
}
```

3. Use in MDX files:

```markdown
<CustomComponent title="My Component">
  Content here
</CustomComponent>
```

## Layouts

### Available Layouts

- **PostLayout** - Default blog post layout
- **PostSimple** - Simplified post layout
- **PostBanner** - Layout with banner image
- **ListLayout** - Blog listing with search
- **ListLayoutWithTags** - Blog listing with tag sidebar

### Creating Custom Layouts

```typescript
// layouts/CustomLayout.tsx
interface Props {
  content: CoreContent<Blog>
  children: ReactNode
}

export default function CustomLayout({ content, children }: Props) {
  return (
    <article>
      <h1>{content.title}</h1>
      <div className="prose">{children}</div>
    </article>
  )
}
```

Specify in frontmatter:
```markdown
---
layout: CustomLayout
---
```

## Styling

### Tailwind Configuration

Customize in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#your-color',
          600: '#your-darker-color',
        }
      }
    }
  }
}
```

### Typography

Uses `@tailwindcss/typography` for prose styling:

```css
.prose {
  /* Customizations */
}

.prose-invert {
  /* Dark mode styles */
}
```

### Custom Styles

Add to `css/tailwind.css`:

```css
@layer components {
  .custom-class {
    @apply bg-gray-100 p-4 rounded-lg;
  }
}
```

## Development Workflow

### Setup

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Analyze bundle
ANALYZE=true yarn build
```

### Content Development

1. Create/edit MDX files in `data/blog/`
2. Hot reload shows changes instantly
3. Draft posts (set `draft: true`) hidden in production

### Component Development

1. Create components in `components/`
2. Add TypeScript interfaces
3. Test in Storybook (if configured)
4. Add to MDX components if needed

## Deployment

### Vercel (Recommended)

1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Static Export

```bash
# Build static site
EXPORT=1 UNOPTIMIZED=1 yarn build

# Serve locally
npx serve out
```

### Subdirectory Deployment

```bash
# Build with base path
BASE_PATH=/blog EXPORT=1 yarn build
```

### GitHub Pages

Use provided workflow (`.github/workflows/pages.yml`):

1. Enable GitHub Pages
2. Select "GitHub Actions" as source
3. Push to trigger deployment

## Customization Guide

### Changing Theme Colors

1. Update `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    600: '#0284c7',
    // ... other shades
  }
}
```

2. Update CSS variables if needed

### Adding Analytics

1. Choose provider (Umami, Plausible, GA4)
2. Update `siteMetadata.js`:

```javascript
analytics: {
  googleAnalytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX'
  }
}
```

3. Add domain to CSP in `next.config.js`

### Configuring Comments

1. Set up provider (Giscus recommended)
2. Update environment variables
3. Configure in `siteMetadata.js`

### Adding Newsletter

1. Choose provider (Buttondown, Mailchimp, etc.)
2. Set API key in environment
3. Update provider in `siteMetadata.js`

### Custom Search

For Algolia search:

1. Create Algolia account
2. Update configuration:

```javascript
search: {
  provider: 'algolia',
  algoliaConfig: {
    appId: 'YOUR_APP_ID',
    apiKey: 'YOUR_API_KEY',
    indexName: 'YOUR_INDEX'
  }
}
```

## Troubleshooting

### Common Issues

**Build Errors**
- Check TypeScript errors: `yarn type-check`
- Verify MDX frontmatter syntax
- Ensure all imports are correct

**Content Not Showing**
- Check `draft: false` in frontmatter
- Verify file is in correct directory
- Check date format (YYYY-MM-DD)

**Styling Issues**
- Purge Tailwind cache: `rm -rf .next`
- Check class name spelling
- Verify Tailwind config

**Performance Issues**
- Optimize images (use Next.js Image)
- Check bundle size: `ANALYZE=true yarn build`
- Minimize JavaScript in MDX

### Debug Mode

Enable debug logging:

```bash
DEBUG=contentlayer* yarn dev
```

### Getting Help

1. Check [FAQ](https://github.com/timlrx/tailwind-nextjs-starter-blog/wiki)
2. Search existing issues
3. Create detailed issue with reproduction steps

## API Reference

### Key Functions

```typescript
// Content utilities
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'

// Date formatting
import { formatDate } from 'pliny/utils/formatDate'

// Slug generation
import { slug } from 'github-slugger'
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_UMAMI_ID` | Umami analytics ID | No |
| `NEXT_PUBLIC_GISCUS_*` | Giscus comment config | No |
| `BUTTONDOWN_API_KEY` | Newsletter API key | No |
| `BASE_PATH` | Deployment subdirectory | No |
| `EXPORT` | Enable static export | No |
| `UNOPTIMIZED` | Disable image optimization | No |

---

For more detailed information, refer to the inline code comments and the original [repository documentation](https://github.com/timlrx/tailwind-nextjs-starter-blog).