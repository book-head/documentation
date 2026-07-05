---
sidebar_position: 3
---

# Managing product categories

Bookhead helps you organize your products into categories for your Squarespace
store. Your bookstore system uses category codes (like "FM" for Fiction-Mystery),
and Bookhead lets you map these to customer-friendly display categories (like
"Fiction" or "Mystery").

**How it works:**

1. **Display categories** are the broad groupings customers see on your website
   (e.g., "Fiction", "History", "Children's Books")
2. **Store categories** are the codes from your bookstore system
3. You map store categories to display categories in Bookhead
4. When you export to Squarespace, products get tagged with both the display
   category and the store category name

## Setting up categories in Bookhead

### Step 1: Create display categories

1. Go to **Categories** in the staff menu
2. Click **Create category**
3. Enter a name like "Fiction" or "Children's Books"
4. Repeat for each category you want on your website

### Step 2: Map your store categories

1. Go to **Categories** → **Mappings**
2. You'll see all your bookstore category codes
3. For each code, select a display category from the dropdown
4. The mapping saves automatically

### Step 3: (Optional) Edit category names

Your bookstore category names might look ugly (like "FICTION-MYSTERY/DETECTIVE").
You can give them friendlier names:

1. In the mappings view, click **edit** next to any category name
2. Enter a friendlier name like "Mystery & Detective"
3. Press Enter or click **save**

This custom name will be used as a tag on your Squarespace products.

## Importing categories to Squarespace

Squarespace doesn't allow setting categories via API, so you'll need to import
them via CSV. Here's how:

### Step 1: Create categories in Squarespace first

Before importing, you need to create the category structure in Squarespace:

1. In Squarespace, go to your store and open any product
2. Scroll down to **Categories**
3. Click **Add Category** and create each display category (e.g., "Fiction",
   "History")
4. These must match exactly what you created in Bookhead

[Squarespace's guide to product categories →](https://support.squarespace.com/hc/en-us/articles/206540047-Organizing-products)

### Step 2: Export from Bookhead

1. Go to **Channels** → your Squarespace channel → **Products**
2. Click **Export CSV**
3. Save the file

### Step 3: Import to Squarespace

1. In Squarespace, go to **Commerce** → **Inventory** → **Products**
2. Click **Import** (or the three dots menu → Import)
3. Select your CSV file
4. Squarespace will match products by SKU and update their categories

**Important:** The import updates existing products - it won't create duplicates.
Products are matched by their SKU (ISBN).

[Squarespace's CSV import guide →](https://support.squarespace.com/hc/en-us/articles/205812328-Importing-products-with-a-CSV)
