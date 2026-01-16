---
sidebar_position: 2
---

# Managing your inventory
Bookhead provides a platform for connecting your local store inventory with various sales channels. We store your inventory securely in our database, and this gives us the ability to list this inventory on whatever sales channel you want to sell your products on. Because we keep an up-to-date copy of your local inventory, we also have an interface for you to explore and manage the inventory.


## Accessing the inventory
To access the inventory, visit `https://<store>.bookhead.net/staff` but replace `<store>` with the store identifier we gave you upon onboarding. Email <strong>support@bookhead.net</strong> if you forgot this.

## Creating inventory
Bookhead can create a book product enriched by an automatic bibliographic creation process with just a few simple pieces of information: isbn, quantity, and price. 

You can create books three different ways:

### 1. Automatically via FTP (recommended)

We have an FTP server that can accept files automatically from your point-of-sale provider. This is the recommended approach for keeping your inventory in sync. Contact support@bookhead.net to set this up, because it requires coordination with your point-of-sale provider.

#### Supported point-of-sale systems

We currently support automatic syncing with:

| Point-of-sale | Sync Method | Frequency |
|---------------|-------------|-----------|
| **Booklog** | Automatic FTP | Every 30 minutes |
| **IBID** | Automatic FTP | Every hour |
| **Basil** | Manual file upload | On demand |

**Note:** Basil doesn't support automatic exports, so you'll need to export your inventory from Basil and upload it to Bookhead manually. See [Upload a file via the admin](#2-upload-a-file-via-the-admin) below.

Each data source has a slightly different way of doing things, like with different column names or capitalization schemes, and Bookhead can work with a variety of formats. Our system is designed so it's easy for us to add a new customer or point-of-sale.

#### How the sync works

1. **Your point-of-sale exports inventory** - Your point-of-sale system automatically sends an inventory file to our FTP server
2. **Bookhead processes the file** - We parse the file and update our database with any changes (new books, price updates, quantity changes, deleted items)
3. **Changes sync to channels** - Inventory changes are pushed to your connected sales channels (Squarespace, Shopify, etc.)

**What gets synced:**
- New books added to your inventory
- Price changes
- Quantity changes (including when items sell)
- Books removed from inventory

**Don't see your point-of-sale listed?** Email support@bookhead.net. We can often add support for new systems quickly.

For detailed setup instructions, see our [FTP Integration Guide](ftp-integration.md).


### 2. Upload a file via the admin

If you can't use automatic FTP syncing, you can manually upload inventory files through the admin interface.

**To upload an inventory file:**

1. Go to `https://<store>.bookhead.net/staff/books/import/`
2. Click **Choose file** and select your CSV file
3. Click **Upload**
4. Bookhead will process your file and show you the results

**What happens during import:**

- **New ISBNs** are looked up and created with bibliographic data (cover, description, etc.)
- **Existing ISBNs** are updated with the new price/quantity
- **Invalid ISBNs** are flagged so you can fix them
- You'll see a summary of what was created, updated, and any errors

#### Required fields

Your CSV file must have these columns:

| Column | Description |
|--------|-------------|
| `isbn` | The book's ISBN (10 or 13 digit) |
| `quantity` | How many copies you have |
| `price` | Your selling price |

#### Optional fields

You can also include these columns:

| Column | Description | Values |
|--------|-------------|--------|
| `sku` | Your internal product ID | Any text |
| `ean` | EAN barcode | Number |
| `cost` | Your cost for the item | Number |
| `book_condition` | Condition of the book | `as-new`, `fine`, `very-good`, `good`, `fair`, `poor` |
| `jacket_condition` | Condition of dust jacket | `as-new`, `fine`, `very-good`, `good`, `fair`, `poor` |
| `first_edition` | Is it a first edition? | `True` or `False` |
| `signed` | Is it signed? | `True` or `False` |
| `advanced_reader_copy` | Is it an ARC? | `True` or `False` |
| `notes` | Notes about this copy | Any text |


### 3. Manually in the admin

Sometimes you need to add a book that isn't in your point-of-sale yet, or create a listing for a special item. You can do this directly in Bookhead.

**To create a new book:**

1. Go to your staff dashboard: `https://<store>.bookhead.net/staff/`
2. Click **New book** (or go directly to `/staff/books/new/`)
3. Search for the book by **ISBN** (recommended) or **title**
4. Select the correct edition from the search results
5. Fill in the copy details:
   - **Price**: Your selling price
   - **Quantity**: How many you have
   - **Condition**: Book and jacket condition
   - **Notes**: Any special details (signed, first edition, etc.)
6. Click **Save**

**Search tips:**

- **ISBN search** gives the best results - we pull detailed bibliographic data including cover images
- **Title search** uses Open Library data, which is helpful for older books that predate ISBNs
- If a book isn't found, you can create it manually by entering the bibliographic details yourself

**When to use manual creation:**

- Adding a rare or unique item not in your point-of-sale
- Creating listings for items your point-of-sale doesn't track (signed editions, ARCs)
- Testing a new listing before adding it to your point-of-sale
- Adding books while your point-of-sale sync is being set up

## About Bookhead's data model
Our bibliographic data model drives everything about Bookhead. Within the context of storing bibliographic metadata about your inventory in a database, a *book* doesn't exactly describe the object you're trying to sell. Instead, a "work" can have multiple "editions", and each edition can have unique "copies" with altering attributes. Solving this bibliographic data problem has a long history in library science, so we created a bibliographic data model inspired by [the Open Library's database design](https://openlibrary.org/dev/docs/api/books) and [Functional Requirements for Bibliographic Records](https://en.wikipedia.org/wiki/Functional_Requirements_for_Bibliographic_Records). We applied our own take that is simple for the needs of online book retail. This is still a work in progress as we continually encounter new sources of bibliographic data and prioritize missing parts (for example, we currently don't support BISAC codes because it's not been a priority, but it would be easy to add once a new data source or customer requires this). We've found this data model has been reliable and flexible to change as this application has evolved over time.

**Critically, this data model makes it easy for you to sell both new and used books on the same online sales channels, which isn't common in bookselling software.** Bookhead doesn't care if your copy is used or new. That is an attribute on the copy.

## Relevant models and their fields

```
WORK
├── Title 
├── Authors
└── Subjects

    EDITION
    ├── ISBN/ISBN-10/ISBN-13
    ├── Publisher
    ├── Publication date
    ├── Binding type (Hardcover, Paperback, etc.)
    ├── Pages
    ├── Cover image
    ├── Synopsis
    └── Language

        COPY
        ├── Price
        ├── Condition
        ├── Quantity
        ├── Signed status
        ├── First edition status
        ├── Advanced reader copy status
        ├── Jacket condition
        └── Notes
```

### *Moby Dick* example

For the book *Moby Dick*:

- **Work**: *Moby Dick* by Herman Melville
- **Edition**: Penguin Classics, 1987, ISBN 9780140430370, Paperback, 720 pages
- **Copy**: Very Good condition, $17.00, 1 in stock

### Work

The **Work** represents the intellectual or creative content - the story, ideas, or information created by the author(s).

| Field | Description |
|-------|-------------|
| Title | The name of the book |
| Authors | The people who wrote the book |
| Subjects | The topics or categories the book covers |

### Edition

The **Edition** represents a specific published version of a work. The same work might have many editions (hardcover, paperback, illustrated, etc.).

| Field | Description |
|-------|-------------|
| ISBN | The International Standard Book Number identifying this edition |
| ISBN-10 | The 10-digit ISBN |
| ISBN-13 | The 13-digit ISBN |
| Publisher | The company that published this edition |
| Publication date | When this edition was published |
| Binding | Format (Hardcover, Paperback, Large Print, etc.) |
| Pages | Number of pages in this edition |
| Cover image | Picture of the book cover |
| Synopsis | Summary of the book's content |
| Language | The language this edition is written in |
| Dimensions | Physical size of the book |
| Weight | How heavy the book is |
| MSRP | Manufacturer's Suggested Retail Price |

### Copy

The **Copy** represents the actual physical item you have in your inventory - what customers will purchase.

| Field | Description |
|-------|-------------|
| Price | How much you're selling this copy for |
| Cost | How much you paid for this copy (your cost) |
| Quantity | How many of this specific copy you have in stock |
| Book condition | Quality (As New, Fine, Very Good, Good, Fair, Poor) |
| Jacket condition | Condition of the dust jacket, if applicable |
| Signed | Whether the book is signed by the author |
| First edition | Whether this is a first edition copy |
| Advanced reader copy | Whether this is a pre-publication copy for reviewers |
| Notes | Any special information about this specific copy |
| SKU | Your internal product identifier |
| Promoted | Whether this copy is being featured or highlighted |

### Model relationships
These models have relationships:

- A **Work** can have multiple **Editions** (paperback, hardcover, illustrated, etc.)
- An **Edition** can have multiple **Copies** in your inventory (different conditions, prices, etc.)

## Detailed *Moby Dick* example

### Work
- title: *Moby Dick*
- authors: Herman Melville
- subjects: Fiction, Adventure, Whaling

### Edition
- isbn: 9780140430370
- publisher: Penguin Classics
- publication date: 1972
- binding: Paperback
- pages: 720
- synopsis: "The story of Captain Ahab's quest to avenge himself upon the great white whale..."
- language: English

### Copy
- price: $17.00
- quantity: 1
- book condition: Very Good
- signed: Yes
- first edition: No
- notes: "Small tear on back cover, otherwise very good condition"

## How Bookhead uses this data
The `Copy` will be what you are selling online. This is the product that you can hold in your hands at your store and ship out to customers. Combined with bibliographic data about the `Work` and `Edition`, your `Copy` will be listed on your sales channels with the bibliographic data that describes that particular product.

### A Copy of a book is a powerful thing
The `Copy` can be listed on multiple sales channels, like Squarespace, Biblio, and eBay. For more information about that, [see our documentation about `channels`](/docs/channels.md).

### Data privacy and control
We only share your inventory data with the third party platforms which you explicity consent to. We're able to share your inventory data with Squarespace, Biblio, eBay, and Shopify. We will share your data if you choose to share the data with a specific platform, and the data will only be shared with an account on the platform that you control.
