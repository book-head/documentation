---
sidebar_position: 3
---

# Selling on channels

**channels** is a Bookhead Connect feature that allows you to sell your books on multiple sales channels. Currently, we support selling books on **Squarespace**, **eBay**, and **Biblio**, and soon we'll support **Shopify**. This automatic inventory data syncing system keeps your bookstore's local store inventory up to date on all of your online sales channels.

### Supported platforms

We support these e-commerce platforms and marketplaces:
- **[Squarespace](#squarespace)**
- **[Shopify](#shopify)**
- [eBay]
- [Biblio]

## Squarespace

Bookhead can list your books for sale on your Squarespace website. If you have a point of sales connection, Bookhead automatically syncs your point of sales inventory with the product listings on your Squarespace website. Whenever a copy changes in your local inventory, Bookhead updates the Squarespace inventory within 15 minutes.

### Requirements

- **Squarespace plan with Inventory API access:**
  - Commerce Basic or higher (old plans)
  - Core or higher (new plans)
  - [Compare Squarespace plans →](https://www.squarespace.com/pricing)
- Store Administrator access

**Not sure which plan you have?** When you try to create an API key in Step 1, Squarespace will let you know if you need to upgrade. [Learn more about Squarespace plans →](https://support.squarespace.com/hc/en-us/articles/206536797-Choosing-the-right-Squarespace-plan)

### How to Connect Your Squarespace Store

**Step 1: Navigate to Developer API Keys in Squarespace**

1. Log into your Squarespace account
2. Go to **Settings** → **Developer Tools** → **Developer API Keys**

Need help? [Squarespace's API key documentation →](https://support.squarespace.com/hc/en-us/articles/236297987-Squarespace-API-keys)

![Squarespace Settings showing Developer API Keys option](/img/docs/squarespace-api-keys.png)

**Step 2: Create and Configure Your API Key in Squarespace**

1. Click **Generate Key**
2. Name it "Bookhead" 
3. Under **Permissions**, select:
   - **Products** (Read and Write)
   - **Inventory** (Read and Write)
   - **Orders** (Read and Write)
   - **Profiles** (Read Only)
4. Click **Generate Key** in the top right corner of the popup box

![API key generation form with Bookhead permissions selected](/img/docs/squarespace-generate-api-key.png)

**Step 3: Copy Your API Key**

**Important:** Copy the key immediately and store it in a safe place, like a password. You'll only see it once! If you lose it, you'll need to generate a new one.

![Generated API key with copy button highlighted](/img/docs/squarespace-generated-api-key.png)

Need help? [Squarespace's API key documentation →](https://support.squarespace.com/hc/en-us/articles/236297987-Squarespace-API-keys)

**Step 4: Add Your API Key to Bookhead**

1. Log into your Bookhead account: `https://<yourstore>.bookhead.net`
2. Go to **Channels** → **Create New Channel**
3. Select **Squarespace**
4. Paste your API key into the "Access token" field
5. Click **Save**

**Step 5: Watch your books sync from your point-of-sale to Squarespace!**

Your products will be queued up to sync to Squarespace, and will start syncing within the hour. This initial upload will include a lot of products, so this will take a long time!

Email support@bookhead.net to let us know you've connected Squarespace. We'll verify everything works as expected.

### Processing Orders from Squarespace

When a customer places an order on your Squarespace website:

1. **You'll receive the order notification from Squarespace** (via email or your Squarespace dashboard)
2. **Process the order in your point-of-sale system** just like you normally would for in-store sales
3. **Mark the order as fulfilled in Squarespace** once you've shipped it
4. **Bookhead automatically updates your inventory** when your point-of-sale processes the sale

**Important:** Continue using your normal fulfillment workflow. Bookhead keeps your inventory in sync but doesn't handle order processing - that stays between you, your point-of-sale, and Squarespace.

## Shopify

**Status:** Beta. Available for testing, full launch coming soon

Bookhead can sync your inventory to your Shopify store. The integration works the same way as Squarespace: automatic inventory sync from your point-of-sale to your Shopify products.

### Early Access

We're currently testing Shopify integration with beta users before our official app store launch. If you'd like early access:

1. Email support@bookhead.net with "Shopify Beta" in the subject line
2. We'll set you up manually and work with you to ensure everything runs smoothly
3. Your feedback helps us improve the integration before the public launch

*Interested in Shopify? Email support@bookhead.net. We'd love to have you as a beta tester!*

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

### Managing product categories

Bookhead helps you organize your products into categories for your online store. Your point-of-sale system uses category codes (like "FM" for Fiction-Mystery), and Bookhead lets you map these to customer-friendly display categories (like "Fiction" or "Mystery"). This works for both Squarespace and Shopify.

**How it works:**

1. **Display categories** are the broad groupings customers see on your website (e.g., "Fiction", "History", "Children's Books")
2. **Store categories** are the codes from your point-of-sale system
3. You map store categories to display categories in Bookhead
4. When you export to Squarespace, products get tagged with both the display category and the store category name

#### Setting up categories in Bookhead

**Step 1: Create display categories**

1. Go to **Categories** in the staff menu
2. Click **Create category**
3. Enter a name like "Fiction" or "Children's Books"
4. Repeat for each category you want on your website

**Step 2: Map your store categories**

1. Go to **Categories** → **Mappings**
2. You'll see all your point-of-sale category codes
3. For each code, select a display category from the dropdown
4. The mapping saves automatically

**Step 3: (Optional) Edit category names**

Your point-of-sale category names might look ugly (like "FICTION-MYSTERY/DETECTIVE"). You can give them friendlier names:

1. In the mappings view, click **edit** next to any category name
2. Enter a friendlier name like "Mystery & Detective"
3. Press Enter or click **save**

This custom name will be used as a tag on your Squarespace products.

#### Importing categories to Squarespace

Squarespace doesn't allow setting categories via API, so you'll need to import them via CSV. Here's how:

**Step 1: Create categories in Squarespace first**

Before importing, you need to create the category structure in Squarespace:

1. In Squarespace, go to your store and open any product
2. Scroll down to **Categories**
3. Click **Add Category** and create each display category (e.g., "Fiction", "History")
4. These must match exactly what you created in Bookhead

[Squarespace's guide to product categories →](https://support.squarespace.com/hc/en-us/articles/206540047-Organizing-products)

**Step 2: Export from Bookhead**

1. Go to **Channels** → your Squarespace channel → **Products**
2. Click **Export CSV**
3. Save the file

**Step 3: Import to Squarespace**

1. In Squarespace, go to **Commerce** → **Inventory** → **Products**
2. Click **Import** (or the three dots menu → Import)
3. Select your CSV file
4. Squarespace will match products by SKU and update their categories

**Important:** The import updates existing products - it won't create duplicates. Products are matched by their SKU (ISBN).

[Squarespace's CSV import guide →](https://support.squarespace.com/hc/en-us/articles/205812328-Importing-products-with-a-CSV)


