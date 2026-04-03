---
sidebar_position: 9
---

# DesignRSS for Canva

DesignRSS lets you pull posts from any newsletter or blog directly into your Canva designs — no copy-pasting. Connect your publication, browse your posts, and drag content (title, author, date, cover image, body text) straight onto the canvas.

## Installation

Search for **DesignRSS** in the Canva App Marketplace and click **Add to Canva**. Once installed, open it from the Apps panel in the Canva editor.

## Connecting a publication

1. Choose your platform from the dropdown (Substack, WordPress, Ghost, Medium, Beehiiv, or Other RSS)
2. Paste your publication URL — the homepage works for most platforms; you don't need to find the feed URL
3. Click **Connect**

Your posts will load as a browsable list showing title and date.

### Supported platforms

| Platform | How it connects |
|---|---|
| Substack | Substack API — retrieves full archive |
| WordPress | WordPress REST API — retrieves full archive |
| Ghost | RSS feed discovery |
| Medium | RSS feed discovery |
| Beehiiv | RSS feed discovery |
| Other RSS | RSS/Atom feed, with automatic discovery from homepages |

### Loading a specific post

If a post is older than what the feed returns, you can load it directly:

1. Select **Other RSS** (or any RSS-backed platform)
2. Paste the full URL of the specific post (e.g. `https://mysite.com/p/some-old-post`)
3. Click **Connect** — the app detects it's a post URL, scrapes its metadata, and opens it directly

## Using post content

Once a post is open, you can drag or click any field to add it to your design:

| Field | Description |
|---|---|
| Title | Post headline |
| Subtitle | Short description or deck |
| Author | Byline |
| Date | Publication date |
| Publication | Newsletter/blog name |
| Teaser | Plain-text excerpt |
| Cover image | Post cover photo (drag onto canvas) |

The **Insert full body** button drops the full post text as a single text element. For RSS-backed platforms this uses the feed's full text; for Substack and WordPress it fetches the full HTML from the post page.

## Technical details

Post data is fetched from the RSS Worker at `https://printer-rss.bookhead.workers.dev`. See [RSS Worker API](./rss-worker.md) for the full API reference.

The Canva app lives at `printer-canva/` in the monorepo. It uses the Design Editor intent — posts are inserted as draggable elements, not as data connector rows.
