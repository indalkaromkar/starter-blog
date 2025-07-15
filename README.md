![tailwind-nextjs-banner](/public/static/images/twitter-card.png)

# Tailwind Next.js Starter Blog

[![GitHub Repo stars](https://img.shields.io/github/stars/timlrx/tailwind-nextjs-starter-blog?style=social)](https://GitHub.com/timlrx/tailwind-nextjs-starter-blog/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/timlrx/tailwind-nextjs-starter-blog?style=social)](https://github.com/timlrx/tailwind-nextjs-starter-blog/forks)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/timlrx/tailwind-nextjs-starter-blog)

A modern, feature-rich blogging platform built with [Next.js 14](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Contentlayer](https://www.contentlayer.dev/). Perfect for developers, writers, and content creators who want a fast, customizable blog with modern web technologies.

## ✨ Features

- 🚀 **Next.js 14** with App Router and React Server Components
- 🎨 **Tailwind CSS** for beautiful, responsive design
- 📝 **MDX** support for rich content with React components
- 🌙 **Dark/Light theme** with system preference detection
- 🔍 **Full-text search** (local or Algolia integration)
- 💬 **Comments system** (Giscus, Utterances, or Disqus)
- 📊 **Analytics** (Umami, Plausible, Google Analytics, PostHog)
- 📧 **Newsletter** integration (Buttondown, Mailchimp, ConvertKit)
- 🏷️ **Tag system** with dedicated tag pages
- 👥 **Multi-author** support
- 📱 **Mobile-first** responsive design
- ⚡ **Performance optimized** (95+ Lighthouse score)
- 🔒 **Security headers** and best practices
- 📈 **SEO optimized** with structured data
- 🎯 **TypeScript** for type safety

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Clone the repository
npx degit 'timlrx/tailwind-nextjs-starter-blog' my-blog
cd my-blog

# Install dependencies
yarn install
# or
npm install
```

### 2. Configure Your Blog

Edit `data/siteMetadata.js` with your information:

```javascript
const siteMetadata = {
  title: 'Your Blog Title',
  author: 'Your Name',
  headerTitle: 'Your Blog',
  description: 'Your blog description',
  siteUrl: 'https://yourdomain.com',
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  // ... more settings
}
```

### 3. Create Your First Post

Create a new file in `data/blog/my-first-post.mdx`:

```markdown
---
title: 'My First Blog Post'
date: '2024-01-15'
tags: ['hello', 'world']
draft: false
summary: 'Welcome to my new blog!'
---

# Hello World!

This is my first blog post. Welcome to my blog!
```

### 4. Start Development

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your blog!

## 📚 Documentation

- **[User Guide](USER_GUIDE.md)** - Content creation and site management
- **[Developer Docs](DEVELOPER_DOCS.md)** - Technical documentation and customization
- **[Original Template Docs](#original-documentation)** - Comprehensive feature documentation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Content**: Contentlayer + MDX
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)
- **Analytics**: Multiple providers supported
- **Comments**: GitHub Discussions via Giscus
- **Search**: Local search with Kbar

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components  
├── layouts/               # Page layout templates
├── data/                  # Content and configuration
│   ├── blog/             # Blog posts (MDX files)
│   ├── authors/          # Author profiles
│   └── siteMetadata.js   # Site configuration
├── public/               # Static assets
└── css/                  # Stylesheets
```

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#your-color',
    600: '#your-darker-color',
  }
}
```

### Navigation

Edit `data/headerNavLinks.ts`:

```javascript
const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Blog' },
  { href: '/about', title: 'About' },
]
```

### Analytics

Add to `data/siteMetadata.js`:

```javascript
analytics: {
  googleAnalytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX'
  }
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Static Export

```bash
EXPORT=1 UNOPTIMIZED=1 yarn build
```

### GitHub Pages

Use the included workflow in `.github/workflows/pages.yml`

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests.

## 📄 License

[MIT](LICENSE) © [Timothy Lin](https://www.timlrx.com)

---

## Original Documentation

## 🌟 Community Variations

**Note**: Community-contributed forks with different frameworks or significant modifications.

- **Astro**: [Tailwind Astro Template](https://github.com/wanoo21/tailwind-astro-starting-blog)
- **Remix**: [Tailwind Remix Starter](https://github.com/SangeetAgarwal/tailwind-remix-run-mdxjs-typescript-starter-blog)
- **i18n Support**: [Internationalization Template](https://github.com/PxlSyl/tailwind-nextjs-starter-blog-i18n)

## 🎯 Live Examples

- [Demo Blog](https://tailwind-nextjs-starter-blog.vercel.app/) - this repo
- [My personal blog](https://www.timlrx.com) - modified to auto-generate blog posts with dates
- [Karhdo's Blog](https://karhdo.dev) - Karhdo's Blog - Karhdo's Coding Adventure ([source code](https://github.com/Karhdo/karhdo.dev))
- [SOTO's Blog](https://www.atksoto.com/) - A more personalized personal website upgraded from V1 ([source code](https://github.com/acsoto/soto-blog-nextjs))
- [Prabhu's Blog](https://v1-prabhukirankonda.vercel.app) - Prabhu's Personal website with blog ([source code](https://github.com/prabhukiran8790/prabhukirankonda))
- [Rabby Hasan's Blog](https://blog.rabbyhasan.com.bd/) - Rabby Hasan's personal blog about full stack development with cloud ([source code](https://github.com/rabbyalone/myblog))
- [enscribe.dev](https://enscribe.dev) - enscribe's personal blog; cybersecurity shenanigans, frontend webdev, etc. ([source code](https://github.com/jktrn/enscribe.dev))
- [dalelarroder.com](https://dalelarroder.com) - Dale Larroder's personal website upgraded from V1 ([source code](https://github.com/dlarroder/dalelarroder))
- [thetalhatahir.com](https://www.thetalhatahir.com) - Talha Tahir's personal blog. Added article thumbnails, linkedIn card, Beautiful hero content, technology emoticons.
- [homing.so](https://homing.so) - Homing's personal blog about the stuff he's learning ([source code](https://github.com/hominsu/blog))
- [zS1m's Blog](https://contrails.space) - zS1m's personal blog for recording and sharing daily learning technical content ([source code](https://github.com/zS1m/nextjs-contrails))
- [dariuszwozniak.net](https://dariuszwozniak.net/) - Software development blog ([source code](https://github.com/dariusz-wozniak/dariuszwozniak.net-v2))
- [dreams.plus](https://dreams.plus) - Blog site for some thoughts and records for life and technology.
- [francisaguilar.co blog](https://francisaguilar.co) - Francis Aguilar's personal blog that talks about tech, fitness, and personal development.
- [Min71 Dev Blog](https://min71.dev) - Personal blog about Blockchain, Development and etc. ([source code](https://github.com/mingi3442/blog))
- [Bryce Yu's Blog](https://earayu.github.io/) - Bryce Yu's personal Blog about distributed system, database, and web development. ([source code](https://github.com/earayu/earayu.github.io))
- [Remote Startup Senpai Anime Series Website](https://remote-startup-senpai.com) - Landing page for the anime series Remote Startup Senpai.
- [Secret Base](https://www.jachsu.com/) - Jac Hsu's personal Blog.talks about tech, thought, and life in general.
- [Zsebinformatikus](https://www.zsebinformatikus.hu/) - The information superhighway guide blog.
- [Anton Morgunov's Blog](https://blog.ischemist.com/) - talking about science without oversimplifications or why theoretical and computational chemistry is cool.
- [Hans Blog](https://www.hansking.cn/) - Hans' personal blog, front-end technology, gallery and travel diary 中文. ([source code](https://github.com/hansking98/hans-nextjs-blog))
- [London Tech Talk](https://london-tech-talk.com/) - A podcast exploring technology trends and expatriate living experiences. - 日本語
- [CRUD Flow Blog](http://blog.ndamulelo.co.za/) - A technical blog about AI, Cloud Engineering, Data Science and Personal development
- [Trillium's Blog](https://trilliumsmith.com/) - Modified to render resume pdf on `/resume` page. ([source code](https://github.com/trillium/trilliumsmith.com))
- [Wujie's Blog: 旅行者计划](https://www.wujieli.com/) - Wujie's personal digital garden ([source code](https://github.com/wujieli0207/wujie-blog-next))
- [Xiaodong's Blog](https://blog.linxiaodong.com) - Xiaodong's personal blog about front-end technology, and life. 「中文」([source code](https://github.com/buxuku/buxuku.github.io))
- [Azurtelier.com](https://www.azurtelier.com/) - Amos's personal website for tech, music, AI illustrations, etc. [English/中文] ([Source code](https://github.com/AmosChenZixuan/Azurtelier.com))
- [JoshHaines.com](https://www.JoshHaines.com/) - Personal website for Josh Haines. ([source code](https://github.com/jdhaines/joshhaines))
- [Jigu's Blog](https://animeirl.top) - Jigu's personal blog about tech, crypto, golang, and life. 「中文」
- [andrewsam.xyz](https://www.andrewsam.xyz/) - Andrew's Personal website using ShadCN, Prisma, MongoDB, Auth.js, Resume Page, Custom Experience timeline and technologies components. ([source code](https://github.com/andrew-sameh/andrewsam.xyz))
- [Rulli Damara Putra's Portfolio](https://www.damaraputra.my.id/) - Rully's personal blog and portfolio.
- [blog.taoluyuan.com 套路猿](https://blog.taoluyuan.com) - A personal tech blog that supports multi-theme switching. 「中英」
- [LyricsDecode.com](https://lyricsdecode.com) - A song lyrics website offering original lyrics, Romanisation, and English translations with customisable viewing options.
- [bmacharia.com](https://bmacharia.com/) - Benson Macharia's technical blog about Cybersecurity and IT Risk Management.
- [armujahid.me](https://armujahid.me/) - Abdul Rauf's personal blog about tech and random stuff.
- [leohuynh.dev](https://www.leohuynh.dev/) - 🇻🇳 Leo's dev blog – stories, insights, and ideas. Add `/snippets`, `/books` pages, add `ProfileCard`, `CareerTimeline` components and many more. ([source](https://github.com/hta218/leohuynh.dev))
- [OpenSats Blog](https://opensats.org/blog) - A 501(c)(3) public charity which aims to sustainably fund free and open-source projects. ([source code](https://github.com/OpenSats/website))
- [Schedles Blog](https://schedles.com/blog) - Social media scheduling tips, strategies, and product updates for content creators. ([Project Link](https://schedles.com))
- [YawDev Blog](https://yawdev.org/blog) - IT-Agency / Software Development. Blog about tech and business ([Project Link](https://yawdev.org))
- [Engineering Notes](https://www.jonvet.com) - Jonas Vetterle Personal Website & Blog. I'm writing articles about software engineering that interest me, including AI and Quantum Computing
- [Screenager.dev](https://screenager.vercel.app) - Personal Website as Portfolio & Blog. Documenting my learning journey and some guides.
- [kezhenxu94's blog](https://kezhenxu94.me) - Blogging about dev, tips & tricks, tutorials and more.
- [Parminder's blog](https://singhspeak.com) - Thoughts on software development, life and more.
- [wheelcircuit.com](https://wheelcircuit.com) - Automotive YouTube News & Videos blog, updated daily.
- [taitrd.com](https://taitrd.com) - Tai's personal dev blog, technologies and coding activity with Dynamodb practice ([source code](https://github.com/taitrd/taitrd)).
- [Shelton's Blog](https://www.sheltonma.top) - Sharing insights on TypeScript full-stack development (Next.js, React, Hono, Supabase), web crawlers, and other cutting-edge technologies.
- [Culture DevOps](https://culturedevops.com/en) - Technical blog on DevOps practices and tools ([source code](https://github.com/CultureDevOps/blog)).
- [InnovateWire Blog](https://innovatewire.com) - A tech blog about software automation and automation tools ([Project Link](https://innovatewire.com))
- [MichaelScheiwiller.com](https://www.michaelscheiwiller.com/) - Mix of software and data engineering blog as well as personal notes and updates
- [Wahyu Ikbal Personal Website](https://www.wahyuikbal.web.id) - Personal website with blog and ai feature, share about Technology literacy ([source code](https://github.com/wahyudesu/Personal-Website-Next-js-Obsidian-Ai-))
- [ByteGeometry Blog](https://bytegeometry.com/blog) - Software development blog about tech trends and business growth. AI and web-apps development ([Project Link](https://bytegeometry.com))
- [Farhad's Blog](https://www.farhad.my) - Farhad's personal website sharing tech news and insights on emerging technologies, with a focus on AI and Data Science ([Project Link](https://farhad.my))
- [Utanzu Cybersecurity](https://utanzu.com/) – A thriving community where mentorship and expert training help cybersecurity professionals unlock their full potential and advance their careers.
- [trungtmnguyen.com](https://www.trungtmnguyen.com/) - 🇻🇳 Trung's personal and technical blogs – some idea about me, tips, ideas and learned. Add some custom components, like: UnderlineHoverLink, Timeline, neon-border styles and will have more in the future. ([source](https://github.com/trungntm/trungtmnguyen.com))
- [Ryan Fitton's Blog](https://ryanfitton.co.uk/) – A custom theme version with 'Portfolio' section. Used as a personal Blog/Portfolio for development projects. ([source code](https://github.com/ryanfitton/ryanfitton-nextjs-2024))
- [ktovoz.com](https://www.ktovoz.com/) - Kto's personal blog, sharing life, technology. Added article categories and article directory navigation 「中文」

**Using this template?** Submit a PR to add your blog to this showcase!

## 📚 V1 Examples (Legacy)

**Note**: V1 examples are no longer maintained. Please upgrade to V2 and add your blog to the current showcase above.

- [Aloisdg's cookbook](https://tambouille.vercel.app/) - with pictures and recipes!
- [GautierArcin's demo with next translate](https://tailwind-nextjs-starter-blog-seven.vercel.app/) - includes translation of mdx posts, [source code](https://github.com/GautierArcin/tailwind-nextjs-starter-blog/tree/demo/next-translate)
- [David Levai's digital garden](https://davidlevai.com/) - customized design and added email subscriptions
- [thvu.dev](https://thvu.dev) - Added `mdx-embed`, view count, reading minutes and more.
- [irvin.dev](https://www.irvin.dev/) - Irvin Lin's personal site. Added YouTube embedding.
- [KirillSo.com](https://www.kirillso.com/) - Personal blog & website.
- [slightlysharpe.com](https://slightlysharpe.com) - [Tincre's](https://tincre.com) main company blog
- [blog.b00st.com](https://blog.b00st.com) - [b00st.com's](https://b00st.com) main music promotion blog
- [astrosaurus.me](https://astrosaurus.me/) - Ephraim Atta-Duncan's Personal Blog
- [dhanrajsp.me](https://dhanrajsp.me/) - Dhanraj's personal site and blog.
- [blog.r00ks.io](https://blog.r00ks.io/) - Austin Rooks's personal blog ([source code](https://github.com/Austionian/blog.r00ks)).
- [honghong.me](https://honghong.me) - Tszhong's personal website ([source code](https://github.com/tszhong0411/home))
- [marceloformentao.dev](https://marceloformentao.dev) - Marcelo Formentão personal website ([source code](https://github.com/marceloavf/marceloformentao.dev)).
- [abiraja.com](https://www.abiraja.com/) - with a [runnable JS code snippet component!](https://www.abiraja.com/blog/querying-solana-blockchain)
- [bpiggin.com](https://www.bpiggin.com) - Ben Piggin's personal blog
- [maqib.cn](https://maqib.cn) - A blog of Chinese front-end developers 狂奔小马的博客 ([源码](https://github.com/maqi1520/nextjs-tailwind-blog))
- [ambilena.com](https://ambilena.com/) - Electronic Music Blog & imprint for upcoming musicians.
- [techipedia](https://techipedia.vercel.app) - Simple blogging progressive web app with custom installation button and top progress bar
- [reubence.com](https://reubence.com) - Reuben Rapose's Digital Garden
- [axolo.co/blog](https://axolo.co/blog) - Engineering management news & axolo.co updates (with image preview for article in the home page)
- [musing.vercel.app](https://musing.vercel.app/) - Parth Desai's personal blog ([source code](https://github.com/pycoder2000/blog))
- [onyourmental.com](https://www.onyourmental.com/) - [Curtis Warcup's](https://github.com/Cwarcup) website for the On Your Mental Podcast ([source code](https://github.com/Cwarcup/on-your-mental))
- [cwarcup.com](https://www.cwarcup.com/) - Curtis Warcup's personal website and blog ([source code](https://github.com/Cwarcup/personal-blog)).
- [jmalvarez.dev](https://www.jmalvarez.dev/) - José Miguel Álvarez's personal blog ([source code](https://github.com/josemiguel-alvarez/nextjs-blog))
- [justingosses.com](https://justingosses.com/) - Justin Gosses's personal website and blog ([source code](https://github.com/JustinGOSSES/justingosses-website))
- [raphaelchelly.com](https://www.raphaelchelly.com/) - Raphaël Chelly's personal website and blog ([source code](https://github.com/raphaelchelly/raph_www))
- [kaveh.page](https://kaveh.page) - Kaveh Tehrani's personal blog. Added tags directory, profile card, time-to-read on posts directory, etc.
- [drakerossman.com](https://drakerossman.com/) - Drake Rossman's blog about NixOS, Rust, Software Architecture and Engineering Management, as well as general musings.
- [meamenu.com](https://www.meamenu.com) - Landing page and product blog starting from this template. It also uses [framer-motion](https://www.framer.com/motion) for animations, custom layout templates, [waline](https://waline.js.org/en/) for blog comments and [primereact](https://primereact.org/) forms [Ita]
- [giovanni.orciuolo.it](https://giovanni.orciuolo.it) - Giovanni Orciuolo's personal website, blog and everything nerd.

## 💡 Motivation

Created to provide a modern, feature-rich blogging solution that combines the best of React ecosystem with current web development practices. Inspired by popular templates like Jekyll and Hugo Academic, but built for the modern web.

Design adapted from [Tailwind Labs blog](https://github.com/tailwindlabs/blog.tailwindcss.com).

## 🔧 Technical Features

### Core Technologies
- **Next.js 14** with TypeScript and App Router
- **Contentlayer** for content management and type generation
- **Tailwind CSS 3.0** with easy customization
- **MDX** for rich content with React components

### Performance & SEO
- **95+ Lighthouse score** - [View Report](https://www.webpagetest.org/result/230805_BiDcBQ_4H7)
- **85kB first load JS** - Lightweight and fast
- **Font optimization** with next/font
- **Image optimization** with next/image
- **SEO optimized** with RSS feeds, sitemaps, structured data
- **Security headers** preconfigured

### Content Features
- **Syntax highlighting** with line numbers via rehype-prism-plus
- **Math support** with KaTeX
- **Citations** and bibliography support
- **GitHub alerts** styling
- **Multiple layouts** (3 post layouts, 2 listing layouts)
- **Nested routing** for organized content
- **Tag system** with dedicated pages
- **Multi-author** support

### Integrations (via [Pliny](https://github.com/timlrx/pliny))
- **Analytics**: Umami, Plausible, Simple Analytics, PostHog, Google Analytics
- **Comments**: Giscus, Utterances, Disqus
- **Newsletter**: Mailchimp, Buttondown, ConvertKit, Klaviyo, Beehiiv
- **Search**: Kbar (local) or Algolia (hosted)

## 📖 Sample Content

Explore these example posts to see the platform's capabilities:

- **[Markdown Guide](https://tailwind-nextjs-starter-blog.vercel.app/blog/github-markdown-guide)** - Complete formatting reference
- **[Image Optimization](https://tailwind-nextjs-starter-blog.vercel.app/blog/guide-to-using-images-in-nextjs)** - Next.js image best practices
- **[Math Typesetting](https://tailwind-nextjs-starter-blog.vercel.app/blog/deriving-ols-estimator)** - KaTeX mathematical notation
- **[MDX Components](https://tailwind-nextjs-starter-blog.vercel.app/blog/pictures-of-canada)** - Interactive content examples
- **[Long-form Content](https://tailwind-nextjs-starter-blog.vercel.app/blog/the-time-machine)** - Typography showcase
- **[Nested Routing](https://tailwind-nextjs-starter-blog.vercel.app/blog/nested-route/introducing-multi-part-posts-with-nested-routing)** - Organized content structure

## ⚡ Setup Checklist

1. **Clone**: `npx degit 'timlrx/tailwind-nextjs-starter-blog' my-blog`
2. **Configure**: Edit `data/siteMetadata.js` with your information
3. **Author**: Update `data/authors/default.md` with your profile
4. **Navigation**: Customize `data/headerNavLinks.ts` menu items
5. **Projects**: Edit `data/projectsData.ts` to showcase your work
6. **Content**: Add your first post in `data/blog/`
7. **Security**: Update CSP in `next.config.js` for external services
8. **Deploy**: Push to Vercel for automatic deployment

## 💻 Development

### Installation

```bash
# Install dependencies
yarn install
# or
npm install

# Windows users may need:
$env:PWD = $(Get-Location).Path
```

### Development Server

```bash
# Start development server
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your blog.

### Live Editing
- Edit layouts in `app/` directory
- Add content in `data/` directory  
- Changes auto-reload in development
- Hot module replacement for fast iteration

## 🎨 Customization Guide

### Key Configuration Files

| File | Purpose |
|------|----------|
| `data/siteMetadata.js` | Main site configuration and settings |
| `data/authors/default.md` | Default author profile (required) |
| `data/projectsData.ts` | Projects page content |
| `data/headerNavLinks.ts` | Navigation menu items |
| `data/logo.svg` | Site logo (replace with yours) |

### Content Directories

| Directory | Contents |
|-----------|----------|
| `data/blog/` | Blog posts in MDX format |
| `data/authors/` | Author profile pages |
| `public/static/` | Images, favicons, and static assets |

### Styling & Layout

| File | Purpose |
|------|----------|
| `tailwind.config.js` | Tailwind CSS configuration |
| `css/tailwind.css` | Global styles and customizations |
| `css/prism.css` | Code block syntax highlighting |
| `layouts/` | Page layout templates |
| `components/MDXComponents.tsx` | Custom MDX components |

### Available Layouts

**Post Layouts:**
- `PostLayout` - Default 2-column with author info
- `PostSimple` - Simplified single-column layout  
- `PostBanner` - Layout with featured banner image

**List Layouts:**
- `ListLayout` - Blog listing with search bar
- `ListLayoutWithTags` - Blog listing with tag sidebar

### Technical Configuration

| File | Purpose |
|------|----------|
| `contentlayer.config.ts` | Content processing and MDX plugins |
| `next.config.js` | Next.js configuration and security headers |
| `app/` | Next.js App Router pages and routing |

## ✍️ Content Creation

Content is managed using [Contentlayer](https://www.contentlayer.dev/) for type-safe content processing.

### Frontmatter Reference

Follows [Hugo's frontmatter standards](https://gohugo.io/content-management/front-matter/):

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `title` | ✅ | string | Post title |
| `date` | ✅ | date | Publication date (YYYY-MM-DD) |
| `tags` | ❌ | array | Topic tags |
| `lastmod` | ❌ | date | Last modified date |
| `draft` | ❌ | boolean | Hide from production |
| `summary` | ❌ | string | Post excerpt |
| `images` | ❌ | array | Featured images |
| `authors` | ❌ | array | Author references |
| `layout` | ❌ | string | Layout component |
| `canonicalUrl` | ❌ | string | SEO canonical URL |

### Example Post

```markdown
---
title: 'Getting Started with Next.js'
date: '2024-01-15'
lastmod: '2024-01-16'
tags: ['nextjs', 'react', 'tutorial']
draft: false
summary: 'Learn how to build modern web applications with Next.js'
images: ['/static/images/nextjs-tutorial.jpg']
authors: ['default']
layout: PostLayout
canonicalUrl: https://yourblog.com/blog/nextjs-tutorial
---

# Your content here

Write your blog post using Markdown and MDX components.
```

## 🚀 Deployment Options

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/timlrx/tailwind-nextjs-starter-blog)

1. Connect your GitHub repository
2. Configure environment variables
3. Deploy automatically on every push

### GitHub Pages

Use the included workflow:

1. Go to `Settings > Pages > Build and deployment`
2. Select "GitHub Actions" as source
3. Push to trigger automatic deployment

### Static Export

For static hosting (S3, Firebase, etc.):

```bash
# Basic static export
EXPORT=1 UNOPTIMIZED=1 yarn build

# With subdirectory deployment
EXPORT=1 UNOPTIMIZED=1 BASE_PATH=/myblog yarn build

# Serve locally
npx serve out
```

### Netlify

Netlify's Next.js runtime handles SSR, ISR, and other Next.js features automatically. See [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/) for details.

### Static Build Considerations

For static exports, consider:
- Comment out `headers()` in `next.config.js`
- Remove API routes (newsletter, etc.)
- Use alternative image optimization if needed

## ❓ FAQ & Resources

### Common Questions
- **[Custom MDX Components](faq/custom-mdx-component.md)** - Add interactive components
- **[Customize Search](faq/customize-kbar-search.md)** - Configure Kbar search
- **[Docker Deployment](faq/deploy-with-docker.md)** - Container deployment

### Getting Help
- 📖 **[User Guide](USER_GUIDE.md)** - Content creation guide
- 🛠️ **[Developer Docs](DEVELOPER_DOCS.md)** - Technical documentation
- 🐛 **[Issues](https://github.com/timlrx/tailwind-nextjs-starter-blog/issues)** - Bug reports and feature requests
- 💬 **[Discussions](https://github.com/timlrx/tailwind-nextjs-starter-blog/discussions)** - Community support

## 🙏 Support

If you find this template helpful:

- ⭐ **Star this repository**
- 🐦 **Share on social media**
- 💖 **[Sponsor the project](https://github.com/sponsors/timlrx)**
- 🤝 **Contribute improvements**

## 📄 License

[MIT License](LICENSE) © [Timothy Lin](https://www.timlrx.com)

---

**Ready to start blogging?** Follow the [Quick Start](#-quick-start) guide above!