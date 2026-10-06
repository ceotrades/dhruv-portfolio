# Deploy

Plain HTML, CSS and JavaScript. No build step, no npm install.

## Where everything lives

| Project | Live | Source |
|---|---|---|
| Portfolio (this folder) | not deployed yet, see step 3 | github.com/ceotrades/dhruv-portfolio (public) |
| GEMINI | geminiceo.netlify.app | github.com/ceotrades/gemini-trading-dashboard (public) |
| AI Content Agent | ai-content-agent-liard.vercel.app | github.com/ceotrades/ai-content-agent (public) |
| Plyo | runs on device, no live link | github.com/ceotrades/plyo (public) |
| Pure Water Ready | purewaterreadywindowcleaning.co.uk | github.com/ceotrades/pure-water-ready (private) |
| The Window Man | thewindowmanpembs.co.uk | github.com/ceotrades/the-window-man (private) |
| NOVÉ | noveconcierge.com | github.com/ceotrades/nove-concierge (private) |

## 1. One placeholder left

`LINKEDIN_URL` appears in `index.html` and every file in `projects/` (header and footer links). Replace it with your LinkedIn profile URL. In VS Code: `Ctrl+Shift+H`, type `LINKEDIN_URL`, type the URL, Replace All.

Check nothing is left:

```
grep -rn "LINKEDIN_URL" index.html projects/
```

## 2. Preview it locally

Double-click `index.html`. All paths are relative, so the styling, fonts and screenshots load straight from disk.

## 3. Deploy on Vercel

1. vercel.com → Add New → Project → import `ceotrades/dhruv-portfolio`.
2. Framework preset: **Other**. Build command: empty. Output directory: empty.
3. Deploy.

`vercel.json` turns on clean URLs, so `/projects/gemini` works without `.html`. Every push to GitHub redeploys on its own.

## 4. Custom domain

Vercel → the project → Settings → Domains → add the domain, then set the DNS record Vercel shows you at your registrar.

## What gets deployed

`.vercelignore` keeps `PRODUCT.md`, `DESIGN.md`, `DEPLOY.md` and the `.impeccable/` design notes off the live site. They stay in the repo for reference.
