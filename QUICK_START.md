# ARCHDesign Architects - Quick Start Guide

## 🚀 5-Minute Setup Guide

Get your professional architecture website online in just 5 minutes with this quick start guide.

---

## ⚡ Step 1: Upload Files (2 minutes)

### Upload to Web Hosting
1. **Extract** the template ZIP file
2. **Upload** all files to your web server's public folder
3. **Maintain** the folder structure as provided

```
Your Website Root/
├── index.html
├── styles.css
├── script.js
├── sitemap.xml
├── robots.txt
├── manifest.json
├── services/
├── case-studies/
├── team/
└── careers.html
```

---

## 🏢 Step 2: Update Business Information (2 minutes)

### Essential Changes in `index.html`:

#### Company Name & Tagline (Line ~180)
```html
<h1 class="hero-title">YOUR COMPANY NAME</h1>
<p class="hero-tagline">Your unique value proposition</p>
```

#### Contact Information (Lines ~450-475)
```html
<p class="contact-value">Your Address<br>Your City, State ZIP</p>
<p class="contact-value">+1-XXX-XXX-XXXX</p>
<p class="contact-value">contact@yourdomain.com</p>
```

#### Business Schema (Lines ~35-85)
```json
"name": "Your Company Name",
"telephone": "+1-XXX-XXX-XXXX",
"email": "contact@yourdomain.com",
"address": {
    "streetAddress": "Your Street Address",
    "addressLocality": "Your City",
    "addressRegion": "Your State"
}
```

---

## 🔗 Step 3: Update URLs (1 minute)

### Replace Domain URLs
**Find and Replace** across all files:
- **Find**: `https://www.archdesignarchitects.com`
- **Replace**: `https://yourdomain.com`

### Files to Update:
- All HTML files (meta tags and canonical URLs)
- `sitemap.xml` (all URL entries)

---

## ✅ Step 4: Test Your Website

### Quick Checklist:
- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] Contact form displays properly
- [ ] All internal links function
- [ ] Mobile view looks good

---

## 🔍 Step 5: SEO Setup (Optional - 10 minutes)

### Immediate SEO Actions:

#### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add your domain
3. Verify ownership
4. Submit sitemap: `yourdomain.com/sitemap.xml`

#### Google Analytics
1. Create Google Analytics account
2. Get tracking ID
3. Add tracking code to all HTML files before `</head>`

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_TRACKING_ID');
</script>
```

---

## 🎨 Quick Customization Tips

### Change Brand Colors
Update CSS variables in `styles.css`:
```css
:root {
    --accent-color: #YOUR_BRAND_COLOR;
}
```

### Replace Logo Text
Update in all HTML files:
```html
<h1 class="logo-text">YOUR LOGO</h1>
```

### Add Your Projects
Replace placeholder projects in homepage portfolio section with your own work.

---

## 📱 Mobile Testing

### Test on Mobile Devices:
- Check navigation menu
- Verify form functionality  
- Ensure images load properly
- Test page loading speed

### Tools for Testing:
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 🛠️ Common Issues & Solutions

### Images Not Loading
- **Problem**: Broken image links
- **Solution**: Check file paths and ensure images are uploaded

### Menu Not Working
- **Problem**: JavaScript not loading
- **Solution**: Verify `script.js` is uploaded and path is correct

### SEO Issues
- **Problem**: Pages not found in search
- **Solution**: Submit sitemap to Google Search Console

---

## 📞 Next Steps

### For Full Customization:
- Read `CUSTOMIZATION_GUIDE.md` for detailed instructions
- Review `SEO_SETUP_GUIDE.md` for complete optimization
- Check `PERFORMANCE_GUIDE.md` for speed improvements

### Need More Help?
- Review all documentation files included
- Check code comments for guidance
- Test changes on different browsers

---

## 🎉 Congratulations!

Your professional architecture website is now live! 

### What You've Achieved:
- ✅ Professional website deployed
- ✅ SEO-optimized structure
- ✅ Mobile-responsive design
- ✅ Contact forms ready
- ✅ Portfolio showcase active

### Ready for Business:
Your website is now ready to attract clients and showcase your architectural expertise!

---

**🚀 Launch successful! Welcome to your new professional online presence.**

*For advanced customization and optimization, explore the comprehensive guides included with your template.*