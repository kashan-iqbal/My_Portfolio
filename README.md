# kashan-iqbal.dev

Portfolio for Kashan Iqbal — Full Stack Engineer, fintech.

Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript.

```bash
npm run dev     # http://localhost:3000
npm run build
```

## Editing content

**All copy and facts live in one file: [`app/data/site.ts`](app/data/site.ts).**
Components read from it and contain no hardcoded claims. Change a date, a
metric or a job title there and it updates everywhere — page copy, JSON-LD
structured data, and metadata all derive from it.

This is deliberate. The previous version had the same job listed with different
dates in different places, which is the fastest way to look untrustworthy to a
client who also has your résumé open.

### Keeping it aligned with the résumé

`app/data/site.ts` mirrors `public/kashan-iqbal-resume.pdf`. If you update the
résumé, update the data file in the same sitting. In particular:

- Job titles, employers, locations and periods must match exactly.
- Every metric on the site should be traceable to a résumé bullet.
- The site commits to **one** positioning — Full Stack Engineer, fintech-focused.
  The role-specific résumé variants (backend, frontend, AI) are for job
  applications; deliberately keeping them off the site is what stops it reading
  as a generalist pitch.

## Notes

- **Scroll animations** are progressive enhancement. The server renders content
  plain and visible; the inline script in [`app/layout.tsx`](app/layout.tsx)
  adds a `.js` class, and only then does `.reveal` start hidden. If JS fails,
  the page is still fully readable — verify this stays true by checking the
  server HTML contains no `opacity:0`.
- **SEO**: the page is server-rendered (no `ssr: false` dynamic imports), with
  canonical URL, OpenGraph, and `Person` JSON-LD generated from the site data.
  `robots.txt` and `sitemap.xml` come from `app/robots.ts` and `app/sitemap.ts`.
- **Contact form** posts to [`app/api/contact/route.ts`](app/api/contact/route.ts),
  which sends over SMTP with Nodemailer. Credentials live in `.env.local`
  (gitignored) — see [`.env.example`](.env.example) for the required variables.
  Nothing secret reaches the browser.

  The route validates with the same zod schema as the form
  ([`app/lib/contact-schema.ts`](app/lib/contact-schema.ts)), throttles to 5
  submissions per IP per hour, drops honeypot hits silently, strips CR/LF from
  header-bound fields, and sets `Reply-To` to the sender so replies go straight
  back to them.

  **Deploying:** `.env.local` is not uploaded. Set the same variables in your
  host's dashboard (Netlify: Site configuration → Environment variables), or the
  form will return 502 in production.
- **Theme** is handled by `next-themes` with a class strategy; Tailwind's `dark`
  variant is remapped to that class in `app/globals.css`.
