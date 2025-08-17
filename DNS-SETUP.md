# DNS Setup Guide for nullbytes.app

This guide provides step-by-step instructions for configuring DNS settings in Namecheap to point your `nullbytes.app` domain to GitHub Pages.

## Overview

We'll configure DNS records to:
- Point the apex domain (`nullbytes.app`) to GitHub Pages
- Set up www subdomain redirect
- Enable HTTPS with automatic SSL certificate

## GitHub Pages IP Addresses

GitHub Pages uses the following IP addresses for custom domains:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

## Namecheap DNS Configuration

### Step 1: Access DNS Settings

1. Log in to your Namecheap account
2. Go to "Domain List" in your dashboard
3. Find `nullbytes.app` and click "Manage"
4. Go to the "Advanced DNS" tab

### Step 2: Configure A Records

Delete any existing A records and add the following:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |

### Step 3: Configure CNAME Record

Add a CNAME record for the www subdomain:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME Record | www | nullbytes.app | Automatic |

### Step 4: Remove Conflicting Records

Make sure to delete any existing records that might conflict:
- Remove parking page redirects
- Remove default A records pointing to Namecheap servers
- Remove any existing CNAME records for @ (apex domain)

## Verification Steps

### DNS Propagation Check

After configuring DNS records, check propagation:

1. **Using dig command:**
   ```bash
   dig nullbytes.app
   dig www.nullbytes.app
   ```

2. **Using online tools:**
   - https://www.whatsmydns.net/
   - https://dnschecker.org/

3. **Expected results:**
   - `nullbytes.app` should resolve to GitHub Pages IPs
   - `www.nullbytes.app` should show CNAME to `nullbytes.app`

### GitHub Pages Verification

1. Go to your GitHub repository settings
2. Scroll to "Pages" section
3. Verify custom domain shows: `nullbytes.app`
4. Wait for DNS check to complete (green checkmark)
5. Enable "Enforce HTTPS" once DNS is verified

## Timeline

- **DNS changes**: 5-30 minutes for most users
- **Global propagation**: Up to 48 hours (usually much faster)
- **SSL certificate**: 5-10 minutes after DNS verification
- **HTTPS enforcement**: Available immediately after SSL setup

## Troubleshooting

### Common Issues

1. **DNS not propagating:**
   - Clear DNS cache: `sudo dscacheutil -flushcache` (macOS)
   - Wait longer (up to 24 hours)
   - Check TTL settings are set to Automatic

2. **GitHub Pages not detecting domain:**
   - Verify CNAME file exists in repository root
   - Check CNAME file contains only: `nullbytes.app`
   - Ensure repository is public

3. **SSL certificate issues:**
   - Disable HTTPS enforcement temporarily
   - Re-save custom domain in GitHub settings
   - Wait for new SSL certificate generation

### Verification Commands

```bash
# Check A records
nslookup nullbytes.app

# Check CNAME record
nslookup www.nullbytes.app

# Check GitHub Pages status
curl -I https://nullbytes.app
```

## Security Notes

- Always use HTTPS in production
- GitHub automatically provides SSL certificates
- Certificate renewal is handled automatically
- Monitor certificate expiration through GitHub interface

## Support

If you encounter issues:
1. Check GitHub Pages documentation
2. Verify Namecheap DNS settings
3. Test with different DNS servers (8.8.8.8, 1.1.1.1)
4. Contact GitHub Support for Pages-specific issues