---
sidebar_position: 6
---

# ISBN Magic

ISBN Magic is a Google Sheets add-on that looks up bibliographic data for a list of ISBNs — title, authors, publisher, cover image, dimensions, and more — and writes the results directly into your spreadsheet.

## Setup

ISBN Magic is available from the [Google Workspace Marketplace](https://workspace.google.com/marketplace). After installing:

1. Open Google Sheets
2. Click **ISBN Magic** in the menu bar
3. Click **Open ISBN Magic** — you'll be prompted to connect your Bookhead account the first time

Your account is connected automatically using your Google identity. No password needed.

## How to use it

1. **Select your ISBNs** — highlight the cells containing ISBNs (one per row, first column of your selection)
2. **Open the sidebar** — ISBN Magic → Open ISBN Magic
3. **Choose your fields** — pick which data to retrieve (see [Available fields](#available-fields) below)
4. **Click Get ISBN data** — results write to the columns immediately to the right of your selection

The sidebar shows how many ISBNs are selected so you know what you're about to run.

## Available fields

Fields are grouped into sections. Click a section header to expand it.

### Core
The most commonly needed fields, selected by default.

| Field | Description |
|---|---|
| Title | Book title |
| Authors (joined) | All authors as a single string |
| ISBN-13 | 13-digit ISBN |
| ISBN-10 | 10-digit ISBN |
| Publisher | Publisher name |
| Binding | e.g. Hardcover, Paperback |
| Date published | Publication date |
| Pages | Page count |
| MSRP | List price in USD |

### Detail

| Field | Description |
|---|---|
| Title (long) | Full title including subtitle |
| ISBN (raw) | ISBN as entered, unformatted |
| Edition | Edition number or name |
| Language | Publication language |
| Dewey decimal | Dewey Decimal classification |
| Subjects (joined) | All subjects as a single string |
| Synopsis | Book description |
| Dimensions (string) | Dimensions as a single string |
| Dimensions (JSON) | Dimensions as structured JSON |

### Dimensions

| Field | Description |
|---|---|
| Length (inches) | |
| Width (inches) | |
| Height (inches) | |
| Weight (pounds) | |

### Images

| Field | Description |
|---|---|
| Image | Cover image (thumbnail) |
| Image (original) | Cover image (full size) |

When an image field is selected, choose how to display it:
- **Show URL** — writes the image URL as text
- **Show image in cell** — embeds the image using an `IMAGE()` formula

### Arrays

| Field | Description |
|---|---|
| Authors (separate columns) | One column per author |
| Subjects (separate columns) | One column per subject |

When Authors is selected, choose the name format:
- **First Last** — e.g. Cormac McCarthy
- **Last, First** — e.g. McCarthy, Cormac

## Credits

Each ISBN lookup uses one credit. Your remaining credits are shown at the bottom of the sidebar.

| Plan | Credits |
|---|---|
| Free | 100 lifetime lookups |
| Faulkner | 1,000 per month |
| McCullers | Unlimited |

To upgrade your plan, visit [bookhead.net](https://bookhead.net).

## Support

For help or feedback, visit [bookhead.net/support](https://bookhead.net/support).
