# Personal Resume & Blog

A modern, fast personal website built with Astro that includes a resume section and a blog. This project is designed to showcase professional experience while providing a platform for sharing technical content.

## Features

- 🚀 **Fast Performance**: Built with Astro for excellent performance and minimal JavaScript
- 📱 **Responsive Design**: Looks great on all devices
- 📝 **Markdown Blog**: Write blog posts easily in Markdown format
- 📊 **Resume Section**: Professional resume page to showcase experience and skills
- ✨ **Modern Styling**: Clean, modern design with Tailwind CSS
- 🔍 **SEO Friendly**: Built-in SEO features including canonical URLs and OpenGraph data

## Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/personal-site.git
cd personal-site

# Install dependencies
npm install

# Start development server
npm run dev
```

## Customization

### Personal Information

1. Update `src/consts.ts` with your name and site description
2. Modify the homepage in `src/pages/index.astro` with your information
3. Update the resume page in `src/pages/resume.astro` with your professional details
4. Edit the about page in `src/pages/about.astro` with your bio
5. Update the footer in `src/components/Footer.astro` with your social links

### Blog Posts

Add new blog posts by creating Markdown files in the `src/content/blog/` directory with the following frontmatter:

```markdown
---
title: 'Your Post Title'
description: 'A brief description of your post'
pubDate: 'Apr 13 2025'
heroImage: '/path-to-image.jpg'
---

Your content goes here...
```

## Project Structure

```text
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Blog posts (Markdown/MDX)
│   │   └── blog/        # Blog posts collection
│   ├── layouts/         # Page layouts
│   ├── pages/           # Pages including resume, blog, about
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
└── tailwind.config.cjs  # Tailwind CSS configuration
```

## Commands

| Command               | Action                                      |
|:----------------------|:--------------------------------------------|
| `npm install`         | Install dependencies                        |
| `npm run dev`         | Start dev server at `localhost:4321`        |
| `npm run build`       | Build for production to `./dist/`           |
| `npm run preview`     | Preview production build locally            |

## Deployment

This site can be deployed to any static hosting service:

- Netlify
- Vercel 
- GitHub Pages
- Cloudflare Pages
- Any static hosting provider

## License

MIT