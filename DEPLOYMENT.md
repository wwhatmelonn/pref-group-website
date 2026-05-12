# PREF Group Website Deployment

This project is prepared for an Astro + Sanity production workflow.

## 1. Local Setup

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Fill these values:

```bash
PUBLIC_SITE_URL=https://www.your-domain.com
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2025-01-01
```

Run the Astro site:

```bash
npm run dev
```

Run Sanity Studio:

```bash
npm run sanity dev
```

## 2. Build Check

Before deployment:

```bash
npm run build
```

The generated static site will be in `dist/`.

## 3. Recommended Deployment: Cloudflare Pages

Cloudflare Pages settings:

```text
Framework preset: Astro
Production branch: main
Build command: npm run build
Build output directory: dist
Node.js version: 22.16.0
```

Environment variables:

```bash
PUBLIC_SITE_URL=https://www.pref-group.com
PUBLIC_SANITY_PROJECT_ID=lgivp3xj
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2025-01-01
```

Recommended steps:

1. Push this project to GitHub.
2. In Cloudflare, open Workers & Pages.
3. Create a Pages project.
4. Import the GitHub repository.
5. Use the build settings above.
6. Add the environment variables above.
7. Deploy.
8. In Pages custom domains, add `www.pref-group.com`.
9. In Sanity CORS settings, add:

```text
http://localhost:4321
https://www.pref-group.com
https://*.pages.dev
```

If you also want `pref-group.com` without `www`, add it as another custom domain or create a Cloudflare redirect rule from `pref-group.com` to `www.pref-group.com`.

## 4. Vercel Alternative

1. Push this project to GitHub.
2. Import the GitHub repository in Vercel.
3. Use these settings:

```text
Framework Preset: Astro
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

4. Add the same environment variables from `.env.example`.
5. Deploy.
6. Bind your domain in Vercel.

## 5. Cloudflare Pages Reference

Use these settings:

```text
Framework Preset: Astro
Build Command: npm run build
Build Output Directory: dist
Node.js Version: 20 or newer
```

Add environment variables in Cloudflare Pages project settings.

## 6. Sanity Notes

Current schemas are prepared for:

- Homepage
- Product
- Blog Post
- Component Brand Logo

The current homepage still uses local fallback data, so the site can deploy before Sanity content is entered. After Sanity content is ready, the homepage can be wired to fetch live CMS content.

## 7. Production Checklist

- Replace placeholder contact information in the footer.
- Add real domain to `PUBLIC_SITE_URL`.
- Add inquiry form handling.
- Add sitemap and robots.txt.
- Add analytics and search console verification.
- Configure Sanity CORS for the production domain.
