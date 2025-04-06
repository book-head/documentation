---
sidebar_position: 3
---

# Selling on channels

**channels** is a Bookhead Connect feature that allows you to sell your books on multiple sales channels. Currently, we support selling books on **Squarespace**, **eBay**, and **Biblio**, and soon we'll support **Shopify**. This automatic inventory data syncing system keeps your bookstore's local store inventory up to date on all of your online sales channels.

### Supported platforms

We support these e-commerce platforms and marketplaces:
- **[Squarespace](#squarespace)**
- **[eBay](#ebay)**
- **[Biblio](#biblio)**

## Squarespace
Bookhead can list your books for sale on your Squarespace website. If you have a point of sales connection, Bookhead automatically syncs your point of sales inventory with the product listings on your Squarespace website. Whenever a copy sells in your local inventory, Bookhead will update the Squarespace inventory within 15 minutes.


### How to sync your inventory to a Squarespace website

You'll need a Squarespace store with an e-commerce subscription.

#### Connect Squarespace with Bookhead:
1. [Create an API key for your Squarespace store by following their latest documentation](https://support.squarespace.com/hc/en-us/articles/236297987-Squarespace-API-keys#toc-api-key-security.).
2. In the Bookhead admin, create a new channel: `https://<store>.bookhead.net/staff/channels/create/`.
3. Choose `Squarespace`.
4. Paste your Squarespace API key into the `access token` text area.
5. Save the new channel.
6. Email <a href="mailto:support@bookhead.net"><strong>support@bookhead.net</strong></a> once you've done all of this, and we will finish setting up the automated syncing.


## Transforming your inventory data so it works on different channels
Bookhead stores your inventory securely in our database. We format this data into what is known as a "data model." Similarly, each channel has its own unique, internal data model. [You can read a deeper explanation about our data model here](./inventory.md#bookheads-data-model), but importantly for this documentation about the **channels** feature, your inventory data is stored in Bookhead's database like this:

```
Work (Canonical author(s) and title)
└── Edition (ISBN, publisher, published year, contributors et)
    └── Copy (condition, price, quantity, cost, etc)
```

Each channel has a different way of transforming this Bookhead data model into the channel's unique data model. The details about each implementation are included in the specific channel sections below.

### How your inventory is transformed to Squarespace products
With the Bookhead data model mentioned above in mind, we transform your Bookhead inventory to Squarespace's unique data model where each `Edition` becomes a product on Squarespace, and each `Copy` becomes a variant of the product:

```
Product (Edition level)
- Title: "{Work Title} ({Edition Details})"
- Description: Edition metadata (ISBN, publisher, etc.)
- Tags: Used for work/edition grouping
└── Variants (Copy level)
    - Attribute: Condition
    - Price and quantity per variant
```


