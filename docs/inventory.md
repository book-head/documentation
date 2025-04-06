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

### 1. Automatically via FTP
We have an FTP server that can accept files automatically from your point of sales provider. Contact support@bookhead.net to set this up, because it requires coordination with your point of sales provider.

Each data source has a slightly different way of doing things, like with different column names or capitalization schemes, and Bookhead can work with a variety formats. Our system is designed so it's easy for us to add a new customer or point of sales.


### 2. Upload a file via the admin
Visit `https://<store>.bookhead.net/staff/books/import/` to upload a file.

The file must be a CSV file type, and the file is required to have these column names:
- `isbn`
- `quantity`
- `price`

We can accept these additional, optional fields:
- `sku`
- `ean`
- `cost`
- `first_edition`
    - can be `True` or `False`. Defaults to `False`
- `signed`
    - can be `True` or `False`. Defaults to `False`
- `advanced_reader_copy`
    - can be `True` or `False`. Defaults to `False`
- `notes`
    - text field about the copy's condition or anything notable
- `book_condition`
    - choices:  `as-new`, `fine`, `very-good`, `good`, `fair`, `poor`
- `jacket_condition`
    - choices:  `as-new`, `fine`, `very-good`, `good`, `fair`, `poor`


### 3. Manually in the admin
Visit `https://<store>.bookhead.net/staff/books/new/` and you can use the form to create a new book. 

You can search bibliographic data by ISBN or title. The ISBN search has better bibliographic data. The title search uses data from Open Library, which can be handy when your edition predates ISBNs (also, this search doesn't always return complete data, but it can still be helpful for filling out some basics of your title).

## About Bookhead's data model
Our bibliographic data model drives everything about Bookhead. Within the context of storing bibliographic metadata about your inventory in a database, a *book* doesn't exactly describe the object you're trying to sell. Instead, a "work" can have multiple "editions", and each edition can have unique "copies" with altering attributes. Solving this bibliographic data problem has a long history in library science, so we created a bibliographic data model inspired by [the Open Library's database design](https://openlibrary.org/dev/docs/api/books) and [Functional Requirements for Bibliographic Records](https://en.wikipedia.org/wiki/Functional_Requirements_for_Bibliographic_Records). We applied our own take that is simple for the needs of online book retail. This is still a work in progress as we continually encounter new sources of bibliographic data and prioritize missing parts (for example, we currently don't support BISAC codes because it's not been a prioerity, but it would be easy to add once a new data source or customer requires this). We've found this data model has been reliable as this application has changed over time.

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
The `Copy` can be listed on multiple sales channels, like Squarespace, Biblio, and eBay. For more information about that, [see our documentation about `channels`](/docs/channels.md)
