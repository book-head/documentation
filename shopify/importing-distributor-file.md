---
sidebar_position: 4
---

# Importing a distributor file

Importing a distributor file is the primary way to bring new titles onto your
Shopify store. This page walks through the whole workflow end to end, using the
most common case: **receiving a shipment from Ingram.**

When you order books from a distributor, the shipment arrives with an
accompanying file — an electronic packing list of everything in the boxes, keyed
by ISBN. Instead of typing those books in one by one, you hand that file to
Bookhead. Bookhead reads each ISBN, enriches it with a cover and bibliographic
data, checks it against what's already on your Shopify store, and creates or
updates the products for you.

## What you'll need

- The **distributor file** for the shipment (for an Ingram order, the invoice or
  shipment file that lists each title, its ISBN, the quantity received, and the
  price). Order files from Ingram or Edelweiss both work.
- The Bookhead app installed and connected to your Shopify store (see
  [Installing the app](./installing.md))

## The receiving workflow, step by step

### Step 1: Receive the shipment and locate the file

When the shipment arrives, find its distributor file. For an Ingram order this is
the shipment/invoice file tied to that order. It lists, for each title, the ISBN,
the quantity in the box, and the price.

### Step 2: Open the import screen in Bookhead

In Bookhead, go to the import screen for distributor files and start a new
import.

### Step 3: Provide the file

Upload the distributor file. Bookhead reads the file and shows you the list of
books it found — each line is one title from the shipment, with its ISBN,
quantity, and price.

### Step 4: Review what was found

Check the list before importing:

- Confirm the **quantities** match what physically arrived in the boxes.
- Confirm the **prices** are what you intend to sell at.
- Bookhead flags titles it can already match to a product on your Shopify store
  versus titles that are brand new, so you can see at a glance what will be
  created and what will be updated.

### Step 5: Import

Start the import. For each title in the file, Bookhead:

1. **Looks up the ISBN** and pulls the **cover image** and **bibliographic data**
   (title, author, publisher, format, description, and more).
2. **Checks your Shopify catalog** to see whether the book already exists there.
3. **Creates or updates** the product accordingly:
   - **New title** → a new, fully enriched product is created on your Shopify
     store.
   - **Title you already carry** → the existing product is updated (for example,
     the quantity from the shipment is added) instead of creating a duplicate.

### Step 6: Confirm the results on your Shopify store

Once the import finishes, open your Shopify admin and spot-check a few of the
titles from the shipment. You should see complete products — cover, title,
author, description, price, and the received quantity — ready to sell.

## How duplicates are avoided

Because Bookhead checks each ISBN against your existing Shopify catalog before
writing, receiving the same title in a later shipment updates the product you
already have rather than creating a second copy of it. This is the same
read-for-sync behavior described in [How syncing
works](./how-syncing-works.md).

## If something doesn't look right

- **A title didn't get a cover or full data** — occasionally a brand-new or
  obscure ISBN has limited data available. The product is still created; you can
  fill in missing details by editing it (see [Creating book products
  manually](./creating-books-manually.md) for the fields involved).
- **Quantities look wrong** — re-check the file against the physical shipment,
  then re-run the import.
- **Anything else** — email [support@bookhead.net](mailto:support@bookhead.net)
  with the shipment details and we'll help.
