---
sidebar_position: 1
slug: /
---

# Selling on Squarespace

Bookhead can list your books for sale on your Squarespace website. If you have a
bookstore system connection, Bookhead automatically syncs your bookstore
inventory with the product listings on your Squarespace website. Whenever a copy
changes in your local inventory, Bookhead updates the Squarespace inventory
within 15 minutes.

## Requirements

- **Squarespace plan with Inventory API access:**
  - Commerce Basic or higher (old plans)
  - Core or higher (new plans)
  - [Compare Squarespace plans →](https://www.squarespace.com/pricing)
- Store Administrator access

**Not sure which plan you have?** When you try to create an API key in Step 1,
Squarespace will let you know if you need to upgrade. [Learn more about
Squarespace plans →](https://support.squarespace.com/hc/en-us/articles/206536797-Choosing-the-right-Squarespace-plan)

## How your inventory is transformed to Squarespace products

Bookhead stores your inventory using a [data
model](/docs/inventory#about-bookheads-data-model) of `Work → Edition → Copy`. For
Squarespace, each `Edition` becomes a product and each `Copy` becomes a variant
of that product:

```
Product (Edition level)
- Title: "{Work Title} ({Edition Details})"
- Description: Edition metadata (ISBN, publisher, etc.)
- Tags: Used for work/edition grouping
└── Variants (Copy level)
    - Attribute: Condition
    - Price and quantity per variant
```

## Next steps

- [Connecting your Squarespace store](./connecting.md)
- [Managing product categories](./categories.md)
- [Processing orders](./orders.md)
