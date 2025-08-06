# FTP Integration Guide for Inventory Uploads

Bookhead accepts inventory files via secure FTP upload. Upload your CSV file, and we'll automatically process it and update your inventory within 15 minutes.

## Two ways to upload

**Automated uploads**: Your POS system uploads files automatically
**Manual uploads**: You upload files yourself using an FTP client

Both methods use the same secure server and file processing.

---

## For POS Vendors

### Connection details
- **Host**: files.bookhead.net
- **Port**: 22 (SFTP)
- **Authentication**: Username/Password (unique per store)
- **File Format**: CSV (UTF-8 encoding)
- **File Size**: Under 10MB

### Integration process
1. Contact support@bookhead.net with store details
2. We provide unique FTP credentials for each store
3. Configure automated uploads to the store's directory
4. Files process instantly  (see [file processing](#file-processing) below)

### Connection URI format
For FTP clients and automated systems, use:
```
sftp://<username>@files.bookhead.net
```

Example: `sftp://bearcreekbooks@files.bookhead.net`

### Command line example
```bash
sftp bearcreekbooks@files.bookhead.net
bearcreekbooks@files.bookhead.net's password: 
Connected to files.bookhead.net.
sftp> put inventory.csv
Uploading inventory.csv to /inventory.csv
inventory.csv
```

**Need technical assistance?** [Email support@bookhead.net](mailto:support@bookhead.net)

---

## For Bookstores

### Getting gtarted
1. **Contact us** at support@bookhead.net to get your FTP credentials
2. **Prepare your inventory** as a CSV file (see format below)
3. **Upload your file** using an FTP client or ask your POS provider to set up automatic uploads

### POS integration status
Bookhead works with any POS system that can export inventory via FTP. We can typically add support for a new POS provider within a few days of receiving sample data.

**Want to be an early adopter?** We're looking for bookstores to pilot integrations with their POS systems. [Email support@bookhead.net](mailto:support@bookhead.net) to discuss your POS setup.

### Manual upload with FTP clients

If you manage your inventory in a spreadsheet, already sell on Biblio, or prefer to upload files yourself, you can use free FTP software:

**Setup example with FileZilla:**
1. Download FileZilla from [filezilla-project.org](filezilla-project.org)
2. Enter connection details:
   - Host: files.bookhead.net
   - Username: (provided by support)
   - Password: (provided by support)
   - Port: 22
   - Protocol: SFTP
3. Connect and upload your CSV file

### File Format

**Required fields:**
```csv
isbn,quantity,price
9780141439518,2,15.99
9780061120084,1,12.50
```

**Enhanced format (with a few optional fields):**
```csv
isbn,quantity,price,book_condition,notes
9780141439518,2,15.99,very-good,"Minor shelf wear"
9780061120084,1,12.50,good,"Signed by author"
```

**Field options:**
- **book_condition**: as-new, fine, very-good, good, fair, poor
- **jacket_condition**: as-new, fine, very-good, good, fair, poor
- **first_edition**: true/false
- **signed**: true/false
- **advanced_reader_copy**: true/false
- **sku**: Your internal product code
- **ean**: European Article Number (13 digits)
- **cost**: Your cost price (for profit tracking)
- **notes**: Any text description or condition details

**Want more details?** See our [complete inventory data model documentation](https://docs.bookhead.net/docs/inventory) for all available fields and how Bookhead organizes book data.

### Testing Your Upload

Create a small test file:
```csv
isbn,quantity,price,notes
9780141439518,1,15.99,"Test upload"
```

1. Upload via FTP
2. Check your Bookhead admin (see [file processing](#file-processing) below)
3. Verify the book appears in your inventory

---

## File processing

- **File naming**: Any filename works (inventory.csv, books_jan_2025.csv, etc.) - Bookhead processes any CSV file you upload
- **Format**: CSV files with UTF-8 encoding
- **Processing time**: 5-30 minutes upon very first upload (depending on inventory size), then a 1-5 minutes for subsequent uploads
- **Validation**: ISBNs are checked and enhanced with bibliographic details about the book (like author, title, description, images, etc)
- **Errors**: Invalid rows are skipped, valid ones are processed
- **Monitoring**: Check your admin panel for import status

## Troubleshooting

**Can't connect?**
- Verify host: files.bookhead.net
- Check port: 22 (SFTP, not regular FTP)
- Confirm your username and password

**File not processing?**
- Wait 10 minutes for processing. Contact [support@bookhead.net](mailto:support@bookhead.net) with a link from the import process that seems broken.

**Common file issues:**
- Use commas to separate fields
- Remove currency symbols from prices ($15.99 → 15.99)
- Ensure quantities are positive numbers
- Save file as CSV with UTF-8 encoding

## Support

Email support@bookhead.net for:
- FTP credentials setup
- POS integration questions
- File format assistance
- Technical troubleshooting

**Include in your message:**
- Your store name
- Link to the import results page — you can copy the link for the admin page in your browser and share it (it looks like http://bearcreekbooks.bookhead.net/staff/inventory/imports/4604c34b-e913-4a53-8da9-f2c3f0a1c85f/)
- Specific error messages

Response time: Within 24 hours during business days.
