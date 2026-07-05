---
sidebar_position: 6
---

# How syncing works

Syncing is how Bookhead keeps the products on your Shopify store matched to your
real inventory. Understanding it comes down to two words: **read** and **write**.

## Bookhead reads your Shopify store

Bookhead reads your existing Shopify catalog so it knows what's already there.
This read is what makes syncing reliable:

- **Recognizing books you already carry** — by matching on ISBN, Bookhead can
  tell an existing product from a brand-new one.
- **Avoiding duplicates** — when a book you already have comes in again (for
  example, in a new distributor shipment), Bookhead updates the product you
  already have instead of creating a second one.
- **Updating the right product** — when a quantity or price changes, Bookhead
  knows exactly which Shopify product to update.

Reading is for sync only. Your Shopify store is **never** treated as a source of
new books — see [Choosing your inventory source](./inventory-source.md).

## Bookhead writes to your Shopify store

When you bring in inventory from a source — a distributor file or manual entry —
Bookhead writes the result to **your own Shopify store only**:

- **New titles** become new, enriched products (cover + bibliographic data +
  price and quantity).
- **Titles you already carry** are updated in place.

## One direction, always

Putting the two halves together gives the same one-directional flow described in
the [overview](./overview.md):

```
  external source  ───▶  Bookhead (enrich)  ───▶  your Shopify store
```

Bookhead reads Shopify to stay in sync, and writes new and updated products to
your own Shopify store. Inventory never flows the other way, and nothing is
written anywhere other than your own store.

## How current it stays

After an import or a manual addition, the corresponding products on your Shopify
store reflect the change. If you ever see a product that looks out of date, email
[support@bookhead.net](mailto:support@bookhead.net) and we'll take a look.
