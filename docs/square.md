---
sidebar_position: 6
---

# Square

Square is an in-store sales system many bookstores use at the counter. Bookhead
connects to Square as an **inventory source**: it reads what you sell and stock
in Square, enriches each book with covers and bibliographic data, and keeps your
online store in sync — so a title you carry in the shop shows up online, complete,
without re-keying it.

:::note
Support for **Clover** as an additional in-store sales system is coming soon.
:::

## 1. Connecting Square as your inventory source

1. In Bookhead, go to **Integrations** and choose **Square**.
2. Authorize Bookhead to access your Square account. This grants read access to
   your catalog and inventory so Bookhead can keep them in sync.
3. Bookhead does an initial read of your Square catalog and begins enriching your
   books with covers and bibliographic data.

Setup involves coordinating your catalog, so if anything is unclear email
[support@bookhead.net](mailto:support@bookhead.net) and we'll help you connect.

## 2. Syncing Square inventory to your online store

Once Square is connected, Bookhead keeps your online store in sync with what you
carry in the shop. For each book in Square, Bookhead:

- Looks up the **cover image** and **bibliographic data** (title, author,
  publisher, description, and more) from the ISBN
- Creates or updates the matching product on your online store — for example, your
  [Squarespace](/squarespace) store — so listings appear complete and
  ready to sell
- Keeps **quantities** aligned as copies sell in the shop or online

You enter and sell books the way you already do in Square; Bookhead handles the
enrichment and the online listing.

## 3. Bringing new titles in from a distributor file

When you receive a shipment from a distributor, you can bring those titles into
your catalog from the shipment's order file instead of entering them by hand.
Bookhead accepts order files from **Ingram** and **Edelweiss**.

The receiving workflow:

1. **Receive the shipment** and locate its order file (for an Ingram order, the
   invoice/shipment file that lists each title, its ISBN, the quantity received,
   and the price).
2. **Import the file into Bookhead.** Bookhead reads each ISBN and shows you the
   list of titles found.
3. **Review** the quantities and prices against what physically arrived.
4. **Import.** For each title, Bookhead looks up the cover and bibliographic data,
   checks it against your existing catalog, and creates or updates the book — so
   new titles come in ready to sell and existing titles are topped up rather than
   duplicated.

## 4. How sync stays consistent

Bookhead keeps Square and your online store consistent by matching books on
**ISBN** and syncing changes in the background:

- When a copy **sells in the shop** through Square, Bookhead lowers the quantity
  on your online store so you don't sell a book you no longer have.
- When a copy **sells online**, the change flows back so your counts stay aligned.
- When you **add or restock** titles (by distributor file or in Square), the
  online listings are created or updated to match.

Matching on ISBN is what prevents duplicates: the same title coming in again
updates the product you already have rather than creating a second one. If a count
ever looks off, email [support@bookhead.net](mailto:support@bookhead.net).
