---
sidebar_position: 1
---

# Platform Setup

## Connecting

### Squarespace

TODO: add oauth docs

### Basil
Bookhead creates an FTP user for your store and coordinates with Basil.

### eBay 

TODO: add oauth docs

## How Bookhead handles bibliographic data

Bookhead uses a consistent data model (`Work` -> `Edition` -> `Copy`) but maps it differently to each ecommerce platform based on their capabilities. Here's what you need to know about each platform:

### Squarespace
- Each Edition becomes a product
- Each Copy becomes a variant

### eBay 
- Each Copy is a product

### Shopify (Coming Soon)
- Each Edition becomes a product
- Each Copy becomes a variant
- Better variant features like promoting specific variants

