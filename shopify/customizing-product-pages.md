---
sidebar_position: 8
---

# Customizing your Shopify product pages

Bookhead gives you two ways to show rich book data on your Shopify storefront:
**metafields** for theme developers working in Liquid, and a **Theme App
Extension** with drag-and-drop blocks for everyone else.

## Metafields for Liquid themes

Bookhead syncs rich book metadata to Shopify as **metafields** under the
`book_info` namespace. Theme designers can use these in Liquid templates to build
custom product pages without parsing the product description.

Access any metafield in Liquid with:

```liquid
{{ product.metafields.book_info.authors }}
```

### Data mapping: Bookhead to Shopify metafields

| Metafield key | Shopify type | Bookhead source | Description |
|---|---|---|---|
| `work_id` | `single_line_text_field` | Work ID | Internal Work ID, used for "Other Editions" grouping |
| `work_title` | `single_line_text_field` | Work → title | Canonical title of the work |
| `authors` | `single_line_text_field` | Work → authors | Comma-separated author names |
| `subjects` | `single_line_text_field` | Work → subjects | Comma-separated subject names |
| `edition_id` | `single_line_text_field` | Edition → uuid | Internal Edition UUID |
| `edition_display` | `single_line_text_field` | Edition (computed) | "Publisher &bull; Year &bull; Format" summary string |
| `isbn` | `single_line_text_field` | Edition → isbn | ISBN |
| `publisher` | `single_line_text_field` | Edition → publisher | Publisher name |
| `binding` | `single_line_text_field` | Edition → binding | Format: Hardcover, Paperback, etc. |
| `pages` | `number_integer` | Edition → pages | Page count |
| `publication_date` | `single_line_text_field` | Edition → publication_date | Publication date as stored |
| `language` | `single_line_text_field` | Edition → language | ISO language code (e.g., "en") |
| `synopsis` | `multi_line_text_field` | Edition → synopsis | Book synopsis/description (max 5000 chars) |
| `dimensions` | `single_line_text_field` | Edition → dimensions | Physical dimensions |
| `weight` | `single_line_text_field` | Edition → weight | Weight |
| `msrp` | `single_line_text_field` | Edition → msrp | Manufacturer's suggested retail price |
| `condition` | `single_line_text_field` | Copy → book_condition | Book condition display name (New, Fine, Very Good, etc.) |
| `jacket_condition` | `single_line_text_field` | Copy → jacket_condition | Dust jacket condition display name |
| `first_edition` | `boolean` | Copy → first_edition | `true` if this is a first edition |
| `signed` | `boolean` | Copy → signed | `true` if this copy is signed |
| `notes` | `multi_line_text_field` | Copy → notes | Bookseller notes about this copy (max 5000 chars) |
| `collections` | `single_line_text_field` | Copy → BookLists | Comma-separated BookList names this copy belongs to |
| `staff_pick` | `boolean` | Work → reviews | `true` if the work has a staff pick review |
| `staff_pick_reviewer` | `single_line_text_field` | Review → display_reviewer | First staff pick reviewer's name |
| `staff_pick_text` | `multi_line_text_field` | Review → text | First staff pick review text (max 5000 chars) |
| `staff_picks_json` | `json` | Work → reviews | All staff picks as JSON array (when multiple reviews exist) |

### Example: using metafields in a Liquid theme

```liquid
{% comment %} Show book details on the product page {% endcomment %}

<h1>{{ product.title }}</h1>
<p class="authors">by {{ product.metafields.book_info.authors }}</p>

{% if product.metafields.book_info.signed == true %}
  <span class="badge">Signed Copy</span>
{% endif %}

{% if product.metafields.book_info.first_edition == true %}
  <span class="badge">First Edition</span>
{% endif %}

<dl class="book-details">
  <dt>Condition</dt>
  <dd>{{ product.metafields.book_info.condition }}</dd>

  {% if product.metafields.book_info.jacket_condition %}
    <dt>Jacket</dt>
    <dd>{{ product.metafields.book_info.jacket_condition }}</dd>
  {% endif %}

  <dt>ISBN</dt>
  <dd>{{ product.metafields.book_info.isbn }}</dd>

  <dt>Publisher</dt>
  <dd>{{ product.metafields.book_info.publisher }}</dd>

  {% if product.metafields.book_info.binding %}
    <dt>Format</dt>
    <dd>{{ product.metafields.book_info.binding }}</dd>
  {% endif %}

  {% if product.metafields.book_info.pages %}
    <dt>Pages</dt>
    <dd>{{ product.metafields.book_info.pages }}</dd>
  {% endif %}

  {% if product.metafields.book_info.publication_date %}
    <dt>Published</dt>
    <dd>{{ product.metafields.book_info.publication_date }}</dd>
  {% endif %}
</dl>

{% if product.metafields.book_info.synopsis %}
  <div class="synopsis">
    {{ product.metafields.book_info.synopsis }}
  </div>
{% endif %}

{% if product.metafields.book_info.notes %}
  <div class="bookseller-notes">
    <h3>Bookseller's Notes</h3>
    {{ product.metafields.book_info.notes }}
  </div>
{% endif %}

{% if product.metafields.book_info.staff_pick %}
  <div class="staff-pick">
    <h3>Staff Pick</h3>
    <blockquote>
      "{{ product.metafields.book_info.staff_pick_text }}"
      <cite>— {{ product.metafields.book_info.staff_pick_reviewer }}</cite>
    </blockquote>
  </div>
{% endif %}
```

## Theme App Extension: drag-and-drop blocks

The Bookhead app includes a **Theme App Extension** with ready-to-use blocks that
you can add to any product page via the Shopify theme editor — no code required.

To add blocks: go to **Online Store → Themes → Customize**, navigate to a product
page, and click **Add block**. Bookhead blocks appear under the **Apps** section.

### Available blocks

| Block | Description | Key settings |
|-------|-------------|--------------|
| **Book Title** | Work title as a heading | Heading level (H1–H3), font size, weight, color |
| **Book Author** | Author names with prefix | Prefix text ("by "), font size, color |
| **Book Edition** | Publisher, year, format summary | Font size, color |
| **Book ISBN** | ISBN with label | Label text, font size, color |
| **Book Condition** | Book and jacket condition | Show/hide jacket, label text |
| **Book Description** | Synopsis with optional heading | Heading text, font size |
| **Book Badges** | Staff Pick / Signed / First Edition pills | Label text, colors per badge type |
| **Staff Pick Quote** | Blockquote with reviewer attribution | Accent color, background, label text |
| **Bookseller Notes** | Bookseller's notes with heading | Italic/normal style, heading text |
| **Book Info** | All-in-one card with everything above | Toggle each section on/off |

Each block is independently placeable and fully customizable (colors, font sizes,
spacing, labels). Place them anywhere in your product page layout — put the title
at the top, badges under the price, staff pick quote in the sidebar, etc.

:::tip
Blocks only render when the product has the corresponding metafield data from
Bookhead. If a product doesn't have a staff pick review, the Staff Pick blocks
simply won't appear.
:::
