---
sidebar_position: 1
slug: /
---

# Bookhead for Shopify

Bookhead for Shopify keeps your bookstore's inventory on your Shopify store
accurate and richly detailed — without manual data entry. You bring in books
from a distributor file or by entering them yourself, Bookhead fills in the
covers and bibliographic data automatically, and the finished products are
written to your own Shopify store.

## How inventory flows

Bookhead moves inventory in **one direction**. New books always start from an
outside source, Bookhead enriches them, and the result lands in your Shopify
store:

```
  ┌──────────────────────┐      ┌───────────────────────────┐      ┌─────────────────────┐
  │  Your inventory       │      │  Bookhead                 │      │  Your Shopify store │
  │  source               │ ───▶ │  enriches each book:      │ ───▶ │  products created   │
  │  • distributor file   │      │  • cover image            │      │  and updated        │
  │  • manual entry        │      │  • bibliographic data     │      │                     │
  └──────────────────────┘      └───────────────────────────┘      └─────────────────────┘

        external source     ───▶        Bookhead          ───▶        your Shopify store
```

**Inventory enters from a distributor file or manual entry → Bookhead enriches
it (covers + bibliographic data) → Bookhead writes it to your own Shopify
store.** Books never travel the other way.

## What Bookhead writes

For every book you bring in, Bookhead creates or updates a product on your
Shopify store with:

- **A cover image**, looked up automatically from the book's ISBN
- **Bibliographic data** — title, author, publisher, format, description, and
  more — so the listing is complete without you typing it
- **Price and quantity**, taken from your inventory source

## What Bookhead reads

Bookhead **reads your existing Shopify catalog** for one reason: to keep your
inventory in sync. Reading the catalog lets Bookhead recognize books you already
have on Shopify, avoid creating duplicates, and update the right product when a
quantity or price changes.

Reading is **not** the same as sourcing. Your Shopify store is never treated as
the origin of new books — see [Choosing your inventory
source](./inventory-source.md).

## Where to go next

- [Installing the app](./installing.md)
- [Choosing your inventory source](./inventory-source.md)
- [Importing a distributor file](./importing-distributor-file.md) — the most
  common way to bring in new titles
- [How syncing works](./how-syncing-works.md)
- [How books become Shopify products](./products-and-variants.md)
- [Customizing your Shopify product pages](./customizing-product-pages.md)
- [Frequently asked questions](./faq.md)
