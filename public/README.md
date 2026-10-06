# Images

Each project needs one file called `screenshot.png` in its own folder. The home page card and the project page both use it.

| Folder | File | Status | Size |
|---|---|---|---|
| `public/purewater-ready/` | `screenshot.png` | Added (from `Portfolio showcase/screenshots/purewater.png`) | 1920 × 1200 |
| `public/the-window-man/` | `screenshot.png` | Added (from `windowman.png`) | 1920 × 1200 |
| `public/nove/` | `screenshot.png` | Added (from `nove.png`) | 1920 × 1200 |
| `public/content-agent/` | `screenshot.png` | Added (from `content-agent.png`) | 1920 × 1200 |
| `public/gemini/` | `screenshot.png` | **Needed.** Take it with live data loaded; offline it shows "Network error" | 1920 × 1200 |
| `public/plyo/` | `screenshot.png` | Added (from `plyo/design-references/plyo-mockup.png`, four app screens) | 1920 × 1051 |

## Hero stream

`public/stream/` holds the 12 tiles that fly past in the hero, captured from the local copies of the client sites and the Content Control Room, plus two Plyo screens. Add a GEMINI tile once you have a screenshot with live data (720 × 1000 WebP each). To swap one, keep the same filename and size. To add or reorder, edit the list in the hero markup in `index.html`. Each card is one `<div class="stream__card">`, and both rails use the same order.

## How to take them

- **Desktop screenshots:** 16:10, desktop width, no browser chrome, no personal data on screen. 2880 × 1800 from a Retina screen is fine; scale it down to 1920 × 1200 before adding it to keep the page fast. Keep each file under about 1 MB.
- The top of the image matters most. The cards crop from the top down.

Until a file exists, the frame shows "Screenshot to follow" rather than a broken image.

## One thing to check

The current Pure Water Ready screenshot shows "Horsham · West Sussex" in the site's hero. The brief says not to name the town. If that matters to you, retake it scrolled to the quote calculator, or crop the hero text out.
