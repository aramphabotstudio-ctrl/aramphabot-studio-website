# Vercel Deployment Guide

This repository currently contains a Vite + React + TypeScript website. It is deployable on Vercel directly from GitHub. If Vercel asks for a framework preset, choose **Vite**.

## 1. Pre-Deployment Checklist

Run these locally before deploying:

```bash
npm install
npm run lint
npm run build
```

Expected build output:

```text
dist/
```

## 2. Vercel Project Settings

In Vercel, import the GitHub repository:

```text
aramphabotstudio-ctrl/aramphabot-studio-website
```

Use these settings:

```text
Framework Preset: Vite
Install Command: npm install
Build Command: npm run build
Output Directory: dist
Development Command: npm run dev
```

The included `vercel.json` file adds route rewrites so direct URLs such as `/about`, `/projects`, and `/projects/boutique-hotel` load the single-page app correctly.

## 3. Environment Variables

Set this environment variable in Vercel:

```text
VITE_SITE_URL=https://www.your-production-domain.com
```

Use the final production domain without a trailing slash. This value is used by runtime SEO metadata for canonical URLs, Open Graph URLs, and structured data.

Also update these static files once the real domain is confirmed:

```text
index.html
public/robots.txt
public/sitemap.xml
```

Replace `https://aramphabot-studio.local` with the final production domain.

## 4. Deploy From GitHub

1. Open Vercel and choose **Add New Project**.
2. Import `aramphabotstudio-ctrl/aramphabot-studio-website`.
3. Confirm the Vite settings above.
4. Add `VITE_SITE_URL`.
5. Deploy.
6. After Vercel provides a preview URL, test the main pages:
   - `/`
   - `/about`
   - `/projects`
   - `/projects/boutique-hotel`
   - `/services`
   - `/process`
   - `/journal`
   - `/contact`

## 5. Updating Content After Deployment

Most content is centralized in `src/data`.

Project updates:

```text
src/data/projects.ts
```

Use this file to add, edit, or remove projects. Keep `placeholder: true` until project facts, images, year, area, and narrative are owner-approved.

Studio and contact updates:

```text
src/data/site.ts
src/data/company.ts
```

Services, process, and journal updates:

```text
src/data/services.ts
src/data/process.ts
src/data/journal.ts
```

Images:

```text
public/images/
```

After adding or removing public routes or project slugs, update:

```text
public/sitemap.xml
```

## 6. Notes Before Public Launch

- Add the verified studio email and phone number in `src/data/site.ts`.
- Replace placeholder project imagery with owner-approved photographs.
- Replace placeholder project descriptions with verified copy.
- Confirm the final production domain in Vercel and SEO files.
- Submit `https://your-domain.com/sitemap.xml` to Google Search Console.

## 7. Deployment Status

The site can be deployed directly to Vercel from GitHub after the environment variable and production domain updates are completed.
