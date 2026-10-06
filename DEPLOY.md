# Deploy

Plain HTML, CSS and JavaScript. No build step, no npm install.

## 1. Fill in the placeholders

Search the folder for each placeholder and replace it with the real URL. Every occurrence needs changing.

| Placeholder | What it is | Where it appears |
|---|---|---|
| `GITHUB_URL` | Your GitHub profile | `index.html`, every file in `projects/` (header links and footer) |
| `LINKEDIN_URL` | Your LinkedIn profile | `index.html`, every file in `projects/` |
| `LIVE_URL_GEMINI` | GEMINI on Vercel | `projects/gemini.html` |
| `SOURCE_URL_GEMINI` | GEMINI repo | `projects/gemini.html` |
| `SOURCE_URL_PLYO` | Plyo repo | `projects/plyo.html` |
| `LIVE_URL_CONTENT_AGENT` | Content Agent on Vercel | `projects/content-agent.html` |
| `SOURCE_URL_CONTENT_AGENT` | Content Agent repo | `projects/content-agent.html` |

The three client sites already link to their real domains: purewaterreadywindowcleaning.co.uk, thewindowmanpembs.co.uk and noveconcierge.com.

Fastest way in VS Code: `Ctrl+Shift+H`, type the placeholder, type the URL, Replace All.

Before you deploy, check nothing is left:

```
grep -rn "_URL" index.html projects/
```

No output means you're done.

If a project ends up with no live link or no public source, delete that whole `<a class="btn" ...>` line from its page. Don't leave a dead button.

## 2. Add the missing screenshots

GEMINI and Plyo still need one. See `public/README.md`.

## 3. Preview it locally (optional)

Double-click `index.html`. All paths are relative, so the styling, fonts and screenshots load straight from disk.

The marker box draws when you hover over a frame. On a phone it draws as you scroll past.

## 4. Push to GitHub

In GitHub Desktop: File → Add Local Repository → pick this folder → "create a repository". Name it `dhruv-portfolio`, Git ignore: None. Create, then Publish, and **untick "Keep this code private"**.

## 5. Deploy on Vercel

1. vercel.com → Add New → Project → import `dhruv-portfolio`.
2. Framework preset: **Other**. Build command: empty. Output directory: empty.
3. Deploy.

`vercel.json` turns on clean URLs, so `/projects/gemini` works without `.html`. Every push to GitHub redeploys on its own.

## 6. Custom domain

Vercel → the project → Settings → Domains → add the domain, then set the DNS record Vercel shows you at your registrar.

## What gets deployed

`.vercelignore` keeps `PRODUCT.md`, `DESIGN.md`, `DEPLOY.md` and the `.impeccable/` design notes off the live site. They stay in the repo for reference.
