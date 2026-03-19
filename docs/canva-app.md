---
sidebar_position: 7
---

# Bookhead for Canva

The Bookhead Canva app lets you pull book covers, metadata, and staff reviews directly into your designs — no copy-pasting, no manual uploads.

## Installation

Search for **Bookhead** in the Canva App Marketplace and click **Add to Canva**. Once installed, open it from the Apps panel in the Canva editor.

You'll be prompted to connect your Bookhead account the first time you open the app.

## Search

Enter one or more ISBNs (one per line or comma-separated) to look up books. Each ISBN lookup uses one credit from your plan.

Once results load, click any book to see its full metadata. From there you can drag or click to add to your design:

- Cover image
- Title
- Author(s)
- Publisher
- ISBN
- Synopsis
- Critical reviews from LitHub (when available)

## Recent

Shows the last 10 books you've looked up, pulled from your local cache. No credits used — these are already stored on your device.

## Lists

Lists lets you connect a Google Sheet or CSV file containing your ISBNs. When you load a list, the books appear ready to browse and drag into your design.

### CSV format

Your file must have a header row with at minimum an `isbn` column. Column names are case-insensitive.

| Column | Required | Description |
|---|---|---|
| `isbn` | Yes | ISBN-10 or ISBN-13 of the book |
| `reviewer` | No | Name of the staff member who wrote the review |
| `review_text` | No | The staff review text |

When `reviewer` and `review_text` columns are present, they appear as draggable fields alongside the standard book metadata.

**[See an example sheet](https://docs.google.com/spreadsheets/d/1ZzUYjBgQGK5N-1OEwMTh-V16Xu_-riNnschMt91AiBk/edit?usp=sharing)**

Dashes and spaces in ISBNs are stripped automatically. Duplicate ISBNs are deduplicated (first row wins).

### Using Google Sheets

1. Build your sheet with the columns above
2. Click **Share → Anyone with the link → Viewer**
3. Copy the link and paste it into Lists in Canva

The app converts the share URL to a CSV export automatically — no extra steps needed.

### Using Airtable

Airtable doesn't require OAuth for public views. To connect an Airtable base:

1. Open your base and go to the view you want to share
2. Click **Share view → Turn on share link → Enable public access**
3. Append `?format=csv` to the share URL
4. Paste that URL into Lists in Canva

Alternatively, export your Airtable view as a CSV (Grid view → Download CSV) and host it in Google Sheets.

### Using any CSV

Any publicly accessible CSV URL works — Google Sheets, Airtable, Dropbox, a file on your own server, etc. The file just needs to be reachable without authentication and have the columns above.

### Saving lists

Lists are saved locally in your browser. You can save multiple lists (Staff Picks, Summer Reading, Classroom Lists, etc.) and switch between them. Click **Remove** next to any list to delete it.

## Credits

Each ISBN lookup uses one credit. Loading a list with 20 books uses 20 credits — unless those books are already cached from a previous lookup, in which case they're free.

| Plan | Credits |
|---|---|
| Free | 100 lifetime lookups |
| Faulkner | 1,000 per month |
| McCullers | Unlimited |

To upgrade, visit [bookhead.net](https://bookhead.net).

## Support

For help or feedback, visit [bookhead.net/support](https://bookhead.net/support).
