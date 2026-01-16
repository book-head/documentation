---
sidebar_position: 5
---

# Integrations

Bookhead connects your point-of-sale system to multiple sales channels. Here's what we integrate with and how each one works.

## Point-of-sale systems

### Booklog

Booklog is a point-of-sale system designed specifically for independent bookstores.

| | |
|--|--|
| **Sync method** | Automatic FTP |
| **Frequency** | Every 30 minutes |
| **Setup** | Contact support@bookhead.net |

Booklog automatically exports your full inventory to Bookhead's FTP server. When books are added, sold, or updated in Booklog, the changes sync to Bookhead and then to your sales channels.

### IBID

IBID is a point-of-sale system for independent bookstores.

| | |
|--|--|
| **Sync method** | Automatic FTP |
| **Frequency** | Every hour |
| **Setup** | Contact support@bookhead.net |

IBID automatically exports your inventory to Bookhead's FTP server on an hourly schedule.

### Basil

Basil is an inventory management system for bookstores.

| | |
|--|--|
| **Sync method** | Manual file upload |
| **Frequency** | On demand |
| **Setup** | Self-service via admin |

Basil doesn't support automatic exports, so you'll need to:
1. Export your inventory from Basil as a CSV file
2. Upload it to Bookhead via the [admin interface](/docs/inventory#2-upload-a-file-via-the-admin)

We recommend uploading at least once a week, or whenever you have significant inventory changes.

### Other point-of-sale systems

Don't see your point-of-sale listed? Email support@bookhead.net. We can often add support for new systems within a few days of receiving sample data.

---

## Sales channels

### Squarespace

Squarespace is a website builder with e-commerce features.

| | |
|--|--|
| **Sync method** | API |
| **What syncs** | Products, inventory, prices, tags |
| **Limitations** | Categories must be set via CSV import (API doesn't support categories) |

**How it works:** Bookhead creates and updates products on your Squarespace store automatically. When inventory changes in your point-of-sale, Bookhead updates the Squarespace listing within 30 minutes.

**Good to know:**
- Product categories can't be set via API - you'll need to [import them via CSV](/docs/channels#importing-categories-to-squarespace)
- Tags sync automatically and can be used for filtering
- Inventory updates are near real-time

**Setup:** [See Squarespace setup guide →](/docs/channels#squarespace)

### Shopify

Shopify is an e-commerce platform for online stores.

| | |
|--|--|
| **Sync method** | API |
| **What syncs** | Products, inventory, prices, collections, tags |
| **Limitations** | None - full API support |

**How it works:** Bookhead creates products, manages inventory, and syncs collections to your Shopify store. This is our most full-featured integration.

**Good to know:**
- Collections sync automatically from Bookhead
- Full metafield support for rich product data
- Inventory locations supported

**Setup:** [See Shopify setup guide →](/docs/channels#shopify)

### eBay

eBay is an online marketplace.

| | |
|--|--|
| **Sync method** | API |
| **What syncs** | Listings, inventory |
| **Best for** | Used and rare books |

**How it works:** Bookhead creates listings on eBay for your inventory. Great for reaching buyers searching for specific titles.

**Good to know:**
- Listings are created in your eBay seller account
- Inventory syncs when books sell or quantities change
- Good for books that might not sell locally

### Biblio

Biblio is a marketplace specifically for used, rare, and out-of-print books.

| | |
|--|--|
| **Sync method** | FTP/CSV |
| **What syncs** | Listings, inventory |
| **Best for** | Used and rare books |

**How it works:** Bookhead exports your inventory to Biblio's format, making your books discoverable to collectors and book lovers.

**Good to know:**
- Biblio specializes in used and rare books
- Great for reaching collectors
- Syncs via scheduled file exports

### Other channels

We're always adding new integrations. If there's a platform you'd like to sell on, email support@bookhead.net to let us know.
