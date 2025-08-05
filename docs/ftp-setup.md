# FTP Integration Guide for Inventory Uploads

Bookhead provides secure FTP access for uploading your inventory files. This guide covers both automated integration with POS providers and manual uploads for traditional booksellers.

## Overview

Bookhead supports two FTP methods for uploading your inventory:

1. **Automated FTP**: Your POS provider automatically uploads inventory files
2. **Manual FTP**: You upload files manually using an FTP client

Both methods use the same secure FTP server and file processing system. Once files are uploaded, Bookhead automatically processes them and updates your inventory. 

For other ways to add inventory (including manual entry and web-based file uploads), see our inventory guide:  
[Managing your inventory](inventory.md).

## Quick Reference (For Software Vendors)

### FTP Server Details
- **Host**: `files.bookhead.net`
- **Port**: 22
- **Protocol**: SFTP
- **Authentication**: Username/Password
- **File Format**: CSV (UTF-8 encoding)
- **File Name**: `inventory.csv`
- **File Size**: Under 10MB

### Store Credentials
Each store receives unique FTP credentials:
- **Username**: (provided by Bookhead support)
- **Password**: (provided by Bookhead support)
- **Directory**: (provided by Bookhead support)

## Automated FTP with POS Providers

### Supported POS Systems

Bookhead works with any POS system that can export inventory data via FTP. We currently have:

- **Generic FTP integration**: Works with any POS that can upload CSV files
- **First integrations**: Currently onboarding our first customers

*We're looking for our first integration customers for various POS systems. If your POS can export inventory data, we can likely integrate with it.*

### Setup Process

#### Step 1: Contact Support
Email `support@bookhead.net` to initiate POS provider integration. Include:
- Your Bookhead store name (e.g., "Bear Creek Books")
- Your POS provider name
- Contact information for your POS provider (if needed)

#### Step 2: POS Provider Configuration
Our team will work with your POS provider to:
- Configure automated file uploads to our FTP server
- Set up the correct file format and schedule
- Test the integration with sample data

#### Step 3: Store Configuration
We'll configure your store with:
- FTP credentials and connection details
- POS provider settings
- File processing preferences

#### Step 4: Testing and Go-Live
- Test uploads with sample inventory
- Verify data processing and inventory updates
- Schedule regular uploads (typically daily or weekly)

## Manual FTP Setup

### For Traditional Booksellers

If you don't use a POS provider or prefer manual control, you can upload inventory files directly using any FTP client.

#### Step 1: Get FTP Credentials
Contact `support@bookhead.net` to receive your store's FTP credentials:
- FTP Host: `files.bookhead.net`
- Username: (provided by support)
- Password: (provided by support)
- Port: 22 (SFTP)

#### Step 2: Prepare Your Inventory File
Create a CSV file with your inventory data. See [File Format Specifications](#file-format-specifications) below for required fields.

#### Step 3: Upload via FTP Client
Use any FTP client (FileZilla, WinSCP, Cyberduck, etc.) to upload your file:

1. Connect to `files.bookhead.net` using SFTP
2. Navigate to your store directory
3. Upload your CSV file as `inventory.csv`

### FTP Client Configuration

#### Popular FTP Clients

**FileZilla (Windows/Mac/Linux)**
- Host: `files.bookhead.net`
- Username: (your username)
- Password: (your password)
- Port: 22
- Protocol: SFTP

**WinSCP (Windows)**
- File protocol: SFTP
- Host name: `files.bookhead.net`
- Port number: 22
- User name: (your username)
- Password: (your password)

**Cyberduck (Mac)**
- Protocol: SFTP
- Server: `files.bookhead.net`
- Port: 22
- Username: (your username)
- Password: (your password)

### File Upload Process

1. **Prepare File**: Create CSV with your inventory data
2. **Connect**: Use FTP client to connect to our server
3. **Upload**: Upload file as `inventory.csv` to your store directory
4. **Monitor**: Check your Bookhead admin for processing status
5. **Verify**: Confirm inventory updates in your store

## File Format Specifications

### Required Fields

All inventory files must include these fields:

| Field | Description | Format | Example |
|-------|-------------|--------|---------|
| `isbn` | Book identifier | 10 or 13 digits | `9780141439518` |
| `quantity` | Stock quantity | Integer | `2` |
| `price` | Selling price | Decimal | `15.99` |

### Optional Fields

Additional fields for enhanced inventory management:

| Field | Description | Values | Default |
|-------|-------------|--------|---------|
| `sku` | Internal product code | Text | Auto-generated |
| `ean` | European Article Number | 13 digits | None |
| `cost` | Cost price | Decimal | None |
| `first_edition` | First edition status | `True`/`False` | `False` |
| `signed` | Signed by author | `True`/`False` | `False` |
| `advanced_reader_copy` | ARC/Review copy | `True`/`False` | `False` |
| `notes` | Condition notes | Text | None |
| `book_condition` | Book condition | `as-new`, `fine`, `very-good`, `good`, `fair`, `poor` | `good` |
| `jacket_condition` | Dust jacket condition | `as-new`, `fine`, `very-good`, `good`, `fair`, `poor` | None |

### File Format Examples

#### Generic Format (Recommended)
```csv
isbn,quantity,price,book_condition,notes
9780141439518,2,15.99,very-good,"Minor shelf wear"
9780061120084,1,12.50,good,"Signed by author"
```

#### Basil POS Format
```csv
isbn,quantity,price
9780141439518,2,15.99
9780061120084,1,12.50
```

#### Ibid Format
```csv
Item Code,Title,QOH,Price,Vendor,Category,Misc1,Misc2
9780141439518,PRIDE AND PREJUDICE,2,15.99,PENGUIN,FICTION,,
9780061120084,TO KILL A MOCKINGBIRD,1,12.50,HARPER,CLASSIC,,
```

## Upload Process & Processing

### File Requirements
- **Format**: CSV (UTF-8 encoding)
- **Filename**: `inventory.csv`
- **Size**: Under 10MB
- **Frequency**: Daily or weekly (configurable)

### Upload Steps
1. Connect to `files.bookhead.net` via SFTP
2. Navigate to your store directory (provided by support)
3. Upload file as `inventory.csv`
4. File is automatically processed within 5-10 minutes

### Processing Details
- Files are processed asynchronously
- ISBNs are validated and enriched with bibliographic data
- Inventory is updated automatically
- Failed imports are logged with error details
- Partial imports are supported (valid rows are processed)

## Testing Your Setup

### Test File Creation
Create a small test file with a few books:

```csv
isbn,quantity,price,book_condition,notes
9780141439518,1,15.99,very-good,"Test upload"
9780061120084,2,12.50,good,"Test book"
```

### Upload and Monitor
1. Upload your test file via FTP
2. Check your Bookhead admin at `https://[your-store].bookhead.net/`
3. Look for the import in the inventory section
4. Verify books appear in your inventory

### Verification Steps
- [ ] File uploads successfully via FTP
- [ ] Import appears in admin within 5 minutes
- [ ] Books are added to your inventory
- [ ] Bibliographic data is populated
- [ ] Books appear on your store website

## Error Handling & Troubleshooting

### Common Issues

**Connection Problems**
- Verify FTP host: `files.bookhead.net`
- Check port: 22 (SFTP)
- Confirm username and password are correct
- Try different FTP client if needed

**File Upload Issues**
- Ensure file is named `inventory.csv`
- Check file format (CSV, UTF-8 encoding)
- Verify required fields are present
- Check file size (should be under 10MB)

**Processing Problems**
- Wait 5-10 minutes for processing
- Check admin for error messages
- Verify ISBN format (10 or 13 digits)
- Contact support if issues persist

**Data Quality Issues**
- Check ISBN validity
- Verify price format (decimal, no currency symbols)
- Ensure quantity is numeric
- Review condition values

### Error Messages

| Error | Solution |
|-------|----------|
| "Invalid ISBN format" | Use 10 or 13-digit ISBNs only |
| "Price must be numeric" | Remove currency symbols, use decimal format |
| "Quantity must be positive" | Use positive numbers only |
| "File not found" | Ensure file is named `inventory.csv` |
| "Connection timeout" | Check internet connection and try again |

### Error Response
- Failed imports are logged in the store's admin panel
- Error details include row numbers and specific issues
- Partial imports are supported (valid rows are processed)

## Support

For FTP setup assistance:

- **Email**: `support@bookhead.net`
- **Include**: Your store name, POS provider (if applicable), and specific issue
- **Response Time**: Within 24 hours during business days

### What to Include in Support Requests

1. **Store Information**
   - Your Bookhead store name
   - POS provider (if applicable)

2. **Issue Description**
   - Specific error message
   - Steps to reproduce
   - Screenshots if helpful

3. **Technical Details**
   - FTP client used
   - File format and sample data
   - Error logs if available

### Getting Your FTP Credentials

If you need FTP credentials:

1. Email `support@bookhead.net`
2. Include your Bookhead store name
3. Specify if you need POS provider integration
4. We'll provide credentials and setup instructions


---

**Next Steps**: Once FTP is configured, your inventory will automatically sync to your sales channels. See our [Channel Integration Guide](../selling-on-channels) for details on selling your inventory online.
