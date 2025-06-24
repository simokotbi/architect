# Installation Guide - ARCHDesign Architects Template

## 🚀 Quick Start Installation (5 Minutes)

### Prerequisites
- Web hosting account with PHP support (optional)
- FTP client or hosting control panel access
- Text editor for customization
- Domain name (recommended)

---

## 📋 Step-by-Step Installation

### Step 1: Download and Extract Files

1. **Download** the template package from CodeCanyon
2. **Extract** the ZIP file to your computer
3. **Locate** the main template folder: `ARCHDesign-Template/`

### Step 2: Server Upload

#### Option A: Using FTP Client (FileZilla, WinSCP)
```bash
# Connect to your server via FTP
# Navigate to your domain's public_html folder
# Upload all template files maintaining folder structure
```

#### Option B: Using Hosting Control Panel
1. Access your hosting control panel (cPanel, Plesk, etc.)
2. Navigate to File Manager
3. Go to `public_html` or your domain folder
4. Upload and extract the template files

### Step 3: File Permissions
Set proper permissions:
- **Files**: 644 permissions
- **Folders**: 755 permissions

---

## 🔧 Configuration Setup

### Update Domain URLs

Replace all instances of `https://www.archdesignarchitects.com` with your actual domain:

#### Files to Update:
1. **index.html** - Lines 11, 15, 39, 51, etc.
2. **All service pages** - Update canonical URLs
3. **All case study pages** - Update canonical URLs  
4. **All team pages** - Update canonical URLs
5. **careers.html** - Update canonical URLs
6. **sitemap.xml** - Update all URL entries

#### Search and Replace:
```bash
# Find: https://www.archdesignarchitects.com
# Replace with: https://yourdomain.com
```

### Update Business Information

#### In index.html, update:
```html
<!-- Line 6: Page Title -->
<title>Your Company | Contemporary Architecture | Your City</title>

<!-- Line 7: Meta Description -->
<meta name="description" content="Your company description here">

<!-- Line 8: Keywords -->
<meta name="keywords" content="architect your-city, your-services">

<!-- Lines 35-55: Schema Markup -->
"name": "Your Company Name",
"description": "Your company description",
"telephone": "+1-your-phone",
"email": "contact@yourdomain.com",
"address": {
    "streetAddress": "Your Street Address",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "Your ZIP"
}
```

---

## 🎨 Content Customization

### Homepage Content

#### Hero Section (Lines 175-185)
```html
<h1 class="hero-title">YOUR COMPANY NAME</h1>
<p class="hero-tagline">Your company tagline</p>
```

#### About Section (Lines 275-295)
Update the philosophy quote and company description paragraphs.

#### Services Section (Lines 300-350)
Customize service titles, descriptions, and links.

#### Team Section (Lines 375-425)
Update team member information, photos, and descriptions.

#### Contact Section (Lines 450-475)
Update contact information, address, phone, and email.

### Service Pages

For each service page (`services/*.html`):
1. Update page title and meta description
2. Customize service content and descriptions
3. Update canonical URLs
4. Modify call-to-action sections

### Case Study Pages

For each case study (`case-studies/*.html`):
1. Replace project information
2. Update project images
3. Modify project descriptions
4. Update canonical URLs

### Team Pages

For each team member (`team/*.html`):
1. Update team member information
2. Replace profile photos
3. Modify bio content
4. Update canonical URLs

---

## 🖼️ Image Replacement

### Required Images

#### Hero Images
- **Homepage**: 2000x1200px (architectural photography)
- **Service pages**: 1600x800px (relevant to each service)
- **Case studies**: 1600x800px (project photography)

#### Portfolio Images
- **Project cards**: 800x600px (consistent aspect ratio)
- **Case study galleries**: 1200x800px (high resolution)

#### Team Photos
- **Team member profiles**: 400x400px (square format)
- **Professional headshots**: Well-lit, professional quality

### Image Optimization Tips
- Use WebP format for better performance
- Compress images (aim for under 200KB per image)
- Maintain consistent aspect ratios
- Include descriptive alt text for SEO

---

## 🔍 SEO Configuration

### Google Search Console Setup

1. **Verify Domain**: Add your domain to Google Search Console
2. **Submit Sitemap**: Add `https://yourdomain.com/sitemap.xml`
3. **Monitor Performance**: Track search rankings and click-through rates

### Google Analytics Setup

Add tracking code before closing `</head>` tag in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_TRACKING_ID');
</script>
```

### Schema Markup Validation

1. Use Google's Rich Results Tool: https://search.google.com/test/rich-results
2. Test your homepage URL
3. Verify all schema types are recognized:
   - ArchitecturalService
   - Organization
   - Person (for team members)
   - Article (for case studies)

---

## 📱 Mobile Optimization

### Testing Your Installation

Test on multiple devices and screen sizes:
- **Desktop**: 1920x1080, 1366x768
- **Tablet**: 1024x768, 768x1024
- **Mobile**: 375x667, 414x896, 360x640

### Mobile-Specific Checks
- Navigation menu functionality
- Image loading and display
- Form usability
- Contact information accessibility
- Loading speed on mobile networks

---

## ⚡ Performance Optimization

### Server-Side Optimizations

#### Enable Gzip Compression
Add to your `.htaccess` file:
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript
</IfModule>
```

#### Browser Caching
Add to your `.htaccess` file:
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
</IfModule>
```

### CDN Setup (Optional)
For better global performance:
1. Sign up for a CDN service (Cloudflare, AWS CloudFront)
2. Configure your domain through the CDN
3. Update DNS settings as required

---

## 🧪 Testing Your Installation

### Functionality Testing

#### Navigation
- [ ] Main navigation works on all pages
- [ ] Breadcrumb navigation displays correctly
- [ ] Mobile hamburger menu functions properly

#### Forms
- [ ] Contact form validation works
- [ ] Career application form functions
- [ ] Form submissions display success messages

#### Links
- [ ] All internal links work correctly
- [ ] External links open in new tabs
- [ ] Social media links are configured

#### Performance
- [ ] Pages load within 3 seconds
- [ ] Images display properly
- [ ] No console errors in browser

### SEO Testing

#### Use These Tools:
1. **Google PageSpeed Insights**: Test loading speed
2. **Google Rich Results Tool**: Validate schema markup
3. **SEO Site Checkup**: Comprehensive SEO analysis
4. **Mobile-Friendly Test**: Google's mobile compatibility test

#### Expected Scores:
- **PageSpeed Desktop**: 90+
- **PageSpeed Mobile**: 85+
- **SEO Score**: 95+
- **Mobile-Friendly**: Pass

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Images Not Loading
- **Problem**: Images showing as broken links
- **Solution**: Check file paths and ensure images are uploaded to correct folders

#### Navigation Not Working
- **Problem**: Menu items not responsive or linking incorrectly
- **Solution**: Verify JavaScript is loading and check link URLs

#### Contact Form Not Working
- **Problem**: Form submissions not processing
- **Solution**: Configure server-side form processing or use a form service

#### SEO Issues
- **Problem**: Pages not appearing in search results
- **Solution**: Verify sitemap submission and check robots.txt

### Getting Help

#### Check These First:
1. Browser console for JavaScript errors
2. Server error logs for PHP issues
3. File permissions for upload problems
4. DNS propagation if domain issues

#### Resources:
- Browser developer tools for debugging
- Online HTML/CSS validators
- SEO testing tools for optimization checks

---

## ✅ Post-Installation Checklist

### Technical Setup
- [ ] All files uploaded successfully
- [ ] Domain URLs updated throughout
- [ ] File permissions set correctly
- [ ] SSL certificate installed
- [ ] 404 error page configured

### Content Updates
- [ ] Company information updated
- [ ] Service descriptions customized
- [ ] Team member profiles added
- [ ] Portfolio projects added
- [ ] Contact information updated

### SEO Configuration
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Google Analytics installed
- [ ] Meta tags customized
- [ ] Schema markup validated

### Testing Complete
- [ ] Cross-browser testing done
- [ ] Mobile responsiveness verified
- [ ] Form functionality tested
- [ ] Performance scores optimized
- [ ] SEO tools validation passed

---

## 🎉 Launch Day

### Final Steps

1. **Remove Development Content**: Ensure no placeholder text remains
2. **Test Everything**: Final functionality and performance check
3. **Monitor Launch**: Watch for any immediate issues
4. **Submit to Search Engines**: Speed up indexing process

### Marketing Your New Website

1. **Social Media**: Announce your new website
2. **Email Newsletter**: Inform existing clients
3. **Business Cards**: Update with new website URL
4. **Google My Business**: Update website URL

---

**Congratulations! Your professional architecture website is now live and ready to attract clients.**

*Need additional help? Refer to the other documentation files included with your template.*
