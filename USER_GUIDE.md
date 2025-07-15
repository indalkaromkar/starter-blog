# User Guide - Blog Content Management

## Table of Contents
- [Getting Started](#getting-started)
- [Writing Blog Posts](#writing-blog-posts)
- [Managing Content](#managing-content)
- [Using Features](#using-features)
- [Site Customization](#site-customization)
- [Publishing Workflow](#publishing-workflow)
- [Tips & Best Practices](#tips--best-practices)

## Getting Started

Welcome to your new blog! This guide will help you create and manage content without needing technical knowledge.

### What You Can Do
- ✍️ Write and publish blog posts
- 🏷️ Organize content with tags
- 👤 Manage author profiles
- 🎨 Customize site appearance
- 📊 Track visitor analytics
- 💬 Enable reader comments
- 📧 Collect newsletter subscribers

### File Locations
- **Blog posts**: `data/blog/` folder
- **Author profiles**: `data/authors/` folder
- **Site settings**: `data/siteMetadata.js` file
- **Navigation menu**: `data/headerNavLinks.ts` file

## Writing Blog Posts

### Creating a New Post

1. **Create a new file** in the `data/blog/` folder
2. **Name it** with `.mdx` extension (e.g., `my-first-post.mdx`)
3. **Add frontmatter** (post information) at the top
4. **Write your content** below

### Post Template

```markdown
---
title: 'Your Amazing Blog Post Title'
date: '2024-01-15'
tags: ['technology', 'web-development', 'tutorial']
draft: false
summary: 'A brief description of what this post is about. This appears in post previews.'
authors: ['default']
images: ['/static/images/post-banner.jpg']
---

# Your Post Content Starts Here

Write your blog post using **Markdown** formatting.

## You can add headings

- Create bullet lists
- Add **bold** and *italic* text
- Include [links](https://example.com)

### Code Examples

```javascript
console.log('Hello, world!')
```

> Add quotes and callouts

![Image description](/static/images/your-image.jpg)
```

### Frontmatter Fields Explained

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ | Post title | `'How to Build a Website'` |
| `date` | ✅ | Publication date | `'2024-01-15'` |
| `tags` | ❌ | Topic categories | `['tutorial', 'beginner']` |
| `draft` | ❌ | Hide from site | `true` (hides), `false` (shows) |
| `summary` | ❌ | Post preview text | `'Learn the basics...'` |
| `authors` | ❌ | Who wrote it | `['john-doe', 'jane-smith']` |
| `images` | ❌ | Featured images | `['/static/images/banner.jpg']` |

### Writing Tips

**Good Titles**
- ✅ "5 Tips for Better Web Design"
- ✅ "Getting Started with React Hooks"
- ❌ "Post 1" or "Untitled"

**Effective Summaries**
- Keep under 160 characters
- Describe what readers will learn
- Make it compelling and clear

**Using Tags**
- Use 3-5 tags per post
- Keep tags consistent across posts
- Use lowercase with hyphens: `web-development`

## Managing Content

### Organizing Posts

**By Date**
- Posts automatically sort by date (newest first)
- Use format: `YYYY-MM-DD` (e.g., `2024-01-15`)

**By Categories**
- Use tags to group related content
- Readers can browse by tag
- Popular tags appear in sidebar

**Draft Posts**
- Set `draft: true` to hide posts
- Perfect for work-in-progress content
- Change to `draft: false` when ready to publish

### Working with Images

**Adding Images**
1. Upload images to `public/static/images/`
2. Reference in posts: `![Alt text](/static/images/filename.jpg)`
3. Use descriptive filenames: `react-tutorial-screenshot.jpg`

**Image Best Practices**
- Optimize file sizes (under 500KB recommended)
- Use descriptive alt text for accessibility
- Consistent aspect ratios look professional

### Author Profiles

**Creating Author Profiles**
1. Create file in `data/authors/` (e.g., `john-doe.mdx`)
2. Add author information:

```markdown
---
name: 'John Doe'
avatar: '/static/images/authors/john-doe.jpg'
occupation: 'Web Developer'
company: 'Tech Company'
email: 'john@example.com'
twitter: 'https://twitter.com/johndoe'
github: 'https://github.com/johndoe'
linkedin: 'https://linkedin.com/in/johndoe'
---

John is a passionate web developer with 5 years of experience 
building modern web applications. He loves sharing knowledge 
through writing and speaking at conferences.
```

**Using Authors in Posts**
- Reference by filename: `authors: ['john-doe']`
- Multiple authors: `authors: ['john-doe', 'jane-smith']`
- Leave empty to use default author

## Using Features

### Search Functionality
- Readers can search all posts using the search button
- Searches titles, content, and tags
- Works offline (no external service needed)

### Comments System
- Readers can comment on posts (if enabled)
- Comments are powered by GitHub Discussions
- Moderation happens through GitHub

### Newsletter Signup
- Collect subscriber emails (if enabled)
- Appears at bottom of homepage
- Integrates with email services

### Dark/Light Theme
- Readers can toggle between themes
- System theme follows device preference
- Choice is remembered between visits

### Social Sharing
- Posts automatically include sharing metadata
- Looks great when shared on social media
- Uses featured images and summaries

## Site Customization

### Basic Settings (`data/siteMetadata.js`)

**Site Information**
```javascript
title: 'My Awesome Blog',
author: 'Your Name',
headerTitle: 'My Blog', // Appears in header
description: 'A blog about web development and technology',
```

**Contact Information**
```javascript
email: 'your@email.com',
github: 'https://github.com/yourusername',
twitter: 'https://twitter.com/yourusername',
linkedin: 'https://linkedin.com/in/yourusername',
```

**Site URLs**
```javascript
siteUrl: 'https://yourblog.com',
socialBanner: '/static/images/twitter-card.png', // Social sharing image
```

### Navigation Menu (`data/headerNavLinks.ts`)

```javascript
const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Blog' },
  { href: '/tags', title: 'Tags' },
  { href: '/projects', title: 'Projects' },
  { href: '/about', title: 'About' },
]
```

### Projects Page (`data/projectsData.ts`)

Showcase your work:

```javascript
const projectsData = [
  {
    title: 'My Cool Project',
    description: 'Description of what this project does',
    imgSrc: '/static/images/projects/project1.jpg',
    href: 'https://github.com/username/project',
  },
]
```

## Publishing Workflow

### Before Publishing
1. **Review your post**
   - Check spelling and grammar
   - Verify all links work
   - Test images display correctly

2. **Set metadata**
   - Add compelling title and summary
   - Choose relevant tags
   - Set publication date

3. **Preview locally**
   - Run development server
   - Check how post looks
   - Test on mobile devices

### Publishing Steps
1. **Set `draft: false`** in frontmatter
2. **Commit changes** to your repository
3. **Push to main branch**
4. **Site updates automatically** (if using Vercel/Netlify)

### Post-Publishing
- Share on social media
- Monitor comments and engagement
- Update content if needed

## Tips & Best Practices

### Content Strategy

**Consistency**
- Publish on a regular schedule
- Maintain consistent voice and style
- Use similar post structure

**Quality Over Quantity**
- Better to publish less frequently with high quality
- Thoroughly research your topics
- Edit and proofread before publishing

**Engagement**
- Respond to comments promptly
- Ask questions to encourage discussion
- Share posts on social media

### SEO Best Practices

**Titles**
- Include target keywords naturally
- Keep under 60 characters
- Make them compelling and descriptive

**Summaries**
- Write unique summaries for each post
- Include main keywords
- Keep under 160 characters

**Images**
- Use descriptive filenames
- Add alt text for accessibility
- Optimize file sizes for fast loading

### Writing Style

**Structure**
- Use headings to break up content
- Keep paragraphs short (2-3 sentences)
- Use bullet points and lists

**Readability**
- Write in active voice
- Use simple, clear language
- Define technical terms

**Engagement**
- Start with a hook
- Use examples and stories
- End with a call-to-action

### Technical Tips

**Markdown Formatting**
```markdown
# Main Heading
## Sub Heading
### Smaller Heading

**Bold text**
*Italic text*
`Code snippet`

- Bullet point
1. Numbered list

[Link text](https://example.com)
![Image alt text](/path/to/image.jpg)

> Blockquote for emphasis

```code
Code block with syntax highlighting
```
```

**Special Features**
- Use `---` for horizontal dividers
- Add `{/* Comment */}` for notes (won't show on site)
- Include `<br/>` for line breaks when needed

### Troubleshooting

**Post Not Showing**
- Check `draft: false` in frontmatter
- Verify date format: `YYYY-MM-DD`
- Ensure file has `.mdx` extension

**Images Not Loading**
- Check file path starts with `/static/images/`
- Verify image file exists in correct folder
- Check filename spelling and case

**Formatting Issues**
- Ensure frontmatter is between `---` lines
- Check for missing quotes around text values
- Verify proper Markdown syntax

**Build Errors**
- Check for typos in frontmatter
- Ensure all required fields are present
- Verify proper YAML formatting

---

## Quick Reference

### Post Checklist
- [ ] Compelling title and summary
- [ ] Relevant tags (3-5 recommended)
- [ ] Publication date set
- [ ] Draft set to `false`
- [ ] Images optimized and working
- [ ] Links tested
- [ ] Content proofread

### File Naming
- Posts: `descriptive-post-name.mdx`
- Images: `descriptive-image-name.jpg`
- Authors: `first-last.mdx`

### Common Markdown
- `**bold**` → **bold**
- `*italic*` → *italic*
- `[link](url)` → [link](url)
- `![alt](image.jpg)` → image
- `` `code` `` → `code`

Need help? Check the troubleshooting section or refer to the [Markdown Guide](https://www.markdownguide.org/basic-syntax/) for formatting help.