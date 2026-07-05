---
sidebar_position: 7
---

# How books become Shopify products

When Bookhead writes a book to your Shopify store, it maps your inventory onto
Shopify's product model. Understanding that mapping helps you make sense of what
you see in your Shopify admin.

## The model

Bookhead organizes inventory as **works**, **editions**, and **copies**: a *work*
is the canonical title and author, an *edition* is a specific ISBN/printing of
that work, and a *copy* is an individual physical book with its own condition,
price, and quantity.

On Shopify, each **`Edition` becomes a product**, and each **`Copy` of that
edition becomes a variant**. The variant uses a **Condition** option (e.g., "Very
Good", "Fine") so customers can see the book's condition. Copy-specific images
(condition photos, signature pages, etc.) are assigned to the variant, while the
edition cover image is shared at the product level.

```
Product (one per Edition)
- Title: Work title
- Vendor: Publisher name
- Product type: "Books"
- Product category: "Print Books" (Shopify standard taxonomy — enables tax rates, Google Shopping)
- Description: Synopsis, staff picks, edition details
- Tags: Controlled by tag settings (categories, publisher)
- Option: "Condition" (New, Fine, Very Good, Good, Fair, Poor)
└── Variant (one per Copy)
    - SKU: Copy SKU
    - Price: Copy price
    - Condition: Copy book condition
    - Images: Copy-specific photos (assigned to variant)
```

## Tags

Tags are controlled by the channel's tag settings and only include what you
enable — publisher name, display categories, and/or store categories. A
`bookhead` tag is always included for identification.

To control how the rich book data on these products is displayed on your
storefront, see [Customizing your Shopify product
pages](./customizing-product-pages.md).
