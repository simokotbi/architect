# Customization Guide - ARCHDesign Architects Template

## 🎨 Design Customization

### Color Scheme Customization

The template uses CSS custom properties (variables) for easy color customization. All colors are defined at the top of `styles.css`:

```css
:root {
    --primary-bg: #F8F8F8;        /* Main background color */
    --secondary-bg: #EDEDED;      /* Section background */
    --primary-text: #1A1A1A;      /* Main text color */
    --secondary-text: #555555;    /* Secondary text */
    --accent-color: #A87C4F;      /* Brand accent color */
    --white: #FFFFFF;             /* Pure white */
    --light-grey: #F5F5F5;        /* Light grey tones */
    --dark-grey: #2C2C2C;         /* Dark grey elements */
}
```

#### Popular Color Schemes:

**Modern Blue:**
```css
:root {
    --primary-bg: #F8FAFB;
    --secondary-bg: #E8F0FE;
    --accent-color: #2196F3;
}
```

**Professional Green:**
```css
:root {
    --primary-bg: #F8F9FA;
    --secondary-bg: #E8F5E8;
    --accent-color: #4CAF50;
}
```

**Elegant Black:**
```css
:root {
    --primary-bg: #FAFAFA;
    --secondary-bg: #F0F0F0;
    --accent-color: #000000;
}
```

---

## 🔤 Typography Customization

### Font Selection

The template uses Google Fonts for professional typography:

#### Current Fonts:
- **Headings**: Montserrat (geometric, modern)
- **Body Text**: Lora (elegant serif)

#### Changing Fonts:

1. **Update Google Fonts Import** (in HTML head section):
```html
<!-- Replace this line in all HTML files -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Lora:wght@300;400;500&display=swap" rel="stylesheet">

<!-- With your preferred fonts -->
<link href="https://fonts.googleapis.com/css2?family=YourHeadingFont:wght@300;400;500;600;700&family=YourBodyFont:wght@300;400;500&display=swap" rel="stylesheet">
```

2. **Update CSS Font Families**:
```css
/* Headings */
h1, h2, h3, h4, h5, h6,
.logo-text,
.nav-link,
.hero-title,
.section-title {
    font-family: 'YourHeadingFont', sans-serif;
}

/* Body text */
body,
.hero-tagline,
.section-subtitle,
p {
    font-family: 'YourBodyFont', serif;
}
```

#### Recommended Font Combinations:

**Modern & Clean:**
- Headings: Inter + Body: Source Sans Pro

**Professional:**
- Headings: Playfair Display + Body: Open Sans  

**Creative:**
- Headings: Abril Fatface + Body: Nunito Sans

---

## 🖼️ Image Customization

### Image Requirements and Specifications

#### Hero Images
- **Dimensions**: 2000x1200px minimum
- **Format**: JPG or WebP
- **File Size**: Under 500KB (optimized)
- **Style**: High-quality architectural photography

#### Portfolio Images
- **Project Cards**: 800x600px (4:3 aspect ratio)
- **Case Study Heroes**: 1600x900px (16:9 aspect ratio)
- **Gallery Images**: 1200x800px minimum

#### Team Photos
- **Profile Images**: 400x400px (square format)
- **Style**: Professional headshots with consistent lighting

### Image Replacement Process

#### Step 1: Prepare Your Images
```bash
# Recommended tools for image optimization:
# - TinyPNG.com (online compression)
# - ImageOptim (Mac)
# - RIOT (Windows)
```

#### Step 2: Replace Image Files
1. **Homepage Portfolio** (Lines 195-260 in index.html):
```html
<!-- Replace the src attributes -->
<img src="https://your-images.com/project1.jpg" alt="Your Project Name - Description">
```

2. **Hero Backgrounds** (style attributes):
```html
<!-- Replace background-image URLs -->
<div class="hero-image" style="background-image: url('your-hero-image.jpg')"></div>
```

3. **Team Photos** (team page files):
```html
<!-- Update team member images -->
<img src="your-team-photo.jpg" alt="Team Member Name - Job Title">
```

### Image Alt Text Best Practices

Always include descriptive alt text for SEO and accessibility:

```html
<!-- Good alt text examples -->
<img alt="Modern residential house in Malibu with floor-to-ceiling windows and ocean view">
<img alt="David Chen - Principal Architect at Your Company Name">
<img alt="Contemporary office building interior with natural lighting and open spaces">
```

---

## 📝 Content Customization

### Homepage Content Areas

#### Hero Section
```html
<!-- Line ~180 in index.html -->
<h1 class="hero-title">YOUR COMPANY NAME</h1>
<p class="hero-tagline">Your unique value proposition</p>
```

#### About/Philosophy Section
```html
<!-- Lines ~275-295 -->
<blockquote class="philosophy-quote">
    "Your company philosophy or mission statement"
</blockquote>

<p class="about-paragraph">
    Your company description and approach to architecture.
</p>
```

#### Services Section
```html
<!-- Lines ~300-360 -->
<a href="services/your-service.html" class="service-item">
    <h3 class="service-title">Your Service Name</h3>
    <p class="service-description">Service description</p>
</a>
```

### Service Page Customization

Each service page follows the same structure. Customize these sections:

1. **Page Title and Meta** (Lines 1-15)
2. **Hero Section** (Lines ~90-110)
3. **Service Overview** (Lines ~120-140)
4. **Process Section** (Lines ~150-200)
5. **Benefits Section** (Lines ~210-250)

### Case Study Customization

For portfolio projects, update:

1. **Project Information**:
```html
<h1 class="hero-title">Your Project Name</h1>
<p class="hero-tagline">Project Type • Location • Year</p>
```

2. **Project Details**:
```html
<div class="project-stats">
    <div class="stat-item">
        <span class="stat-number">5,000</span>
        <span class="stat-label">Square Feet</span>
    </div>
</div>
```

---

## ⚙️ Layout Customization

### Grid Layout Modifications

#### Portfolio Grid
The homepage portfolio uses CSS Grid. To modify the layout:

```css
/* Current 3-column grid */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

/* Change to 2-column grid */
.portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
}

/* Change to 4-column grid */
.portfolio-grid {
    grid-template-columns: repeat(4, 1fr);
}
```

#### Services Grid
```css
/* Current services layout */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```

### Section Spacing
Adjust spacing between sections:

```css
/* Increase section padding */
.section {
    padding: 8rem 0; /* Default: 6rem 0 */
}

/* Decrease section padding */
.section {
    padding: 4rem 0;
}
```

---

## 🔍 SEO Content Customization

### Meta Tags for Each Page

Update meta tags in all HTML files:

```html
<!-- Primary SEO Meta Tags -->
<title>Page Title | Your Company | Your City</title>
<meta name="description" content="Unique page description (150-160 characters)">
<meta name="keywords" content="relevant, keywords, for, this, page">
<link rel="canonical" href="https://yourdomain.com/page-url.html">
```

### Schema Markup Customization

#### Business Information (index.html)
```json
{
    "@context": "https://schema.org",
    "@type": "ArchitecturalService",
    "name": "Your Company Name",
    "description": "Your company description",
    "url": "https://yourdomain.com",
    "telephone": "+1-xxx-xxx-xxxx",
    "email": "contact@yourdomain.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street Address",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "Your ZIP Code",
        "addressCountry": "US"
    }
}
```

#### Team Member Schema (team pages)
```json
{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Team Member Name",
    "jobTitle": "Job Title",
    "description": "Team member bio",
    "image": "https://yourdomain.com/team-photo.jpg",
    "worksFor": {
        "@type": "Organization",
        "name": "Your Company Name"
    }
}
```

---

## 📱 Mobile Customization

### Responsive Breakpoints

The template includes responsive design with these breakpoints:

```css
/* Mobile First Approach */
/* Base styles for mobile (320px+) */

/* Tablet styles */
@media (min-width: 768px) {
    /* Tablet-specific styles */
}

/* Desktop styles */
@media (min-width: 1024px) {
    /* Desktop-specific styles */
}

/* Large desktop styles */
@media (min-width: 1200px) {
    /* Large screen styles */
}
```

### Mobile Menu Customization

To modify the mobile navigation:

```css
/* Change mobile menu background */
.nav-overlay {
    background: rgba(0, 0, 0, 0.95); /* Default black */
    background: rgba(255, 255, 255, 0.95); /* Change to white */
}

/* Modify menu animation */
.nav-overlay {
    transition: opacity 0.3s ease; /* Default */
    transition: opacity 0.5s ease; /* Slower animation */
}
```

---

## 🎯 Call-to-Action Customization

### Button Styles

The template includes several button styles:

```css
/* Primary button */
.submit-btn {
    background: var(--accent-color);
    color: white;
}

/* Outline button */
.submit-btn--outline {
    background: transparent;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
}
```

### Contact Form Customization

#### Form Fields
Add or remove form fields in the contact section:

```html
<!-- Add new field -->
<div class="form-group">
    <input type="text" id="company" name="company" placeholder="Company Name">
</div>

<!-- Add dropdown -->
<div class="form-group">
    <select id="budget" name="budget">
        <option value="">Select Budget Range</option>
        <option value="under-50k">Under $50,000</option>
        <option value="50k-100k">$50,000 - $100,000</option>
        <option value="over-100k">Over $100,000</option>
    </select>
</div>
```

#### Form Validation
Customize validation messages in `script.js`:

```javascript
// Custom validation messages
const validationMessages = {
    name: "Please enter your full name",
    email: "Please enter a valid email address",
    message: "Please describe your project"
};
```

---

## 🔧 Advanced Customization

### CSS Animation Customization

#### Scroll Animations
Modify fade-in animations:

```css
/* Faster animations */
.fade-in {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Slower animations */
.fade-in {
    transition: opacity 1s ease, transform 1s ease;
}

/* Different animation types */
.slide-up {
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
```

#### Hover Effects
Customize image hover effects:

```css
/* Stronger hover effect */
.project-image img {
    transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.1); /* Increase from default 1.05 */
}
```

### JavaScript Customization

#### Smooth Scrolling Speed
Modify scroll speed in `script.js`:

```javascript
// Faster scrolling
element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
});

// Custom scroll duration (requires additional library)
```

#### Loading Animation
Customize the page loading animation:

```css
/* Change loading animation color */
.loader-line {
    background: var(--accent-color);
}

/* Faster loading animation */
.loader-line::before {
    animation: loading 1s ease-in-out infinite; /* Default: 2s */
}
```

---

## 📋 Customization Checklist

### Essential Customizations
- [ ] Update all company information
- [ ] Replace placeholder images
- [ ] Customize color scheme
- [ ] Update contact details
- [ ] Modify service descriptions
- [ ] Add team member information
- [ ] Update portfolio projects

### SEO Customizations
- [ ] Update all meta titles and descriptions
- [ ] Customize schema markup
- [ ] Update canonical URLs
- [ ] Modify alt text for images
- [ ] Update sitemap.xml

### Design Customizations
- [ ] Choose brand colors
- [ ] Select typography
- [ ] Adjust spacing and layout
- [ ] Customize button styles
- [ ] Modify animations

### Advanced Customizations
- [ ] Add Google Analytics
- [ ] Configure contact form processing
- [ ] Set up redirects if needed
- [ ] Add additional pages
- [ ] Implement blog functionality (optional)

---

## 🆘 Common Customization Issues

### Color Changes Not Appearing
- **Issue**: CSS variables not updating
- **Solution**: Clear browser cache and ensure CSS is properly saved

### Images Not Responsive
- **Issue**: Custom images breaking layout
- **Solution**: Ensure images meet recommended dimensions and use responsive CSS

### Font Loading Issues
- **Issue**: Custom fonts not displaying
- **Solution**: Verify Google Fonts URL and check network connectivity

### Mobile Layout Problems
- **Issue**: Custom content not mobile-friendly
- **Solution**: Test changes on mobile devices and adjust media queries

---

**Your customized architecture website should now reflect your unique brand and business needs. Remember to test all changes across different devices and browsers.**

*For technical support or advanced customizations, refer to the code comments throughout the template files.*
