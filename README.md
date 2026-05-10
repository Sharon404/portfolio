# Creative Portfolio Platform

A production-ready portfolio website that consolidates design work, video showcases, and GitHub code projects into one employer-ready link.

## Overview

This portfolio supports:
- Design work from Canva, Figma, and related tools
- Video showcase content (YouTube/Vimeo embeds)
- Code projects from GitHub
- Case studies with problem, process, and outcome

## Features

- Responsive design gallery with category filters
- Video embed section with optimized layout
- GitHub integration with graceful fallback data
- Case study listing and dynamic detail pages
- About and Contact pages with recruiter-focused actions
- SEO metadata, robots, and sitemap
- Accessibility improvements (skip link, focus states, reduced motion support)
- Analytics integration with Vercel Analytics and Speed Insights

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel Analytics

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create local environment file:

```bash
cp .env.example .env.local
```

3. Set GitHub values in `.env.local` (`GITHUB_TOKEN` is optional):

```env
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=
```

With no token, the site still loads public repositories but uses GitHub's lower unauthenticated rate limits.

4. Run development server:

```bash
npm run dev
```

5. Build production bundle:

```bash
npm run build
npm run start
```

## Content Editing

Update portfolio content in:
- `src/content/design-projects.ts`
- `src/content/videos.ts`
- `src/content/code-projects.ts`
- `src/content/case-studies.ts`

For GitHub code projects with custom display names, ordering, and images, edit:
- `src/content/repo-overrides.ts`

Example entry:

```ts
myrepo: {
	displayName: "My Best Project",
	description: "Short polished description for employers.",
	forceTop: true,
	liveUrl: "https://my-live-demo.com",
	screenshot: {
		src: "/projects/myrepo-cover.jpg",
		alt: "Project preview",
		width: 1200,
		height: 800,
	},
}
```

How to add your own media image files:
1. Put image files in `public/projects/`.
2. Reference them as `/projects/file-name.jpg` in `repo-overrides.ts`.
3. Use 1200x800 images when possible for consistent cards.

## Deployment

Recommended deployment flow:
1. Push to GitHub.
2. Import repository into Vercel.
3. Configure environment variables in Vercel.
4. Deploy.

The project is configured for automatic deployments on push.

## Project Structure

- `src/app`: Route pages and metadata routes
- `src/components`: UI, layout, motion, media, and analytics components
- `src/content`: Portfolio data sources
- `src/lib`: Utility modules and typed models
- `docs`: Planning, standards, and operational docs

## Documentation

Additional implementation documentation is available in:
- `docs/07-deployment-runbook.md`
- `docs/08-maintenance-cadence.md`

## License

MIT
