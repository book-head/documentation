---
sidebar_position: 8
---

# RSS Worker API

The RSS Worker fetches and parses RSS/Atom feeds (and individual post pages) for use in our DesignRSS app on Canva. It handles feed discovery, pagination, and normalization across multiple platforms.

**Base URL:** `https://printer-rss.bookhead.workers.dev`

## Endpoints

### `GET /posts`

Returns all posts from a publication's feed.

**Query parameters:**

| Parameter | Required | Description |
|---|---|---|
| `url` | Yes | Publication URL (homepage, feed URL, or any page on the site) |
| `platform` | Yes | One of: `substack`, `wordpress`, `rss` |

**Response:**

```json
{
  "publication": "My Newsletter",
  "posts": [
    {
      "id": "https://example.com/p/my-post",
      "slug": "my-post",
      "title": "My Post Title",
      "subtitle": "A short description",
      "date": "2024-03-01",
      "url": "https://example.com/p/my-post",
      "image": "https://example.com/cover.jpg",
      "author": "Jane Smith",
      "publication": "My Newsletter",
      "teaser": "Plain text excerpt..."
    }
  ]
}
```

**Platform notes:**

- `substack` — Uses the Substack API (`/api/v1/archive`). Paginates through all posts automatically.
- `wordpress` — Uses the WordPress REST API (`/wp-json/wp/v2/posts`). Paginates through all posts automatically.
- `rss` — Fetches and parses an RSS 2.0 or Atom feed. If you supply a homepage or post URL instead of a direct feed URL, the worker will look for a `<link rel="alternate" type="application/rss+xml">` tag to discover the feed. Falls back to trying common feed paths (`/feed`, `/rss`, `/rss.xml`, `/atom.xml`). Returns however many posts the feed contains.

---

### `GET /post`

Returns the full body HTML of a single post, plus a plain-text version.

**Query parameters:**

| Parameter | Required | Description |
|---|---|---|
| `url` | Yes | Publication URL (same base URL used for `/posts`) |
| `platform` | Yes | One of: `substack`, `wordpress`, `rss` |
| `slug` | Yes for `substack`/`wordpress` | Post slug (from the `slug` field in `/posts` response) |

For `platform=rss`, pass the full post URL as `url` — the `slug` parameter is ignored and the worker scrapes og/meta tags directly from the post page.

**Response:**

```json
{
  "body_html": "<p>Full post HTML...</p>",
  "body": "Full post plain text..."
}
```

For `platform=rss`, the response is a single-post `PostsResult` (same shape as `/posts`) rather than `PostResult`, since og/meta scraping returns metadata fields rather than full body HTML.

---

## Feed discovery (platform=rss)

When `platform=rss`, you can pass any of the following as `url`:

- The direct feed URL (e.g. `https://example.com/feed`)
- The site homepage (the worker discovers the feed via `<link rel="alternate">`)
- A specific post URL (for `/post` — returns metadata from og tags)

This means users don't need to know their feed URL — the homepage works in most cases.
